"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("theme")
    if (saved) {
      setIsDark(saved === "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    const html = document.documentElement
    if (newDark) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
    localStorage.setItem("theme", newDark ? "dark" : "light")
  }

  if (!mounted) return null

  return (
    <Button variant="outline" size="icon" onClick={toggleTheme} className="rounded-full bg-transparent">
      {isDark ? "☀️" : "🌙"}
    </Button>
  )
}
