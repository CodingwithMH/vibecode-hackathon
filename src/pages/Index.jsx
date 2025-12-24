import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import FileUpload from "../components/FileUpload";
import ModeToggle from "../components/ModeToggle";
import QuizCard from "../components/QuizCard";
import Flashcard from "../components/Flashcard";
import ResultsSummary from "../components/ResultsSummary";
import {
  Zap,
  Upload,
  Brain,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [quizTime, setQuizTime] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [flashCards, setFlashCards] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [appState, setAppState] = useState("landing");
  const [mode, setMode] = useState("quiz");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setQuizTime((prev) => prev + 1);
      }, 1000);
    }
    return () => interval && clearInterval(interval);
  }, [timerRunning]);

  const handleFileSelect = (file) => setUploadedFile(file);

  const handleGenerate = async () => {
    if (!uploadedFile) return;
    const formData = new FormData();
    formData.append("file", uploadedFile);

    if (mode === "quiz") {
      formData.append("type", "quiz");
      try {
        setLoading(true);
        const response = await fetch(
          "https://alliteratively-crescentlike-keneth.ngrok-free.dev/webhook/upload",
          { method: "POST", body: formData }
        );
        const data = await response.json();
        setQuizzes(data);
        setCurrentQuestionIndex(0);
        setCorrectAnswers(0);
        setIncorrectAnswers(0);
        setQuizTime(0);
        setTimerRunning(true);
        setAppState("quiz");
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    } else {
      formData.append("type", "flashcard");
      try {
        setLoading(true);
        const response = await fetch(
          "https://alliteratively-crescentlike-keneth.ngrok-free.dev/webhook/upload",
          { method: "POST", body: formData }
        );
        const data = await response.json();
        setFlashCards(data);
        setCurrentCardIndex(0);
        setAppState("flashcard");
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleQuizAnswer = (isCorrect) => {
    isCorrect
      ? setCorrectAnswers((p) => p + 1)
      : setIncorrectAnswers((p) => p + 1);

    setTimeout(() => {
      if (currentQuestionIndex < quizzes.length - 1)
        setCurrentQuestionIndex((p) => p + 1);
      else {
        setTimerRunning(false);
        setAppState("results");
      }
    }, 500);
  };

  const handleRetryAll = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setQuizTime(0);
    setTimerRunning(true);
    setAppState("quiz");
  };

  const formatTime = (s) =>
    `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  const features = [
    { icon: Upload, title: "Upload Notes", desc: "PDF, DOCX, TXT supported" },
    { icon: Brain, title: "AI Generation", desc: "Smart quizzes & flashcards" },
    { icon: TrendingUp, title: "Track Growth", desc: "Improve weak areas" },
  ];


const weakTopics = quizzes
  .filter(q => q.topic && !q.correct)
  .reduce((acc, q) => {
    const existing = acc.find(t => t.name === q.topic);
    if (existing) {
      existing.total++;
      if (q.correct) existing.correct++;
    } else {
      acc.push({ name: q.topic, correct: q.correct ? 1 : 0, total: 1 });
    }
    return acc;
  }, [])
  .map(t => ({
    name: t.name,
    score: Math.round((t.correct / t.total) * 100),
  }))
  .filter(t => t.score < 70);

  return (
    <div className="min-h-screen bg-linear-to-br from-[#05010f] via-[#0b0625] to-black text-white">
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20
                blur-3xl rounded-full animate-float" />


      {/* BACKGROUND GLOWS */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full animate-pulse delay-300" />
      </div>

      <main className="pt-16">
        <AnimatePresence mode="wait">

          {/* LANDING */}
          {appState === "landing" && (
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="py-28 text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                AI Powered Learning
              </div>

              <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-wrap">
                Flash<span className="bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-wrap">Quiz+</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10">
                Turn your notes into instant knowledge
              </p>

              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAppState("upload")}
                className="px-8 py-4 rounded-xl bg-linear-to-r from-cyan-500 to-purple-600
             neon-pulse btn-neon animate-slide-up stagger-4"
              >
                <Upload className="inline mr-2" /> Upload Document
              </motion.button>

              <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
                {features.map((f, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -10 }}
                    className="card-futuristic animate-fade-in p-8 rounded-2xl
                bg-white/10 backdrop-blur border border-white/20"
                  >
                    <f.icon className="w-10 h-10 text-cyan-400 mb-4 mx-auto" />
                    <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                    <p className="text-gray-300">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* UPLOAD */}
          {appState === "upload" && (
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-20 max-w-xl mx-auto px-4"
            >
              <FileUpload onFileSelect={handleFileSelect} />
              {uploadedFile && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setAppState("mode-select")}
                  className="mt-8 w-full py-3 rounded-xl bg-linear-to-r from-cyan-500 to-purple-600"
                >
                  Continue <ArrowRight className="inline ml-2" />
                </motion.button>
              )}
            </motion.section>
          )}

          {/* MODE */}
          {appState === "mode-select" && (
            <motion.section className="py-20 max-w-xl mx-auto px-4">
              <ModeToggle mode={mode} onModeChange={setMode} />
              <button
                disabled={loading}
                onClick={handleGenerate}
                className="flex justify-center items-center mt-8 w-full py-3 rounded-xl bg-linear-to-r from-pink-500 to-purple-600 disabled:opacity-50"
              >
                {
  loading ? (
    <span className="loader"></span>
  ) : (
    <span className="flex items-center mx-auto">
      <Zap className="inline mr-2" />
      Create {mode === "quiz" ? "Quiz" : "Flashcards"}
    </span>
  )
}

                
              </button>
            </motion.section>
          )}

          {/* QUIZ */}
          {appState === "quiz" && (
            <div className="p-2 rounded-3xl animated-border
 bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500">

            <motion.section className="py-20">
              <span className="px-4 py-2 rounded-full text-cyan-300 font-bold
 bg-linear-to-br from-[#0b0625] to-[#1a1835]
 neon-pulse animate-fade-in relative z-1000">
  ⏱ {formatTime(quizTime)}
</span>
              <QuizCard
                key={currentQuestionIndex}
                question={quizzes[currentQuestionIndex].question}
                options={quizzes[currentQuestionIndex].options}
                correctAnswer={quizzes[currentQuestionIndex].answer}
                onAnswer={handleQuizAnswer}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={quizzes.length}
              />
            </motion.section>
                </div>
          )}

          {/* FLASHCARDS */}
          {appState === "flashcard" && (
            <motion.section className="py-20 animate-float">
              <Flashcard
                front={flashCards[currentCardIndex].front}
                back={flashCards[currentCardIndex].back}
                currentIndex={currentCardIndex}
                totalCards={flashCards.length}
                onNext={() => setCurrentCardIndex((p) => Math.min(p + 1, flashCards.length - 1))}
                onPrevious={() => setCurrentCardIndex((p) => Math.max(p - 1, 0))}
              />
            </motion.section>
          )}

          {/* RESULTS */}
          {appState === "results" && (
            <motion.section className="py-20">
              <ResultsSummary
                totalQuestions={quizzes.length}
                correctAnswers={correctAnswers}
                incorrectAnswers={incorrectAnswers}
                onRetryAll={handleRetryAll}
                weakTopics={weakTopics}
                onRetryWeak={handleRetryAll}
                timeTaken={quizTime}
              />
            </motion.section>
          )}

        </AnimatePresence>
      </main>
    </div>
  );
};

export default Index;
