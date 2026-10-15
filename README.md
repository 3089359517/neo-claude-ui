# Neo Claude UI

一个整合了多个 Claude UI 开源项目精华的**一体化 AI 工作台**：以高保真还原的 Claude 设计系统（CDS）为视觉底座，配上开箱即用的多模态聊天、深度研究、CoT 推理流与 Artifacts 沙盒。

> 上游项目持续更新中，本仓库每 3 天自动检查并同步上游的实质更新（见 [UPSTREAM.md](./UPSTREAM.md)）。

## ✨ 特性

- **CDS 设计系统**（`src/cds/`）：30 个手写 React 组件 + 8 套交互物理算法 + 完整主题变量——陶土品牌色、双环阴影、作曲家输入框物理、呼吸光效，全部逆向还原自 Claude 桌面端
- **多模态 AI 工作台**：直连云端 LLM（Gemini / Groq / OpenAI）与本地模型（Ollama / LM Studio），支持图片、实时摄像头拍摄
- **CoT 推理流**：流式思考过程展示，思考时整块输出区带上 CDS 氛围光效（`ReasoningAmbientGlow`）
- **Artifacts 沙盒**：代码生成、实时预览、流式 Diff 查看
- **深度研究 / 联网搜索**：Tavily 搜索 + 研究进度可视化
- **三种模式**：Chat / Code / Build（含 WebContainer 实时运行）

## 🚀 快速开始

```bash
npm install
npm run dev
```

打开 http://localhost:5173，点击右上角设置填入你的 API Key（或接本地 Ollama）即可开始对话。

构建生产版本：

```bash
npm run build
```

## 🧩 项目结构

```
src/
├── cds/                    # CDS 设计系统（来自 Caho1/open-claude-ui）
│   ├── cds-theme.css       # 完整主题变量：色彩阶梯 / 阴影 / 动效
│   ├── index.ts            # 统一导出
│   ├── CdsButton.tsx …     # 30 个组件：ChatComposer / ThinkingAccordion /
│                           #   ArtifactsSplitPaneResizer / StreamingDiffViewer …
│   └── ClaudeMotionPresets.ts
├── components/             # 应用组件（来自 Damienchakma/Open-claude）
├── context/                # Chat / Theme / Mode 状态
├── lib/                    # LLM 客户端、搜索工具、思考格式化
└── utils/
```

## 🙏 致谢与来源

本项目站在这些优秀开源项目的基础上构建（均为 MIT 许可），详见 [UPSTREAM.md](./UPSTREAM.md)：

| 上游项目 | 贡献 |
|---|---|
| [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) | CDS 设计系统：30 组件、动效物理、主题 |
| [Damienchakma/Open-claude](https://github.com/Damienchakma/Open-claude) | 应用基座：聊天、Artifacts、多模态、深度研究 |
| [13point5/open-artifacts](https://github.com/13point5/open-artifacts) | Artifacts 生成与预览的设计参考 |
| [sahaj-b/claudeAI-frontend-clone](https://github.com/sahaj-b/claudeAI-frontend-clone) | 页面与组件细节参考 |
| [Hoanganhvu123/Daisy_UI](https://github.com/Hoanganhvu123/Daisy_UI) | 组件细节参考 |

## 📄 许可

MIT。详见 [LICENSE](./LICENSE)。
