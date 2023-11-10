import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Koala",
  description: "开源管理系统脚手架",
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        nav: [
          { text: "快速开始", link: "/guide/getting-started.md" },
          { text: "组件列表", link: "/components" },
        ],

        sidebar: [
          {
            text: "快速开始",
            link: "/guide/getting-started.md",
          },
          {
            text: "组件列表",
            link: "/components",
          },
        ],

        socialLinks: [
          { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
      },
    },
  },
});
