"use client";
import { useTheme } from "@/app/components/context/themeContext";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LuImage } from "react-icons/lu";
import SimpleSlider from "@/app/components/slider/video";
import "./page.css";

interface GalleryItem {
  id: number;
  type: "image" | "video";
  src: string;
  thumbnail?: string;
  category: string;
  title: string;
  description: string;
  size: "small" | "medium" | "large";
}

const StoriesPage = () => {
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const bgDark = {
    backgroundImage: "url(/Home-page-dark.svg)",
    backgroundSize: "cover",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
  };

  const bgLight = {
    backgroundImage: "url(/Home-page-light.svg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  // Gallery items data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: "image",
      src: "/cele1.jpeg",
      category: "celebration",
      title: "Team Celebration",
      description: "Diwali Celebration",
      size: "small",
    },
    {
      id: 2,
      type: "image",
      src: "/team.jpeg",
      category: "team",
      title: "Team",
      description: "Festival Vibes in Air",
      size: "medium",
    },
    {
      id: 3,
      type: "image",
      src: "/activities1.jpeg",
      category: "activity",
      title: "WaterPark",
      description: "Outdoor fun with Team",
      size: "small",
    },
    {
      id: 4,
      type: "image",
      src: "/cele2.jpeg",
      category: "celebration",
      title: "Team Celebration",
      description: "Diwali Celebration",
      size: "small",
    },
    {
      id: 5,
      type: "image",
      src: "/activities2.jpeg",
      category: "activity",
      title: "WaterPark",
      description: "Picnic Days to Remember",
      size: "small",
    },
    {
      id: 6,
      type: "image",
      src: "/cele3.jpeg",
      category: "celebration",
      title: "Team Celebration",
      description: "Diwali Celebration",
      size: "small",
    },
    {
      id: 7,
      type: "image",
      src: "/Company_trip2_2025.jpg",
      category: "activity",
      title: "Chill Vibes",
      description: "Moving With Joyful Vibes",
      size: "small",
    },
    /* {
      id: 8,
      type: "image",
      src: "/activities4.jpeg",
      category: "activity",
      title: "Work Activity",
      description: "Our vibrant work environment",
      size: "small",
    }, */
    {
      id: 9,
      type: "image",
      src: "/cele4.jpeg",
      category: "celebration",
      title: "Team Celebration",
      description: "Diwali Celebration",
      size: "small",
    },
    {
      id: 10,
      type: "image",
      src: "/cele5.jpeg",
      category: "celebration",
      title: "Team Celebration",
      description: "Diwali Celebration",
      size: "small",
    },
    {
      id: 11,
      type: "image",
      src: "/cele6.jpeg",
      category: "celebration",
      title: "Team Celebration",
      description: "Diwali Celebration",
      size: "small",
    },
    {
      id: 12,
      type: "image",
      src: "/Company_trip1_2025.jpg",
      category: "activity",
      title: "WaterPark",
      description: "",
      size: "small",
    },
    {
      id: 13,
      type: "image",
      src: "/sandwich.jpg",
      category: "activity",
      title: "Party",
      description: "Office Treat Time",
      size: "small",
    },
    {
      id: 14,
      type: "image",
      src: "/sandwich2.jpg",
      category: "activity",
      title: "Party",
      description: "Tasty Break Moments",
      size: "small",
    },

    {
      id: 15,
      type: "image",
      src: "/company1.jpeg",
      category: "team",
      title: "Work Culture",
      description: "Teamwork in Motion",
      size: "medium",
    },
    {
      id: 16,
      type: "image",
      src: "/company2.jpeg",
      category: "team",
      title: "Team",
      description: "Growing Together Daily",
      size: "medium",
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "celebration", label: "Celebrations" },
    { id: "team", label: "Team" },
    { id: "activity", label: "Activities" },
  ];

  // Memoize filtered items to prevent unnecessary recalculations
  const filteredItems = React.useMemo(() => {
    return activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const handleItemClick = useCallback((item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedItem(null);
    // Restore body scroll
    document.body.style.overflow = "unset";
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1;
      setSelectedItem(filteredItems[newIndex]);
      return newIndex;
    });
  }, [filteredItems]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1;
      setSelectedItem(filteredItems[newIndex]);
      return newIndex;
    });
  }, [filteredItems]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (e.key) {
        case "Escape":
          closeModal();
          break;
        case "ArrowLeft":
          goToPrevious();
          break;
        case "ArrowRight":
          goToNext();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isModalOpen, closeModal, goToPrevious, goToNext]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  // Cleanup body overflow on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div
        className="dark:text-white dark:bg-[#170C3F] md:pb-32 overflow-hidden min-h-screen"
        style={theme === "dark" ? bgDark : bgLight}
        data-aos="fade-in"
      >
        <div className="pt-[250px] container max-w-[1320px] mx-auto px-4">
          {/* Header Section */}
          <div
            className="text-center mb-16 overflow-visible"
            data-aos="fade-up"
          >
            <h1 className="font-serif sm:text-8xl text-4xl mb-4 borderFont leading-[1.5]">
              <span
                className={`${
                  theme === "dark" ? "text-gradient" : "text-gradient1"
                } pr-[0.2rem]`}
              >
                Our
              </span>
              <span> Stories</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Experience the vibrant culture and exciting moments at
              Hit-N-Hammer through our gallery of memories.
            </p>
          </div>

          {/* Video Slider */}
          <div data-aos="fade-up" data-aos-delay="200">
            <SimpleSlider />
          </div>

          {/* Filter Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-12"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:shadow-md"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-auto">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleItemClick(item, index)}
                className={`gallery-item group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/30 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2
                  ${item.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                  ${item.size === "medium" ? "md:col-span-2" : ""}
                `}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                <div
                  className={`relative overflow-hidden ${
                    item.size === "large"
                      ? "aspect-[16/9]"
                      : item.size === "medium"
                      ? "aspect-[16/8]"
                      : "aspect-square min-h-[315px]"
                  }`}
                >
                  {item.type === "video" ? (
                    <>
                      <Image
                        src={item.thumbnail || item.src}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform transition-all duration-300 group-hover:scale-125 group-hover:bg-white/30">
                          <FaPlay className="text-white text-2xl ml-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  )}

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2 text-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-90 text-shadow">
                    {item.description}
                  </p>
                </div>

                {/* Type indicator */}
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-black/80 rounded-full p-2 shadow-lg">
                  {item.type === "video" ? (
                    <FaPlay className="text-purple-600 text-sm" />
                  ) : (
                    <LuImage className="text-purple-600 text-sm" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-auto">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="fixed top-6 right-6 z-30 text-white hover:text-purple-400 transition-colors duration-200 bg-black/50 rounded-full p-3 hover:bg-black/70"
            aria-label="Close modal"
          >
            <FaTimes className="text-2xl" />
          </button>

          {/* Navigation Buttons */}
          {filteredItems.length > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="fixed left-6 top-1/2 -translate-y-1/2 z-30 text-white bg-black/50 hover:bg-black/70 rounded-full p-4 transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <FaChevronLeft className="text-xl" />
              </button>
              <button
                onClick={goToNext}
                className="fixed right-6 top-1/2 -translate-y-1/2 z-30 text-white bg-black/50 hover:bg-black/70 rounded-full p-4 transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <FaChevronRight className="text-xl" />
              </button>
            </>
          )}

          {/* Modal Content */}
          <div className="relative w-full max-w-6xl flex flex-col items-center">
            {/* Image Container */}
            <div className="relative w-full flex justify-center items-center">
              {selectedItem.type === "video" ? (
                <video
                  src={selectedItem.src}
                  controls
                  autoPlay
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
              ) : (
                <div className="flex justify-center items-center max-h-[90vh]">
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    width={1920}
                    height={1080}
                    className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
                    style={{ maxHeight: "90vh" }}
                    priority
                  />
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="mt-6 w-full p-6 bg-black/60 backdrop-blur-md rounded-xl text-white">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-purple-400">
                    {selectedItem.title}
                  </h3>
                  <p className="text-gray-200 text-lg mb-2">
                    {selectedItem.description}
                  </p>
                  <div className="text-sm text-gray-400 capitalize">
                    Category: {selectedItem.category}
                  </div>
                </div>
                <div className="text-right text-sm text-gray-400">
                  <div className="bg-white/10 rounded-lg px-3 py-2">
                    {currentIndex + 1} of {filteredItems.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StoriesPage;
