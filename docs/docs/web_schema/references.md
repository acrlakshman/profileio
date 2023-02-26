---
id: references
title: "web -> references:"
sidebar_label: references
---

```yaml
references:
  # required
  label: References

  # optional
  rank: 9

  # required
  list:
    - value:
        # required
        name: John Doe
        # required
        title: Prof.
        # required
        affiliation: University Name
        # optional
        address: XXXX University Ave
        # optional
        postalCode: WI XXXXX
        # optional
        city: City
        # optional
        countryName: USA
        # optional
        region: State
        phoneNumber: '1111111111' # string (if you want to just enter numbers, enclose it in quotes)
        # required
        email: user@domain.edu
      render: false # required
```