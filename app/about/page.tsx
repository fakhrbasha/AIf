'use client';

import { motion } from 'framer-motion';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import React from 'react';

// export const DrawCircleText = () => {
//   return (
//     <div className="grid place-content-center bg-emerald-950 px-4 py-24 text-yellow-50">
//       <h1 className="max-w-2xl text-center text-5xl leading-snug">
//         Scale your{" "}
//         <span className="relative">
//           Marketing
//           <svg
//             viewBox="0 0 286 73"
//             fill="none"
//             className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
//           >
//             <motion.path
//               initial={{ pathLength: 0 }}
//               whileInView={{ pathLength: 1 }}
//               transition={{
//                 duration: 1.25,
//                 ease: "easeInOut",
//               }}
//               d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
//               stroke="#FACC15"
//               strokeWidth="3"
//             />
//           </svg>
//         </span>{" "}
//         with Simple AI Tools
//       </h1>
//     </div>
//   );
// };
export default function AboutPage() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="max-w-5xl mx-auto text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            About <span className="text-primary">AIFinder</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            AIFinder is your gateway to discovering the world’s most powerful AI
            tools — beautifully curated, organized, and designed to help you
            work smarter and faster.
          </motion.p>
        </div>

        {/* Decorative background glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 10, repeat: Infinity }}
            className={`absolute left-[10%] top-[10%] w-[600px] h-[600px] rounded-full blur-3xl opacity-40 ${
              theme === 'dark'
                ? 'bg-primary/40'
                : 'bg-gradient-to-br from-primary/30 to-secondary/40'
            }`}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6  space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-4">What is AIFinder?</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              AIFinder is a comprehensive platform built to simplify the process
              of discovering, comparing, and selecting AI tools. With hundreds
              of AI solutions emerging daily, finding the right one can be
              overwhelming — and that’s exactly what we solve.
              <br />
              <br />
              Our mission is to empower creators, developers, and businesses by
              curating verified, high-quality AI tools across all categories:
              productivity, design, writing, development, marketing, and more.
            </p>
          </div>

          <div className="relative w-full h-[320px] md:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/logo.png"
              alt="AI Finder Overview"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* Founder Section */}
      <h1 className="text-3xl font-bold text-center"> Processing .....</h1>
      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur">
            <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To simplify the discovery of AI tools by offering a clean,
              user-friendly interface, intelligent filtering, and curated
              content that helps users save time, find inspiration, and unlock
              new levels of creativity through artificial intelligence.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur">
            <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the leading platform for AI exploration — a trusted hub
              that connects innovators, developers, and creators with the tools
              that will shape the future of technology and human potential.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-t border-border">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Our Core Values
        </h2>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Transparency',
              desc: 'We provide accurate, unbiased information about every AI tool — no hidden sponsorships or paid rankings.',
            },
            {
              title: 'Innovation',
              desc: 'We embrace creativity and cutting-edge design to keep our platform inspiring and forward-thinking.',
            },
            {
              title: 'Community',
              desc: 'We believe in empowering users — creators, developers, and AI enthusiasts — to learn, share, and grow together.',
            },
          ].map((v) => (
            <motion.div
              key={v.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="p-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 transition"
            >
              <h4 className="text-xl font-semibold mb-2">{v.title}</h4>
              <p className="text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
