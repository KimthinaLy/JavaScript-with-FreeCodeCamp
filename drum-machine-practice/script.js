const display = document.getElementById("display");
const pads = document.querySelectorAll(".drum-pad");

const descriptions = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open-HH",
  Z: "Kick-n'-Hat",
  X: "Kick",
  C: "Closed-HH",
};

const triggerAudio = (audio) => {
  audio.play();
  display.innerText = descriptions[audio.id]
};

pads.forEach((pad) => {
  pad.addEventListener("click", () => {
    triggerAudio(pad.querySelector("audio"))
  })
});

document.addEventListener('keydown', (event) => {
  const key = event.key.toUpperCase();

  if (descriptions[key]) {
    triggerAudio(document.getElementById(key));
    display.innerText = descriptions[key];   
  }
});