---
id: config
title: "resume -> config:"
sidebar_label: config
---

In addition to the fields that are available to render website, there is an additional `meta` scalar available as part of `theme`'s collection to control the layout of the r&eacute;sum&eacute;

**Available themes**

* `basic`
* `panther`

```yaml
config:
   # optional
   homepage: "https://profileio.lakshmananumolu.com"

   # required
   theme:
      value: panther
      render: true
      # optional
      meta:
         # Toggle page numbers in the resume
         showPageNumbers: true
         # Toggle lines under section headers. Not being used by all themes.
         hideSectionLines: false
         # Control the size of the name
         pantherHeaderNameFontSize: 45
         # Control the size of the width where name is displayed in panther's theme
         pantherHeaderColumnOneWidth: 0.6
         # Control the size of the width where email, url, phone number are displayed in panther's theme
         pantherHeaderColumnTwoWidth: 0.4

   # optional
   analytics:
      ga:
      trackingId: ""
      enable: true

   # optional
   meta:
      showResumeLink: true
```