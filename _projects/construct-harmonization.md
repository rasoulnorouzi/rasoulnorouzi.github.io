---
layout: page
title: Social Science Construct Harmonization
description: Benchmarking ML models for merging heterogeneous social science concepts
img: assets/img/project-thumbnails/construct-harmonization.png
importance: 3
category: software
github: https://github.com/rasoulnorouzi/Social_Science_Construct_Harmonization
---

**Social Science Construct Harmonization** evaluates machine learning models for concept integration — merging heterogeneous social science terms like "Insomnia" and "Sleeping Disorders" into standardized, unified constructs. The project uses a factorial experimental design testing five vector representation models against three harmonization strategies, with an evaluation framework assessing performance, reliability, and bias.

- [Live web application](https://rasoulnorouzi.github.io/Social_Science_Construct_Harmonization/)
- [GitHub repository](https://github.com/rasoulnorouzi/Social_Science_Construct_Harmonization)

The companion webapp is a fully client-side tool for clustering conceptual terms and mapping them to the ELSST thesaurus hierarchy. It offers three techniques:

- **Pairwise** and **HDBSCAN** (with UMAP dimensionality reduction): with default best-calibrated hyperparameters, these methods cluster related constructs by semantic similarity directly in the embedding space (powered by All-MPNet-Base-v2).
- **ELSST Lookup**: based on the ELSST thesaurus, this mode standardizes a user's input query and maps it to the most similar concept within the taxonomy, with an optional two-stage cross-encoder re-ranking pipeline using `ms-marco-MiniLM-L-6-v2` for more accurate matching.
