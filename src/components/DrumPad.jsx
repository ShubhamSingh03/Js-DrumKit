import React, { useState, useEffect } from "react";

const DrumPad = (props) => {
  const [keyPress, setKeyPress] = useState(false);

  /*******************************************
   *
   *  on onClick event on button
   *
   ******************************************* */

  const handleClick = () => {
    if (props.isPowerOn) {
      const sound = new Audio(props.sound);
      sound.volume = props.volume;
      sound.play();
    } else {
      window.alert("Drum is OFF! Toggle to ON");
    }
  };

  /*******************************************
   *
   *  keyboard key press -down event
   *
   ******************************************* */

  const handleKeyPressDown = (event) => {
    if (event.key.toUpperCase() === props.keyCode) {
      if (props.isPowerOn) {
        const sound = new Audio(props.sound);
        sound.volume = props.volume;
        setKeyPress(!keyPress);
        sound.play();
      } else {
        window.alert("Drum is OFF! Toggle to ON");
      }
    }
  };

  /*******************************************
   *
   *  keyboard key press -up event
   *
   ******************************************* */

  const handleKeyPressUp = (event) => {
    if (event.key.toUpperCase() === props.keyCode && props.isPowerOn) {
      setKeyPress(!keyPress);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPressDown);
    document.addEventListener("keyup", handleKeyPressUp);
    return () => {
      document.removeEventListener("keydown", handleKeyPressDown);
      document.removeEventListener("keyup", handleKeyPressUp);
    };
  }, [props.isPowerOn, keyPress]);

  return (
    <>
      {/*******************************************
       *
       *  button for playing sound
       *
       ******************************************* */}

      <button
        onClick={handleClick}
        className={`${
          keyPress
            ? "scale-75 transition-all duration-100 ease-in-out bg-glassButtonBg shadow-volumeSliderRangeShadow border border-buttonColor"
            : ""
        } drum-pad inline-block border rounded-lg bg-buttonColor py-1 px-3 text-buttonText font-semibold  hover:border-buttonColor hover:scale-105  hover:transition-all hover:duration-100 hover:ease-in-out hover:backdrop-blur hover:bg-glassButtonBg hover:shadow-volumeSliderRangeShadow focus:outline-0 focus:ring-offset-0 focus:outline-buttonColor sm:py-2 sm:px-4 ${
          props.className
        }`}
      >
        {props.name}
      </button>
    </>
  );
};

export default DrumPad;
