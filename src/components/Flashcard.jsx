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
    <div className="max-w-xl mx-auto animate-fade-in">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium text-gray-400">
          Card {currentIndex + 1} of {totalCards}
        </span>

        <div className="h-2 flex-1 mx-4 bg-white/10 rounded-full overflow-hidden backdrop-blur">
          <div
            className="h-full bg-linear-to-r from-cyan-400 via-blue-500 to-purple-500
                       transition-all duration-500 ease-out animate-progress-glow"
            style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="perspective-1000 mb-10">
        <div
          onClick={handleFlip}
          className={`
            relative w-full aspect-4/3 cursor-pointer
            transition-transform duration-700 ease-in-out
            transform-style-preserve-3d
            hover:scale-[1.02]
            ${isFlipped ? "rotate-y-180" : ""}
          `}
        >
          {/* Front */}
          <div className="absolute inset-0 backface-hidden">
            <div
              className="
                w-full h-full rounded-3xl p-8
                flex flex-col items-center justify-center text-center
                bg-linear-to-br from-white/90 to-gray-100/80
                backdrop-blur-xl
                shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              "
            >
              <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider mb-4">
                Question
              </span>
              <h2 className="text-2xl font-bold text-gray-900">{front}</h2>
              <p className="text-sm text-gray-500 mt-6 animate-pulse-subtle">
                Click to flip
              </p>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <div
              className="
                w-full h-full rounded-3xl p-8
                flex flex-col items-center justify-center text-center
                bg-linear-to-br from-cyan-50 to-purple-100
                backdrop-blur-xl
                shadow-[0_20px_50px_rgba(124,58,237,0.35)]
              "
            >
              <span className="text-xs font-semibold text-purple-700 uppercase tracking-wider mb-4">
                Answer
              </span>
              <h2 className="text-2xl font-bold text-gray-900">{back}</h2>
              <p className="text-sm text-gray-500 mt-6 animate-pulse-subtle">
                Click to flip back
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="
            flex items-center gap-2 px-5 py-3 rounded-xl
            bg-white/10 backdrop-blur border border-white/20
            text-gray-200
            hover:bg-white/20 hover:scale-105
            transition-all duration-300
            disabled:opacity-40 disabled:cursor-not-allowed
          "
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>

        <button
          onClick={() => setIsFlipped(false)}
          className="
            w-12 h-12 rounded-full
            bg-white/10 backdrop-blur border border-white/20
            flex items-center justify-center
            text-gray-200
            hover:bg-white/20 hover:rotate-180
            transition-all duration-500
          "
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === totalCards - 1}
          className="
            flex items-center gap-2 px-5 py-3 rounded-xl
            bg-linear-to-r from-cyan-500 to-purple-600
            text-white shadow-lg
            hover:scale-105 hover:shadow-purple-500/40
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          Next
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
