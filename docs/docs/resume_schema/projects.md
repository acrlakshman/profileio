---
id: projects
title: "resume -> projects:"
sidebar_label: projects
---

```yaml
projects:
  # required
  label: "Projects"

  # optional
  rank: 4

  # optional (maximum items to render in homepage for website)
  maxItemsToRender: 3 # If this is not provided, it defaults to 5 (src/config.ts)

  # required
  list:
    - value:
        # required
        name: ProfileIO
        # required
        description: "Delightfully simple website and resume generator for students, researchers, and engineers"
        # optional (does not support markdown)
        team: "with Lakshman Anumolu"
        # optional
        note: ""
        # optional
        thumbnail: profileio.png
        # optional
        highlights:
          - brief: ""
            detail: Website and resume generator via YAML
        # optional
        keywords:
          - resume
          - website
          - YAML
          - markdown
        # optional
        startDate: '2020' # string (if you want to just enter numbers, enclose it in quotes)
        # optional
        endDate: Present

        # optional
        # If webPage is not provided, then url will be linked in the homepage for this project
        url: https://github.com/acrlakshman/profileio

        # optional
        roles:
          - Architect
          - Developer
        # optional
        type: application
        # optional
        webPage:
          slug: profileio
          detail: project/profileio.md # if the content is empty, "url" will be linked in the homepage for the project
      render: true # required
```