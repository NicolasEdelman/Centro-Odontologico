"use client"

import { type ReactNode, useRef } from "react"
import { motion, useInView } from "framer-motion"

type AnimationVariant = "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "staggered" | "bounce" | "rotate"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  duration?: number
  id?: string
  fullWidth?: boolean
}

export default function AnimatedSection({
  children,
  className = "",
  variant = "fadeIn",
  delay = 0,
  duration = 0.5,
  id,
  fullWidth = false,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration, delay } },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration, delay } },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration, delay } },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration, delay } },
    },
    staggered: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
          delayChildren: delay,
        },
      },
    },
    bounce: {
      hidden: { opacity: 0, y: 50 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 15,
          delay,
        },
      },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -5 },
      visible: {
        opacity: 1,
        rotate: 0,
        transition: {
          duration,
          delay,
        },
      },
    },
  }

  // Si fullWidth es true, aplicamos la clase w-full
  const sectionClass = `${fullWidth ? "w-full" : ""} ${className}`.trim()

  return (
    <motion.section
      ref={ref}
      id={id}
      className={sectionClass}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
    >
      {children}
    </motion.section>
  )
}

