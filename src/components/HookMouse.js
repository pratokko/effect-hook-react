import React, { useState, useEffect } from "react";

function HookMouse() {
  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);

  const logMouseMove = (e) => {
    console.log("mouse moving");

    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Effect is runing");
    window.addEventListener("mousemove", logMouseMove);

    return () => {
      console.log("component is unmounting");
      window.removeEventListener('mousemove', logMouseMove)
    };
  }, []);

  return (
    <div>
      Hooks X - {X} Y - {Y}
    </div>
  );
}

export default HookMouse;
