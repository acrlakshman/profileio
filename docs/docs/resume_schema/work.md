---
id: work
title: "resume -> work:"
sidebar_label: work
---

```yaml
work:
  # required
  label: Experience

  # optional
  rank: 2

  # required
  list:
    - value:
        # required
        name: Walt Disney Animation Studios
        # required
        location: Burbank, CA
        # optional
        brief: ""
        # required
        position: Senior Software Engineer
        # optional
        url: "https://www.disneyanimation.com/"
        # optional
        startDate: "2019" # string (if you want to just enter numbers, enclose it in quotes)
        # optional
        endDate: Present  # string (if you want to just enter numbers, enclose it in quotes)
        active: true
        # required
        highlights:
          - brief: "" # optional
            detail: This is the sample text written for the demo of profileio
          - detail: Sample text written as part of the demo for profileio. Sample text written as part of the demo for profileio
      render: true # required
```