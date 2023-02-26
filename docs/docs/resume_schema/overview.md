---
id: overview
title: Schema for resume
sidebar_label: Overview
---

:::important

1. Both r&eacute;sum&eacute; and web shares identical schema in [ProfileIO] with the exception of _custom_ section
2. Unlike its web cousin, the ranking for fields in _custom_ section will effect all fields in the r&eacute;sum&eacute;
3. While trying to use the same content from profile_web.yml for r&eacute;sum&eacute;, make sure to remove markdown formats.

:::

[ProfileIO] recognizes the following scalars as primary profile fields, whose collections will be used to parse user's data. Once content for `profile_resume.yml` is filled, you can copy it to `profile_web.yml` with the exception of `custom` field. Web and r&eacute;sum&eacute; parsers share similar schema for most of the fields.

```yaml
config:
    ...
basics:
    ...
work:
    ...
education:
    ...
projects:
    ...
publications:
    ...
awards:
    ...
gallery:
    ...
skills:
    ...
languages:
    ...
interests:
    ...
references:
    ...
custom:
    ...
```

In this documentation, we will refer above scalars as sections which naturally translates to certain part of a resume (e.g. section detailing experience/work). In general, most of the fields have the following two scalars that determine the data and decide whether to render the data.
   * `value`: A collection, specific to the field in which it is used
   * `render`: Tells the parser whether the data in the value needs to be rendered or not

   :::note

   Irrespective of the value used for `render`, a field will only be rendered if the theme supports to use it.

   :::

Each section primarily have two scalar fields, `label`, `rank`:
  * `label`: Name of the section that needs to be displayed in both website and r&eacute;sum&eacute;
  * `rank`: Value of this field determines the order in which the content will be displayed in both website and r&eacute;sum&eacute;

[ProfileIO]: https://github.com/acrlakshman/profileio