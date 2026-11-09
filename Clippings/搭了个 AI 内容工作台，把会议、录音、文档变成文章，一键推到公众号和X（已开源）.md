---
title: "用好 AI 跟上时代"
source: "https://scys.com/articleDetail/xq_topic/55521558225218184"
author:
  - "[[作者]]"
published:
created: 2026-11-09
description: "生财有术是专注普通人学习 AI 与创业的实战型社区，推崇真诚、务实、可落地的学习氛围，通过情报挖掘、会员分享、系统课程、项目实战与同行者圈子，帮助你学会用 AI、看懂趋势、抓住创业机会。自 2017 年创立以来，已有 7 万多人受益。"
tags:
  - "clippings"
---
大家好，我是 Gary曹淦，生财 AI 视频深海圈总教练，也是探索 AI 视频和内容出海两年的自媒体新人。

本文主要分享我用 AI 搭的一个内容工作台：从收素材、找选题、起底稿、改稿排版，到推进公众号、X、知识星球的草稿箱，再到飞书留档，都在一个页面里做完。已开源，开源地址： [https://github.com/garycaogan/content-workbench](https://github.com/garycaogan/content-workbench)

我每天说的比写的多太多了，开会、直播、跟教练对齐、给圈友答疑，飞书妙记一天能录好几个小时，很多判断在会上讲得挺透，但真要写成公众号，就得自己回去翻妙记、翻文档，一篇文章光找素材就要半天，所以公众号一直更得断断续续，X 也是想起来才发一条。

实际上我不是没东西写，是信息太分散+整理和发布成本高，就懒得弄了。

****所以这个工作台的核心目的就是在保证质量的前提下把输出内容的成本降到最低****

**顺便，本文是 Claude 在这个工作台里起草、排版、配好截图，我做批注、修改后发布。**

## 一、内容素材可视化

这个工作台我一行代码没写，是 Mac mini 上的 Claude 写的，我做的就是提需求、上手用、再提意见，三天下来，大概是下面这个样子。

**我只管说和改，中间翻素材、找选题、起底稿、排版、发平台、留档这些活，都交给 AI。**

打开就是“今天”这一页，上面是三个数，等我挑的选题、在改的稿子、攒下的素材，中间一个输入框，想到什么随手记一笔，也可以直接录音、传音频、贴飞书妙记和飞书文档的链接。

![](https://search01.shengcaiyoushu.com/public/xq/article-images/55521558225218184/7626ecd29e04b056b475b8944c605c90db26ff0ad02c48f4d3ffb2b82c79bad4.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,h_16000/quality,q_75/format,webp)

（截图里涉及业务的内容我都打了码，大家看个结构就行。）

## 二、素材采集自动化

我自己的飞书妙记每两个小时自动拉一次，录音在本机转文字，音频不出这台电脑。我还让它把我这两年在飞书里建过的 866 篇文档过了一遍，挑出 62 篇我自己写的、还没发过的，一起导进来当素材，到现在攒了 89 条。

每条素材进来，AI 会提炼出几个能写成公众号或者 X 的选题，每个选题下面都挂着我在素材里的原话， **会议里分不清是谁说的话，只当背景，不当成我的观点** ，别人的话没有我点头，进不了稿子。现在攒了 399 个选题等我挑，挑中一个，点“写成公众号”或者“写成 X”就行。

![](https://search01.shengcaiyoushu.com/public/xq/article-images/55521558225218184/adf45723daeba05a052fff0a82960b53bf6d5079170c65d7d26b9dd27bedda2e.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,h_16000/quality,q_75/format,webp)

## 三、AI native的编辑体验

编辑器是所见即所得的，配图直接显示在正文里，我一眼就能看出图和字接不接得上，截图直接粘贴进来就是一张配图。顶上一排按钮，三级标题、加粗、高亮、引用、列表， **AI 起稿的时候会先排好一版，我觉得不对再自己调** 。

![](https://search01.shengcaiyoushu.com/public/xq/article-images/55521558225218184/7b0bd6236955b475bcd32ce4e2ff80c3beb7e4e5ce645755d933be8003fb458f.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,h_16000/quality,q_75/format,webp)

以前 AI 让我补的话、要我确认的事，写在正文里，我得自己一处处找、一处处删，很容易漏，格式又不显眼。现在这些全挂成批注，像飞书评论一样放在侧边，正文里对应的那句话下面标一道黄线，点一下就对上。

![](https://search01.shengcaiyoushu.com/public/xq/article-images/55521558225218184/7b373cf1a5b7755bb2551f5c8d477d3f6c0b4d57147309df10652895c290b49d.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,h_16000/quality,q_75/format,webp)

我自己有意见，选中一段文字就能批注，对全文的意见也能直接写，AI 的批注我可以直接回复，比如把要补的那句话写在回复里。都写完了点“按批注修改”， **AI 一次把所有批注改进正文，每条都回复改了什么** ，改完能看这一轮的前后对比，不满意一键撤回。

![](https://search01.shengcaiyoushu.com/public/xq/article-images/55521558225218184/4c01894234c65eb2a006a8da2538139f15fcc7ff348789732862427cd46909ca.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,h_16000/quality,q_75/format,webp)

如果是生财圈友，可以在工作台里接入生财的 MCP，需要案例的时候，它会去生财 MCP 里搜相关内容的分享、精华区和项目案例库，用了哪个案例，标题、作者、链接都写在备注里，我只需要确认他这个案例找的合不合适，表述需不需要调整。

## 四、学习我的写作习惯

因为 Claude 的写作能力底子强，在给足上下文和要求的情况下写出来的东西我是比较满意的，于是我想到，既然每次写出来的稿子我还是要自己做调整和修改，那是不是可以让工作台记录我每次修改、编辑、新增的内容，再反向完善写稿的规则？

比如我的上一篇文章，AI 起的开头是“还是老规矩先说好，本人并非 AI 编程专业户，这篇不讲技术”，我改成了“大家好，我是 Gary曹淦，持续探索 AI 视频和内容出海两年了”，标题里的“终于不用再替所有人传需求了”改成了“终于不用当传话筒了”，小标题“过去的两条路，都不好走”改成了“传统的开发协作模式和大公司的 AI 协作模式不适用”。

它从这一轮改动里总结出了 5 条改稿习惯，每条都带着我真实改过的例子，比如：

- 小标题直接写这一节的结论或讲的具体东西，不卖关子
- 讲到一个人或一台设备，先交代为什么有它，再给数字和真名
- 开头先自我介绍，第二段直接说本文分享什么、有开源地址当场贴上

之后起稿、按批注修改，都会照着这些来， **这篇的开头，就是照着它学到的那条写的** 。这些习惯我可以改、可以关掉，也可以自己加。

![](https://search01.shengcaiyoushu.com/public/xq/article-images/55521558225218184/4d58f21f89a4bdec07e5a420506757c99b279b591bb308464b694346ae1899ef.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,h_16000/quality,q_75/format,webp)

## 五、一键推送到公众号、x的草稿箱

这功能其实老早就能实现了，不过得跟自己的生产链条打通才有意义，谁懂我之前一直都是手动同步去草稿箱。。不过现在这套工作台是完美符合这个功能场景的，于是我给工作台加了这个能力。

改完点“推到草稿箱”，选公众号、X 长文还是知识星球。正文里的图片会自动传到各自的平台，公众号连封面一起带过去， **三边都只进草稿箱，最后点发表的永远是我自己** 。X 不支持高亮，推到 X 和星球的高亮会自动变成加粗。

![](https://search01.shengcaiyoushu.com/public/xq/article-images/55521558225218184/0059a3a98e26f0de6d73d730fce628e095d8c4cd1d89e4a8243bed52bf092b80.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,h_16000/quality,q_75/format,webp)

上一篇文章就是这么发的，在工作台里改完，公众号草稿箱、X 长文草稿、星球的文章草稿箱，三个地方都推进去了，每一次推送都留了记录。

![](https://search01.shengcaiyoushu.com/public/xq/article-images/55521558225218184/3e14eb9a4826da5c4c310a0b3885ea91ad430ed9a78e64dc70853e7d2cb2e7e3.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,h_16000/quality,q_75/format,webp)

知识星球没有开放接口，用的是星球网页自己调的接口，在设置里用微信扫一次码就连上了，再推一次是更新同一篇草稿，不会多出一篇。

小红书个人号没有发布接口，我就让它把能做的都做了：一键把长文改成小红书版，20 字以内的标题、1000 字以内的正文、话题标签，再自动画一张封面卡和几张要点卡，长文里的截图也可以挑几张配进去。手机上点“分享到小红书”，图片按顺序带进小红书 App，文案已经复制好，粘贴进去，存草稿还是发布在小红书里点。

![](https://search01.shengcaiyoushu.com/public/xq/article-images/55521558225218184/d5fd47d851244cb99fbbb7ecec55556cd601741797f497fb4d9d20a62582e48d.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,h_16000/quality,q_75/format,webp)

![](https://search01.shengcaiyoushu.com/public/xq/article-images/55521558225218184/78b8d3b82c71613d113647ef6579e2afa59dda17da3e797450ad8c0bd21fe1f1.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,h_16000/quality,q_75/format,webp)

## 六、飞书文档自动同步

上一篇文章没用工作台之前，我在飞书里攒了四份，第一版、第二版、第三版、第四版，想看改了什么只能一份份翻。

现在每篇稿子在飞书的固定文件夹里只对应一个文档，停笔一分半钟后自动同步，正文、图片、发布信息、小红书版都在里面，改动直接看飞书的历史版本。如果我在飞书里直接改过，它也不会傻乎乎覆盖掉，会停下来等我决定。

## 七、多设备协同

工作台跑在我的 Mac mini 上，挂在我自己的域名下面。一开始每台新设备都要单独绑一个 passkey，太麻烦了，现在改成只收邮箱验证码，每台设备一个月验一次。

![](https://search01.shengcaiyoushu.com/public/xq/article-images/55521558225218184/3a6f7ee84c85a23b328c626d533aecb0ee2285ec9876b3be85c17af1757d8da6.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,h_16000/quality,q_75/format,webp)

手机上也能用，出门在外想到什么，随手记一笔，或者打开稿子改两句。

![](https://search01.shengcaiyoushu.com/public/xq/article-images/55521558225218184/a59c03e10846f30f14b40bb55a845990287ca51c0adea69aac76c0b892a745a1.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,h_16000/quality,q_75/format,webp)

## 八、AI 时代，说清楚你要的就能得到你要的

回头看这三天，我做的事情基本就是用、然后说哪里不顺手：

- 写上一篇文章时，发现配图在正文里看不到、一篇文章在飞书里建了好几份、也没有排版，然后就加了配图、排版和飞书文档自动同步的功能
- 备注写在正文里容易看漏，交互体验也很差，就改成了侧边的批注，加了“按批注修改”，更符合我习惯的改稿逻辑
- 以前改 AI 写的稿子总是有大量重复修改的地方，改了这一次下次还得改，就让它记下我是怎么改稿的
- 多设备协作不方便，就改成独立服务部署，邮箱验证码登录
- 接公众号和 x，直接让 Claude conputeruse 自己接入，我只负责扫码
- 想同步到星球和小红书，就加上了星球草稿箱和小红书版

上一篇我也说了： **永远相信 AI 比你聪明，但需求只有你自己清楚**

**说清楚你的需求，AI 一定能提供你想要的东西**

## 九、开源仓库

核心代码已经放到了 GitHub 上，地址： [https://github.com/garycaogan/content-workbench](https://github.com/garycaogan/content-workbench)

![](https://search01.shengcaiyoushu.com/public/xq/article-images/55521558225218184/8f1be64df53cd68b8ce0e776704baf35ee4ec63e4b69f9dcec2306e8558c3a3a.png?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,h_16000/quality,q_75/format,webp)

怎么装？把这个链接丢给你自己的 Claude Code 或者 Codex，让它照着说明帮你装、帮你配，不懂的就截图问它。要让它写得像你，得给它你自己的文风指南和过去的文章，我自己的文风资料和素材不在仓库里。

如果你也是开会多、分享多，但是懒得记录，又想做自媒体，可以试试，欢迎在评论区聊聊在写东西这件事儿上，你们是怎么和 AI 协作的。

我是 Gary，千人社群生财 YouTube AI 视频深海圈总教练，分享关于 AI 出海与 AI 视频的拙见，欢迎在评论区留言贡献选题，也欢迎交流链接。