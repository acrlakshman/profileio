---
id: custom
title: "resume -> custom:"
sidebar_label: custom
---

:::important

Collection for the `custom` scalar in the YAML document for r&eacute;sum&eacute; is different from its web counterpart.

:::

While using content from `profile_web.yml` to `profile_resume.yml` or vice versa, this section should not be copied across. Different schemas are employed for this section to render website and r&eacute;sum&eacute;.

[ProfileIO] provides ability to add multiple sections of type `work`, `education`, `projects`, `publications`, `awards`, `skills`, `languages`, `interests`, `references`. This can be useful in few situations, for e.x., a new section with label `Vocational training` can be added which follows the same structure as `work`.

In addition to providing the ability to add standard section types, _custom_ section provides a `list` type, which is a simple itemized list and can be used for almost all of the resume sections with few exceptions.

Example `custom` section is provided below.

:::important

The value used for `type` must be used as the scalar name to provide content to [ProfileIO]

:::

Available values for `type`:

* "work"
* "education"
* "projects"
* "publications"
* "awards"
* "skills"
* "languages"
* "interests"
* "references"
* "list"

```yaml
custom:
  # Create patents section using `list` type
  - label: Patents # required
    # optional
    rank: 2

    # required
    type: list
    list: # <- Name of this scalar should match the value of `type` above.
      - value:
          # optional
          # text in brief will be displayed in bold.
          brief: "Physics based simulations:"
          # required
          detail: "Level set method I for artistic simulations (9999999998). Level set method II for artistic simulations (9999999999)."
        render: true # required
      - value:
          detail: "Experimental Physics: Inventing so and so method for so and so (9999999997)"
        render: true
    # optional
    meta:
      listStyleType: "none" # no bullets

  # Skills
  - label: Skills
    rank: 9
    type: list
    list:
      - value:
          brief: "Programming Languages:"
          detail: "Fluent: C++, C, Go. Experienced: Python, JavaScript, PHP"
        render: true
      - value:
          brief: "Libraries:"
          detail: "Eigen, NumPy, MPI, etc."
        render: true
      - value:
          brief: "Tools:"
          detail: "CMake, gdb, valgrind, etc."
        render: true
    meta:
      listStyleType: "none"

  # Add `Vocational Training` section as "work" type.
  - label: Vocational Training
    rank: 5
    type: "work"
    work:
      - value:
          name: Animation Studios
          location: ""
          brief: ""
          position: Trainee
          url: ""
          startDate: "" # string
          endDate: "2014" # string
          active: true
          highlights:
            - detail: This is the sample text written for the demo of profileio
            - detail: Sample text written as part of the demo for profileio
        render: true
```

:::note

Each block sequence of `custom` comes accepts a `meta` field, through which user can control the section style

:::

`meta`:
---

Available values

* `lineStyleType`
  * `none`
  * If this field is not provided, items are rendered as standard bullet points

```yaml
meta:
  # optional
  lineStyleType: "none"
```

[ProfileIO]: https://github.com/acrlakshman/profileio