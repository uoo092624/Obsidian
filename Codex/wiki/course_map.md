---
type: "course_map"
tags: ["codex-course", "curriculum"]
summary: "Codex 课程的课时地图、教学目标和资料映射。"
sources:
  - "raw/"
  - "wiki/00_第一阶段_课程知识库诊断.md"
updated: "2026-06-20"
---

# Codex 课程地图

## 课程定位

这是一套面向中文课堂演示的 Codex 课程。课程目标不是只介绍按钮，而是训练学员理解 Codex 的工作方式、安全边界、可复用规则和扩展能力，并能把 Codex 用进真实项目与知识工作流。

## 建议课程序列

| 课时 | 主题 | 核心问题 | 课堂产物 | 主要来源 |
|---|---|---|---|---|
| L00 | 课程总览 | Codex 课程学什么，最终能做什么 | 课程路线图 | `README.md`、`llm-wiki.md` |
| L01 | Codex 入口地图 | App、CLI、IDE、Cloud、手机端分别适合什么 | 入口对比表 | `raw/03`、`raw/04`、`raw/12`、`raw/14`、`raw/17` |
| L02 | 完成第一个任务 | 如何让 Codex 从读文件到交付结果 | 现场 demo + 练习 | `raw/06`、`raw/13` |
| L03 | 权限、沙盒与审批 | Codex 为什么会停下来问你 | 安全护栏图 + 配置表 | `raw/08`、`raw/16` |
| L04 | AGENTS.md 项目规则 | 如何让 Codex 持久理解项目约定 | 项目规则模板 | `raw/15` |
| L05 | Skills 与 Plugins | 如何沉淀可复用能力 | Skill/Plugin 对比表 | `raw/09`、`raw/Codex全解【视频文档】.md` |
| L06 | 自动化任务 | 如何把重复检查和跟进变成自动化 | 自动化任务 prompt | `raw/10` |
| L07 | 本地、云端、移动端协同 | 长任务、多设备、云任务怎么配合 | 模式选择表 | `raw/04`、`raw/07`、`raw/17` |
| L08 | CLI 与 IDE 实战 | 开发者如何在仓库里工作 | CLI/VS Code 工作流 | `raw/12`、`raw/13`、`raw/14` |
| L09 | 进阶扩展 | API、MCP、Hooks、Browser、Computer Use | 进阶能力地图 | `raw/05`、`raw/18`、`raw/Codex全解【视频文档】.md` |
| L10 | 排障与复盘 | 任务跑偏、权限卡住、结果不准怎么办 | 排障清单 | `raw/19` |

## 第一版课程主线

第一版建议先做 4 节课：

1. L01：Codex 入口地图。
2. L02：完成第一个任务。
3. L03：权限、沙盒与审批。
4. L04：AGENTS.md 项目规则。

这四节能形成完整闭环：知道入口，能跑任务，懂安全，能让项目规则持久化。

## 每节课必须包含

- 学习目标
- 适合人群
- 课前准备
- 核心概念
- 现场演示
- 学员练习
- 验收标准
- 常见坑
- 来源链接
- 可生成输出物

## 后续输出目标

- `wiki/outputs/codex_course_outline.md`：课程大纲。
- `wiki/outputs/codex_lesson_handouts/`：每节课讲义。
- `wiki/outputs/codex_marp_deck.md`：可转 PPT 的 Marp 幻灯片。
- `wiki/outputs/codex_demo_scripts.md`：集中演示脚本。
