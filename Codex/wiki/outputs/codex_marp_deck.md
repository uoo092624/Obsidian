---
marp: true
theme: default
paginate: true
size: 16:9
---

# Codex 入门到可控实战

从入口选择、第一任务、安全边界到项目规则

---

# 课程目标

- 选对 Codex 入口
- 下达可验证的小任务
- 判断权限审批
- 写最小 AGENTS.md

---

# Codex 不只是一个 App

| 入口 | 适合 |
|---|---|
| Desktop App | 本地项目、课堂演示 |
| CLI | 终端和脚本 |
| IDE | 贴近代码编辑 |
| Cloud | 远程仓库长任务 |
| Mobile | 查看、回复、审批 |

---

# 第一个任务要小

好任务包含：

- 文件范围
- 目标结果
- 不要做什么
- 验证标准

---

# 示例 Prompt

```text
请先读取当前工作目录，说明你看到了哪些文件。
然后只修改 demo.md：把它整理成一份面向新手的 Codex 入门清单，
包含 5 个步骤和 3 个注意事项。
修改后请检查 Markdown 格式，并汇报你改了什么。
```

---

# 安全护栏

| 层级 | 作用 |
|---|---|
| 沙盒 | 限制能碰哪里 |
| 审批 | 越界时暂停确认 |
| 规则 | 提前写清行为边界 |

---

# 审批三问

1. 这个动作对任务必要吗？
2. 这个动作的风险是什么？
3. 有没有更安全的替代方案？

---

# AGENTS.md 做什么

- 写项目长期规则
- 约束目录和输出位置
- 规定验证要求
- 不写一次性聊天任务

---

# 最小 AGENTS.md

```markdown
# AGENTS.md

- Do not edit raw/.
- Write generated course pages under wiki/.
- Update wiki/log.md after maintenance.
- Mark uncertain product facts in wiki/review_queue.md.
```

---

# 课后练习

- 为 5 个任务选择 Codex 入口
- 改写一个模糊 Prompt
- 判断 5 个审批场景
- 写一份最小 AGENTS.md

---

# 下一步

把课程继续扩展到：

- Skills / Plugins / MCP
- 自动化任务
- CLI 与 IDE 实战
- 排障与复盘
