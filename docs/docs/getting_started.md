---
id: getting_started
title: Getting Started
---

[ProfileIO]'s project structure and few details:

```sh
profileio
│
├── _profile/               <- Folder to hold profile information
│   └── profile_web.yml
│   └── profile_resume.yml
│   └── images/             <- Place images here
│   └── files/              <- Place files here
│   └── *.md
│
├── resume/                 <- sub-project to generate resume from details in profile_resume.yml
│
├── src/
│   └── auxiliaries         <- Helper functions
│   └── components
│       └── themes          <- Theme specific components
│           └── basic
│   └── icons
│   └── preprocessors
│   └── reducers
│   └── types
│
├── scripts/
```

Basic information:
---

* :point_right: [How to start?](quick_start.md#how-to-start)
* :point_right: [How it works?](quick_start.md#how-it-works)
* :point_right: [Which branch to use?](quick_start.md#which-branch-to-use)

[ProfileIO]: https://github.com/acrlakshman/profileio