
import React from "react";
import ReactDOM from "react-dom/client";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import App from "./App.jsx";
import "./index.css";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

// Ensure page reloads/fresh entries start at the top for clean hero initialization.
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

// Create one shared smooth-scrolling instance.
const lenis = new Lenis({
  autoRaf: false,
  smoothWheel: true,
  lerp: 0.1,
  wheelMultiplier: 1.0,
  syncTouch: false,
});

// Expose global Lenis instance for seamless coordinate with Hero & navigation.
window.__lenis = lenis;

// Keep GSAP ScrollTrigger synchronized with Lenis.
lenis.on("scroll", () => {
  ScrollTrigger.update();
});

// Use GSAP's animation ticker to drive Lenis.
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Prevent GSAP's lag smoothing from interfering with Lenis.
gsap.ticker.lagSmoothing(0);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
