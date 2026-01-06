import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get(api.services.get.path, async (req, res) => {
    const service = await storage.getService(Number(req.params.id));
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.json(service);
  });

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }
      throw err;
    }
  });

  await seedDatabase();

  return httpServer;
}

// Seed function
export async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    await storage.createService({
      title: "Managed IT Services",
      description: "Proactive IT support and management to keep your business running smoothly.",
      fullDescription: "Our Managed IT Services provide comprehensive support for your entire IT infrastructure. From 24/7 monitoring to helpdesk support, we ensure your systems are always up and running. We handle updates, security patches, and network management so you can focus on your business.",
      icon: "Server",
      category: "Managed IT",
      imageUrl: "https://images.unsplash.com/photo-1558494949-efdeb6bf80d1?auto=format&fit=crop&q=80&w=1000",
    });
    await storage.createService({
      title: "Cybersecurity Solutions",
      description: "Protect your data and assets with our advanced security protocols.",
      fullDescription: "In today's digital landscape, security is paramount. We offer state-of-the-art cybersecurity solutions including threat detection, firewall management, and employee training to protect your business from cyber threats and data breaches.",
      icon: "Shield",
      category: "Security",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000",
    });
    await storage.createService({
      title: "Cloud Computing",
      description: "Scalable cloud solutions to enhance flexibility and collaboration.",
      fullDescription: "Migrate to the cloud with confidence. We offer cloud consulting, migration, and management services. Whether you use Azure, AWS, or Google Cloud, we help you leverage the power of the cloud to improve scalability and reduce costs.",
      icon: "Cloud",
      category: "Cloud",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    });
    await storage.createService({
      title: "IT Consulting",
      description: "Strategic advice to align technology with your business goals.",
      fullDescription: "Our expert consultants work with you to develop an IT strategy that aligns with your long-term business objectives. We help with digital transformation, infrastructure planning, and technology budgeting.",
      icon: "Briefcase",
      category: "Consulting",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
    });
    await storage.createService({
      title: "Data Backup & Recovery",
      description: "Ensure business continuity with robust data backup solutions.",
      fullDescription: "Data loss can be catastrophic. We implement reliable backup and disaster recovery solutions to ensure your critical business data is safe and can be quickly restored in the event of an emergency.",
      icon: "Database",
      category: "Data",
      imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1000",
    });
    await storage.createService({
      title: "Network Infrastructure",
      description: "Design and maintenance of secure and efficient network systems.",
      fullDescription: "We design, implement, and maintain high-performance network infrastructures. Whether you need a simple office network or a complex multi-site setup, we ensure connectivity, speed, and security.",
      icon: "Network",
      category: "Network",
      imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000",
    });
  }
}
