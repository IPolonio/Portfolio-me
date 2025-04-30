"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Project data
const projects = [
  {
    id: 1,
    title: "Mobile Banking App",
    category: "Figma Prototypes",
    tags: ["UX/UI", "Fintech", "Mobile"],
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description:
      "A comprehensive mobile banking application designed to simplify financial management with intuitive navigation and secure transaction flows.",
    role: "Lead UX/UI Designer",
    tools: ["Figma", "Protopie", "After Effects"],
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/example",
  },
  {
    id: 2,
    title: "E-commerce Website Redesign",
    category: "Web Design",
    tags: ["E-commerce", "Responsive", "UI Design"],
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description:
      "A complete overhaul of an e-commerce platform focusing on conversion optimization and improved user experience across all devices.",
    role: "UI Designer",
    tools: ["Figma", "Illustrator"],
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/example",
  },
  {
    id: 3,
    title: "Smart Home Dashboard",
    category: "Motion Design",
    tags: ["IoT", "Dashboard", "Animation"],
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description:
      "An interactive dashboard for controlling smart home devices with animated transitions and data visualizations.",
    role: "Motion Designer",
    tools: ["Figma", "After Effects", "Lottie"],
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/example",
  },
  {
    id: 4,
    title: "Health & Fitness App",
    category: "Figma Prototypes",
    tags: ["Health", "Mobile", "UX Research"],
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description:
      "A fitness tracking application with personalized workout plans and nutrition guidance based on extensive user research.",
    role: "UX Researcher & Designer",
    tools: ["Figma", "Maze", "Miro"],
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/example",
  },
  {
    id: 5,
    title: "Travel Booking Platform",
    category: "Web Design",
    tags: ["Travel", "Booking", "Responsive"],
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description:
      "A comprehensive travel booking platform with immersive destination exploration and streamlined booking process.",
    role: "Senior UI Designer",
    tools: ["Figma", "Photoshop"],
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/example",
  },
  {
    id: 6,
    title: "Productivity Dashboard",
    category: "Motion Design",
    tags: ["Productivity", "Dashboard", "Data Viz"],
    thumbnail: "/placeholder.svg?height=600&width=800",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description:
      "A productivity suite with task management, time tracking, and performance analytics visualized through animated charts.",
    role: "UI/Motion Designer",
    tools: ["Figma", "After Effects", "Principle"],
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/example",
  },
]

// Filter categories
const categories = ["All", "Figma Prototypes", "Web Design", "Motion Design"]

export default function ProjectsGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    document.body.style.overflow = "hidden"
  }

  const closeProjectDetail = () => {
    setSelectedProject(null)
    document.body.style.overflow = ""
  }

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1))
    }
  }

  return (
    <section id="projects" className="py-20 w-full">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Explore my latest work showcasing Figma prototypes, interactive designs, and motion graphics
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              variant="ghost"
              className={cn(
                "rounded-full px-6 py-2 text-sm font-medium transition-all",
                selectedCategory === category
                  ? "bg-highlight text-white"
                  : "bg-secondary/10 hover:bg-secondary/20 text-primary",
              )}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card group bg-background border border-secondary rounded-lg overflow-hidden cursor-pointer hoverable"
              onClick={() => handleProjectClick(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="project-card-content">
                  <span className="inline-block px-3 py-1 rounded-full bg-highlight text-xs font-medium text-white mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mb-1">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-glow/20 text-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project detail overlay */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container min-h-screen py-16 px-4 md:px-6 flex flex-col">
                <div className="flex justify-between items-center mb-8">
                  <motion.h2
                    className="text-2xl md:text-3xl font-heading font-bold"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {selectedProject.title}
                  </motion.h2>
                  <motion.button
                    className="p-2 rounded-full bg-secondary/20 hover:bg-secondary/30 transition-colors"
                    onClick={closeProjectDetail}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close</span>
                  </motion.button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Image gallery */}
                  <motion.div
                    className="lg:col-span-2 relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg border border-secondary">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={selectedProject.images[currentImageIndex] || "/placeholder.svg"}
                            alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation arrows */}
                      <button
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-glow/20 hover:bg-glow/40 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          prevImage()
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                        <span className="sr-only">Previous</span>
                      </button>
                      <button
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-glow/20 hover:bg-glow/40 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          nextImage()
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                        <span className="sr-only">Next</span>
                      </button>

                      {/* Image indicators */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                        {selectedProject.images.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentImageIndex ? "bg-glow" : "bg-glow/30"
                            }`}
                            onClick={(e) => {
                              e.stopPropagation()
                              setCurrentImageIndex(index)
                            }}
                          >
                            <span className="sr-only">Image {index + 1}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Figma embed */}
                    <motion.div
                      className="mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <h3 className="text-xl font-heading font-medium mb-4">Interactive Prototype</h3>
                      <div className="relative aspect-video rounded-lg border border-secondary overflow-hidden bg-secondary/10">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <p className="text-primary/60">Figma prototype would be embedded here</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Project details */}
                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                  >
                    <div>
                      <h3 className="text-xl font-heading font-medium mb-2">About the Project</h3>
                      <p className="text-primary/80">{selectedProject.description}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-heading font-medium mb-2">Role</h3>
                      <p className="text-primary/80">{selectedProject.role}</p>
                    </div>

                    <div>
                      <h3 className="text-xl font-heading font-medium mb-2">Tools</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tools.map((tool) => (
                          <span key={tool} className="px-3 py-1 rounded-full bg-secondary/20 text-sm">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-heading font-medium mb-2">Tags</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-highlight/20 text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button className="animated-button text-white w-full">View Live Project</Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
