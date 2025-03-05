import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Clock, Wrench, BarChart, Users, Server } from "lucide-react";

export default function MaintenanceAndSupportPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Maintenance & Support</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive care for your digital solutions, backed by our extensive MSP background and Minnesota-based support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Discuss Support Options</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View Success Stories</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image 
            src="/placeholder-service4.jpg" 
            alt="Maintenance and Support Services" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Why Maintenance Matters Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why Ongoing Maintenance Matters</h2>
        <p className="text-lg mb-8">
          Modern software and technology infrastructures require continuous attention to remain secure, performant, and aligned with evolving business needs. Many organizations discover that the true cost of digital solutions isn't in the initial build, but in the ongoing maintenance:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Security & Protection</h3>
            <p>
              Regular updates and patches protect your systems from emerging threats and vulnerabilities, safeguarding your business data and customer information.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <Clock className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
            <p>
              Proactive monitoring and optimization ensure your applications and infrastructure run at peak efficiency, preventing slowdowns that affect user experience.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <Wrench className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Evolving Requirements</h3>
            <p>
              As your business grows and changes, your technology needs to adapt. Ongoing support enables continuous improvement and adaptation to new business needs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our MSP Background Section */}
      <div className="bg-muted p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-6">Our MSP Background</h2>
        <p className="text-lg mb-8">
          Before founding Sota Stack, Adam and Steve worked extensively within Managed Service Provider (MSP) environments, supporting diverse businesses across Minnesota and beyond. This experience forms the foundation of our approach to maintenance and support:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">Experience That Matters</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">24/7 Support Environments</span>
                  <p className="text-muted-foreground text-sm">We've managed critical systems requiring round-the-clock monitoring and rapid response protocols.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">Multi-tiered Support Models</span>
                  <p className="text-muted-foreground text-sm">Experience with structured support frameworks from frontline help desk to specialized infrastructure support.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">Service Level Agreements</span>
                  <p className="text-muted-foreground text-sm">Deep understanding of SLA design and management to ensure consistent, reliable support delivery.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">Regulated Industry Support</span>
                  <p className="text-muted-foreground text-sm">Experience supporting businesses in healthcare, finance, and other regulated sectors with specific compliance requirements.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Our MSP Approach</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">Proactive vs Reactive</span>
                  <p className="text-muted-foreground text-sm">We emphasize prevention through monitoring and maintenance rather than just responding to issues after they occur.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">Documentation & Knowledge</span>
                  <p className="text-muted-foreground text-sm">Thorough documentation ensures consistency and enables quick resolution of recurring issues.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">Technology Roadmapping</span>
                  <p className="text-muted-foreground text-sm">We help clients plan for future technology needs and transitions rather than just maintaining the status quo.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium">Process Optimization</span>
                  <p className="text-muted-foreground text-sm">Continuous improvement of support processes to deliver faster, more effective service with each iteration.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Service Offerings Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Support Services</h2>
        <p className="text-lg mb-8">
          We offer flexible maintenance and support options tailored to your organization's needs and budget:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-4">Application Support</h3>
            <Server className="h-10 w-10 text-primary mb-6" />
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Bug fixes and issue resolution</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Performance optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Feature enhancements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Security patching</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Compatibility updates</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Database maintenance</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm border border-primary">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
              Popular
            </div>
            <h3 className="text-xl font-semibold mb-4">Managed Services</h3>
            <Users className="h-10 w-10 text-primary mb-6" />
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Everything in Application Support</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>24/7 monitoring and alerts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Regular health checks</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Backup management</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Monthly reporting</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Priority response SLAs</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm border border-border">
            <h3 className="text-xl font-semibold mb-4">Strategic Partnership</h3>
            <BarChart className="h-10 w-10 text-primary mb-6" />
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Everything in Managed Services</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Quarterly technology reviews</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Technology roadmapping</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>User training sessions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Discounted development rates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Support Process Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Support Process</h2>
        
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">1</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Onboarding & Assessment</h3>
              <p>
                We begin with a thorough review of your systems, documenting configurations, dependencies, and critical components. This creates a baseline for support and identifies immediate improvement opportunities.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">2</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Monitoring Implementation</h3>
              <p>
                For managed services clients, we implement appropriate monitoring systems to track performance, availability, and security metrics. Alert thresholds are configured based on your specific business needs and priorities.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">3</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Maintenance & Support</h3>
              <p>
                Ongoing maintenance includes scheduled updates, regular backups, security patches, and performance optimization. Support tickets are managed through our dedicated system with clear SLAs and escalation paths.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">4</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Review & Planning</h3>
              <p>
                Regular service reviews provide insights into system health, incident patterns, and user feedback. For strategic partners, these reviews include forward-looking planning to align technology with evolving business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Client Success Story */}
      <div className="mb-16 bg-muted p-8 rounded-lg">
        <h2 className="text-3xl font-bold mb-6">Client Success Story</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4">Minnesota Manufacturing Firm</h3>
            <p className="mb-4">
              A mid-sized manufacturing company in central Minnesota was struggling with recurring downtime in their custom inventory management system. Each incident disrupted production and fulfillment, costing thousands in lost productivity.
            </p>
            <p className="mb-4">
              After moving to our Managed Services plan, we identified and resolved several underlying infrastructure issues and implemented a comprehensive monitoring solution. Within three months:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>System downtime was reduced by 94%</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Average issue resolution time decreased from 12 hours to 45 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Production efficiency improved by 17%</span>
              </li>
            </ul>
            <p className="font-medium italic">
              "The Sota Stack team doesn't just fix problems – they prevent them from happening in the first place. Their MSP background is evident in how they approach support with a level of professionalism we hadn't seen before."
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              — Operations Director, Minnesota Manufacturing Firm
            </p>
          </div>
          <div className="lg:col-span-1">
            <div className="relative h-60 lg:h-full rounded-lg overflow-hidden">
              <Image 
                src="/placeholder-case-study.jpg" 
                alt="Manufacturing Case Study" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center bg-primary p-10 rounded-lg text-primary-foreground">
        <h2 className="text-3xl font-bold mb-4">Keep Your Digital Solutions Running At Peak Performance</h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Contact us today to discuss how our maintenance and support services can help you maximize uptime, security, and performance.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </div>
    </div>
  );
} 