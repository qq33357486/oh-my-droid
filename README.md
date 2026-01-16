# Oh My Droid

精简通用 Droid 工具集 - 10 个 Droids、8 个 Commands。

## 项目介绍

本项目借鉴了 [bmadcode/BMAD-METHOD](https://github.com/bmadcode/BMAD-METHOD) 的复利工程思路，适配 Droid 并精简了提示词（上下文控制很重要）。

**核心理念很简单：**
- 第一次做某类任务 → 探索、学习、记录
- 第二次做同类任务 → 有经验、更高效

让 AI 的每一次工作都能积累成可复用的经验。

## 一键安装

```bash
npx oh-my-droid          # ⭐ 推荐：安装到当前项目（工具随项目走）
npx oh-my-droid -g       # 安装到全局 (~/.factory)
npx oh-my-droid -u       # 卸载
```

## 安装说明

安装时会做两件事：

1. **复制工具文件** - 将 Droids 和 Commands 复制到 `.factory` 目录
2. **更新 AGENTS.md** - 在文件开头添加使用说明（核心命令、工作流程等）

### 项目安装 vs 全局安装

| 安装方式 | 命令 | 适用场景 |
|---------|------|---------|
| 项目安装 | `npx oh-my-droid` | 单个项目使用，工具随项目走 |
| 全局安装 | `npx oh-my-droid -g` | 多个项目共用，安装到 `~/.factory` |

### 全局安装注意事项

如果你选择全局安装，开新项目时需要手动在项目的 `AGENTS.md` 开头添加以下内容：

```markdown
<coding_guidelines>
# oh-my-droid:start
# 使用中文回答
## 核心命令
`/workflows-plan <描述>` 创建计划 | `/workflows-work <计划>` 执行计划 | `/workflows-review <目标>` 代码审查 | `/workflows-compound` 记录学习
## 辅助命令
`/deepen-plan` 深化计划 | `/triage` 问题分类 | `/resolve-parallel` 并行解决 | `/changelog` 变更日志
## 工作流程
Plan → Work → Review → Compound | 80%规划审查，20%执行
## 添加组件
Droid: `.factory/droids/<名称>.md` | Command: `.factory/commands/<名称>.md`
# oh-my-droid:end
</coding_guidelines>
```

这样 AI 才能识别并使用这些命令。

## 核心工作流

```
Plan → Work → Review → Compound
```

| 命令 | 说明 |
|------|------|
| `/workflows-plan` | 创建计划 |
| `/workflows-work` | 执行计划 |
| `/workflows-review` | 代码审查 |
| `/workflows-compound` | 记录学习 |

## 辅助命令

| 命令 | 说明 |
|------|------|
| `/deepen-plan` | 深化计划 |
| `/triage` | 问题分类 |
| `/resolve-parallel` | 并行解决 |
| `/changelog` | 变更日志 |

---

[English](./README_EN.md) | 中文
