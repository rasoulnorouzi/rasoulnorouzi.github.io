// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "software, datasets, and research tools.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "academic curriculum vitae.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-working-on-research-synthesis-methods-using-llms-for-automating-literature-reviews-and-causal-claim-extraction",
          title: 'Working on research synthesis methods using LLMs for automating literature reviews and causal...',
          description: "",
          section: "News",},{id: "news-gave-a-talk-on-causal-text-mining-at-the-department-seminar-series",
          title: 'Gave a talk on causal text mining at the department seminar series.',
          description: "",
          section: "News",},{id: "news-submitted-a-paper-on-theory-driven-causal-text-mining-to-a-peer-reviewed-journal",
          title: 'Submitted a paper on theory-driven causal text mining to a peer-reviewed journal.',
          description: "",
          section: "News",},{id: "news-developing-meta-science-rag-a-retrieval-augmented-generation-system-for-meta-scientific-research-synthesis",
          title: 'Developing Meta-Science RAG – a retrieval-augmented generation system for meta-scientific research synthesis.',
          description: "",
          section: "News",},{id: "news-working-on-the-dag-generator-automated-generation-of-directed-acyclic-graphs-from-causal-text-more-soon",
          title: 'Working on the DAG Generator – automated generation of directed acyclic graphs from...',
          description: "",
          section: "News",},{id: "projects-ai-srt-translator",
          title: 'AI SRT Translator',
          description: "Gemini-powered subtitle translation while preserving SRT timing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ai-srt-translator/";
            },},{id: "projects-cessc",
          title: 'CESSC',
          description: "causal and non-causal sentence classification dataset and model",
          section: "Projects",handler: () => {
              window.location.href = "/projects/cessc/";
            },},{id: "projects-research-tools-in-progress",
          title: 'Research Tools in Progress',
          description: "DAG generation and Meta-Science RAG prototypes",
          section: "Projects",handler: () => {
              window.location.href = "/projects/research-tools-in-progress/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
