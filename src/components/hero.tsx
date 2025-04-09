"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen pt-32 pb-20 flex items-center">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[#151518]">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-indigo-900/20 to-blue-900/30" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-700/20 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text">AI-Powered Solutions</span>
            <br /> for Unstoppable Growth
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Strategy, development, content, machine learning and everything you need
            in one package from a leading AI agency worldwide
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild size="lg" className="gradient-bg text-white px-8 h-12 rounded-full">
              <Link href="#">Book a demo</Link>
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-12 text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="px-3 py-1 border border-muted rounded-full">Top AI Agency for Startups</span>
            <span className="px-3 py-1 border border-muted rounded-full">Best AI Solutions Provider</span>
            <span className="px-3 py-1 border border-muted rounded-full">AI Innovation Award 2025</span>
            <span className="px-3 py-1 border border-muted rounded-full">Leading ML Implementation</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
