---
description: 生成变更日志
argument-hint: 版本号或日期范围
---

# /changelog

基于 Git 提交历史生成变更日志。

## 流程

1. 获取指定范围的 Git 提交
2. 按类型分类（feat/fix/refactor/docs）
3. 生成格式化的变更日志

## 输出格式

```markdown
## [版本号] - 日期

### 新功能
- 功能描述

### 修复
- 修复描述

### 变更
- 变更描述
```

---

**版本/范围**: $ARGUMENTS
