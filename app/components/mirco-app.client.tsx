"use client";

import { useEffect } from "react";

export default function MircoAppClient({}) {
  const register = async () => {
    const { setupApp, preloadApp } = await import("wujie");
    if (typeof window !== "undefined") {
      const degrade =
        window.localStorage.getItem("degrade") === "true" ||
        !window.Proxy ||
        !window.CustomElementRegistry;
      /**
       * 配置应用，主要是设置默认配置
       * preloadApp、startApp的配置会基于这个配置做覆盖
       */
      setupApp({
        name: "vueApp",
        url: "//localhost:5173/",
        exec: true,
      } as any);

      if (window.localStorage.getItem("preload") !== "false") {
        preloadApp({
          name: "vueApp",
          url: "//localhost:5173/",
        });
      }
    }
  };
  useEffect(() => {
    register().then();
  }, []);

  return null;
}
