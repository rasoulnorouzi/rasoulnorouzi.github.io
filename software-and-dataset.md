---
title: "Software and Dataset"
layout: page
---

---
### 🧪 CESSC: Causal and Non-Causal Sentence Classification

**CESSC** is a dataset and fine-tuned BERT-based model for binary classification of causal vs. non-causal sentences in social science texts.

- 📄 [Paper on arXiv](https://arxiv.org/abs/2403.02891)  
- 🧠 [Fine-tuned BERT model on Hugging Face](https://huggingface.co/rasoulnorouzi/cessc-bert)  
- 📊 [Dataset on Hugging Face](https://huggingface.co/datasets/rasoulnorouzi/cessc)  
- 💻 [GitHub Repository](https://github.com/rasoulnorouzi/cessc)

**Contents:**
- 500 causal + 500 non-causal annotated sentences (main dataset)
- 12,000 machine-labeled sentences (additional general dataset)
- Fine-tuning code for BERT-based classification models
- Evaluation scripts and performance benchmarks

---

### 🌍 AI SRT Translator – Gemini-Powered Subtitle Translator

**AI SRT Translator** is a browser-based tool that uses Google Gemini models to translate `.srt` subtitle files into multiple languages while preserving the original format and timing.

- 🔗 [Live App](https://dry-disk-f14d.rasoulnorouzi.workers.dev/)  
- 💻 [GitHub Repository](https://github.com/rasoulnorouzi/ai-srt-translator)

**Features:**
- Translate `.srt` subtitle files using Gemini 1.5 / 2.0 models
- Fully client-side interface (built with Cloudflare Workers)
- Supports multiple languages with model, temperature, and delay settings
- Keeps subtitle structure intact (no timestamp or numbering changes)

**Requirements:**
- A valid Google Gemini API key  
  → Instructions for generating it are included in the app interface

**Supported Languages:**
English, Persian, Spanish, French, Arabic, Korean, German, Italian, Russian, Turkish, Chinese (Simplified), Dutch

---
