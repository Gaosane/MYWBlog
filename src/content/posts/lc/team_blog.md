---
title: Team Blog
published: 2026-03-09
description: '如何将个人博客改造为团队博客'
image: ''
tags: [Astro, 团队博客, 多作者]
category: Astro
draft: false 
lang: ''
author: lc
---

## 1. 内容组织结构

按作者分文件夹存放文章：

```
src/content/posts/
├── myw/           # 作者 Ma Yuanwen 的文章
│   ├── guide/
│   │   └── index.md
│   ├── markdown.md
│   └── ...
├── lc/            # 作者 Li Chuan 的文章
│   └── team_blog.md
└── zxy/           # 作者 Zheng Xingyun 的文章
    └── test5.md
```

每个作者对应一个文件夹，文件夹名即作者 ID（如 `myw`、`lc`、`zxy`）。

## 2. 配置层

### 2.1 作者配置 (`src/config.ts`)

定义 `AuthorConfig` 类型（继承 `ProfileConfig` 并增加 `folder`），在 `authorsConfig` 中为每位作者配置：

- `folder`: 与 `posts` 下目录名一致
- `name`, `avatar`, `bio`, `links`: 展示信息

```ts
export const authorsConfig: AuthorConfig[] = [
  { folder: "myw", name: "Yuanwen Ma", avatar: "assets/images/myw.jpg", ... },
  { folder: "lc", name: "Chuan Li", avatar: "assets/images/lc.jpg", ... },
  { folder: "zxy", name: "Xingyun Zheng", avatar: "assets/images/zxy.jpg", ... },
];
```

### 2.2 文章 Schema (`src/content/config.ts`)

在 posts 的 schema 中增加必填字段 `author`：

```ts
author: z.string()
```

## 3. 路由与页面

### 3.1 作者列表页 `src/pages/[author]/[...page].astro`

- 路径：`/{author}/`、`/{author}/2/` 等
- 逻辑：按 `author` 过滤文章，分页展示该作者文章
- 通过 `postsByAuthor` 按作者分组，排除 `author === "studio609"` 的文章

### 3.2 全局首页 `src/pages/[...page].astro`

- 路径：`/`、`/2/` 等
- 展示所有作者的文章（混合列表）

### 3.3 文章详情 `src/pages/posts/[...slug].astro`

- 路径：`/posts/{slug}/`，slug 如 `myw/guide`、`lc/team_blog`
- 将 `author` 传给 `PostMetadata` 和侧边栏

## 4. 工具函数

### 4.1 作者发现 (`src/utils/author-utils.ts`)

通过读取 `src/content/posts` 下的子目录获取作者列表，供导航栏使用：

```ts
const folders = fs.readdirSync(path.join(__dirname, "..", "content", "posts"));
```

### 4.2 URL 工具 (`src/utils/url-utils.ts`)

- `getAuthorUrl(author)`: `/{author}/`
- `getPostUrlBySlug(slug)`: `/posts/{slug}/`
- `getDir(path)`: 从 `entry.id` 解析文章所在目录，用于相对图片路径

## 5. 组件改造

| 组件 | 改造内容 |
|------|----------|
| `Profile.astro` | 接收 `author`，从 `authorsConfig` 查找配置，否则用 `profileConfig` |
| `PostMeta.astro` | 接收 `author`，展示作者链接（`getAuthorUrl(author)`） |
| `PostCard.astro` | 将 `entry.data.author` 传给 `PostMetadata` |
| `SideBar.astro` | 接收 `author` 并传给 `Profile` |
| `MainGridLayout.astro` | 接收 `author` 并传给 `SideBar` |
| `Pagination.astro` | 支持作者分页：`/{author}/`、`/{author}/{page}/` |
| `Navbar.astro` | 使用 `getAuthors()` 渲染作者链接 |

## 6. 新建文章脚本 (`scripts/new-post.js`)

默认 `author: 'studio609'`

## 7. 注意事项

1. **图片路径**：文章内图片使用相对路径时，`ImageWrapper` 通过 `getDir(entry.id)` 解析 `basePath`，需保证图片与文章在同一目录或子目录。
2. **`author: "studio609"`**：用于未归属作者的文章，不会出现在各作者页面。
3. **prev/next 导航**：`content-utils.getSortedPosts()` 按发布时间全局排序，prev/next 可能指向不同作者的文章。
4. **导航栏作者链接**：由 `author-utils` 从目录结构自动生成，与 `authorsConfig` 中的 `folder` 需保持一致。

