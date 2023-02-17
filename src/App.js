import { ChakraProvider, Box } from "@chakra-ui/react";

import "./App.css";
import Header from "./components/Header";
import Weather from "./components/Weather";

function App() {
  return (
    <ChakraProvider>
      <Box backgroundImage="url('/images/img01.jpg')" backgroundSize="cover">
        <Header />
        <Weather />
      </Box>
    </ChakraProvider>
  );
}

export default App;
