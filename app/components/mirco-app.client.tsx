"use client";

import Mirco from "@/mirco";
import { AppMetadata } from "qiankun";
import { useEffect } from "react";

export default function MircoAppClient({}) {
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
  }, []);

  return <div id="mirco-app"></div>;
}
