"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Layers, MessageSquareText, BarChart3, Database, Server, Globe, Cog, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: "AI Strategy",
    description: "Comprehensive AI roadmaps and strategy to transform your business operations and customer experience."
  },
  {
    icon: <Layers className="h-10 w-10 text-primary" />,
    title: "ML Development",
    description: "Custom machine learning models built for your specific business needs and integrated with your systems."
  },
  {
    icon: <MessageSquareText className="h-10 w-10 text-primary" />,
    title: "Conversational AI",
    description: "Advanced chatbots and virtual assistants that understand context and deliver natural interactions."
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary" />,
    title: "AI Analytics",
    description: "Data-driven insights powered by AI to uncover patterns and predict future business outcomes."
  },
  {
    icon: <Database className="h-10 w-10 text-primary" />,
    title: "Data Engineering",
    description: "Robust data pipelines and infrastructure to support your AI initiatives at any scale."
  },
  {
    icon: <Server className="h-10 w-10 text-primary" />,
    title: "AI Infrastructure",
    description: "Cloud-based or on-premise AI/ML infrastructure designed for performance and reliability."
  },
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: "LLM Development",
    description: "Custom large language models fine-tuned for your industry and specific business applications."
  },
  {
    icon: <Cog className="h-10 w-10 text-primary" />,
    title: "AI Integration",
    description: "Seamless integration of AI capabilities into your existing software ecosystem and workflows."
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: "AI Product Development",
    description: "End-to-end development of AI-powered products from concept to market-ready solutions."
  }
];

export function Services() {
  return (
    <section className="py-20 bg-background" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Get a full <span className="gradient-text">AI implementation department</span> by subscription
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            All the AI expertise you need, bundled in one subscription package
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: services.indexOf(service) * 0.1 }}
            >
              <Card className="h-full bg-card border-secondary hover:border-primary transition-colors">
                <CardHeader>
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
