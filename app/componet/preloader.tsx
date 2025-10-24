"use client";
import { useEffect } from "react";

export function Preloader() {
  useEffect(() => {
    // lógica do preloader apenas no cliente
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => preloader.remove(), 1000);
    }
  }, []);

  return <div id="preloader"></div>;
}
