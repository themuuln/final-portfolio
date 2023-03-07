"use client";
import React, { useRef } from "react";
import "./Cursor.css";

const Cursor = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent) => {
    const { clientX, clientY } = event;

    if (blobRef.current) {
      blobRef.current.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 301, fill: "forwards" }
      );
    }
  };

  return (
    <>
      <div className="blob" ref={blobRef}></div>
      <div className="blur"></div>
    </>
  );
};

export default Cursor;
