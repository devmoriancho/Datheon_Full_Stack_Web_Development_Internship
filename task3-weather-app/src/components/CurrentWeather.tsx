import React from "react";
import SunIcon from "./icons/SunIcon";
import RainIcon from "./icons/RainIcon";
import CloudIcon from "./icons/CloudIcon";
import SnowIcon from "./icons/SnowIcon";

interface CurrentWeatherProps {
  data: {
    city: string;
    temperature: number;
    condition: string;
    conditionId: number;
    humidity: number;
    windSpeed: number;
    pressure: number;
  };
}

export default function CurrentWeather({ data }: CurrentWeatherProps) {
  const renderWeatherIcon = (id: number) => {
    if (id === 800) {
      return <SunIcon className="w-24 h-24 text-amber-300" />;
    }
    const group = Math.floor(id / 100);
    if (group === 2 || group === 3 || group === 5) {
      return <RainIcon className="w-24 h-24 text-blue-300" />;
    }
    if (group === 6) {
      return <SnowIcon className="w-24 h-24 text-slate-200" />;
    }
    return <CloudIcon className="w-24 h-24 text-slate-300" />;
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl text-center">
      <h2 className="text-2xl font-bold tracking-tight text-white mb-1">
        {data.city}
      </h2>
      <p className="text-sm font-medium uppercase tracking-wider text-white/70 mb-4">
        {data.condition}
      </p>

      <div className="flex flex-col items-center justify-center gap-2 mb-6">
        {renderWeatherIcon(data.conditionId)}
        <span className="text-6xl font-extrabold tracking-tighter text-white">
          {data.temperature}°c
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-wider text-white/60 mb-1">
            Humidity
          </span>
          <span className="text-base font-bold text-white">
            {data.humidity}%
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-wider text-white/60 mb-1">
            Wind Speed
          </span>
          <span className="text-base font-bold text-white">
            {data.windSpeed} m/s
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs uppercase tracking-wider text-white/60 mb-1">
            Pressure
          </span>
          <span className="text-base font-bold text-white">
            {data.pressure} hPa
          </span>
        </div>
      </div>
    </div>
  );
}
