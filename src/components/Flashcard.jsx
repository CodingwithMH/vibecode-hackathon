import { useState } from "react";
import { RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";

export default function Flashcard({
  front,
  back,
  currentIndex,
  totalCards,
  onNext,
  onPrevious,
}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => setIsFlipped((prev) => !prev);

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(onNext, 150);
  };

  const handlePrevious = () => {
    setIsFlipped(false);
    setTimeout(onPrevious, 150);
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-gray-500">
          Card {currentIndex + 1} of {totalCards}
        </span>

        <div className="h-2 flex-1 mx-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="perspective-1000 mb-8">
        <div
          onClick={handleFlip}
          className={`
            relative w-full aspect-4/3 cursor-pointer
            transition-transform duration-500
            transform-style-preserve-3d
            ${isFlipped ? "rotate-y-180" : ""}
          `}
        >
          {/* Front */}
          <div className="absolute inset-0 backface-hidden">
            <div className="w-full h-full rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center bg-linear-to-br from-white to-gray-100">
              <span className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-4">
                Question
              </span>
              <h2 className="text-2xl font-bold text-gray-900">{front}</h2>
              <p className="text-sm text-gray-500 mt-6">Click to flip</p>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div className="w-full h-full rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center bg-linear-to-br from-blue-50 to-purple-50">
              <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider mb-4">
                Answer
              </span>
              <h2 className="text-2xl font-bold text-gray-900">{back}</h2>
              <p className="text-sm text-gray-500 mt-6">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-300
                     hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        <button
          onClick={() => setIsFlipped(false)}
          className="w-12 h-12 rounded-full border border-gray-300
                     flex items-center justify-center hover:bg-gray-100"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === totalCards - 1}
          className="flex items-center gap-2 px-5 py-3 rounded-xl
                     bg-linear-to-r from-blue-500 to-purple-500 text-white
                     hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
