#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const projectRoot = path.resolve(__dirname);

console.log('\n╔════════════════════════════════════════╗');
console.log('║  🚀 Dropship Platform - Auto Launcher   ║');
console.log('║     Running on Windows                  ║');
console.log('╚════════════════════════════════════════╝\n');

// Check Node.js
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.split('.')[0].substring(1));

if (majorVersion < 18) {
  console.error('❌ Node.js 18+ is required');
  console.error(`   You have: ${nodeVersion}`);
  console.error('   Download from: https://nodejs.org');
  process.exit(1);
}

console.log(`✅ Node.js version: ${nodeVersion}`);
console.log(`✅ npm version: ${require('child_process').execSync('npm --version', { encoding: 'utf-8' }).trim()}`);
console.log('');

// Setup Backend
async function setupBackend() {
  return new Promise((resolve) => {
    const backendPath = path.join(projectRoot, 'backend');
    console.log('📦 Setting up backend...');

    // Check node_modules
    if (!fs.existsSync(path.join(backendPath, 'node_modules'))) {
      console.log('   Installing dependencies...');
      const npm = spawn('npm', ['install'], { cwd: backendPath, stdio: 'inherit' });
      npm.on('close', (code) => {
        if (code === 0) {
          console.log('   ✅ Backend dependencies installed');
        }
        resolve();
      });
    } else {
      console.log('   ✅ Backend dependencies already installed');
      resolve();
    }
  });
}

// Setup Frontend
async function setupFrontend() {
  return new Promise((resolve) => {
    const frontendPath = path.join(projectRoot, 'frontend');
    console.log('📦 Setting up frontend...');

    if (!fs.existsSync(path.join(frontendPath, 'node_modules'))) {
      console.log('   Installing dependencies...');
      const npm = spawn('npm', ['install'], { cwd: frontendPath, stdio: 'inherit' });
      npm.on('close', (code) => {
        if (code === 0) {
          console.log('   ✅ Frontend dependencies installed');
        }
        resolve();
      });
    } else {
      console.log('   ✅ Frontend dependencies already installed');
      resolve();
    }
  });
}

// Create .env files
function setupEnvFiles() {
  const backendEnv = path.join(projectRoot, 'backend', '.env');
  const frontendEnv = path.join(projectRoot, 'frontend', '.env.local');

  if (!fs.existsSync(backendEnv)) {
    const envExample = fs.readFileSync(path.join(projectRoot, 'backend', '.env.example'), 'utf-8');
    fs.writeFileSync(backendEnv, envExample);
    console.log('   ✅ Created backend .env');
  }

  if (!fs.existsSync(frontendEnv)) {
    const envExample = fs.readFileSync(path.join(projectRoot, 'frontend', '.env.example'), 'utf-8');
    fs.writeFileSync(frontendEnv, envExample);
    console.log('   ✅ Created frontend .env.local');
  }
}

// Start servers
function startServers() {
  console.log('\n🚀 Starting servers...\n');

  const backendPath = path.join(projectRoot, 'backend');
  const frontendPath = path.join(projectRoot, 'frontend');

  // Start backend
  const backend = spawn('npm', ['run', 'dev'], { cwd: backendPath, stdio: 'inherit' });
  console.log('✅ Backend process started (PID: ' + backend.pid + ')');

  // Wait a bit before starting frontend
  setTimeout(() => {
    const frontend = spawn('npm', ['run', 'dev'], { cwd: frontendPath, stdio: 'inherit' });
    console.log('✅ Frontend process started (PID: ' + frontend.pid + ')');

    // Handle termination
    process.on('SIGINT', () => {
      console.log('\n\n🛑 Stopping servers...');
      backend.kill();
      frontend.kill();
      process.exit(0);
    });
  }, 3000);
}

// Main flow
async function main() {
  try {
    await setupBackend();
    console.log('');
    await setupFrontend();
    console.log('');
    setupEnvFiles();
    console.log('');
    startServers();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
