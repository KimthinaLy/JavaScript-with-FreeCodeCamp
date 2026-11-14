const qBtn = document.getElementById("Q-pad");
const wBtn = document.getElementById("W-pad");
const eBtn = document.getElementById("E-pad");
const aBtn = document.getElementById("A-pad");
const sBtn = document.getElementById("S-pad");
const dBtn = document.getElementById("D-pad");
const zBtn = document.getElementById("Z-pad");
const xBtn = document.getElementById("X-pad");
const cBtn = document.getElementById("C-pad");
const display = document.getElementById("display");

const qSrc = qBtn.querySelector("audio").getAttribute('src');
const wSrc = wBtn.querySelector("audio").getAttribute('src');
const eSrc = eBtn.querySelector("audio").getAttribute('src');
const aSrc = aBtn.querySelector("audio").getAttribute('src');
const sSrc = sBtn.querySelector("audio").getAttribute('src');
const dSrc = dBtn.querySelector("audio").getAttribute('src');
const zSrc = zBtn.querySelector("audio").getAttribute('src');
const xSrc = xBtn.querySelector("audio").getAttribute('src');
const cSrc = cBtn.querySelector("audio").getAttribute('src');

const audioList = [
  {
    name : "Q",
    src : qSrc,
    description: "Heater 1",
  },
  {
    name : "W",
    src : wSrc,
    description: "Heater 2",
  },
  {
    name : "E",
    src : eSrc,
    description: "Heater 3",
  },
  {
    name : "A",
    src : aSrc,
    description: "Heater 4",
  },
  {
    name : "S",
    src : sSrc,
    description: "Clap",
  },
  {
    name : "D",
    src : dSrc,
    description: "Open-HH",
  },
  {
    name : "Z",
    src : zSrc,
    description: "Kick-n'-Hat",
  },
  {
    name : "X",
    src : xSrc,
    description: "Kick",
  },
  {
    name : "C",
    src : cSrc,
    description: "Closed-HH",
  },
];

const getIndex = (name) => {
  for (const [index, audio] of audioList.entries()){
    if (name === audio.name){
      return index;
    }
  }
}

const audio = new Audio();

const triggerAudio = index => {
  audio.src = audioList[index].src;
  display.innerText = "";

  audio.play();
  display.innerText = audioList[index].description;
}

qBtn.addEventListener("click", () => {
  triggerAudio(getIndex('Q'));
});
wBtn.addEventListener("click", () => {
  triggerAudio(getIndex('W'));
});
eBtn.addEventListener("click", () => {
  triggerAudio(getIndex('E'));
});
aBtn.addEventListener("click", () => {
  triggerAudio(getIndex('A'));
});
sBtn.addEventListener("click", () => {
  triggerAudio(getIndex('S'));
});
dBtn.addEventListener("click", () => {
  triggerAudio(getIndex('D'));
});
zBtn.addEventListener("click", () => {
  triggerAudio(getIndex('Z'));
});
xBtn.addEventListener("click", () => {
  triggerAudio(getIndex('X'));
});
cBtn.addEventListener("click", () => {
  triggerAudio(getIndex('C'));
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  switch (key) {
    case 'q':
      triggerAudio(getIndex('Q'));
      break;
    case 'w':
      triggerAudio(getIndex('W'));
      break;
    case 'e':
      triggerAudio(getIndex('E'));
      break;
    case 'a':
      triggerAudio(getIndex('A'));
      break;
    case 's':
      triggerAudio(getIndex('S'));
      break;
    case 'd':
      triggerAudio(getIndex('D'));
      break;
    case 'z':
      triggerAudio(getIndex('Z'));
      break;
    case 'x':
      triggerAudio(getIndex('X'));
      break;
    case 'c':
      triggerAudio(getIndex('C'));
      break;
  }
})
