'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ToolCard } from '@/components/tool-card';
import { Button } from '@/components/ui/button';
import { AI_TOOLS } from '@/lib/ai-tools';

const FEATURED_TOOLS = AI_TOOLS.slice(0, 6);

export default function HomeCreative() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (!theme) setTheme('dark');
  }, [theme, setTheme]);

  // small interactive parallax for hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const glowX = useTransform(mouseX, [-300, 300], [-40, 40]);
  const glowY = useTransform(mouseY, [-200, 200], [-30, 30]);

  return (
    <div
      className={`min-h-screen overflow-hidden ${
        theme === 'dark' ? 'bg-background  ' : 'bg-background  '
      }`}
    >
      <Navigation />

      {/* Animated Background Orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          style={{ x: glowX, y: glowY }}
          className={`absolute left-[-10%] top-[-10%] w-[700px] h-[700px] rounded-full blur-3xl opacity-50 ${
            theme === 'dark' ? ' ' : ' '
          }`}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          style={{ x: glowX }}
          className={`absolute right-[-5%] bottom-[-15%] w-[600px] h-[600px] rounded-full blur-3xl opacity-40 ${
            theme === 'dark' ? '' : ' '
          }`}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Hero with interactive tilt */}
      <section
        onMouseMove={(e) => {
          const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
          mouseX.set(e.clientX - rect.left - rect.width / 2);
          mouseY.set(e.clientY - rect.top - rect.height / 2);
        }}
        className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-36"
      >
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-clip-text text-primary  ">
                Discover & play with AI tools — beautifully presented.
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
              Dynamic previews, trending lists, and immersive cards — everything
              designed to inspire exploration.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link href="/tools">
                <Button
                  size="lg"
                  className="px-6 py-3 rounded-lg  text-primary hover:text-white bg-transparent border-2 "
                >
                  Explore Tools
                </Button>
              </Link>

              {/* <Link href>
              <Button
                className="px-4 py-2 rounded-md border text-sm bg-white/5 hover:bg-white/10 transition"
              >
                About
              </Button></Link> */}
            </div>
          </motion.div>

          {/* Right preview card cluster */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="relative w-full max-w-md lg:max-w-lg"
          >
            <div className="transform-gpu will-change-transform perspective-1000">
              <motion.div
                style={{ x: glowX, y: glowY }}
                className={`rounded-2xl p-4 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-white/6 to-white/3'
                    : 'bg-white shadow-lg'
                } backdrop-blur-md border border-white/10`}
              >
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-sm font-semibold">
                    AI
                  </div>
                  <div>
                    <div className="font-semibold">Live Preview</div>
                    <div className="text-xs text-muted-foreground">
                      Hover cards to preview features
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  {FEATURED_TOOLS.slice(0, 3).map((t, i) => (
                    <motion.div
                      key={t.id}
                      whileHover={{ scale: 1.03 }}
                      className={`p-3 rounded-lg ${
                        theme === 'dark'
                          ? 'bg-white/3 hover:bg-white/6'
                          : 'bg-gray-50 hover:bg-white'
                      } transition`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-medium">{t.name}</h4>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {t.description}
                          </p>
                        </div>
                        <div className="text-xs px-2 py-1 rounded-md bg-white/10">
                          {t.category || 'Tool'}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* floating small cards */}
              <motion.div
                initial={{ y: 10 }}
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-36 rounded-2xl p-3 shadow-2xl bg-white/5 border border-white/8"
              >
                <div className="text-xs text-muted-foreground">Trending</div>
                <div className="mt-2 font-semibold">AI Image Lab</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Tools Grid — animated */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Featured Tools
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {FEATURED_TOOLS.map((tool, idx) => (
            <motion.div
              key={tool.id}
              variants={{
                hidden: { opacity: 0, y: 18 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="rounded-2xl p-0"
            >
              <ToolCard tool={tool} index={idx} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Categories — animated badges */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Categories</h3>
          <Link href="/categories" className="text-sm underline">
            Browse all
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            'Image',
            'Chat',
            'Code',
            'Video',
            'Audio',
            'Marketing',
            'Analytics',
            'Design',
          ].map((c) => (
            <motion.button
              key={c}
              whileHover={{ scale: 1.05 }}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                theme === 'dark' ? 'bg-white/6' : 'bg-gray-100'
              }`}
            >
              {c}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Trending Tools Carousel-like (simple) */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Trending</h3>
          <Link href="/trending" className="text-sm underline">
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {AI_TOOLS.slice(10, 13).map((t, i) => (
            <motion.article
              key={t.id}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl p-6 bg-gradient-to-br from-white/2 to-white/4 border border-white/6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                    {t.description}
                  </p>
                </div>
                <div className="text-xs px-2 py-1 rounded bg-white/10">Hot</div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Why Choose */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/6">
            <h4 className="font-semibold mb-2">Handpicked</h4>
            <p className="text-sm text-muted-foreground">
              Only top-rated tools that pass our review process.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/6">
            <h4 className="font-semibold mb-2">Immersive UI</h4>
            <p className="text-sm text-muted-foreground">
              Interactive previews and delightful micro-interactions.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/6">
            <h4 className="font-semibold mb-2">Fresh</h4>
            <p className="text-sm text-muted-foreground">
              Weekly updates with trending and new arrivals.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
