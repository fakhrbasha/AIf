"use client"

import { useParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { AI_TOOLS } from "@/lib/ai-tools"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ToolDetailsPage() {
  const params = useParams()
  const toolId = params.id as string

  const tool = AI_TOOLS.find((t) => t.id === toolId)

  if (!tool) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-3xl font-bold mb-4">Tool Not Found</h1>
            <p className="text-muted-foreground mb-8">The tool you're looking for doesn't exist.</p>
            <Link href="/tools">
              <Button>Back to Tools</Button>
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    )
  }

  const relatedTools = AI_TOOLS.filter((t) => t.category === tool.category && t.id !== tool.id).slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-8">
          <Link href="/tools" className="text-primary hover:text-primary/80 transition-colors">
            ← Back to Tools
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-start justify-between gap-6 mb-6">
            <div className="flex items-center gap-6">
              <div className="text-7xl">{tool.logo}</div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{tool.name}</h1>
                <p className="text-lg text-muted-foreground">{tool.category}</p>
              </div>
            </div>
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                tool.type === "Free"
                  ? "bg-green-500/20 text-green-400"
                  : tool.type === "Paid"
                    ? "bg-purple-500/20 text-purple-400"
                    : "bg-blue-500/20 text-blue-400"
              }`}
            >
              {tool.type}
            </span>
          </div>
          <p className="text-xl text-muted-foreground mb-8">{tool.description}</p>
          <a href={tool.website} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Visit Website
            </Button>
          </a>
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Category</h3>
            <p className="text-muted-foreground">{tool.category}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Pricing Type</h3>
            <p className="text-muted-foreground">{tool.type}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="font-semibold mb-2">Website</h3>
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline truncate"
            >
              {new URL(tool.website).hostname}
            </a>
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Use Cases</h2>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-muted-foreground">
              {tool.name} is ideal for {tool.category.toLowerCase()} tasks. Whether you're a professional, student, or
              entrepreneur, this tool can help you save time and improve your workflow.
            </p>
          </div>
        </motion.div>

        {/* Related Tools */}
        {relatedTools.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">Related Tools in {tool.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {relatedTools.map((relatedTool) => (
                <Link key={relatedTool.id} href={`/tools/${relatedTool.id}`}>
                  <div className="group p-6 rounded-lg border border-border bg-card hover:bg-card/80 transition-all duration-300 cursor-pointer">
                    <div className="text-4xl mb-4">{relatedTool.logo}</div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {relatedTool.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{relatedTool.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  )
}
