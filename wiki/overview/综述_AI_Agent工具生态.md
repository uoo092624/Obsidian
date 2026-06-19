---
type: "overview"
tags: ['overview', 'ai-agent']
summary: "Codex 与 OpenClaw 代表两类 Agent 化路径：开发现场智能体与自托管多渠道智能体。"
sources: ['raw/Codex介绍.md', 'raw/OpenClaw橙皮书_extracted.txt', 'raw/实战案例库.md']
updated: "2026-06-19"
---
# AI Agent工具生态综述

## 一句话结论
[[wiki/entities/实体_Codex|Codex]] 和 [[wiki/entities/实体_OpenClaw|OpenClaw]] 都在把 AI 从聊天推进到执行，但前者更靠近代码仓库和开发流程，后者更靠近自托管、多渠道和长期运行的数字员工。

## 总体框架
| 路径 | 代表 | 核心价值 | 主要风险 |
| --- | --- | --- | --- |
| 开发现场智能体 | [[wiki/entities/实体_Codex|Codex]] | 读写项目、调试、验证、自动化开发任务 | 权限、误改、验证不足 |
| 多渠道自托管 Agent | [[wiki/entities/实体_OpenClaw|OpenClaw]] | 多消息入口、长期运行、数据自控、技能生态 | 运维、供应链、凭证、成本 |
| 工具接入层 | [[wiki/concepts/概念_MCP|MCP]] / [[wiki/concepts/概念_Skills|Skills]] | 连接外部工具，形成复用能力 | 权限扩散、第三方可靠性 |
| 知识沉淀层 | [[wiki/concepts/概念_AI本地知识库|AI本地知识库]] | 把经验和资料变成可查询 Wiki | 页面膨胀、失去复用 |

## 支撑比较
- [[wiki/comparisons/Codex_vs_聊天式AI|Codex vs 聊天式AI]]
- [[wiki/comparisons/OpenClaw_vs_ChatGPT|OpenClaw vs ChatGPT]]
- [[wiki/comparisons/OpenClaw_vs_Claude_Code|OpenClaw vs Claude Code]]
