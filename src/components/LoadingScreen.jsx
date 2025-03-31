import { useState, useEffect } from "react";
import { useTranslation } from "../hooks/useTranslation";

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 500);
          return 100;
        }
        return prevProgress + 5;
      });
    }, 70);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <div className="w-64 text-center">
        <h1 className="text-4xl font-mono font-bold mb-4 text-white">
          stevo<span className="animate-gradient-text bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">.dev</span>
        </h1>
        <div className="w-full bg-gray-800 rounded-full h-2.5">
          <div
            className="bg-gradient-to-r from-blue-500 to-cyan-400 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-gray-400 mt-2">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};