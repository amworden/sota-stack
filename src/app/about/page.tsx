import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Linkedin, Github } from "lucide-react";

// Team members data with their real LinkedIn profiles
const teamMembers = [
  {
    name: "Adam Worden",
    role: "Co-Founder",
    bio: "Based in St. Paul, Minnesota, Adam brings extensive cloud systems expertise to Sota Stack. With a background as a Cloud Systems Principal at Pentair and significant experience in technology leadership, Adam specializes in developing scalable, secure solutions for businesses of all sizes.",
    image: "/adam.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/adammworden/",
    }
  },
  {
    name: "Steve Dockendorf",
    role: "Co-Founder",
    bio: "A lifelong Minnesota native, Steve has built his career developing innovative software solutions for businesses across the region. His technical expertise and passion for creating practical, user-friendly applications drives Sota Stack's commitment to quality and client satisfaction.",
    image: "/steve.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/steven-dockendorf-2294a336/",
    }
  }
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold">About Sota Stack</h1>
              <p className="text-xl text-muted-foreground">
                We're a Minnesota-based software development company dedicated to helping businesses leverage technology to grow and innovate.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image 
                src="/placeholder-about.jpg" 
                alt="Sota Stack Team" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Sota Stack was founded in 2024 by two Minnesota natives who are passionate about bringing custom software solutions to businesses in their home state. Although our company is young, our founders bring over 20 years of combined experience in software development, web technologies, and cloud solutions.
            </p>
            
            <p>
              Both Adam and Steve have grown up and spent their entire lives in Minnesota, giving them a deep understanding of the unique challenges and opportunities that local businesses face. This local knowledge, combined with their technical expertise, enables them to create solutions that truly resonate with Minnesota companies.
            </p>
            
            <p>
              Our approach focuses on building relationships first, understanding each client's specific needs, and crafting custom solutions that deliver real value. We believe in technology that works for people, not the other way around.
            </p>
            
            <p>
              What sets us apart is our commitment to Minnesota businesses and our deep roots in the local community. We're not just building software; we're supporting our neighbors and helping to strengthen the local economy through thoughtful, effective technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Sota Stack.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Client Partnership</h3>
                <p>
                  We view our clients as partners, not just customers. Your success is our success, and we're invested in building solutions that drive real results for your business.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Quality Craftsmanship</h3>
                <p>
                  We believe in doing things right the first time. Our solutions are built with attention to detail, clean code, and best practices that ensure reliability and longevity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
                <p>
                  Technology never stands still, and neither do we. We constantly research emerging trends and technologies to bring the best solutions to our clients.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p>
                  Clear communication is central to our process. We ensure you understand what we're building, why we're building it, and how it will benefit your business.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Local Community</h3>
                <p>
                  As a Minnesota-based company, we're proud to support our local tech community through mentorship, events, and partnerships with educational institutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-2">Sustainable Growth</h3>
                <p>
                  We build solutions that not only solve today's problems but scale with your business as it grows, evolves, and faces new challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the founders of Sota Stack.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-4 cursor-pointer">
                      <Image 
                        src={member.image} 
                        alt={member.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold">{member.name}</h4>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                      <div className="flex justify-start space-x-2 pt-2">
                        {Object.entries(member.social).map(([platform, url]) => (
                          <a 
                            key={platform} 
                            href={url.toString()} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                            aria-label={`${member.name}'s ${platform} profile`}
                          >
                            {platform === 'linkedin' && <Linkedin className="h-4 w-4" />}
                            {platform === 'github' && <Github className="h-4 w-4" />}
                            <span>{platform.charAt(0).toUpperCase() + platform.slice(1)}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
                <div className="mt-2 flex justify-center space-x-2">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a 
                      key={platform} 
                      href={url.toString()} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s ${platform} profile`}
                    >
                      {platform === 'linkedin' && <Linkedin className="h-5 w-5" />}
                      {platform === 'github' && <Github className="h-5 w-5" />}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary-foreground">Work With Us</h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Ready to bring your project to life with a team that cares about your success? Let's start a conversation.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 