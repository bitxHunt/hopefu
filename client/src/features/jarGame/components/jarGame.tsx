import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/navbar';
import {
  Star,
  MessageCircleQuestionMark
} from 'lucide-react';

interface Choice {
  id: number;
  scenario: string;
  option1: string;
  option2: string;
  option3: string;
  points1: number;
  points2: number;
  points3: number;
}

const choices: Choice[] = [
  {
    id: 1,
    scenario: "A tofu cat is feeling sad... What will you do?",
    option1: "Comfort it",
    option2: "Ignore it",
    option3: "Taunt it",
    points1: 10,
    points2: 5,
    points3: 0
  },
  {
    id: 2,
    scenario: "If you had to choose... live forever but be alone or live a normal lifespan surrounded by loved ones which will you choose?",
    option1: "Live forever alone",
    option2: "Normal life with loved ones",
    option3: "Find a middle ground",
    points1: 5,
    points2: 20,
    points3: 10
  },
  {
    id: 3,
    scenario: "If you had to choose... have the ability to fly but only 10 feet high or be invisible but only for 10 minutes a day which will you choose?",
    option1: "Fly 10 feet high",
    option2: "Invisible for 10 minutes",
    option3: "Neither superpower",
    points1: 15,
    points2: 12,
    points3: 8
  }
];

export function JarGame() {
  const [currentChoice, setCurrentChoice] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  const handleOptionSelect = (option: string, points: number) => {
    setTotalPoints(prev => prev + points);
    console.log(`Selected option: ${option}, earned ${points} points. Total points: ${totalPoints + points}`);
    
    setTimeout(() => {
      if (currentChoice < choices.length - 1) {
        setCurrentChoice(prev => prev + 1);
      } else {
        setGameComplete(true);
      }
    }, 1000);
  };

  const choice = choices[currentChoice];

  if (gameComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
        <Navbar />
        <Card className="max-w-md shadow-2xl">
          <CardContent className="px-15 py-4 text-center">
            <Star className="w-16 h-16 mx-auto mb-4 text-yellow-300 fill-current" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Game Complete!</h2>
            <p className="text-xl text-gray-600 mb-4">You Have Earned:</p>
            <p className="text-4xl font-bold text-green-600 mb-6">{totalPoints} Points</p>
            <Button 
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              Play Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <Navbar />
      {/* Header */}
      <div className="text-green-600 px-6 pt-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-4xl font-bold ms-7">CHOICES IN A JAR</h1>
            <MessageCircleQuestionMark className="w-10 h-10 mr-3 ms-3" />
          </div>
        </div>
      </div>

      {/* Main Content - Everything in One Card */}
      <div className="max-w-6xl mx-auto p-8 ">
        <Card className="shadow-2xl pt-0 overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 border-b border-green-200 p-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Star className="w-6 h-6 text-yellow-300" />
                <span className="text-xl font-bold text-green-800">{totalPoints} Points</span>
              </div>
              <div className="text-lg font-semibold text-green-800">
                {currentChoice + 1} / {choices.length}
              </div>
            </div>
          </div>
          <CardContent className="px-10 pt-5">
            <div className="flex flex-col items-center space-y-10">
              
              {/* Question */}
              <Card className="bg-yellow-200 p-6 max-w-3xl shadow-lg">
                <CardContent className="text-center p-0">
                  <p className="text-xl font-medium text-gray-800 leading-relaxed">
                    {choice.scenario}
                  </p>
                </CardContent>
              </Card>

              {/* Jar and Cat Container */}
              <div className="flex items-center justify-center space-x-12">
                {/* Jar */}
                <div className="relative">
                  {/* <div className="w-64 h-80 bg-gradient-to-b from-blue-100 to-blue-200 rounded-t-3xl rounded-b-2xl border-4 border-blue-300 shadow-2xl relative overflow-hidden">                      
                  </div> */}
                  <img
                    src="https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758174398/jar_rxqpcg.png"
                    alt="Jar"
                    className="w-64 h-80 object-cover"
                  />
                </div>

                {/* Tofucat Image */}
                <div className="w-64 h-64 rounded-xl overflow-hidden">
                  <img 
                    src="https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758135628/11_jdqruu.png"
                    alt="Tofucat Character"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Options */}
              <div className="w-full max-w-2xl space-y-4">
                <Button
                  onClick={() => handleOptionSelect(choice.option1, choice.points1)}
                  className="w-full py-6 text-lg rounded-full bg-gray-200 text-gray-700 hover:bg-[#1c6d22] hover:text-white transition-all shadow-lg"
                >
                  <span>{choice.option1}</span>
                </Button>

                <Button
                  onClick={() => handleOptionSelect(choice.option2, choice.points2)}
                  className="w-full py-6 text-lg rounded-full bg-gray-200 text-gray-700 hover:bg-[#1c6d22] hover:text-white transition-all shadow-lg"
                >
                  <span>{choice.option2}</span>
                </Button>

                <Button
                  onClick={() => handleOptionSelect(choice.option3, choice.points3)}
                  className="w-full py-6 text-lg rounded-full bg-gray-200 text-gray-700 hover:bg-[#1c6d22] hover:text-white transition-all shadow-lg"
                >
                  <span>{choice.option3}</span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}