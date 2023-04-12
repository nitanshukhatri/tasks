import React, { useEffect, useRef, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  return <div>{count}</div>;
};
