// @ts-nocheck
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw, Sparkles, Cat } from "lucide-react";
import { Navbar } from "@/components/navbar";

const imageMap = {
  A: "https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758135628/11_jdqruu.png",
  B: "https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758135744/22_y40a2s.png",
  C: "https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758135741/33_zsxbti.png",
  D: "https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758135740/44_id7fxc.png",
};

const catNames = {
  A: "Spring Onion",
  B: "Soy Sauce",
  C: "Spicy Musubi",
  D: "Scrambled Egg",
};

export function Gatcha() {
  const [selectedCats, setSelectedCats] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawType, setDrawType] = useState("single"); // "single" or "multi"
  const [animatingCats, setAnimatingCats] = useState([]);

  const getRandomCat = () => {
    const cats = Object.keys(imageMap);
    return cats[Math.floor(Math.random() * cats.length)];
  };

  const drawSingleCat = () => {
    setIsDrawing(true);
    setSelectedCats([]);
    setDrawType("single");
    setAnimatingCats([]);

    setTimeout(() => {
      const randomCat = getRandomCat();
      setSelectedCats([randomCat]);
      setIsDrawing(false);
      setAnimatingCats([randomCat]);
    }, 2000);
  };

  const draw5xCats = () => {
    setIsDrawing(true);
    setSelectedCats([]);
    setDrawType("multi");
    setAnimatingCats([]);

    // First show loading for 1.5 seconds
    setTimeout(() => {
      const cats = [];
      for (let i = 0; i < 5; i++) {
        cats.push(getRandomCat());
      }
      setSelectedCats(cats);
      setIsDrawing(false);

      // Animate cats appearing one by one
      cats.forEach((cat, index) => {
        setTimeout(() => {
          setAnimatingCats((prev) => [...prev, cat]);
        }, index * 300);
      });
    }, 1500);
  };

  const resetDraw = () => {
    setSelectedCats([]);
    setIsDrawing(false);
    setAnimatingCats([]);
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl shadow-2xl overflow-hidden border-0 bg-white/95 backdrop-blur-sm p-0">
          {/* Header */}
          <div className="bg-[#1c6d22] text-white p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-2">
                <h1 className="text-3xl font-bold">Lucky Cat Draw</h1>
              </div>
              <p className="text-green-100 text-lg">Discover Your HopeFu Cat</p>
            </div>
          </div>

          <CardContent className="p-8">
            <div className="flex flex-col items-center space-y-8">
              {/* Cat Display Area */}
              <div
                className={`${
                  drawType === "single" ? "w-80 h-80" : "w-full h-96"
                } bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-4 border-green-100 flex items-center justify-center shadow-inner transition-all duration-500 ease-in-out`}
              >
                {isDrawing ? (
                  <div className="flex flex-col items-center space-y-6">
                    <div className="relative">
                      <div className="w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
                      <div className="absolute inset-0 w-20 h-20 border-4 border-emerald-300 border-b-transparent rounded-full animate-spin animate-reverse"></div>
                    </div>
                    <p className="text-green-600 font-semibold text-lg animate-pulse">
                      {drawType === "single"
                        ? "Drawing your lucky cat..."
                        : "Drawing 5 lucky cats..."}
                    </p>
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i: number) => (
                        <div
                          key={i}
                          className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                ) : selectedCats.length > 0 ? (
                  drawType === "single" ? (
                    // Single cat display
                    <div className="text-center space-y-4">
                      <div className="relative">
                        <img
                          src={imageMap[selectedCats[0]]}
                          alt="Lucky Cat"
                          className={`w-56 h-36 object-contain mx-auto transition-all duration-700 ${
                            animatingCats.includes(selectedCats[0])
                              ? "animate-bounce scale-100 opacity-100"
                              : "scale-50 opacity-0"
                          }`}
                          style={{ animationDuration: "1.5s" }}
                        />
                        {animatingCats.includes(selectedCats[0]) && (
                          <div className="absolute -top-13 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-spin">
                            <Sparkles className="w-4 h-4 text-yellow-700" />
                          </div>
                        )}
                      </div>
                      <div
                        className={`transition-all duration-500 ${
                          animatingCats.includes(selectedCats[0])
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-4"
                        }`}
                      >
                        <h3 className="text-xl font-bold text-green-700">
                          {catNames[selectedCats[0]]}
                        </h3>
                        <p className="text-green-600 font-medium">
                          Your mystical companion has been revealed!
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Multiple cats display
                    <div className="grid grid-cols-5 gap-4 w-full px-4">
                      {selectedCats.map((cat, index) => (
                        <div key={index} className="text-center">
                          <div className="relative mb-2">
                            <img
                              src={imageMap[cat]}
                              alt={`Lucky Cat ${index + 1}`}
                              className={`w-16 h-16 object-contain mx-auto transition-all duration-500 ${
                                animatingCats.includes(cat)
                                  ? "animate-bounce scale-100 opacity-100"
                                  : "scale-50 opacity-30"
                              }`}
                            />
                            {animatingCats.includes(cat) && (
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                                <Sparkles className="w-2 h-2 text-yellow-700" />
                              </div>
                            )}
                          </div>
                          <p
                            className={`text-xs font-medium text-green-600 transition-all duration-300 ${
                              animatingCats.includes(cat)
                                ? "opacity-100"
                                : "opacity-50"
                            }`}
                          >
                            {catNames[cat]}
                          </p>
                        </div>
                      ))}
                    </div>
                  )
                ) : (
                  // Empty state
                  <div className="text-center text-gray-400">
                    <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-6 mx-auto shadow-inner">
                      <Cat className="w-20 h-20 text-yellow-600" />
                    </div>
                    <p className="text-xl font-medium">
                      Your lucky cats await...
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Choose single or 5x draw below
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              {selectedCats.length === 0 && !isDrawing ? (
                <div className="grid grid-cols-2 gap-12 w-full max-w-md">
                  <Button
                    onClick={drawSingleCat}
                    className="px-8 py-6 text-xl bg-[#1c6d22] hover:bg-[#1e7725] text-white"
                  >
                    Draw 1x Cat
                  </Button>
                  <Button
                    onClick={draw5xCats}
                    className="px-8 py-6 text-xl bg-gray-200 hover:bg-gray-300 text-gray-700"
                    // className="px-8 py-6 text-xl bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-700 hover:to-blue-700 text-white"
                  >
                    Draw 5x Cat
                  </Button>
                </div>
              ) : selectedCats.length > 0 ? (
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    onClick={drawType === "single" ? drawSingleCat : draw5xCats}
                    // className="px-8 py-6 text-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                    className="px-8 py-6 text-xl bg-gray-200 hover:bg-gray-300 text-gray-700"
                  >
                    Draw Again!
                  </Button>
                  <Button
                    onClick={resetDraw}
                    size="lg"
                    className="px-8 py-6 text-xl bg-[#1c6d22] hover:bg-[#1e7725] text-white"
                  >
                    <RefreshCw className="w-5 h-5 mr-2" />
                    Reset
                  </Button>
                </div>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
