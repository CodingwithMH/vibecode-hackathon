import { useState } from "react";
import { Check, X } from "lucide-react";

export default function QuizCard({
  question,
  options,
  correctAnswerId,
  onAnswer,
  questionNumber,
  totalQuestions,
}) {
  const [selectedId, setSelectedId] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const handleSelect = (optionId) => {
    if (hasAnswered) return;

    setSelectedId(optionId);
    setHasAnswered(true);

    const isCorrect = optionId === correctAnswerId;
    setTimeout(() => onAnswer(isCorrect), 1500);
  };

  const getOptionStyles = (optionId) => {
    if (!hasAnswered) {
      return selectedId === optionId
        ? "border-blue-500 bg-blue-50"
        : "border-gray-300 hover:border-blue-400 hover:bg-gray-50";
    }

    if (optionId === correctAnswerId) return "border-green-500 bg-green-50 animate-pulse";
    if (optionId === selectedId && optionId !== correctAnswerId) return "border-red-500 bg-red-50 animate-shake";

    return "border-gray-300 opacity-50";
  };

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div className="max-w-2xl mx-auto p-8 rounded-2xl shadow-lg bg-white animate-scale-in">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-gray-500">
          Question {questionNumber} of {totalQuestions}
        </span>
        <div className="flex gap-1">
          {Array.from({ length: totalQuestions }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                i < questionNumber ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-relaxed">{question}</h2>

      {/* Options */}
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            disabled={hasAnswered}
            className={`
              w-full p-4 rounded-xl border-2 text-left flex items-center gap-4 transition-all duration-300
              ${getOptionStyles(option.id)}
              ${!hasAnswered ? "cursor-pointer" : "cursor-default"}
            `}
          >
            <span
              className={`
                w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-colors duration-300
                ${
                  selectedId === option.id && !hasAnswered
                    ? "bg-blue-500 text-white"
                    : hasAnswered && option.id === correctAnswerId
                    ? "bg-green-500 text-white"
                    : hasAnswered && option.id === selectedId
                    ? "bg-red-500 text-white"
                    : "bg-gray-100 text-gray-700 group-hover:bg-blue-50 group-hover:text-blue-600"
                }
              `}
            >
              {hasAnswered && option.id === correctAnswerId ? (
                <Check className="w-5 h-5" />
              ) : hasAnswered && option.id === selectedId && option.id !== correctAnswerId ? (
                <X className="w-5 h-5" />
              ) : (
                optionLabels[index]
              )}
            </span>
            <span className="text-gray-900 font-medium">{option.text}</span>
          </button>
        ))}
      </div>

      {/* Feedback */}
      {hasAnswered && (
        <div
          className={`
            mt-6 p-4 rounded-xl text-center font-semibold transition-all duration-300
            ${selectedId === correctAnswerId ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}
          `}
        >
          {selectedId === correctAnswerId
            ? "🎉 Correct! Great job!"
            : "❌ Incorrect. The correct answer is highlighted above."}
        </div>
      )}
    </div>
  );
}
