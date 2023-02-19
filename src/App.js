import { ChakraProvider, Box } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";

function App() {
  const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState({});

  const handleGetWeather = (city) => {
    axios
      .get(API_ENDPOINT, {
        params: {
          q: city,
          APPID: apiKey,
          units: "metric",
          lang: "ja",
        },
      })
      .then((res) => {
        setWeatherData({
          city: res.data.name,
          weather: res.data.main,
          description: res.data.weather[0].description,
          icon: res.data.weather[0].icon,
          temp: res.data.main.temp, // 現在の温度
          temp_min: res.data.main.temp_min, // 今日の最低気温
          temp_max: res.data.main.temp_max, // 今日の最高気温
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    handleGetWeather("tokyo");
  }, []);
  return (
    <ChakraProvider>
      <Box backgroundImage="url('/images/img01.jpg')" backgroundSize="cover">
        <Header handleGetWeather={handleGetWeather} />
        <Weather weatherData={weatherData} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
