"use client";
import HeroContent from "@/components/Content/HeroContent";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <div className="blur-containers">
        <div className="layer-blur"></div>
        <div className="green-circle"></div>
        <div className="red-circle"></div>
      </div>
      <header>
        <Navbar />
      </header>
      <main className="mx-[10rem] border border-[var(--colour--border)] rounded-xl">
        <HeroContent />
      </main>
      <footer></footer>
    </>
  );
}
