import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Services data
const services = [
  {
    id: "web-development",
    title: "Web Development",
    description: "Custom websites tailored to your business needs",
    longDescription: "Our websites are not just beautiful, they're built to perform. We focus on creating responsive, accessible, and fast-loading websites that drive results.",
    icon: "/placeholder-service1.jpg",
  },
  {
    id: "cloud-hosting",
    title: "Cloud Hosting",
    description: "Reliable infrastructure for your applications",
    longDescription: "We provide secure, scalable, and cost-effective cloud hosting solutions that ensure your applications are always available to your customers.",
    icon: "/placeholder-service2.jpg",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description: "Bespoke solutions for unique business needs",
    longDescription: "When off-the-shelf software doesn't cut it, we build custom applications that streamline your processes and solve your specific business challenges.",
    icon: "/placeholder-service3.jpg",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description: "Ongoing support and maintenance for your digital assets",
    longDescription: "Keep your software running smoothly with our comprehensive maintenance and support services. We handle updates, security patches, and performance optimization.",
    icon: "/placeholder-service4.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          From custom websites to cloud hosting solutions, we provide end-to-end services 
          to power your digital presence and help your business thrive.
        </p>
      </div>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service) => (
          <Card key={service.id} className="flex flex-col h-full">
            <CardHeader>
              <div className="w-16 h-16 mb-4 rounded-md bg-primary/10 flex items-center justify-center">
                <div className="w-10 h-10 relative">
                  <Image 
                    src={service.icon} 
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{service.longDescription}</p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/services/${service.id}`}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Process Section */}
      <div className="bg-muted rounded-lg p-8 md:p-12 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We follow a collaborative, transparent approach to ensure your project is delivered on time and exceeds expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2">Discovery</h3>
            <p className="text-muted-foreground">We learn about your business, goals, and requirements to ensure the solution meets your needs.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2">Planning</h3>
            <p className="text-muted-foreground">We create a detailed roadmap and specifications for your project, with clear milestones and deliverables.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2">Development</h3>
            <p className="text-muted-foreground">Our team builds your solution with regular check-ins and updates to ensure it meets your expectations.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 className="text-xl font-semibold mb-2">Launch & Support</h3>
            <p className="text-muted-foreground">We deploy your solution and provide ongoing support to ensure long-term success.</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Contact us today to discuss how we can help bring your vision to life with our custom software development and cloud hosting services.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
} 