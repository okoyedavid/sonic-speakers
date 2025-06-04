import { Button } from "../ui/button";
import {
  Music,
  Instagram,
  Facebook,
  Twitter,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

const Footer = () => {
  const whatsappMessage = encodeURIComponent(
    "Hello, I'm interested in booking you for my event!"
  );
  const whatsappNumber = "08103031401"; // Replace with actual number

  return (
    <footer className="bg-black text-white border-t border-purple-500/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Music className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sonic Speakers
              </span>
            </div>
            <p className="text-gray-400">
              Bringing unforgettable vibes to your special events with
              professional DJ services.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Weddings</li>
              <li>Birthday Parties</li>
              <li>Naming Ceremonies</li>
              <li>End of Year Parties</li>
              <li>Competitions</li>
              <li>Corporate Events</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+234 (810) 303-1401</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>booking@sonicbeats.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4" />
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Social & CTA */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-purple-400">Connect</h3>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-400 hover:text-purple-400"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-400 hover:text-purple-400"
              >
                <Facebook className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-gray-400 hover:text-purple-400"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
            <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              Book Your Event
            </Button>
          </div>
        </div>

        <div className="border-t border-purple-500/20 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Sonic Speakers. All rights
            reserved.
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </footer>
  );
};

export default Footer;
