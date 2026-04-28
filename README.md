# Rasoul Norouzi Personal Website

This repository contains the Jekyll source for <https://rasoulnorouzi.github.io/> using the al-folio theme.

## Quick Start - Run Locally

### Simplest Way (Recommended)

**Prerequisites:** Docker must be installed.

**One-line start:**

```bash
./run.sh
```

Then open http://localhost:8080 in your browser.

To stop: Press `Ctrl+C`

### Manual Setup

If the script doesn't work, run directly:

```bash
# First time (builds the Docker image)
sudo docker compose up --build

# Subsequent times (faster, reuses image)
sudo docker compose up
```

**Note:** If you get Docker permission errors, add your user to the docker group:
```bash
sudo usermod -aG docker $USER
newgrp docker
```
Then you can skip `sudo` in the commands above.

### Access the Site

- **Development server:** http://localhost:8080
- **Live reload:** Automatically refreshes when files change
- **Stop server:** Press `Ctrl+C`

### For Future Local Development

Simply run:
```bash
./run.sh
```

Or use one of the manual commands above. The first command is slow (builds Docker image), but subsequent runs are much faster.
