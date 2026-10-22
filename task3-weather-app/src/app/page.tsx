"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import CurrentWeather from "../components/CurrentWeather";
import ForecastCard from "../components/ForecastCard";
import ErrorAlert from "../components/ErrorAlert";
import { fetchWeatherTelemetry, CleanedWeatherData } from "../utils/weatherApi";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<CleanedWeatherData | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  let themeState = "sunny";
  if (weatherData) {
    if (weatherData.isNight) {
      themeState = "nighttime";
    } else {
      const id = weatherData.conditionId;
      if (id === 800) {
        themeState = "sunny";
      } else {
        const group = Math.floor(id / 100);
        if (group === 2 || group === 3 || group === 5) {
          themeState = "rainy";
        } else {
          themeState = "cloudy";
        }
      }
    }
  }

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    setError(null);
    try {
      const liveData = await fetchWeatherTelemetry(city);
      setWeatherData(liveData);
    } catch (err: unknown) {
      setWeatherData(null);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected failure occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main
      data-weather={themeState}
      className="min-h-screen w-full flex flex-col items-center justify-start p-4 md:p-8 gap-8 transition-colors duration-500 ease-in-out"
    >
      <div className="w-full max-w-md flex items-center justify-center gap-3 mt-4">
        <div className="w-8 h-8 text-amber-300 animate-pulse">
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
              d="M12 3v1.5M20.25 10.5M4.12 11.25A5.625 5.625 0 0113.5 9.75a6 6 0 0111.25-3h.008a4.5 4.5 0 013.738 7.31L19.5 21"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-white drop-shadow-md">
          ClimateTelemetry
        </h1>
      </div>

      <SearchBar onSearch={handleSearch} isLoading={isLoading} />

      {error && <ErrorAlert message={error} />}

      {isLoading && (
        <div className="flex flex-col items-center justify-center gap-3 my-12">
          <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
          <span className="text-sm font-semibold tracking-wider text-white/80">
            Fetching Live Metrics...
          </span>
        </div>
      )}

      {!isLoading && weatherData && (
        <div className="w-full flex flex-col gap-6">
          <CurrentWeather data={weatherData} />
          <ForecastCard forecastData={weatherData.forecast} />
        </div>
      )}
    </main>
  );
}
