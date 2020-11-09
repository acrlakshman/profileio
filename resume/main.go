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
			os.Exit(0) // Exit with this code to avoid github actions failure.
		}
	}

	os.Chdir("./resume")
	cmd := exec.Command(app, "resume.tex")
	_, err := cmd.Output()
	if err != nil {
		log.Printf("Error: could not process TeX file, %v", err)
	}
}

func commandExists(cmd string) bool {
	_, err := exec.LookPath(cmd)

	return err == nil
}