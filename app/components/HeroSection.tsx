"use client";
import { motion } from "framer-motion";
import { FiCamera, FiInfo, FiArrowDown } from "react-icons/fi";

type HeroSectionProps = {
  scrollY: number;
  scrollToElement: (id: string) => void;
};

export default function HeroSection({
  scrollY,
  scrollToElement,
}: HeroSectionProps) {
  return (
    <div className="relative h-[90vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/Japonya75.jpeg')",
          transform: `translateY(${scrollY * 0.4}px)`,
          filter: "brightness(0.6) saturate(1.2)",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      <div className="relative flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Mehmet'in Objektifinden Dünya
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Dünyanın farklı köşelerinden fotoğraflarla dolu bir seyahat günlüğü.
            Japonya'dan İspanya'ya, Sırbistan'dan İtalya'ya uzanan yolculuğuma
            ortak olun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToElement("countries")}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <span className="flex items-center justify-center">
                <FiCamera className="mr-2" />
                Fotoğrafları Keşfet
              </span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToElement("hakkimda")}
              className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 hover:bg-white/30 transition-all"
            >
              <span className="flex items-center justify-center">
                <FiInfo className="mr-2" />
                Hikayemi Oku
              </span>
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-6"
        >
          <button
            onClick={() => scrollToElement("countries")}
            className="text-white p-2 rounded-full"
          >
            <FiArrowDown size={28} />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
