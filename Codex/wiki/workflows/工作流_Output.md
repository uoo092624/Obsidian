---
type: "workflow"
tags: ["codex-course", "workflow", "output"]
summary: "从 wiki 生成讲义、PPT、PDF、演示脚本和练习包的标准流程。"
trigger: "用户要求生成课程交付物。"
inputs: ["wiki/lessons", "wiki/demos", "wiki/features", "wiki/assets"]
outputs: ["wiki/outputs/..."]
sources:
  - "wiki/course_schema.md"
updated: "2026-06-20"
---

# 工作流：Output

## 输出类型

- 讲义：适合学生课后复习。
- PPT/Marp：适合课堂投屏。
- 演示脚本：适合老师现场操作。
- 练习包：适合学生动手。
- 图片说明表：适合制作课件。
- PDF-ready Markdown：适合导出。

## 步骤

1. 明确输出物目标、受众和时长。
2. 读取相关 lesson、demo、feature、concept、asset。
3. 检查 `review_queue` 中是否有阻塞项。
4. 生成草稿到 `wiki/outputs/`。
5. 标记 `verification_status: "needs-review"`。
6. 如果要转 PDF/PPT，再进行格式化与视觉检查。

## 发布前检查

- 每个事实有来源或已标注为经验。
- 所有截图路径可用。
- 演示步骤能在课堂时间内完成。
- 练习有验收标准。
- 没有把危险权限当默认推荐。
