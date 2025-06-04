import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Button } from "../ui/button";
import { Play, X } from "lucide-react";

const MediaGallery = ({ items, columns = 3 }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns] || gridCols[3]} gap-6`}>
      {items.map((item) => (
        <Dialog key={item.id}>
          <DialogTrigger asChild>
            <div className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="aspect-video relative">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    {item.type === "video" ? (
                      <Play className="w-12 h-12 text-white mb-2 mx-auto" />
                    ) : (
                      <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mb-2 mx-auto">
                        <span className="text-white text-xl">+</span>
                      </div>
                    )}
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-purple-300 text-sm">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </DialogTrigger>

          <DialogContent className="max-w-4xl w-full p-0 bg-black border-purple-500/20">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={() => setSelectedItem(null)}
              >
                <X className="w-6 h-6" />
              </Button>

              {item.type === "video" ? (
                <video
                  src={item.src}
                  controls
                  className="w-full aspect-video"
                  autoPlay
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full max-h-[80vh] object-contain"
                />
              )}

              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-purple-300">{item.category}</p>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default MediaGallery;
