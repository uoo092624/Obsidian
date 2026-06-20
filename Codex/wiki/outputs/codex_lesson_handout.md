---
type: "output"
tags: ["codex-course", "handout"]
summary: "Codex 课程第一版讲义。"
format: "markdown|pdf"
audience: "student"
sources:
  - "wiki/lessons/L00_课程总览.md"
  - "wiki/lessons/L01_Codex入口地图.md"
  - "wiki/lessons/L02_完成第一个任务.md"
  - "wiki/lessons/L03_权限沙盒与审批.md"
  - "wiki/lessons/L04_AGENTS项目规则.md"
updated: "2026-06-20"
verification_status: "needs-review"
---

# Codex 入门到可控实战讲义

## L00 课程总览

Codex 课程的目标，是让你从“会问 AI”走到“会让 Codex 在项目里安全做事”。本课程使用三层知识库方法：

- `raw/`：原始资料，只读。
- `wiki/`：整理后的课程知识层。
- `AGENTS.md`：长期规则，让 Codex 知道这个项目怎么维护。

学完第一版课程，你应该能完成四件事：

1. 选择合适的 Codex 入口。
2. 下达一个小而清晰的任务。
3. 判断权限请求是否应该放行。
4. 写一份最小可用项目规则。

## L01 Codex 入口地图

Codex 有多个入口，不同入口适合不同任务。

| 入口 | 适合任务 | 注意 |
|---|---|---|
| Desktop App | 本地项目、课堂演示、互动式任务 | 适合新手看过程 |
| CLI | 终端、脚本、仓库任务 | 更适合开发者 |
| IDE / VS Code | 解释代码、局部修改 | 贴近编辑器上下文 |
| Cloud | 远程仓库、长任务、PR | 依赖 GitHub 授权 |
| Mobile | 查看、回复、审批桌面任务 | 任务仍在电脑上跑 |

课堂记忆句：先按任务选入口，不要把所有入口当成互相替代。

## L02 完成第一个任务

第一个任务要低风险、范围小、结果可验证。一个好任务通常包含：

- 要改什么。
- 不要改什么。
- 输出什么结果。
- 怎么验证。

示例 Prompt：

```text
请先读取当前工作目录，说明你看到了哪些文件。然后只修改 demo.md：把它整理成一份面向新手的 Codex 入门清单，包含 5 个步骤和 3 个注意事项。修改后请检查 Markdown 格式，并汇报你改了什么。
```

验收时看四件事：

- Codex 是否先理解了上下文。
- 改动范围是否符合要求。
- 是否给出验证或检查结果。
- 你是否能看懂最终 diff。

## L03 权限、沙盒与审批

Codex 的安全护栏可以分成三层：

- 沙盒：限制 Codex 能碰哪里。
- 审批：越界时暂停，让人判断。
- 规则：提前告诉 Codex 哪些事不能做。

判断是否放行审批时，问三句话：

1. 这个动作对任务必要吗？
2. 这个动作的风险是什么？
3. 有没有更安全的替代方案？

默认建议：新手从默认权限或工作区写入开始，不把完全访问当成默认配置。

## L04 AGENTS.md 项目规则

`AGENTS.md` 适合写项目长期规则，不适合写一次性任务。

最小模板：

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

## 课后任务

1. 选一个你自己的小项目。
2. 写一个只改一个文件的 Codex 任务。
3. 记录 Codex 做了什么、你如何验证。
4. 为这个项目写一份最小 `AGENTS.md`。
