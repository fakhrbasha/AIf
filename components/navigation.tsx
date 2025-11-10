'use client';

import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Navigation() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          <Image src={'/logo.png'} width={50} height={50} alt="LOGO" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/tools"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Tools
          </Link>
          <Link
            href="/free"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Free
          </Link>
          <Link
            href="/paid"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Paid
          </Link>
          <Link
            href="/trial"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Trial
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </div>

        <ThemeToggle />
      </nav>
    </motion.header>
  );
}
