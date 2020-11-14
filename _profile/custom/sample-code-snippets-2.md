## [ProfileIO](https://github.com/acrlakshman/profileio)

* [Documentation](https://acrlakshman.github.com/profileio)
* Highlights:
  * Generate website from YAML based profile
  * Generate r&eacute;sum&eacute; with different themes
  * Schema used in YAML documents extends the schema from [JSON Resume](https://jsonresume.org)
  * `gh-pages` branch is generated via github actions
  * Branch `deployment_platforms` pushed by github actions can be used as production branch to deploy with netlify

---

## Run locally

```sh
git clone https://github.com/acrlakshman/profileio

cd profileio
yarn && yarn start
```

---

## [profileio-resume](https://github.com/acrlakshman/profileio-resume)

How to use?

```sh
go get github.com/acrlakshman/profileio-resume/profileio
```

```go
package main

import (
	"io/ioutil"
	"log"
	"os"
	"os/exec"

	"github.com/acrlakshman/profileio-resume/profileio"
)

func main() {
	jsonData, _ := ioutil.ReadFile("./profile_resume.json")
	profileio.ProfileIO(jsonData)

	app := "xelatex"
	if !commandExists(app) {
		app = "pdflatex"
		if !commandExists(app) {
			log.Print("Cannot compile resume.tex")
			os.Exit(0)
		}
	}

	os.Chdir("./resume")
	cmd := exec.Command(app, "resume.tex")
	_, err := cmd.Output()
	if err != nil {
		log.Printf("%v", err)
	}
}

func commandExists(cmd string) bool {
	_, err := exec.LookPath(cmd)

	return err == nil
}
```

---

##### Attach a file to the webpage via markdown files for [ProfileIO] to render

* All files must be placed in the folder `_profile/files` and exclude `files` from path while referring to the file for attachment.

* _Example_
  ```md
  [Click to download](few-random-points-about-profile-io.md "file") markdown file that rendered this section.
  ```

  _Result_

  [Click to download](few-random-points-about-profile-io.md "file") markdown file that rendered part of this section.

---

##### Different ways to include images in markdown files for [ProfileIO] to render

**_Click on any of the images below to see all the images from a section in a modal._**

* _Single image_

  ```md
  ![Ice crystal sim](crystal_growth_t.png)
  ```

  _Result_
  ![Ice crystal sim](crystal_growth_t.png)

* _3 images in tabular form_
    ```md
    | | | |
    |-|-|-|
    |![Ice crystal sim](crystal_growth_t.png)|![Ice crystal sim](crystal_growth.png)|![Ice crystal sim](crystal_growth.png)|
    ```

    _Result_
    
    | | | |
    |-|-|-|
    |![Ice crystal sim](crystal_growth_t.png)|![Ice crystal sim](crystal_growth_t.png)|![Ice crystal sim](crystal_growth_t.png)|

---

##### Include a video in the webpage via markdown files for [ProfileIO] to render

* _Example_

  ```md
  [crystal-growth-video](https://youtu.be/KuVfyDwx2qo "show_video")
  ```

  _Result_

  [crystal-growth-video](https://youtu.be/KuVfyDwx2qo "show_video")

  _Though videos can also be included via `_profile/videos/` locally, it is recommended to host them on video hosting platforms like YouTube, and attach them as shown above._

[ProfileIO]: https://github.com/acrlakshman/profileio