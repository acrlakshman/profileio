## [Surface-film modeling](https://rohitmishranitrr.github.io/surfaceFilm)

* [Documentation](https://github.com/rohitmishranitrr/OpenFOAM)
* Highlights:
  * Bai-Gossman surface film model fixed bug (implementation error fixed)
  * Added two surface film models namely : Stanton-Rutland model and O'Rourke-Amsden model
  * Added code to find secondary parcel (parcels after interacting with the wall) properties
  * Made the surface film models compatible with the advanced LES dynamic structure turbulence model
  

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
