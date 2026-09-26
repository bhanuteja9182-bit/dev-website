/**
 * Centralized Configuration & Portfolio Data for TEJA
 * AI/ML Developer & Engineering Student
 * 
 * Edit this file to update personal details, links, projects, services, and skills.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "TEJA",
    fullName: "Teja",
    role: "AI/ML Developer",
    secondaryRole: "AI Application & Automation Developer",
    headline: "AI/ML Developer building practical AI-powered products.",
    subheadline: "Specializing in custom AI assistants, Retrieval-Augmented Generation (RAG), workflow automation, machine learning solutions, and full-stack AI applications that solve real business problems.",
    status: "Available for Freelance & Client Projects",
    ctaText: "Hire Me",
    
    // Official Contact Details
    email: "bhanutejanelapudi@gmail.com",
    phone: "7794843966",
    location: "India",
    
    // Social Links & Resume Placeholders
    githubUrl: "https://github.com/yourusername",     // [PLACEHOLDER] Replace with your GitHub profile URL
    linkedinUrl: "https://linkedin.com/in/yourusername", // [PLACEHOLDER] Replace with your LinkedIn profile URL
    resumeUrl: "#",                                   // [PLACEHOLDER] Replace with your Resume PDF URL
    portfolioDomain: "https://teja-ai.dev",           // [PLACEHOLDER] Replace with your domain
    
    avatarPlaceholder: "T",
  },

  capabilityStrip: [
    "Python", "AI/ML", "RAG Systems", "FastAPI", "React", "Node.js", "MongoDB", "OpenAI API", "FAISS / ChromaDB", "Scikit-Learn"
  ],

  about: {
    title: "About Me",
    subtitle: "Passionate about turning complex AI research into robust, production-grade applications.",
    bio: [
      "I am an AI/ML developer and engineering student focused on building practical, client-converting AI applications and intelligent automation systems.",
      "My core focus is on engineering production-ready RAG assistants, custom document search systems, classical ML classifiers, and full-stack AI products that streamline business operations.",
      "With expertise spanning Python backend frameworks (FastAPI), modern web frontends (React), vector databases (FAISS, ChromaDB), and machine learning pipelines, I help startups, founders, and businesses turn AI ideas into reliable working software."
    ],
    highlights: [
      { number: "01", label: "Practical AI Solutions", desc: "Building grounded, accurate AI tools without hallucination issues." },
      { number: "02", label: "Full-Stack Integration", desc: "Connecting modern frontend UIs with fast backend APIs and vector search." },
      { number: "03", label: "Clean & Maintainable Code", desc: "Modular, well-documented architecture structured for long-term production use." }
    ]
  },

  services: [
    {
      id: "ai-chatbots",
      icon: "message-square-text",
      title: "AI Chatbots & Assistants",
      description: "Custom website or document-based assistants that answer customer and team questions accurately using a business's own knowledge base.",
      deliverables: ["Custom prompt engineering", "Brand voice alignment", "Grounded accuracy fallback", "Embeddable website widget"],
      tag: "Popular"
    },
    {
      id: "rag-applications",
      icon: "database-zap",
      title: "RAG Applications",
      description: "PDF and knowledge-base question-answering systems powered by document embeddings, intelligent text chunking, and FAISS/ChromaDB vector search.",
      deliverables: ["Multi-format document parsing", "Vector database setup", "Semantic chunking & search", "Source citation output"],
      tag: "Core Capability"
    },
    {
      id: "ai-automation",
      icon: "workflow",
      title: "AI Workflow Automation",
      description: "Automate repetitive manual operations such as customer enquiry routing, document extraction, summary generation, and structured report synthesis.",
      deliverables: ["Custom workflow scripts", "API integrations", "Automated email processing", "Data transformation pipelines"],
      tag: "Business Efficiency"
    },
    {
      id: "aiml-solutions",
      icon: "brain-circuit",
      title: "AI / ML Solutions",
      description: "Classification models, predictive analytics, natural language processing (NLP), audio/image ML models, and data-driven client prototypes.",
      deliverables: ["Data preprocessing & EDA", "Model training & evaluation", "FastAPI inference endpoints", "Performance validation"],
      tag: "Data Driven"
    },
    {
      id: "ai-web-apps",
      icon: "layout-grid",
      title: "AI-Powered Web Apps",
      description: "End-to-end full-stack applications combining modern React frontends, Node.js / FastAPI backends, MongoDB databases, and AI APIs.",
      deliverables: ["Responsive React frontend", "RESTful / Async API backend", "Database schema & query setup", "Secure API key integration"],
      tag: "Full-Stack"
    },
    {
      id: "mvp-development",
      icon: "rocket",
      title: "Prototype / MVP Development",
      description: "Rapid development to turn an AI product idea into a fully functional, testable proof-of-concept ready for user testing or investor demos.",
      deliverables: ["Fast prototyping (1-2 weeks)", "Core feature implementation", "Demo-ready deployment", "Scalable code foundation"],
      tag: "Fast Delivery"
    }
  ],

  projects: [
    {
      id: "rag-assistant",
      title: "AI Knowledge / RAG Assistant",
      shortDesc: "Document-grounded question answering system retrieving accurate responses using vector search.",
      category: "AI / RAG",
      tech: ["Python", "OpenAI API", "RAG", "FAISS", "ChromaDB", "FastAPI", "React"],
      featured: true,
      githubUrl: "https://github.com/yourusername/rag-knowledge-assistant", // [PLACEHOLDER]
      demoUrl: "#", // [PLACEHOLDER]
      caseStudy: {
        problem: "Businesses and users struggle to extract quick, accurate answers from lengthy PDFs, technical manuals, and internal documentation without reading entire files.",
        solution: "Engineered an intelligent Retrieval-Augmented Generation (RAG) system that indexes documents into vector embeddings, performs semantic similarity search, and provides grounded answers with source page citations.",
        architecture: [
          "Document Ingestion: PDF/Txt text extraction & semantic chunking",
          "Embedding Pipeline: OpenAI / HuggingFace text-embedding generation",
          "Vector Storage: FAISS & ChromaDB indexing for fast cosine search",
          "Retrieval & Generation: FastAPI orchestration, context filtering, and grounded answer synthesis",
          "User Interface: Responsive React chat interface with document drag-and-drop"
        ],
        keyFeatures: [
          "Supports PDF, TXT, and Markdown document uploads",
          "Semantic chunking to preserve context boundaries",
          "Hybrid vector similarity search (FAISS / ChromaDB)",
          "Hallucination prevention with explicit context grounding fallback",
          "Interactive citation preview highlighting source documents",
          "FastAPI REST endpoints with sub-second retrieval times"
        ],
        challenges: [
          "Optimizing chunk size and overlap parameters to maintain semantic context without exceeding token limits.",
          "Preventing model hallucination when user queries fell outside the uploaded document domain."
        ],
        result: "Delivered sub-second document Q&A retrieval with strict factual grounding and zero fabricated information."
      }
    },
    {
      id: "career-advisor",
      title: "One-Stop Personalized Career & Education Advisor",
      shortDesc: "Full-stack AI platform offering tailored career path analysis, skill gap assessment, and education recommendations.",
      category: "Full-Stack AI",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "AI APIs"],
      featured: true,
      githubUrl: "https://github.com/yourusername/career-education-advisor", // [PLACEHOLDER]
      demoUrl: "#", // [PLACEHOLDER]
      caseStudy: {
        problem: "Students and job seekers often lack customized guidance on career transitions, skill gap identification, and curated learning roadmaps based on industry demands.",
        solution: "Built a full-stack web application that combines user background profiling with AI language models to generate personalized career recommendations, skill roadmaps, and learning tracks stored in MongoDB.",
        architecture: [
          "Frontend UI: React single-page application with interactive profile questionnaire",
          "Backend API: Node.js & Express REST server managing user profiles and session state",
          "AI Layer: Prompt-engineered recommendation engine analyzing skill matrices",
          "Database: MongoDB storing user profiles, saved roadmaps, and career metrics"
        ],
        keyFeatures: [
          "Interactive user profile assessment & skill inventory",
          "AI-driven career trajectory and role matching algorithm",
          "Skill gap analysis with actionable step-by-step learning roadmaps",
          "MongoDB user profile persistence & bookmarking",
          "Clean responsive UI built with custom CSS design tokens"
        ],
        challenges: [
          "Structuring prompt responses into strict JSON formats for reliable client-side rendering.",
          "Designing an intuitive dashboard for complex multi-step career recommendations."
        ],
        result: "Successfully created an interactive full-stack AI advisor producing actionable, structured career roadmaps."
      }
    },
    {
      id: "spam-classifier",
      title: "Spam Message Classifier",
      shortDesc: "NLP & machine learning application classifying text messages and emails into spam or legitimate categories.",
      category: "NLP / ML",
      tech: ["Python", "Pandas", "NLP", "Scikit-Learn", "TF-IDF"],
      featured: true,
      githubUrl: "https://github.com/yourusername/spam-message-classifier", // [PLACEHOLDER]
      demoUrl: "#", // [PLACEHOLDER]
      caseStudy: {
        problem: "Unfiltered spam messages and phishing texts compromise user security, flood inboxes, and waste valuable communication time.",
        solution: "Developed an end-to-end NLP text classification pipeline using TF-IDF feature extraction and Naive Bayes / SVM classifiers to identify spam with high precision.",
        architecture: [
          "Data Ingestion & Cleaning: Pandas processing, lowercasing, punctuation & stop-word removal",
          "Text Vectorization: TF-IDF n-gram feature extraction",
          "Model Training: Multinomial Naive Bayes & Support Vector Classifier (SVC)",
          "Evaluation: Confusion matrix, precision, recall, and F1-score validation"
        ],
        keyFeatures: [
          "Custom text normalization and stemming pipeline",
          "TF-IDF feature extraction preserving multi-word phrasing",
          "Comparative evaluation across multiple ML algorithms",
          "Lightweight inference engine for real-time text classification",
          "Detailed performance visualizations and confusion matrices"
        ],
        challenges: [
          "Handling severe dataset class imbalance between ham (legitimate) and spam messages.",
          "Minimizing false positives to avoid misclassifying legitimate messages as spam."
        ],
        result: "Achieved high classification accuracy with strong precision, preventing legitimate messages from being misflagged."
      }
    },
    {
      id: "bird-sound-classification",
      title: "Bird Sound Classification using Audio CNN",
      shortDesc: "Deep learning audio classification system analyzing MFCC spectrogram features with a CNN to identify bird species.",
      category: "Deep Learning",
      tech: ["Python", "Librosa", "MFCC", "TensorFlow", "Keras", "CNN"],
      featured: true,
      githubUrl: "https://github.com/yourusername/bird-sound-classifier-cnn", // [PLACEHOLDER]
      demoUrl: "#", // [PLACEHOLDER]
      caseStudy: {
        problem: "Bioacoustic monitoring of wildlife requires tedious manual listening to identify bird species across hours of field recordings.",
        solution: "Designed a Convolutional Neural Network (CNN) that transforms raw audio signals into Mel-Frequency Cepstral Coefficients (MFCC) spectrogram images to automatically classify bird species.",
        architecture: [
          "Audio Preprocessing: Librosa loading, trimming, normalization, and framing",
          "Feature Extraction: MFCC spectrogram generation",
          "Neural Network: 2D Convolutional Neural Network (CNN) built in TensorFlow/Keras",
          "Inference: Softmax probability distribution over bird species classes"
        ],
        keyFeatures: [
          "Audio signal preprocessing with noise reduction and trimming",
          "Extraction of 2D MFCC spectrogram features using Librosa",
          "Deep Convolutional Neural Network with Batch Normalization & Dropout",
          "Real-time audio clip prediction with confidence probability scores",
          "Visual spectrogram analysis tools"
        ],
        challenges: [
          "Filtering background environmental noise (wind, rain) from wildlife audio clips.",
          "Preventing overfitting on limited audio sample datasets using data augmentation."
        ],
        result: "Demonstrated effective audio feature representation and high classification accuracy on complex bioacoustic audio signals."
      }
    },
    {
      id: "sales-demand-forecasting",
      title: "Sales & Demand Forecasting Engine",
      shortDesc: "Data science and ML project analyzing temporal sales patterns to forecast inventory demand.",
      category: "Data / ML",
      tech: ["Python", "Pandas", "Scikit-Learn", "Matplotlib", "Seaborn"],
      featured: true,
      githubUrl: "https://github.com/yourusername/sales-demand-forecasting", // [PLACEHOLDER]
      demoUrl: "#", // [PLACEHOLDER]
      caseStudy: {
        problem: "Retailers and businesses risk revenue loss due to stockouts or excess holding costs from inaccurate inventory demand estimates.",
        solution: "Built a machine learning regression pipeline to analyze historical sales data, seasonal trends, and promotional factors to predict future product demand.",
        architecture: [
          "Exploratory Data Analysis: Pandas data cleaning, missing value imputation & outlier detection",
          "Feature Engineering: Lag variables, rolling averages, seasonality indicators, and holiday flags",
          "Predictive Modeling: Random Forest Regressor & XGBoost models",
          "Visualization: Matplotlib & Seaborn trend and forecast comparison plots"
        ],
        keyFeatures: [
          "Automated data cleaning and missing value imputation",
          "Advanced time-series feature engineering (lags, moving averages)",
          "Multi-model regression training and cross-validation",
          "Feature importance ranking for inventory driver identification",
          "Visual forecast dashboards comparing actual vs. predicted sales"
        ],
        challenges: [
          "Handling seasonal spikes and promotional anomalies without corrupting base trend predictions.",
          "Ensuring feature preparation prevents data leakage across training and test splits."
        ],
        result: "Produced clear demand predictions and identified key demand drivers to support inventory planning."
      }
    }
  ],

  flagshipDemo: {
    title: "Flagship Client Demo",
    subtitle: "AI Customer Support Assistant (Grounded RAG)",
    description: "An interactive demonstration of a document-grounded AI assistant built for business websites. Test how it answers customer inquiries accurately from uploaded business knowledge base documents and safely handles out-of-scope questions.",
    documents: [
      {
        id: "doc-services",
        title: "Services & Pricing.pdf",
        category: "Pricing & Services",
        content: `Acme AI Solutions Services & Pricing Guide:
1. AI Chatbot Setup: $1,500 one-time setup. Includes document indexing, custom website chat widget, brand customization, and training.
2. Custom RAG Enterprise Engine: $3,500 base price. Includes multi-document parsing (PDF, DOCX, CSV), vector DB setup (Chroma/FAISS), API integration, and source citations.
3. Monthly Maintenance & Hosting: $250/month for cloud hosting, vector database updates, performance analytics, and support.
Contact: sales@acme-ai-solutions.demo`
      },
      {
        id: "doc-faq",
        title: "Business FAQs & Support Policy.pdf",
        category: "Support Policy",
        content: `Acme AI Solutions Policies & Support Details:
- Response Time Guarantee: Standard support responds within 24 hours. Priority client support responds within 2 hours.
- Refund Policy: 14-day risk-free evaluation period. If technical requirements are not met during prototype build, full refund is issued.
- Data Privacy: All customer documents are processed in isolated encrypted instances. Customer data is NEVER used for public AI training.`
      }
    ],
    sampleQueries: [
      "How much does custom AI Chatbot setup cost?",
      "What is the refund policy for prototype builds?",
      "Can your system integrate with custom databases?",
      "What is your office address in Tokyo?" // Out of scope query to demonstrate fallback!
    ],
    predefinedResponses: {
      "How much does custom AI Chatbot setup cost?": {
        answer: "The AI Chatbot Setup costs $1,500 as a one-time setup. This includes document indexing, a custom website chat widget, brand alignment, and initial model training. Additionally, monthly maintenance and cloud hosting is available for $250/month.",
        source: "Services & Pricing.pdf (Page 1)",
        confidence: "High (Document Grounded)",
        isFallback: false
      },
      "What is the refund policy for prototype builds?": {
        answer: "Acme AI Solutions offers a 14-day risk-free evaluation period. If technical requirements are not met during the prototype build, a full refund is issued.",
        source: "Business FAQs & Support Policy.pdf (Page 1)",
        confidence: "High (Document Grounded)",
        isFallback: false
      },
      "Can your system integrate with custom databases?": {
        answer: "Yes! Custom RAG Enterprise engines include multi-document parsing and vector DB setup (Chroma/FAISS) with custom API integrations for PostgreSQL, MongoDB, or internal business databases.",
        source: "Services & Pricing.pdf (Page 1)",
        confidence: "High (Grounded)",
        isFallback: false
      },
      "What is your office address in Tokyo?": {
        answer: "I cannot confirm that information based on the provided business documents. For queries not covered in our documentation, please reach out directly to Teja via the contact form below.",
        source: "System Fallback Triggered",
        confidence: "N/A (Information Unavailable)",
        isFallback: true
      }
    },
    cta: "Want a custom AI Customer Support Assistant like this for your business?"
  },

  skills: {
    programming: ["Python", "C", "SQL", "JavaScript (ES6+)"],
    aiMl: ["Machine Learning", "Natural Language Processing (NLP)", "Convolutional Neural Networks (CNN)", "Retrieval-Augmented Generation (RAG)", "Embeddings", "Model Evaluation & Metrics"],
    libraries: ["TensorFlow", "Keras", "Scikit-Learn", "Pandas", "Librosa", "NLTK", "NumPy", "Matplotlib"],
    llmAi: ["OpenAI API", "Prompt Engineering", "RAG Systems", "Semantic Search", "Vector Embeddings"],
    webBackend: ["React", "Node.js", "Express.js", "FastAPI", "Streamlit", "HTML5 / Vanilla CSS", "REST APIs"],
    dataSearch: ["MongoDB", "SQLite", "FAISS", "ChromaDB", "Vector Databases"],
    tools: ["Git", "GitHub", "VS Code", "Jupyter Notebooks", "Google Colab", "Postman"]
  },

  workflow: [
    { step: "01", name: "Discovery", desc: "Understanding client goals, business knowledge assets, technical requirements, and target outcomes." },
    { step: "02", name: "Prototype", desc: "Building a fast, functional proof-of-concept to validate accuracy, prompt pipelines, and model performance." },
    { step: "03", name: "Build", desc: "Engineering production-ready frontend UIs, backend API endpoints, and vector search infrastructure." },
    { step: "04", name: "Test", desc: "Rigorous testing of edge cases, grounded accuracy verification, speed optimization, and security." },
    { step: "05", name: "Deploy", desc: "Deploying application servers, setting up domain SSL, and configuring cloud database environments." },
    { step: "06", name: "Support", desc: "Ongoing maintenance, knowledge base updates, monitoring, and iterative enhancements." }
  ],

  contactConfig: {
    title: "Let's Build Something Great Together",
    subtitle: "Have an AI application idea, automation requirement, or project opportunity? Fill out the form below or get in touch directly.",
    projectTypes: [
      "AI Chatbot / Assistant",
      "RAG / Document Search Application",
      "AI Workflow Automation",
      "AI/ML Solution / Classifier",
      "Full-Stack AI Web Application",
      "MVP / Prototype Development",
      "Recruitment / Hire Opportunity"
    ],
    budgetRanges: [
      "Select Budget (Optional)",
      "Under $500 USD",
      "$500 - $1,500 USD",
      "$1,500 - $3,500 USD",
      "$3,500+ USD"
    ]
  }
};
