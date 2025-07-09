"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

type Photo = {
  img: string;
  country: string;
  description?: string;
};

type PhotoModalProps = {
  isOpen: boolean;
  photos: Photo[];
  loading: boolean;
  onClose: () => void;
};

export default function PhotoModal({
  isOpen,
  photos,
  loading,
  onClose,
}: PhotoModalProps) {
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
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={onClose}
            className="bg-black/30 backdrop-blur-md text-white p-2 rounded-full hover:bg-black/50 transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

        <div className="w-full h-[85vh] p-4">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <div className="relative h-24 w-24">
                <div className="absolute inset-0 rounded-full border-t-2 border-orange-500 animate-spin"></div>
                <div className="absolute inset-2 rounded-full border-r-2 border-orange-300 animate-spin animation-delay-150"></div>
                <div className="absolute inset-4 rounded-full border-b-2 border-orange-400 animate-spin animation-delay-300"></div>
              </div>
            </div>
          ) : photos.length > 0 ? (
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="w-full h-full flex items-center justify-center relative"
            >
              {photos.map((photo, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center px-4 h-full w-full"
                >
                  <div className="relative group overflow-hidden rounded-xl flex items-center justify-center w-full h-full">
                    <img
                      src={photo.img}
                      alt={`${photo.country} - ${index + 1}`}
                      className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10 group-hover:scale-[1.01] transition-transform duration-300 mx-auto"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="text-white">
                        <h3 className="font-bold">{photo.country}</h3>
                        {photo.description && (
                          <p className="text-sm text-gray-200">
                            {photo.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex flex-col justify-center items-center h-full text-white">
              <svg
                className="w-16 h-16 mb-4 opacity-40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-xl font-medium mb-2">Fotoğraf bulunamadı</p>
              <p className="text-sm text-gray-400">
                Bu ülke için henüz fotoğraf eklenmemiş olabilir.
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
