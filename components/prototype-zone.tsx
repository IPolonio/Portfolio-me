"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image'

// Prototype data
const prototype = {
  id: 1,
  title: "Mattesy - Job Search Platform",
  description:
    "A complete prototype of a job search and collaboration platform designed to connect professionals and streamline the job search process.",
  wireframeImage: "/images/Mattesy/Home.svg",
  finalImage: "/images/Mattesy/Home.svg",
  figmaUrl: "https://embed.figma.com/proto/ghWcpViVAluEcyy2Do5Aad/Mattesy?page-id=0%3A1&node-id=28-3641&viewport=45%2C317%2C0.09&scaling=scale-down&content-scaling=fixed&starting-point-node-id=28%3A4903&show-proto-sidebar=1&embed-host=share",
  hotspots: [
    { x: 30, y: 20, label: "Job Listings" },
    { x: 70, y: 40, label: "Profile Section" },
    { x: 50, y: 70, label: "Search Filters" },
  ],
}

export default function PrototypeZone() {
  const [viewMode, setViewMode] = useState<"wireframe" | "final">("final")

  return (
    <section id="prototypes" className="py-20 w-full bg-muted">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Interactive <span className="gradient-text">Prototype</span>
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Explore functional Figma prototype with interactive elements and seamless transitions
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start max-w-4xl mx-auto">
          {/* Prototype info */}
          <motion.div
            className="lg:w-1/3 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-xl font-heading font-medium mb-2">{prototype.title}</h3>
              <p className="text-primary/80 text-sm">{prototype.description}</p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Interaction Guide</h4>
              <p className="text-sm text-primary/70">
                Click on the hotspots to explore different features of the prototype
              </p>
            </div>

            <Button 
              className="w-full bg-accent hover:bg-glow text-white transition-colors duration-300"
              onClick={() => window.open(prototype.figmaUrl, '_blank')}
            >
              Open in Figma
            </Button>
          </motion.div>

          {/* Prototype display */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-background rounded-lg border border-secondary p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-heading font-medium">Preview</h3>

                <Tabs
                  defaultValue="final"
                  value={viewMode}
                  onValueChange={(value) => setViewMode(value as "wireframe" | "final")}
                >
                  <TabsList className="bg-secondary/10">
                    <TabsTrigger value="wireframe">Wireframe</TabsTrigger>
                    <TabsTrigger value="final">Final Design</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="relative mx-auto w-full max-w-[300px] aspect-[9/16]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={viewMode}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-secondary"
                    style={{
                      backgroundColor: viewMode === "wireframe" ? "#023020" : "#010B13",
                    }}
                  >
                    <div className="absolute inset-0">
                      <Image 
                        src={viewMode === "wireframe" ? prototype.wireframeImage : prototype.finalImage}
                        alt={prototype.title}
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Hotspots */}
                    {prototype.hotspots.map((hotspot, index) => (
                      <div
                        key={index}
                        className="group absolute"
                        style={{
                          left: `${hotspot.x}%`,
                          top: `${hotspot.y}%`,
                        }}
                      >
                        <motion.div
                          className="w-6 h-6 rounded-full bg-highlight pulse cursor-pointer"
                          style={{
                            transform: "translate(-50%, -50%)",
                          }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.3 + index * 0.1,
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          }}
                          whileHover={{ scale: 1.2 }}
                        />
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full mt-[-10px] bg-background border border-secondary rounded-md px-2 py-1 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                          {hotspot.label}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
