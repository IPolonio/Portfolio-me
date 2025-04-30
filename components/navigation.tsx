"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/#projects" },
  { name: "Prototypes", path: "/#prototypes" },
  { name: "Process", path: "/#process" },
  { name: "Contact", path: "/#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("/")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Check which section is currently in view
      const sections = ["projects", "prototypes", "process", "contact"]

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`/#${section}`)
            return
          }
        }
      }

      // If no section is in view, set to home
      if (window.scrollY < 100) {
        setActiveSection("/")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (path: string) => {
    setIsOpen(false)
    setActiveSection(path)
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md py-2" : "bg-transparent py-4",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-glow flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="font-heading font-bold text-white text-lg">IP</span>
          </motion.div>
          <span className="font-heading font-bold text-xl hidden sm:inline-block">
            Isaac<span className="gradient-text">Polonio</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "relative font-medium text-sm transition-colors hover:text-highlight",
                activeSection === item.path ? "text-highlight" : "text-foreground",
              )}
              onClick={() => handleNavClick(item.path)}
            >
              {item.name}
              {activeSection === item.path && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-highlight"
                  layoutId="navbar-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <ModeToggle />

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="container flex flex-col h-full">
              <div className="flex items-center justify-between py-4">
                <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-accent to-glow flex items-center justify-center">
                    <span className="font-heading font-bold text-white text-lg">IP</span>
                  </div>
                  <span className="font-heading font-bold text-xl">
                    Isaac<span className="gradient-text">Polonio</span>
                  </span>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
                {navItems.map((item) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={item.path}
                      className={cn(
                        "text-2xl font-heading font-medium transition-colors hover:text-highlight",
                        activeSection === item.path ? "text-highlight" : "text-foreground",
                      )}
                      onClick={() => handleNavClick(item.path)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
