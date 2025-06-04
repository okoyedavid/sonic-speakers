import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card.jsx";
import HeroSection from "../components/HeroSection";
import MediaGallery from "../components/MediaGallery";
import ContactForm from "../components/ContactForm";
import Navigation from "../ui/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { Calendar, Users, Music, Heart, Trophy, Star } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen text-white orbitron">
      <div className="relative overflow-hidden">
        <Navigation />
        <HeroSection />
      </div>

      {/* Event Categories */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our DJ Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional DJ services tailored to make your event
              unforgettable. From intimate ceremonies to high-energy
              celebrations, we bring the perfect soundtrack to your special
              moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventCategories.map((category, index) => (
              <Link key={index} to={category.link}>
                <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl backdrop-blur-sm group">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      {category.description}
                    </p>
                    <Button className="mt-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Media Showcase */}
      <section id="events" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Recent Events
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Take a look at some of our recent events and see how we bring
              energy and excitement to every celebration.
            </p>
          </div>

          <MediaGallery items={featuredMedia} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                200+
              </div>
              <p className="text-gray-400 text-lg">Events Completed</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                5+
              </div>
              <p className="text-gray-400 text-lg">Years Experience</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                100%
              </div>
              <p className="text-gray-400 text-lg">Client Satisfaction</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-gray-400 text-lg">Available Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Ready to Book Your Event?
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Let's make your event unforgettable! Contact us today to discuss
                your vision, music preferences, and how we can bring the perfect
                energy to your celebration.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Music className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg">
                    Professional Equipment &amp; Setup
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg">Personalized Music Curation</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg">
                    Unforgettable Experience Guarantee
                  </span>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;

const featuredMedia = [
  {
    id: 2,
    type: "image",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1920&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=400&q=80",
    title: "Birthday Celebration",
    category: "Birthday",
  },
  {
    id: 3,
    type: "image",
    src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1920&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=400&q=80",
    title: "Competition Event",
    category: "Competition",
  },
  {
    id: 4,
    type: "image",
    src: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=1920&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&w=400&q=80",
    title: "New Year Party",
    category: "End of Year",
  },
  {
    id: 5,
    type: "image",
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1920&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=400&q=80",
    title: "Naming Ceremony",
    category: "Naming Ceremony",
  },
  {
    id: 6,
    type: "image",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1920&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&q=80",
    title: "Award Ceremony",
    category: "Ceremony",
  },
];

const eventCategories = [
  {
    icon: Heart,
    title: "Weddings",
    description:
      "Making your special day unforgettable with romantic and dance music",
    link: "/weddings",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Users,
    title: "Birthday Parties",
    description: "Fun and energetic music for all ages and celebrations",
    link: "/birthdays",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Star,
    title: "Naming Ceremonies",
    description: "Respectful and joyful music for cultural celebrations",
    link: "/naming-ceremonies",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Calendar,
    title: "End of Year Parties",
    description: "High-energy celebrations and countdown moments",
    link: "/end-of-year",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "Motivational music for contests and sporting events",
    link: "/competitions",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Music,
    title: "General Ceremonies",
    description: "Professional audio support for formal occasions",
    link: "/ceremonies",
    gradient: "from-indigo-500 to-purple-500",
  },
];
