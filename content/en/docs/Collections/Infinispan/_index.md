---
title: Infinispan
weight: 20
---
## Welcome to Infinispan Collection documentation

This an Ansible collection dedicated to [Infinispan](https://infinispan.org/).

Note that Infinispan can be used as remote caches for other software, such as [Keycloak](https://www.keycloak.org/) or [Wildfly](https://https://www.wildfly.org/).

> **_NOTE:_** For Red Hat customers, this collection is also available on [Red Hat Ansible Automation Hub](https://www.ansible.com/products/automation-hub) (```redhat.datagrid```). This collection can be used to managed the Red Hat product [Red Hat DataGrid](https://www.redhat.com/en/technologies/jboss-middleware/data-grid), which can also be used as remote caches for [Red Hat Single Sign-On](https://access.redhat.com/products/red-hat-single-sign-on) or [Red Hat JBoss EAP](https://www.redhat.com/en/technologies/jboss-middleware/application-platform).

<!--start requires_ansible-->
## Ansible version compatibility

This collection has been tested against following Ansible versions: **>=2.9.10**.

Plugins and modules within a collection may be tested with only specific Ansible versions. A collection may contain metadata that identifies these versions.
<!--end requires_ansible-->

## Installation and Usage

<!--start galaxy_download -->
### Installing the Collection from Ansible Galaxy

Before using the collection, you need to install it with the Ansible Galaxy CLI:

    ansible-galaxy collection install middleware_automation.infinispan

<!--end galaxy_download -->

You can also include it in a `requirements.yml` file and install it via `ansible-galaxy collection install -r requirements.yml`, using the format:

```yaml
---
collections:
  - name: middleware_automation.infinispan
```

### Build and install locally

Clone the repository, checkout the tag you want to build, or pick the main branch for the development version; then:

    ansible-galaxy collection build .
    ansible-galaxy collection install middleware_automation-amq-*.tar.gz

### Dependencies

#### Ansible collections:

* [middleware_automation.common](https://github.com/ansible-middleware/common)
* [ansible.posix](https://docs.ansible.com/ansible/latest/collections/ansible/posix/index.html)

#### Python:

The infinispan collection also depends on the following python packages to be present on the controller host:

* lxml
* jmespath

A requirement file is provided to install:

    pip install -r requirements.txt

### Included roles

* [`infinispan`](https://github.com/ansible-middleware/infinispan/tree/main/roles/infinispan): performs an installation of Infinispan or DataGrid nodes or cluster, with configuration of static caches.
* [`infinispan_cache`](https://github.com/ansible-middleware/infinispan/tree/main/roles/infinispan_cache): creates Infinispan or DataGrid caches at runtime.

<!--start support -->
<!--end support -->

## License

Apache License v2.0 or later

See [LICENSE](LICENSE) to view the full text.