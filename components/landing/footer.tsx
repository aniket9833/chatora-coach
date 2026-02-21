'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Plans', href: '/plans' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  // { label: 'Terms', href: '#' },
];

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
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main content — tight 3-col grid on md+, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Col 1: Brand block */}
          <div>
            <Link href="/" className="flex items-center gap-2 ">
              <Image
                src="/logo.png"
                alt="Chatora Coach Logo"
                width={250}
                height={250}
                className="w-25 h-25 object-contain"
              />
              <span className="font-serif text-lg font-semibold text-foreground">
                Chatora Coach
              </span>
            </Link>
            <p className="text-md text-foreground/80 leading-relaxed mb-1">
              Foodies ke liye fat loss coaching - Diet nahi, portion sahi.
            </p>
            <p className="text-sm text-muted-foreground mb-5">
              Operated by Moves n Stretch.
            </p>
            <a
              href="mailto:movesnstretch@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 flex-shrink-0" />
              movesnstretch@gmail.com
            </a>
          </div>

          {/* Col 2: Nav links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Socials */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-3">
              Follow Us
            </h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-5 border-t border-border">
          <p className="text-sm text-muted-foreground text-center sm:text-center">
            © 2026 Chatora Coach. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
