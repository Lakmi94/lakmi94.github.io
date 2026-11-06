"use client";

import { useEffect } from "react";

const scripts = [
  "/js/jquery.min.js",
  "/js/jquery.easing.1.3.js",
  "/js/bootstrap.min.js",
  "/js/jquery.waypoints.min.js",
  "/js/jquery.flexslider-min.js",
  "/js/owl.carousel.min.js",
  "/js/jquery.countTo.js",
  "/js/main.js",
];

export default function LegacyScripts() {
  useEffect(() => {
    let active = true;
    let currentScript: HTMLScriptElement | undefined;

    const loadScript = (index: number) => {
      if (!active || index >= scripts.length) return;

      const script = document.createElement("script");
      currentScript = script;
      script.src = scripts[index];
      script.onload = () => loadScript(index + 1);
      script.onerror = () => {
        console.error(`Failed to load required portfolio script: ${script.src}`);
      };
      document.body.appendChild(script);
    };

    loadScript(0);

    return () => {
      active = false;
      currentScript?.remove();
    };
  }, []);

  return null;
}
