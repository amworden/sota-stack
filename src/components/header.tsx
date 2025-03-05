"use client";

import * as React from "react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="border-b border-border bg-background sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-2xl text-primary">Sota Stack</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors">
                    Services
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors">
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/terms" legacyBehavior passHref>
                  <NavigationMenuLink className="px-4 py-2 hover:text-primary transition-colors">
                    Terms
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="ml-4">
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
                  Home
                </Link>
                <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
                  Services
                </Link>
                <Link href="/services/web-development" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium pl-4 text-base text-muted-foreground">
                  Web Development
                </Link>
                <Link href="/services/cloud-hosting" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium pl-4 text-base text-muted-foreground">
                  Cloud Hosting
                </Link>
                <Link href="/services/custom-software" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium pl-4 text-base text-muted-foreground">
                  Custom Software
                </Link>
                <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
                  Projects
                </Link>
                <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
                  About
                </Link>
                <Link href="/terms" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
                  Terms
                </Link>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
} 