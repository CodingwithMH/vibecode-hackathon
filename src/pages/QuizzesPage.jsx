import Navbar from "../components/Navbar";
import { BookOpen, Clock, Target, ChevronRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const sampleQuizzes = [
  {
    id: 1,
    title: "Biology Fundamentals",
    questions: 15,
    lastAttempt: "2 hours ago",
    score: 85,
    topic: "Science",
  },
  {
    id: 2,
    title: "World History: Ancient Civilizations",
    questions: 20,
    lastAttempt: "1 day ago",
    score: 72,
    topic: "History",
  },
  {
    id: 3,
    title: "Mathematics: Calculus Basics",
    questions: 12,
    lastAttempt: "3 days ago",
    score: 90,
    topic: "Math",
  },
  {
    id: 4,
    title: "English Literature: Shakespeare",
    questions: 18,
    lastAttempt: "1 week ago",
    score: 68,
    topic: "Literature",
  },
];

const getScoreColor = (score) => {
  if (score >= 80) return "text-green-600 bg-green-100";
  if (score >= 60) return "text-yellow-500 bg-yellow-100";
  return "text-red-600 bg-red-100";
};

const QuizzesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  My Quizzes
                </h1>
                <p className="text-gray-500">
                  View and manage your saved quizzes
                </p>
              </div>
              <Link to="/upload">
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
                  <Plus className="w-4 h-4" />
                  New Quiz
                </button>
              </Link>
            </div>

            {/* Quiz List */}
            <div className="space-y-4">
              {sampleQuizzes.map((quiz, index) => (
                <div
                  key={quiz.id}
                  className="bg-white shadow-md rounded-2xl p-6 flex items-center gap-6 hover:shadow-lg transition animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-linear-to-br from-indigo-100 to-purple-200 flex items-center justify-center shrink-0">
                    <BookOpen className="w-7 h-7 text-indigo-600" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                          {quiz.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Target className="w-4 h-4" />
                            {quiz.questions} questions
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {quiz.lastAttempt}
                          </span>
                        </div>
                      </div>

                      {/* Score */}
                      <div className={`px-4 py-2 rounded-xl font-bold ${getScoreColor(quiz.score)}`}>
                        {quiz.score}%
                      </div>
                    </div>

                    {/* Topic Tag */}
                    <div className="mt-3">
                      <span className="inline-flex px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-500">
                        {quiz.topic}
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <ChevronRight className="w-5 h-5 text-gray-400 shrink-0" />
                </div>
              ))}
            </div>

            {/* Empty State */}
            {sampleQuizzes.length === 0 && (
              <div className="bg-white shadow-md rounded-2xl p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gray-100 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No quizzes yet
                </h3>
                <p className="text-gray-500 mb-6">
                  Upload a document to create your first quiz
                </p>
                <Link to="/upload">
                  <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">
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
