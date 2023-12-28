"use client";
import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

function HeroContent() {
  return (
    <div className="mx-[6rem] mt-[8rem]  min-h-[100vh] py-3 flex gap-8">
      <div className="flex-1 text-section">
        <h1 className="flex flex-col font-bold text-[5rem]">
          <span className="text-[#F56693] text-[3rem]">Hello, I'm</span>
          <span className="u-gradient-purple">O'shea Murphey</span>
        </h1>
        <h2 className="mb-[1.4rem] text-[2rem]">
          A
          <span className="job-titles text-[#F2994A] mx-4 py-3 px-4 border border-[var(--colour--border)] ">
            Software Engineer / Designer
          </span>
          From <span className="text-[#2ECC71]">London</span>.
        </h2>
        <p className="mb-[3rem] text-[1.5rem]">
          I'm a <span>Software Engineer</span> and a <span>Designer</span> based
          in London. I can provide clean code and pixel perfect designs.
        </p>
        <Button text="Contact Me" skew />
      </div>
      <div className="hero-image self-start p-6 border border-[var(--colour--border)] rounded-md">
        <Image src="/images/hero.jpg" alt="hero" width={430} height={430} />
      </div>

      <div className="mouse">
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default HeroContent;
