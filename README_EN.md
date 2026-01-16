# Oh My Droid

Minimal universal Droid toolkit - 10 Droids, 8 Commands.

## Introduction

This project is inspired by [bmadcode/BMAD-METHOD](https://github.com/bmadcode/BMAD-METHOD)'s compound engineering approach, adapted for Droid with streamlined prompts (context control matters).

**The core idea is simple:**
- First time doing a task → Explore, learn, document
- Second time doing similar task → Experienced, more efficient

Let every AI work session accumulate into reusable experience.

## Quick Install

```bash
npx oh-my-droid          # ⭐ Recommended: Install to current project (tools travel with project)
npx oh-my-droid -g       # Install globally (~/.factory)
npx oh-my-droid -u       # Uninstall
```

## Installation Details

Installation does two things:

1. **Copy tool files** - Copy Droids and Commands to `.factory` directory
2. **Update AGENTS.md** - Add usage instructions at the beginning (core commands, workflow, etc.)

### Project Install vs Global Install

| Install Type | Command | Use Case |
|--------------|---------|----------|
| Project | `npx oh-my-droid` | Single project use, tools travel with project |
| Global | `npx oh-my-droid -g` | Shared across projects, installed to `~/.factory` |

### Global Install Notes

If you choose global install, you need to manually add the following content at the beginning of your project's `AGENTS.md` for new projects:

```markdown
<coding_guidelines>
# oh-my-droid:start
# Use English for responses
## Core Commands
`/workflows-plan <description>` Create plan | `/workflows-work <plan>` Execute plan | `/workflows-review <target>` Code review | `/workflows-compound` Document learnings
## Auxiliary Commands
`/deepen-plan` Enhance plan | `/triage` Issue triage | `/resolve-parallel` Parallel resolve | `/changelog` Generate changelog
## Workflow
Plan → Work → Review → Compound | 80% planning & review, 20% execution
## Add Components
Droid: `.factory/droids/<name>.md` | Command: `.factory/commands/<name>.md`
# oh-my-droid:end
</coding_guidelines>
```

This allows AI to recognize and use these commands.

## Core Workflow

```
Plan → Work → Review → Compound
```

| Command | Description |
|---------|-------------|
| `/workflows-plan` | Create plan |
| `/workflows-work` | Execute plan |
| `/workflows-review` | Code review |
| `/workflows-compound` | Document learnings |

## Auxiliary Commands

| Command | Description |
|---------|-------------|
| `/deepen-plan` | Enhance plan |
| `/triage` | Issue triage |
| `/resolve-parallel` | Parallel resolve |
| `/changelog` | Generate changelog |

## Usage Example

Here's a complete workflow using "Add user login feature" as an example:

```
1. Create Plan
   /workflows-plan Add user login feature
   → AI analyzes requirements, generates plans/add-user-login-feature.md

2. Execute Plan
   /workflows-work plans/add-user-login-feature.md
   → AI implements code step by step

3. Code Review
   /workflows-review src/auth/
   → AI reviews code quality, suggests improvements

4. Document Learnings
   /workflows-compound
   → AI summarizes experience, updates knowledge base
```

Next time you encounter a similar task, AI will automatically apply accumulated experience for better efficiency.

---

English | [中文](./README.md)
