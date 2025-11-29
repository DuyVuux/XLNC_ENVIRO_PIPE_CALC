"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      title: "Automated Water Treatment Engineering",
      description: "Accurate sizing for pipelines, tanks, aeration and filtration.",
      buttonText: "Start Designing",
      buttonLink: "#modules",
      image: "/images/industrial-water-plant.jpg",
      alt: "Industrial water plant",
    },
    {
      title: "Professional Tools for Environmental Engineers",
      description: "Built for water supply, wastewater, and industrial facilities.",
      buttonText: "Explore Modules",
      buttonLink: "#modules",
      image: "/images/scada-control-room.jpg",
      alt: "SCADA control room",
    },
    {
      title: "XLNC Engineering Modules",
      description: "Pipe sizing, aeration, mixing, settling, filtration.",
      buttonText: "View Details",
      buttonLink: "#modules",
      image: "/images/pipelines-and-valves.jpg",
      alt: "Pipelines and valves",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[600px] overflow-hidden pt-[112px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            alt={slide.alt}
            src={slide.image}
            className="absolute inset-0 w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            onError={(e) => {
              console.error("Image failed to load:", slide.image, e);
            }}
            onLoad={() => {
              console.log("Image loaded:", slide.image);
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-start text-white z-10">
            <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
              <Link
                href={slide.buttonLink}
                className="bg-blue-900 text-white py-3 px-8 rounded font-semibold hover:bg-opacity-90 transition-colors inline-block"
              >
                {slide.buttonText}
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 text-white bg-black bg-opacity-50 hover:bg-opacity-70 focus:outline-none transition-all duration-200 p-4 rounded-r-lg"
        aria-label="Previous slide"
      >
        <span className="material-icons text-4xl">chevron_left</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 text-white bg-black bg-opacity-50 hover:bg-opacity-70 focus:outline-none transition-all duration-200 p-4 rounded-l-lg"
        aria-label="Next slide"
      >
        <span className="material-icons text-4xl">chevron_right</span>
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
