import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/koala-doc/",
  lang: "zh-CN",
  title: "Koala",
  description: "开源管理系统脚手架",
  themeConfig: {
    nav: [
      { text: "快速开始", link: "/guide/getting-started.md" },
      {
        text: "组件列表",
        link: "/components/koala-admin-client-starter.md",
      },
    ],
    sidebar: [
      {
        text: "快速开始",
        link: "/guide/getting-started.md",
      },
      {
        text: "组件列表",
        collapsed: false,
        items: [
          {
            text: "监控客户端",
            link: "/components/koala-admin-client-starter.md",
          },
          {
            text: "监控服务端",
            link: "/components/koala-admin-server-starter.md",
          },
          {
            text: "附件管理",
            link: "/components/koala-attachment-starter.md",
          },
          {
            text: "认证授权服务",
            link: "/components/koala-authorization-server-starter.md",
          },
          {
            text: "缓存服务",
            link: "/components/koala-cache-starter.md",
          },
          {
            text: "代码生成",
            link: "/components/koala-code-gen-starter.md",
          },
          {
            text: "数据库管理",
            link: "/components/koala-database-starter.md",
          },
        ],
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  ignoreDeadLinks: true,
});
