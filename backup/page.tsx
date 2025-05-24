"use client";
import { useTheme } from "@/app/components/context/themeContext";
import Image from "next/image";
import React, { useState, useEffect } from "react";
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

  // Sample gallery items - replace with your actual content
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: "image",
      src: "/cele1.jpeg",
      category: "celebration",
      title: "Team Celebration",
      description: "Annual team celebration event",
      size: "small",
    },
    {
      id: 2,
      type: "image",
      src: "/team.jpeg",
      category: "team",
      title: "Team Building",
      description: "Team building activities",
      size: "medium",
    },
    {
      id: 3,
      type: "image",
      src: "/activities1.jpeg",
      category: "activity",
      title: "Work activity",
      description: "Our vibrant work environment",
      size: "small",
    },
    {
      id: 4,
      type: "image",
      src: "/cele2.jpeg",
      category: "celebration",
      title: "Team Celebration",
      description: "Annual team celebration event",
      size: "small",
    },
    {
      id: 5,
      type: "image",
      src: "/activities2.jpeg",
      category: "activity",
      title: "Work activity",
      description: "Our vibrant work environment",
      size: "small",
    },
    {
      id: 6,
      type: "image",
      src: "/cele3.jpeg",
      category: "celebration",
      title: "Team Celebration",
      description: "Annual team celebration event",
      size: "small",
    },
    {
      id: 7,
      type: "image",
      src: "/activities3.jpeg",
      category: "activity",
      title: "Work activity",
      description: "Our vibrant work environment",
      size: "small",
    },
    {
      id: 8,
      type: "image",
      src: "/activities4.jpeg",
      category: "activity",
      title: "Work activity",
      description: "Our vibrant work environment",
      size: "small",
    },
    {
      id: 9,
      type: "image",
      src: "/cele4.jpeg",
      category: "celebration",
      title: "Team Celebration",
      description: "Annual team celebration event",
      size: "small",
    },
    {
      id: 10,
      type: "image",
      src: "/cele5.jpeg",
      category: "celebration",
      title: "Team Celebration",
      description: "Annual team celebration event",
      size: "small",
    },
    {
      id: 11,
      type: "image",
      src: "/cele6.jpeg",
      category: "celebration",
      title: "Team Celebration",
      description: "Annual team celebration event",
      size: "small",
    },
    {
      id: 12,
      type: "image",
      src: "/company1.jpeg",
      category: "team",
      title: "Team Building",
      description: "Team building activities",
      size: "medium",
    },
    {
      id: 13,
      type: "image",
      src: "/company2.jpeg",
      category: "team",
      title: "Team Building",
      description: "Team building activities",
      size: "medium",
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "celebration", label: "Celebrations" },
    { id: "team", label: "Team" },
    { id: "activity", label: "Activities" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  const handleItemClick = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (isModalOpen && filteredItems[currentIndex]) {
      setSelectedItem(filteredItems[currentIndex]);
    }
  }, [currentIndex, isModalOpen, filteredItems]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div
      className="dark:text-white dark:bg-[#170C3F] md:pb-32 overflow-hidden"
      style={theme === "dark" ? bgDark : bgLight}
      data-aos="fade-in"
    >
      <div className="pt-[250px] container max-w-[1320px] mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl mb-4">
            <span
              className={theme === "dark" ? "text-gradient" : "text-gradient1"}
            >
              Our
            </span>
            <span> Stories</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Experience the vibrant culture and exciting moments at Hit-N-Hammer
            through our gallery of memories.
          </p>
        </div>

        <SimpleSlider />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full transition-all filter-button ${
                activeFilter === filter.id
                  ? "bg-primary text-gray-1000 font-medium"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-auto">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={(e) => handleItemClick(item, index)}
              className={`group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-700 cursor-pointer gallery-item transition-all duration-300
                ${item.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                ${item.size === "medium" ? "md:col-span-2" : ""}
                hover:shadow-xl`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div
                className={`relative flex items-center justify-center ${
                  item.size === "large"
                    ? "aspect-[16/9]"
                    : item.size === "medium"
                    ? "aspect-[16/7]"
                    : "aspect-[1/1] min-h-[200px]"
                }`}
              >
                {item.type === "video" ? (
                  <>
                    <Image
                      src={item.thumbnail || item.src}
                      alt={item.title}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <FaPlay className="text-white text-4xl transform transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className={`transition-transform duration-300 group-hover:scale-105 ${
                      item.size === "small" ? "object-contain" : "object-cover"
                    }`}
                  />
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.description}</p>
              </div>
              <div className="absolute top-2 right-2 bg-white/80 dark:bg-black/80 rounded-full p-2">
                {item.type === "video" ? (
                  <FaPlay className="text-primary" />
                ) : (
                  <LuImage className="text-primary" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {/*{isModalOpen && selectedItem && (
          <div className="inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
              onClick={closeModal}
            />
            <div className="relative z-10 w-full max-w-6xl max-h-[90vh] flex flex-col">
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 text-white hover:text-primary transition-colors z-20"
              >
                <FaTimes className="text-3xl" />
              </button>

              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-20"
              >
                <FaChevronLeft className="text-xl" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 z-20"
              >
                <FaChevronRight className="text-xl" />
              </button>

              <div className="relative rounded-xl overflow-hidden bg-white/5 backdrop-blur-md w-full h-full flex items-center justify-center">
                {selectedItem.type === "video" ? (
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full p-4">
                    <Image
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      width={1920}
                      height={1080}
                      className="max-w-full max-h-[80vh] object-contain"
                    />
                  </div>
                )}
              </div>

              <div className="mt-4 p-4 bg-black/80 rounded-b-xl text-white">
                <h3 className="text-2xl font-semibold mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-gray-200">{selectedItem.description}</p>
                <div className="mt-2 text-sm text-gray-300">
                  {currentIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </div>
          </div>
        )}*/}

        {isModalOpen && (
          <div className="absolute bg-black top-0 left-0 h-screen w-full"></div>
        )}
      </div>
    </div>
  );
};

//give me 5 minutes make sure to open this anydesk connection
//okay

export default StoriesPage;
