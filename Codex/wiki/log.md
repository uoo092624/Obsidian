---
type: "log"
tags: ["codex-course", "log"]
summary: "Codex 课程知识库的追加式维护日志。"
sources: []
updated: "2026-06-20"
---

# 维护日志

## [2026-06-20] diagnose | 初始化第一阶段诊断

- 新增 [[00_第一阶段_课程知识库诊断]]。
- 读取 `llm-wiki.md`、`README.md`、`TheSchema.md` 和 `raw/` 清单。
- 判断当前资料已具备 Codex 入门到进阶课程的第一版素材基础。

## [2026-06-20] scaffold | 定制课程型 wiki 骨架

- 新增项目级 `AGENTS.md`，规定 `raw/` 只读、`wiki/` 课程化维护、事实分级和输出要求。
- 新增 [[course_schema]]、[[course_map]]、[[source_inventory]]、[[review_queue]]。
- 新增模板、工作流、功能页、课时页、演示脚本、资产索引和输出说明。

## [2026-06-20] output | 生成第一版课堂交付物

- 新增 `wiki/outputs/codex_course_outline.md`。
- 新增 `wiki/outputs/codex_lesson_handout.md` 与 `wiki/outputs/codex_lesson_handout.pdf`。
- 新增 `wiki/outputs/codex_demo_scripts.md`。
- 新增 `wiki/outputs/codex_exercise_pack.md`。
- 新增 `wiki/outputs/codex_asset_brief.md`。
- 新增 `wiki/outputs/codex_marp_deck.md`。
- 新增 `wiki/outputs/codex_course_deck.pptx`。
- PPTX 几何 QA：129 个文本框，0 个越界/重叠问题。
- PDF 检查：4 页，已渲染为 PNG，文本抽取正常。
