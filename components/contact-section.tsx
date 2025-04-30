"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import { BehanceIcon } from "./icons/behance-icon"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 w-full bg-muted">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a collaboration? Get in touch!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-4xl mx-auto">
          {/* Contact options */}
          <motion.div
            className="bg-background rounded-lg border border-secondary p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-heading font-medium mb-6">Get in Touch</h3>

            <div className="space-y-4">
              <p className="text-primary/80">
                Ready to start a project together? Click the button below to send me an email:
              </p>
              
              <a
                href="mailto:Polonio.isaac@gmail.com?subject=Project%20Inquiry&body=Hi%20Isaac%2C%0D%0A%0D%0AI'd%20like%20to%20discuss%20a%20project%20with%20you.%0D%0A%0D%0AName%3A%0D%0AProject%20Details%3A%0D%0A"
                className="block w-full"
              >
                <Button
                  type="button"
                  className="w-full bg-accent hover:bg-glow text-white transition-colors duration-300"
                >
                  Email Me Directly
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h3 className="text-xl font-heading font-medium mb-4">Contact Information</h3>
              <p className="text-primary/80 mb-2">Feel free to reach out through any of these channels:</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-highlight mr-2">📧</span>
                  <a href="mailto:Polonio.isaac@gmail.com" className="hover:text-highlight transition-colors">
                    Polonio.isaac@gmail.com
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="text-highlight mr-2">📱</span>
                  <a 
                    href="https://wa.me/18296423667"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="hover:text-highlight transition-colors"
                  >
                    WhatsApp: +1 (829) 642-3667
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="text-highlight mr-2">📍</span>
                  <span>Dominican Republic</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-heading font-medium mb-4">Connect on Social Media</h3>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/IPolonio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 text-highlight transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/ipolonio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 text-highlight transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="https://www.behance.net/isaacpolonio1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 text-highlight transition-colors"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <BehanceIcon className="h-5 w-5" />
                  <span className="sr-only">Behance</span>
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-medium mb-4">Availability</h3>
              <p className="text-primary/80">
                Currently available for freelance projects and collaborations. I typically respond within 24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
