---
title: Migration-Plan
type: system
status: active
created: 2026-06-20
updated: 2026-06-20
tags:
  - type/系统
  - status/待处理
---

# Migration-Plan

## 现有内容

当前库中已有：

- `raw/`：Codex、AI 本地知识库等原始 Markdown 资料。
- `attachments/`：旧附件目录。
- `wiki/`：已有 wiki 内容。
- `llm-wiki.md`、`README.md`、`TheSchema.md` 等根目录文件。

## 建议迁移策略

先不批量移动，避免破坏已有链接。建议分三批整理：

1. 把 `raw/` 中的 Codex 系列资料逐篇加工为资料卡，重要原文再移动到 `02_Sources/Docs` 或 `02_Sources/Courses`。
2. 把 `attachments/` 中仍在使用的附件逐步迁移到 `07_Attachments`，并在相关笔记中更新链接。
3. 把根目录的体系说明类文档移动或拆分到 `09_System`、`01_Maps`、`04_Topics`。

## 第一批建议处理

- [x] `raw/Codex全解【视频文档】.md` -> [[2026-06-19 - 原始资料 - Codex全解【视频文档】]]
- [ ] `raw/CodexGuide tutorial index.md`
- [ ] `raw/AI本地知识库.md`
- [ ] `llm-wiki.md`
- [ ] `Obsidian搭建本地AI知识库.md`

## 迁移完成标准

- 每份重要资料有一张资料卡。
- 每张资料卡至少链接一个主题地图。
- 可复用内容拆成概念卡、工具卡、案例卡或提示词卡。
- 原始资料不再堆在根目录或临时目录。
