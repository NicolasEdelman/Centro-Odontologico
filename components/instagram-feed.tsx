"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function InstagramFeed() {
  const instagramPosts = [
    {
      id: 1,
      image: "images/InstagramPosts/1.png",
      link: "https://www.instagram.com/p/DF8XROkJ30A/",
      caption: "Blanqueamiento dental",
    },
    {
      id: 2,
      image: "images/InstagramPosts/2.png",
      link: "https://www.instagram.com/p/C2-thT8OXyJ/",
      caption: "Ortodoncia",
    },
    {
      id: 3,
      image: "images/InstagramPosts/3.png",
      link: "https://www.instagram.com/p/DCg_ldIJmZJ/",
      caption: "Cirugía e Implantes Dentales",
    },
    {
      id: 4,
      image: "images/InstagramPosts/4.png",
      link: "https://www.instagram.com/p/C5oXtrXOew4/",
      caption: "Odontología Digital",
    },
    {
      id: 5,
      image: "images/InstagramPosts/5.png",
      link: "https://www.instagram.com/p/DB_kBqKp_8f/",
      caption: "Odontopediatria",
    },
    {
      id: 6,
      image: "images/InstagramPosts/6.png",
      link: "https://www.instagram.com/p/C9vKxptJBsK/",
      caption: "Estética facial",
    },
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
    <section className="w-full pb-4 md:pb-12">
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

        <div className="grid grid-cols-5 md:grid-cols-3 md:gap-8 items-start">
          {/* Primeros 2 tercios */}
          <div className="col-span-3 md:col-span-2 pt-5 md:pt-0 flex flex-col items-end text-right md:space-y-6 md:pl-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-xl text-sm md:text-lg"
            >
              Mantente al día con nuestros últimos casos, consejos de salud
              bucal y promociones especiales
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:grid grid-cols-2 md:grid-cols-3 gap-4 hidden"
            >
              {/* Primeras 3 imágenes (caption arriba) */}
              {instagramPosts.slice(0, 3).map((post) => (
                <motion.div
                  key={post.id}
                  variants={item}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="relative w-full  rounded-lg bg-white overflow-hidden"
                >
                  <div className="relative w-full max-w-[150px] h-auto   overflow-visible space-y-2">
                    {/* Caption arriba */}
                    <div className="text-gray-700 text-center text-[11px] py-1">
                      {post.caption}
                    </div>

                    <Link
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block w-full h-full aspect-square max-w-[150px]"
                    >
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt="Instagram post"
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 rounded-lg"
                        fill={false}
                        width={400}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <Instagram
                          size={32}
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </Link>
                  </div>
                </motion.div>
              ))}

              {/* Últimas 3 imágenes (caption abajo) */}
              {instagramPosts.slice(3).map((post) => (
                <motion.div
                  key={post.id}
                  variants={item}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="relative w-full  rounded-lg bg-white overflow-hidden"
                >
                  <div className="relative w-full max-w-[150px] h-auto  overflow-visible space-y-2">
                    {/* Caption arriba */}

                    <Link
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block w-full h-full aspect-square max-w-[150px]"
                    >
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt="Instagram post"
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110 rounded-lg"
                        fill={false}
                        width={400}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                        <Instagram
                          size={32}
                          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </Link>
                    <div className="text-gray-700 text-center text-[11px] py-1">
                      {post.caption}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <Link
                href="https://instagram.com/centroodontologico.uy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-600 font-medium hover:underline text-sm md:text-lg"
              >
                <span>@centroodontologico.uy</span>
                <Instagram size={20} />
              </Link>
            </motion.div>
          </div>

          {/* Ultimo tercio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start md:mb-10 col-span-2 md:col-span-1"
          >
            <div className="md:w-[80%] flex justify-center">
              <Image
                src="/images/CeluInstagram.png"
                alt="Celu Imagen"
                width={400}
                height={800}
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
