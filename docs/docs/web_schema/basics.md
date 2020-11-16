---
id: basics
title: "web -> basics:"
sidebar_label: basics
---

Primary scalars/fields in this section include

```yaml
basics:
  # required
  name:
      ...
  # required
  label:
      ...
  # required
  image:
      ...
  # required
  email:
      ...
  # optional
  phone:
      ...
  # required
  url:
      ...
  # required
  # (For an example of how this is rendered, please take a look at https://profileio.lakshmananumolu.com/)
  summary:
      ...
  # optional
  location:
      ...
  # optional
  profiles:
      ...
```

### `name:`

```yaml
basics:
  # required
  name:
    value: Lakshmi Vera
    render: true
```

### `label:`

```yaml
basics:
  # required
  label:
    value: Senior Software Engineer
    render: true
```

### `image:`

```yaml
basics:
  # required
  image:
    value: pic.png
    render: true
```

### `email:`

```yaml
basics:
  # required
  email:
    value: anumolu@uwalumni.com
    render: true
```

### `phone:`

```yaml
basics:
  # optional
  phone:
    value: ''  # string (if you want to just enter numbers, enclose it in quotes)
    render: false
```

### `url:`

```yaml
basics:
  # required
  url:
    value: 'https://profileio.lakshmananumolu.com'
    render: false
```

### `summary:`

```yaml
basics:
  # required
  # (For an example of how this is rendered, please take a look at https://profileio.lakshmananumolu.com/)
  summary:
    label: About me
    value: summary.md   # Enter the markdown content here or in a file. File path is relative to `_profile/`
    render: true
```

### `location:`

```yaml
basics:
  # optional
  location:
    value:
      address: Street Name
      postalCode: WI XXXXX
      city: Madison
      countryName: USA
      region: Wisconsin
    render: false
```

### `profiles:`

Currently available values for `network` are:

* "googlescholar"
* "github"
* "gitlab"
* "linkedin"
* "youtube"
* "vimeo"
* "twitter"
* "facebook"
* "twitch"

```yaml
basics:
  # optional
  profiles:
    - value:
        network: googlescholar
        url: https://scholar.google.com/citations?user=VcGv5cEAAAAJ&hl=en
      render: true
    - value: # if username is provided but not url, then we generate the url.
        network: github
        username: acrlakshman
      render: true
    - value:
        network: linkedin
        url: https://www.linkedin.com/in/lakshmananumolu/
      render: true
    - value:
        network: twitter
        username: acrlakshman
        url: https://twitter.com/acrlakshman
      render: true
    - value:
        network: vimeo
        url: https://vimeo.com/user24179204
      render: false
```