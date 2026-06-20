---
type: "lesson"
tags: ["codex-course", "lesson", "agents-md"]
summary: "讲解 AGENTS.md 如何让 Codex 持久理解项目约定，并带学员写最小可用规则。"
lesson_no: "L04"
duration_minutes: 45
level: "beginner"
sources:
  - "raw/15 AGENTS.md.md"
  - "OpenAI Codex Manual, fetched 2026-06-20"
related_features: []
related_concepts: []
related_demos: []
related_exercises: []
updated: "2026-06-20"
verified_at: "2026-06-20"
verification_status: "partly-verified"
---

# L04 AGENTS.md 项目规则

## 学习目标

- 理解 prompt、记忆、AGENTS.md、config 的分工。
- 能为一个项目写最小可用 `AGENTS.md`。
- 知道哪些内容适合写入项目规则，哪些不适合。

## 讲授结构

| 时间 | 内容 | 形式 |
|---|---|---|
| 10 分钟 | 为什么需要项目规则 | 讲解 |
| 10 分钟 | AGENTS.md 发现和优先级 | 图示 |
| 15 分钟 | 写最小可用规则 | 现场练习 |
| 10 分钟 | 规则质量检查 | 复盘 |

## 最小模板

```markdown
# AGENTS.md

## Project

- This repository is a Codex course knowledge base.

## Rules

- Do not edit `raw/`.
- Write generated course pages under `wiki/`.
- Update `wiki/log.md` after maintenance.
- Mark uncertain product facts in `wiki/review_queue.md`.

## Verification

- Check links and source citations before final output.
```

## 常见坑

- 把一次性任务写进长期规则。
- 规则太长，真正重要的约束被淹没。
- 写了验证要求但没有可执行标准。
- 把敏感凭据或私有信息写进规则文件。
