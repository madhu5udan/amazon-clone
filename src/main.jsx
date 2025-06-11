import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reducer,{ initialState } from "./reducer.jsx";
import { StateProvider } from "./StateProvider";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// serviceWorker.unregister();
{/* If you want your app to work offline and load faster, you can change*/}