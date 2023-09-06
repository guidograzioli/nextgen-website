---
title: Ansible Middleware
usecases:
  - title: Installation/Provisioning
    icon: installation.png
    description: >
      Facilitate the installation and configuration of Red Hat Application Services via best practices and guidelines. Enforce what is currently running, where its deployed and the current state.
  - title: Lifecycle Management
    icon: lifecycle.png
    description: >
      Take control of day 2 activities and beyond, like upgrades, patches and bug fixes to enable consistency and strengthen security across your fleet.
  - title: Reporting and Monitoring
    icon: reporting.png
    description: >
      Understand what is currently running, where its deployed and the current state.
tech:
  - title: Ansible
    icon: ansible.png
    description: >
      [Ansible](https://www.ansible.com/overview/how-ansible-works) is an open source, command-line IT automation software application written in Python. It can configure systems, deploy software, and orchestrate advanced workflows to support application deployment, system updates, and more.
  - title: Red Hat Runtimes
    icon: runtimes.png
    description: >
      [Red Hat Runtimes](https://www.redhat.com/en/products/runtimes) is a set of products, tools, and components for developing and maintaining cloud-native applications.
---

{{< blocks/cover title="Ansible Middleware" image_anchor="top" height="full" >}}
<a class="btn btn-lg btn-primary me-3 mb-4" href="/docs/">
  Learn More <i class="fas fa-arrow-alt-circle-right ms-2"></i>
</a>
<a class="btn btn-lg btn-secondary me-3 mb-4" href="https://developers.redhat.com/topics/ansible-automation-applications-and-services">
  Download <i class="fab fa-github ms-2 "></i>
</a>
<p class="lead mt-5"><b>Ansible based automation for Red Hat Application Services and upstream middleware projects</b></p>
{{< blocks/link-down color="info" >}}
{{< /blocks/cover >}}


{{% blocks/section color="primary" %}}
Discover the benefits of using [Ansible Automation Platform](https://www.redhat.com/en/technologies/management/ansible) and [Red Hat Application Services](https://developers.redhat.com/cheat-sheets/red-hat-openshift-application-services-cheat-sheet) to build, deploy, and manage multi-cloud application infrastructure at scale. Red Hat Application Services includes a number of Red Hat products including Red Hat [JBoss Enterprise Application Platform](https://developers.redhat.com/cheat-sheets/red-hat-openshift-application-services-cheat-sheet) (WildFly), Red Hat Data Grid (Infinispan), [Red Hat’s single-sign on technology](https://access.redhat.com/products/red-hat-single-sign-on/) (Keycloak), [Red Hat AMQ](https://developers.redhat.com/node/214105) (Kafka and Broker) and more.

- **Consistent**: Ensure reliability with a consistent development and deployment model to create, modify, deploy, and manage business apps in an automated fashion.
- **Flexible**: Implement simple, single-site installations on a flexible platform, with the potential to grow across geographies and platforms.
- **Repeatable**: Write once and quickly install, upgrade, rollback, configure, and scale without manual intervention.
- **Reliable**: Operate and manage large-scale JBoss infrastructure without the risk of manual errors.

{{% /blocks/section %}}

<!-- UseCases -->
{{< home/usecases >}}
{{< home/tech >}}

{{% blocks/lead %}}

<h2 align="left">Getting Started</h2>

<img class="o-feature__icon" src="/img/gettingstarted.png" width="90" height="100">

Getting up to speed with Ansible Middleware is easy and only requires a few steps. The below guide will provide you step by step process to get statred.<br>

<a class="btn btn-lg btn-primary me-3 mb-4" href="/examples/getting_started/">
  Getting Started Guide <i class="fas fa-arrow-alt-circle-right ms-2"></i>
</a>
<a class="btn btn-lg btn-primary me-3 mb-4" href="/collections/">
  View the Collections <i class="fas fa-arrow-alt-circle-right ms-2"></i>
</a>
<a class="btn btn-lg btn-primary me-3 mb-4" href="/docs/">
  Explore the Documentation <i class="fas fa-arrow-alt-circle-right ms-2"></i>
</a>
{{% /blocks/lead%}}


{{% blocks/section color="primary" type="row" %}}
{{% blocks/feature icon="fa-lightbulb" title="Ansible Galaxy" %}}
[middleware-automation](https://galaxy.ansible.com/middleware_automation) on Ansible Galaxy

Please follow this space for updates!
{{% /blocks/feature %}}


{{% blocks/feature icon="fab fa-github" title="Contributions welcome!" url="https://github.com/ansible-middleware" %}}
We do a Pull Request contributions workflow on [GitHub](https://github.com/ansible-middleware). New users are always welcome!
{{% /blocks/feature %}}


{{% blocks/feature icon="fab fa-twitter" title="Follow us on Twitter!" url="https://twitter.com/redhat" %}}
For announcement of latest features etc.
{{% /blocks/feature %}}

{{% /blocks/section %}}
