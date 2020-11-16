<div align="center">
  <img align="center" width="150" src="./docs/static/img/logo512.png">
</div>

A delightfully simple website and r&eacute;sum&eacute; generator for students, researchers, and engineers.

---

<div align="center">

| **Demo**  | **Documentation** |
| :-------: |:-------------:|
| [Example](https://profileio.lakshmananumolu.com) | [Documentation] |

</div>

---

<div align="center">

Try editing `_profile/profile_web.yml` on CodeSandbox

</div>

<div align="center">

[![Edit profileio](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/profileio-0gqoo?fontsize=14&hidenavigation=1&theme=dark&file=/_profile/profile_web.yml)

</div>

---

## Features

* Generate website from YAML based profile
* Generate r&eacute;sum&eacute; with different themes
* Schema used in YAML documents extends the schema from [JSON Resume](https://jsonresume.org)
* `gh-pages` branch is generated via github actions
* Branch `deployment_platforms` pushed by github actions can be used as production branch to deploy with [netlify]

## Prerequisites

* Basic knowledge on [YAML] format
* Write [Markdown] content

## File structure

```sh
profileio
├── _profile/
│   └── profile_web.yml
│   └── profile_resume.yml
│   └── images/      <-- Place images here
│   └── files/       <-- Place files here
│   └── *.md
├── ...
├── ...
```

Data from `profile_web.yml` will be used to generate website and `profile_resume.yml` will be used to generate pdf r&eacute;sum&eacute;.

Demo
---

  * Source: [profile_web.yml](https://github.com/acrlakshman/profileio/blob/main/_profile/profile_web.yml)
    * Result: :point_right: [Generated website](https://profileio.lakshmananumolu.com)
  * Source: [profile_resume.yml](https://github.com/acrlakshman/profileio/blob/main/_profile/profile_resume.yml)
    * Result: :point_right: [Generated R&eacute;sum&eacute;](https://profileio.lakshmananumolu.com/files/resume/resume.pdf)

How to start?
---

1. Fork the repository :point_right: [ProfileIO]
2. _(GitHub pages)_: If you want to deploy website to github pages, rename the repository to `<github username>.github.io`
3. (One time task): To allow profileio workflows do their job, please enable workflows via `Actions`. After enabling, if you want them to run before make any changes to `main` repo of your branch, click `Run workflow` for `Build and deploy`
   > Actions -> Build and deploy -> Run workflow -> Branch: main
4. Update contents of `_profile/` either using github IDE or by cloning your repository and pushing the changes
5. Wait until github actions complete
6. _(GitHub pages)_: Add `gh-pages` or `gh-pages-mac` as source for GitHub pages
   > Your repository -> settings -> GitHub pages -> Source
7. If you want to deploy to [netlify], use `deployment_platforms` as the production branch in netlify UI and `build` for the directory to publish
8. If you want to host website on your own server, you may use the directory `build/` after building the project

How it works?
---

* Once pushed to github, actions will build both web and pdf r&eacute;sum&eacute;
* Generated r&eacute;sum&eacute; will be linked to the website and displayed if `showResumeLink` is set in `profile_web.yml`
* Build files are pushed to `gh-pages`, `gh-pages-mac` branches
* Source repo, combined with r&eacute;sum&eacute; copied to `_public/files/resume` will be pushed to `deployment_platforms`

Which branch to use?
---

  * `gh-pages`
    * Contents of this branch will be built using Linux virtual environment. In most cases you may use this branch, and this is in general available quickly
    * If you need _Helvetica Neue_ font for the resume, you may use `gh-pages-mac`
  * `gh-pages-mac`
    * Mac virtual environment will be used to build your resume. With the current github workflow configuration, there is about 5 minutes delay when compared to `gh-pages` for the contents to be available under this branch
  * `deployment_platforms`
    * Use this branch if you want to deploy your website using netlify
    * You may also use this if you want github actions to compile your resume
    * This is almost same as the `main` branch with the exception of the compiled resume, which will be copied to _\_profile/files/resume_
    * In the current configuration this branch will be updated three times per workflow in the following sequence
      1. Contents of branch `main` will be made available for this branch
      2. Resume from Linux build will be pushed to this branch as soon as available
      3. Resume from Mac build will be pushed as soon as that step completes

If you find any bugs or need a feature, please [raise an issue](https://github.com/acrlakshman/profileio/issues), or submit a [PR](https://github.com/acrlakshman/profileio/pulls).

[ProfileIO]: https://github.com/acrlakshman/profileio
[Documentation]: https://acrlakshman.github.io/profileio
[YAML]: https://yaml.org/
[Markdown]: https://en.wikipedia.org/wiki/Markdown
[netlify]: https://netlify.app