import {
  ChakraProvider,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";
import {
  WiDaySunny,
  WiDaySunnyOvercast,
  WiCloudy,
  WiDayCloudyHigh,
  WiRainMix,
  WiHail,
  WiStormShowers,
  WiSnow,
  WiDust,
} from "react-icons/wi";

const App = () => {
  const API_ENDPOINT = "https://api.openweathermap.org/data/2.5/weather";
  const apiKey = process.env.REACT_APP_API_KEY;
  const [weatherData, setWeatherData] = useState({});
  const [showModal, setShowModal] = useState(false);

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
        const weatherJa = {
          Thunderstorm: "雷雨",
          Drizzle: "霧雨",
          Rain: "雨",
          Snow: "雪",
          Atmosphere: "霧",
          Clear: "晴天",
          Clouds: "曇り",
          Mist: "霧",
          Smoke: "スモッグ",
          Haze: "煙霧",
          Dust: "ほこり",
          Fog: "濃霧",
          Sand: "砂嵐",
          Ash: "火山灰",
          Squall: "突風",
          Tornado: "竜巻",
        };
        const icon = {
          "01d": <WiDaySunny size={60} />,
          "01n": <WiDaySunny size={60} />,
          "02d": <WiDaySunnyOvercast size={60} />,
          "02n": <WiDaySunnyOvercast size={60} />,
          "03d": <WiCloudy size={60} />,
          "03n": <WiCloudy size={60} />,
          "04d": <WiDayCloudyHigh size={60} />,
          "04n": <WiDayCloudyHigh size={60} />,
          "09d": <WiRainMix size={60} />,
          "09n": <WiRainMix size={60} />,
          "10d": <WiHail size={60} />,
          "10n": <WiHail size={60} />,
          "11d": <WiStormShowers size={60} />,
          "11n": <WiStormShowers size={60} />,
          "13d": <WiSnow size={60} />,
          "13n": <WiSnow size={60} />,
          "50d": <WiDust size={60} />,
          "50n": <WiDust size={60} />,
        };
        setWeatherData({
          city: res.data.name,
          img_path: res.data.weather[0].main,
          weather: weatherJa[res.data.weather[0].main],
          description: res.data.weather[0].description,
          icon: icon[res.data.weather[0].icon],
          temp: res.data.main.temp, // 現在の温度
          temp_min: res.data.main.temp_min, // 今日の最低気温
          temp_max: res.data.main.temp_max, // 今日の最高気温
        });
      })
      .catch((error) => {
        console.log(error);
        setShowModal(true);
      });
  };
  useEffect(() => {
    handleGetWeather("tokyo");
  }, []);

  return (
    <ChakraProvider>
      <Box backgroundImage={`url('/images/${weatherData.img_path}.jpg')`} backgroundSize="cover">
        <Header handleGetWeather={handleGetWeather} />
        <Weather weatherData={weatherData} />
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>エラー</ModalHeader>
            <ModalBody>入力した都市のお天気情報を取得できませんでした。</ModalBody>
            <ModalFooter>
              <Button onClick={() => setShowModal(false)}>閉じる</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </ChakraProvider>
  );
};

export default App;
