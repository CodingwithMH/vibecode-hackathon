import { BookOpen, Layers } from "lucide-react";

export default function ModeToggle({ mode, onModeChange }) {
  return (
    <div className="flex items-center gap-2 p-1.5 bg-gray-100 rounded-2xl">
      {/* Quiz Mode */}
      <button
        onClick={() => onModeChange("quiz")}
        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition-all duration-300
          ${mode === "quiz" ? "bg-white shadow-md text-blue-600" : "text-gray-700 hover:bg-gray-200"}`}
      >
        <BookOpen className="w-4 h-4" />
        Multiple Choice Quiz
      </button>

      {/* Flashcard Mode */}
      <button
        onClick={() => onModeChange("flashcard")}
        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl transition-all duration-300
          ${mode === "flashcard" ? "bg-white shadow-md text-blue-600" : "text-gray-700 hover:bg-gray-200"}`}
      >
        <Layers className="w-4 h-4" />
        Flashcards
      </button>
    </div>
  );
}
