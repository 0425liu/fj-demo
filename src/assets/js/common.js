const HEIGHT = 960;
const WIDTH = 1920;
let HtmlScaleInit = () => {
  let app = document.getElementById("app");
  console.log(app);
  app.style = `transform:scale(${window.innerWidth /
    WIDTH},${window.innerHeight / HEIGHT})`;
};
HtmlScaleInit();
window.onresize = () => {
  HtmlScaleInit();
};
