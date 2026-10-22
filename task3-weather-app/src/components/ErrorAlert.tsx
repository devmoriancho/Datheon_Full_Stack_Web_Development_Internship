import React from "react";

interface ErrorAlertProps {
  message: string;
}

export default function ErrorAlert({ message }: ErrorAlertProps) {
  return (
    <div className="w-full max-w-md mx-auto bg-red-500/20 backdrop-blur-md border border-red-500/40 rounded-xl p-4 flex items-center gap-3 shadow-lg">
      <div className="flex-shrink-0 w-5 h-5 text-red-200">
        <svg
          xmlns="http://w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      </div>
      <div className="flex-1 flex flex-col gap-0.5">
        <span className="text-sm font-bold text-red-100">
          Telemetry Warning
        </span>
        <p className="text-xs text-red-200/90 font-medium leading-relaxed">
          {message}
        </p>
      </div>
    </div>
  );
}
