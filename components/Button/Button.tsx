"use client";
import React from "react";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  skew?: boolean;
  bg?: string;
  color?: string;
  pad?: string;
  bRad?: string;
}

function Button({
  text,
  icon,
  skew,
  bg = "var(--colour--white)",
  color = "var(--colour--black)",
  pad = "0.8rem 2rem",
  bRad = "0.3rem",
}: ButtonProps) {
  return (
    <button
      style={{
        backgroundColor: bg,
        color,
        padding: pad,
        borderRadius: bRad,
        transform: skew ? "rotateX(20deg)" : "none",
      }}
    >
      {icon && icon}
      {text}
    </button>
  );
}

export default Button;
