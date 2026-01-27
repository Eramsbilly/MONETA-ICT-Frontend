import React, { useEffect, useState } from "react";

export default function Countdown({ end }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = new Date(end) - new Date();
      if (diff <= 0) setTime("Completed");
      else {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        setTime(d + " days left");
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [end]);

  return <span>{time}</span>;
}