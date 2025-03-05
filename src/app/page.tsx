import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-background to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="text-primary">Minnesota's</span> Custom Software Experts
              </h1>
              <p className="text-xl text-muted-foreground">
                We build beautiful, functional websites and cloud solutions that help your business grow. Based in Minnesota, serving clients nationwide.
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
            <div className="relative h-80 lg:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 z-10 rounded-lg"></div>
              <Image 
                src="/placeholder-hero.jpg" 
                alt="Sota Stack Software Development" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From custom websites to cloud hosting solutions, we provide end-to-end services to power your digital presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Web Development</CardTitle>
                <CardDescription>Custom websites that convert visitors to customers</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Our websites are not just beautiful, they're built to perform. We focus on creating responsive, accessible, and fast-loading websites that drive results.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/services/web-development">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Cloud Hosting</CardTitle>
                <CardDescription>Reliable infrastructure for your applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p>We provide secure, scalable, and cost-effective cloud hosting solutions that ensure your applications are always available to your customers.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/services/cloud-hosting">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Custom Software</CardTitle>
                <CardDescription>Bespoke solutions for unique business needs</CardDescription>
              </CardHeader>
              <CardContent>
                <p>When off-the-shelf software doesn't cut it, we build custom applications that streamline your processes and solve your specific business challenges.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/services/custom-software">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Ready to Start Your Project?</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can help bring your vision to life with our custom software development and cloud hosting services.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
