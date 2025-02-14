"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profilePicture from "@assets/profilePixelArt.png";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="relative w-48 h-48 mx-auto mb-8"
        >
          <Image
            src={profilePicture}
            alt="16-bit Avatar"
            width={192}
            height={192}
            className="rounded-full retro-border"
          />
          <div className="absolute inset-0 border-4 border-lime-300 rounded-full animate-pulse"></div>
        </motion.div>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-press-start-2p mb-4 text-lime-300"
        >
          Player One: Matheus Ribeiro
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl max-w-2xl mx-auto"
        >
          Welcome, adventurer! I&apos;m a level 22 Full Stack Developer with +3
          years of experience in crafting digital realms. Ready to join your
          party and tackle epic quests!
        </motion.p>
        <motion.a
          href="/CV.pdf"
          download
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="inline-block mt-8 px-6 py-3 retro-border rounded-lg bg-amber-400 text-gray-900 font-press-start-2p text-sm hover:bg-amber-300 transition duration-200"
        >
          Start Game (CV)
        </motion.a>
      </div>
    </section>
  );
}
