---
type: "schema"
tags: ["codex-course", "schema", "workflow"]
summary: "Codex 课程知识库的维护规则、目录结构、页面类型和操作流程。"
sources:
  - "llm-wiki.md"
  - "TheSchema.md"
  - "OpenAI Codex Manual, fetched 2026-06-20"
updated: "2026-06-20"
---

# Codex 课程知识库 Schema

## 1. 三层结构

- `raw/`：原始资料层。只读，是事实来源和素材来源。
- `wiki/`：课程知识层。由 Codex 维护，负责综合、链接、核验、课程化。
- `AGENTS.md`：项目级规则层。告诉 Codex 后续如何维护本知识库。

## 2. 目录结构

| 路径 | 用途 |
|---|---|
| `wiki/sources/` | 单个 raw 来源摘要与可信度记录 |
| `wiki/concepts/` | Codex 核心概念页，如沙盒、审批、AGENTS.md、Skills、MCP |
| `wiki/features/` | 产品功能模块页，如桌面 App、CLI、Cloud、Automations |
| `wiki/workflows/` | 可复用操作流程，如 Ingest、Query、Lint、Output、课堂演示 |
| `wiki/lessons/` | 课时页，面向课堂讲授 |
| `wiki/demos/` | 演示脚本页，面向现场操作 |
| `wiki/exercises/` | 课堂练习、课后作业和验收标准 |
| `wiki/assets/` | 图片、截图、图示素材索引 |
| `wiki/outputs/` | 讲义、PPT/Marp、PDF、图片说明等成品 |
| `wiki/templates/` | 页面模板 |
| `wiki/index.md` | 内容总索引 |
| `wiki/log.md` | 追加式维护日志 |
| `wiki/review_queue.md` | 待核验、冲突、过时、需要人工判断的问题 |
| `wiki/course_map.md` | 课程大纲和课时路径 |
| `wiki/source_inventory.md` | raw 资料清单与课程用途 |

## 3. 页面原则

- 页面必须有 frontmatter，至少包含 `type`、`tags`、`summary`、`sources`、`updated`。
- 涉及当前 Codex 产品事实时，加 `verified_at` 和 `verification_status`。
- 课程页必须链接到至少一个 demo 或 exercise。
- demo 页必须包含恢复路径，避免课堂现场卡住。
- 图片素材必须从 `attachments/` 优先引用，远程图只作为待下载项记录。
- 对不确定信息，不要写成结论，放入 `wiki/review_queue.md`。

## 4. 维护节奏

1. 新资料进入 `raw/` 后，先做 source 摘要。
2. 把可复用概念写入 `concepts/` 或 `features/`。
3. 把可操作流程写入 `workflows/`。
4. 把课堂顺序写入 `lessons/` 和 `demos/`。
5. 把可交付成品写入 `outputs/`。
6. 每次维护都追加 `wiki/log.md`。

## 5. 事实分级

| 分级 | 含义 | 处理 |
|---|---|---|
| `official` | 来自 OpenAI 官方文档或手册 | 可写入课程主线 |
| `raw-derived` | 来自 `raw/` 的教程或视频文档 | 可作为教学素材，关键事实需核验 |
| `experience` | 来自社区经验或第三方工具 | 标注为经验路径 |
| `needs-verification` | 可能过时、冲突、未核验 | 放入 review queue |

## 6. 推荐操作

- 小步维护，优先让每次 Ingest 触达 3 到 8 个页面，而不是大批量无链接摘要。
- 课程内容优先回答“课堂怎么讲、怎么演、怎么练、怎么验证”。
- 每个模块都要能追溯到来源，并能被输出为讲义或幻灯片。
