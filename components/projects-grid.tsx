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
    title: "Digital Church website Boldfaith",
    category: "Figma Prototypes",
    tags: ["UX/UI", "Branding", "Bussiness"],
    thumbnail: "/images/Boldfaith-1.png",
    images: [
      "/images/Boldfaith-1.png",
      "/images/Boldfaith-3.png",
      "/images/Boldfaith-5.png",
    ],
    description:
      "An intuitive and user friendly web page prototype made in figma and lottie animations.",
    role: "Student",
    tools: ["Figma", "Figma Prototype", "Illustrator"],
    figmaEmbed: "https://embed.figma.com/proto/4lUMhw07GOPJHp3l9QGuZM/Yelp-persona?page-id=0%3A1&node-id=167-1841&viewport=8612%2C-17867%2C0.98&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=167%3A1841&embed-host=share",
  },
  {
    id: 2,
    title: "Project / job searching app Mattesy",
    category: "Figma Prototypes",
    tags: ["Bussiness", "Responsive", "UI Design"],
    thumbnail: "/images/Mattesy/mattesyhome.png",
    images: [
      "/images/church-1.png",
      "/images/church-2.png",
      "/images/church-3.png",
    ],
    description:
      "A complete prototype of a job search / collaboration platform made completely in figma",
    role: "Student",
    tools: ["Figma", "Illustrator"],
    figmaEmbed: "https://embed.figma.com/proto/ghWcpViVAluEcyy2Do5Aad/Mattesy?page-id=0%3A1&node-id=28-3641&viewport=45%2C317%2C0.09&scaling=scale-down&content-scaling=fixed&starting-point-node-id=28%3A4903&show-proto-sidebar=1&embed-host=share",
  },
  {
    id: 3,
    title: "F1 webflow site",
    category: "Web Design",
    tags: ["CMS", "Dashboard", "Webflow"],
    thumbnail: "/images/f1/main_page.png",
    images: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    description:
      "An interactive dashboard for controlling smart home devices with animated transitions and data visualizations.",
    role: "Motion Designer",
    tools: ["Figma", "After Effects", "Lottie"],
    figmaEmbed: "",
    liveUrl: "https://isaacs-site-8ecc03.webflow.io/"
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
                    {selectedProject.figmaEmbed && (
                      <motion.div
                        className="mt-8 -mx-4 md:-mx-6 lg:mx-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        <h3 className="text-xl font-heading font-medium mb-4 px-4 md:px-6 lg:px-0">Interactive Prototype</h3>
                        <div className="relative w-full overflow-x-auto">
                          <div className="relative w-[1440px] mx-auto rounded-lg border border-secondary overflow-hidden">
                            <iframe
                              style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                              width="1440"
                              height="800"
                              src={selectedProject.figmaEmbed}
                              allowFullScreen
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
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

                    // Update the View Live Project button to handle both Figma and live URLs
                    <Button 
                      className="animated-button text-white w-full"
                      onClick={() => {
                        const url = selectedProject.liveUrl || selectedProject.figmaEmbed;
                        if (url) window.open(url, '_blank');
                      }}
                    >
                      View Live Project
                    </Button>
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
