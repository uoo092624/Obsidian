import fs from "node:fs/promises";
import path from "node:path";
import { Presentation, PresentationFile } from "file:///C:/Users/admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@oai/artifact-tool/dist/artifact_tool.mjs";

const ROOT = "D:/Obsidian/Codex";
const OUT_DIR = `${ROOT}/wiki/outputs`;
const PREVIEW_DIR = `${ROOT}/wiki/outputs/previews`;
const FINAL_PPTX = `${OUT_DIR}/codex_course_deck.pptx`;

const deck = Presentation.create({
  slideSize: { width: 1280, height: 720 },
});

const colors = {
  ink: "#101828",
  muted: "#475467",
  light: "#F8FAFC",
  line: "#D0D5DD",
  blue: "#2563EB",
  blueDark: "#1D4ED8",
  green: "#16A34A",
  amber: "#F59E0B",
  red: "#DC2626",
  violet: "#7C3AED",
  white: "#FFFFFF",
};

async function writeBlob(filePath, blob) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, Buffer.from(await blob.arrayBuffer()));
}

async function readImageBlob(imagePath) {
  const bytes = await fs.readFile(imagePath);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function addText(slide, text, position, style = {}) {
  const shape = slide.shapes.add({
    geometry: "textbox",
    position,
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  shape.text = text;
  shape.text.style = {
    fontSize: style.fontSize ?? 24,
    bold: style.bold ?? false,
    color: style.color ?? colors.ink,
    alignment: style.alignment ?? "left",
  };
  return shape;
}

function addPill(slide, text, left, top, width, fill) {
  const box = slide.shapes.add({
    geometry: "roundRect",
    position: { left, top, width, height: 42 },
    fill,
    line: { style: "solid", fill, width: 1 },
    borderRadius: "rounded-xl",
  });
  box.text = text;
  box.text.style = {
    fontSize: 18,
    bold: true,
    color: colors.white,
    alignment: "center",
  };
}

function addCard(slide, title, body, left, top, width, height, accent = colors.blue) {
  const card = slide.shapes.add({
    geometry: "roundRect",
    position: { left, top, width, height },
    fill: colors.white,
    line: { style: "solid", fill: colors.line, width: 1 },
    borderRadius: "rounded-xl",
  });
  slide.shapes.add({
    geometry: "rect",
    position: { left, top, width: 8, height },
    fill: accent,
    line: { style: "solid", fill: accent, width: 0 },
  });
  addText(slide, title, { left: left + 24, top: top + 18, width: width - 44, height: 34 }, {
    fontSize: 24,
    bold: true,
  });
  addText(slide, body, { left: left + 24, top: top + 64, width: width - 44, height: height - 82 }, {
    fontSize: 17,
    color: colors.muted,
  });
  return card;
}

function titleSlide() {
  const slide = deck.slides.add();
  slide.background.fill = "#0B1220";
  addText(slide, "Codex 入门到可控实战", { left: 82, top: 104, width: 760, height: 82 }, {
    fontSize: 58,
    bold: true,
    color: colors.white,
  });
  addText(slide, "从入口选择、第一任务、安全边界到项目规则", { left: 86, top: 206, width: 720, height: 46 }, {
    fontSize: 26,
    color: "#CBD5E1",
  });
  addPill(slide, "课堂演示包 v1", 88, 304, 190, colors.blue);
  addPill(slide, "讲义 + PPT + PDF + 练习", 300, 304, 290, colors.violet);
  addText(slide, "基于 raw/ 资料与课程型 wiki 生成", { left: 88, top: 606, width: 620, height: 34 }, {
    fontSize: 18,
    color: "#94A3B8",
  });
  slide.shapes.add({
    geometry: "roundRect",
    position: { left: 840, top: 92, width: 330, height: 500 },
    fill: "#172033",
    line: { style: "solid", fill: "#334155", width: 1 },
    borderRadius: "rounded-2xl",
  });
  addText(slide, "课程主线", { left: 890, top: 142, width: 250, height: 40 }, {
    fontSize: 30,
    bold: true,
    color: colors.white,
  });
  ["入口地图", "第一个任务", "安全护栏", "AGENTS.md"].forEach((item, i) => {
    addText(slide, `${i + 1}. ${item}`, { left: 900, top: 218 + i * 70, width: 230, height: 34 }, {
      fontSize: 24,
      color: "#E2E8F0",
    });
  });
}

function simpleHeader(slide, eyebrow, title, subtitle) {
  slide.background.fill = colors.light;
  addText(slide, eyebrow, { left: 70, top: 42, width: 460, height: 26 }, {
    fontSize: 14,
    bold: true,
    color: colors.blueDark,
  });
  addText(slide, title, { left: 70, top: 78, width: 930, height: 62 }, {
    fontSize: 42,
    bold: true,
  });
  if (subtitle) {
    addText(slide, subtitle, { left: 72, top: 142, width: 930, height: 36 }, {
      fontSize: 20,
      color: colors.muted,
    });
  }
}

function whySlide() {
  const slide = deck.slides.add();
  simpleHeader(slide, "L00 / METHOD", "为什么不是一堆资料摘要", "课程知识库要让知识复利，而不是每次重新推导。");
  addCard(slide, "Raw", "原始资料只读，是事实与素材来源。", 72, 230, 330, 210, colors.blue);
  addCard(slide, "Wiki", "Codex 维护结构化知识层，持续更新链接、概念和课时。", 474, 230, 330, 210, colors.green);
  addCard(slide, "Outputs", "讲义、PPT、PDF、演示脚本、练习包从 wiki 生成。", 876, 230, 330, 210, colors.violet);
  addText(slide, "课堂记忆句：不要把 Codex 课做成按钮说明书，要做成能反复更新的教学系统。", { left: 96, top: 535, width: 1060, height: 42 }, {
    fontSize: 26,
    bold: true,
    color: colors.ink,
    alignment: "center",
  });
}

function courseMapSlide() {
  const slide = deck.slides.add();
  simpleHeader(slide, "COURSE MAP", "第一版课程路径", "先建立可控闭环，再扩展到 Skills、自动化和云端协作。");
  const items = [
    ["L01", "入口地图", "按任务选 App / CLI / IDE / Cloud / Mobile"],
    ["L02", "第一个任务", "小范围、可验证、能检查结果"],
    ["L03", "安全护栏", "沙盒、审批、Auto-review、风险判断"],
    ["L04", "项目规则", "用 AGENTS.md 固化长期约定"],
  ];
  items.forEach(([no, title, body], i) => {
    const top = 220 + i * 92;
    addPill(slide, no, 88, top, 86, [colors.blue, colors.green, colors.amber, colors.violet][i]);
    addText(slide, title, { left: 210, top: top - 2, width: 250, height: 34 }, {
      fontSize: 26,
      bold: true,
    });
    addText(slide, body, { left: 470, top, width: 650, height: 34 }, {
      fontSize: 22,
      color: colors.muted,
    });
  });
}

function surfaceSlide() {
  const slide = deck.slides.add();
  simpleHeader(slide, "L01 / SURFACES", "Codex 不只是一个 App", "入口选择取决于任务，而不是个人偏好。");
  const cards = [
    ["Desktop App", "本地项目、课堂演示、互动式任务", colors.blue],
    ["CLI", "终端、脚本、仓库任务", colors.green],
    ["IDE", "解释代码、局部修改、编辑器上下文", colors.violet],
    ["Cloud", "远程仓库、长任务、PR 工作流", colors.amber],
    ["Mobile", "查看、回复、审批桌面任务", colors.red],
  ];
  cards.forEach(([title, body, accent], i) => {
    const left = 72 + (i % 3) * 382;
    const top = i < 3 ? 220 : 420;
    addCard(slide, title, body, left, top, 330, 140, accent);
  });
}

function taskSlide() {
  const slide = deck.slides.add();
  simpleHeader(slide, "L02 / FIRST TASK", "第一个任务要小、清楚、可验证", "第一课不要追求酷，先追求可控。");
  addCard(slide, "好任务四要素", "1. 文件范围\n2. 目标结果\n3. 不要做什么\n4. 验证标准", 72, 220, 380, 300, colors.green);
  addText(slide, "示例 Prompt", { left: 520, top: 220, width: 300, height: 36 }, {
    fontSize: 28,
    bold: true,
  });
  const promptBox = slide.shapes.add({
    geometry: "roundRect",
    position: { left: 520, top: 268, width: 660, height: 252 },
    fill: "#111827",
    line: { style: "solid", fill: "#111827", width: 1 },
    borderRadius: "rounded-xl",
  });
  promptBox.text = "请先读取当前工作目录，说明你看到了哪些文件。\n然后只修改 demo.md：整理成一份新手 Codex 入门清单，包含 5 个步骤和 3 个注意事项。\n修改后请检查 Markdown 格式，并汇报你改了什么。";
  promptBox.text.style = { fontSize: 19, color: "#E5E7EB" };
}

function loopSlide() {
  const slide = deck.slides.add();
  simpleHeader(slide, "WORKFLOW", "Codex 的基本执行循环", "让学员看懂过程，才知道如何复核。");
  const steps = [
    ["1", "读上下文"],
    ["2", "计划小步"],
    ["3", "编辑文件"],
    ["4", "运行验证"],
    ["5", "汇报结果"],
  ];
  steps.forEach(([num, label], i) => {
    const left = 86 + i * 230;
    slide.shapes.add({
      geometry: "ellipse",
      position: { left, top: 282, width: 96, height: 96 },
      fill: [colors.blue, colors.green, colors.violet, colors.amber, colors.red][i],
      line: { style: "solid", fill: "none", width: 0 },
    });
    addText(slide, num, { left, top: 302, width: 96, height: 40 }, {
      fontSize: 34,
      bold: true,
      color: colors.white,
      alignment: "center",
    });
    addText(slide, label, { left: left - 46, top: 408, width: 190, height: 34 }, {
      fontSize: 24,
      bold: true,
      alignment: "center",
    });
  });
  addText(slide, "验收时看：改动范围是否一致、验证是否真实、最终说明是否能复现。", { left: 120, top: 554, width: 1040, height: 38 }, {
    fontSize: 26,
    bold: true,
    color: colors.ink,
    alignment: "center",
  });
}

async function securitySlide() {
  const slide = deck.slides.add();
  simpleHeader(slide, "L03 / SECURITY", "安全护栏：沙盒、审批、规则", "Codex 停下来问你，是在保护边界。");
  addCard(slide, "沙盒", "限制 Codex 能碰哪里。", 72, 220, 310, 170, colors.blue);
  addCard(slide, "审批", "越界时暂停，让人判断。", 472, 220, 310, 170, colors.amber);
  addCard(slide, "规则", "提前写清哪些事不能做。", 872, 220, 310, 170, colors.violet);
  const image = `${ROOT}/attachments/codex-safety-layers.svg`;
  try {
    slide.images.add({
      blob: await readImageBlob(image),
      contentType: "image/svg+xml",
      alt: "Codex safety layers",
      fit: "contain",
      position: { left: 420, top: 438, width: 440, height: 160 },
    });
  } catch {
    addText(slide, "Safety layers image unavailable", { left: 420, top: 486, width: 440, height: 40 }, {
      fontSize: 22,
      color: colors.red,
      alignment: "center",
    });
  }
}

function approvalSlide() {
  const slide = deck.slides.add();
  simpleHeader(slide, "L03 / APPROVAL", "审批判断三问", "别只看 Codex 想做什么，要看为什么做、风险多大、能否替代。");
  addCard(slide, "必要吗？", "这个动作对当前任务是不是必须的？", 90, 250, 340, 220, colors.blue);
  addCard(slide, "风险是什么？", "会不会读写项目外文件、联网、动凭据或生产环境？", 470, 250, 340, 220, colors.red);
  addCard(slide, "能替代吗？", "能不能只读、只用本地文件、缩小范围或先给计划？", 850, 250, 340, 220, colors.green);
  addText(slide, "课堂默认：小步放行，明确拒绝高风险动作。", { left: 120, top: 560, width: 1040, height: 40 }, {
    fontSize: 28,
    bold: true,
    alignment: "center",
  });
}

function agentsSlide() {
  const slide = deck.slides.add();
  simpleHeader(slide, "L04 / AGENTS.md", "把项目规则写成 Codex 的长期上下文", "AGENTS.md 写长期规则，不写一次性任务。");
  addCard(slide, "适合写", "项目目标\n目录边界\n验证要求\n安全规则", 72, 220, 340, 270, colors.green);
  addCard(slide, "不适合写", "今天这一次要做什么\n临时讨论\n敏感凭据\n过长背景材料", 472, 220, 340, 270, colors.red);
  addCard(slide, "最小规则", "Do not edit raw/.\nWrite pages under wiki/.\nUpdate log.\nMark uncertain facts.", 872, 220, 340, 270, colors.violet);
}

function exerciseSlide() {
  const slide = deck.slides.add();
  simpleHeader(slide, "PRACTICE", "课堂练习包", "让学员练选择、表达、判断和固化规则。");
  addCard(slide, "练习 1", "为 5 个任务选择 Codex 入口。", 72, 230, 260, 160, colors.blue);
  addCard(slide, "练习 2", "把模糊 Prompt 改成可执行任务。", 372, 230, 260, 160, colors.green);
  addCard(slide, "练习 3", "判断 5 个审批场景。", 672, 230, 260, 160, colors.amber);
  addCard(slide, "练习 4", "写一份最小 AGENTS.md。", 972, 230, 220, 160, colors.violet);
  addText(slide, "验收标准：能说明选择原因，而不是只记住按钮位置。", { left: 100, top: 520, width: 1080, height: 42 }, {
    fontSize: 28,
    bold: true,
    alignment: "center",
  });
}

function outputSlide() {
  const slide = deck.slides.add();
  simpleHeader(slide, "OUTPUTS", "本次生成的课堂资产", "所有资产都保留 Markdown 源文件，方便继续迭代。");
  const outputs = [
    ["讲义", "codex_lesson_handout.md / PDF"],
    ["PPT", "codex_course_deck.pptx"],
    ["练习", "codex_exercise_pack.md"],
    ["演示", "codex_demo_scripts.md"],
    ["图片", "codex_asset_brief.md"],
  ];
  outputs.forEach(([title, body], i) => {
    const left = 90 + (i % 3) * 380;
    const top = i < 3 ? 230 : 430;
    addCard(slide, title, body, left, top, 320, 130, [colors.blue, colors.green, colors.violet, colors.amber, colors.red][i]);
  });
}

function nextSlide() {
  const slide = deck.slides.add();
  slide.background.fill = "#0B1220";
  addText(slide, "下一步扩展", { left: 90, top: 86, width: 700, height: 72 }, {
    fontSize: 54,
    bold: true,
    color: colors.white,
  });
  addText(slide, "把第一版闭环继续扩展成完整 Codex 课程。", { left: 94, top: 170, width: 860, height: 38 }, {
    fontSize: 24,
    color: "#CBD5E1",
  });
  ["Skills / Plugins / MCP", "自动化任务", "CLI 与 IDE 实战", "排障与复盘"].forEach((item, i) => {
    addText(slide, item, { left: 120, top: 280 + i * 70, width: 720, height: 36 }, {
      fontSize: 30,
      bold: true,
      color: colors.white,
    });
  });
  addText(slide, "课程知识库会继续复利增长。", { left: 120, top: 610, width: 760, height: 34 }, {
    fontSize: 22,
    color: "#94A3B8",
  });
}

async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  await fs.mkdir(PREVIEW_DIR, { recursive: true });

  titleSlide();
  whySlide();
  courseMapSlide();
  surfaceSlide();
  taskSlide();
  loopSlide();
  await securitySlide();
  approvalSlide();
  agentsSlide();
  exerciseSlide();
  outputSlide();
  nextSlide();

  for (const [index, slide] of deck.slides.items.entries()) {
    const stem = `slide-${String(index + 1).padStart(2, "0")}`;
    await writeBlob(`${PREVIEW_DIR}/${stem}.png`, await deck.export({ slide, format: "png", scale: 1 }));
    await fs.writeFile(`${PREVIEW_DIR}/${stem}.layout.json`, await (await slide.export({ format: "layout" })).text(), "utf8");
  }

  await writeBlob(`${PREVIEW_DIR}/codex_course_deck_montage.webp`, await deck.export({ format: "webp", montage: true, scale: 1 }));
  const pptx = await PresentationFile.exportPptx(deck);
  await pptx.save(FINAL_PPTX);
  console.log(FINAL_PPTX);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
