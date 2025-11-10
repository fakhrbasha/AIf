"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { AITool } from "@/lib/ai-tools"

interface ToolCardProps {
  tool: AITool
  index?: number
}

export function ToolCard({ tool, index = 0 }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Link href={`/tools/${tool.id}`}>
        <div className="group p-6 rounded-lg border border-border bg-card hover:bg-card/80 transition-all duration-300 cursor-pointer">
          <div className="text-4xl mb-4">{tool.logo}</div>
          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{tool.description}</p>
          <div className="flex items-center justify-between">
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                tool.type === "Free"
                  ? "bg-green-500/20 text-green-400"
                  : tool.type === "Paid"
                    ? "bg-purple-500/20 text-purple-400"
                    : "bg-blue-500/20 text-blue-400"
              }`}
            >
              {tool.type}
            </span>
            <span className="text-xs text-muted-foreground">{tool.category}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
