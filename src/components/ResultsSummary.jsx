import { Trophy, Target, RefreshCw, BookOpen, TrendingUp, Timer } from "lucide-react";

export default function ResultsSummary({
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  weakTopics,
  onRetryAll,
  onRetryWeak,
  timeTaken
}) {
  const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);

  const getScoreColor = () => {
    if (scorePercentage >= 80) return "text-emerald-400";
    if (scorePercentage >= 60) return "text-yellow-400";
    return "text-rose-400";
  };

  const getScoreMessage = () => {
    if (scorePercentage >= 90) return "Outstanding! You're a master! 🏆";
    if (scorePercentage >= 80) return "Excellent work! Keep it up! 🌟";
    if (scorePercentage >= 70) return "Good job! Room for improvement! 💪";
    if (scorePercentage >= 60) return "Not bad! Keep studying! 📚";
    return "Keep practicing! You'll get better! 🎯";
  };
  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <div className="max-w-2xl mx-auto space-y-10 animate-slide-up p-4">
      {/* Score Card */}
      <div className="rounded-3xl p-8 text-center glass-card">
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-xl animate-pop">
          <Trophy className="w-11 h-11 text-white" />
        </div>

        <h2 className="text-3xl font-bold mb-2 text-gray-900">
          Quiz Complete!
        </h2>
        <p className="text-gray-500 mb-8">{getScoreMessage()}</p>

        <div
          className={`text-7xl font-extrabold mb-4 ${getScoreColor()} animate-score`}
        >
          {scorePercentage}%
        </div>

        <div className="flex justify-center gap-10 text-sm font-medium">
          <span className="text-emerald-500">
            {correctAnswers} Correct
          </span>
          <span className="text-rose-500">
            {incorrectAnswers} Incorrect
          </span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon={Target} label="Questions" value={totalQuestions} />
        <StatCard icon={TrendingUp} label="Correct" value={correctAnswers} />
        <StatCard icon={BookOpen} label="Weak Topics" value={weakTopics.length} />
        <StatCard icon={Timer} label="Time Taken in seconds" value={timeTaken} />
      </div>

      {/* Weak Topics */}
      {weakTopics.length > 0 && (
        <div className="rounded-3xl p-6 glass-card">
          <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
            <Target className="w-5 h-5 text-yellow-400" />
            Areas to Improve
          </h3>

          <div className="space-y-5">
            {weakTopics.map((topic, index) => (
              <div key={index} className="animate-fade-in">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-gray-800">
                    {topic.name}
                  </span>
                  <span
                    className={
                      topic.score >= 70
                        ? "text-emerald-500"
                        : topic.score >= 50
                        ? "text-yellow-400"
                        : "text-rose-500"
                    }
                  >
                    {topic.score}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-700 ease-out animate-progress ${
                      topic.score >= 70
                        ? "bg-linear-to-r from-emerald-400 to-green-500"
                        : topic.score >= 50
                        ? "bg-linear-to-r from-yellow-400 to-orange-400"
                        : "bg-linear-to-r from-rose-400 to-red-500"
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
          className="
            flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl
            bg-linear-to-r from-indigo-500 to-purple-600
            text-white font-medium shadow-lg
            hover:scale-105 hover:shadow-purple-500/40
            transition-all duration-300
          "
        >
          <RefreshCw className="w-5 h-5" />
          Retry All Questions
        </button>

        {weakTopics.length > 0 && (
          <button
            onClick={onRetryWeak}
            className="
              flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl
              bg-white/60 backdrop-blur border border-gray-300
              hover:bg-white hover:scale-105
              transition-all duration-300
            "
          >
            <Target className="w-5 h-5" />
            Practice Weak Topics
          </button>
        )}
      </div>
    </div>
  );
}

/* Helper Component */
function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl p-4 text-center glass-card hover-lift">
      <Icon className="w-6 h-6 mx-auto mb-2 text-indigo-500" />
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
