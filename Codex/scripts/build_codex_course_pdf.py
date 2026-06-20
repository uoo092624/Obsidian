from __future__ import annotations

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path("D:/Obsidian/Codex")
OUT = ROOT / "wiki" / "outputs" / "codex_lesson_handout.pdf"
FONT_REGULAR = "C:/Windows/Fonts/NotoSansSC-VF.ttf"
FONT_BOLD = "C:/Windows/Fonts/NotoSansSC-VF.ttf"


def register_fonts() -> tuple[str, str]:
    regular = "NotoSansSC"
    bold = "NotoSansSC-Bold"
    pdfmetrics.registerFont(TTFont(regular, FONT_REGULAR))
    pdfmetrics.registerFont(TTFont(bold, FONT_BOLD))
    return regular, bold


def p(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(text.replace("\n", "<br/>"), style)


def bullet(text: str, style: ParagraphStyle) -> Paragraph:
    return Paragraph(f"• {text}", style)


def build() -> None:
    regular, bold = register_fonts()
    styles = getSampleStyleSheet()
    title = ParagraphStyle(
        "TitleCN",
        parent=styles["Title"],
        fontName=bold,
        fontSize=26,
        leading=34,
        textColor=colors.HexColor("#101828"),
        alignment=TA_CENTER,
        spaceAfter=12,
    )
    subtitle = ParagraphStyle(
        "SubtitleCN",
        parent=styles["Normal"],
        fontName=regular,
        fontSize=12,
        leading=18,
        textColor=colors.HexColor("#475467"),
        alignment=TA_CENTER,
        spaceAfter=24,
    )
    h1 = ParagraphStyle(
        "H1CN",
        parent=styles["Heading1"],
        fontName=bold,
        fontSize=18,
        leading=24,
        textColor=colors.HexColor("#1D4ED8"),
        spaceBefore=14,
        spaceAfter=8,
    )
    h2 = ParagraphStyle(
        "H2CN",
        parent=styles["Heading2"],
        fontName=bold,
        fontSize=13,
        leading=18,
        textColor=colors.HexColor("#101828"),
        spaceBefore=10,
        spaceAfter=6,
    )
    body = ParagraphStyle(
        "BodyCN",
        parent=styles["BodyText"],
        fontName=regular,
        fontSize=10.5,
        leading=16,
        textColor=colors.HexColor("#344054"),
        alignment=TA_LEFT,
        spaceAfter=5,
    )
    mono = ParagraphStyle(
        "MonoCN",
        parent=body,
        fontName=regular,
        fontSize=9.2,
        leading=14,
        leftIndent=8,
        backColor=colors.HexColor("#F2F4F7"),
        borderColor=colors.HexColor("#D0D5DD"),
        borderWidth=0.5,
        borderPadding=6,
    )

    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        rightMargin=18 * mm,
        leftMargin=18 * mm,
        topMargin=16 * mm,
        bottomMargin=16 * mm,
        title="Codex 入门到可控实战讲义",
        author="Codex",
    )

    story = []
    story.append(p("Codex 入门到可控实战讲义", title))
    story.append(p("第一版课堂包：入口选择、第一任务、安全边界、AGENTS.md", subtitle))
    story.append(p("课程定位", h1))
    story.append(p("这套课程面向中文课堂演示，目标不是介绍每个按钮，而是训练学员理解 Codex 的工作方式、权限边界、项目规则和可复用工作流。", body))
    story.append(p("学完第一版课程后，学员应该能选择合适入口、下达小而清晰的任务、判断审批请求，并写出最小可用 AGENTS.md。", body))

    story.append(p("第一版课程地图", h1))
    course_rows = [
        ["课时", "标题", "核心目标"],
        ["L00", "课程总览", "理解 raw/wiki/AGENTS.md 三层结构"],
        ["L01", "Codex 入口地图", "按任务选择 App、CLI、IDE、Cloud、Mobile"],
        ["L02", "完成第一个任务", "让 Codex 完成小范围可验证任务"],
        ["L03", "权限、沙盒与审批", "用安全三问判断是否放行"],
        ["L04", "AGENTS.md 项目规则", "把长期项目约束写进规则文件"],
    ]
    table = Table(course_rows, colWidths=[24 * mm, 45 * mm, 100 * mm])
    table.setStyle(
        TableStyle(
            [
                ("FONTNAME", (0, 0), (-1, 0), bold),
                ("FONTNAME", (0, 1), (-1, -1), regular),
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#E0EAFF")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.HexColor("#1D4ED8")),
                ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#D0D5DD")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("FONTSIZE", (0, 0), (-1, -1), 9.5),
                ("LEADING", (0, 0), (-1, -1), 13),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
                ("TOPPADDING", (0, 0), (-1, -1), 7),
            ]
        )
    )
    story.append(table)

    story.append(PageBreak())
    story.append(p("L01 Codex 入口地图", h1))
    story.append(p("Codex 有多个入口，不同入口适合不同任务。课堂上先讲任务类型，再讲入口选择。", body))
    for item in [
        "Desktop App：适合本地项目、课堂演示、互动式任务。",
        "CLI：适合终端、脚本和仓库任务。",
        "IDE / VS Code：适合解释代码、局部修改和编辑器上下文。",
        "Cloud：适合远程仓库、长任务和 PR 工作流。",
        "Mobile：适合查看、回复和审批桌面任务，任务仍在电脑上跑。",
    ]:
        story.append(bullet(item, body))

    story.append(p("L02 完成第一个任务", h1))
    story.append(p("第一个任务要小、清楚、可验证。不要一上来让 Codex 重构整个项目。", body))
    for item in ["文件范围", "目标结果", "不要做什么", "验证标准"]:
        story.append(bullet(item, body))
    story.append(p("示例 Prompt", h2))
    story.append(p("请先读取当前工作目录，说明你看到了哪些文件。然后只修改 demo.md：把它整理成一份面向新手的 Codex 入门清单，包含 5 个步骤和 3 个注意事项。修改后请检查 Markdown 格式，并汇报你改了什么。", mono))

    story.append(PageBreak())
    story.append(p("L03 权限、沙盒与审批", h1))
    story.append(p("Codex 的安全护栏可以理解为三层：沙盒限制范围，审批负责越界确认，规则提前写清边界。", body))
    story.append(p("审批判断三问", h2))
    for item in ["这个动作对任务必要吗？", "这个动作的风险是什么？", "有没有更安全的替代方案？"]:
        story.append(bullet(item, body))
    story.append(p("默认建议：新手从默认权限或工作区写入开始，不把完全访问当成默认配置。", body))

    story.append(p("L04 AGENTS.md 项目规则", h1))
    story.append(p("AGENTS.md 适合写项目长期规则，不适合写一次性任务。", body))
    story.append(p("最小模板", h2))
    story.append(p("# AGENTS.md\n\n## Rules\n- Do not edit raw/.\n- Write generated course pages under wiki/.\n- Update wiki/log.md after maintenance.\n- Mark uncertain product facts in wiki/review_queue.md.", mono))

    story.append(PageBreak())
    story.append(p("课堂练习", h1))
    story.append(p("练习 1：为 5 个任务选择 Codex 入口，并说明原因。", body))
    story.append(p("练习 2：把“帮我整理一下这个项目”改写成可执行的 Codex Prompt。", body))
    story.append(p("练习 3：判断 5 个审批场景是否应放行。", body))
    story.append(p("练习 4：为一个示例项目写最小 AGENTS.md。", body))

    story.append(p("来源与核验提醒", h1))
    for item in [
        "主要素材来自 raw/03、raw/06、raw/08、raw/13、raw/15、raw/16。",
        "产品入口、套餐、模型、插件和权限界面可能变化，正式授课前要核验。",
        "第三方 API 和社区工具作为经验补充，不进入官方主线。",
    ]:
        story.append(bullet(item, body))

    def footer(canvas, doc_obj):
        canvas.saveState()
        canvas.setFont(regular, 8)
        canvas.setFillColor(colors.HexColor("#98A2B3"))
        canvas.drawString(18 * mm, 9 * mm, "Codex 课程讲义 v1")
        canvas.drawRightString(A4[0] - 18 * mm, 9 * mm, f"Page {doc_obj.page}")
        canvas.restoreState()

    doc.build(story, onFirstPage=footer, onLaterPages=footer)


if __name__ == "__main__":
    build()
    print(OUT)
