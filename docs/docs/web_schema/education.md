---
id: education
title: "web -> education:"
sidebar_label: education
---

```yaml
education:
  # required
  label: Education

  # optional
  rank: 1

  # required
  list:
    - value:
        # optional
        institution: University of Wisconsin-Madison
        # optional
        url: https://wisc.edu
        # optional
        major: Computer Science
        # optional
        minor: ''
        # optional
        degree: Ph.D.
        # optional
        grade: 3.9 # Must not enclose in quotes, this is a number
        # optional
        gradeTotal: 4.0 # Must not enclose in quotes, this is a number
        # optional
        courses:
          - CS521 - Computer Graphics
          - CS801 - HPC
      render: true # required
```