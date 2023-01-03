import { useState, useEffect } from "react";

const useTime = () => {
  const [time, setTime] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
  });

  const getTime = () => {
    const currentDate = new Date().getTime();
    const date = new Date("12/24/2023").getTime();
    const diffTime = date - currentDate;
    const second = 1000;
    const minutes = second * 60;
    const hour = minutes * 60;
    const days = hour * 24;

    const textDay = Math.floor(diffTime / days);
    const textHour = Math.floor((diffTime % days) / hour);
    const textMinutes = Math.floor((diffTime % hour) / minutes);
    const textSeconds = Math.floor((diffTime % minutes) / second);

    setTime({
      seconds: textSeconds,
      minutes: textMinutes,
      hours: textHour,
      days: textDay,
    });
  };

  useEffect(() => {
    let interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);
  return {
    time,
  };
};

export default useTime;
