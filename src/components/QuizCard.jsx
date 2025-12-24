import { useState } from "react";
import { Check, X } from "lucide-react";

export default function QuizCard({
  question,
  options,
  correctAnswer,
  onAnswer,
  questionNumber,
  totalQuestions,
}) {
  const [selected, setSelected] = useState("");
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelect = (option) => {
    if (hasAnswered) return;

    setSelected(option);
    setHasAnswered(true);

    const isCorrect = option === correctAnswer;
    setTimeout(() => onAnswer(isCorrect), 1500);
  };

  const getOptionStyles = (option) => {
    if (!hasAnswered) {
      return selected === option
        ? "border-blue-400 bg-blue-50/30 shadow-inner shadow-blue-500/50"
        : "border-gray-700 hover:border-blue-400 hover:bg-blue-50/20 hover:shadow-lg";
    }

    if (option === correctAnswer)
      return "border-green-400 bg-green-50/30 animate-pulse shadow-inner shadow-green-500/50";
    if (option === selected && option !== correctAnswer)
      return "border-red-400 bg-red-50/30 animate-shake shadow-inner shadow-red-500/50";

    return "border-gray-600 opacity-50";
  };

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div className="max-w-2xl mx-auto p-8 rounded-3xl shadow-2xl bg-linear-to-br from-[#0b0625] to-[#1a1835] text-white animate-scale-in border border-gray-700">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold text-gray-300">
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i < questionNumber ? "bg-blue-400" : "bg-gray-500/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h2 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed text-blue-100 drop-shadow-lg">
        {question}
      </h2>

      {/* Options */}
      <div className="space-y-4">
        {options.map((option, index) => (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            disabled={hasAnswered}
            className={`
              w-full p-5 rounded-2xl border-2 flex items-center gap-4 transition-all duration-300 transform hover:scale-105
              ${getOptionStyles(option)}
              ${!hasAnswered ? "cursor-pointer" : "cursor-default"}
            `}
          >
            <span
              className={`
                w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300
                ${
                  selected === option && !hasAnswered
                    ? "bg-blue-500 text-white shadow-md shadow-blue-500/50"
                    : hasAnswered && option === correctAnswer
                    ? "bg-green-500 text-white shadow-md shadow-green-400/50"
                    : hasAnswered && option === selected
                    ? "bg-red-500 text-white shadow-md shadow-red-400/50"
                    : "bg-gray-800 text-gray-300 hover:bg-blue-500/20 hover:text-blue-300"
                }
              `}
            >
              {hasAnswered && option === correctAnswer ? (
                <Check className="w-6 h-6" />
              ) : hasAnswered && option === selected && option !== correctAnswer ? (
                <X className="w-6 h-6" />
              ) : (
                optionLabels[index]
              )}
            </span>
            <span className="flex-1 text-left font-medium text-gray-100 drop-shadow-md">
              {option}
            </span>
          </button>
        ))}
      </div>

      {/* Feedback */}
      {hasAnswered && (
        <div
          className={`
            mt-6 p-4 rounded-2xl text-center font-semibold transition-all duration-300
            ${selected === correctAnswer
              ? "bg-green-500/20 text-green-400 shadow-lg shadow-green-400/50"
              : "bg-red-500/20 text-red-400 shadow-lg shadow-red-400/50"}
          `}
        >
          {selected === correctAnswer
            ? "🎉 Correct! Great job!"
            : "❌ Incorrect. The correct answer is highlighted above."}
        </div>
      )}
    </div>
  );
}
