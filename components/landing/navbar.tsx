'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BookingForm } from './booking-form';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '/plans', label: 'Plans' },
  // { href: '#why-us', label: 'Why Us' },
  { href: '#faq', label: 'FAQ' },
  // { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent',
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Chatora Coach Logo"
              width={400}
              height={400}
              className="w-25 sm:w-18 lg:w-25 h-25 sm:h-18 lg:h-25 mt-1 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs lg:text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              size="sm"
              onClick={() => setIsBookingFormOpen(true)}
              className="text-xs lg:text-sm"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 sm:h-10 sm:w-10"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-80 p-4 sm:p-6">
              <div className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base sm:text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-6">
                  <Button
                    className="w-full text-xs sm:text-sm h-9 sm:h-10"
                    onClick={() => {
                      setIsBookingFormOpen(true);
                      setIsOpen(false);
                    }}
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <BookingForm
        open={isBookingFormOpen}
        onOpenChange={setIsBookingFormOpen}
      />
    </header>
  );
}
