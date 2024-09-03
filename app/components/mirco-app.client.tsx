"use client";

import Mirco from "@/mirco";
import { AppMetadata } from "qiankun";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function MircoAppClient({}) {
  const router = useRouter();
  const register = async () => {
    const qiankun = await import("qiankun");
    // 注册微应用
    qiankun.registerMicroApps(Mirco, {
      // qiankun 生命周期钩子 - 微应用加载前
      beforeLoad: (app: AppMetadata) => {
        console.log("before load", app, app.name);
        return Promise.resolve();
      },
      // qiankun 生命周期钩子 - 微应用挂载后
      afterMount: (app: AppMetadata) => {
        console.log("after mount", app.name);
        return Promise.resolve();
      },
    });

    // 启动 qiankun
    qiankun.start();

    // 添加全局异常捕获
    qiankun.addGlobalUncaughtErrorHandler((handler) => {
      console.log("异常捕获", handler);
    });
  };

  useEffect(() => {
    console.log("register qiankun");
    register().then();
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const handleRouteChange = () => {
    // 在 next11+ 下，子应用内部跳转，基座无法监听，导致点击浏览器前进、后退按钮，无法回退到正确的子应用页面
    const { href, origin } = window.location;
    console.log("handleRouteChange", href, origin);
  };

  return null;
}
