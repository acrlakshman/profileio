const isRenderVideo = (title: string): boolean => {
  return new RegExp('show{1}[._#*-]*video{1}').test(title);
};

const isLinkAFile = (title: string): boolean => {
  return new RegExp('file{1}').test(title);
};

export { isRenderVideo, isLinkAFile };
