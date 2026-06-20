---
type: "workflow"
tags: ["codex-course", "workflow", "query"]
summary: "基于 wiki 回答课程问题，并把高价值回答沉淀回知识库。"
trigger: "用户询问课程内容、对比、演示设计或输出物。"
inputs: ["wiki/index.md", "relevant wiki pages"]
outputs: ["answer", "optional new wiki page", "wiki/log.md"]
sources:
  - "llm-wiki.md"
  - "wiki/course_schema.md"
updated: "2026-06-20"
---

# 工作流：Query

## 步骤

1. 先读 `wiki/index.md`，定位相关页面。
2. 读取相关 source、concept、feature、lesson、demo 页面。
3. 判断问题是解释、对比、课程设计、演示设计还是输出物生成。
4. 给出回答，并标明来源。
5. 如果回答具有复用价值，建议或直接写回：
   - 比较分析 -> `wiki/comparisons/`
   - 课程方案 -> `wiki/lessons/`
   - 演示步骤 -> `wiki/demos/`
   - 讲义/PPT -> `wiki/outputs/`
6. 更新 `wiki/log.md`。

## 回答标准

- 先给结论，再给依据。
- 课堂问题要落到“怎么讲、怎么演、怎么练”。
- 产品事实不确定时，标注待核验。

## 可写回判断

值得写回的回答通常满足一条：

- 可以复用到课堂。
- 总结了多个来源。
- 形成了对比表或决策规则。
- 解决了一个常见坑。
