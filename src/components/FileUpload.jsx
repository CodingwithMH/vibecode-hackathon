import { useState, useCallback } from "react";
import { Upload, FileText, X, Check } from "lucide-react";

export default function FileUpload({
  onFileSelect,
  acceptedTypes = [".pdf", ".docx", ".txt"],
}) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setIsDragging(true);
    else if (e.type === "dragleave") setIsDragging(false);
  }, []);

  const simulateUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        const file = files[0];
        setUploadedFile(file);
        simulateUpload();
        onFileSelect?.(file);
      }
    },
    [onFileSelect]
  );

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setUploadedFile(file);
      simulateUpload();
      onFileSelect?.(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setUploadProgress(0);
    setIsUploading(false);
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
  };

  return (
    <div className="w-full">
      {!uploadedFile ? (
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          className={`
            relative p-12 rounded-3xl text-center cursor-pointer
            border-2 border-dashed transition-all duration-300
            backdrop-blur-xl bg-white/10
            animate-upload-enter
            ${
              isDragging
                ? "border-cyan-400 scale-105 shadow-[0_0_35px_rgba(34,211,238,0.6)]"
                : "border-white/20 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)]"
            }
          `}
        >
          <input
            type="file"
            accept={acceptedTypes.join(",")}
            onChange={handleFileInput}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />

          <div
            className={`
              w-20 h-20 mx-auto mb-6 rounded-2xl
              bg-linear-to-br from-cyan-400/20 to-purple-500/30
              flex items-center justify-center
              transition-transform duration-300
              animate-float
              ${isDragging ? "scale-110" : ""}
            `}
          >
            <Upload className="w-10 h-10 text-cyan-300" />
          </div>

          <h3 className="text-xl font-semibold mb-2 text-white">
            Drop your document here
          </h3>
          <p className="text-gray-300 mb-4">or click to browse files</p>

          <div className="flex justify-center gap-2 text-sm text-gray-300">
            {["PDF", "DOCX", "TXT"].map((type) => (
              <span
                key={type}
                className="px-3 py-1 rounded-full bg-white/10 border border-white/20"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 animate-fade-in">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-linear-to-br from-cyan-400/20 to-purple-500/30 flex items-center justify-center">
              <FileText className="w-7 h-7 text-cyan-300" />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold truncate text-white">
                    {uploadedFile.name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {formatFileSize(uploadedFile.size)}
                  </p>
                </div>

                <button
                  onClick={removeFile}
                  className="p-1 rounded-lg hover:bg-white/10 transition"
                >
                  <X className="w-4 h-4 text-gray-300" />
                </button>
              </div>

              <div className="mt-4">
                {isUploading ? (
                  <>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-cyan-400 to-purple-500 transition-all duration-300"
                        style={{ width: `${uploadProgress}%` }}
                      />
                    </div>
                    <p className="text-sm text-gray-400 mt-1">
                      Uploading… {uploadProgress}%
                    </p>
                  </>
                ) : (
                  <div className="flex items-center gap-2 text-green-400 animate-success-pop">
                    <Check className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Upload complete
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
