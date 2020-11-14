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