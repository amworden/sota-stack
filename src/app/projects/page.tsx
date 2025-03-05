"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Sample project data - in a real app, this would come from a CMS or database
const projects = [
  {
    id: "northstar-logistics",
    title: "Northstar Logistics",
    category: "Custom Software",
    description: "Custom logistics management software for a Minnesota-based transportation company.",
    image: "/placeholder-project1.jpg",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: "minnesota-wellness",
    title: "Minnesota Wellness",
    category: "Web Development",
    description: "A modern, accessible website with booking functionality for a healthcare provider.",
    image: "/placeholder-project2.jpg",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Vercel"],
  },
  {
    id: "techflow-industries",
    title: "TechFlow Industries",
    category: "Cloud Hosting",
    description: "Cloud infrastructure migration and optimization for a manufacturing technology company.",
    image: "/placeholder-project3.jpg",
    tags: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    id: "great-lakes-brewery",
    title: "Great Lakes Brewery",
    category: "Web Development",
    description: "E-commerce website with inventory management for a craft brewery.",
    image: "/placeholder-project4.jpg",
    tags: ["Shopify", "Custom Theme", "Inventory API"],
  },
  {
    id: "midwest-solar",
    title: "Midwest Solar",
    category: "Custom Software",
    description: "Solar panel monitoring and management system for residential installations.",
    image: "/placeholder-project5.jpg",
    tags: ["IoT", "React", "Python", "Time-series DB"],
  },
  {
    id: "twin-cities-tours",
    title: "Twin Cities Tours",
    category: "Web Development",
    description: "Interactive tour booking platform with location-based features.",
    image: "/placeholder-project6.jpg",
    tags: ["Next.js", "Maps API", "Payment Processing"],
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All Projects");
  
  // Get unique categories for filter buttons
  const categories = ["All Projects", ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);
    
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore some of our recent work for clients across Minnesota and beyond. Each project represents our commitment to quality, innovation, and client satisfaction.
        </p>
      </div>
      
      {/* Project Filter - Now with filtering functionality */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <Button 
            key={category} 
            variant={activeFilter === category ? "outline" : "ghost"} 
            className="rounded-full"
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Card key={project.id} className="overflow-hidden group">
            <div className="aspect-video relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20 z-10 transition-opacity opacity-0 group-hover:opacity-100"></div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <CardHeader>
              <div className="text-sm text-primary font-medium">{project.category}</div>
              <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-xs px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild className="w-full">
                <Link href={`/projects/${project.id}`}>View Case Study</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* CTA Section */}
      <div className="mt-20 text-center bg-muted p-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Have a project in mind? Contact us today to discuss how Sota Stack can help bring your vision to life.
        </p>
        <Button asChild>
          <Link href="/contact">Get In Touch</Link>
        </Button>
      </div>
    </div>
  );
} 