"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 400])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 600])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-background">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, #023020 0%, transparent 50%)",
              "radial-gradient(circle at 80% 70%, #023020 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, #023020 0%, transparent 50%)",
              "radial-gradient(circle at 60% 20%, #023020 0%, transparent 50%)",
              "radial-gradient(circle at 20% 30%, #023020 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 70% 40%, #1AB385 0%, transparent 30%)",
              "radial-gradient(circle at 30% 60%, #1AB385 0%, transparent 30%)",
              "radial-gradient(circle at 60% 10%, #1AB385 0%, transparent 30%)",
              "radial-gradient(circle at 20% 90%, #1AB385 0%, transparent 30%)",
              "radial-gradient(circle at 70% 40%, #1AB385 0%, transparent 30%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: 1,
          }}
        />
      </div>

      {/* Parallax elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-secondary/10 blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-highlight/10 blur-3xl"
        style={{ y: y2 }}
      />
      <motion.div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-glow/10 blur-3xl" style={{ y: y3 }} />

      {/* Hero content */}
      <motion.div className="container relative z-10 text-center" style={{ opacity }}>
        <motion.h2
          className="text-xl md:text-2xl mb-4 text-primary/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hello, I'm
        </motion.h2>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="block">Design</span>
          <span className="gradient-text">Portfolio</span>
        </motion.h1>

        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl text-primary/80 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          UX/UI Designer & Figma Specialist creating immersive digital experiences
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button asChild className="animated-button text-white px-8 py-6 text-lg">
            <a href="#projects">
              <span>View Work</span>
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ opacity }}
      >
        <ArrowDown className="h-6 w-6 text-primary/60" />
      </motion.div>
    </section>
  )
}
