'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#' },
    // { label: "Our Team", href: "#" },
    // { label: "Careers", href: "#" },
    // { label: "Blog", href: "#" },
  ],
  services: [
    { label: 'Essential Plans', href: '/plans' },
    // { label: "Corporate Wellness", href: "#" },
    // { label: "Group Coaching", href: "#" },
    { label: '1-on-1 Coaching', href: '#' },
  ],
  support: [
    { label: 'FAQ', href: '#faq' },
    // { label: "Contact Us", href: "#contact" },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};

const socialLinks = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/chatoracoach?igsh=dXg0Z3YydG10b2hs',
    label: 'Instagram',
  },
  {
    icon: Facebook,
    href: 'https://www.facebook.com/profile.php?id=61588289160093',
    label: 'Facebook',
  },
  {
    icon: Youtube,
    href: 'https://youtube.com/@chatoracoach?si=ORih_P52ZQPaT_Su',
    label: 'YouTube',
  },
  // { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3 sm:mb-4">
              <Image
                src="/logo.png"
                alt="Chatora Coach Logo"
                width={60}
                height={60}
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <span className="font-serif text-lg sm:text-xl font-semibold text-foreground">
                Chatora Coach
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Certified nutrition coaching for sustainable health
              transformations. Simple, affordable, and effective.
            </p>
            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1 sm:col-span-1">
            <h3 className="font-semibold text-foreground mb-4 text-sm">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-span-1 sm:col-span-1">
            <h3 className="font-semibold text-foreground mb-4 text-sm">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-span-1 sm:col-span-1">
            <h3 className="font-semibold text-foreground mb-4 text-sm">
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1 sm:col-span-1">
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm">
                  2nd Floor, KK Heights, Necklace Rd, Akola, Maharashtra 444001
                </span>
              </li>
              <li>
                <a
                  href="tel:+918975331144"
                  className="flex gap-2 text-muted-foreground hover:text-primary transition-colors items-start"
                >
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm">+91 8975331144</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:movesnstretch@gmail.com"
                  className="flex gap-2 text-muted-foreground hover:text-primary transition-colors items-start"
                >
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm break-all">
                    movesnstretch@gmail.com
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            {`© 2026 Chatora Coach. All rights reserved.`}
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-right">
            Chatora Coach is a coaching brand operated by Moves n Stretch.
          </p>
        </div>
      </div>
    </footer>
  );
}
