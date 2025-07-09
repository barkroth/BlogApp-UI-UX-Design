"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import {
  FiMessageCircle,
  FiHeart,
  FiGlobe,
  FiEdit3,
  FiTrash2,
  FiX,
  FiCheck,
} from "react-icons/fi";

type Country = {
  id: number;
  name: string;
  image: string;
  alt: string;
  description: string;
};

type CommentsSectionProps = {
  countries: Country[];
  yorumlar: any[];
  adSoyad: string;
  setAdSoyad: (value: string) => void;
  yorumMetni: string;
  setYorumMetni: (value: string) => void;
  secilenUlke: string;
  setSecilenUlke: (value: string) => void;
  yükleniyor: boolean;
  formuGonder: (e: React.FormEvent) => Promise<void>;
  selectedCountry: string;
  setSelectedCountry: (value: string) => void;
  gosterilenYorumSayisi: number;
  dahaFazlaGoster: () => void;
  onYorumSil?: (yorumId: string) => Promise<void>;
  onYorumGuncelle?: (yorumId: string, yeniYorumMetni: string) => Promise<void>;
};

export default function CommentsSection({
  countries,
  yorumlar,
  adSoyad,
  setAdSoyad,
  yorumMetni,
  setYorumMetni,
  secilenUlke,
  setSecilenUlke,
  yükleniyor,
  formuGonder,
  selectedCountry,
  setSelectedCountry,
  gosterilenYorumSayisi,
  dahaFazlaGoster,
  onYorumSil,
  onYorumGuncelle,
}: CommentsSectionProps) {
  const [editingYorumId, setEditingYorumId] = useState<string | null>(null);
  const [editingYorumMetni, setEditingYorumMetni] = useState("");
  const [silmeYorumId, setSilmeYorumId] = useState<string | null>(null);

  const handleEdit = (yorum: any) => {
    setEditingYorumId(yorum.id);
    setEditingYorumMetni(yorum.yorumMetni);
  };

  const handleSaveEdit = async () => {
    if (editingYorumId && onYorumGuncelle) {
      try {
        await onYorumGuncelle(editingYorumId, editingYorumMetni);
        setEditingYorumId(null);
        setEditingYorumMetni("");
      } catch (error) {
        alert("Yorum güncellenirken hata oluştu.");
      }
    }
  };

  const handleCancelEdit = () => {
    setEditingYorumId(null);
    setEditingYorumMetni("");
  };

  const handleDelete = async (yorumId: string) => {
    if (onYorumSil) {
      try {
        await onYorumSil(yorumId);
        setSilmeYorumId(null);
      } catch (error) {
        alert("Yorum silinirken hata oluştu.");
      }
    }
  };

  return (
    <div id="yorumlar" className="py-16 bg-inherit backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Seyahat Yorumları
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Gezginler anlatıyor: Seyahat deneyimlerinizi paylaşın, başkalarına
            ilham verin. Favori yerleriniz, tavsiyeleriniz ve anılarınız için
            buradayız.
          </p>
        </div>

        {/* Comment Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800/50 dark:to-gray-700/50 p-8 rounded-2xl shadow-xl mb-12 overflow-hidden backdrop-blur-sm"
        >
          <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 rounded-full bg-orange-400/10 backdrop-blur-xl z-0"></div>
          <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 rounded-full bg-red-400/10 backdrop-blur-xl z-0"></div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <FiMessageCircle className="mr-2 text-orange-500" />
              Yorum Bırak
            </h3>

            <form onSubmit={formuGonder} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="adSoyad"
                  >
                    Adınız Soyadınız
                  </label>
                  <input
                    id="adSoyad"
                    type="text"
                    placeholder="Adınız ve soyadınız"
                    value={adSoyad}
                    onChange={(e) => setAdSoyad(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-800 dark:text-gray-200 dark:bg-gray-800/60 backdrop-blur-sm focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200 outline-none shadow-sm"
                    required
                  />
                </div>

                <div className="flex-1">
                  <label
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    htmlFor="secilenUlke"
                  >
                    İlgili Ülke
                  </label>
                  <select
                    id="secilenUlke"
                    value={secilenUlke}
                    onChange={(e) => setSecilenUlke(e.target.value)}
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-800 dark:text-gray-200 dark:bg-gray-800/60 backdrop-blur-sm focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200 outline-none shadow-sm"
                  >
                    <option value="Genel">Genel</option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  htmlFor="yorumMetni"
                >
                  Yorumunuz
                </label>
                <textarea
                  id="yorumMetni"
                  placeholder="Deneyiminizi paylaşın..."
                  value={yorumMetni}
                  onChange={(e) => setYorumMetni(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-4 h-32 text-gray-800 dark:text-gray-200 dark:bg-gray-800/60 backdrop-blur-sm focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200 outline-none resize-none shadow-sm"
                  required
                />
              </div>

              <div className="flex justify-end">
                <motion.button
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 25px -5px rgba(249, 115, 22, 0.4)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-8 py-3 rounded-lg font-medium hover:from-orange-500 hover:to-red-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center shadow-lg"
                  disabled={yükleniyor}
                >
                  {yükleniyor ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <FiMessageCircle className="mr-2" />
                      Yorumu Gönder
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Comments List */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 overflow-hidden">
          <div className="flex justify-between items-center mb-8 border-b border-gray-200 dark:border-gray-700 pb-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
              <FiHeart className="mr-2 text-orange-500" />
              Gezgin Yorumları
            </h3>

            <div className="relative">
              <select
                className="appearance-none bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 pr-8 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-orange-400 focus:border-transparent text-sm shadow-sm"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
              >
                <option value="Genel">Tüm Yorumlar</option>
                {countries.map((country) => (
                  <option key={country.id} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          {yorumlar.filter(
            (yorum) =>
              selectedCountry === "Genel" || yorum.ulke === selectedCountry
          ).length > 0 ? (
            <>
              <ul className="space-y-6">
                {yorumlar
                  .filter(
                    (yorum) =>
                      selectedCountry === "Genel" ||
                      yorum.ulke === selectedCountry
                  )
                  .slice(0, gosterilenYorumSayisi)
                  .map((yorum, index) => (
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      key={index}
                      className="relative p-5 rounded-xl bg-inherit border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="absolute top-0 right-0 h-16 w-16 bg-orange-50 dark:bg-orange-900/10 rounded-bl-xl rounded-tr-xl z-0"></div>

                      <div className="relative z-10">
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold text-lg shadow-md">
                              {yorum.adSoyad.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="font-bold text-gray-800 dark:text-gray-100">
                                {yorum.adSoyad}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                                <svg
                                  className="w-3 h-3 mr-1"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                  ></path>
                                </svg>
                                {yorum.olusturulmaTarihi
                                  ? yorum.olusturulmaTarihi.toDate
                                    ? yorum.olusturulmaTarihi
                                        .toDate()
                                        .toLocaleString("tr-TR", {
                                          dateStyle: "medium",
                                          timeStyle: "short",
                                        })
                                    : yorum.olusturulmaTarihi.seconds
                                    ? new Date(
                                        yorum.olusturulmaTarihi.seconds * 1000
                                      ).toLocaleString("tr-TR", {
                                        dateStyle: "medium",
                                        timeStyle: "short",
                                      })
                                    : new Date(
                                        yorum.olusturulmaTarihi
                                      ).toLocaleString("tr-TR", {
                                        dateStyle: "medium",
                                        timeStyle: "short",
                                      })
                                  : "Yakın zamanda"}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {yorum.ulke && yorum.ulke !== "Genel" && (
                              <span className="text-xs font-medium px-3 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full shadow-sm flex items-center">
                                <FiGlobe className="mr-1" />
                                {yorum.ulke}
                              </span>
                            )}

                            {/* Edit/Silme Butonları */}
                            <div className="flex items-center gap-1">
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => handleEdit(yorum)}
                                className="p-1 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
                                title="Düzenle"
                              >
                                <FiEdit3 className="w-4 h-4" />
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setSilmeYorumId(yorum.id)}
                                className="p-1 text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                                title="Sil"
                              >
                                <FiTrash2 className="w-4 h-4" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                        {editingYorumId === yorum.id ? (
                          <div className="space-y-3">
                            <textarea
                              value={editingYorumMetni}
                              onChange={(e) =>
                                setEditingYorumMetni(e.target.value)
                              }
                              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-gray-800 dark:text-gray-200 dark:bg-gray-800/60 backdrop-blur-sm focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200 outline-none resize-none"
                              rows={3}
                            />
                            <div className="flex justify-end gap-2">
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleCancelEdit}
                                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors flex items-center"
                              >
                                <FiX className="mr-1" />
                                İptal
                              </motion.button>
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleSaveEdit}
                                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center"
                              >
                                <FiCheck className="mr-1" />
                                Kaydet
                              </motion.button>
                            </div>
                          </div>
                        ) : (
                          <p className="text-gray-700 dark:text-gray-300 pl-1">
                            {yorum.yorumMetni}
                          </p>
                        )}
                      </div>
                    </motion.li>
                  ))}
              </ul>

              {yorumlar.filter(
                (yorum) =>
                  selectedCountry === "Genel" || yorum.ulke === selectedCountry
              ).length > gosterilenYorumSayisi && (
                <div className="text-center mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={dahaFazlaGoster}
                    className="px-6 py-2 border border-orange-200 dark:border-orange-800/30 bg-orange-50 dark:bg-orange-900/10 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/20 transition-colors flex items-center mx-auto"
                  >
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                    Daha fazla yorum göster
                  </motion.button>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-gray-500 dark:text-gray-400">
              <svg
                className="w-16 h-16 mb-4 opacity-30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <h4 className="text-lg font-medium mb-2">
                Henüz yorum yapılmamış
              </h4>
              <p className="text-center max-w-md text-sm">
                Bu bölüme ilk yorumu siz yapabilirsiniz. Deneyimlerinizi
                paylaşarak diğer gezginlere yardımcı olun.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Silme Onay Modalı */}
      <AnimatePresence>
        {silmeYorumId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full shadow-2xl"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiTrash2 className="w-8 h-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Yorumu Sil
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Bu yorumu silmek istediğinizden emin misiniz? Bu işlem geri
                  alınamaz.
                </p>
                <div className="flex gap-3 justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSilmeYorumId(null)}
                    className="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
                  >
                    İptal
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleDelete(silmeYorumId)}
                    className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Sil
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
