"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  useEffect(() => {
    const handleLinkHover = () => setCursorVariant("link");
    const handleLinkLeave = () => setCursorVariant("default");

    // Add event listeners to links and images
    const links = document.querySelectorAll("a, button, .cursor-hover-effect");
    const images = document.querySelectorAll("img, .swiper-slide");

    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    images.forEach((image) => {
      image.addEventListener("mouseenter", handleLinkHover);
      image.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });

      images.forEach((image) => {
        image.removeEventListener("mouseenter", handleLinkHover);
        image.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      height: 24,
      width: 24,
      backgroundColor: "rgba(255, 102, 0, 0.2)",
      border: "1px solid rgba(255, 102, 0, 0.5)",
      transition: {
        type: "spring",
        mass: 0.5,
        damping: 20,
      },
    },
    link: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      height: 40,
      width: 40,
      backgroundColor: "rgba(255, 102, 0, 0.1)",
      border: "1px solid rgba(255, 102, 0, 0.8)",
      transition: {
        type: "spring",
        mass: 0.5,
        damping: 20,
      },
    },
  };

  return (
    <motion.div
      className="cursor-dot fixed top-0 left-0 z-[9999] rounded-full pointer-events-none hidden md:block"
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default CustomCursor; 