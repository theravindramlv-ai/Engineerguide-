// src/data/resources/index.ts
// Curated canonical engineering learning resources with zero paywalls

export interface ResourceLink {
  title: string;
  provider: string;
  url: string;
  type: 'documentation' | 'course' | 'interactive' | 'book';
  description: string;
}

export interface ResourceTopic {
  slug: string;
  title: string;
  shortName: string;
  category: 'Software Engineering' | 'AI & Data' | 'Cloud & DevOps' | 'Foundations';
  tagline: string;
  description: string;
  whoShouldLearn: string;
  prerequisites: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  canonicalDocs: {
    name: string;
    url: string;
    description: string;
  };
  keyConcepts: string[];
  canonicalResources: ResourceLink[];
  recommendedProjects: {
    title: string;
    summary: string;
    projectCategorySlug: string;
  }[];
  relatedRoadmapSlug: string;
  relatedRoadmapName: string;
  nextSteps: string;
}

export const allResources: ResourceTopic[] = [
  {
    slug: 'javascript',
    title: 'JavaScript Learning Resources & Concepts Guide',
    shortName: 'JavaScript',
    category: 'Software Engineering',
    tagline: 'The universal runtime language of the modern web and full-stack systems',
    description: 'JavaScript powers interactive client experiences in browsers and scalable server-side runtimes via Node.js and Deno. Mastering modern ES6+, asynchronous patterns, and engine internals is essential for modern software engineering.',
    whoShouldLearn: 'Aspiring frontend developers, full-stack engineers, and students building their first interactive web applications.',
    prerequisites: ['HTML5 semantic structure', 'CSS3 fundamentals', 'Basic problem solving logic'],
    difficulty: 'Beginner',
    canonicalDocs: {
      name: 'MDN Web Docs — JavaScript Reference',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      description: 'The definitive, standards-aligned reference maintained by Mozilla and web standards authors.',
    },
    keyConcepts: [
      'Event Loop, Microtasks & Macrotasks',
      'Promises, async/await & Exception Handling',
      'Closures, Lexical Scope & Hoisting',
      'Prototypal Inheritance & Modern Classes',
      'DOM Manipulation & Event Bubbling',
      'Modules (ESM vs CommonJS)',
    ],
    canonicalResources: [
      {
        title: 'The Modern JavaScript Tutorial',
        provider: 'javascript.info',
        url: 'https://javascript.info/',
        type: 'book',
        description: 'Comprehensive, deep-dive guide from JavaScript basics to advanced engine mechanics.',
      },
      {
        title: 'MDN JavaScript Guide & Reference',
        provider: 'Mozilla Developer Network',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
        type: 'documentation',
        description: 'Standard documentation for web developers covering syntax, objects, and APIs.',
      },
      {
        title: 'Full Stack Open — Part 1: Introduction to React and JS',
        provider: 'University of Helsinki',
        url: 'https://fullstackopen.com/en/part1',
        type: 'course',
        description: 'World-renowned university curriculum on modern JavaScript programming paradigms.',
      },
    ],
    recommendedProjects: [
      {
        title: 'Task Management Engine with Local Persistence',
        summary: 'Build a drag-and-drop stateful Kanban board handling asynchronous local storage syncing without frameworks.',
        projectCategorySlug: 'web-development',
      },
      {
        title: 'Real-Time Interactive Markdown Editor',
        summary: 'Parse markdown tokens and render live preview with custom debounce timing and keyboard shortcuts.',
        projectCategorySlug: 'web-development',
      },
    ],
    relatedRoadmapSlug: 'fullstack-systems',
    relatedRoadmapName: 'Full-Stack Systems Roadmap',
    nextSteps: 'After building fluency in asynchronous JavaScript and DOM events, transition to component-driven architecture with React or server-side API design with Node.js.',
  },
  {
    slug: 'python',
    title: 'Python for Engineering & Data Science Resources',
    shortName: 'Python',
    category: 'Foundations',
    tagline: 'The primary language for computational thinking, automation, and machine intelligence',
    description: 'Python combines high developer velocity with a vast scientific ecosystem. It serves as the primary gateway for systems scripting, artificial intelligence, data engineering, and scientific computing.',
    whoShouldLearn: 'Engineers entering software development, machine learning practitioners, and students learning computational thinking.',
    prerequisites: ['Basic algebraic math', 'File system and terminal navigation'],
    difficulty: 'Beginner',
    canonicalDocs: {
      name: 'Official Python Documentation & Tutorial',
      url: 'https://docs.python.org/3/tutorial/',
      description: 'Official Python tutorial created by Python core developers, detailing language specifications.',
    },
    keyConcepts: [
      'Data Model: Lists, Dicts, Tuples & Sets',
      'Object-Oriented Design & Magic Methods',
      'List Comprehensions & Generator Expressions',
      'Virtual Environments & Package Management (pip/uv)',
      'Exception Handling & Context Managers (`with`)',
      'Concurrency: Threading vs Multiprocessing vs Asyncio',
    ],
    canonicalResources: [
      {
        title: 'CS50P: Introduction to Programming with Python',
        provider: 'Harvard University',
        url: 'https://cs50.harvard.edu/python/',
        type: 'course',
        description: 'Rigorous introduction to functions, arguments, variables, conditionals, loops, exceptions, and libraries.',
      },
      {
        title: 'Official Python 3 Documentation & Library Reference',
        provider: 'Python Software Foundation',
        url: 'https://docs.python.org/3/',
        type: 'documentation',
        description: 'Comprehensive specification of built-in types, standard modules, and syntax.',
      },
      {
        title: 'Python for Everybody (PY4E)',
        provider: 'University of Michigan',
        url: 'https://www.py4e.com/',
        type: 'course',
        description: 'Practical, project-focused guide to data structures, networked programs, and databases in Python.',
      },
    ],
    recommendedProjects: [
      {
        title: 'CLI Developer Automation Tool',
        summary: 'Build a terminal utility that inspects repositories, formats file naming, and outputs execution statistics.',
        projectCategorySlug: 'beginner',
      },
      {
        title: 'Document Q&A RAG Knowledge Retrieval Pipeline',
        summary: 'Chunk PDFs, compute vector embeddings, and build an indexed query engine with Python.',
        projectCategorySlug: 'ai-ml',
      },
    ],
    relatedRoadmapSlug: 'ai-ml-engineering',
    relatedRoadmapName: 'AI & Machine Learning Roadmap',
    nextSteps: 'Proceed to Linear Algebra & NumPy array manipulation for AI/ML, or learn Flask/FastAPI for REST backend development.',
  },
  {
    slug: 'react',
    title: 'React Component Architecture Resources & Guide',
    shortName: 'React',
    category: 'Software Engineering',
    tagline: 'Declarative component-driven user interfaces for production web applications',
    description: 'React revolutionised user interface development through declarative state management, component isolation, and efficient DOM reconciliation. It is the dominant frontend technology worldwide.',
    whoShouldLearn: 'Frontend engineers and full-stack developers looking to build scalable, reactive web client architectures.',
    prerequisites: ['Modern JavaScript (ES6+, destructuring, map/filter, promises)', 'HTML5 & CSS flexbox/grid'],
    difficulty: 'Intermediate',
    canonicalDocs: {
      name: 'React Official Documentation (react.dev)',
      url: 'https://react.dev/',
      description: 'Modern, interactive documentation with built-in sandboxes and architectural deep-dives.',
    },
    keyConcepts: [
      'Component Lifecycle & Pure Rendering',
      'State Hook (`useState`) & Effects (`useEffect`)',
      'Context API & Global State Architecture',
      'Memoization (`useMemo`, `useCallback`) & Performance',
      'Server Components vs Client Components',
      'Custom Hooks for Reusable Business Logic',
    ],
    canonicalResources: [
      {
        title: 'Official React Interactive Tutorial & Deep-Dives',
        provider: 'React Core Team',
        url: 'https://react.dev/learn',
        type: 'documentation',
        description: 'Interactive guides on thinking in React, managing state, and avoiding common rendering traps.',
      },
      {
        title: 'Full Stack Open — React & Redux Course',
        provider: 'University of Helsinki',
        url: 'https://fullstackopen.com/en/',
        type: 'course',
        description: 'Comprehensive, test-driven university program covering React, hooks, state, and Node.js backends.',
      },
    ],
    recommendedProjects: [
      {
        title: 'Collaborative Real-Time Canvas / Editor',
        summary: 'Architect a multi-user visual board with optimistic state updates, WebSocket sync, and undo/redo history.',
        projectCategorySlug: 'web-development',
      },
    ],
    relatedRoadmapSlug: 'fullstack-systems',
    relatedRoadmapName: 'Full-Stack Systems Roadmap',
    nextSteps: 'Learn Next.js for server-side rendering (SSR), and master end-to-end testing with Playwright or Vitest.',
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning Core Foundations & Resource Guide',
    shortName: 'Machine Learning',
    category: 'AI & Data',
    tagline: 'Statistical learning, gradient descent optimization, and predictive modeling',
    description: 'Machine learning bridges linear algebra, probability, and algorithmic optimization to train models that extract patterns and make predictions from structured and unstructured data.',
    whoShouldLearn: 'Computer science students, data analysts, and software engineers transitioning into artificial intelligence.',
    prerequisites: ['Python (NumPy, Pandas)', 'Linear algebra (matrices, vectors, eigenvalues)', 'Basic multivariate calculus (gradients)'],
    difficulty: 'Intermediate',
    canonicalDocs: {
      name: 'Scikit-Learn User Guide & API Reference',
      url: 'https://scikit-learn.org/stable/user_guide.html',
      description: 'The gold-standard reference for classical machine learning algorithms and preprocessing pipelines.',
    },
    keyConcepts: [
      'Supervised vs Unsupervised Learning Paradigms',
      'Cost Functions, Loss Metrics & Gradient Descent',
      'Overfitting, Regularization (L1/L2) & Cross-Validation',
      'Bias-Variance Tradeoff',
      'Feature Engineering & Normalization Pipelines',
      'Model Evaluation: Precision, Recall, F1, ROC-AUC',
    ],
    canonicalResources: [
      {
        title: 'CS229: Machine Learning Course Lectures',
        provider: 'Stanford University (Andrew Ng)',
        url: 'https://cs229.stanford.edu/',
        type: 'course',
        description: 'The authoritative academic course covering regression, classification, support vector machines, and kernel tricks.',
      },
      {
        title: 'Scikit-Learn Comprehensive Machine Learning Tutorial',
        provider: 'Scikit-Learn Authors',
        url: 'https://scikit-learn.org/stable/tutorial/index.html',
        type: 'documentation',
        description: 'Hands-on guide to model evaluation, cross-validation, and production pipelines.',
      },
    ],
    recommendedProjects: [
      {
        title: 'Production Predictive Model & REST Scoring API',
        summary: 'Train an ensemble model with scikit-learn, serialize weights, and deploy an inference container with FastAPI.',
        projectCategorySlug: 'ai-ml',
      },
    ],
    relatedRoadmapSlug: 'ai-ml-engineering',
    relatedRoadmapName: 'AI & Machine Learning Roadmap',
    nextSteps: 'Advance into Deep Learning with PyTorch, neural network backpropagation, and transformer architectures.',
  },
  {
    slug: 'data-structures',
    title: 'Data Structures & Algorithms Canonical Learning Path',
    shortName: 'Data Structures & Algorithms',
    category: 'Foundations',
    tagline: 'Computational complexity, memory layout, and problem-solving patterns',
    description: 'Data Structures and Algorithms (DSA) form the mathematical bedrock of all software engineering. Understanding how memory layouts and algorithms scale under volume is critical for technical excellence.',
    whoShouldLearn: 'Every engineering student, self-taught programmer, and candidate preparing for software engineering technical interviews.',
    prerequisites: ['Fluency in one programming language (Python, C++, Java, or Go)', 'Discrete mathematics basics'],
    difficulty: 'Intermediate',
    canonicalDocs: {
      name: 'NIST Dictionary of Algorithms and Data Structures',
      url: 'https://www.nist.gov/dads/',
      description: 'Formal definitions and complexity specifications maintained by the National Institute of Standards and Technology.',
    },
    keyConcepts: [
      'Asymptotic Analysis: Big-O, Big-Omega, Big-Theta',
      'Arrays, Hash Tables & Amortized Complexity',
      'Linked Lists, Stacks & Queues',
      'Binary Search Trees, Heaps & Tries',
      'Graph Traversals: BFS, DFS, Dijkstra, Topological Sort',
      'Dynamic Programming & Memoization',
    ],
    canonicalResources: [
      {
        title: 'MIT 6.006: Introduction to Algorithms',
        provider: 'MIT OpenCourseWare',
        url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/',
        type: 'course',
        description: 'Complete syllabus with problem sets, video lectures, and exams covering sorting, trees, hashing, and graphs.',
      },
      {
        title: 'Algorithms, Part I & II',
        provider: 'Princeton University (Robert Sedgewick)',
        url: 'https://www.coursera.org/learn/algorithms-part1',
        type: 'course',
        description: 'Rigorous course on data structures, sorting, searching, graph algorithms, and string processing.',
      },
    ],
    recommendedProjects: [
      {
        title: 'In-Memory Key-Value Store with LRU Cache Eviction',
        summary: 'Implement a thread-safe cache engine using doubly linked lists and hash maps with O(1) reads and writes.',
        projectCategorySlug: 'web-development',
      },
    ],
    relatedRoadmapSlug: 'fullstack-systems',
    relatedRoadmapName: 'Full-Stack Systems Roadmap',
    nextSteps: 'Practice LeetCode Medium problem solving across top patterns (Two Pointers, Sliding Window, Graph DFS/BFS).',
  },
  {
    slug: 'docker-kubernetes',
    title: 'Containers & Cloud Orchestration Learning Guide',
    shortName: 'Docker & Kubernetes',
    category: 'Cloud & DevOps',
    tagline: 'Packaging, distributing, and orchestrating resilient containerized workloads',
    description: 'Containerization standardises application dependencies across development and production. Kubernetes coordinates multi-node deployments with automated scaling, self-healing, and service discovery.',
    whoShouldLearn: 'DevOps engineers, cloud architects, and full-stack developers responsible for deploying production systems.',
    prerequisites: ['Linux command line & permissions', 'Basic networking (ports, DNS, HTTP)', 'Any backend runtime (Node, Python, Go)'],
    difficulty: 'Intermediate',
    canonicalDocs: {
      name: 'Official Docker Documentation',
      url: 'https://docs.docker.com/',
      description: 'Authoritative guides on Dockerfiles, container lifecycles, and multi-stage builds.',
    },
    keyConcepts: [
      'Linux Namespaces & Control Groups (cgroups)',
      'Multi-Stage Dockerfile Optimization',
      'Container Storage Volumes & Bridge Networks',
      'Kubernetes Control Plane Architecture',
      'Pods, Deployments, Services & Ingress Controllers',
      'ConfigMaps, Secrets & Rolling Updates',
    ],
    canonicalResources: [
      {
        title: 'Docker Get Started Official Guide',
        provider: 'Docker Inc.',
        url: 'https://docs.docker.com/get-started/',
        type: 'documentation',
        description: 'Standard hands-on tutorial covering containerization, image layers, and multi-container environments.',
      },
      {
        title: 'Kubernetes Interactive Tutorials',
        provider: 'Cloud Native Computing Foundation (CNCF)',
        url: 'https://kubernetes.io/docs/tutorials/',
        type: 'interactive',
        description: 'Hands-on terminal simulations to create, scale, and update clusters directly in the browser.',
      },
    ],
    recommendedProjects: [
      {
        title: 'Multi-Stage Dockerized Microservices Pipeline',
        summary: 'Containerize frontend, backend, and PostgreSQL database with automated health checks and docker-compose.',
        projectCategorySlug: 'devops-cloud',
      },
    ],
    relatedRoadmapSlug: 'devops-cloud',
    relatedRoadmapName: 'DevOps & Cloud Engineering Roadmap',
    nextSteps: 'Study Infrastructure as Code (Terraform) and Continuous Integration (GitHub Actions) to automate infrastructure.',
  },
  {
    slug: 'sql-databases',
    title: 'Relational Database Design & SQL Resources Guide',
    shortName: 'SQL & Relational Databases',
    category: 'Software Engineering',
    tagline: 'ACID guarantees, relational schema normalization, and query performance tuning',
    description: 'Relational database management systems (RDBMS) underpin critical business logic worldwide. Mastering relational calculus, SQL indexing, and transaction isolation is fundamental for back-end engineers.',
    whoShouldLearn: 'Backend developers, software engineers, and data engineers managing persistent application state.',
    prerequisites: ['Basic command line familiarity', 'Conceptual understanding of data tables'],
    difficulty: 'Intermediate',
    canonicalDocs: {
      name: 'PostgreSQL Official Documentation',
      url: 'https://www.postgresql.org/docs/current/',
      description: 'The definitive guide to the world’s most advanced open-source relational database.',
    },
    keyConcepts: [
      'Entity-Relationship Modeling & Normalization (1NF to 3NF)',
      'ACID Guarantees & Transaction Isolation Levels',
      'B-Tree Indexing, Hash Indexes & Query Execution Plans',
      'JOIN Strategies: Nested Loops, Hash Join, Merge Join',
      'Foreign Key Constraints & Cascading Operations',
      'Connection Pooling & Query Optimization',
    ],
    canonicalResources: [
      {
        title: 'PostgreSQL Official Tutorial',
        provider: 'PostgreSQL Global Development Group',
        url: 'https://www.postgresql.org/docs/current/tutorial.html',
        type: 'documentation',
        description: 'Structured introduction to SQL statements, table creation, joins, and indexing.',
      },
      {
        title: 'Use The Index, Luke! — Guide to Database Performance',
        provider: 'Markus Winand',
        url: 'https://use-the-index-luke.com/',
        type: 'book',
        description: 'Industry-standard textbook on SQL indexing, execution plans, and query performance tuning.',
      },
    ],
    recommendedProjects: [
      {
        title: 'Multi-Tenant SaaS Database Schema with Auditing',
        summary: 'Design a normalized schema with row-level security, soft deletes, timestamp auditing, and query benchmarks.',
        projectCategorySlug: 'web-development',
      },
    ],
    relatedRoadmapSlug: 'fullstack-systems',
    relatedRoadmapName: 'Full-Stack Systems Roadmap',
    nextSteps: 'Explore database migration tooling, caching strategies with Redis, and read replicas for high-throughput backends.',
  },
  {
    slug: 'git-github',
    title: 'Git Version Control & Collaboration Resource Guide',
    shortName: 'Git & GitHub',
    category: 'Foundations',
    tagline: 'Distributed version control, branching models, and open-source collaboration',
    description: 'Git is the universal tool for tracking changes, branch management, and collaborative development. Learning Git commands, merge conflict resolution, and PR reviews is non-negotiable for professional engineering.',
    whoShouldLearn: 'Every developer, software engineering student, and open-source contributor.',
    prerequisites: ['Terminal / command prompt fundamentals'],
    difficulty: 'Beginner',
    canonicalDocs: {
      name: 'Git Official Reference & Pro Git Book',
      url: 'https://git-scm.com/doc',
      description: 'The official documentation, cheat sheets, and the complete free Pro Git book by Scott Chacon.',
    },
    keyConcepts: [
      'Working Tree, Staging Area & Commit Graph',
      'Branching, Merging & Rebase Workflows',
      'Merge Conflicts: Root Causes & Resolution',
      'Remotes, Upstream Tracking & Fetch vs Pull',
      'Interactive Rebase, Cherry-Pick & Reflog Recovery',
      'GitHub Pull Requests, Code Reviews & CI Checks',
    ],
    canonicalResources: [
      {
        title: 'Pro Git Book (Complete 2nd Edition Free)',
        provider: 'Scott Chacon and Ben Straub',
        url: 'https://git-scm.com/book/en/v2',
        type: 'book',
        description: 'The standard definitive guide to Git internals, command reference, and workflows.',
      },
      {
        title: 'GitHub Skills Interactive Labs',
        provider: 'GitHub Inc.',
        url: 'https://skills.github.com/',
        type: 'interactive',
        description: 'Hands-on repository exercises teaching pull requests, merge conflict resolution, and GitHub Actions.',
      },
    ],
    recommendedProjects: [
      {
        title: 'Open Source Contribution Workflow Simulation',
        summary: 'Fork a repository, create feature branches, configure pre-commit linters, and open atomic pull requests.',
        projectCategorySlug: 'beginner',
      },
    ],
    relatedRoadmapSlug: 'fullstack-systems',
    relatedRoadmapName: 'Full-Stack Systems Roadmap',
    nextSteps: 'Integrate automated GitHub Actions CI workflows to run linters and unit tests automatically on every push.',
  },
];

export function getResourceBySlug(slug: string): ResourceTopic | undefined {
  return allResources.find((r) => r.slug === slug);
}
