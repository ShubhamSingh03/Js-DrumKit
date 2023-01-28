import React, { useState, useEffect } from "react";

const DrumPad = (props) => {
  const handleClick = () => {
    if (props.isPowerOn) {
      const sound = new Audio(props.sound);
      sound.volume = props.volume;
      sound.play();
    } else {
      window.alert("Drum is OFF! Toggle to ON");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key.toUpperCase() === props.keyCode && props.isPowerOn) {
      const sound = new Audio(props.sound);
      sound.volume = props.volume;
      sound.play();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [props.isPowerOn]);

  return (
    <>
      <button
        onClick={handleClick}
        className={`drum-pad inline-block border rounded-lg bg-buttonColor py-1 px-3 text-buttonText font-semibold  hover:border-buttonColor hover:scale-105  hover:transition-all hover:duration-100 hover:ease-in-out hover:backdrop-blur hover:bg-glassButtonBg hover:shadow-buttonShadow focus:outline-0 focus:ring-offset-0 focus:outline-buttonColor sm:py-2 sm:px-4 ${props.className}`}
      >
        {props.name}
      </button>
    </>
  );
};

export default DrumPad;
