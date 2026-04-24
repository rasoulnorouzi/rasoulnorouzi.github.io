---
layout: page
title: SocioCausaNet
description: Multi-task BERT model for joint causal extraction from text
img: assets/img/project-thumbnails/sociocausenet.gif
importance: 2
category: software
github: https://github.com/rasoulnorouzi/JointLearning
---

**SocioCausaNet** is a fine-tuned BERT-based multi-task model that jointly extracts causal relationships from text. It performs three tasks simultaneously: classifying whether sentences contain causal claims, identifying cause and effect spans via BIO tagging, and linking cause-effect pairs with typed relations. The model handles complex patterns including one-to-many and many-to-many cause-effect structures.

- [Hugging Face model](https://huggingface.co/rasoultilburg/SocioCausaNet)
- [Hugging Face dataset](https://huggingface.co/datasets/rasoultilburg/SocCauseEffect) — annotated causal sentence and cause–effect span dataset
- [GitHub repository](https://github.com/rasoulnorouzi/JointLearning)
- [Streamlit web app](https://github.com/rasoulnorouzi/causal_relation_miner) (PDF causal relation miner)

The model is used in production by the [MetaCheck](https://www.scienceverse.org/metacheck/report-example.html?q=causal#randomization-and-causal-claims) tool on ScienceVerse for evaluating randomization and causal claims in scientific reports. Training data includes expert-annotated sentences and the model supports multiple prediction strategies with adjustable confidence thresholds.
