---
type: "workflow"
tags: ["codex-course", "workflow", "ingest"]
summary: "把 raw 资料导入课程知识层的标准流程。"
trigger: "用户要求处理 raw 新资料，或 raw 中新增资料。"
inputs: ["raw/xxx.md", "wiki/index.md", "wiki/source_inventory.md"]
outputs: ["wiki/sources/...", "updated concept/feature/lesson/demo pages", "wiki/log.md"]
sources:
  - "llm-wiki.md"
  - "wiki/course_schema.md"
updated: "2026-06-20"
---

# 工作流：Ingest

## 触发场景

- 新增资料进入 `raw/`。
- 用户要求处理某份 `raw`。
- 课程中需要补充某个主题的来源依据。

## 步骤

1. 读取目标 `raw` 文件，不修改它。
2. 判断资料类型：官方、教程、视频文档、社区经验、占位。
3. 创建或更新 `wiki/sources/` 来源摘要页。
4. 抽取概念，更新 `wiki/concepts/`。
5. 抽取功能，更新 `wiki/features/`。
6. 抽取可操作流程，更新 `wiki/workflows/`。
7. 判断能否进入课时，更新 `wiki/lessons/` 和 `wiki/demos/`。
8. 更新 `wiki/source_inventory.md` 和 `wiki/index.md`。
9. 将不确定信息写入 `wiki/review_queue.md`。
10. 追加 `wiki/log.md`。

## 验收标准

- 新内容至少有一个来源链接。
- 不确定事实被标记，而不是伪装成结论。
- 课程价值字段明确：能讲什么、能演什么、能练什么。
- 至少一个 Obsidian 双链指向其它页面。

## 日志格式

```markdown
## [YYYY-MM-DD] ingest | raw/xxx.md -> wiki/sources/xxx.md

- Updated:
- Review queue:
```
