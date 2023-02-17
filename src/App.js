import { ChakraProvider } from "@chakra-ui/react";

import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";

function App() {
  return (
    <ChakraProvider className="App">
      <Header />
      <Weather />
    </ChakraProvider>
  );
}

export default App;
