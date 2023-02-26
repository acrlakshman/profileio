##### [ProfileIO]

Steps to run:

```sh
git clone https://github.com/acrlakshman/profileio

cd profileio
yarn && yarn start
```

---

##### Attach a file to the webpage via markdown files for [ProfileIO] to render

* All files must be placed in the folder `_profile/files` and exclude `files` from path while referring to the file for attachment.

* _Example_
  ```md
  [Click to download](few-random-points-about-profile-io.md "file") markdown file that rendered this section.
  ```

  _Result_

  [Click to download](few-random-points-about-profile-io.md "file") markdown file that rendered this section.

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

  _Though videos can also be included via `_profile/videos/` locally, it is recommended to host them on video hosting services like YouTube and attach them as shown above._

[ProfileIO]: https://github.com/acrlakshman/profileio