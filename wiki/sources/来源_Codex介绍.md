---
type: "source"
tags: ['source', 'codex', 'ai-agent']
summary: "OpenAI Codex 的能力、形态、工作流、安全边界与使用建议概览。"
sources: ['raw/Codex介绍.md']
updated: "2026-06-19"
---

# 来源：Codex介绍

## 来源信息
- 原始文件：[[raw/Codex介绍.md]]
- 时间：原文标注更新日期为 2026-06-19
- 主题：[[wiki/entities/实体_Codex|Codex]] 作为软件开发智能体的定位、能力、形态与使用方法。

## 核心要点
- [[wiki/entities/实体_Codex|Codex]] 可以读取项目、编辑文件、运行命令、检查 diff、调试问题，不只是回答代码问题。
- 适合写代码、理解代码库、代码审查、调试修复、重构迁移、补测试和文档维护。
- 主要形态包括 App、CLI、IDE 扩展、Cloud、GitHub / Slack 等集成。
- 典型流程是：读任务 → 读上下文 → 计划 → 修改/运行 → 验证 → 汇总。
- 安全边界由[[wiki/concepts/概念_审批与沙箱|审批与沙箱]]共同控制。
- 可通过 `AGENTS.md`、[[wiki/concepts/概念_Skills|Skills]]、[[wiki/concepts/概念_MCP|MCP]]、Subagents、Hooks 等机制定制。

## 拆解出的页面
- [[wiki/entities/实体_Codex|Codex]]
- [[wiki/entities/实体_OpenAI|OpenAI]]
- [[wiki/concepts/概念_Codex工作流|Codex工作流]]
- [[wiki/concepts/概念_审批与沙箱|审批与沙箱]]
- [[wiki/comparisons/Codex_vs_聊天式AI|Codex vs 聊天式AI]]
- [[wiki/comparisons/Codex形态比较|Codex形态比较]]
