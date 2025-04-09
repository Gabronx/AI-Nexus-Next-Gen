"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Clock, Users, Zap, Award } from "lucide-react";

const features = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "2 hours",
    description: "per week you spend on management"
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "100+",
    description: "AI specialists in your team"
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "1 day",
    description: "from concept to implementation"
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "$100k",
    description: "average saving on annual AI costs"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet the new generation of <span className="gradient-text">AI services</span>
          </motion.h2>
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-6 text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="px-4 py-2 rounded-md bg-secondary">
              <h3 className="font-semibold mb-1">Freelance / In-house</h3>
              <p className="text-sm text-muted-foreground">2023</p>
            </div>
            <div className="hidden md:block text-muted-foreground">vs</div>
            <div className="px-4 py-2 rounded-md bg-primary/20 border border-primary/50">
              <h3 className="font-semibold mb-1">AI Subscription</h3>
              <p className="text-sm text-muted-foreground">2025</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button asChild size="lg" className="gradient-bg text-white px-8 h-12 rounded-full">
            <Link href="#">More about Subscription</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
