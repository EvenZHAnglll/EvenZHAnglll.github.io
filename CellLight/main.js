var BG_div = document.getElementById("background");
var elem = document.documentElement;
var HueSlider = document.getElementById("Hue");
var SatSlider = document.getElementById("Sat");
var LigSlider = document.getElementById("Lig");
// openFullscreen();
var HSLValue = ["50", "100", "50"];

SetColors();
function SetColors() {
  SatSlider.value = HSLValue[1];
  HueSlider.value = HSLValue[0];
  LigSlider.value = HSLValue[2];
  BG_div.style.backgroundColor = `hsl(${HSLValue[0]}, 
    ${HSLValue[1]}%, 
    ${HSLValue[2]}%)`;
  SatSlider.style.background = `linear-gradient(to right, 
    hsl(${HSLValue[0]}, 0%, ${HSLValue[2]}%),
    hsl(${HSLValue[0]}, 100%, ${HSLValue[2]}%))`;
  LigSlider.style.background = `linear-gradient(to right,
    hsl( ${HSLValue[0]}, ${HSLValue[1]}%, 0%), 
    hsl( ${HSLValue[0]}, ${HSLValue[1]}%, 50%),
    hsl( ${HSLValue[0]}, ${HSLValue[1]}%, 100%))`;
}

HueSlider.oninput = function() {
  HSLValue[0] = this.value;
  SetColors();
  console.log(HSLValue);
};

SatSlider.oninput = function() {
  HSLValue[1] = this.value;
  SetColors();
  console.log(HSLValue);
};
LigSlider.oninput = function() {
  HSLValue[2] = this.value;
  SetColors();
  console.log(HSLValue);
};
//BG_div.style.backgroundColor = "green";
function changeColor() {
  HSLValue[0] = String(Math.random() * 360);
  HSLValue[1] = String(Math.random() * 100);
  HSLValue[2] = String(Math.random() * 100);
  console.log(HSLValue);
  SetColors();
}

function reSetColors() {
  HSLValue = ["50", "100", "50"];
  SetColors();
}

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
