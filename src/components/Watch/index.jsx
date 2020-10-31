import React, { useState, useEffect } from "react";
import styles from "./Watch.module.css";

const Watch = () => {
  const [time, setTime] = useState(0);
  const [isGoing, setIsgoing] = useState(false);

  useEffect(() => {
    const timeID =
      isGoing &&
      setTimeout(() => {
        setTime((time) => time + 1);
      }, 1);

    return () => {
      clearTimeout(timeID);
    };
  });

  const startTimer = () => {
    setIsgoing(true);
  };

  const stopTimer = () => {
    setIsgoing(false);
  };

  const resetTimer = () => {
    setTime(0);
  };

  const milliseconds = `00${~~time % 1000}`.slice(-3);
  const seconds = `0${~~(time / 1000) % 60}`.slice(-2);
  const minutes = `0${~~(time / (1000 * 60)) % 60}`.slice(-2);
  const hours = `0${~~(time / (1000 * 60 * 60))}`.slice(-2);

  return (
    <>
      <div>
        <span>{hours}</span>:
        <span>{minutes}</span>:
        <span>{seconds}</span>:
        <span>{milliseconds}</span>
      </div>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
};

export default Watch;
