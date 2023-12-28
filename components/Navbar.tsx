"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="mx-[16rem] py-3 px-2 flex items-center justify-between">
      <Link className="logo" href="/">
        <Image src="/logo-white.svg" alt="logo" width={28} height={28} />
      </Link>

      <ul className="flex gap-8 items-center font-bold ">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/portfolios">Portfolios</Link>
        </li>
        <li>
          <Link href="/blog">blog</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <Link
        href={"/"}
        className="cta py-3 px-6 font-bold border-[1px] border-[#7263F3] rounded-full"
      >
        Download Cv
      </Link>
    </nav>
  );
}

export default Navbar;
