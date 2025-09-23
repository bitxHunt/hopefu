import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";

const catDatabase = {
  A: {
    id: "A",
    name: "Spring Onion",
    subtitle: "Diplomats",
    image:
      "https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758135628/11_jdqruu.png",
    description:
      "The Mystic Whiskers is the visionary and dreamer of the cat kingdom. It knows the secrets of tomorrow and brings inspiration to those who seek it! Always ready to guide you towards new adventures and possibilities.",
    personality:
      "Idealistic, empathetic, and deeply intuitive. Mystic Whiskers sees beyond the present moment.",
    strengths: [
      "Great at inspiring creativity and imagination",
      "Brings prophetic dreams and visions",
      "Guides you through life transitions",
    ],
    challenges: [
      "Can be seen as too idealistic or unrealistic",
      "Might get lost in dreams instead of taking action",
    ],
    improvement:
      "Instead of staying in the dream world, the Mystic Whiskers can ground its visions into reality by taking small, practical steps towards its goals, ensuring dreams become achievements!",
  },
  B: {
    id: "B",
    name: "Soy Sauce",
    subtitle: "Sentinels",
    image:
      "https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758135744/22_y40a2s.png",
    description:
      "The Golden Paws is the fortune bringer and prosperity guardian of the cat realm. It attracts wealth and success wherever it goes! This cat loves a good opportunity and never misses a chance to bring luck.",
    personality:
      "Ambitious, charismatic, and naturally lucky. Golden Paws radiates confidence and prosperity.",
    strengths: [
      "Attracts financial opportunities and success",
      "Brings good luck in business ventures",
      "Enhances your natural charisma",
    ],
    challenges: [
      "May focus too much on material success",
      "Could become overly competitive or ambitious",
    ],
    improvement:
      "Instead of focusing only on personal gain, the Golden Paws can share its fortune and success with others, creating a cycle of prosperity that benefits the entire community!",
  },
  C: {
    id: "C",
    name: "Spicy Musubi",
    subtitle: "Analysts",
    image:
      "https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758135741/33_zsxbti.png",
    description:
      "The Shadow Mittens is the protector and guardian of the mystical world. It watches over you with ancient wisdom and shields you from negativity! This cat values loyalty and brings peace to troubled hearts.",
    personality:
      "Protective, wise, and fiercely loyal. Shadow Mittens stands as a silent guardian in the darkness.",
    strengths: [
      "Provides protection from negative energy",
      "Offers wisdom in difficult decisions",
      "Strengthens your inner resilience",
    ],
    challenges: [
      "Can be overly protective or cautious",
      "Might resist change even when it's beneficial",
    ],
    improvement:
      "Instead of being overly cautious, the Shadow Mittens can embrace positive changes while maintaining its protective nature, allowing growth while keeping loved ones safe!",
  },
  D: {
    id: "D",
    name: "Scrambled Egg",
    subtitle: "Explorer",
    image:
      "https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758135740/44_id7fxc.png",
    description:
      "The Lucky Spirit is the harmony keeper and balance master of all cats. It brings joy and positive energy to every situation! This cat ensures that good vibes follow you wherever you go.",
    personality:
      "Peaceful, joyful, and deeply balanced. Lucky Spirit brings harmony to any chaotic situation.",
    strengths: [
      "Balances emotions and brings inner peace",
      "Attracts positive relationships",
      "Creates harmony in your environment",
    ],
    challenges: [
      "May avoid necessary conflicts to maintain peace",
      "Could suppress own needs for others' comfort",
    ],
    improvement:
      "Instead of avoiding all conflicts, the Lucky Spirit can learn to address issues with kindness and understanding, ensuring that true harmony comes from honest communication!",
  },
};

export function Database() {
  const [selectedCat, setSelectedCat] = useState<any>(null);

  if (selectedCat) {
    return (
      <div>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center">
          {/* Cat Details */}
          <div className="max-w-6xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <Button
                  onClick={() => setSelectedCat(null)}
                  variant="link"
                  className="px-7 py-7 text-xl border-green-600 text-green-600 cursor-pointer"
                >
                  Back to Database
                </Button>
              </div>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left side - Image */}

                <div className="flex justify-center items-center">
                  <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl shadow-lg flex items-center justify-center">
                    <img
                      src={selectedCat.image}
                      alt={selectedCat.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Right side - Details */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                      You are a...
                    </h2>
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                      {selectedCat.name} Tofu Cat
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {selectedCat.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-green-700 mb-2">
                        Strengths:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {selectedCat.strengths.map((strength: string, index: number) => (
                          <li key={index} className="leading-relaxed">
                            {strength}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-orange-600 mb-2">
                        Challenges:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {selectedCat.challenges.map((challenge: string, index: number) => (
                          <li key={index} className="leading-relaxed">
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-blue-600 mb-2">
                        Area of Improvement:
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {selectedCat.improvement}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="mt-17">
        {/* Cat Grid */}
        <div className="max-w-4xl mx-auto p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.values(catDatabase).map((cat: any) => (
              <Card
                key={cat.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 aspect-square"
                onClick={() => setSelectedCat(cat)}
              >
                <CardContent className="p-4 h-full flex flex-col">
                  <div className="flex-1 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex flex-col items-center justify-center">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col justify-center">
                  <div className="text-center">
                    <h3 className="font-bold text-sm text-gray-800 mb-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-gray-600">{cat.subtitle}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
