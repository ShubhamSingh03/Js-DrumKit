const soundsData = [
  {
    name: "Q",
    sound: require("../sounds/crash.mp3"),
    keyCode: "Q",
    className: "absolute top-[21%] left-[8.5%] sm:left-[10.5%]",
  },
  {
    name: "W",
    sound: require("../sounds/mid-tom.mp3"),
    keyCode: "W",
    className: "absolute top-[25%] left-[34%] sm:top-[30%] sm:left-[37%]",
  },
  {
    name: "E",
    sound: require("../sounds/high-tom.mp3"),
    keyCode: "E",
    className: "absolute top-[25%] right-[34%] sm:top-[30%] sm:right-[36%]",
  },
  {
    name: "R",
    sound: require("../sounds/hihat-open.wav"),
    keyCode: "R",
    className: "absolute top-[7%] right-[10.5%] sm:top-[9%] sm:right-[12.7%]",
  },
  {
    name: "A",
    sound: require("../sounds/floor-tom.mp3"),
    keyCode: "A",
    className: "absolute  top-[59%] left-[24%] sm:top-[62%] sm:left-[26%] ",
  },
  {
    name: "D",
    sound: require("../sounds/snare.mp3"),
    keyCode: "D",
    className: "absolute top-[59%] right-[22%] sm:top-[61%] sm:right-[25%]",
  },
  {
    name: "S",
    sound: require("../sounds/kick.mp3"),
    keyCode: "S",
    className: "absolute top-[70%] right-[44.5%] sm:top-[72%] sm:right-[46.3%]",
  },
];

export default soundsData;
