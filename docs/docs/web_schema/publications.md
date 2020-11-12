---
id: publications
title: "web -> publications:"
sidebar_label: publications
---

Field values for this section extends the schema as documented in http://web.mit.edu/rsi/www/pdfs/bibtex-format.pdf

Available publications types, for the key `type` (shown in the code snippet below):

* "article"
* "book"
* "thesis"
* "techreport"
* "incollection"
* "misc"
* "unpublished"

If the publication type is `thesis`, one of the following categories must be entered

* "phd"
* "master"
* "bachelors"

```yaml
publications:
  # required
  label: Publications

  # optional
  rank: 3

  # optional (maximum items to render in homepage for website)
  maxItemsToRender: 3 # If this is not provided, it defaults to 5 (src/config.ts)

  # required
  list:
    - value:
        # required
        type: article
        # required
        author: "**Author I**, Author II"
        # required
        title: "Made-up title of an article for ProfileIO' demo"
        # required
        journal: Journal of Computational Physics
        # required
        volume: 353 # Must not enclose in quotes, this is a number
        # required
        year: 2018 # Must not enclose in quotes, this is a number
        # required
        number: 0 # Must not enclose in quotes, this is a number
        # required
        pages: 377-406 # string (if you want to just enter numbers, enclose it in quotes)
        # optional
        thumbnail: gals_phase_change.png

        # optional
        # If webPage is not provided, then url will be linked in the homepage for this project
        url: https://www.sciencedirect.com/science/article/pii/S0021999117307696

        # optional
        webPage:
          slug: levelset-phasechange
          detail: publications/levelset-phasechange.md # if the content is empty, "url" will be linked in the homepage for the project
      render: true # required

    - value:
        # required
        type: book
        # required
        author: "Author I, **Author II**, and Author III"
        # required
        title: "Sample title of a book made-up to give demo for profileio"
        # optional
        series: "Encyclopedia of Two-Phase Heat Transfer and Flow"
        # optional
        volume: 3 # Must not enclose in quotes, this is a number
        # required
        publisher: World Scientific
        # required
        address: ''
        # required
        year: 2018 # Must not enclose in quotes, this is a number
        # optional
        thumbnail: dns_phasechange.png

        # optional
        # If webPage is not provided, then url will be linked in the homepage for this project
        url: https://www.worldscientific.com/doi/abs/10.1142/9789813229440_0008
      render: true # required
```