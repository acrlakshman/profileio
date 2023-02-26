export default interface Config {
  imagesPath: string;
  videosPath: string;
  filesPath: string;
  maxItemsToRenderInHomePage: {
    publications: number;
    projects: number;
  };
}
