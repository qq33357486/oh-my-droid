---
name: workflows-compound
description: 记录解决的问题，积累知识
argument-hint: "[可选: 问题简述]"
---

# /workflows-compound

记录解决的问题，让知识复合增长。每次记录都让下次遇到类似问题更快解决。

## 理念

**复合工程**：第一次解决问题需要研究（30分钟），记录后下次只需查找（2分钟）。

## 触发时机

**自动触发短语**：
- "搞定了"、"修好了"、"问题解决了"、"可以了"

**手动触发**：
- `/workflows-compound [问题简述]`

**只记录非平凡问题**：
- 需要多次尝试才解决的
- 解决方案不明显的
- 未来会再次遇到的

## 流程

### 1. 收集上下文

从对话历史提取：
- **问题症状**：确切的错误信息、可观察的行为
- **尝试过的方法**：什么没用、为什么
- **根本原因**：技术层面的解释
- **解决方案**：具体的修复步骤和代码
- **预防措施**：如何避免再次发生

### 2. 检查已有文档

```bash
# 搜索类似问题
grep -r "关键词" docs/solutions/
```

如果找到类似问题，选择：
1. 创建新文档并交叉引用（推荐）
2. 更新已有文档（仅当根因相同）

### 3. 分类并创建文档

**问题类型（自动分类到对应目录）**：

| problem_type | 目录 | 说明 |
|--------------|------|------|
| build_error | build-errors/ | 构建、编译错误 |
| test_failure | test-failures/ | 测试失败 |
| runtime_error | runtime-errors/ | 运行时错误 |
| performance_issue | performance-issues/ | 性能问题 |
| database_issue | database-issues/ | 数据库问题 |
| security_issue | security-issues/ | 安全问题 |
| ui_bug | ui-bugs/ | 界面问题 |
| integration_issue | integration-issues/ | 集成问题 |
| logic_error | logic-errors/ | 逻辑错误 |
| config_issue | config-issues/ | 配置问题 |

### 4. 生成文件

**文件路径**：`docs/solutions/[category]/[slug]-[YYYYMMDD].md`

**文件格式**（YAML frontmatter + Markdown）：

```markdown
---
date: 2025-01-15
problem_type: performance_issue
component: database
symptoms:
  - "查询超时"
  - "N+1 查询"
root_cause: missing_eager_loading
severity: moderate  # critical | moderate | minor
tags: [n-plus-one, eager-loading, rails]
related: []  # 相关文档路径
---

# N+1 查询导致页面加载缓慢

## 问题

[描述遇到的问题，包含确切错误信息]

## 尝试过的方法

1. [方法1] - 结果：[没用/部分有效]
2. [方法2] - 结果：[没用/部分有效]

## 根本原因

[技术层面的解释]

## 解决方案

[具体步骤和代码示例]

```ruby
# 修复前
User.all.each { |u| puts u.posts.count }

# 修复后
User.includes(:posts).each { |u| puts u.posts.count }
```

## 预防措施

- [如何避免再次发生]
- [相关的最佳实践]

## 相关文档

- [链接到相关问题]
```

## 完成后选项

```
✓ 文档已创建

文件：docs/solutions/performance-issues/n-plus-one-query-20250115.md

下一步？
1. 继续工作流（推荐）
2. 添加到关键模式 - 提升到 patterns/critical-patterns.md
3. 关联相关文档
4. 查看文档
5. 其他
```

**选项 2：添加到关键模式**

当问题满足以下条件时推荐：
- 多次在不同地方犯同样的错
- 解决方案不明显但必须遵循
- 基础性要求

会添加到 `docs/solutions/patterns/critical-patterns.md`，格式：

```markdown
## [模式名称]

❌ 错误做法：
```code
[错误示例]
```

✅ 正确做法：
```code
[正确示例]
```

**原因**：[为什么这样做]
```

## 检索已有知识

下次遇到类似问题时：

```bash
# 按目录浏览
ls docs/solutions/performance-issues/

# 按关键词搜索
grep -r "N+1" docs/solutions/

# 按标签搜索
grep -r "tags:.*eager-loading" docs/solutions/
```

## 目录结构

```
docs/solutions/
├── build-errors/
├── test-failures/
├── runtime-errors/
├── performance-issues/
├── database-issues/
├── security-issues/
├── ui-bugs/
├── integration-issues/
├── logic-errors/
├── config-issues/
└── patterns/
    └── critical-patterns.md  # 关键模式（会被 AI 主动读取）
```

## 上下文优化

- **按需加载**：文档存在 `docs/solutions/`，不放 AGENTS.md
- **分类检索**：遇到性能问题只搜 `performance-issues/`
- **YAML frontmatter**：快速扫描元数据，不需读全文
- **关键模式分离**：只有 `critical-patterns.md` 会被主动加载

---

**问题描述**: $ARGUMENTS
