"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

// Workflow steps
const workflowSteps = [
  {
    id: 1,
    title: "Research",
    description:
      "Conducting user research, competitive analysis, and gathering requirements to inform the design process.",
    icon: "🔍",
  },
  {
    id: 2,
    title: "Wireframes",
    description: "Creating low-fidelity wireframes to establish information architecture and basic layout structures.",
    icon: "📝",
  },
  {
    id: 3,
    title: "UI Design",
    description: "Developing high-fidelity mockups with visual design elements, typography, and color schemes.",
    icon: "🎨",
  },
  {
    id: 4,
    title: "Prototyping",
    description: "Building interactive prototypes to simulate user flows and test functionality before development.",
    icon: "⚙️",
  },
  {
    id: 5,
    title: "User Testing",
    description: "Conducting usability tests with real users to gather feedback and identify areas for improvement.",
    icon: "👥",
  },
  {
    id: 6,
    title: "Handoff",
    description: "Preparing design specifications and assets for developers to implement the final product.",
    icon: "🚀",
  },
]

export default function WorkflowTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  })

  return (
    <section id="process" className="py-20 w-full">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            My Design <span className="gradient-text">Process</span>
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            A structured approach to creating intuitive and engaging digital experiences
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30 -translate-x-1/2" />

          {/* Progress indicator */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-glow -translate-x-1/2 origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          {/* Timeline steps */}
          <div className="space-y-24">
            {workflowSteps.map((step, index) => (
              <TimelineStep key={step.id} step={step} index={index} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TimelineStepProps {
  step: (typeof workflowSteps)[0]
  index: number
  progress: any
}

function TimelineStep({ step, index, progress }: TimelineStepProps) {
  const isEven = index % 2 === 0

  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const x = useTransform(scrollYProgress, [0, 0.5], isEven ? [-50, 0] : [50, 0])

  return (
    <div ref={ref} className={cn("relative flex items-center", isEven ? "flex-row" : "flex-row-reverse")}>
      {/* Content */}
      <motion.div
        className={cn(
          "w-5/12 p-6 rounded-lg border border-secondary bg-background/50 backdrop-blur-sm",
          isEven ? "text-right" : "text-left",
        )}
        style={{ opacity, x }}
      >
        <h3 className="text-xl font-heading font-bold mb-2">{step.title}</h3>
        <p className="text-primary/80 text-sm">{step.description}</p>
      </motion.div>

      {/* Center node */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-glow flex items-center justify-center text-white z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.2,
        }}
      >
        <span className="text-lg">{step.icon}</span>
      </motion.div>

      {/* Spacer */}
      <div className="w-5/12" />
    </div>
  )
}
