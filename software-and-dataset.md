---
title: "Software and Dataset"
layout: page
---

## 🎓 Academic Projects

### 🧪 CESSC: Causal and Non-Causal Sentence Classification

**CESSC** is a dataset and fine-tuned BERT-based model for binary classification of causal vs. non-causal sentences in social science texts.

- 📄 [Paper](https://www.cambridge.org/core/journals/research-synthesis-methods/article/capturing-causal-claims-a-finetuned-text-mining-model-for-extracting-causal-sentences-from-social-science-papers/E76E6EFB3373DE4FE6D9DCDB56271CEE?utm_campaign=shareaholic&utm_medium=copy_link&utm_source=bookmark)  
- 🧠 [Fine-tuned BERT model on Hugging Face](https://huggingface.co/rasoultilburg/ssc_bert)  
- 📊 [Dataset on Hugging Face](https://huggingface.co/datasets/rasoultilburg/ssc) or [GitHub Page](https://github.com/rasoulnorouzi/cessc/tree/main/datasets)  
- 💻 [GitHub Repository](https://github.com/rasoulnorouzi/cessc)

**Contents:**
- 500 causal + 500 non-causal annotated sentences (main dataset)
- 12,000 machine-labeled sentences (additional general dataset)
- Fine-tuning code for BERT-based classification
- Evaluation scripts and performance benchmarks

---

## 🧪 Fun & Practical Tools

### 🌍 AI SRT Translator – Gemini-Powered Subtitle Translator

**AI SRT Translator** is a browser-based tool that uses Google Gemini models to translate `.srt` subtitle files into multiple languages while preserving the original format and timing.

- 🔗 [Live App](https://dry-disk-f14d.rasoulnorouzi.workers.dev/)  
- 💻 [GitHub Repository](https://github.com/rasoulnorouzi/srt-ai-translator)

**Features:**
- Translate `.srt` subtitle files using Gemini 1.5 / 2.0 models
- Fully client-side interface (built with Cloudflare Workers)
- Supports multiple languages with model, temperature, and delay settings
- Preserves subtitle structure (timestamps & numbering)

**Requirements:**
- A valid Google Gemini API key  
  → Instructions for generating it are included in the app interface

**Supported Languages:**
English, Persian, Spanish, French, Arabic, Korean, German, Italian, Russian, Turkish, Chinese (Simplified), Dutch

---

## 🧪 Coming Soon...

Some upcoming projects include:

- 🧭 **DAG Generator** – Automatically build directed acyclic graphs from causal texts  
- 🧠 **Meta-Science RAG** – A customized retrieval-augmented generation agentic pipeline for theory-building in social science  
