"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ToolCard } from "@/components/tool-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AI_TOOLS } from "@/lib/ai-tools"
import { motion } from "framer-motion"

const CATEGORIES = [
  "All",
  "Text Generation",
  "Image Generation",
  "Productivity",
  "Code Generation",
  "Video Generation",
  "Video Editing",
  "Search",
  "Content Generation",
  "Audio",
]
const TYPES = ["All", "Free", "Paid", "Trial"]

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedType, setSelectedType] = useState("All")

  const filteredTools = useMemo(() => {
    return AI_TOOLS.filter((tool) => {
      const matchesSearch =
        tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory
      const matchesType = selectedType === "All" || tool.type === selectedType
      return matchesSearch && matchesCategory && matchesType
    })
  }, [searchQuery, selectedCategory, selectedType])

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore All AI Tools</h1>
          <p className="text-lg text-muted-foreground">
            Search and filter from our collection of 200+ AI tools to find what you need.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <Input
            placeholder="Search tools by name or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          {/* Category Filter */}
          <div>
            <h3 className="font-semibold mb-3">Category</h3>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div>
            <h3 className="font-semibold mb-3">Type</h3>
            <div className="flex flex-wrap gap-2">
              {TYPES.map((type) => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  onClick={() => setSelectedType(type)}
                  className="rounded-full"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <div>
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredTools.length} tool{filteredTools.length !== 1 ? "s" : ""}
          </p>

          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredTools.map((tool, index) => (
                <ToolCard key={tool.id} tool={tool} index={index} />
              ))}
            </div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <p className="text-lg text-muted-foreground mb-4">No tools found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("")
                  setSelectedCategory("All")
                  setSelectedType("All")
                }}
              >
                Reset Filters
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
