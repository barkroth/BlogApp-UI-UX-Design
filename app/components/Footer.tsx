"use client";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiArrowRight,
} from "react-icons/fi";

type Country = {
  id: number;
  name: string;
  image: string;
  alt: string;
  description: string;
};

type FooterProps = {
  countries: Country[];
  handleCountryClick: (country: string) => void;
  scrollToElement: (id: string) => void;
};

export default function Footer({
  countries,
  handleCountryClick,
  scrollToElement,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 -z-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400"></div>
      <div className="absolute top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-orange-400/10 to-red-500/5 backdrop-blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-red-400/10 to-orange-500/5 backdrop-blur-3xl"></div>
      <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-orange-400/10"></div>
      <div className="absolute top-2/3 right-1/3 w-4 h-4 rounded-full bg-red-400/20"></div>

      <div className="container mx-auto px-6 sm:px-10 relative z-10 bg-inherit">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl space-y-5"
          >
            <h3
              id="hakkimda"
              className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3"
            >
              <span className="w-8 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></span>
              <span>Hakkımda</span>
            </h3>
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-70 group-hover:opacity-100 blur group-hover:blur-md transition duration-500"></div>
                <img
                  src="/logo.jpg"
                  alt="Mehmet Deviren"
                  className="relative w-16 h-16 rounded-full object-cover bg-inherit"
                />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                  Mehmet Deviren
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Gezgin & Web Geliştirici
                </p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Merhaba! Ben Mehmet Deviren. Makine mühendisliğinden web
              geliştirme dünyasına adım atmış bir mühendisim. Kod yazmayı ve
              yeni teknolojiler keşfetmeyi tutkuyla seviyor, aynı zamanda
              objektifimle dünyanın dört bir yanına bakmaktan büyük keyif
              alıyorum.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Bu blogda Japonya, Sırbistan, İspanya, İtalya, Rusya ve Karadağ
              seyahatlerimde çektiğim kareleri sizlerle paylaşıyorum.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl space-y-5"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></span>
              <span>Hızlı Bağlantılar</span>
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <motion.a
                  whileHover={{ x: 3, color: "#f97316" }}
                  href="#"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-2"></span>
                  Ana Sayfa
                </motion.a>
                <motion.a
                  whileHover={{ x: 3, color: "#f97316" }}
                  onClick={() => scrollToElement("hakkimda")}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-2"></span>
                  Hakkımda
                </motion.a>
              </div>
              <div className="space-y-3">
                <motion.a
                  whileHover={{ x: 3, color: "#f97316" }}
                  onClick={() => scrollToElement("iletisim")}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-2"></span>
                  İletişim
                </motion.a>
                <motion.a
                  whileHover={{ x: 3, color: "#f97316" }}
                  onClick={() => scrollToElement("yorumlar")}
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mr-2"></span>
                  Yorumlar
                </motion.a>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <h4 className="font-medium text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-orange-400 rounded-full"></span>
                Ülkeler
              </h4>
              <div className="flex flex-wrap gap-2">
                {countries.map((country) => (
                  <motion.button
                    key={country.id}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleCountryClick(country.name)}
                    className="px-3 py-1 text-xs bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full shadow-sm hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:text-white transition-all duration-300"
                  >
                    {country.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 rounded-2xl space-y-5"
          >
            <h3
              id="iletisim"
              className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-3"
            >
              <span className="w-8 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></span>
              <span>İletişim</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Soru, öneri veya iş birliği teklifleri için sosyal medya
              hesaplarımdan veya e-posta yoluyla bana ulaşabilirsiniz.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <motion.a
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px -5px rgba(249, 115, 22, 0.2)",
                }}
                href="https://github.com/barkroth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/70 dark:bg-gray-800/70 p-3 rounded-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 dark:hover:from-orange-900/20 dark:hover:to-red-900/20 backdrop-blur-md transition-all duration-300 group border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm group-hover:bg-orange-500 dark:group-hover:bg-orange-500 transition-colors">
                  <FiGithub className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  GitHub
                </span>
              </motion.a>
              <motion.a
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px -5px rgba(249, 115, 22, 0.2)",
                }}
                href="https://www.instagram.com/h.mehmetdeviren/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/70 dark:bg-gray-800/70 p-3 rounded-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 dark:hover:from-orange-900/20 dark:hover:to-red-900/20 backdrop-blur-md transition-all duration-300 group border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm group-hover:bg-orange-500 dark:group-hover:bg-orange-500 transition-colors">
                  <FiInstagram className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  Instagram
                </span>
              </motion.a>
              <motion.a
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px -5px rgba(249, 115, 22, 0.2)",
                }}
                href="https://linkedin.com/in/mehmet-deviren-0999381a1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white/70 dark:bg-gray-800/70 p-3 rounded-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 dark:hover:from-orange-900/20 dark:hover:to-red-900/20 backdrop-blur-md transition-all duration-300 group border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm group-hover:bg-orange-500 dark:group-hover:bg-orange-500 transition-colors">
                  <FiLinkedin className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  LinkedIn
                </span>
              </motion.a>
              <motion.a
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px -5px rgba(249, 115, 22, 0.2)",
                }}
                href="mailto:mehmetdeviren1@hotmail.com"
                className="flex items-center space-x-3 bg-white/70 dark:bg-gray-800/70 p-3 rounded-xl hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 dark:hover:from-orange-900/20 dark:hover:to-red-900/20 backdrop-blur-md transition-all duration-300 group border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow-sm group-hover:bg-orange-500 dark:group-hover:bg-orange-500 transition-colors">
                  <FiMail className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  E-posta
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16 glassmorphism p-8 rounded-2xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Yolculuğuma Katılın
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Yeni seyahat deneyimlerim, fotoğraflarım ve blog yazılarımdan
                haberdar olmak için abone olun. Spam yok, sadece kaliteli
                içerik.
              </p>
            </div>
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="w-full p-3 pr-10 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200/70 dark:border-gray-700/70 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-orange-400 focus:border-transparent outline-none transition-all"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors w-8 h-8 flex items-center justify-center rounded-md hover:bg-orange-100 dark:hover:bg-orange-900/20">
                  <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-8 border-t border-gray-200/50 dark:border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-0 group-hover:opacity-70 blur transition duration-500"></div>
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  className="relative w-8 h-8 rounded-full object-cover bg-inherit"
                />
              </div>
              <span className="text-sm font-medium bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Mehmet'in Objektifinden
              </span>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                © {currentYear} Mehmet'in Objektifinden. Tüm hakları saklıdır.
              </p>
              <div className="flex items-center justify-center md:justify-end space-x-4 text-xs text-gray-500 dark:text-gray-400">
                <a
                  href="#"
                  className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  Gizlilik Politikası
                </a>
                <span>•</span>
                <a
                  href="#"
                  className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                >
                  Kullanım Şartları
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
