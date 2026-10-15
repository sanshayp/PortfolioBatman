import React from "react";
import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import App from "./App.jsx";
import "lenis/dist/lenis.css";
import "./styles.css";

new Lenis({
  autoRaf: true,
  lerp: 0.1,
  smoothWheel: true,
  anchors: true,
});

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
