---
title: Wildfly Collection
date: 2023-07-19
description: >
  Getting started with Ansible Middileware's Wildfly collection.
---

<figure class="video_container">
  <iframe width="600" height="350" src="https://www.youtube.com/embed/3zzkGiVW7p8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</figure>

### Local machine setup:

First, let’s set up the required dependencies on the local machine. Start by installing Ansible on the local machine using your preferred method. See the Installing [Ansible](https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html#installation-guide) section of the documentation for the available options.

For this guide, we are using an [Execution Environment](https://docs.ansible.com/automation-controller/latest/html/userguide/execution_environments.html) and the [ansible-navigator](https://ansible-navigator.readthedocs.io/en/latest/installation/#linux) utility to perform the automation and provisioning of the Wildfly instance. Install and configure ansible-navigator based on the documentation for your target operating system. To perform the execution of the automation, the [ansible-middleware-ee](https://quay.io/repository/ansible-middleware/ansible-middleware-ee) Execution Environment provided by the Ansible Middleware team includes all of the Ansible Middleware collections and their dependencies, so there is no need to install any additional components on the control node. We would be using this execution environment as it already includes all of our latest collections so we don’t have to set it up again. 

Once ansible-navigator is installed, we can pass parameters –eei or --execution-environment-image with the name of the image to the ansible-navigator to specify the image we would like to use. Execute the following command to browse all of the collections that are included within the Execution Environment Image:

```
$ ansible-navigator --eei quay.io/ansible-middleware/ansible-middleware-ee:latest collections

```

In the following output, we see the list of all the collections available in our execution environment.

```
Name                                      Version      Shadowed Type      Path
 0│ansible.builtin                           2.12.5.post0 False    contained /usr/local/lib/python3.8/site-packages/ansible
 1│ansible.netcommon                         3.0.0        False    contained /usr/share/ansible/collections/ansible_collections/ansible
 2│ansible.posix                             1.4.0        False    contained /usr/share/ansible/collections/ansible_collections/ansible
 3│ansible.utils                             2.6.1        False    contained /usr/share/ansible/collections/ansible_collections/ansible
 4│community.general                         5.0.0        False    contained /usr/share/ansible/collections/ansible_collections/communi
 5│middleware_automation.amq                 0.0.2        False    contained /usr/share/ansible/collections/ansible_collections/middlew
 6│middleware_automation.infinispan          1.0.3        False    contained /usr/share/ansible/collections/ansible_collections/middlew
 7│middleware_automation.jcliff              0.0.21       False    contained /usr/share/ansible/collections/ansible_collections/middlew
 8│middleware_automation.jws                 0.0.3        False    contained /usr/share/ansible/collections/ansible_collections/middlew
 9│middleware_automation.keycloak            1.0.4        False    contained /usr/share/ansible/collections/ansible_collections/middlew
10│middleware_automation.redhat_csp_download 1.2.2        False    contained /usr/share/ansible/collections/ansible_collections/middlew
11│middleware_automation.wildfly             1.0.2        False    contained /usr/share/ansible/collections/ansible_collections/middlew
```

### Setting up the inventory:

A target node running RHEL 8 Virtual Machine is required as the destination for whichWildfly can be deployed. Create an [inventory](https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html#how-to-build-your-inventory) file on the local machine, which includes the hostname of the RHEL 8 instance, the IP address, and login information for Ansible to connect. SSH authentication is being used to communicate with the target node and the location of the SSH private key on the controller node must be specified in the inventory. The inventory should look similar to the following:

```
[wildfly]
wildfly-0 ansible_host=10.0.148.43 ansible_user=root ansible_ssh_private_key_file=”path to your private key”
```

### Installing and configuring WildFly:

Here is our Ansible Playbook wildfly.yml for installing and configuring WildFly:


```
---
- name: "Installation and configuration"
  hosts: wildfly
  vars:
   wildfly_install_workdir: '/opt'
   install_name: "wildfly"
   wildfly_user: "{{ install_name }}"
   wildfly_config_base: standalone-ha.xml
   wildfly_version: "26.0.0.Final"
   wildfly_home: "{{ wildfly_install_workdir }}/{{ install_name }}-{{ wildfly_version }}"
  collections:
   - middleware_automation.wildfly
  tasks:
   - name: Include wildfly role
     ansible.builtin.include_role:
       name: middleware_automation.wildfly.wildfly_install
   - name: "Set up for Wildfly instance"
     include_role:
       name: middleware_automation.wildfly.wildfly_systemd
     vars:
       wildfly_config_base: 'standalone-ha.xml'
       wildfly_basedir_prefix: "/opt/{{ install_name }}"
       wildfly_config_name: "{{ install_name }}"
       wildfly_instance_name: "{{ install_name }}"
       service_systemd_env_file: "/etc/{{ install_name }}.conf"
       service_systemd_conf_file: "/usr/lib/systemd/system/{{ install_name }}.service"
```

### Run the Ansible Playbook

Now, run the Ansible Playbook using ansible-navigator and the execution environment to configure WildFly on the remote node as follows:

```
$ ansible-navigator --eei quay.io/ansible-middleware/ansible-middleware-ee:latest run wildfly.yml -i inventory -m stdout --become

```

Once the playbook has completed executing, ssh into the instance and check the status and health check of the deployed WildFly service. We can do so with the following command:


```
$ ssh root@10.0.148.43 curl http://127.0.0.1:9990/health

```

The following code snippet shows the output:

```
[{"name" : "boot-errors", "outcome" : true},{"name" : "deployments-status", "outcome" : true},{"name" : "server-state", "outcome" : true, "data" : [{ "value" : "running" }]},{"name" : "live-server", "outcome" : true},{"name" : "started-server", "outcome" : true},{ "outcome" : true }]

```

Check the status of the WildFly service using the following command:

```
$ ssh root@10.0.148.43 systemctl status wildfly

```

In the following output, we can see the WildFly service is running without any errors:


```
● wildfly.service - JBoss EAP (standalone mode)
   Loaded: loaded (/usr/lib/systemd/system/wildfly.service; enabled; vendor preset: disabled)
   Active: active (running) since Thu 2023-03-02 18:02:44 EST; 4 days ago
 Main PID: 52667 (standalone.sh)
    Tasks: 45 (limit: 23417)
   Memory: 263.6M
   CGroup: /system.slice/wildfly.service
           ├─52667 /bin/sh /opt/wildfly-26.0.0.Final/bin/standalone.sh -c wildfly.xml -b 0.0.0.0 -Djboss.server.config.dir=/opt/wildfly>
           └─52741 java -D[Standalone] -server -Xms64m -Xmx512m -XX:MetaspaceSize=96M -XX:MaxMetaspaceSize=256m -Djava.net.preferIPv4St>

Mar 02 18:02:47 wildfly-0 standalone.sh[52741]: 18:02:47,802 INFO  [org.jboss.modcluster] (ServerService Thread Pool -- 84) MODCLUSTER0>
Mar 02 18:02:47 wildfly-0 standalone.sh[52741]: 18:02:47,829 INFO  [org.wildfly.extension.undertow] (MSC service thread 1-1) WFLYUT0006>
Mar 02 18:02:47 wildfly-0 standalone.sh[52741]: 18:02:47,864 INFO  [org.jboss.as.connector.subsystems.datasources] (MSC service thread >
Mar 02 18:02:47 wildfly-0 standalone.sh[52741]: 18:02:47,953 INFO  [org.jboss.as.patching] (MSC service thread 1-2) WFLYPAT0050: WildFl>
Mar 02 18:02:47 wildfly-0 standalone.sh[52741]: 18:02:47,988 INFO  [org.jboss.as.server.deployment.scanner] (MSC service thread 1-1) WF>
Mar 02 18:02:48 wildfly-0 standalone.sh[52741]: 18:02:48,002 INFO  [org.jboss.ws.common.management] (MSC service thread 1-3) JBWS022052>
Mar 02 18:02:48 wildfly-0 standalone.sh[52741]: 18:02:48,179 INFO  [org.jboss.as.server] (Controller Boot Thread) WFLYSRV0212: Resuming>
Mar 02 18:02:48 wildfly-0 standalone.sh[52741]: 18:02:48,182 INFO  [org.jboss.as] (Controller Boot Thread) WFLYSRV0025: WildFly Full 26>
Mar 02 18:02:48 wildfly-0 standalone.sh[52741]: 18:02:48,183 INFO  [org.jboss.as] (Controller Boot Thread) WFLYSRV0060: Http management>
Mar 02 18:02:48 wildfly-0 standalone.sh[52741]: 18:02:48,183 INFO  [org.jboss.as] (Controller Boot Thread) WFLYSRV0051: Admin console l>
lines 1-20/20 (END)

```

We can also validate the instance using our [validate.yml](https://github.com/ansible-middleware/wildfly-cluster-demo/blob/main/validate.yml). This will check if the instance is running and if the WildFly port is accessible for use.

In this tutorial, we demonstrated how to set up and provision an instance of WildFly using the Ansible Content Collections for WildFly. We can also deploy JBoss EAP instead of the open-source WildFly using the same collection. For more information on deploying JBoss EAP refer to [Automate and deploy a JBoss EAP cluster](https://developers.redhat.com/articles/2022/02/08/automate-and-deploy-jboss-eap-cluster-ansible#) with Ansible. To deploy WildFly or JBoss EAP on multiple instances, you can refer to our [wildfly-cluster-demo](https://github.com/ansible-middleware/wildfly-cluster-demo).