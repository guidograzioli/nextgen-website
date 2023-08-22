---
title: Getting started
description: Getting started with Ansible Middleware
weight: 30
---
{{% pageinfo %}}
You can use the Ansible collections to automate the installation and configuration of upstream middleware (Runtimes) and Red Hat Application Services ([Red Hat Runtimes](https://www.redhat.com/en/products/runtimes)).
{{% /pageinfo %}}

## Overview

Welcome! We are excited that you would like to learn more about the capabilities provided by Ansible Middleware. This tutorial will walk you through the steps  to get up to speed quickly including

- Setting up the required tooling on a local machine.
- Getting familiar with Execution Environments.
- Setting up an inventory
- Deploying an instance of Wildfly
- Validating the deployment

Before you get to the hands-on part of the guide, you should become familiar with Ansible constructs, such as collections, controller nodes and Execution Environments.

## What is a control node?

A [control node](https://docs.ansible.com/ansible/latest/network/getting_started/basic_concepts.html#control-node) is a machine from which we would like to push the configurations to the managed nodes/hosts. Managed nodes are target instances that we would like to configure and can be defined under inventory. An [inventory](https://docs.ansible.com/ansible/latest/network/getting_started/basic_concepts.html#inventory) is a list of nodes provided by one or more sources. It can be in INI or YAML formats. An [example](https://docs.ansible.com/ansible/latest/inventory_guide/intro_inventory.html#hosts-in-multiple-groups) of inventory with hosts with multiple groups.

## What is an ansible collection?

[Collections](https://docs.ansible.com/ansible/latest/collections_guide/index.html#using-ansible-collections) are a distribution format for Ansible content that can include playbooks, roles, modules, and plugins. By default while installing collections using ansible-galaxy collection install we are referring to the public [Galaxy server](https://galaxy.ansible.com). However, we can configure a different galaxy server, like [Ansible Automation Hub](https://www.ansible.com/products/automation-hub), by providing the details of the server in the  ansible.cfg file. You can follow this [guide](https://docs.ansible.com/ansible/latest/galaxy/user_guide.html#downloading-a-collection-from-automation-hub) which describes the process.

## What is an Execution Environment?

An [Execution Environment](https://docs.ansible.com/automation-controller/latest/html/userguide/execution_environments.html) is a container image that is preloaded with system-level dependencies and collections that allow users to run jobs without actually setting them up. These execution environments are created using [ansible-navigator](https://www.ansible.com/products/automation-hub).
