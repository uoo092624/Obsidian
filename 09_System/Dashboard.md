---
title: Knowledge Dashboard
type: dashboard
status: active
created: 2026-06-20
updated: 2026-06-20
tags:
  - type/系统
---

# Knowledge Dashboard

## 快速入口

- [[AI 总地图]]
- [[Codex 知识地图]]
- [[课程创作地图]]
- [[Tag-Index]]
- [[Processing-SOP]]
- [[Migration-Plan]]

## Inbox

```dataview
TABLE created, next_action
FROM "00_Inbox"
SORT created DESC
LIMIT 20
```

## 可复用知识卡

```dataview
TABLE type, topics, updated
FROM "03_Notes"
WHERE contains(tags, "status/可复用")
SORT updated DESC
LIMIT 20
```

## 课程素材

```dataview
TABLE type, topics, updated
WHERE contains(tags, "use/课程")
SORT updated DESC
LIMIT 20
```

## 最近输出

```dataview
TABLE status, updated
FROM "05_Outputs"
SORT updated DESC
LIMIT 10
```
