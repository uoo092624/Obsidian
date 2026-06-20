---
type: "output_index"
tags: ["codex-course", "course-pack"]
summary: "Codex 课堂交付物索引，汇总 PPT、PDF、讲义、演示脚本、练习包和图片说明。"
format: "markdown"
audience: "teacher"
sources:
  - "wiki/course_map.md"
  - "wiki/outputs/codex_course_outline.md"
updated: "2026-06-20"
verification_status: "needs-review"
---

# Codex 课堂交付物索引

## 可直接使用的成品

| 文件 | 用途 | 状态 |
|---|---|---|
| `wiki/outputs/codex_course_deck.pptx` | 课堂投屏 PPT | 已生成，12 页 |
| `wiki/outputs/codex_lesson_handout.pdf` | 学员讲义 PDF | 已生成，4 页 |
| `wiki/outputs/codex_lesson_handout.md` | 可编辑讲义源文件 | 已生成 |
| `wiki/outputs/codex_marp_deck.md` | Marp 幻灯片源文件 | 已生成 |
| `wiki/outputs/codex_demo_scripts.md` | 教师演示脚本 | 已生成 |
| `wiki/outputs/codex_exercise_pack.md` | 学员练习包 | 已生成 |
| `wiki/outputs/codex_asset_brief.md` | 图片使用说明 | 已生成 |
| `wiki/outputs/codex_course_outline.md` | 课程大纲 | 已生成 |

## 预览与验证文件

| 文件夹 | 用途 |
|---|---|
| `wiki/outputs/previews/` | PPTX 每页 PNG 预览和 montage |
| `wiki/outputs/pdf_previews/` | PDF 渲染后的 PNG 页面 |

## 使用建议

1. 上课投屏用 `codex_course_deck.pptx`。
2. 课前发给学员用 `codex_lesson_handout.pdf`。
3. 讲师备课看 `codex_demo_scripts.md` 和 `codex_asset_brief.md`。
4. 课堂练习用 `codex_exercise_pack.md`。
5. 后续改内容，优先改 Markdown 源文件，再重新导出 PPT/PDF。

## 当前限制

- 产品入口、套餐、模型、插件和权限界面仍需正式授课前核验。
- 这是一版可用课堂包，重点覆盖 L00-L04；L05-L10 尚未展开成完整讲义和 PPT。