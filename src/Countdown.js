import React, { useEffect, useState } from "react";

export default function Countdown({ seconds }) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span>{time}s</span>;
}
