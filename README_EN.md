# Oh My Droid

Droid toolkit - 27 Droids, 21 Commands, 14 Skills.

## Installation

```bash
# Clone repository
git clone https://github.com/EveryInc/oh-my-droid.git

# Copy to project directory (project-level)
cp -r oh-my-droid/.factory /path/to/your/project/

# Or copy to home directory (global)
cp -r oh-my-droid/.factory ~/.factory
```

## Usage

After installation, Droid automatically discovers and loads all components:

- **Droids** - Available as subagents automatically
- **Commands** - Invoke with `/command-name`
- **Skills** - Droid invokes on demand

### Common Commands

```
/lfg              # Full autonomous workflow
/workflows:plan   # Create implementation plan
/workflows:work   # Execute implementation
/workflows:review # Code review
```

## Documentation

- [AGENTS.md](./AGENTS.md) - Detailed usage guide
- [Factory Docs](https://docs.factory.ai)

---

English | [中文](./README.md)
