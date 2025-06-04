import { Button } from "../ui/button";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = ["/download.jpeg", "/DISCO.jpeg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [backgroundImages.length]);

  const whatsappMessage = encodeURIComponent(
    "Hello, I'm interested in booking you for my event!"
  );
  const whatsappNumber = "2348103031401";

  return (
    <section className="h-screen">
      {/* Background Image Slider */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`DJ Performance ${index + 1}`}
            className="w-full h-full object-cover scale-110 animate-ken-burns"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
              Sonic Speakers
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            Bringing{" "}
            <span className="text-purple-400 font-semibold">
              unforgettable vibes
            </span>{" "}
            to your event
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-white/80">
            <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              Professional Equipment
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              Custom Playlists
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
              Live Mixing
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                Book Now
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
              onClick={() =>
                document
                  .getElementById("events")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Play className="w-5 h-5 mr-2" />
              See Events
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse mt-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-purple-400" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
