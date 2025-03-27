---
title: "Software and Datasets"
layout: page
---

## Academic Software and Datasets

### CESSC: Causal and Non-Causal Sentence Classification

The **CESSC** project provides a curated dataset and a fine-tuned BERT-based model for binary classification of causal and non-causal sentences within social science texts.

- 📄 [Published Article](https://www.cambridge.org/core/journals/research-synthesis-methods/article/capturing-causal-claims-a-finetuned-text-mining-model-for-extracting-causal-sentences-from-social-science-papers/E76E6EFB3373DE4FE6D9DCDB56271CEE?utm_campaign=shareaholic&utm_medium=copy_link&utm_source=bookmark)  
- 🧠 [Fine-tuned BERT Model (Hugging Face)](https://huggingface.co/rasoultilburg/ssc_bert)  
- 📊 [Dataset: Hugging Face](https://huggingface.co/datasets/rasoultilburg/ssc) or [GitHub](https://github.com/rasoulnorouzi/cessc/tree/main/datasets)  
- 💻 [Source Code Repository](https://github.com/rasoulnorouzi/cessc)

**Dataset and Codebase Highlights:**
- 1,000 manually annotated sentences (500 causal + 500 non-causal)
- 12,000 machine-labeled sentences (supplementary general dataset)
- Scripts for model fine-tuning and evaluation
- Benchmarks and performance metrics included

---

### AI SRT Translator: Gemini-Powered Subtitle Translation Tool

The **AI SRT Translator** is a browser-based application designed to translate `.srt` subtitle files into multiple languages using Google Gemini models, while preserving formatting and timing.

- 🔗 [Live Application](https://dry-disk-f14d.rasoulnorouzi.workers.dev/)  
- 💻 [GitHub Repository](https://github.com/rasoulnorouzi/srt-ai-translator)

**Key Features:**
- Subtitle translation powered by Gemini 1.5/2.0 language models
- Operates entirely on the client-side via Cloudflare Workers
- Preserves original subtitle format (timestamps and numbering)
- Adjustable translation settings (temperature, model type, delay)

**Requirements:**
- A valid Google Gemini API key (see app interface for setup instructions)

**Supported Languages:**  
English, Persian, Spanish, French, Arabic, Korean, German, Italian, Russian, Turkish, Chinese (Simplified), Dutch

---

## Upcoming Projects

Several tools and research resources are currently in development, including:

- **DAG Generator**: Automated generation of directed acyclic graphs (DAGs) from causal texts  
- **Meta-Science RAG**: A custom retrieval-augmented generation (RAG) pipeline for supporting theory-building in the social sciences
