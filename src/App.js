// imports
import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import {
  theme,
  ChakraProvider,
  ColorModeScript,
  CSSReset,
} from "@chakra-ui/react";

// Creating a custom theme to be used
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

// By adding these various Chakra UI tags, Routing becomes easier if needed,
//   and dark mode functionality is enabled.
const App = () => {
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
};

export default App;
