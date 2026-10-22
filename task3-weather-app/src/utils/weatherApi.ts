export interface CurrentWeatherResponse {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
  }>;
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  dt: number;
}

export interface ForecastItem {
  dt: number;
  main: {
    temp: number;
  };
  weather: Array<{
    id: number;
    main: string;
    description: string;
  }>;
  dt_txt: string;
}

export interface ForecastResponse {
  list: Array<ForecastItem>;
}

export interface CleanedWeatherData {
  city: string;
  temperature: number;
  condition: string;
  conditionId: number;
  humidity: number;
  windSpeed: number;
  pressure: number;
  isNight: boolean;
  forecast: Array<{
    date: string;
    temperature: number;
    conditionId: number;
    description: string;
  }>;
}

export async function fetchWeatherTelemetry(
  city: string,
): Promise<CleanedWeatherData> {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  if (!apiKey) {
    throw new Error("API key is missing");
  }

  const encodedCity = encodeURIComponent(city);
  const currentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&units=metric&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${encodedCity}&units=metric&appid=${apiKey}`;

  const currentRes = await fetch(currentUrl);
  if (!currentRes.ok) {
    throw new Error("City not found");
  }

  const forecastRes = await fetch(forecastUrl);
  if (!forecastRes.ok) {
    throw new Error("Forecast data failed");
  }

  const currentData: CurrentWeatherResponse = await currentRes.json();
  const forecastData: ForecastResponse = await forecastRes.json();

  const isNight =
    currentData.dt < currentData.sys.sunrise ||
    currentData.dt > currentData.sys.sunset;

  const dailyMap: Record<string, ForecastItem> = {};

  forecastData.list.forEach((item) => {
    const dateStr = item.dt_txt.split(" ")[0];
    if (!dailyMap[dateStr] && item.dt_txt.includes("12:00:00")) {
      dailyMap[dateStr] = item;
    }
  });

  const uniqueDays = Object.values(dailyMap).slice(0, 5);

  const cleanedForecast = uniqueDays.map((item) => {
    const dateObj = new Date(item.dt * 1000);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };
    const formattedDate = dateObj.toLocaleDateString("en-US", options);

    return {
      date: formattedDate,
      temperature: Math.round(item.main.temp),
      conditionId: item.weather[0].id,
      description: item.weather[0].main,
    };
  });

  return {
    city: currentData.name,
    temperature: Math.round(currentData.main.temp),
    condition: currentData.weather[0].main,
    conditionId: currentData.weather[0].id,
    humidity: currentData.main.humidity,
    windSpeed: currentData.wind.speed,
    pressure: currentData.main.pressure,
    isNight: isNight,
    forecast: cleanedForecast,
  };
}
