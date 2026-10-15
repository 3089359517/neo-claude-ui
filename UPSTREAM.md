# 上游追踪（UPSTREAM）

本仓库整合以下上游开源项目（均为 MIT 许可）。维护者每 3 天检查一次上游更新，
有实质变化（新组件、新功能、重要修复）时合并进来，并在下方更新 SHA 与日期。

## 追踪清单

| 上游仓库 | 当前 SHA | 同步日期 | 整合内容 |
|---|---|---|---|
| [Caho1/open-claude-ui](https://github.com/Caho1/open-claude-ui) | `2834bc1` | 2026-10-15 | `src/cds/` 全部 30 组件 + `cds-theme.css` + Tailwind tokens；`ReasoningAmbientGlow` 已接入流式输出区 |
| [Damienchakma/Open-claude](https://github.com/Damienchakma/Open-claude) | `9f37bbb` | 2026-10-15 | 应用基座：`src/components` `src/context` `src/lib` `src/utils` 全量 |
| [13point5/open-artifacts](https://github.com/13point5/open-artifacts) | `c032aeb` | 2026-10-15 | 设计参考：Artifacts 生成/预览交互（其渲染器为独立包 `open-artifacts-renderer`，按需引入） |
| [sahaj-b/claudeAI-frontend-clone](https://github.com/sahaj-b/claudeAI-frontend-clone) | `7f77562` | 2026-10-15 | 参考：claude.ai 前端布局细节 |
| [Hoanganhvu123/Daisy_UI](https://github.com/Hoanganhvu123/Daisy_UI) | `b938a6e` | 2026-10-15 | 参考：组件细节 |

## 同步策略

1. 检查每个上游 `main` 分支的新提交（对比上表 SHA）。
2. 评估变更：只合并与本项目方向一致的实质更新（CDS 新组件/动效、基座功能/修复）；上游的重构或破坏性变更先在分支验证。
3. 合并后跑 `npm run build` 验证，通过才提交。
4. 更新上表 SHA/日期，并在 README 致谢表中补充说明。
5. 每次同步后通知仓库主人变更摘要。

## 同步日志

- **2026-10-15**：初始整合。基座来自 Open-claude（构建验证通过）；CDS 设计系统完整 vendored；`ReasoningAmbientGlow` 接入流式输出；主题变量与 Tailwind tokens 合并。
