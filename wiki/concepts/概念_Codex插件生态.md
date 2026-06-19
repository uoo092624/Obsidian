---
type: "concept"
tags: ["concept", "codex"]
summary: "Codex 通过 Browser、Chrome、GitHub、Netlify、Sentry、HyperFrames 等插件扩展对浏览器、代码协作、部署、监控和设计视频的操作能力。"
sources: ["raw/Codex全解【视频文档】.md"]
updated: "2026-06-19"
---

# Codex插件生态

## 定义
Codex 插件生态是把外部应用能力接入 Codex 的方式，使 Codex 能处理浏览器、代码平台、部署平台、错误监控、设计和视频生成等任务。

## 重点插件
| 插件 | 作用 | 适合场景 |
| --- | --- | --- |
| Browser | 操作内置浏览器 | 前端自动化测试、公开网页、本地预览 |
| Chrome | 控制真实 Chrome 浏览器 | 需要登录态的网站任务 |
| GitHub | 查看仓库、PR、Issue、CI | 代码协作、审查、发布 |
| OpenAI Developers | 查询 OpenAI 官方开发资料 | API、Agents、Apps、Codex 文档检索 |
| Netlify / Vercel | 部署 Web 应用和预览环境 | 前端发布与站点配置 |
| Sentry | 查看线上错误和事件 | Bug 定位与影响评估 |
| Remotion / HyperFrames | 生成动态视觉和视频 | 程序化视频、HTML 视频渲染 |
| Computer Use | 操控图形界面软件 | 插件或命令行不够用时 |

## 选择原则
- 公开网页或本地预览优先 Browser。
- 必须依赖真实登录态时使用 Chrome。
- 代码协作优先 GitHub。
- 部署和运维按平台选择 Netlify / Vercel / Sentry。

## 相关页面
- [[wiki/entities/实体_Codex|Codex]]
- [[wiki/concepts/概念_MCP|MCP]]
- [[wiki/concepts/概念_CLI工具链|CLI工具链]]
