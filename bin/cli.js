#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const isUninstall = args.includes('--uninstall') || args.includes('-u');
const isGlobal = args.includes('--global') || args.includes('-g');
const isHelp = args.includes('--help') || args.includes('-h');

const AGENTS_MARKER = '# oh-my-droid:start';
const AGENTS_END_MARKER = '# oh-my-droid:end';

const packageRoot = path.join(__dirname, '..');
const targetDir = isGlobal 
  ? path.join(process.env.HOME || process.env.USERPROFILE, '.factory')
  : path.join(process.cwd(), '.factory');
const agentsTarget = isGlobal
  ? path.join(process.env.HOME || process.env.USERPROFILE, 'AGENTS.md')
  : path.join(process.cwd(), 'AGENTS.md');

function showHelp() {
  console.log(`
oh-my-droid - Droid toolkit installer

Usage:
  npx oh-my-droid [options]

Options:
  -g, --global     Install to ~/.factory (global)
  -u, --uninstall  Remove oh-my-droid components
  -h, --help       Show this help

Examples:
  npx oh-my-droid           # Install to current project
  npx oh-my-droid -g        # Install globally
  npx oh-my-droid -u        # Uninstall from current project
  npx oh-my-droid -u -g     # Uninstall globally
`);
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function removeDir(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

function getAgentsContent() {
  const agentsPath = path.join(packageRoot, 'AGENTS.md');
  const content = fs.readFileSync(agentsPath, 'utf8');
  return `${AGENTS_MARKER}\n${content}\n${AGENTS_END_MARKER}`;
}

function install() {
  console.log(`Installing oh-my-droid to ${isGlobal ? 'global' : 'project'}...`);
  
  // Copy .factory directory
  const srcFactory = path.join(packageRoot, '.factory');
  const subdirs = ['droids', 'commands', 'skills'];
  
  for (const subdir of subdirs) {
    const src = path.join(srcFactory, subdir);
    const dest = path.join(targetDir, subdir);
    if (fs.existsSync(src)) {
      copyDir(src, dest);
      console.log(`  Copied ${subdir}/`);
    }
  }
  

  
  // Update AGENTS.md
  const agentsContent = getAgentsContent();
  if (fs.existsSync(agentsTarget)) {
    let existing = fs.readFileSync(agentsTarget, 'utf8');
    // Remove old oh-my-droid content if exists
    const startIdx = existing.indexOf(AGENTS_MARKER);
    const endIdx = existing.indexOf(AGENTS_END_MARKER);
    if (startIdx !== -1 && endIdx !== -1) {
      existing = existing.slice(0, startIdx) + existing.slice(endIdx + AGENTS_END_MARKER.length);
      existing = existing.trim();
    }
    // Prepend new content
    fs.writeFileSync(agentsTarget, agentsContent + '\n\n' + existing);
    console.log('  Updated AGENTS.md');
  } else {
    fs.writeFileSync(agentsTarget, agentsContent);
    console.log('  Created AGENTS.md');
  }
  
  console.log('\nInstalled successfully!');
  console.log('Run `npx oh-my-droid -u` to uninstall.');
}

function uninstall() {
  console.log(`Uninstalling oh-my-droid from ${isGlobal ? 'global' : 'project'}...`);
  
  // Remove subdirectories
  const subdirs = ['droids', 'commands', 'skills'];
  for (const subdir of subdirs) {
    const dir = path.join(targetDir, subdir);
    if (fs.existsSync(dir)) {
      removeDir(dir);
      console.log(`  Removed ${subdir}/`);
    }
  }
  
  // Remove oh-my-droid content from AGENTS.md
  if (fs.existsSync(agentsTarget)) {
    let content = fs.readFileSync(agentsTarget, 'utf8');
    const startIdx = content.indexOf(AGENTS_MARKER);
    const endIdx = content.indexOf(AGENTS_END_MARKER);
    if (startIdx !== -1 && endIdx !== -1) {
      content = content.slice(0, startIdx) + content.slice(endIdx + AGENTS_END_MARKER.length);
      content = content.trim();
      if (content) {
        fs.writeFileSync(agentsTarget, content);
        console.log('  Cleaned AGENTS.md');
      } else {
        fs.unlinkSync(agentsTarget);
        console.log('  Removed empty AGENTS.md');
      }
    }
  }
  
  console.log('\nUninstalled successfully!');
}

// Main
if (isHelp) {
  showHelp();
} else if (isUninstall) {
  uninstall();
} else {
  install();
}
