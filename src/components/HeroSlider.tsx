import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800',
      title: 'Commune de Fimela',
      subtitle: 'Perle du Delta du Sine-Saloum',
      description: 'Située au cœur du delta du Sine-Saloum, classé patrimoine mondial de l\'UNESCO.'
    },
    {
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800',
      title: 'Patrimoine Culturel',
      subtitle: 'Traditions Sérères vivantes',
      description: 'Les traditions sérères et les savoir-faire artisanaux constituent un patrimoine immatériel riche et vivant.'
    },
    {
      image: 'https://images.pexels.com/photos/1002638/pexels-photo-1002638.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800',
      title: 'Écotourisme',
      subtitle: 'Nature préservée',
      description: 'Entre mangroves, îles, bolongs et plages préservées, découvrez un environnement exceptionnel propice à l\'écotourisme.'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
              <div className="max-w-4xl">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 text-shadow">
                  {slide.title}
                </h1>
                <h2 className="text-xl lg:text-2xl mb-6 text-[#d3a277] font-semibold">
                  {slide.subtitle}
                </h2>
                <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                  {slide.description}
                </p>
                <button className="bg-[#0a8734] hover:bg-[#0a8734]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Découvrir Fimela
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200"
      >
        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;