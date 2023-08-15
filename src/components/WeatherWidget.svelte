<script lang="ts">
  import type { Weather } from '@/types'

  import {getWeather} from '@/assets/weatherCodes'

  async function fetchWeather () {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=41.39&longitude=2.17&current_weather=true")
    const fetchedData = await response.json() as Weather
    return {
      current: getWeather(fetchedData.current_weather.weathercode),
      temperature: fetchedData.current_weather.temperature
    }
  }

</script>

<div class="flex gap-2">
  {#await fetchWeather()}
    <div>Loading...</div>
  {:then {current, temperature}}
    <div class="bg-accent-content bg-opacity-70 shadow-sm shadow-secondary-focus rounded-full p-2 w-[50px] h-[50px] flex items-center justify-center">
      <p class="text-2xl">{current.icon}</p>
    </div>
    <div class="text-xs text-center text-accent-content">{temperature}ºC</div> <!-- Temperature -->
  {:catch error}
    <div>Error: {error.message}</div>
  {/await}
</div>

