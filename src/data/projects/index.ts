// src/data/projects/index.ts
// Portfolio-grade engineering projects categorized by domain

export interface ProjectSpec {
  id: string;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  prerequisites: string[];
  techStack: string[];
  skillsLearned: string[];
  featuresToImplement: string[];
  architectureTips: string;
  possibleExtensions: string[];
  relatedRoadmapSlug: string;
  relatedRoadmapName: string;
  recommendedResources: {
    title: string;
    url: string;
  }[];
}

export interface ProjectCategory {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  whyBuildThese: string;
  relatedRoadmapSlug: string;
  relatedRoadmapName: string;
  projects: ProjectSpec[];
}

export const projectCategories: ProjectCategory[] = [
  {
    slug: 'web-development',
    name: 'Web & Full-Stack Systems Projects',
    badge: 'FULL-STACK SYSTEMS',
    tagline: 'Production-ready, stateful web applications that prove architecture and system thinking',
    description: 'Avoid building trivial to-do lists or generic calculator clones. Employers and engineering teams evaluate candidates based on full-lifecycle development: database normalization, authentication, state synchronization, caching, and clean API design.',
    whyBuildThese: 'These projects show that you understand data flow, state reconciliation, network latency, and operational persistence beyond static HTML and CSS.',
    relatedRoadmapSlug: 'fullstack-systems',
    relatedRoadmapName: 'Full-Stack Systems Roadmap',
    projects: [
      {
        id: 'collaborative-editor',
        title: 'Real-Time Collaborative Workspace & Document Editor',
        difficulty: 'Advanced',
        summary: 'Architect a multi-user collaborative workspace with synchronized document state, presence indicators, and conflict resolution over WebSockets.',
        prerequisites: ['TypeScript & React fundamentals', 'WebSocket event protocols', 'Relational database schema modeling'],
        techStack: ['TypeScript', 'React / Next.js', 'Node.js or Go', 'PostgreSQL', 'Redis (Pub/Sub)', 'WebSockets'],
        skillsLearned: [
          'State synchronization over bidirectional sockets',
          'Conflict-free Replicated Data Types (CRDT) intuition',
          'Redis pub/sub for horizontal multi-server scaling',
          'Optimistic UI mutations and error rollbacks',
        ],
        featuresToImplement: [
          'Live collaborative cursor positions and typing presence',
          'Markdown parsing with live block rendering',
          'Automatic document versioning and revision history rollback',
          'Workspace permission tiers (Owner, Editor, Viewer)',
        ],
        architectureTips: 'Decouple socket handlers from database writes. Buffer edits in memory or Redis and flush periodically to PostgreSQL to prevent database bottlenecking.',
        possibleExtensions: [
          'Implement offline-first syncing using IndexedDB with reconnection catchup',
          'Export documents to clean PDFs using headless Chromium workers',
        ],
        relatedRoadmapSlug: 'fullstack-systems',
        relatedRoadmapName: 'Full-Stack Systems Roadmap',
        recommendedResources: [
          { title: 'MDN WebSockets API Reference', url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' },
          { title: 'PostgreSQL Official Documentation', url: 'https://www.postgresql.org/docs/current/' },
        ],
      },
      {
        id: 'in-memory-cache',
        title: 'In-Memory Key-Value Store with LRU Cache Eviction',
        difficulty: 'Intermediate',
        summary: 'Implement an in-memory caching engine using custom doubly linked lists and hash maps, complete with a TCP wire protocol.',
        prerequisites: ['Data structures (Linked lists, Hash tables)', 'Basic socket networking in Node.js, Go, or Python'],
        techStack: ['Node.js, Go, or Python', 'TCP Sockets', 'Benchmarking test suites'],
        skillsLearned: [
          'O(1) time complexity cache eviction with Hash Map + Doubly Linked List',
          'Parsing low-level binary or text protocols over raw TCP sockets',
          'Memory leak detection and heap profiling',
          'Concurrency locking and race condition prevention',
        ],
        featuresToImplement: [
          'SET, GET, DEL, and EXPIRE commands with TTL timestamps',
          'LRU (Least Recently Used) automatic capacity eviction',
          'Background eviction sweep thread for expired keys',
          'AOF (Append-Only File) persistence on disk for crash recovery',
        ],
        architectureTips: 'Ensure atomic mutations to both the hash map pointers and the doubly linked list head/tail references during gets and sets.',
        possibleExtensions: [
          'Add support for hash sets (HSET, HGET) and list queues (LPUSH, RPOP)',
          'Benchmark throughput using wrk or custom load generators',
        ],
        relatedRoadmapSlug: 'fullstack-systems',
        relatedRoadmapName: 'Full-Stack Systems Roadmap',
        recommendedResources: [
          { title: 'MIT 6.006: Introduction to Algorithms', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/' },
        ],
      },
      {
        id: 'saas-api-platform',
        title: 'Multi-Tenant SaaS API Platform with Rate Limiting & Webhooks',
        difficulty: 'Intermediate',
        summary: 'Build a production REST API featuring API key authentication, token-bucket rate limiting, Stripe billing webhooks, and audit logging.',
        prerequisites: ['REST API design conventions', 'SQL relational schema design', 'HTTP status codes and headers'],
        techStack: ['TypeScript / Node.js or FastAPI', 'PostgreSQL', 'Redis', 'Docker'],
        skillsLearned: [
          'Token-bucket / sliding window rate limiting with Redis',
          'Idempotent webhook delivery with automatic exponential backoff retries',
          'Database migrations and indexing strategies',
          'Clean architecture and dependency injection',
        ],
        featuresToImplement: [
          'API key generation with SHA-256 hashed storage',
          'Tiered rate limiting (e.g. Free: 60 req/min, Pro: 1000 req/min)',
          'Webhook dispatcher that signs payloads with HMAC-SHA256 signatures',
          'Interactive Swagger / OpenAPI documentation endpoint',
        ],
        architectureTips: 'Always verify Stripe webhook signatures before updating database subscription state to prevent forged requests.',
        possibleExtensions: [
          'Create a developer dashboard displaying hourly API request metrics and latency graphs',
        ],
        relatedRoadmapSlug: 'fullstack-systems',
        relatedRoadmapName: 'Full-Stack Systems Roadmap',
        recommendedResources: [
          { title: 'Use The Index, Luke! — SQL Performance', url: 'https://use-the-index-luke.com/' },
        ],
      },
    ],
  },
  {
    slug: 'ai-ml',
    name: 'AI & Machine Learning Projects',
    badge: 'APPLIED AI & DATA',
    tagline: 'End-to-end intelligent systems spanning data pipelines, model inference, and vector search',
    description: 'Move beyond Jupyter notebooks running pre-canned tutorials. High-value ML projects show that you can process raw data, handle vector embeddings, manage inference latency, and deploy production endpoints.',
    whyBuildThese: 'Engineering hiring managers look for engineers who understand model tradeoffs, vector retrieval, evaluation metrics, and how to interface ML models with real applications.',
    relatedRoadmapSlug: 'ai-ml-engineering',
    relatedRoadmapName: 'AI & Machine Learning Roadmap',
    projects: [
      {
        id: 'rag-document-qa',
        title: 'Document Q&A Pipeline with Retrieval-Augmented Generation (RAG)',
        difficulty: 'Advanced',
        summary: 'Build an end-to-end knowledge assistant that parses engineering documentation, creates semantic vector embeddings, and performs grounded retrieval with source attribution.',
        prerequisites: ['Python intermediate', 'Vector math & cosine similarity concepts', 'REST APIs'],
        techStack: ['Python', 'FastAPI', 'LangChain or LlamaIndex', 'ChromaDB or pgvector', 'Hugging Face / OpenAI Embeddings'],
        skillsLearned: [
          'Semantic text chunking strategies (recursive, semantic, windowing)',
          'Vector database indexing and top-K similarity search',
          'Prompt engineering for grounded answers without hallucination',
          'Evaluating retrieval quality with precision and faithfulness metrics',
        ],
        featuresToImplement: [
          'Multi-format file ingestion (PDF, Markdown, HTML)',
          'Hybrid search combining BM25 keyword search and vector cosine similarity',
          'Exact paragraph citation links for every generated answer',
          'Asynchronous background worker queue for document ingestion',
        ],
        architectureTips: 'Do not use giant chunk sizes. Optimal retrieval typically uses 250-500 token chunks with 50-token overlaps.',
        possibleExtensions: [
          'Add a reranker model (like Cohere or BGE Reranker) to refine top-K candidates before prompting',
        ],
        relatedRoadmapSlug: 'ai-ml-engineering',
        relatedRoadmapName: 'AI & Machine Learning Roadmap',
        recommendedResources: [
          { title: 'Stanford CS229 Lecture Notes', url: 'https://cs229.stanford.edu/' },
          { title: 'Hugging Face Documentation', url: 'https://huggingface.co/docs' },
        ],
      },
      {
        id: 'vision-classifier-api',
        title: 'Real-Time Computer Vision Classifier with Model Serving',
        difficulty: 'Intermediate',
        summary: 'Train a convolutional or vision-transformer model, optimize inference weights, and serve predictions via a low-latency REST and gRPC API.',
        prerequisites: ['PyTorch basics', 'Convolutional network architecture intuition', 'Docker'],
        techStack: ['PyTorch', 'TorchScript / ONNX', 'FastAPI', 'Docker', 'OpenCV'],
        skillsLearned: [
          'Data augmentation and transfer learning techniques',
          'Exporting models to ONNX runtime for 3x CPU inference acceleration',
          'Batched tensor operations and image preprocessing pipelines',
          'Containerized model deployment',
        ],
        featuresToImplement: [
          'Drag-and-drop web interface for testing image predictions',
          'Real-time confidence scoring and top-3 class breakdown',
          'Model inference time monitoring (latency p50 and p99 logging)',
          'Dockerized production container under 1GB size',
        ],
        architectureTips: 'Warm up the model upon container startup by passing a dummy zero tensor before opening the HTTP port.',
        possibleExtensions: [
          'Implement video stream processing with OpenCV tracking objects across frames',
        ],
        relatedRoadmapSlug: 'ai-ml-engineering',
        relatedRoadmapName: 'AI & Machine Learning Roadmap',
        recommendedResources: [
          { title: 'Official PyTorch Tutorials', url: 'https://pytorch.org/tutorials/' },
        ],
      },
    ],
  },
  {
    slug: 'devops-cloud',
    name: 'DevOps & Cloud Infrastructure Projects',
    badge: 'CLOUD & RELIABILITY',
    tagline: 'Automated CI/CD pipelines, container orchestration, and reproducible cloud infrastructure',
    description: 'Modern infrastructure is defined in code, not configured manually. These projects demonstrate your ability to automate testing, build secure container images, and maintain reliable systems.',
    whyBuildThese: 'Teams value engineers who eliminate manual deployment risks, maintain automated test pipelines, and configure secure infrastructure with proper logging.',
    relatedRoadmapSlug: 'devops-cloud',
    relatedRoadmapName: 'DevOps & Cloud Engineering Roadmap',
    projects: [
      {
        id: 'multi-stage-cicd',
        title: 'Automated Multi-Stage CI/CD Pipeline with GitHub Actions',
        difficulty: 'Intermediate',
        summary: 'Build an automated deployment pipeline that lints code, executes unit & integration test suites, builds minimal Docker images, and pushes to a container registry.',
        prerequisites: ['Git & GitHub pull request workflows', 'Docker multi-stage builds', 'Basic YAML syntax'],
        techStack: ['GitHub Actions', 'Docker', 'Trivy (Security Scanner)', 'Node.js or Python application'],
        skillsLearned: [
          'Workflow orchestration and matrix testing across OS/runtime versions',
          'Caching dependencies (npm/pip) to cut build times by 70%',
          'Automated container vulnerability scanning with Trivy',
          'Secure secret management in CI environments',
        ],
        featuresToImplement: [
          'Automated linting and formatting check on every branch pull request',
          'Unit test execution with minimum test coverage threshold check',
          'Production image build with SHA-tagged registry deployment',
          'Slack or Discord notification on build failure with error logs',
        ],
        architectureTips: 'Always pin action versions (e.g. actions/checkout@v4) rather than using @latest to prevent unexpected breaking changes.',
        possibleExtensions: [
          'Configure a preview environment deployment on Vercel or Fly.io for each active PR',
        ],
        relatedRoadmapSlug: 'devops-cloud',
        relatedRoadmapName: 'DevOps & Cloud Engineering Roadmap',
        recommendedResources: [
          { title: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions' },
          { title: 'Docker Official Best Practices', url: 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/' },
        ],
      },
    ],
  },
  {
    slug: 'beginner',
    name: 'Beginner & Student Portfolio Starters',
    badge: 'FOUNDATIONAL SKILLS',
    tagline: 'Focused, achievable projects that build fundamental coding muscle and problem-solving confidence',
    description: 'If you have never built a project outside of classroom assignments, start here. These projects focus on core programming syntax, file I/O, error handling, and clean documentation.',
    whyBuildThese: 'Building your first end-to-end project breaks the illusion of tutorial comprehension and teaches you how to read compiler errors, debug logic, and use Git properly.',
    relatedRoadmapSlug: 'fullstack-systems',
    relatedRoadmapName: 'Full-Stack Systems Roadmap',
    projects: [
      {
        id: 'cli-developer-tool',
        title: 'Command-Line Developer Utility (File Inspector / Code Stats)',
        difficulty: 'Beginner',
        summary: 'Build a terminal utility that analyzes a directory, counts code lines, calculates comment ratios, detects large files, and outputs formatted summary tables.',
        prerequisites: ['Basic Python, Node.js, or Go syntax', 'File system paths and loops'],
        techStack: ['Python or Node.js', 'Built-in file system libraries (os, path, fs)'],
        skillsLearned: [
          'Recursive directory traversal and file path normalization',
          'Command-line argument parsing (flags, options, help text)',
          'Error handling for missing directories and permission errors',
          'Publishing code to GitHub with a clean, professional README',
        ],
        featuresToImplement: [
          'Filter files by extension (e.g. `--ext=.js,.py`)',
          'Exclude directories like `.git` and `node_modules`',
          'Colored terminal output with execution time benchmarks',
          'Export results to JSON or CSV format',
        ],
        architectureTips: 'Structure your code into small, single-responsibility functions: `parseArgs()`, `scanDirectory()`, `computeStats()`, `formatOutput()`.',
        possibleExtensions: [
          'Package as an installable CLI tool using pip or npm',
        ],
        relatedRoadmapSlug: 'fullstack-systems',
        relatedRoadmapName: 'Full-Stack Systems Roadmap',
        recommendedResources: [
          { title: 'Harvard CS50P — Python Programming', url: 'https://cs50.harvard.edu/python/' },
          { title: 'Pro Git Book (Free Edition)', url: 'https://git-scm.com/book/en/v2' },
        ],
      },
    ],
  },
];

export function getProjectCategoryBySlug(slug: string): ProjectCategory | undefined {
  return projectCategories.find((cat) => cat.slug === slug);
}
