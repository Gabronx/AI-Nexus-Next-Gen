"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "AI Nexus transformed our customer service with their conversational AI. Response time reduced by 80% and customer satisfaction increased by 45%.",
    author: "Sarah Johnson",
    position: "CTO, TechVision Inc."
  },
  {
    quote: "Their AI strategy completely revolutionized our data operations. We're now able to predict market trends with 92% accuracy.",
    author: "Michael Chen",
    position: "CEO, DataFlow Systems"
  },
  {
    quote: "The custom LLM they built for our legal department saves us thousands of hours annually in document review and compliance checks.",
    author: "Amanda Williams",
    position: "Legal Director, GlobalCorp"
  },
  {
    quote: "Working with AI Nexus on our ML infrastructure has been transformative. Their subscription model saved us over $120K compared to building in-house.",
    author: "Robert Garcia",
    position: "Head of Innovation, FutureTech"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Follow the <span className="gradient-text">top brands</span> worldwide
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-secondary bg-secondary/10 hover:border-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">
                    <Quote className="h-8 w-8" />
                  </div>
                  <blockquote className="mb-4 text-lg">
                    "{testimonial.quote}"
                  </blockquote>
                  <footer>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </footer>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-70">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grayscale hover:grayscale-0 transition-all"
          >
            <div className="h-12 flex items-center justify-center">
              <div className="text-xl font-bold">Microsoft</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grayscale hover:grayscale-0 transition-all"
          >
            <div className="h-12 flex items-center justify-center">
              <div className="text-xl font-bold">Tesla</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grayscale hover:grayscale-0 transition-all"
          >
            <div className="h-12 flex items-center justify-center">
              <div className="text-xl font-bold">IBM</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grayscale hover:grayscale-0 transition-all"
          >
            <div className="h-12 flex items-center justify-center">
              <div className="text-xl font-bold">Oracle</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
