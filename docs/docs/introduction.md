---
id: introduction
title: Introduction
sidebar_label: Introduction
---

This project was started with an intention to provide an easy way for students and researchers to <u>**create and deploy**</u> a delightfully simple website and a r&eacute;sum&eacute; based on their profile.

Due to the structured nature of the various jobs and achievements by students or researchers, many developers naturally extended an individual's career fields to create a format with predefined fields (e.g. work, education, publications, skills, etc.) either in [YAML], [json] formats or as html elements and made several web applications to build r&eacute;sum&eacute;s. Almost all of the r&eacute;sum&eacute; builders available online, or the projects that generate r&eacute;sum&eacute; from YAML (e.g. [basmos/cv](https://github.com/bamos/cv)), from json (e.g. [prat0318/json_resume](https://github.com/prat0318/json_resume)), or those that aim to create a standard format (e.g. [jsonresume/resume-cli](https://github.com/jsonresume/resume-cli)) successfully provided schemas and demonstrated with working solutions.

:::note

Due to the wide use of [JSON Resume](https://jsonresume.org/) schema, [ProfileIO]'s adopted and extended it in YAML format.

:::

**Unlike most of the existing projects, [ProfileIO] aims to generate website and r&eacute;sum&eacute; independently along with providing the required content to seemlessly deploy your website (with automatically linked r&eacute;sum&eacute;) using GitHub pages or netlify.**

Things to watch out for
---

In its current form, a basic knowledge of [YAML] is expected from the user, in order to edit `profile_web.yml` and `profile_resume.yml` files. Few web applications will be made available in future to make it easy for beginners to populate YAML document.

[ProfileIO]: https://github.com/acrlakshman/profileio
[YAML]: https://yaml.org/
[json]: https://www.json.org/json-en.html