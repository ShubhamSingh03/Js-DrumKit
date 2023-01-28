import drumBlue from "../images/drum-blue.png";

import { useState, useEffect } from "react";

import soundsData from "../soundData/soundsData";

import DrumPad from "../components/DrumPad";

//  icons
import { IoVolumeHigh, IoVolumeLow } from "react-icons/io5";

const Home = () => {
  const [drumPads] = useState(soundsData);
  const [isPowerOn, setIsPowerOn] = useState(true);
  const [volume, setVolume] = useState(1);

  const handlePowerToggle = () => {
    setIsPowerOn(!isPowerOn);
  };

  const handleVolumeChange = (event) => {
    setVolume(event.target.value);
  };

  return (
    <>
      {/* controls */}
      <div className="flex justify-around items-center pt-6">
        {/* On/off toggle switch */}
        <div className="p-1 rounded-3xl bg-gradient-to-b from-[#0000000d] to-[#edf1f4] shadow-volumeSliderShadow sm:p-4">
          <div className=" flex justify-center items-center">
            <p className={`${isPowerOn ? "" : "font-bold"} text-sm  uppercase`}>
              <span className="hidden sm:inline-block">Drum-</span>Off
            </p>
            <button
              onClick={handlePowerToggle}
              className={`${
                isPowerOn ? "bg-buttonColor" : "bg-gray-200"
              } relative inline-flex h-6 w-10 items-center rounded-full mx-2 sm:h-8 sm:w-20 outline-0 shadow-volumeSliderRangeShadow`}
            >
              <span
                className={`${
                  isPowerOn
                    ? " translate-x-5 sm:translate-x-[3.2rem]"
                    : "translate-x-1"
                } inline-block h-4 w-4 sm:h-6 sm:w-6 transform rounded-full bg-white transition`}
              />
            </button>
            <p className={`${isPowerOn ? "font-bold" : ""} text-sm  uppercase`}>
              <span className="hidden sm:inline-block">Drum-</span>on
            </p>
          </div>
        </div>

        {/* volume range slider */}
        <div className="relative flex justify-center items-center p-2 rounded-3xl bg-gradient-to-b from-[#0000000d] to-[#edf1f4] shadow-volumeSliderShadow sm:p-5">
          <IoVolumeLow size={25} />
          <input
            type="range"
            className="volume-slider w-[100px] h-4 appearance-none bg-gray-200 overflow-hidden outline-none rounded-2xl shadow-volumeSliderRangeShadow mx-4 sm:w-[200px]"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
          />
          <IoVolumeHigh size={25} />
        </div>
      </div>
      {/* drum kit image */}
      <div className="relative md:w-[700px] mx-auto">
        <img className="w-full" src={drumBlue} alt="Drum Kit Blue" />
        {drumPads.map((pad) => (
          <DrumPad
            key={pad.name}
            name={pad.name}
            sound={pad.sound}
            keyCode={pad.keyCode}
            isPowerOn={isPowerOn}
            volume={volume}
            className={pad.className}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
