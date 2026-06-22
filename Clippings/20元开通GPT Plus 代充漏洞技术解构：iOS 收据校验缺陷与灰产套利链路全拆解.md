---
title: "20元开通GPT Plus 代充漏洞技术解构：iOS 收据校验缺陷与灰产套利链路全拆解"
source: "https://zhuanlan.zhihu.com/p/2028213501936550500"
author:
  - "[[孤飞​]]"
published:
created: 2026-06-22
description: "2026 年 4 月 16 日，X 用户 Kai (@xkajon) 发布了一篇长推文，把”GPT 代充”背后的完整技术链路摊开在公众面前。同日，阿杰鲁 (@zaunist) 提到 Telegram 上已经出现了能白嫖 ChatGPT Plus 和 Pro 的机器人，并感…"
tags:
  - "clippings"
---
89 人赞同了该文章

2026 年 4 月 16 日，X 用户 [Kai (@xkajon)](https://link.zhihu.com/?target=https%3A//x.com/xkajon/status/2044720426392363505) 发布了一篇长推文，把” [GPT 代充](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=GPT+%E4%BB%A3%E5%85%85&zhida_source=entity) ”背后的完整技术链路摊开在公众面前。同日， [阿杰鲁 (@zaunist)](https://link.zhihu.com/?target=https%3A//x.com/zaunist/status/2044605901517316414) 提到 Telegram 上已经出现了能白嫖 [ChatGPT Plus](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=ChatGPT+Plus&zhida_source=entity) 和 Pro 的机器人，并感慨”大概率没几天这个渠道就会被玩死”。

本文基于 Kai 原帖内容，从技术角度完整还原这条 [漏洞](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E6%BC%8F%E6%B4%9E&zhida_source=entity) 链路。

---

### 一、漏洞核心：OpenAI 不校验 Apple ID 归属关系

Kai 原文一句话点破了问题本质：

> **OpenAI 验票的时候，根本不看这张收据是你 Apple ID 买的，还是隔壁老王 Apple ID 买的。它只看两样东西：收据合法不合法，以及你传过来的那个 ChatGPT [auth token](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=auth+token&zhida_source=entity) 是不是活的。**

换成技术语言： **收据合法 + token 有效 = 任意账号变 Plus** 。Apple ID 绑定、账号对应关系，全不查。

这就好比你拿着别人的购物小票去柜台领东西，柜员只看小票真假，不看你身份证。

---

### 二、正常 iOS 内购链路 vs 漏洞利用点

### 正常链路

一笔正常的 iOS 订阅发放过程如下：

1. 用户在 iPhone 上点击付款
2. App Store 扣钱，Apple 生成购买收据（receipt）写入本机 [沙盒](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E6%B2%99%E7%9B%92&zhida_source=entity)
3. [ChatGPT App](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=ChatGPT+App&zhida_source=entity) 自动拾取收据，连同当前登录账号的 auth token 一起打包发给 OpenAI
4. OpenAI 服务端向 Apple 校验收据真伪
5. 校验通过，给该 auth token 对应的账号开通 Plus
```
flowchart TD
    A["iPhone 内购付款"] --> B["App Store 扣钱 + 生成 receipt"]
    B --> C["ChatGPT App 拾取 receipt"]
    C --> D["App 将 receipt + auth token 发给 OpenAI"]
    D --> E["OpenAI 向 Apple 验证 receipt 真伪"]
    E --> F{"是否同时校验 Apple ID 归属？"}
    F -->|"正常应该校验"| G["仅允许原购买者账号获得权益"]
    F -->|"实际未校验"| H["任何持有有效 auth token 的账号均可获得 Plus"]
```

### 漏洞利用点

问题出在第 4→5 步之间。OpenAI 的订阅校验接口实际只做了 **一层判断** （收据真伪），缺失了 **第二层判断** （收据与请求账号的归属关系）。

正如 Kai 所说：

> 三端订阅管理都是交给第三方 API 处理的，iOS 系统框架允许 App 把内购凭据往第三方服务器发，这本是正常开发逻辑。但 OpenAI 在这条链路上偷了懒——或者说，压根没想过有人会卡这个环节。

---

### 三、完整操作链路：四步拆解

以下内容忠实还原 Kai 原帖技术描述。

### 第一步：获取低价区 Apple ID

[土耳其](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E5%9C%9F%E8%80%B3%E5%85%B6&zhida_source=entity) 区 ChatGPT Plus 标价 **499 里拉/月** ，折合人民币约 **85 元** 。国内 iOS 定价约 **145 元** 。差价本身就构成了第一层套利空间。

操作：注册或购买一个土耳其区 Apple ID，充入礼品卡余额。

### 第二步：拦截收据，阻止自动提交

在 iPhone 上打开 ChatGPT App， **不登录目标账号** （登临时号或不登录）。

关键操作： **在内购付款前配置网络拦截，阻止 ChatGPT App 将收据自动发送给 OpenAI [服务端](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=2&q=%E6%9C%8D%E5%8A%A1%E7%AB%AF&zhida_source=entity) 。**

此时 App Store 正常扣款，Apple 正常将收据写入本机沙盒目录（ `appStoreReceiptURL` ），但因为网络拦截，这张收据不会被 App 自动提交给 OpenAI，而是停留在本地等待手动提取。

### 第三步：导出收据

Kai 原帖列出了三种主流方法：

**方法 A：端点本地映射（无需越狱）**

用 DNS 劫持或本地代理，将 ChatGPT App 发往 OpenAI 的请求重定向到本地服务器。请求体中本身就携带 Base64 编码的收据，到本地后直接保存。

工具链： `mitmproxy` 、 `Charles Proxy` 、自建 [HTTPS](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=HTTPS&zhida_source=entity) 代理 + 自签证书。

Kai 原话： **“不用越狱，门槛低得令人发指。”**

**方法 B：越狱设备 + [Hook](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=Hook&zhida_source=entity) （iOS）**

在越狱设备上使用 [Frida](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=Frida&zhida_source=entity) 或 Flex，直接 hook StoreKit 框架，截取 `SKPaymentTransaction` 的 `transactionReceipt` ，或读取 `appStoreReceiptURL` 对应的收据文件。

**方法 C：Android + Xposed Hook**

Android 路径使用 [Xposed 框架](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=Xposed+%E6%A1%86%E6%9E%B6&zhida_source=entity) hook 对应支付回调，逻辑与 iOS 类似。

### 第四步：API 补单——把收据打到任意账号

收据到手后，直接向 OpenAI 的订阅接口发送请求：

```
POST https://ios.chat.openai.com/backend-api/mobile/apple/post_receipt
Content-Type: application/json
Authorization: Bearer <目标账号的 auth token>

{
  "receipt": "<Base64 编码的 iOS 收据>",
  "platform": "ios",
  "product_id": "com.openai.chatgptplus",
  "device_info": {
    "model": "iPhone14,2",
    "os_version": "17.0",
    "timezone": "Asia/Shanghai"
  }
}
```

**注意这里的关键点** ： `Authorization` 头使用的是 **目标用户** 的 auth token，而不是购买者的。这就是漏洞的核心利用方式——用 A 的收据给 B 开通 Plus。

---

### 四、为什么能”一票多充”：重放攻击的经济模型

Kai 原帖最后点破了灰产的商业逻辑：

> **一张土耳其收据八十五块人民币成本，能给无数个账号开 Plus。闲鱼上那些二三十块钱一个月的 GPT Plus 代充，就是这么来的。你以为人家做慈善？人家是拿一张票反复上车。**

整个经济模型非常清晰：

| 环节 | 成本/收入 |
| --- | --- |
| 单张土耳其区收据 | ~85 元人民币 |
| 代充售价（闲鱼/TG） | 20-50 元/账号 |
| 如果收据可重放 N 次 | 第 2 单起 [边际成本](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E8%BE%B9%E9%99%85%E6%88%90%E6%9C%AC&zhida_source=entity) ≈ 0 |
| [毛利](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E6%AF%9B%E5%88%A9&zhida_source=entity) | 第 2 单起几乎 100% |

操作闭环：买家提供自己的 ChatGPT auth token（短期有效、权限有限），卖家用收据调 API 完成开通，买家立刻改密码。卖家拿同一张收据继续充下一个。

第二条推文还提到了更极端的玩法： **使用 [日本](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E6%97%A5%E6%9C%AC&zhida_source=entity) 或英国地区节点 + 抓包拦截，直接 0 元获取 ChatGPT Plus** ——暗示某些地区可能存在更深层的 [支付校验](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E6%94%AF%E4%BB%98%E6%A0%A1%E9%AA%8C&zhida_source=entity) 绕过。

---

### 五、技术归因：OpenAI 在哪一步偷了懒？

从服务端设计角度看，这个漏洞的根因可以精确定位：

### 缺失 1：收据 → 账号绑定校验

Apple 的 Server-to-Server 验票接口（ `verifyReceipt` 或 App Store Server API v2）返回的数据中包含 `original_transaction_id` ，可以唯一标识一笔购买。正常做法是：

```
收据验证通过后：
IF original_transaction_id 已绑定其他平台账号 → 拒绝
ELSE → 绑定当前请求账号，发放权益
```

OpenAI 的实现显然跳过了这一步。

### 缺失 2：重放拦截

同一张收据（同一个 `original_transaction_id` ）被多个不同的 auth token 提交时，服务端没有去重逻辑。这是一个经典的 **[收据重放](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E6%94%B6%E6%8D%AE%E9%87%8D%E6%94%BE&zhida_source=entity) （receipt replay）** 漏洞。

### 缺失 3：请求特征风控

批量补单通常具有明显的异常特征：

- 短时间内大量不同 auth token 使用相同 `original_transaction_id`
- 请求 [IP](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=IP&zhida_source=entity) / 设备指纹高度集中
- `device_info` 字段千篇一律（如统一 `iPhone14,2` ）

这些模式没有触发任何风控拦截。

### 归因总结

```
正常设计：  验真伪 → 验归属 → 验重放 → 风控拦截 → 发放权益
OpenAI 实际：验真伪 → （跳过）→ （跳过）→ （跳过）→ 发放权益
```

---

### 六、同类漏洞的行业对比

这类 iOS 内购收据校验缺陷并非 OpenAI 独有。在 [移动支付](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E7%A7%BB%E5%8A%A8%E6%94%AF%E4%BB%98&zhida_source=entity) 生态中，类似问题有过多次先例：

| 平台/场景 | 漏洞类型 | 核心原因 |
| --- | --- | --- |
| 早期手游 | 收据重放刷道具 | 服务端未记录 transaction\_id 去重 |
| SaaS 订阅服务 | 跨账号恢复购买 | Restore Purchases 未绑定平台账号 |
| [流媒体](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E6%B5%81%E5%AA%92%E4%BD%93&zhida_source=entity) 平台 | 家庭共享滥用 | 共享组权益边界未隔离 |
| OpenAI (本案) | 收据重放 + 跨账号补单 | 未校验 Apple ID 归属 + 未做 transaction\_id 去重 |

Apple 自身的 StoreKit 2 和 App Store Server API v2 已经提供了 `JWSTransaction` 签名验证、 `original_transaction_id` 绑定、Server Notification V2 等完善的校验基础设施。问题不在 Apple 侧，而在 OpenAI 的服务端没有用好这些能力。

---

### 七、如果要修，怎么修？

从技术实现角度，修补路径很明确：

### 1\. 收据 → 账号强绑定

```
# 伪代码
def process_receipt(auth_token, receipt_data):
    verification = verify_with_apple(receipt_data)
    txn_id = verification.original_transaction_id
    
    existing_binding = db.query(txn_id)
    if existing_binding and existing_binding.account_id != auth_token.account_id:
        raise Error("此收据已绑定其他账号")
    
    db.bind(txn_id, auth_token.account_id)
    grant_plus(auth_token.account_id)
```

### 2\. transaction\_id 全局去重

维护一张 `(original_transaction_id, account_id)` 的 [映射表](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E6%98%A0%E5%B0%84%E8%A1%A8&zhida_source=entity) ，写入即锁定，拒绝同一 transaction\_id 的二次绑定。

### 3\. 请求级风控

- 同一 receipt 被不同 auth token 提交 → 立即拒绝并告警
- 同一 IP/ [设备指纹](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=2&q=%E8%AE%BE%E5%A4%87%E6%8C%87%E7%BA%B9&zhida_source=entity) 短时间内大量补单 → 触发人工审计
- `device_info` 字段与实际请求环境不符 → 标记风险

### 4\. 迁移到 App Store Server API v2

使用 Apple 的 [JWS 签名事务](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=JWS+%E7%AD%BE%E5%90%8D%E4%BA%8B%E5%8A%A1&zhida_source=entity) 替代传统的 `verifyReceipt` ，获得更 [细粒度](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E7%BB%86%E7%B2%92%E5%BA%A6&zhida_source=entity) 的事务状态和撤销通知。

---

### 八、Kai 的评价与灰产生态

Kai 原帖最后两段尤其值得注意：

> **这套流程，技术含量不高，但信息差极高。外面那些收费几千教人”GPT 代充技术”的，教的就是这几步。我今天直接摊开写，省得你们再去交 [智商税](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E6%99%BA%E5%95%86%E7%A8%8E&zhida_source=entity) 。**

这揭示了一个典型的灰产生态结构：

1. **漏洞发现层** ：少数人发现并验证漏洞
2. **工具化层** ：封装成 TG 机器人、 [自动化](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E8%87%AA%E5%8A%A8%E5%8C%96&zhida_source=entity) 脚本（阿杰鲁提到的”白嫖机器人”）
3. **信息差变现层** ：把已知流程包装成”付费教程”，收费数千元转售
4. **终端用户层** ：闲鱼/TG 上 20-50 元的”代充”服务

每一层都在吃信息差的红利。Kai 把技术细节公开，本质上是在压缩第 3 层的信息差利润空间。

---

### 九、对用户的实际影响

### 对代充买家

- auth token 在交付过程中需要暴露给卖家，即使短期有效，仍存在 [会话劫持](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E4%BC%9A%E8%AF%9D%E5%8A%AB%E6%8C%81&zhida_source=entity) 窗口
- OpenAI 如果事后修复并回溯异常订阅，通过灰产开通的 Plus 权益可能被批量撤销
- 账号可能被标记为异常，影响后续正常使用

### 对 OpenAI

- 订阅收入 [直接损失](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E7%9B%B4%E6%8E%A5%E6%8D%9F%E5%A4%B1&zhida_source=entity) （一份收据对应的付款被 N 个账号消费）
- 信任成本：当漏洞公开后，灰产规模会迅速放大（阿杰鲁所言”没几天就会被玩死”）
- 修复紧迫性：Kai 帖子获得大量传播后，漏洞的存续时间窗口急剧缩短

### 对开发者的启示

任何涉及 iOS 内购的服务端，都应该回头检查自己的收据校验链路：

1. 是否只做了真伪校验而跳过了归属校验？
2. 是否对 `original_transaction_id` 做了去重？
3. `Restore Purchases` 路径是否有独立的绑定校验？
4. 是否接入了 App Store Server Notifications 来处理退款和撤销？

---

### 常见问题 FAQ

**Q：这个漏洞截至发文时是否仍然有效？** A：Kai 发帖时间为 2026 年 4 月 16 日，原文表述为”OpenAI 至今没补这个窟窿”。但考虑到帖子传播速度，修复可能随时发生。本文关注的是 [技术原理](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E6%8A%80%E6%9C%AF%E5%8E%9F%E7%90%86&zhida_source=entity) 而非可利用性。

**Q：为什么 OpenAI 会犯这种看起来很基础的错误？** A：Kai 原帖的判断是：”不是补不了，是优先级不够，或者说，他们根本不在乎这点订阅收入的漏洞。毕竟大头在企业 API 那边。” 从工程视角看，订阅校验通常由支付中台团队负责，如果团队只关注”不让假收据通过”而忽视了”同一收据的跨账号重放”，这种遗漏是有可能发生的。

**Q：方法 A（ [代理拦截](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E4%BB%A3%E7%90%86%E6%8B%A6%E6%88%AA&zhida_source=entity) ）真的不需要越狱吗？** A：是的。mitmproxy 或 Charles Proxy 配合自签 [根证书](https://zhida.zhihu.com/search?content_id=273245485&content_type=Article&match_order=1&q=%E6%A0%B9%E8%AF%81%E4%B9%A6&zhida_source=entity) ，在非越狱 iOS 设备上就能拦截 HTTPS 流量。这也是 Kai 说”门槛低得令人发指”的原因。

**Q：代充买家提供 auth token 有多大风险？** A：ChatGPT 的 auth token（通常是 JWT）具有时效性，但在有效期内持有者可以访问该账号的对话历史、设置、文件等。即使事后改密码使 token 失效，在交付窗口期内信息已可能被读取。

**Q：0 元方案（日本/英国节点 + 抓包）是怎么回事？** A：Kai 的第三条推文提到这一方案但未展开细节。推测可能涉及特定地区的免费试用政策或支付流程差异，配合抓包拦截实现零成本获取收据。

---

### 参考来源

- [Kai (@xkajon) 的原帖](https://link.zhihu.com/?target=https%3A//x.com/xkajon/status/2044720426392363505)
- [阿杰鲁 (@zaunist) 的相关原帖](https://link.zhihu.com/?target=https%3A//x.com/zaunist/status/2044605901517316414)
- [OpenAI Help：Restoring a ChatGPT subscription purchased in the Apple App Store](https://link.zhihu.com/?target=https%3A//help.openai.com/en/articles/8346573)
- [Apple Developer：App Store Server API v2](https://link.zhihu.com/?target=https%3A//developer.apple.com/documentation/appstoreserverapi)
- [Apple Developer：StoreKit 2](https://link.zhihu.com/?target=https%3A//developer.apple.com/storekit/)

编辑于 2026-04-16 20:51・浙江[全能的豆包AI，办公、学习、生活全覆盖！](http://www.doubao.com/download/desktop?ug_apk_token=LboxR&ad_platform_id=zhihu_feed_lead&ug_callback_url=https%3A%2F%2Fsugar.zhihu.com%2Fplutus_adreaper_callback%3Fsi%3D1938b964-1d78-416f-8250-46cc8b393ecb%26os%3D3%26zid%3D1629%26zaid%3D3756222%26zcid%3D3751293%26cid%3D3751293%26event%3D__EVENTTYPE__%26value%3D__EVENTVALUE__%26ts%3D__TIMESTAMP__%26cts%3D__TS__%26mh%3D2341f93a77e8e197fe869488f952dd55%26adv%3D784532%26ocg%3D0%26cp%3D0%26ocs%3D0%26aic%3D0%26atp%3D0%26ct%3D0%26ed%3DGiBNJgVzfCMmUW9XFyEvRA8xBGxJICwkOhh0FlwxKw1Gdx87VSAsMi9Cb0oDdj1dByRedwhlKy0iVm9XFyU5WQ94CH0Kcmt5eRFmUQVheANYdx8lViYzJHMVdAtEbXgHWnMIfAhOhgOH_hrakQ%3D%3D&cb=https%3A%2F%2Fsugar.zhihu.com%2Fplutus_adreaper_callback%3Fsi%3D1938b964-1d78-416f-8250-46cc8b393ecb%26os%3D3%26zid%3D1629%26zaid%3D3756222%26zcid%3D3751293%26cid%3D3751293%26event%3D__EVENTTYPE__%26value%3D__EVENTVALUE__%26ts%3D__TIMESTAMP__%26cts%3D__TS__%26mh%3D2341f93a77e8e197fe869488f952dd55%26adv%3D784532%26ocg%3D0%26cp%3D0%26ocs%3D0%26aic%3D0%26atp%3D0%26ct%3D0%26ed%3DGiBNJgVzfCMmUW9XFyEvRA8xBGxJICwkOhh0FlwxKw1Gdx87VSAsMi9Cb0oDdj1dByRedwhlKy0iVm9XFyU5WQ94CH0Kcmt5eRFmUQVheANYdx8lViYzJHMVdAtEbXgHWnMIfAhOhgOH_hrakQ%3D%3D&ug_semver=v1.0.0&spu=biz%3D0%26ci%3D3751293%26si%3D9d9c6a2a-5f8f-4568-9f9e-e07ce5db3739%26ts%3D1782142686%26zid%3D1629)

[

文档处理、数据分析、会议记录统统搞定，全能豆包...

](http://www.doubao.com/download/desktop?ug_apk_token=LboxR&ad_platform_id=zhihu_feed_lead&ug_callback_url=https%3A%2F%2Fsugar.zhihu.com%2Fplutus_adreaper_callback%3Fsi%3D1938b964-1d78-416f-8250-46cc8b393ecb%26os%3D3%26zid%3D1629%26zaid%3D3756222%26zcid%3D3751293%26cid%3D3751293%26event%3D__EVENTTYPE__%26value%3D__EVENTVALUE__%26ts%3D__TIMESTAMP__%26cts%3D__TS__%26mh%3D2341f93a77e8e197fe869488f952dd55%26adv%3D784532%26ocg%3D0%26cp%3D0%26ocs%3D0%26aic%3D0%26atp%3D0%26ct%3D0%26ed%3DGiBNJgVzfCMmUW9XFyEvRA8xBGxJICwkOhh0FlwxKw1Gdx87VSAsMi9Cb0oDdj1dByRedwhlKy0iVm9XFyU5WQ94CH0Kcmt5eRFmUQVheANYdx8lViYzJHMVdAtEbXgHWnMIfAhOhgOH_hrakQ%3D%3D&cb=https%3A%2F%2Fsugar.zhihu.com%2Fplutus_adreaper_callback%3Fsi%3D1938b964-1d78-416f-8250-46cc8b393ecb%26os%3D3%26zid%3D1629%26zaid%3D3756222%26zcid%3D3751293%26cid%3D3751293%26event%3D__EVENTTYPE__%26value%3D__EVENTVALUE__%26ts%3D__TIMESTAMP__%26cts%3D__TS__%26mh%3D2341f93a77e8e197fe869488f952dd55%26adv%3D784532%26ocg%3D0%26cp%3D0%26ocs%3D0%26aic%3D0%26atp%3D0%26ct%3D0%26ed%3DGiBNJgVzfCMmUW9XFyEvRA8xBGxJICwkOhh0FlwxKw1Gdx87VSAsMi9Cb0oDdj1dByRedwhlKy0iVm9XFyU5WQ94CH0Kcmt5eRFmUQVheANYdx8lViYzJHMVdAtEbXgHWnMIfAhOhgOH_hrakQ%3D%3D&ug_semver=v1.0.0&spu=biz%3D0%26ci%3D3751293%26si%3D9d9c6a2a-5f8f-4568-9f9e-e07ce5db3739%26ts%3D1782142686%26zid%3D1629)

赞同 89