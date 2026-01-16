# Oh My Droid

Droid 工具集 - 27 个 Droids、21 个 Commands、14 个 Skills。

## 安装

```bash
# 克隆仓库
git clone https://github.com/EveryInc/oh-my-droid.git

# 复制到项目目录（项目级）
cp -r oh-my-droid/.factory /path/to/your/project/

# 或复制到用户目录（全局）
cp -r oh-my-droid/.factory ~/.factory
```

## 使用

安装后 Droid 会自动发现并加载所有组件：

- **Droids** - 自动作为子代理可用
- **Commands** - 输入 `/command-name` 调用
- **Skills** - Droid 按需自动调用

### 常用命令

```
/lfg              # 完整自动化工作流
/workflows:plan   # 创建实施计划
/workflows:work   # 执行实施
/workflows:review # 代码审查
```

## 文档

- [AGENTS.md](./AGENTS.md) - 详细使用说明
- [Factory 文档](https://docs.factory.ai)

---

[English](./README_EN.md) | 中文
