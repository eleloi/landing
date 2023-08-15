type WeatherCode = {
  name: string
  icon: string
}

const weatherCodes: { [key: number]: WeatherCode } = {
  0: { name: 'Clear sky', icon: '☀️' },
  1: { name: 'Mainly clear', icon: '☁️' },
  2: { name: 'Partly cloudy', icon: '☁️' },
  3: { name: 'Overcast', icon: '☁️' },
  45: { name: 'Fog', icon: '🌫️' },
  48: { name: 'Depositing rime fog', icon: '🌫️' },
  51: { name: 'Light dizzle', icon: '🌧️' },
  53: { name: 'Moderate dizzle', icon: '🌧️' },
  55: { name: 'Dense dizzle', icon: '🌧️' },
  56: { name: 'Light dizzle', icon: '🌧️' },
  57: { name: 'Dense dizzle', icon: '🌧️' },
  61: { name: 'Slight rain', icon: '☔' },
  63: { name: 'Moderate rain', icon: '☔' },
  65: { name: 'Heavy rain', icon: '☔' },
  66: { name: 'Light freezing rain', icon: '🌨️' },
  67: { name: 'Heavy freezing rain', icon: '🌨️' },
  71: { name: 'Slight snow fall', icon: '❄️' },
  73: { name: 'Moderate snow fall', icon: '❄️' },
  75: { name: 'Heavy snow fall', icon: '❄️' },
  77: { name: 'Snow grains', icon: '❄️' },
  80: { name: 'Slight rain showers', icon: '🚿' },
  81: { name: 'Moderate rain showers', icon: '🚿' },
  82: { name: 'Violent rain showers', icon: '🚿' },
  85: { name: 'Slight snow showers', icon: '❄️' },
  86: { name: 'Heavy snow showers', icon: '❄️' },
  95: { name: 'Thunderstorm', icon: '⛈️' },
}

export function getWeather(code: number): WeatherCode {
  if (weatherCodes[code]) {
    return weatherCodes[code]
  }
  return { name: 'Unknown', icon: '❓' }
}
