import React from "react";
import SunIcon from "./icons/SunIcon";
import RainIcon from "./icons/RainIcon";
import CloudIcon from "./icons/CloudIcon";
import SnowIcon from "./icons/SnowIcon";

interface ForecastItemData {
  date: string;
  temperature: number;
  conditionId: number;
  description: string;
}

interface ForecastCardProps {
  forecastData: Array<ForecastItemData>;
}

export default function ForecastCard({ forecastData }: ForecastCardProps) {
  const renderForecastIcon = (id: number) => {
    if (id === 800) {
      return <SunIcon className="w-8 h-8 text-amber-300" />;
    }
    const group = Math.floor(id / 100);
    if (group === 2 || group === 3 || group === 5) {
      return <RainIcon className="w-8 h-8 text-blue-300" />;
    }
    if (group === 6) {
      return <SnowIcon className="w-8 h-8 text-slate-200" />;
    }
    return <CloudIcon className="w-8 h-8 text-slate-300" />;
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h3 className="text-sm font-bold uppercase tracking-wider text-white/70 mb-3 px-1">
        5-Day Trend
      </h3>
      <div className="flex gap-3 overflow-x-auto pb-2 md:overflow-x-visible md:justify-between snap-x snap-mandatory">
        {forecastData.map((day, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 md:flex-shrink md:flex-1 bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/10 flex flex-col items-center justify-between gap-2 snap-center shadow-md"
          >
            <span className="text-xs font-medium text-white/80 text-center whitespace-nowrap">
              {day.date}
            </span>
            {renderForecastIcon(day.conditionId)}
            <span className="text-lg font-bold text-white">
              {day.temperature}°C
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
