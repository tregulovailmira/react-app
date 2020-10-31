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
      }, 1000);

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

  const seconds = `0${~~time % 60}`.slice(-2);
  const minutes = `0${~~(time / 60) % 60}`.slice(-2);
  const hours = `0${~~(time / 3600)}`.slice(-2);

  return (
    <>
      <div className={styles.timerWrapper}>
        <span>{hours}</span>:
        <span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <div className={styles.controlsWrapper}>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
};

export default Watch;
