// src/data/diagnostic/skills.ts
import type { CareerOption, TargetCareerId } from './types';

export interface SkillDefinition {
  id: string;
  name: string;
  category: string;
  whyItMatters: string;
  prerequisiteSkillIds: string[];
  recommendedNextStep: string;
  resourceSlug?: string;
  resourceTitle?: string;
  projectSlug?: string;
  projectTitle?: string;
  roadmapSlug: string;
  roadmapTitle: string;
  nodeId?: string;
  isAdvancedOrLater?: boolean; // For "Don't Learn Yet" identification
}

export const CAREER_OPTIONS: CareerOption[] = [
  {
    id: 'software-engineer',
    label: 'Software Engineer',
    icon: '💻',
    description: 'Core software design, data structures, backend logic, and production system hygiene.',
    primaryRoadmapSlug: 'fullstack-systems',
    coreSkillIds: ['data-structures', 'git-github', 'javascript', 'rest-apis', 'database-internals'],
    advancedSkillIds: ['distributed-systems-design', 'docker-kubernetes']
  },
  {
    id: 'fullstack-developer',
    label: 'Full-Stack Developer',
    icon: '⚡',
    description: 'End-to-end web apps: reactive frontends, resilient REST/GraphQL APIs, and relational databases.',
    primaryRoadmapSlug: 'fullstack-systems',
    coreSkillIds: ['javascript', 'react', 'rest-apis', 'database-internals', 'git-github'],
    advancedSkillIds: ['distributed-systems-design', 'docker-kubernetes']
  },
  {
    id: 'frontend-developer',
    label: 'Frontend Developer',
    icon: '🎨',
    description: 'Modern component architectures, UI performance, state sync, and web client APIs.',
    primaryRoadmapSlug: 'fullstack-systems',
    coreSkillIds: ['javascript', 'react', 'git-github', 'rest-apis'],
    advancedSkillIds: ['database-internals', 'docker-kubernetes']
  },
  {
    id: 'backend-developer',
    label: 'Backend Developer',
    icon: '🗄️',
    description: 'High-throughput servers, database query planning, distributed caching, and microservice APIs.',
    primaryRoadmapSlug: 'fullstack-systems',
    coreSkillIds: ['rest-apis', 'database-internals', 'networking-protocols', 'data-structures', 'git-github'],
    advancedSkillIds: ['distributed-systems-design', 'docker-kubernetes']
  },
  {
    id: 'aiml-engineer',
    label: 'AI / ML Engineer',
    icon: '🧠',
    description: 'Tensor computation, deep learning model architectures, training loops, and LLM orchestration.',
    primaryRoadmapSlug: 'ai-ml-engineering',
    coreSkillIds: ['python', 'data-structures', 'machine-learning', 'deep-learning-transformers'],
    advancedSkillIds: ['distributed-systems-design', 'docker-kubernetes']
  },
  {
    id: 'data-scientist',
    label: 'Data Scientist',
    icon: '📊',
    description: 'Statistical modeling, exploratory data analysis, feature engineering, and inference pipelines.',
    primaryRoadmapSlug: 'ai-ml-engineering',
    coreSkillIds: ['python', 'database-internals', 'machine-learning', 'git-github'],
    advancedSkillIds: ['deep-learning-transformers', 'docker-kubernetes']
  },
  {
    id: 'data-engineer',
    label: 'Data Engineer',
    icon: '🔄',
    description: 'Distributed pipeline orchestration, stream processing, column stores, and ETL reliability.',
    primaryRoadmapSlug: 'fullstack-systems',
    coreSkillIds: ['python', 'database-internals', 'data-structures', 'networking-protocols'],
    advancedSkillIds: ['docker-kubernetes', 'distributed-systems-design']
  },
  {
    id: 'cybersecurity-engineer',
    label: 'Cybersecurity Engineer',
    icon: '🛡️',
    description: 'Network defense, web exploit triage, authentication security, cryptography, and zero trust.',
    primaryRoadmapSlug: 'fullstack-systems',
    coreSkillIds: ['networking-protocols', 'linux-systems', 'rest-apis', 'git-github'],
    advancedSkillIds: ['distributed-systems-design', 'docker-kubernetes']
  },
  {
    id: 'devops-cloud-engineer',
    label: 'DevOps / Cloud Engineer',
    icon: '☁️',
    description: 'Infrastructure as code, Kubernetes orchestrations, CI/CD telemetry, and Linux kernel containers.',
    primaryRoadmapSlug: 'devops-cloud',
    coreSkillIds: ['linux-systems', 'networking-protocols', 'git-github', 'docker-kubernetes'],
    advancedSkillIds: ['distributed-systems-design']
  },
  {
    id: 'embedded-engineer',
    label: 'Embedded Engineer',
    icon: '🔌',
    description: 'Bare-metal C/C++, ARM Cortex internals, microcontroller peripherals, and low-level memory maps.',
    primaryRoadmapSlug: 'embedded-robotics',
    coreSkillIds: ['embedded-c', 'data-structures', 'git-github', 'linux-systems'],
    advancedSkillIds: ['rtos-robotics']
  },
  {
    id: 'electronics-engineer',
    label: 'Electronics Engineer',
    icon: '⚡',
    description: 'Digital logic, circuit analysis, hardware-software interfacing, and embedded microprocessors.',
    primaryRoadmapSlug: 'embedded-robotics',
    coreSkillIds: ['embedded-c', 'data-structures', 'git-github'],
    advancedSkillIds: ['rtos-robotics']
  },
  {
    id: 'robotics-engineer',
    label: 'Robotics Engineer',
    icon: '🤖',
    description: 'Autonomous navigation, kinematics, real-time operating systems (FreeRTOS/ROS2), and hardware control.',
    primaryRoadmapSlug: 'embedded-robotics',
    coreSkillIds: ['embedded-c', 'python', 'rtos-robotics', 'git-github'],
    advancedSkillIds: ['machine-learning']
  },
  {
    id: 'exploring',
    label: "I'm still exploring",
    icon: '🧭',
    description: 'Discover your foundational coding instincts across web, data, algorithms, and systems.',
    primaryRoadmapSlug: 'fullstack-systems',
    coreSkillIds: ['javascript', 'python', 'git-github', 'data-structures'],
    advancedSkillIds: ['database-internals', 'docker-kubernetes']
  },
  {
    id: 'other',
    label: 'Other Technical Field',
    icon: '⚙️',
    description: 'Build rigorous software and computer engineering foundations applicable across any technical domain.',
    primaryRoadmapSlug: 'fullstack-systems',
    coreSkillIds: ['git-github', 'data-structures', 'javascript', 'python'],
    advancedSkillIds: ['database-internals', 'docker-kubernetes']
  }
];

export const SKILLS_CATALOG: Record<string, SkillDefinition> = {
  'javascript': {
    id: 'javascript',
    name: 'JavaScript & Asynchronous Programming',
    category: 'Core Programming',
    whyItMatters: 'JavaScript drives the web platform. Deep understanding of scopes, closures, promises, and the event loop is essential for all full-stack and frontend development.',
    prerequisiteSkillIds: [],
    recommendedNextStep: 'Master event loop mechanics, promises, and async/await by reading the canonical JavaScript specifications.',
    resourceSlug: 'javascript',
    resourceTitle: 'JavaScript Language & V8 Internals',
    projectSlug: 'collaborative-editor',
    projectTitle: 'Real-Time Collaborative Text Editor',
    roadmapSlug: 'fullstack-systems',
    roadmapTitle: 'Full-Stack & Distributed Systems',
    nodeId: 'networking-protocols'
  },
  'react': {
    id: 'react',
    name: 'React & Component State Architecture',
    category: 'Frontend Engineering',
    whyItMatters: 'React is the dominant UI paradigm. Understanding unidirectional data flow, reconciliation, and hook immutability prevents performance regressions and memory bugs.',
    prerequisiteSkillIds: ['javascript'],
    recommendedNextStep: 'Learn hook lifecycle rules and build a component with immutable state updates without unnecessary re-renders.',
    resourceSlug: 'react',
    resourceTitle: 'React & Client Architecture',
    projectSlug: 'collaborative-editor',
    projectTitle: 'Real-Time Collaborative Text Editor',
    roadmapSlug: 'fullstack-systems',
    roadmapTitle: 'Full-Stack & Distributed Systems',
    nodeId: 'networking-protocols'
  },
  'rest-apis': {
    id: 'rest-apis',
    name: 'REST APIs & HTTP Status Semantics',
    category: 'Backend & Web Services',
    whyItMatters: 'APIs are the contract connecting client applications and backend systems. Understanding HTTP status codes, verbs, and idempotency is mandatory for clean web architecture.',
    prerequisiteSkillIds: ['javascript', 'networking-protocols'],
    recommendedNextStep: 'Learn HTTP verbs, status code semantics (401 vs 403, 404 vs 500), and build a RESTful CRUD service with proper JSON payloads.',
    resourceSlug: 'javascript',
    resourceTitle: 'REST API & Web Platform Specs',
    projectSlug: 'saas-api-platform',
    projectTitle: 'Multi-Tenant SaaS API Platform',
    roadmapSlug: 'fullstack-systems',
    roadmapTitle: 'Full-Stack & Distributed Systems',
    nodeId: 'networking-protocols'
  },
  'networking-protocols': {
    id: 'networking-protocols',
    name: 'Computer Networking (TCP, HTTP/2, TLS)',
    category: 'Computer Systems',
    whyItMatters: 'All distributed applications communicate across networks. Understanding the TCP handshake, connection pools, and TLS security guarantees high throughput and low latency.',
    prerequisiteSkillIds: [],
    recommendedNextStep: 'Explore HTTP/2 multiplexing and inspect connection headers using curl and network profiling tools.',
    resourceSlug: 'javascript',
    resourceTitle: 'Computer Networking & Protocols',
    projectSlug: 'saas-api-platform',
    projectTitle: 'Multi-Tenant SaaS API Platform',
    roadmapSlug: 'fullstack-systems',
    roadmapTitle: 'Full-Stack & Distributed Systems',
    nodeId: 'networking-protocols'
  },
  'database-internals': {
    id: 'database-internals',
    name: 'Relational Databases & SQL Indexing',
    category: 'Data Storage',
    whyItMatters: 'Databases safeguard company data. Knowing how B-tree indexes, foreign keys, transaction isolation, and ACID properties work prevents deadlocks and catastrophic slowdowns.',
    prerequisiteSkillIds: ['networking-protocols'],
    recommendedNextStep: 'Learn SQL JOIN types, B-Tree index lookups, and analyze queries using EXPLAIN ANALYZE in PostgreSQL.',
    resourceSlug: 'sql-databases',
    resourceTitle: 'SQL & Relational Database Internals',
    projectSlug: 'saas-api-platform',
    projectTitle: 'Multi-Tenant SaaS API Platform',
    roadmapSlug: 'fullstack-systems',
    roadmapTitle: 'Full-Stack & Distributed Systems',
    nodeId: 'database-internals'
  },
  'distributed-systems-design': {
    id: 'distributed-systems-design',
    name: 'Distributed Systems & Scalability Architecture',
    category: 'Distributed Systems',
    whyItMatters: 'Large-scale systems require horizontal partitioning, rate limiters, caching layers, and fault tolerance across microservices.',
    prerequisiteSkillIds: ['database-internals', 'rest-apis', 'networking-protocols'],
    recommendedNextStep: 'Study caching topologies with Redis, token bucket rate limiting, and write-ahead log persistence.',
    projectSlug: 'in-memory-cache',
    projectTitle: 'In-Memory Distributed Cache (Redis-Compatible)',
    roadmapSlug: 'fullstack-systems',
    roadmapTitle: 'Full-Stack & Distributed Systems',
    nodeId: 'distributed-systems-design',
    isAdvancedOrLater: true
  },
  'python': {
    id: 'python',
    name: 'Python Systems & Data Processing',
    category: 'Core Programming',
    whyItMatters: 'Python is the lingua franca of machine learning, data engineering, and automation. Clean idiomatic Python with list comprehensions and generators is foundational.',
    prerequisiteSkillIds: [],
    recommendedNextStep: 'Deep dive into Python data structures, generators, list comprehensions, and memory references.',
    resourceSlug: 'python',
    resourceTitle: 'Python Language & Runtime Specs',
    projectSlug: 'in-memory-cache',
    projectTitle: 'High-Throughput In-Memory Key-Value Store',
    roadmapSlug: 'ai-ml-engineering',
    roadmapTitle: 'AI & Machine Learning Engineering',
    nodeId: 'numpy-vectorization'
  },
  'data-structures': {
    id: 'data-structures',
    name: 'Data Structures & Algorithmic Complexity',
    category: 'Foundations',
    whyItMatters: 'Choosing the right data structure (hash maps vs binary trees vs arrays) determines whether your algorithm runs in milliseconds (O(1)) or minutes (O(n²)).',
    prerequisiteSkillIds: [],
    recommendedNextStep: 'Master Big-O time and space complexity analysis and implement common hash map lookups and queue structures.',
    resourceSlug: 'data-structures',
    resourceTitle: 'Data Structures & Algorithms Specification',
    projectSlug: 'cli-developer-tool',
    projectTitle: 'CLI Developer Productivity Tool',
    roadmapSlug: 'fullstack-systems',
    roadmapTitle: 'Full-Stack & Distributed Systems',
    nodeId: 'networking-protocols'
  },
  'git-github': {
    id: 'git-github',
    name: 'Git Version Control & Collaboration',
    category: 'Engineering Tooling',
    whyItMatters: 'Every software team tracks history with Git. Understanding commits, branch rebasing, and merge resolution is the baseline requirement for professional teams.',
    prerequisiteSkillIds: [],
    recommendedNextStep: 'Practice branch rebasing, cherry-picking commits, and resolving simulated merge conflicts in Git.',
    resourceSlug: 'git-github',
    resourceTitle: 'Git Internals & Pro Git Canonical Book',
    projectSlug: 'cli-developer-tool',
    projectTitle: 'CLI Developer Productivity Tool',
    roadmapSlug: 'fullstack-systems',
    roadmapTitle: 'Full-Stack & Distributed Systems',
    nodeId: 'networking-protocols'
  },
  'docker-kubernetes': {
    id: 'docker-kubernetes',
    name: 'Docker Containers & Cloud Orchestration',
    category: 'Infrastructure & Cloud',
    whyItMatters: 'Containers eliminate the "it works on my machine" dilemma by packaging code with its exact kernel namespaces and dependencies.',
    prerequisiteSkillIds: ['linux-systems', 'networking-protocols'],
    recommendedNextStep: 'Write multi-stage Dockerfiles that minimize image layers and configure volume persistence.',
    resourceSlug: 'docker-kubernetes',
    resourceTitle: 'Docker & Kubernetes Cloud Architecture',
    projectSlug: 'multi-stage-cicd',
    projectTitle: 'Multi-Stage Production CI/CD Pipeline',
    roadmapSlug: 'devops-cloud',
    roadmapTitle: 'DevOps & Cloud Architecture',
    nodeId: 'linux-kernel-containers',
    isAdvancedOrLater: true
  },
  'linux-systems': {
    id: 'linux-systems',
    name: 'Linux Systems & Shell Foundations',
    category: 'Operating Systems',
    whyItMatters: 'Over 90% of cloud servers run on Linux. Knowing how process signals, permissions, pipes, and file descriptors work is mandatory for backend and cloud roles.',
    prerequisiteSkillIds: [],
    recommendedNextStep: 'Learn POSIX file permissions, process monitoring with top/htop, and standard stream piping.',
    projectSlug: 'cli-developer-tool',
    projectTitle: 'CLI Developer Productivity Tool',
    roadmapSlug: 'devops-cloud',
    roadmapTitle: 'DevOps & Cloud Architecture',
    nodeId: 'linux-kernel-containers'
  },
  'machine-learning': {
    id: 'machine-learning',
    name: 'Machine Learning Fundamentals & NumPy',
    category: 'AI & Data',
    whyItMatters: 'Matrix operations, vectorization, and loss minimization drive modern artificial intelligence. Without these, AI models remain an inexplicable black box.',
    prerequisiteSkillIds: ['python'],
    recommendedNextStep: 'Learn NumPy vectorization, broadcast mechanics, and calculate Mean Squared Error across arrays without loops.',
    resourceSlug: 'machine-learning',
    resourceTitle: 'Machine Learning & Deep Learning Specialization',
    projectSlug: 'vision-classifier-api',
    projectTitle: 'Computer Vision Inference API',
    roadmapSlug: 'ai-ml-engineering',
    roadmapTitle: 'AI & Machine Learning Engineering',
    nodeId: 'numpy-vectorization'
  },
  'deep-learning-transformers': {
    id: 'deep-learning-transformers',
    name: 'Deep Learning & Transformer Architectures',
    category: 'AI & Data',
    whyItMatters: 'Self-attention mechanisms and transformer decoders are the foundation of modern LLMs (GPT, Claude, Gemini) and embedding retrieval engines.',
    prerequisiteSkillIds: ['machine-learning', 'python'],
    recommendedNextStep: 'Build a small multi-head attention mechanism and understand query, key, value matrix multiplications.',
    projectSlug: 'rag-document-qa',
    projectTitle: 'Production RAG Search & Document QA Engine',
    roadmapSlug: 'ai-ml-engineering',
    roadmapTitle: 'AI & Machine Learning Engineering',
    nodeId: 'attention-mechanisms',
    isAdvancedOrLater: true
  },
  'embedded-c': {
    id: 'embedded-c',
    name: 'Embedded C, Pointers & Memory Layout',
    category: 'Systems & Hardware',
    whyItMatters: 'Direct memory manipulation, pointer arithmetic, and bitwise registers form the absolute foundation of firmware and hardware control.',
    prerequisiteSkillIds: [],
    recommendedNextStep: 'Write C programs using bitwise operators for register masks, manual pointer arithmetic, and heap allocation tracking.',
    projectSlug: 'in-memory-cache',
    projectTitle: 'In-Memory Cache Engine',
    roadmapSlug: 'embedded-robotics',
    roadmapTitle: 'Embedded Systems & Robotics',
    nodeId: 'bare-metal-c-pointers'
  },
  'rtos-robotics': {
    id: 'rtos-robotics',
    name: 'Real-Time Operating Systems (RTOS) & ROS2',
    category: 'Robotics',
    whyItMatters: 'Hard real-time systems require preemptive task scheduling, mutex priority inversion prevention, and deterministic timing constraints.',
    prerequisiteSkillIds: ['embedded-c'],
    recommendedNextStep: 'Explore FreeRTOS task creation, semaphore signaling, and ROS2 publisher-subscriber nodes.',
    roadmapSlug: 'embedded-robotics',
    roadmapTitle: 'Embedded Systems & Robotics',
    nodeId: 'freertos-kernel',
    isAdvancedOrLater: true
  }
};

export function getCareerById(careerId: TargetCareerId): CareerOption {
  return CAREER_OPTIONS.find(c => c.id === careerId) || CAREER_OPTIONS[0];
}

export function getSkillById(skillId: string): SkillDefinition | undefined {
  return SKILLS_CATALOG[skillId];
}
