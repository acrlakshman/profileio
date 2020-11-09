---
id: gallery
title: "resume -> gallery:"
sidebar_label: gallery
---

Available types

* "image"
* "video"

```yaml
gallery:
  # required
  label: Gallery

  # optional
  rank: 5

  # required
  list:
    - value:
        # required
        type: image
        # optional
        src: bmv_t.gif
        # optional (NOT USED by existing themes)
        caption:
          title: ProfileIO
          description: "Delightfully simple website and resume generator for students, researchers, and engineers"
      render: true # required
   - value:
        # required
        type: video
        # optional
        platform: youtube
        # optional
        videoId: CsZua1qI4Zc
      render: true # required
```