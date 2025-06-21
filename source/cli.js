#!/usr/bin/env node

const { execSync } = require('child_process');

console.log('🚀 Redirecting to the new Scott Kosman CLI...\n');

try {
	// Run the new scottkosman CLI
	execSync('npx scottkosman', { stdio: 'inherit' });
} catch (error) {
	console.error('❌ Error: Could not run scottkosman CLI');
	console.error('Please try running: npx scottkosman');
	process.exit(1);
}
