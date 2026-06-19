---
type: "overview"
tags: ['overview', 'codex', 'obsidian']
summary: "本批 raw 资料共同指向一个主题：用 Codex 类智能体把开发、知识库和真实工作流连接起来。"
sources: ['raw/Codex介绍.md', 'raw/实战案例库.md', 'raw/跟Karpathy学搭建AI知识库-附Obsidian实例.md', 'raw/AI本地知识库.md']
updated: "2026-06-19"
---
# AI编程与知识库工作流综述

## 一句话结论
本批资料共同指向一个工作方式：让 [[wiki/entities/实体_Codex|Codex]] 进入真实文件系统和工作流，用 [[wiki/concepts/概念_LLM_Wiki三层结构|LLM Wiki三层结构]] 把资料沉淀成可复用知识，而不是停留在一次性聊天。

## 当前框架
- [[wiki/entities/实体_Codex|Codex]] 负责进入项目现场：读文件、改文件、运行命令、验证结果。
- [[wiki/concepts/概念_AI本地知识库|AI本地知识库]] 负责积累可复利知识。
- [[wiki/concepts/概念_Ingest_Query_Lint|Ingest / Query / Lint]] 负责导入、查询、体检的维护循环。
- [[wiki/concepts/概念_AI实战案例库|AI实战案例库]] 负责把能力落到场景。

## 未决问题
- 是否要为 16 个 Codex 实战案例分别建立独立页面？
- 是否将“AI 编程工具生态”和“AI 知识管理方法”拆成两个专题索引？

## 2026-06-19 补充：Codex操作手册视角
[[wiki/sources/来源_Codex全解视频文档|Codex全解视频文档]] 把 Codex 从“能力概览”推进到“日常操作手册”：安装登录、上下文与额度、模型选择、本地文件权限、命令行、持久记忆、计划模式、插件、Skills、CLI、MCP 和自动化任务。它适合补齐本知识库中的实践操作层。
