import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/koala-doc/",
  srcDir: "src",
  lang: "zh-CN",
  title: "Koala",
  description: "开源管理系统脚手架",
  themeConfig: {
    darkModeSwitchLabel: "外观",
    nav: [
      { text: "快速开始", link: "/guide/getting-started.md" },
      {
        text: "组件列表",
        link: "/components/koala-admin-client-starter.md",
      },
      {
        text: "2023.1.4",
        link: "https://github.com/koala-projects/koala/tree/2023.1.x",
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
            text: "启动服务",
            link: "/components/koala-boot-starter.md",
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
          {
            text: "多数据源",
            link: "/components/koala-data-source-starter.md",
          },
          {
            text: "系统日志",
            link: "/components/koala-log-starter.md",
          },
          {
            text: "MinIO",
            link: "/components/koala-minio-starter.md",
          },
          {
            text: "MyBatis",
            link: "/components/koala-mybatis-starter.md",
          },
          {
            text: "持久化",
            link: "/components/koala-persist-starter.md",
          },
          {
            text: "消息推送",
            link: "/components/koala-post-office-starter.md",
          },
          {
            text: "PowerJob Worker",
            link: "/components/koala-powerjob-worker-starter.md",
          },
          {
            text: "自定义查询",
            link: "/components/koala-query-starter.md",
          },
          {
            text: "资源服务",
            link: "/components/koala-resource-server-starter.md",
          },
          {
            text: "RocketMQ",
            link: "/components/koala-rocketmq-starter.md",
          },
          {
            text: "敏感词过滤",
            link: "/components/koala-sensitive-word-starter.md",
          },
          {
            text: "系统管理",
            link: "/components/koala-system-starter.md",
          },
          {
            text: "定时任务",
            link: "/components/koala-task-starter.md",
          },
          {
            text: "模板管理",
            link: "/components/koala-template-starter.md",
          },
          {
            text: "数据校验",
            link: "/components/koala-validation-starter.md",
          },
          {
            text: "Web",
            link: "/components/koala-web-starter.md",
          },
          {
            text: "微信小程序",
            link: "/components/koala-wechat-mini-app-starter.md",
          },
        ],
      },
    ],
    sidebarMenuLabel: "菜单",
    outline: {
      level: "deep",
      label: "本页目录",
    },
    returnToTopLabel: "返回顶部",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/koala-projects/koala/tree/2023.1.x",
      },
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索",
            buttonAriaLabel: "搜索",
          },
          modal: {
            displayDetails: "显示详情",
            resetButtonTitle: "清除查询条件",
            backButtonTitle: "返回",
            noResultsText: "无法找到相关结果",
            footer: {
              selectText: "选择",
              selectKeyAriaLabel: "选择",
              navigateText: "导航",
              closeText: "关闭",
              closeKeyAriaLabel: "关闭",
            },
          },
        },
      },
    },
  },
  // ignoreDeadLinks: true,
});
