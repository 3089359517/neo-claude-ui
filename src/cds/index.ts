/**
 * Open Claude UI (open-claude-ui)
 * Clean-room reverse-engineered implementation of the Claude Design System (CDS).
 * High-fidelity components, physics-based motion presets, and architectural hooks.
 */

// 1. Foundational Atoms & Controls
export * from './CdsButton';
export * from './SegmentedControl';
export * from './StatusIndicators';
export * from './ConfirmationDialog';
export * from './AttachmentCard';

// 2. Chat Stream & Composer Engine
export * from './ChatComposer';
export * from './ChatMessageBubbles';
export * from './ThinkingAccordion';
export * from './RichComposerWithMentions';
export * from './ModelSwitcherWithTokenGauge';
export * from './McpToolDecisionCard';

// 3. Motion Physics, Shaders & Shading
export * from './ClaudeMotionPresets';
export * from './ReasoningAmbientGlow';
export * from './ScrollFadeContainer';

// 4. Audiovisual & Artifacts Experience
export * from './ClaudeAudioPlayer';
export * from './LiveMicActivityBars';
export * from './MediaLightboxViewer';
export * from './useClaudeSharedElementTransition';
export * from './ArtifactsSplitPaneResizer';
export * from './EpitaxyIframeBridge';
export * from './StreamingDiffViewer';
export * from './CodeBlock';

// 5. Desktop Host Architecture & Multi-Agent Topology
export * from './ClaudeDesktopHeader';
export * from './DraggableSessionList';
export * from './CoworkAgentCanvas';
export * from './useClaudeScrollPinning';
export * from './ContainerResponsiveBar';
export * from './useClaudeRovingFocus';
export * from './useRateLimitBackoff';

// 6. CDS 2.0 Architectural Modules & Reasoning Controls
export * from './ModelSelectorEffort';
export * from './ChatComposerChin';
export * from './CdsMotionEngine';
