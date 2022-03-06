import { LoadingManager } from "three";

export default function loadingManager() {
  const loadingManager = new LoadingManager();
  loadingManager.onStart = () => {
    console.log("Loading Start..");
  };
  loadingManager.onProgress = (file) => {
    console.log(`${file} loading`);
  };
  loadingManager.onLoad = () => {
    console.log(`Loading complete!`);
  };
  loadingManager.onError = (err) => {
    console.log(err);
  };
  return loadingManager;
}
