# 技术随笔博客

基于 Astro 6 + MDX 构建的个人技术博客。

## 快速开始

```bash
pnpm install
pnpm dev
```

访问 http://localhost:4321

## 部署

### GitHub Pages 自动部署

1. 首次使用需要手动推送代码到 GitHub：

```bash
# 添加 SSH key 到 GitHub
# https://github.com/settings/keys

# 推送代码
git push -u origin master
```

2. 在 GitHub 仓库设置中启用 Pages：
   - Settings → Pages → Source: GitHub Actions

3. 推送后 GitHub Actions 会自动部署

### 手动部署

```bash
pnpm build
# 上传 dist/ 目录到 GitHub Pages
```

## 项目结构

```
src/
├── content/blog/    # 博客文章 (MDX)
├── layouts/         # 布局组件
├── pages/           # 页面
│   ├── index.astro  # 首页
│   ├── blog/        # 文章列表
│   ├── tags/        # 标签页
│   └── about.astro  # 关于页
└── styles/          # 样式文件
```

## 写作

在 `src/content/blog/` 添加 `.mdx` 文件：

```mdx
---
title: "文章标题"
description: "文章描述"
date: 2024-03-15
tags: ["Tag1", "Tag2"]
featured: false
series:
  name: "系列名称"
  order: 1
---

# 文章内容

支持数学公式：

$$
\tau = M(q)\ddot{q} + C(q, \dot{q})\dot{q} + g(q)
$$
```

在 MDX 中嵌入视频（B 站 / YouTube）：

```mdx
import VideoEmbed from '../../components/media/VideoEmbed.astro';

<VideoEmbed provider="bilibili" id="BV1xx411c7mD" title="机械臂调试演示" />
<VideoEmbed provider="youtube" id="dQw4w9WgXcQ" title="路径规划可视化" />
```

## 评论系统（Giscus）

1. 复制配置模板并填写参数：

```bash
cp .env.example .env
```

2. 前往 [giscus.app](https://giscus.app/) 获取以下参数并填入 `.env`：
   - `PUBLIC_GISCUS_REPO_ID`
   - `PUBLIC_GISCUS_CATEGORY_ID`

3. 重启开发服务后，文章页底部会显示评论区。

## 邮件订阅（Buttondown）

1. 在 `.env` 中配置：

```bash
PUBLIC_BUTTONDOWN_USERNAME=your_buttondown_name
# 或者直接指定完整 action（可选）
PUBLIC_BUTTONDOWN_ACTION=https://buttondown.email/api/emails/embed-subscribe/your_buttondown_name
```

2. 订阅入口会自动出现在：
   - 导航栏的 `订阅` 页面
   - 首页底部 CTA
   - 文章详情页评论区上方

## 功能

- [x] 深色/浅色主题
- [x] 响应式设计
- [x] 文章目录
- [x] 标签分类
- [x] 标题 + 标签搜索
- [x] 多标签筛选（文章列表页）
- [x] 归档时间轴
- [x] 系列专题（系列页 + 系列内上一篇/下一篇）
- [x] 社交分享（微博/知乎/微信复制链接）
- [x] 视频嵌入（B 站 / YouTube）
- [x] 邮件订阅入口（Buttondown）
- [x] Giscus 评论系统（可配置）
- [x] RSS Feed
- [x] SEO 优化（含 sitemap）
- [x] LaTeX 数学公式（KaTeX）