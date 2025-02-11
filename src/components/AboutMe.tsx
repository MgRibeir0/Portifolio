"use client";

import Image from "next/image";

/*
  TODO:
  - Add profile picture
  - Add description
  - Add CV download button
  - Add animation
*/

export default function AboutMe() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <Image
          src="/placeholder.svg"
          alt="Profile Picture"
          width={192}
          height={192}
          className="rounded-full retro-border"
        />
        <div className="absolute inset-0 border-4 border-lime-300 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
}
