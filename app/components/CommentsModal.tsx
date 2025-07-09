"use client";
import { motion } from "framer-motion";

type Country = {
  id: number;
  name: string;
  image: string;
  alt: string;
  description: string;
};

type CommentsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  commentCountry: string;
  countries: Country[];
  yorumlar: any[];
  adSoyad: string;
  setAdSoyad: (value: string) => void;
  yorumMetni: string;
  setYorumMetni: (value: string) => void;
  yükleniyor: boolean;
  formuGonder: (e: React.FormEvent) => Promise<void>;
};

export default function CommentsModal({
  isOpen,
  onClose,
  commentCountry,
  countries,
  yorumlar,
  adSoyad,
  setAdSoyad,
  yorumMetni,
  setYorumMetni,
  yükleniyor,
  formuGonder,
}: CommentsModalProps) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 p-5">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-400 dark:border-orange-500 mr-4">
              <img
                src={
                  countries.find((country) => country.name === commentCountry)
                    ?.image || "/images/default.jpg"
                }
                alt={commentCountry}
                className="w-full h-full object-cover bg-inherit"
              />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">
                {commentCountry} Yorumları
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {
                  countries.find((country) => country.name === commentCountry)
                    ?.description
                }
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 bg-gray-100 dark:bg-gray-800 p-2 rounded-full"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex flex-col md:flex-row h-full">
          {/* Comments List */}
          <div className="flex-1 p-5 overflow-y-auto custom-scrollbar">
            <h3 className="text-lg font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                />
              </svg>
              Gezgin Deneyimleri
            </h3>

            {yorumlar.filter((yorum) => yorum.ulke === commentCountry).length >
            0 ? (
              <ul className="space-y-5">
                {yorumlar
                  .filter((yorum) => yorum.ulke === commentCountry)
                  .map((yorum, index) => (
                    <motion.li
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      key={index}
                      className="relative p-5 rounded-xl bg-gray-50/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="absolute top-0 right-0 h-24 w-24 bg-orange-50 dark:bg-orange-900/10 rounded-bl-3xl rounded-tr-xl -z-0"></div>

                      <div className="relative z-10">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-semibold text-xl shadow-lg">
                            {yorum.adSoyad.charAt(0).toUpperCase()}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-bold text-gray-800 dark:text-gray-100">
                                {yorum.adSoyad}
                              </p>
                              <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
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
                                  ?.toDate()
                                  .toLocaleString("tr-TR", {
                                    dateStyle: "medium",
                                    timeStyle: "short",
                                  })}
                              </span>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 mt-2">
                              {yorum.yorumMetni}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.li>
                  ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                <div className="w-20 h-20 bg-orange-50 dark:bg-orange-900/10 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-10 h-10 text-orange-400 opacity-70"
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
                </div>
                <h4 className="text-lg font-medium mb-2 text-gray-800 dark:text-gray-200">
                  Henüz yorum yapılmamış
                </h4>
                <p className="text-center max-w-md text-sm text-gray-600 dark:text-gray-400">
                  {commentCountry} hakkında ilk yorumu siz yapabilirsiniz.
                  Deneyimlerinizi paylaşarak diğer gezginlere yardımcı olun.
                </p>
              </div>
            )}
          </div>

          {/* Add Comment Form */}
          <div className="flex-1 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 p-5 bg-gray-50/50 dark:bg-gray-800/20 backdrop-blur-sm overflow-y-auto custom-scrollbar">
            <h3 className="text-lg font-bold mb-6 text-gray-800 dark:text-gray-200 flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              Yorum Ekle
            </h3>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                formuGonder(e);
              }}
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Adınız ve soyadınız"
                  value={adSoyad}
                  onChange={(e) => setAdSoyad(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 pl-10 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800/60 backdrop-blur-sm focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200 outline-none"
                  required
                />
                <div className="absolute left-3 top-3 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative">
                <textarea
                  placeholder="Deneyimlerinizi paylaşın..."
                  value={yorumMetni}
                  onChange={(e) => setYorumMetni(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 pl-10 h-36 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800/60 backdrop-blur-sm focus:ring-2 focus:ring-orange-400 focus:border-transparent transition duration-200 outline-none resize-none"
                  required
                />
                <div className="absolute left-3 top-3 text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>

              <input type="hidden" value={commentCountry} name="ulke" />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-orange-400 to-red-500 text-white py-3 rounded-lg font-medium hover:from-orange-500 hover:to-red-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center shadow-lg"
                disabled={yükleniyor}
              >
                {yükleniyor ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                    Yorumu Gönder
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-900/10 rounded-lg border border-orange-100 dark:border-orange-900/20">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                <svg
                  className="w-4 h-4 mr-1 text-orange-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Neden {commentCountry} hakkında yorum yapmalısınız?
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {commentCountry} hakkındaki deneyimlerinizi paylaşarak diğer
                gezginlere yardımcı olabilirsiniz. İpuçları, öneriler ve kişisel
                hikayeleriniz, seyahat planı yapanlar için çok değerli kaynaklar
                olabilir.
              </p>

              <div className="flex items-center gap-2 mt-3 text-gray-500 dark:text-gray-400 text-xs">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>Tüm yorumlar moderatör denetiminden geçmektedir.</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
