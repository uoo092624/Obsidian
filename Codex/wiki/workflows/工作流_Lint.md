---
type: "workflow"
tags: ["codex-course", "workflow", "lint"]
summary: "检查课程知识库健康度的标准流程。"
trigger: "用户要求健康检查，或完成一批 Ingest 后。"
inputs: ["wiki/"]
outputs: ["lint report", "wiki/review_queue.md", "wiki/log.md"]
sources:
  - "llm-wiki.md"
  - "wiki/course_schema.md"
updated: "2026-06-20"
---

# 工作流：Lint

## 检查项

- 页面是否有 frontmatter。
- 页面是否有来源。
- `needs-verification` 是否进入了 `review_queue`。
- lesson 是否有 demo 或 exercise。
- demo 是否有失败恢复路径。
- 图片路径是否存在。
- 是否有孤立页面。
- 是否有重复概念。
- 是否有官方事实和社区经验混写的问题。
- 是否有过时截图、入口、套餐、模型、权限字段。

## 输出格式

```markdown
# Lint Report YYYY-MM-DD

## Critical

## Major

## Minor

## Suggested Next Actions
```

## 处理原则

- Lint 默认只报告，不大规模改写。
- 高置信度的小修可以直接做，例如补索引链接。
- 涉及事实冲突、课程方向、删除合并时，先进入 `review_queue`。
