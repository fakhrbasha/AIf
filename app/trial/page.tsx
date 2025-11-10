"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ToolCard } from "@/components/tool-card"
import { Button } from "@/components/ui/button"
import { AI_TOOLS } from "@/lib/ai-tools"
import Link from "next/link"
import { motion } from "framer-motion"

export default function TrialPage() {
  const trialTools = AI_TOOLS.filter((tool) => tool.type === "Trial")

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Trial AI Tools</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Try {trialTools.length} AI tools with trial versions available. Test before you commit to a purchase.
          </p>
          <Link href="/tools">
            <Button variant="outline">Browse All Tools</Button>
          </Link>
        </motion.div>

        {/* Tools Grid */}
        {trialTools.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {trialTools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
            <p className="text-lg text-muted-foreground">No trial tools available.</p>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  )
}
