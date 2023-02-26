---
id: overview
title: Schema for website
sidebar_label: Overview
---

:::note

[ProfileIO] extends [jsonresume/resume-cli](https://github.com/jsonresume/resume-cli)'s schema and uses it for web and resume generation with variations to _custom_ section.

:::

:::important

While trying to use the same content from profile_web.yml for r&eacute;sum&eacute;, make sure to remove markdown formats.

:::

[ProfileIO] recognizes the following scalars as primary profile fields, whose collections will be used to parse user's data. Once content for `profile_web.yml` is filled, you can copy it to `profile_resume.yml` with the exception of `custom` field. Web and r&eacute;sum&eacute; parsers share similar schema for most of the fields.

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

  :::note

  In its current form of [ProfileIO], the `rank` in the `custom` section will not have any effect while generating the website. All fields in `custom` section will be rendered at the bottom of the page for **website** and in the order they are included with in this section. For **r&eacute;sum&eacute;**, the `rank` in `custom` section works as expected.

  :::

[ProfileIO]: https://github.com/acrlakshman/profileio