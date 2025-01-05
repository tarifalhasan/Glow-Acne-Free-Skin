import React from "react";

interface LoaderProps {
  size?: number;
  strokeWidth?: number;
  duration?: number;
}

export const Loader: React.FC<LoaderProps> = ({
  size = 40,
  strokeWidth = 4,
  duration = 1.5,
}) => {
  return (
    <div className="loader-container" style={{ width: size, height: size }}>
      <svg
        className="loader"
        viewBox="0 0 50 50"
        style={{ width: "100%", height: "100%" }}
      >
        <circle
          className="loader-circle"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4338ca" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
      <style>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .loader-container {
          display: inline-block;
        }
        .loader {
          animation: spin ${duration}s linear infinite;
        }
        .loader-circle {
          stroke-dasharray: 150;
          stroke-dashoffset: 75;
        }
      `}</style>
    </div>
  );
};
