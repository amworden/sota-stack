import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Sota Stack</h3>
            <p className="text-muted-foreground mb-4">
              Minnesota-based custom software company specializing in websites and cloud hosting solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-muted-foreground hover:text-primary transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-hosting" className="text-muted-foreground hover:text-primary transition-colors">
                  Cloud Hosting
                </Link>
              </li>
              <li>
                <Link href="/services/custom-software" className="text-muted-foreground hover:text-primary transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-muted-foreground hover:text-primary transition-colors">
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <address className="not-italic text-muted-foreground">
              <p className="mt-2">
                <a href="mailto:info@sotastack.com" className="hover:text-primary transition-colors">
                  info@sotastack.com
                </a>
              </p>
              <p>
                <a href="tel:+16125551234" className="hover:text-primary transition-colors">
                  (612) 555-1234
                </a>
              </p>
            </address>
            
            <div className="mt-4 flex space-x-4">
              <a href="https://twitter.com/sotastack" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com/company/sotastack" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/sota-stack" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Sota Stack. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 