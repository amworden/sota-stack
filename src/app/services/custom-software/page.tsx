import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Code, Database, Users, BarChart, RefreshCcw, Zap } from "lucide-react";

export default function CustomSoftwarePage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Custom Software Development</h1>
          <p className="text-xl text-muted-foreground">
            Bespoke software solutions tailored to your unique business challenges, designed and built by Minnesota developers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image 
            src="/placeholder-service3.jpg" 
            alt="Custom Software Development" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Why Custom Software Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Choose Custom Software?</h2>
        <p className="text-lg mb-8">
          Off-the-shelf solutions often force your business to adapt to the software rather than the other way around. Custom software is designed specifically for your unique processes, challenges, and goals, providing several key advantages:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <Zap className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Perfect Fit</h3>
            <p>
              Custom software is built to match your exact business requirements and workflow, eliminating the need to adapt your processes to generic software limitations.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <RefreshCcw className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scalability</h3>
            <p>
              As your business grows and evolves, custom software can be adapted and expanded to meet changing needs without being locked into a vendor's upgrade path.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <BarChart className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Competitive Advantage</h3>
            <p>
              While competitors use the same off-the-shelf solutions, your custom software can automate unique processes and deliver better customer experiences.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Development Expertise Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Development Expertise</h2>
        <p className="text-lg mb-8">
          With over 20 years of combined experience as software developers and contractors for various organizations, our team brings deep technical expertise and practical problem-solving skills to every project:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <Code className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Application Development</h3>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Desktop applications</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Web-based software</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Mobile applications</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Cross-platform solutions</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <Database className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Solutions</h3>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Custom databases</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Data migration tools</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Business intelligence dashboards</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Reporting systems</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <Users className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Integration Solutions</h3>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>API development</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Third-party integrations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Legacy system connectivity</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Middleware development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Our Development Experience Section */}
      <div className="bg-muted p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Development Experience</h2>
        <p className="text-lg mb-8">
          Before founding Sota Stack, Adam and Steve worked as contractors and full-time developers for a variety of organizations, gaining invaluable experience across numerous industries and project types:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Technology Expertise</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-medium">Programming Languages</h4>
                <p className="text-muted-foreground">JavaScript/TypeScript, Python, C#, Java, PHP, Go</p>
              </div>
              <div>
                <h4 className="font-medium">Frameworks & Libraries</h4>
                <p className="text-muted-foreground">React, Angular, Vue.js, Node.js, .NET, Django, Laravel</p>
              </div>
              <div>
                <h4 className="font-medium">Databases</h4>
                <p className="text-muted-foreground">SQL Server, PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch</p>
              </div>
              <div>
                <h4 className="font-medium">Development Practices</h4>
                <p className="text-muted-foreground">Agile/Scrum, DevOps, CI/CD, Test-Driven Development, Microservices</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Industries We've Served</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">Healthcare</span>
                  <p className="text-muted-foreground text-sm">Patient management systems, scheduling tools, compliance solutions</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">Manufacturing</span>
                  <p className="text-muted-foreground text-sm">Inventory management, production tracking, quality control applications</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">Financial Services</span>
                  <p className="text-muted-foreground text-sm">Reporting tools, transaction processing, compliance solutions</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">Retail & E-commerce</span>
                  <p className="text-muted-foreground text-sm">Inventory systems, order management, customer portals</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Contractor Experience Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Contractor Background</h2>
        <p className="text-lg mb-8">
          Our experience as contractors has given us unique insights into delivering successful software projects within various organizational contexts:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">What We've Learned</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Adaptability:</strong> Working with diverse teams and technologies has made us highly adaptable to different environments and requirements.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Communication:</strong> Clear communication is essential to project success, especially when navigating complex organizational structures.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Pragmatism:</strong> We've learned to balance ideal solutions with practical constraints like time, budget, and organizational realities.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Knowledge Transfer:</strong> Effective documentation and training are crucial for long-term software success.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">How This Benefits You</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Faster Delivery:</strong> Our diverse project experience helps us avoid common pitfalls and deliver more efficiently.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Better Solutions:</strong> We draw on patterns and approaches from various industries to solve your specific challenges.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Smooth Integration:</strong> We understand how to integrate new software with existing systems and organizational processes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Sustainable Solutions:</strong> We build software that can be maintained and extended long after the initial development.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Process Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Development Process</h2>
        
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">1</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Discovery & Analysis</h3>
              <p>
                We begin by thoroughly understanding your business processes, challenges, and objectives. This phase includes stakeholder interviews, process mapping, and requirements gathering to ensure we build software that truly meets your needs.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">2</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Design & Planning</h3>
              <p>
                Based on our findings, we create a detailed software architecture and design. This includes database schemas, system interfaces, UI/UX designs, and a project roadmap with key milestones. We collaborate closely with you during this phase to ensure the solution aligns with your vision.
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
                Our development team builds your software using an agile approach, delivering working increments for regular review and feedback. We maintain high code quality standards with comprehensive testing at each stage, including unit tests, integration tests, and user acceptance testing.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">4</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Deployment & Support</h3>
              <p>
                Once the software is approved, we handle the deployment process, including data migration if needed. We provide comprehensive training for your team and ongoing support to ensure smooth adoption. Our partnership continues with maintenance and updates as your business evolves.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center bg-primary p-10 rounded-lg text-primary-foreground">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with Custom Software?</h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Contact us today to discuss how we can develop a tailored software solution that addresses your unique business challenges.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </div>
    </div>
  );
} 