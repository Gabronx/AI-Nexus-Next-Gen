"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get a <span className="gradient-text">full AI marketing department</span> by subscription in your industry
            </h2>
            <p className="text-muted-foreground mb-8">
              Stop hiring multiple specialists or agencies. Get a complete AI team for a fixed monthly fee.
            </p>
          </motion.div>

          <motion.div
            className="bg-card border border-secondary rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your work email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  className="w-full bg-secondary/50"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company name
                </label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  className="w-full bg-secondary/50"
                />
              </div>
            </div>

            <div className="mt-6">
              <Button asChild size="lg" className="w-full gradient-bg rounded-md h-12">
                <Link href="#" className="flex items-center justify-center gap-2">
                  Schedule a call <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-4">
              By submitting this form, you agree to our <Link href="#" className="underline">Privacy Policy</Link>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
