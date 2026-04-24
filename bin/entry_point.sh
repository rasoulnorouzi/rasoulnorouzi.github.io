#!/bin/sh

set -eu

cd /srv/jekyll

exec bundle exec jekyll serve --host 0.0.0.0 --port 8080 --livereload