# Oh My Droid

> AI-powered development toolkit for Factory Droid - Compound Engineering tools that get smarter with every use.

## What's Inside

| Component | Count | Description |
|-----------|-------|-------------|
| **Droids** | 27 | Specialized AI subagents for code review, research, design, and workflow |
| **Commands** | 21 | Custom slash commands for common workflows |
| **Skills** | 14 | Reusable domain expertise and capabilities |
| **MCP Servers** | 1 | Extended tool integrations |

## Quick Start

1. Clone this repository into your project or home directory:
   ```bash
   git clone https://github.com/EveryInc/oh-my-droid.git
   ```

2. Copy the `.factory` directory to your project:
   ```bash
   cp -r oh-my-droid/.factory /path/to/your/project/
   ```

   Or for personal (global) use:
   ```bash
   cp -r oh-my-droid/.factory ~/.factory
   ```

3. Start using the tools with Droid CLI!

## Featured Components

### Droids (Subagents)

**Code Review:**
- `kieran-rails-reviewer` - Rails code review with high quality bar
- `kieran-python-reviewer` - Python code review specialist
- `kieran-typescript-reviewer` - TypeScript/JavaScript reviewer
- `security-sentinel` - Security vulnerability detection
- `performance-oracle` - Performance optimization expert

**Research:**
- `best-practices-researcher` - Research best practices for any topic
- `framework-docs-researcher` - Deep dive into framework documentation
- `git-history-analyzer` - Analyze git history for patterns

**Workflow:**
- `pr-comment-resolver` - Resolve PR comments automatically
- `bug-reproduction-validator` - Validate bug reproductions
- `lint` - Automated linting and fixing

### Commands

- `/lfg` - Full autonomous engineering workflow (plan → work → review → test)
- `/workflows:plan` - Create detailed implementation plan
- `/workflows:work` - Execute implementation with best practices
- `/workflows:review` - Comprehensive code review
- `/resolve_todo_parallel` - Resolve all TODOs in parallel
- `/test-browser` - Run browser automation tests

### Skills

- `gemini-imagegen` - Generate images with Google Gemini API
- `agent-browser` - Browser automation for testing
- `dhh-rails-style` - DHH's Rails conventions and patterns
- `agent-native-architecture` - Design patterns for AI-native applications
- `create-agent-skills` - Meta-skill for creating new skills

## Philosophy

**Compounding Engineering**: Each unit of engineering work should make subsequent units of work easier—not harder.

1. **Plan** → Understand the change needed
2. **Delegate** → Use AI tools effectively
3. **Assess** → Verify changes work
4. **Codify** → Document learnings

## Documentation

See [AGENTS.md](./AGENTS.md) for detailed usage instructions and development guidelines.

## Resources

- [Factory Documentation](https://docs.factory.ai)
- [Custom Droids Guide](https://docs.factory.ai/cli/configuration/custom-droids)
- [Skills Documentation](https://docs.factory.ai/cli/configuration/skills)

## License

MIT
