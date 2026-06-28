简单说：

- **MCP**：能力的“接口协议”。让 Codex 连接外部工具和数据，例如 Figma、GitHub、飞书。它规定 AI **怎么调用工具**。
- **Skill**：工作的“操作手册”。通常是 `SKILL.md`，描述遇到某类任务时该用哪些工具、按什么步骤做、遵守什么规则。它告诉 AI **怎么把事情做好**。
- **Plugin**：可安装的“功能包”。可以打包一个或多个 Skills、MCP 服务及相关资源。它负责 **把一整套能力组织并分发**。

可以类比为：

> MCP 是 USB 接口标准；Skill 是使用说明书；Plugin 是装着设备、驱动和说明书的产品套装。

三者可以组合：安装一个 Figma Plugin → 获得 Figma Skills → Skills 指导 Codex 通过 MCP 工具操作 Figma。