import { BookOpen, Layers } from "lucide-react";

export default function ModeToggle({ mode, onModeChange }) {
  return (
    <div
      className="
        relative flex items-center gap-2 p-1.5 rounded-2xl
        bg-white/10 backdrop-blur-xl border border-white/20
        animate-fade-in
      "
    >
      {/* GLOW SLIDER */}
      <div
        className={`
          absolute top-1.5 bottom-1.5 w-1/2 rounded-xl
          transition-all duration-300
          bg-linear-to-r from-cyan-400/40 to-purple-500/40
          shadow-[0_0_30px_rgba(168,85,247,0.6)]
          ${mode === "quiz" ? "left-1.5" : "left-[50%]"}
        `}
      />

      {/* QUIZ MODE */}
      <button
        onClick={() => onModeChange("quiz")}
        className={`
          relative z-10 flex-1 flex items-center justify-center gap-2
          px-4 py-2 rounded-xl font-medium
          transition-all duration-300
          ${
            mode === "quiz"
              ? "text-cyan-300"
              : "text-gray-300 hover:text-cyan-300"
          }
        `}
      >
        <BookOpen className="w-4 h-4" />
        Multiple Choice Quiz
      </button>

      {/* FLASHCARD MODE */}
      <button
        onClick={() => onModeChange("flashcard")}
        className={`
          relative z-10 flex-1 flex items-center justify-center gap-2
          px-4 py-2 rounded-xl font-medium
          transition-all duration-300
          ${
            mode === "flashcard"
              ? "text-cyan-300"
              : "text-gray-300 hover:text-cyan-300"
          }
        `}
      >
        <Layers className="w-4 h-4" />
        Flashcards
      </button>
    </div>
  );
}
