---
type: "review_queue"
tags: ["codex-course", "verification", "queue"]
summary: "记录 Codex 课程知识库中待核验、冲突、过时或需要人工判断的问题。"
sources: []
updated: "2026-06-20"
---

# 待核验队列

## 高优先级

| 状态 | 问题 | 来源 | 建议处理 |
|---|---|---|---|
| open | ChatGPT Plus / Pro、Codex 可用性、额度和模型选择可能随时间变化 | `raw/02 订阅 ChatGPT Plus.md`、`raw/Codex全解【视频文档】.md` | 写课前用官方帮助中心或 Codex 手册核验 |
| open | Skills / Plugins / MCP 的入口、安装方式和可用范围可能因工作区而异 | `raw/03 了解 Codex 桌面 App.md`、`raw/09 技能与插件.md` | 拆成官方机制和当前客户端演示两个层次 |
| open | 权限、沙盒、Auto-review 字段和 UI 名称可能随版本变化 | `raw/08 权限管理.md`、`raw/16 沙盒与审批.md` | 用 OpenAI Codex Manual 核验后再生成讲义 |
| open | `Codex全解【视频文档】.md` 中远程飞书图片链接可能失效 | `raw/Codex全解【视频文档】.md` | 优先替换为 `attachments/` 本地截图 |

## 中优先级

| 状态 | 问题 | 来源 | 建议处理 |
|---|---|---|---|
| open | 第三方 API、Codex++、CCX、CC Switch 属于经验路径，不应放入官方主线 | `raw/05 连接第三方 API.md` | 作为进阶补充课或风险提醒 |
| open | Hooks 资料目前只是占位，缺少完整课堂案例 | `raw/18 Hooks.md` | 后续从官方手册补充 |
| open | Worktrees、GitHub Action、SDK、Subagents、Code review 主题资料不足 | 第一阶段诊断 | 作为后续资料收集任务 |

## 处理规则

- `open`：尚未处理。
- `checking`：正在核验。
- `resolved`：已写入稳定页面或明确放弃。
- `wontfix`：不进入课程主线，但保留记录。
