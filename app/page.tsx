"use client";
import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { yorumEkle } from "../lib/yorumekle";
import {
  getYorumlar,
  subscribeToYorumlar,
  yorumSil,
  yorumGuncelle,
} from "../lib/firebase";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";

// Import components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CountriesSection from "./components/CountriesSection";
import CommentsSection from "./components/CommentsSection";
import Footer from "./components/Footer";
import PhotoModal from "./components/PhotoModal";
import CommentsModal from "./components/CommentsModal";

// Import data
import { countries } from "./data/countries";

export default function BlogHome() {
  // State management
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<string>("Genel");
  const filteredPhotos = useMemo(
    () => photos.filter((photo) => photo.country === selectedCountry),
    [photos, selectedCountry]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);
  const [commentCountry, setCommentCountry] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null);
  const [heroVisible, setHeroVisible] = useState(true);

  // Comment related states
  const [adSoyad, setAdSoyad] = useState("");
  const [yorumMetni, setYorumMetni] = useState("");
  const [secilenUlke, setSecilenUlke] = useState("Genel");
  const [yükleniyor, setYükleniyor] = useState(false);
  const [yorumlar, setYorumlar] = useState<any[]>([]);
  const [gosterilenYorumSayisi, setGosterilenYorumSayisi] = useState(3);

  const dahaFazlaGoster = () => {
    setGosterilenYorumSayisi((prev) => prev + 5);
  };

  // Scroll handler for parallax effects
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 100) {
        setHeroVisible(false);
      } else {
        setHeroVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Form submission handler
  const formuGonder = async (e: React.FormEvent) => {
    e.preventDefault();
    setYükleniyor(true);
    try {
      // If submitting from the country modal, use the commentCountry state
      const countryToSubmit = isCommentsModalOpen
        ? commentCountry
        : secilenUlke;

      await yorumEkle(adSoyad, yorumMetni, countryToSubmit);
      alert("Yorum başarıyla eklendi!");
      setAdSoyad("");
      setYorumMetni("");

      // Only reset the secilenUlke if not submitting from modal
      if (!isCommentsModalOpen) {
        setSecilenUlke("Genel");
      }

      // Real-time listener will automatically update the comments
      // No need to manually fetch again
    } catch (hata) {
      alert("Yorum eklenirken bir hata oluştu.");
    } finally {
      setYükleniyor(false);
    }
  };

  // Fetch comments on component mount and set up real-time listener
  useEffect(() => {
    // İlk yükleme
    const yorumlariGetir = async () => {
      const yorumdatası = await getYorumlar();
      setYorumlar(yorumdatası);
    };

    yorumlariGetir();

    // Gerçek zamanlı dinleyici
    const unsubscribe = subscribeToYorumlar((yeniYorumlar) => {
      setYorumlar(yeniYorumlar);
    });

    // Cleanup function
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  // Fetch photos function
  const getPhotos = async (country?: string) => {
    setLoading(true);
    try {
      const url = country
        ? `/api/photos?country=${encodeURIComponent(country)}`
        : "/api/photos";

      const response = await axios.get(url);
      setPhotos(response.data);
    } catch (error) {
      console.error("Fotoğraflar yüklenirken hata oluştu:", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch photos on component mount
  useEffect(() => {
    getPhotos();
  }, []);

  // Country click handler
  const handleCountryClick = async (country: string) => {
    setSelectedCountry(country);
    setCommentCountry(country);
    setIsCommentsModalOpen(true);
  };

  // Photo gallery opener
  const openPhotoGallery = async (country: string) => {
    await getPhotos(country);
    setIsModalOpen(true);
  };

  // Photo click handler
  const handlePhotoClick = (photo: any) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  // Modal close handler
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  // Comment filtering functions
  const ulkeyeGoreFiltrele = (ulke: string) => {
    return yorumlar.filter((yorum) => yorum.ulke === ulke);
  };

  const ulkeYorumSayisi = (ulke: string) => {
    return yorumlar.filter((yorum) => yorum.ulke === ulke).length;
  };

  // Yorum silme fonksiyonu
  const handleYorumSil = async (yorumId: string) => {
    try {
      await yorumSil(yorumId);
      // Real-time listener will automatically update the comments
    } catch (error) {
      console.error("Yorum silinirken hata:", error);
      throw error;
    }
  };

  // Yorum güncelleme fonksiyonu
  const handleYorumGuncelle = async (
    yorumId: string,
    yeniYorumMetni: string
  ) => {
    try {
      await yorumGuncelle(yorumId, yeniYorumMetni);
      // Real-time listener will automatically update the comments
    } catch (error) {
      console.error("Yorum güncellenirken hata:", error);
      throw error;
    }
  };

  // Scroll to element function
  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Navbar */}
        <Navbar
          countries={countries}
          scrollToElement={scrollToElement}
          handleCountryClick={handleCountryClick}
        />

        {/* Main Content */}
        <div>
          {/* Hero Section */}
          <HeroSection scrollY={scrollY} scrollToElement={scrollToElement} />

          {/* Countries Section */}
          <CountriesSection
            countries={countries}
            handleCountryClick={handleCountryClick}
            openPhotoGallery={openPhotoGallery}
            ulkeYorumSayisi={ulkeYorumSayisi}
          />

          {/* Comments Section */}
          <CommentsSection
            countries={countries}
            yorumlar={yorumlar}
            adSoyad={adSoyad}
            setAdSoyad={setAdSoyad}
            yorumMetni={yorumMetni}
            setYorumMetni={setYorumMetni}
            secilenUlke={secilenUlke}
            setSecilenUlke={setSecilenUlke}
            yükleniyor={yükleniyor}
            formuGonder={formuGonder}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            gosterilenYorumSayisi={gosterilenYorumSayisi}
            dahaFazlaGoster={dahaFazlaGoster}
            onYorumSil={handleYorumSil}
            onYorumGuncelle={handleYorumGuncelle}
          />
        </div>

        {/* Modals */}
        <AnimatePresence>
          {isModalOpen && (
            <PhotoModal
              isOpen={isModalOpen}
              photos={photos}
              loading={loading}
              onClose={closeModal}
            />
          )}

          {isCommentsModalOpen && (
            <CommentsModal
              isOpen={isCommentsModalOpen}
              onClose={() => setIsCommentsModalOpen(false)}
              commentCountry={commentCountry}
              countries={countries}
              yorumlar={yorumlar}
              adSoyad={adSoyad}
              setAdSoyad={setAdSoyad}
              yorumMetni={yorumMetni}
              setYorumMetni={setYorumMetni}
              yükleniyor={yükleniyor}
              formuGonder={formuGonder}
            />
          )}
        </AnimatePresence>

        {/* Footer */}
        <Footer
          countries={countries}
          handleCountryClick={handleCountryClick}
          scrollToElement={scrollToElement}
        />
      </div>
    </PageTransition>
  );
}
