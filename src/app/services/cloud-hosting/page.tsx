import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Cloud, Server, Shield, Settings, LineChart, Scale } from "lucide-react";

export default function CloudHostingPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">Cloud Hosting Services</h1>
          <p className="text-xl text-muted-foreground">
            Secure, scalable cloud solutions designed for your specific business needs, managed by Minnesota experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View Case Studies</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden">
          <Image 
            src="/placeholder-service2.jpg" 
            alt="Cloud Hosting Services" 
            fill 
            className="object-cover"
          />
        </div>
      </div>
      
      {/* Cloud Platforms Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Multi-Cloud Expertise</h2>
        <p className="text-lg mb-8">
          With extensive experience as MSP workers and cloud engineers, our team brings comprehensive knowledge across all major cloud platforms. We design and implement solutions that best fit your specific requirements, whether that's leveraging a single provider or creating a multi-cloud strategy.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="bg-card rounded-lg p-6 shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <Image 
                src="/aws-logo.png" 
                alt="AWS" 
                width={80}
                height={48}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Amazon Web Services</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Extensive experience with EC2, S3, RDS, Lambda, ECS, and the complete AWS ecosystem for businesses of all sizes.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <Image 
                src="/azure-logo.png" 
                alt="Microsoft Azure" 
                width={80}
                height={48}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Microsoft Azure</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Specialists in Azure Virtual Machines, App Service, Azure SQL, Cosmos DB, and Microsoft's extensive cloud solutions.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <Image 
                src="/gcp-logo.png" 
                alt="Google Cloud Platform" 
                width={80}
                height={48}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Google Cloud</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Proficient with Compute Engine, Cloud Storage, BigQuery, Kubernetes Engine, and Google's AI/ML services.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 shadow-sm text-center">
            <div className="flex justify-center mb-4">
              <Image 
                src="/do-logo.png" 
                alt="Digital Ocean" 
                width={80}
                height={48}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Digital Ocean</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Expert configuration of Droplets, Kubernetes, Managed Databases, and cost-effective solutions for startups and SMBs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Services Offered Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Cloud Services We Offer</h2>
        <p className="text-lg mb-8">
          Our MSP background gives us a unique perspective on what businesses actually need from their cloud infrastructure—not just what looks good on paper, but what delivers reliable performance day after day.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <Server className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Infrastructure Design & Migration</h3>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Cloud architecture planning</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Lift-and-shift migrations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Application refactoring</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Hybrid cloud setups</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <Shield className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Security & Compliance</h3>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Cloud security best practices</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Compliance frameworks (HIPAA, PCI, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Zero-trust architecture</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Data encryption and protection</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <Settings className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">DevOps & Automation</h3>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>CI/CD pipeline implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Infrastructure as Code (Terraform, CloudFormation)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Containerization (Docker, Kubernetes)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Automated testing and deployment</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <LineChart className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Monitoring & Management</h3>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>24/7 infrastructure monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Performance optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Alerting and incident response</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Log management and analysis</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <Scale className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Scalability & Performance</h3>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Auto-scaling configurations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Load balancing and traffic management</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Database optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Content Delivery Networks (CDN)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <Cloud className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Disaster Recovery & Backup</h3>
            <ul className="space-y-2 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Backup strategy design and implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Disaster recovery planning</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Multi-region redundancy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                <span>Business continuity solutions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* MSP Experience Section */}
      <div className="bg-muted p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-bold mb-6">Our MSP Background</h2>
        <p className="text-lg mb-8">
          Before founding Sota Stack, both Adam and Steve gained valuable experience working with Managed Service Providers (MSPs), giving them insights into the real-world challenges of maintaining and optimizing cloud infrastructure. This experience informs our approach to cloud hosting:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">What Sets Us Apart</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Practical Solutions:</strong> We focus on reliable, maintainable infrastructure rather than over-engineered solutions.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Cost Optimization:</strong> Our MSP background taught us how to balance performance with cost-effectiveness.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Security-First:</strong> We implement industry best practices for security at every level of your infrastructure.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span><strong>Documentation:</strong> We provide comprehensive documentation to ensure your team understands your cloud environment.</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Industries Served</h3>
            <p className="text-muted-foreground mb-4">
              Our cloud hosting experience spans across multiple industries, with particular expertise in:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Healthcare (HIPAA-compliant environments)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Financial services (secure, high-availability platforms)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>E-commerce (scalable, performance-optimized infrastructure)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>SaaS companies (multi-tenant architectures)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Process Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Our Cloud Hosting Process</h2>
        
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">1</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Assessment & Strategy</h3>
              <p>
                We begin by understanding your current infrastructure, business goals, and requirements. Our team analyzes your workloads, security needs, compliance requirements, and budget to create a tailored cloud strategy.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">2</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Architecture & Design</h3>
              <p>
                Based on our assessment, we design a cloud architecture that meets your specific needs. This includes selecting the right cloud providers, services, and configurations to optimize for performance, security, and cost.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">3</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Implementation & Migration</h3>
              <p>
                Our team handles the deployment of your cloud infrastructure using Infrastructure as Code for consistency and reproducibility. For existing workloads, we plan and execute a migration strategy that minimizes downtime and risk.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">4</div>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-xl font-semibold mb-2">Optimization & Management</h3>
              <p>
                After deployment, we continually monitor and optimize your cloud environment for performance, security, and cost. We provide regular reports and recommendations to ensure your infrastructure evolves with your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center bg-primary p-10 rounded-lg text-primary-foreground">
        <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Cloud Infrastructure?</h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
          Whether you're looking to migrate to the cloud, optimize your existing infrastructure, or implement a multi-cloud strategy, our team has the expertise to help.
        </p>
        <Button size="lg" variant="secondary" asChild>
          <Link href="/contact">Schedule a Consultation</Link>
        </Button>
      </div>
    </div>
  );
} 