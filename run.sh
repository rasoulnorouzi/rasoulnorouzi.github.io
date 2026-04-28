#!/bin/bash
# Quick-start script for running the site locally

set -e

echo "🚀 Starting Rasoul Norouzi's Personal Website..."
echo "📦 Setting up Docker container..."

cd "$(dirname "$0")"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Stop any existing containers
echo "⏹️  Stopping existing containers..."
sudo docker compose down 2>/dev/null || true

# Start the development server
echo "🔨 Building and starting the development server..."
sudo docker compose up

echo "✅ Server started!"
echo "🌐 Visit: http://localhost:8080"
echo "💡 Press Ctrl+C to stop the server"
