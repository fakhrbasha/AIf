'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="border-t border-border bg-card"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link
              href="/"
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            >
              <Image src={'/logo.png'} width={50} height={50} alt="LOGO" />
            </Link>
            <p className="text-sm text-muted-foreground">
              Discover the best AI tools for your needs
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/tools"
                  className="hover:text-primary transition-colors"
                >
                  All Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/free"
                  className="hover:text-primary transition-colors"
                >
                  Free Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/paid"
                  className="hover:text-primary transition-colors"
                >
                  Paid Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/trial"
                  className="hover:text-primary transition-colors"
                >
                  Trial Tools
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  X
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 AIF. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
}
