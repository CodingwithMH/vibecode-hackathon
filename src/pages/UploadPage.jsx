import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FileUpload from "../components/FileUpload";
import ModeToggle from "../components/ModeToggle";
import { Zap, ArrowRight } from "lucide-react";

const UploadPage = () => {
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState(null);
  const [mode, setMode] = useState("quiz");
  const [step, setStep] = useState("upload");

  const handleFileSelect = (file) => {
    setUploadedFile(file);
  };

  const handleGenerate = () => {
    // Navigate to home with mode and file info
    navigate("/", { state: { mode, file: uploadedFile?.name } });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {step === "upload" ? (
              <>
                {/* Upload Header */}
                <div className="text-center mb-10 animate-slide-up">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Upload Your Document
                  </h1>
                  <p className="text-gray-500">
                    We'll analyze your content and generate study materials
                  </p>
                </div>

                {/* File Upload */}
                <div className="animate-slide-up stagger-1">
                  <FileUpload onFileSelect={handleFileSelect} />
                </div>

                {/* Continue Button */}
                {uploadedFile && (
                  <div className="mt-8 animate-fade-in">
                    <button
                      onClick={() => setStep("mode")}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                    >
                      Continue
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Mode Selection Header */}
                <div className="text-center mb-10 animate-slide-up">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Choose Your Mode
                  </h1>
                  <p className="text-gray-500">
                    How would you like to study{" "}
                    <span className="font-medium text-gray-900">{uploadedFile?.name}</span>?
                  </p>
                </div>

                {/* Mode Toggle Card */}
                <div className="bg-white shadow-md rounded-2xl p-6 mb-8 animate-slide-up stagger-1">
                  <ModeToggle mode={mode} onModeChange={setMode} />
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-2">
                  <button
                    onClick={() => setStep("upload")}
                    className="flex-1 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleGenerate}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                  >
                    <Zap className="w-5 h-5" />
                    Generate
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UploadPage;
