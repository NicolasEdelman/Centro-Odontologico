"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function InstagramFeed() {
  // Simulated Instagram posts
  const instagramPosts = [
    { id: 1, image: "/placeholder.svg?height=400&width=400" },
    { id: 2, image: "/placeholder.svg?height=400&width=400" },
    { id: 3, image: "/placeholder.svg?height=400&width=400" },
    { id: 4, image: "/placeholder.svg?height=400&width=400" },
    { id: 5, image: "/placeholder.svg?height=400&width=400" },
    { id: 6, image: "/placeholder.svg?height=400&width=400" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="w-full pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center gap-2">
              <Instagram size={28} className="text-pink-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                Seguínos en Instagram
              </h2>
            </div>
            <div className="w-16 h-1 bg-pink-600 mt-2"></div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Mantente al día con nuestros últimos casos, consejos de salud bucal y
          promociones especiales
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {instagramPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={item}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <Link
                href="https://instagram.com/centroodontologico.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-lg block"
              >
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt="Instagram post"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <Instagram
                    size={32}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            href="https://instagram.com/centroodontologico.uy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 font-medium hover:underline"
          >
            <span>@centroodontologico.uy</span>
            <Instagram size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
