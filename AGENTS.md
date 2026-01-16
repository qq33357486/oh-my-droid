# Oh My Droid - Compound Engineering Toolkit

> AI-powered development tools that get smarter with every use. Make each unit of engineering work easier than the last.

## Philosophy: Compounding Engineering

**Each unit of engineering work should make subsequent units of work easier—not harder.**

When working with this toolkit, follow the compounding engineering process:

1. **Plan** → Understand the change needed and its impact
2. **Delegate** → Use AI tools to help with implementation
3. **Assess** → Verify changes work as expected
4. **Codify** → Update documentation with learnings

## Repository Structure

```
oh-my-droid/
├── .factory/
│   ├── droids/           # 27 specialized AI subagents
│   │   ├── review/       # Code review specialists
│   │   ├── research/     # Research and analysis agents
│   │   ├── workflow/     # Workflow automation agents
│   │   ├── design/       # Design implementation agents
│   │   └── docs/         # Documentation agents
│   ├── commands/         # 21 custom slash commands
│   │   └── workflows/    # Multi-step workflow commands
│   ├── skills/           # 14 reusable skills
│   └── mcp.json          # MCP server configuration
├── AGENTS.md             # This file - project instructions
└── README.md             # Project documentation
```

## Using This Toolkit

### Custom Droids (Subagents)

Droids are specialized AI agents that can be delegated specific tasks. They live in `.factory/droids/`.

**Categories:**
- **review/** - Code review specialists (Rails, Python, TypeScript, security, performance)
- **research/** - Research analysts (git history, framework docs, best practices)
- **workflow/** - Workflow automation (PR resolution, linting, bug reproduction)
- **design/** - Design implementation (Figma sync, design iteration)
- **docs/** - Documentation writers

**Usage:** Droid will automatically discover and use these subagents when appropriate.

### Custom Slash Commands

Commands are reusable prompts triggered with `/command-name`. They live in `.factory/commands/`.

**Key Commands:**
- `/lfg` - Full autonomous engineering workflow
- `/workflows:plan` - Create implementation plan
- `/workflows:work` - Execute implementation
- `/workflows:review` - Review changes
- `/resolve_todo_parallel` - Resolve TODOs in parallel
- `/test-browser` - Run browser tests

### Skills

Skills are domain expertise that Droid can invoke on demand. They live in `.factory/skills/`.

**Available Skills:**
- `gemini-imagegen` - Image generation with Gemini API
- `agent-browser` - Browser automation
- `dhh-rails-style` - DHH's Rails conventions
- `agent-native-architecture` - Agent-native design patterns
- `create-agent-skills` - Create new skills
- And more...

### MCP Servers

MCP (Model Context Protocol) servers extend Droid's capabilities. Configured in `.factory/mcp.json`.

**Configured Servers:**
- `context7` - Documentation context server

## Development Guidelines

### Adding a New Droid

1. Create `.factory/droids/[category]/[name].md`
2. Add YAML frontmatter with `name`, `description`, and optionally `model` and `tools`
3. Write the system prompt in Markdown

**Example:**
```markdown
---
name: my-reviewer
description: Reviews code for specific patterns
model: inherit
tools: ["Read", "Grep", "Glob"]
---

You are a code reviewer specialized in...
```

### Adding a New Command

1. Create `.factory/commands/[name].md`
2. Add YAML frontmatter with `name`, `description`, and optionally `argument-hint`
3. Write the command instructions

**Example:**
```markdown
---
name: my-command
description: Does something useful
argument-hint: "[optional args]"
---

Execute these steps...
```

### Adding a New Skill

1. Create `.factory/skills/[name]/SKILL.md`
2. Add YAML frontmatter with `name` and `description`
3. Write the skill documentation
4. Optionally add `scripts/`, `references/`, `templates/`, `workflows/` subdirectories

## Commit Conventions

Follow these patterns for commit messages:

- `Add [component name]` - Adding new functionality
- `Remove [component name]` - Removing functionality
- `Update [file] to [what changed]` - Updating existing files
- `Fix [issue]` - Bug fixes
- `Simplify [component] to [improvement]` - Refactoring

## Resources

- [Factory Documentation](https://docs.factory.ai)
- [Custom Droids Guide](https://docs.factory.ai/cli/configuration/custom-droids)
- [Custom Slash Commands](https://docs.factory.ai/cli/configuration/custom-slash-commands)
- [Skills Documentation](https://docs.factory.ai/cli/configuration/skills)
- [MCP Configuration](https://docs.factory.ai/cli/configuration/mcp)
