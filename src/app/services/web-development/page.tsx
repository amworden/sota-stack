import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export default function WebDevelopmentPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Web Development Services</h1>
          <p className="text-xl text-muted-foreground">
            We build beautiful, high-performing websites that drive results for Minnesota businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image 
            src="/placeholder-service1.jpg" 
            alt="Web Development Services" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Expertise Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Web Development Expertise</h2>
        <p className="text-lg mb-8">
          With over 20 years of combined experience in web development, our team has worked across numerous industries and technologies. Adam and Steve have both served as contractors and full-time developers for companies ranging from small businesses to large enterprises, giving us a unique perspective on creating effective web solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Front-End Development</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Modern frameworks like React, Next.js, and Vue.js</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Responsive design for all devices and screen sizes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Accessibility-focused development (WCAG compliance)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Performance optimization and SEO best practices</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Back-End Development</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Node.js, Python, PHP, and .NET environments</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>RESTful API development and integration</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Database design and optimization (SQL & NoSQL)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Secure authentication and authorization systems</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">CMS Development</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>WordPress custom theme and plugin development</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Headless CMS integration (Contentful, Sanity, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>E-commerce platforms (Shopify, WooCommerce)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Content migration and SEO preservation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Experience Section */}
      <div className="bg-muted p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Web Development Experience</h2>
        <p className="text-lg mb-8">
          Before founding Sota Stack, both Adam and Steve worked as contractors and employees for various companies, developing their skills across multiple industries:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Industries We've Served</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Healthcare and medical services</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Finance and insurance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Manufacturing and industrial</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Retail and e-commerce</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Education and non-profits</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Project Types</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Corporate websites and intranets</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>E-commerce and online marketplaces</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Web applications and SaaS products</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>API development and system integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Legacy system modernization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Process Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Web Development Process</h2>
        
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">1</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3>
              <p>
                We start by understanding your business goals, target audience, and requirements. This phase includes competitor analysis, user research, and creating a detailed project roadmap. We'll work closely with you to define the scope, timeline, and budget for your web project.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">2</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Design & Prototyping</h3>
              <p>
                Our design process begins with wireframes and information architecture, followed by visual design mockups. We create interactive prototypes to test user flows and gather feedback. This iterative approach ensures the final design meets both aesthetic and functional requirements.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">3</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>
              <p>
                Once designs are approved, our development team begins building your website using modern, scalable technologies. We follow industry best practices for code quality and security. Throughout development, we conduct thorough testing for functionality, performance, and compatibility.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">4</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Launch & Maintenance</h3>
              <p>
                After final approval, we deploy your website and provide detailed training for your team. Our support doesn't end at launch—we offer ongoing maintenance packages that include regular updates, security patches, and performance monitoring to ensure your website continues to perform optimally.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center bg-primary p-10 rounded-lg text-primary-foreground">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Web Project?</h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Contact us today to discuss how we can help bring your vision to life with our web development expertise.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
} 