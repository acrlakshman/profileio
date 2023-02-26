---
id: custom
title: "web -> custom:"
sidebar_label: custom
---

In its current form [ProfileIO] generates website by rendering `custom` section after rendering all the other sections. The order of the contents in _custom_ section will follow the order in which they are entered.

```yaml
custom:
  # Since "value" is given, this section will be rendered in the homepage with the content of "value".
  # Since "webPage" is provided, this will also be rendered as another page under the value of "slug".
  - label: Blog Posts                          # required
    value: "View blog posts [here](blog)"      # optional
    webPage:                                   # optional
      slug: blog
      detail: custom/blog.md
    render: true                               # required

  # Since "value" is not given, this is not rendered in the homepage,
  # but rendered in the route "/blog/profileio"
  - label: ProfileIO                           # required
    webPage:                                   # optional
      slug: blog/profileio
      detail: custom/sample-code-snippets-2.md
    render: true                               # required

  # rendered in the homepage
  - label: Few Random Points About ProfileIO   # required
    value: custom/sample-code-snippets-1.md    # optional
    render: true                               # required
```