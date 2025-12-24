import Navbar from "../components/Navbar";
import { BookOpen, Clock, Target, ChevronRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const sampleQuizzes = [
  { id: 1, title: "Biology Fundamentals", questions: 15, lastAttempt: "2 hours ago", score: 85, topic: "Science" },
  { id: 2, title: "World History: Ancient Civilizations", questions: 20, lastAttempt: "1 day ago", score: 72, topic: "History" },
  { id: 3, title: "Mathematics: Calculus Basics", questions: 12, lastAttempt: "3 days ago", score: 90, topic: "Math" },
  { id: 4, title: "English Literature: Shakespeare", questions: 18, lastAttempt: "1 week ago", score: 68, topic: "Literature" },
];

const getScoreColor = (score) => {
  if (score >= 80) return "text-emerald-400 bg-emerald-900/20";
  if (score >= 60) return "text-yellow-400 bg-yellow-900/20";
  return "text-rose-400 bg-rose-900/20";
};

const QuizzesPage = () => {
  return (
    <div className="min-h-screen relative bg-linear-to-br from-[#05010f] via-[#0b0625] to-black text-white overflow-hidden">
      
      {/* Floating Neon Blur */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-float"></div>
      <div className="absolute top-80 right-32 w-72 h-72 bg-pink-500/20 blur-2xl rounded-full animate-float delay-2000"></div>

      <Navbar />

      <main className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-4 animate-slide-down">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
                  My Quizzes
                </h1>
                <p className="text-gray-300">View and manage your saved quizzes</p>
              </div>

              <Link to="/">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium shadow-lg hover:scale-105 transition-all duration-300">
                  <Plus className="w-4 h-4" />
                  New Quiz
                </button>
              </Link>
            </div>

            {/* Quiz List */}
            <div className="space-y-5">
              {sampleQuizzes.map((quiz, index) => (
                <div
                  key={quiz.id}
                  className="quiz-glass-card flex items-center gap-6 p-6 rounded-3xl cursor-pointer group animate-slide-up border border-cyan-400"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-indigo-800 to-purple-700 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8 text-cyan-400" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1 truncate">{quiz.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-gray-300">
                          <span className="flex items-center gap-1">
                            <Target className="w-4 h-4 text-yellow-400" />
                            {quiz.questions} questions
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-purple-400" />
                            {quiz.lastAttempt}
                          </span>
                        </div>
                      </div>

                      {/* Score */}
                      <div className={`px-4 py-2 rounded-xl font-bold text-sm ${getScoreColor(quiz.score)}`}>
                        {quiz.score}%
                      </div>
                    </div>

                    {/* Topic Tag */}
                    <div className="mt-3">
                      <span className="inline-flex px-3 py-1 bg-white/10 backdrop-blur rounded-full text-xs font-medium text-gray-300">
                        {quiz.topic}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ChevronRight className="w-5 h-5 text-gray-400 shrink-0 group-hover:translate-x-2 transition-transform" />
                </div>
              ))}
            </div>

            {/* Empty State */}
            {sampleQuizzes.length === 0 && (
              <div className="quiz-glass-card rounded-3xl p-14 text-center animate-fade-in">
                <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gray-800 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No quizzes yet</h3>
                <p className="text-gray-300 mb-6">Upload a document to create your first quiz</p>
                <Link to="/upload">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 text-white shadow-lg hover:scale-105 transition-all">
                    <Plus className="w-4 h-4" />
                    Create Quiz
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default QuizzesPage;
