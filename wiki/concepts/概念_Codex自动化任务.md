---
type: "concept"
tags: ["concept", "codex"]
summary: "通过自动化面板或自然语言创建周期性任务，让 Codex 定期执行技能、生成内容或发送结果。"
sources: ["raw/Codex全解【视频文档】.md"]
updated: "2026-06-19"
---

# Codex自动化任务

## 定义
Codex 自动化任务是把某个可重复流程设置成定期或触发式执行的机制。

## 两种方式
- 自动化面板：打开自动化面板，新建功能或选择官方样例，再完成任务设置。
- 自然语言交互：直接告诉 Codex 时间、频率、任务内容和输出位置。

## 示例
每周一早上 9 点自动执行“热门项目推荐”Skill，生成图文并发送到飞书群。

## 设计要点
- 明确触发时间。
- 明确要调用的 Skill / CLI / MCP。
- 明确输出格式和发送位置。
- 明确失败重试、权限和成本边界。

## 相关页面
- [[wiki/concepts/概念_Skills|Skills]]
- [[wiki/concepts/概念_CLI工具链|CLI工具链]]
- [[wiki/concepts/概念_MCP|MCP]]
- [[wiki/concepts/概念_Codex工作流|Codex工作流]]
