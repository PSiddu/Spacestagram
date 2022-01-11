import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import {
  theme,
  ChakraProvider,
  ColorModeScript,
  CSSReset,
} from "@chakra-ui/react";

const customTheme = {
  ...theme,
  initialColorMode: "light",
  useSystemColorMode: false,

  fonts: {
    heading: '"Cabin", sans-serif',
    body: '"Cabin", sans-serif',
    mono: '"Cabin", sans-serif',
    Text: '"Cabin", sans-serif',
  },
};

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={customTheme}>
        <ColorModeScript
          initialColorMode={customTheme.config.initialColorMode}
        />
        <CSSReset />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
