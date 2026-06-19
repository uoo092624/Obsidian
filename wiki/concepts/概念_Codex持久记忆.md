---
type: "concept"
tags: ["concept", "codex"]
summary: "Codex 通过全局规则、项目级 AGENTS.md 和自动记忆复用偏好、约束与项目经验的机制。"
sources: ["raw/Codex全解【视频文档】.md"]
updated: "2026-06-19"
---

# Codex持久记忆

## 定义
Codex 持久记忆是让偏好、规则、项目约束和历史经验在后续任务中继续生效的机制。

## 三种形态
- 全局级长期记忆：适合记录跨项目通用的个人偏好、工作习惯和长期规则。
- 项目级 `AGENTS.md`：适合记录某个仓库或项目专属的构建命令、代码风格、文档规范和安全边界。
- 自动记忆：在对话或任务闲置后自动总结，并在后续对话或项目中复用。

## 本库应用
[[TheSchema]] 就类似一个项目级协作规则文件：它约束 AI 只能把 `raw/` 当事实来源，只在 `wiki/` 中维护知识页面。

## 相关页面
- [[wiki/concepts/概念_Codex工作流|Codex工作流]]
- [[wiki/concepts/概念_LLM_Wiki三层结构|LLM Wiki三层结构]]
- [[wiki/entities/实体_Codex|Codex]]
