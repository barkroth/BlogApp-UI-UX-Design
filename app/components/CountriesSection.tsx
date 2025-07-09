"use client";
import { motion } from "framer-motion";
import { FiCamera, FiMessageCircle } from "react-icons/fi";

type Country = {
  id: number;
  name: string;
  image: string;
  alt: string;
  description: string;
};

type CountriesSectionProps = {
  countries: Country[];
  handleCountryClick: (country: string) => void;
  openPhotoGallery: (country: string) => void;
  ulkeYorumSayisi: (country: string) => number;
};

export default function CountriesSection({
  countries,
  handleCountryClick,
  openPhotoGallery,
  ulkeYorumSayisi,
}: CountriesSectionProps) {
  return (
    <div id="countries" className="py-16 bg-inherit">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Keşfedilen Ülkeler
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Objektifimden yansıyan ülkeler ve şehirler. Her birinde yaşadığım
            deneyimler ve çektiğim fotoğraflarla size unutulmaz anılar
            sunuyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {countries.map((country) => (
            <motion.div
              key={country.id}
              whileHover={{ scale: 1.03 }}
              className="glass-card overflow-hidden cursor-pointer relative group rounded-2xl shadow-lg"
              onClick={() => handleCountryClick(country.name)}
            >
              <h3 className="absolute top-4 left-4 z-10 text-xl font-semibold text-white shadow-text">
                {country.name}
              </h3>

              <div className="overflow-hidden h-64">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={country.image}
                  alt={country.alt}
                  className="object-cover w-full h-full transition-all duration-500"
                />
              </div>

              {ulkeYorumSayisi(country.name) > 0 && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center justify-center bg-orange-500 text-white text-xs font-bold rounded-full h-6 w-6 shadow-lg">
                    {ulkeYorumSayisi(country.name)}
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

              <div className="absolute bottom-0 left-0 right-0 p-4 text-white z-10">
                <p className="text-sm text-gray-200 mb-3">
                  {country.description}
                </p>
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      openPhotoGallery(country.name);
                    }}
                    className="flex-1 bg-orange-500 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center"
                  >
                    <FiCamera className="mr-1" />
                    Fotoğraflar
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex-1 bg-white/20 backdrop-blur-sm text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center"
                  >
                    <FiMessageCircle className="mr-1" />
                    Yorumlar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
