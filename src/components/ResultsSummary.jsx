import { Trophy, Target, RefreshCw, BookOpen, TrendingUp } from "lucide-react";

export default function ResultsSummary({
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  weakTopics,
  onRetryAll,
  onRetryWeak,
}) {
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);

  const getScoreColor = () => {
    if (scorePercentage >= 80) return "text-green-500";
    if (scorePercentage >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const getScoreMessage = () => {
    if (scorePercentage >= 90) return "Outstanding! You're a master! 🏆";
    if (scorePercentage >= 80) return "Excellent work! Keep it up! 🌟";
    if (scorePercentage >= 70) return "Good job! Room for improvement! 💪";
    if (scorePercentage >= 60) return "Not bad! Keep studying! 📚";
    return "Keep practicing! You'll get better! 🎯";
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8 animate-slide-up p-4">
      {/* Score Card */}
      <div className="rounded-2xl shadow-lg p-8 text-center bg-white">
        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-linear-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
          <Trophy className="w-10 h-10 text-white" />
        </div>

        <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
        <p className="text-gray-500 mb-8">{getScoreMessage()}</p>

        <div className={`text-7xl font-bold mb-4 ${getScoreColor()}`}>
          {scorePercentage}%
        </div>

        <div className="flex justify-center gap-8 text-sm">
          <span className="text-green-500">{correctAnswers} Correct</span>
          <span className="text-red-500">{incorrectAnswers} Incorrect</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard icon={Target} label="Questions" value={totalQuestions} />
        <StatCard icon={TrendingUp} label="Correct" value={correctAnswers} />
        <StatCard icon={BookOpen} label="Weak Topics" value={weakTopics.length} />
      </div>

      {/* Weak Topics */}
      {weakTopics.length > 0 && (
        <div className="rounded-2xl shadow-lg p-6 bg-white">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Target className="w-5 h-5 text-yellow-500" />
            Areas to Improve
          </h3>

          <div className="space-y-4">
            {weakTopics.map((topic, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{topic.name}</span>
                  <span
                    className={
                      topic.score >= 70
                        ? "text-green-500"
                        : topic.score >= 50
                        ? "text-yellow-500"
                        : "text-red-500"
                    }
                  >
                    {topic.score}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      topic.score >= 70
                        ? "bg-green-500"
                        : topic.score >= 50
                        ? "bg-yellow-500"
                        : "bg-red-500"
                    }`}
                    style={{ width: `${topic.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onRetryAll}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          <RefreshCw className="w-5 h-5" />
          Retry All Questions
        </button>

        {weakTopics.length > 0 && (
          <button
            onClick={onRetryWeak}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition"
          >
            <Target className="w-5 h-5" />
            Practice Weak Topics
          </button>
        )}
      </div>
    </div>
  );
}

/* Helper Component for Stat Cards */
function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl shadow p-4 text-center bg-white">
      <Icon className="w-6 h-6 mx-auto mb-2 text-indigo-500" />
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
