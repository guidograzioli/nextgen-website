---
title: Contribution Guidelines
weight: 50
description: How to contribute to the project
---
{{% pageinfo %}}
The capabilities provided by Ansible Middleware, much like the rest of Ansible’s featureset, are just the foundation for the possibilities that can be realized. Including the collections within your automation activities is easy and enables you to supercharge managing Red Hat Runtimes anywhere -- from the datacenter, to the edge, to the public cloud.
{{% /pageinfo %}}

## Contribution Guidelines
- All YAML files named with '.yml' extension
- Use spaces around jinja variables. {{ var }} over {{var}}
Variables that are internal to the role should be lowercase and start with the role name
- Keep roles self contained - Roles should avoid including tasks from other roles when possible
- Plays should do nothing more than include a list of roles except where pre_tasks and post_tasks are required when possible
- Separators - Use valid name, ie. underscores (e.g. my_role my_playbook) not dashes (my-role)
Paths - When defining paths, do not include trailing slashes (e.g. my_path: /foo not my_path: /foo/). When concatenating paths, follow the same convention (e.g. {{ my_path }}/bar not {{ my_path }}bar)
- Indentation - Use 2 spaces for each indent
vars/ vs defaults/ - internal or interpolated variables that don't need to change or be overridden by users go in vars/, those that a user would likely override, go under defaults/ directory
- All arguments have a specification in meta/argument_specs.yml
- All playbooks/roles should be focused on compatibility with Ansible Automation Platform controller


Interested in contributing to the Ansible Middleware project? Navigate to the [ansible-middleware](https://github.com/ansible-middleware) GitHub organization and join the community! 