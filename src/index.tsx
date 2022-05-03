import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react";
import { App } from "./app/App";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./app/store"
import { ChakraProvider, theme } from "@chakra-ui/react";
import { createRoot } from 'react-dom/client';
import Navbar from "./components/Navbar/Navbar";

const container = document.getElementById("root");

if (!container) {
  throw new Error("There was a problem mounting the application.")
}

const root = createRoot(container);

root.render(
  <React.StrictMode >
    <ColorModeScript />
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Navbar/>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode >
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister()

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
