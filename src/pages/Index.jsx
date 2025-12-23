import { useState } from "react";
import Navbar from "../components/Navbar";
import FileUpload from "../components/FileUpload";
import ModeToggle from "../components/ModeToggle";
import QuizCard from "../components/QuizCard";
import Flashcard from "../components/Flashcard";
import ResultsSummary from "../components/ResultsSummary";
import { Zap, Upload, Brain, TrendingUp, Sparkles, ArrowRight } from "lucide-react";

const sampleQuizzes = [
  { question: "What is the capital of France?", options: [{ id: "a", text: "London" }, { id: "b", text: "Berlin" }, { id: "c", text: "Paris" }, { id: "d", text: "Madrid" }], correctAnswerId: "c" },
  { question: "Which planet is known as the Red Planet?", options: [{ id: "a", text: "Venus" }, { id: "b", text: "Mars" }, { id: "c", text: "Jupiter" }, { id: "d", text: "Saturn" }], correctAnswerId: "b" },
  { question: "What is the largest mammal on Earth?", options: [{ id: "a", text: "African Elephant" }, { id: "b", text: "Blue Whale" }, { id: "c", text: "Giraffe" }, { id: "d", text: "Polar Bear" }], correctAnswerId: "b" },
];

const sampleFlashcards = [
  { front: "What is photosynthesis?", back: "The process by which plants convert sunlight into energy" },
  { front: "What is the formula for water?", back: "H₂O" },
  { front: "Who wrote Romeo and Juliet?", back: "William Shakespeare" },
  { front: "What is the speed of light?", back: "299,792,458 meters per second" },
];

const Index = () => {
  const [appState, setAppState] = useState("landing");
  const [mode, setMode] = useState("quiz");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const handleFileSelect = (file) => setUploadedFile(file);

  const handleGenerate = () => {
    if (mode === "quiz") {
      setCurrentQuestionIndex(0);
      setCorrectAnswers(0);
      setIncorrectAnswers(0);
      setAppState("quiz");
    } else {
      setCurrentCardIndex(0);
      setAppState("flashcard");
    }
  };

  const handleQuizAnswer = (isCorrect) => {
    if (isCorrect) setCorrectAnswers((prev) => prev + 1);
    else setIncorrectAnswers((prev) => prev + 1);

    setTimeout(() => {
      if (currentQuestionIndex < sampleQuizzes.length - 1) setCurrentQuestionIndex((prev) => prev + 1);
      else setAppState("results");
    }, 500);
  };

  const handleRetryAll = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setAppState("quiz");
  };

  const features = [
    { icon: Upload, title: "Upload Documents", description: "Support for PDF, DOCX, and TXT files" },
    { icon: Brain, title: "AI-Powered Generation", description: "Instantly create quizzes and flashcards" },
    { icon: TrendingUp, title: "Track Progress", description: "Identify weak areas and improve" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Landing */}
        {appState === "landing" && (
          <>
            <section className="relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
              </div>

              <div className="container mx-auto px-4 py-24 relative">
                <div className="max-w-4xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-8 animate-slide-up">
                    <Sparkles className="w-4 h-4" /> AI-Powered Learning Platform
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 animate-slide-up stagger-1">
                    Flash<span className="text-gradient">Quiz+</span>
                  </h1>
                  <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-4 animate-slide-up stagger-2">
                    Test Your Knowledge Instantly
                  </p>
                  <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto animate-slide-up stagger-3">
                    Upload your notes and get quizzes or flashcards in seconds.
                  </p>

                  <button onClick={() => setAppState("upload")} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition animate-slide-up stagger-4">
                    <Upload className="w-5 h-5" /> Upload Document <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-muted/30">
              <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="card-interactive p-8 text-center">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-linear-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          </>
        )}

        {/* Upload */}
        {appState === "upload" && (
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-2xl">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Upload Your Document</h1>
                <p className="text-muted-foreground">We'll generate quiz questions or flashcards from your content</p>
              </div>

              <FileUpload onFileSelect={handleFileSelect} />

              {uploadedFile && (
                <div className="mt-8 animate-fade-in">
                  <button onClick={() => setAppState("mode-select")} className="flex items-center justify-center w-full gap-2 px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition">
                    Continue <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Mode Select */}
        {appState === "mode-select" && (
          <section className="py-20">
            <div className="container mx-auto px-4 max-w-xl">
              <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Mode</h1>
                <p className="text-muted-foreground">How would you like to study?</p>
              </div>

              <div className="card-elevated p-6 mb-8">
                <ModeToggle mode={mode} onModeChange={setMode} />
              </div>

              <button onClick={handleGenerate} className="flex items-center justify-center w-full gap-2 px-6 py-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition">
                <Zap className="w-5 h-5" /> Create {mode === "quiz" ? "Quiz" : "Flashcards"}
              </button>
            </div>
          </section>
        )}

        {/* Quiz */}
        {appState === "quiz" && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <QuizCard
                key={currentQuestionIndex}
                question={sampleQuizzes[currentQuestionIndex].question}
                options={sampleQuizzes[currentQuestionIndex].options}
                correctAnswerId={sampleQuizzes[currentQuestionIndex].correctAnswerId}
                onAnswer={handleQuizAnswer}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={sampleQuizzes.length}
              />
            </div>
          </section>
        )}

        {/* Flashcards */}
        {appState === "flashcard" && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <Flashcard
                front={sampleFlashcards[currentCardIndex].front}
                back={sampleFlashcards[currentCardIndex].back}
                currentIndex={currentCardIndex}
                totalCards={sampleFlashcards.length}
                onNext={() => setCurrentCardIndex((prev) => Math.min(prev + 1, sampleFlashcards.length - 1))}
                onPrevious={() => setCurrentCardIndex((prev) => Math.max(prev - 1, 0))}
              />
            </div>
          </section>
        )}

        {/* Results */}
        {appState === "results" && (
          <section className="py-20">
            <div className="container mx-auto px-4">
              <ResultsSummary
                totalQuestions={sampleQuizzes.length}
                correctAnswers={correctAnswers}
                incorrectAnswers={incorrectAnswers}
                weakTopics={[
                  { name: "Geography", score: 40 },
                  { name: "Science", score: 65 },
                ]}
                onRetryAll={handleRetryAll}
                onRetryWeak={handleRetryAll}
              />
            </div>
          </section>
        )}
      </main>
    </div>
  );
};

export default Index;
