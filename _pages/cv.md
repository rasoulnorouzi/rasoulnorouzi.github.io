---
layout: page
permalink: /cv/
title: CV
nav: true
nav_order: 5
description: academic curriculum vitae.
_styles: >
  .post-header {
    display: none;
  }
  .cv-header {
    display: flex;
    justify-content: space-between;
    gap: 1.5rem;
    align-items: flex-start;
    border-bottom: 1px solid var(--global-divider-color);
    padding-bottom: 1rem;
    margin-bottom: 1.75rem;
  }
  .cv-header h2 {
    margin-bottom: 0.25rem;
  }
  .cv-contact {
    text-align: right;
    font-size: 0.95rem;
  }
  .cv-section {
    margin-top: 2rem;
  }
  .cv-item {
    margin-bottom: 1.35rem;
  }
  .cv-item-header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: baseline;
  }
  .cv-item-header h3 {
    margin: 0;
    font-size: 1.05rem;
  }
  .cv-date {
    color: var(--global-text-color-light);
    white-space: nowrap;
    font-size: 0.95rem;
  }
  .cv-subtitle {
    color: var(--global-text-color-light);
    margin: 0.25rem 0 0.4rem;
  }
  .cv-publications li {
    margin-bottom: 0.75rem;
  }
  @media (max-width: 576px) {
    .cv-header,
    .cv-item-header {
      display: block;
    }
    .cv-contact {
      text-align: left;
      margin-top: 0.75rem;
    }
    .cv-date {
      display: block;
      margin-top: 0.2rem;
    }
  }
---

<div class="cv-header">
  <div>
    <h2>Rasoul Norouzi, M.Sc., Ing.</h2>
    <p class="cv-subtitle">Ph.D. Candidate in Social Science, Department of Methodology and Statistics, University of Tilburg, Netherlands</p>
  </div>
  <div class="cv-contact">
    <a href="mailto:r.norouzinikjeh@tilburguniversity.edu">r.norouzinikjeh@tilburguniversity.edu</a><br>
    <a href="{{ '/assets/pdf/rasoul_norouzi_cv.pdf' | relative_url }}">Download PDF CV</a>
  </div>
</div>

## Education
{:.cv-section}

<div class="cv-item">
  <div class="cv-item-header">
    <h3>Ph.D. Candidate in Social Science</h3>
    <span class="cv-date">Expected completion: January 2027</span>
  </div>
  <p class="cv-subtitle">Department of Methodology and Statistics, University of Tilburg, Netherlands</p>
  <p><strong>Supervisors:</strong> Dr. Caspar van Lissa, Dr. Bennett Kleinberg, Prof. Dr. Jeroen Vermunt.</p>
  <p><strong>Research focus:</strong> My PhD research centers on enhancing theory development in social science through the integration of systematic text mining reviews with advanced computational models, specifically Large Language Models (LLMs) and Graph Neural Networks (GNNs). This approach is designed to overcome traditional biases by extracting and analyzing causal relationships from textual data, thereby facilitating the generation of innovative behavioral hypotheses and contributing to theory advancement with comprehensive, data-driven insights.</p>
</div>

<div class="cv-item">
  <div class="cv-item-header">
    <h3>M.Sc. by Research, Information Technology (IT)</h3>
    <span class="cv-date">2016-2019</span>
  </div>
  <p class="cv-subtitle">Tarbiat Modares University of Tehran, Iran</p>
  <p><strong>Supervisors:</strong> Dr. Amir Albadvi, Dr. Elham Akhondzadeh.</p>
  <p><strong>Thesis:</strong> My master's thesis introduced an innovative method combining ontology and multilabel classifiers to mitigate cold start and matrix sparsity issues in recommender systems, achieving enhanced accuracy in predicting user interests over traditional collaborative filtering models.</p>
</div>

## Teaching Experience
{:.cv-section}

<div class="cv-item">
  <div class="cv-item-header">
    <h3>Teaching Assistant, Computational Statistics with R</h3>
    <span class="cv-date">Oct 2023-present</span>
  </div>
  <p class="cv-subtitle">Tilburg University</p>
  <p>Sampling, Monte Carlo simulation, bootstrapping, permutation tests, clustering, PCA.</p>
</div>

<div class="cv-item">
  <div class="cv-item-header">
    <h3>Bachelor Thesis Supervisor</h3>
    <span class="cv-date">Sep 2024-Feb 2025</span>
  </div>
  <p class="cv-subtitle">TU Eindhoven, Computer Science</p>
  <p>Two theses extending the PhD pipeline: clustering of causal concepts with HDBSCAN + BERTopic (8.5/10); domain-shift mitigation via fine-tuning (8/10).</p>
</div>

## Research Interests
{:.cv-section}

- Interdisciplinary research in AI and the social sciences
- Text mining and machine learning applications in theoretical framework development
- Data-driven insights for social science research

## Technical Skills
{:.cv-section}

<div class="cv-item">
  <h3>Programming and Scripting</h3>
  <ul>
    <li><strong>Python (Advanced):</strong> implementing machine learning packages, mathematical operations, loading and manipulating data, web scraping, and crawling web data.</li>
    <li><strong>JavaScript (Intermediate):</strong> writing functions, methods, and objects, including implementing TensorFlow.js in the browser.</li>
    <li><strong>R (Intermediate):</strong> statistical computation, including simulations and hypothesis testing.</li>
  </ul>
</div>

<div class="cv-item">
  <h3>Tools and Software</h3>
  <ul>
    <li><strong>Data science and machine learning tools:</strong> proficient with NumPy, Pandas, SciPy, scikit-learn, TensorFlow, PyTorch, NLTK, Hugging Face, and Matplotlib for advanced data analysis and model development.</li>
    <li><strong>Web and DB technologies:</strong> basic knowledge of React, HTML, CSS3, and SQL; understanding of web application development, with limited experience in building progressive web applications powered by machine learning algorithms.</li>
    <li><strong>Other technical skills:</strong> version control with Git and GitHub, including cloning, forking, pushing, and pulling.</li>
  </ul>
</div>

## Publications
{:.cv-section}

<ol class="cv-publications">
  <li><strong>Norouzi, R.</strong>, Kleinberg, B., Van Lissa, C. J., &amp; Vermunt, J. (2024, April 10). Capturing Causal Claims: A Fine-Tuned Text Mining Model for Extracting Causal Sentences from Social Science Papers. <a href="https://www.cambridge.org/core/journals/research-synthesis-methods/article/capturing-causal-claims-a-finetuned-text-mining-model-for-extracting-causal-sentences-from-social-science-papers/E76E6EFB3373DE4FE6D9DCDB56271CEE?utm_campaign=shareaholic&amp;utm_medium=copy_link&amp;utm_source=bookmark">Link</a>.</li>
  <li>Joireman, J., Van Lissa, C. J., Van Lange, P. A. M., Kleinberg, B., <strong>Norouzi, R.</strong>, &amp; Balliet, D. (2024, April). A text mining systematic review of the social dilemma literature. <em>Psychological Bulletin</em>.</li>
  <li><strong>Norouzi, R.</strong>, Baziyad, H., Akhondzadeh, E., &amp; Albadvi, A. (2022). Developing tourism users profiles with data-driven explicit information. <a href="https://onlinelibrary.wiley.com/doi/10.1155/2022/6536908">Link</a>.</li>
  <li>Hosseini, S. M. R., Baziyad, H., <strong>Norouzi, R.</strong>, et al. (2021). Mapping the intellectual structure of GIS-T field (2008-2019): A dynamic co-word analysis. <em>Scientometrics</em>. <a href="https://link.springer.com/article/10.1007%2Fs11192-020-03840-8">Link</a>.</li>
  <li>Baziyad, H., <strong>Norouzi, R.</strong>, &amp; Albadvi, A. Mapping the Intellectual Structure of the Internet of Things (IoT) Field Based on Web Content: A Co-word Analysis. 4th International Congress of Electrical, Computer and Mechanical Engineering. <a href="https://www.researchgate.net/publication/343787997_Mapping_the_intellectual_structure_of_the_Internet_of_Things_IoT_field_based_on_web_content_a_co-word_analysis">Link</a>.</li>
  <li>Baziyad, H., Shirazi, S., Hosseini, S. M. R., &amp; <strong>Norouzi, R.</strong> (2019). Mapping the intellectual structure of epidemiology with use of co-word analysis. <em>Journal of Biostatistics and Epidemiology</em>. <a href="https://publish.kne-publishing.com/index.php/jbe/article/view/3618">Link</a>.</li>
</ol>

<div class="title" style="text-align: center;">
  <img style="display: inline-block; width:50%; height:auto; padding-bottom:20px;" src="https://media.giphy.com/media/ZVik7pBtu9dNS/giphy.gif" alt="">
</div>
