import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight, Facebook, Twitter, Instagram, Share2, LogIn, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



interface Question {
  id: number;
  text: string;
  options: {
    value: string;
    text: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "How would you generally approach meeting new people?",
    options: [
      { value: "A", text: "Nervous, but willing to get to know them" },
      { value: "B", text: "With excitement and eagerness" },
      { value: "C", text: "Chill, wait for people to talk to you" },
      { value: "D", text: "YAY! New friends!" }
    ]
  },
  {
    id: 2,
    text: "How do you recharge after a long week?",
    options: [
      { value: "A", text: "Watch movies at home" },
      { value: "B", text: "Café-hopping" },
      { value: "C", text: "Workout" },
      { value: "D", text: "Hang out with friends" }
    ]
  },
  {
    id: 3,
    text: "How do you feel about being the centre of attention?",
    options: [
      { value: "A", text: "Please no" },
      { value: "B", text: "Do I really have to?" },
      { value: "C", text: "I don't mind" },
      { value: "D", text: "OHYEAHHHHH" }
    ]
  },
  {
    id: 4,
    text: "How do you handle a conflict?",
    options: [
      { value: "A", text: "Reflects on it" },
      { value: "B", text: "Wait for others to step in" },
      { value: "C", text: "Addresses and resolves it quickly" },
      { value: "D", text: "Just handles it, forgive and forget" }
    ]
  },
  // {
  //   id: 5,
  //   text: "In a social setting, would you rather:",
  //   options: [
  //     { value: "A", text: "Vibe in a corner" },
  //     { value: "B", text: "Get to know new people" },
  //     { value: "C", text: "Stay with your group of friends" },
  //     { value: "D", text: "Rise to the stage and shine" }
  //   ]
  // },
  // {
  //   id: 6,
  //   text: "What's your favourite SitCom?",
  //   options: [
  //     { value: "A", text: "I love Kungfu Panda." },
  //     { value: "B", text: "What is a SitCom?" },
  //     { value: "C", text: "The Big Bang Theory" },
  //     { value: "D", text: "F.R.I.E.N.D.S!" }
  //   ]
  // },
  // {
  //   id: 7,
  //   text: "When are you the most determined and focused?",
  //   options: [
  //     { value: "A", text: "When I navigate the intricate galaxies and interwoven perplexities that is life." },
  //     { value: "B", text: "When I'm trying to fall asleep" },
  //     { value: "C", text: "In group projects" },
  //     { value: "D", text: "In the toilet" }
  //   ]
  // },
  // {
  //   id: 8,
  //   text: "Who are you likely to be at a dance competition?",
  //   options: [
  //     { value: "A", text: "Spectator" },
  //     { value: "B", text: "Judge" },
  //     { value: "C", text: "Participant" },
  //     { value: "D", text: "Participant's Hype-man" }
  //   ]
  // },
  // {
  //   id: 9,
  //   text: "What is your favourite hawker centre food?",
  //   options: [
  //     { value: "A", text: "Anything goes..." },
  //     { value: "B", text: "Mee Bakso" },
  //     { value: "C", text: "Mala Xiang Guo" },
  //     { value: "D", text: "Egg Prata" }
  //   ]
  // },
  // {
  //   id: 10,
  //   text: "What are you most likely to get fined for?",
  //   options: [
  //     { value: "A", text: "Naked show at home (my body my choice)" },
  //     { value: "B", text: "Feeding pigeons (let them grow)" },
  //     { value: "C", text: "Running a red light (I have places to be)" },
  //     { value: "D", text: "Littering (oops!)" }
  //   ]
  // },
  // {
  //   id: 11,
  //   text: "Imagine you are a tofu in the chilled dairy section at a supermarket. What's your first thought?",
  //   options: [
  //     { value: "A", text: "I wonder what's in store for me…" },
  //     { value: "B", text: "Sounds easy-breezy!" },
  //     { value: "C", text: "What are we doing here, let's go on an adventure!" },
  //     { value: "D", text: "Where are my tofu friends?" }
  //   ]
  // },
  // {
  //   id: 12,
  //   text: "Someone walks by, what do you say?",
  //   options: [
  //     { value: "A", text: "We are made wise not by the recollection of our past, but by the responsibility for our future." },
  //     { value: "B", text: "What is everyone doing today?" },
  //     { value: "C", text: "Pick me up! Pick me up!" },
  //     { value: "D", text: "Well, hello there! How was your day?" }
  //   ]
  // },
  // {
  //   id: 13,
  //   text: "A customer picks you up and scans you for purchase!",
  //   options: [
  //     { value: "A", text: "I have been chosen, I AM THE CHOSEN ONE!" },
  //     { value: "B", text: "I see that I am worth 80 cents..." },
  //     { value: "C", text: "Freedom, at last!" },
  //     { value: "D", text: "I try to escape to stay with my friends! (you failed)" }
  //   ]
  // },
  // {
  //   id: 14,
  //   text: "You're stuffed into a recycled bag with all the other groceries.",
  //   options: [
  //     { value: "A", text: "You choose to sleep your frustrations away." },
  //     { value: "B", text: "With this much pressure, I will ferment." },
  //     { value: "C", text: "It's packed like sardines here!" },
  //     { value: "D", text: "Starts throwing a dance party with all fruits and veggies." }
  //   ]
  // },
  // {
  //   id: 15,
  //   text: "Upon arriving home, you're placed on the countertop. But suddenly, you grow legs!",
  //   options: [
  //     { value: "A", text: "Will my friends get blessed with legs too?" },
  //     { value: "B", text: "Starts doing crossed-legged meditation." },
  //     { value: "C", text: "How will these blobs withstand my ever-burning passion?" },
  //     { value: "D", text: "Let me see what this house has in store for me!" }
  //   ]
  // },
  // {
  //   id: 16,
  //   text: "A giant hand reaches for you, what do you do?",
  //   options: [
  //     { value: "A", text: "Uh oh, what's happening?" },
  //     { value: "B", text: "Ah, my time has come..." },
  //     { value: "C", text: "Ew, no touching!" },
  //     { value: "D", text: "I like warm hugs!" }
  //   ]
  // },
  // {
  //   id: 17,
  //   text: "You've been placed in an unknown icy area with other foods. Who do you talk to first?",
  //   options: [
  //     { value: "A", text: "Fellow chilled tofu, my broskis" },
  //     { value: "B", text: "The rotting Bok Choy" },
  //     { value: "C", text: "I do not need to talk to anyone" },
  //     { value: "D", text: "Anyone and everyone!" }
  //   ]
  // },
  // {
  //   id: 18,
  //   text: "In the corner of your eye lies a questionable, grey, furry blob. What is your first thought?",
  //   options: [
  //     { value: "A", text: "Are they sad? Are they depressed? Are they contemplating life?" },
  //     { value: "B", text: "Someone has matured beyond its prime" },
  //     { value: "C", text: "What a sad colour" },
  //     { value: "D", text: "I wanna touchy" }
  //   ]
  // },
  // {
  //   id: 19,
  //   text: "You fall asleep, and wake up to the feeling of being held by someone.",
  //   options: [
  //     { value: "A", text: "Is this the end of my life's journey?" },
  //     { value: "B", text: "Not again..." },
  //     { value: "C", text: "Up, up and away!" },
  //     { value: "D", text: "Yayy, an adventure!" }
  //   ]
  // },
  // {
  //   id: 20,
  //   text: "You're being carved, what tofu shape would you like to be?",
  //   options: [
  //     { value: "A", text: "A palm tree" },
  //     { value: "B", text: "A tortoise" },
  //     { value: "C", text: "A burning fire, as large as a campfire!" },
  //     { value: "D", text: "A jiggly butt!" }
  //   ]
  // }
];

export function Quiz() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const navigate = useNavigate();


  const questionsPerPage = 3;       // Change here to adjust questions per page
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const handleAnswerChange = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const canGoNext = currentQuestions.every(q => answers[q.id]);
  const canGoPrevious = currentPage > 0;

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    } else {
      // Quiz is complete
      setIsQuizComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const getProgressPercentage = () => {
    const answeredQuestions = Object.keys(answers).length;
    return (answeredQuestions / questions.length) * 100;
  };

  const calculateResults = () => {
    const scores = { A: 0, B: 0, C: 0, D: 0 };
    Object.values(answers).forEach(answer => {
      scores[answer as keyof typeof scores]++;
    });
    
    const maxScore = Math.max(...Object.values(scores));
    const dominantPersonality = Object.entries(scores).find(([_, score]) => score === maxScore)?.[0];
    
    const personalityTypes = {
      A: {
        name: "Spring Onion",
        subtitle: "Diplomats",
        description: "The Spring Onion Tofucat is the idealist and dreamer of the Tofucat group. It has a deep sense of empathy with a strong desire to make the world all the more meaningful.",
        strengths: [
          "Emotionally intelligent, value harmony and authenticity",
          "Skilled in communication, counseling, and inspiring others", 
          "Driven by values and purpose"
        ],
        challenges: [
          "May avoid conflict or difficult realities",
          "Can become overwhelmed by emotional intensity or idealism"
        ],
        aoi: "Rather than lessening itself, the Spring Onion Tofucat can learn to add a little kick with some decisiveness and pepper, keeping itself honest and firm!"
      },
      B: {
        name: "Soy Sauce",
        subtitle: "Sentinels", 
        description: "The Soy Sauce TofuCat is reliable and always has everything under control. Its aged nature makes it the wise guardian of the group, always making sure the Tofucat group is a safe bunch of flavours.",
        strengths: [
          "Excellent at organizing systems and following procedures",
          "Loyal, responsible, and duty-focused",
          "Thrive in structured environments and uphold traditions"
        ],
        challenges: [
          "May resist change or innovation",
          "Can be overly focused on rules or perfection"
        ],
        aoi: "To not only blend in and shine with its special flavour, the Soy Sauce Tofucat can try to step out more into the spotlight when interacting with other Tofucats!"
      },
      C: {
        name: "Spicy Musubi",
        subtitle: "Analysts",
        description: "The Spicy Musubi Tofucat is the strategist and brainiac of the Tofucat group. It knows what needs to be done and gets it done! It is always ready to lead the other Tofucats to glory and loves a good challenge!",
        strengths: [
          "Great at problem-solving and analyzing complex systems",
          "Think critically and value logic over emotions", 
          "Visionaries and planners, enjoying long-term strategizing"
        ],
        challenges: [
          "Can be seen as overly critical or emotionally distant",
          "Might undervalue emotional and social considerations"
        ],
        aoi: "Instead of dimming the Spicy Musubi Tofucat's light, it can share its talents and passion with the rest of the Tofucat group, ensuring everyone is on fire!"
      },
      D: {
        name: "Scrambled Egg", 
        subtitle: "Explorers",
        description: "The Scrambled Egg Tofucat is the party animal of the Tofucat group! It loves to have fun adventures full of thrill and cheer. Always on the lookout for a friend in need, Scrambled Egg makes them a friend indeed!",
        strengths: [
          "Live in the moment, excellent at improvisation",
          "Adaptable, resourceful, and action-oriented",
          "Thrive in dynamic and fast-paced environments"
        ],
        challenges: [
          "May struggle with long-term planning or routine", 
          "Can become easily bored or distracted"
        ],
        aoi: "Besides constantly worrying about others, the Scrambled Egg TofuCat can learn to consider itself by putting itself before others, making sure it doesn't overcook!"
      }
    };
    
    const personality = personalityTypes[dominantPersonality as keyof typeof personalityTypes] || personalityTypes.A;
    
    return {
      personality,
      scores
    };
  };

  const handleSignIn = () => {
    try {
       navigate('/login');
     } catch (error) {
       console.error('Navigation error:', error);
       // Fallback: redirect using window.location
       window.location.href = '/signin';
     }
  }

  if (isQuizComplete) {
    const results = calculateResults();
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex flex-col">
        {/* Header */}
        <div className="bg-[#1c6d22] text-white p-6 shadow-lg">
          <div className="max-w-6xl mx-auto flex items-center justify-center">
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758174998/name_q0ispl.png"
                alt="Jar"
                className="w-40 h-15 object-cover"
              />
              <h1 className="text-2xl md:text-3xl font-bold">Quiz</h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center p-4">
          <Card className="w-full max-w-6xl shadow-2xl overflow-hidden pt-0">
            <CardHeader className="pt-3 text-center bg-[#1c6d22] text-white">
              <div className="flex gap-4 items-center justify-center ">
                <Star className="w-14 h-14 text-yellow-300 fill-current" />
                <CardTitle className="text-3xl font-bold">Quiz Complete!</CardTitle>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Left side - Image and CTAs */}
                <div className="space-y-6">
                  <div className="flex justify-center">
                    <div className="w-80 h-80 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl shadow-lg flex items-center justify-center">
                      <img 
                        src={(() => {
                          const dominantPersonality = Object.entries(results.scores).reduce(
                            (a, b) =>
                              results.scores[a[0] as keyof typeof results.scores] > results.scores[b[0] as keyof typeof results.scores]
                                ? a
                                : b
                          )[0];
                          const imageMap = {
                            A: "https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758135628/11_jdqruu.png",
                            B: "https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758135744/22_y40a2s.png", 
                            C: "https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758135741/33_zsxbti.png",
                            D: "https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758135740/44_id7fxc.png"
                          };
                          return imageMap[dominantPersonality as keyof typeof imageMap] || imageMap.A;
                        })()} 
                        alt={`${results.personality.name} Tofucat`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Social sharing */}
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Share Your Results!</h2>
                    <div className="flex justify-center space-x-6">
                      <Facebook className="w-8 h-8 text-blue-600 cursor-pointer hover:scale-110 transition-transform" />
                      <Twitter className="w-8 h-8 text-black cursor-pointer hover:scale-110 transition-transform" />
                      <Instagram className="w-8 h-8 text-pink-600 cursor-pointer hover:scale-110 transition-transform" />
                      <Share2 className="w-8 h-8 text-gray-600 cursor-pointer hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  
                  {/* Sign in CTA */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-6 text-center">
                    <LogIn className="w-8 h-8 mx-auto mb-3 text-green-600" />
                    <h4 className="text-lg font-bold text-green-800 mb-2">Get the Full Hope-Fu Experience!</h4>
                    <p className="text-green-700 mb-4">Sign in to save your results, discover more personality insights, and connect with your Tofucat community!</p>
                    <Button 
                      size="lg" 
                      className="px-8 py-6 text-xl bg-[#1c6d22] hover:bg-[#1c6d32] text-white"
                      onClick={handleSignIn}
                      >
                      Sign In Now
                    </Button>
                  </div>
                </div>

                {/* Right side - Results */}
                <div className="space-y-6">
                  <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">You are a...</h2>
                    <h3 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                      {results.personality.name} Tofu Cat
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">{results.personality.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-bold text-green-700 mb-2">Strengths:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {results.personality.strengths.map((strength: string, index: number) => (
                          <li key={index} className="leading-relaxed">{strength}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-orange-600 mb-2">Challenges:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {results.personality.challenges.map((challenge: string, index: number) => (
                          <li key={index} className="leading-relaxed">{challenge}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-blue-600 mb-2">Area of Improvement:</h4>
                      <p className="text-gray-700 leading-relaxed">{results.personality.aoi}</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      onClick={() => window.location.reload()}
                      variant="outline"
                      className="px-7 py-7 text-xl border-green-600 text-green-600 hover:bg-[#1c6d22] hover:text-white"
                    >
                      Take Quiz Again
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex flex-col">
      {/* Header */}
      <div className="bg-[#1c6d22] text-white p-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://res.cloudinary.com/dj5ik5lwp/image/upload/v1758174998/name_q0ispl.png"
              alt="Jar"
              className="w-40 h-15 object-cover"
            />
          </div>
          <div className="flex items-center space-x-4">
            {/* <h1 className="text-2xl md:text-3xl font-bold">Quiz</h1> */}
          </div>
          <div className="text-right">
            <div className="text-sm opacity-90">Page {currentPage + 1} of {totalPages}</div>
            <div className="text-sm opacity-90">{Object.keys(answers).length}/{questions.length} answered</div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto">
          <Progress value={getProgressPercentage()} className="h-3" />
          <p className="text-sm text-gray-600 mt-2 text-center">
            {Math.round(getProgressPercentage())}% Complete
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl shadow-2xl">
          <CardHeader>
            <CardTitle className="text-xl text-center text-gray-700">
              Questions {currentPage * questionsPerPage + 1} - {Math.min((currentPage + 1) * questionsPerPage, questions.length)}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 p-6">
            {currentQuestions.map((question: any, index: number) => (
              <div key={question.id} className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-800 leading-relaxed">
                  {currentPage * questionsPerPage + index + 1}. {question.text}
                </h3>
                <RadioGroup
                  value={answers[question.id] || ""}
                  onValueChange={(value: string) => handleAnswerChange(question.id, value)}
                  className="space-y-3"
                >
                  {question.options.map((option: any) => (
                    <div key={option.value} className="flex items-start space-x-3 px-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <RadioGroupItem 
                        value={option.value} 
                        id={`${question.id}-${option.value}`}
                        className="mt-1 flex-shrink-0"
                      />
                      <Label 
                        htmlFor={`${question.id}-${option.value}`}
                        className="text-gray-700 leading-relaxed cursor-pointer flex-1"
                      >
                        <span className="font-medium text-green-600">({option.value})</span> {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="bg-white border-t shadow-lg p-4">
        <div className="max-w-4xl mx-auto flex justify-between">
          <Button
            onClick={handlePrevious}
            disabled={!canGoPrevious}
            variant="outline"
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={!canGoNext}
            className="bg-[#1c6d22] hover:bg-[#1e7725] flex items-center space-x-2"
          >
            <span>{currentPage === totalPages - 1 ? 'Finish Quiz' : 'Next'}</span>
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}