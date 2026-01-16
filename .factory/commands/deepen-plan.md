---
name: deepen-plan
description: 深化计划，增加研究和细节
argument-hint: 计划文件路径
---

# /deepen-plan

对现有计划进行深化研究，增加技术细节和最佳实践。

## 流程

1. **读取计划** - 加载现有计划文件
2. **并行研究** - 启动多个代理深入研究
3. **增强内容** - 将研究结果整合到计划中
4. **更新文件** - 保存增强后的计划

## 并行研究代理

| 代理 | 研究方向 |
|------|----------|
| `best-practices-researcher` | 行业最佳实践 |
| `architecture-strategist` | 架构建议 |
| `security-sentinel` | 安全考虑 |
| `performance-oracle` | 性能优化 |

## 输出

更新后的计划文件，包含：
- 技术实现细节
- 最佳实践建议
- 潜在风险和缓解措施
- 参考资源链接

---

**计划文件**: $ARGUMENTS
