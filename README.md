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
---

# 文章内容
```

## 功能

- [x] 深色/浅色主题
- [x] 响应式设计
- [x] 文章目录
- [x] 标签分类
- [x] RSS Feed
- [x] SEO 优化