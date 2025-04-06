import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

interface SubTitleProps {
  title: string;
  underlineColor?: "blue" | "beige";
}

export const SubTitle = ({
  title,
  underlineColor = "beige",
}: SubTitleProps) => {
  const underlineClass =
    underlineColor === "blue"
      ? "bg-[#a5c5e5]"
      : "bg-co-secondary-beige";

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-3xl font-bold text-gray-800 mb-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
        {title}
      </h2>
      <div className={`w-20 h-1 mx-auto mb-6 ${underlineClass}`}></div>
    </motion.div>
  );
};
