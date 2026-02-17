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
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="NutriLife Logo"
                width={60}
                height={60}
                className="w-10 h-10 object-contain"
              />
              <span className="font-serif text-xl font-semibold text-foreground">
                Chatora Coach
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Certified nutrition coaching for sustainable health
              transformations. Simple, affordable, and effective.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>
                  2nd Floor, KK Heights, Necklace Rd, Akola, Maharashtra 444001
                </span>
              </li>
              <li>
                <a
                  href="tel:+918975331144"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span>+91 8975331144</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:movesnstretch@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span>movesnstretch@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {`© 2026 Chatora Coach. All rights reserved.`}
          </p>
          <p className="text-sm text-muted-foreground">
            Chatora Coach is a coaching brand operated by Moves n Stretch.
          </p>
        </div>
      </div>
    </footer>
  );
}
