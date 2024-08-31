import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

function Clock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [gold, setGold] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    const goldTimerId = setInterval(() => {
      setGold((prevGold) => prevGold + 1);
    }, 60000); // every minute

    return () => clearInterval(goldTimerId);
  }, []);

  return (
    <>
      <div className="w-full h-screen flex-col flex justify-center items-center">
        <div className="w-full flex justify-center">
          <img
            src="./public/sheep.png"
            alt=""
            className="w-40"
          />
        </div>
        <h1 className="w-96 text-6xl font-bold font-satisfy flex justify-center">
          {currentTime.toLocaleTimeString()}
        </h1>
        <div className="w-96 flex justify-evenly items-center mt-10">
          <p className="text-2xl font-bold font-satisfy">綿羊泡點點數</p>
          <div className="flex items-center">
            <img src="./public/outline.png" alt="" className="w-10 h-10" />
            <h1 className="text-2xl font-bold font-satisfy">{gold}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clock;
