---
title: AI 总地图
type: map
status: active
created: 2026-06-20
updated: 2026-06-20
tags:
  - type/地图
---

# AI 总地图

## 核心主题

- [[LLM 知识地图]]
- [[Codex 知识地图]]
- [[Agent 知识地图]]
- [[MCP 知识地图]]
- [[提示词工程知识地图]]
- [[AI 编程工具知识地图]]
- [[RAG 知识地图]]
- [[AI 教育知识地图]]
- [[课程创作地图]]

## 最近新增

```dataview
LIST
FROM "03_Notes"
SORT created DESC
LIMIT 20
```

## 可复用素材

```dataview
TABLE type, topics, updated
FROM "03_Notes"
WHERE contains(tags, "status/可复用")
SORT updated DESC
```

## 待处理资料

```dataview
TABLE source, next_action
FROM "00_Inbox"
SORT created DESC
```

## 正在创作

```dataview
TABLE status, updated
FROM "05_Outputs"
SORT updated DESC
```
