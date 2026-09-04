import type { Roadmap } from './types';

export const fullstackSystemsRoadmap: Roadmap = {
  id: 'fullstack-systems',
  slug: 'fullstack-systems',
  title: 'Full-Stack & Distributed Systems Architecture',
  branchId: 'fullstack-systems',
  branchName: 'Software Engineering & Distributed Systems',
  subtitle: 'From High-Performance Network Protocols & Type-Safe APIs to Distributed Consensus and Sharded Databases',
  description: 'Master software engineering at production scale. Move beyond basic CRUD apps to event-driven architectures, write-ahead logging databases, Redis caching topologies, and zero-downtime distributed deployments.',
  accentColor: '#0070f3',
  estimatedWeeks: 32,
  totalHours: 380,
  difficultyLevel: 'Beginner to Professional',
  prerequisitesOverview: ['Fundamental programming in JavaScript/TypeScript, Go, or Python', 'Basic understanding of HTTP and client-server models'],
  phases: [
    {
      phaseNumber: 1,
      title: 'Networking Protocols, Memory & Modern Backend',
      subtitle: 'HTTP/2 & HTTP/3 QUIC, TCP handshakes, TLS 1.3, asynchronous I/O event loops, and relational data modeling.',
      badge: 'Systems Foundation',
      learnerExperience: {
        stageNumber: 1,
        phaseName: 'Event Loops & Concurrency',
        emotionalState: 'The Wall of Abstraction',
        feelingSummary: 'You thought web development was just sending JSON, until you encounter connection pool exhaustion and database locks. You realize performance is an engineering discipline.',
        internalMonologue: [
          '"Why did my database crash when 50 concurrent requests hit a loop without connection pooling?"',
          '"Understanding non-blocking I/O (epoll/kqueue) completely changed how I think about server throughput."'
        ],
        whatIsActuallyHappening: 'You are shifting from writing sequential scripts to architecting asynchronous server systems capable of servicing 100,000 concurrent sockets.',
        commonPitfalls: [
          'Performing N+1 database queries inside loops instead of batch fetching or JOIN queries.',
          'Not setting connection pool timeouts and socket read deadlines, causing thread worker starvation.'
        ],
        survivalAdvice: 'Inspect raw HTTP headers and TLS handshakes using `curl -v` and Wireshark. Demystify the wire protocol.'
      },
      nodes: [
        {
          id: 'networking-protocols',
          title: 'Computer Networking: TCP, HTTP/2, QUIC & TLS 1.3',
          shortDescription: 'Socket lifecycle, TCP flow control, head-of-line blocking, and cryptographic TLS handshakes.',
          detailedExplanation: 'How data travels across the Internet. Understand the 3-way handshake, congestion windows (CUBIC/BBR), how HTTP/2 multiplexes streams over single connections, and how HTTP/3 uses UDP-based QUIC to eliminate head-of-line blocking on lossy connections.',
          category: 'Networking',
          difficulty: 'Intermediate',
          estimatedHours: 30,
          prerequisites: [],
          tags: ['Networking', 'TCP', 'HTTP3', 'TLS'],
          isEssential: true,
          resources: [
            {
              title: 'High Performance Browser Networking (Ilya Grigorik - Google)',
              url: 'https://hpbn.co/',
              type: 'book',
              authorityTier: 'Tier 1 Official Spec',
              description: 'The definitive free online book on TCP, UDP, TLS, HTTP/2, and wireless mobile networks.',
              isFree: true,
              estimatedReadHours: 25
            },
            {
              title: 'Beej\'s Guide to Network Programming (Using Internet Sockets)',
              url: 'https://beej.us/guide/bgnet/',
              type: 'book',
              authorityTier: 'Canonical Open Book',
              description: 'The legendary, humorous, and deeply technical guide to socket programming in C/POSIX.',
              isFree: true,
              estimatedReadHours: 15
            }
          ]
        },
        {
          id: 'database-internals',
          title: 'Relational Database Internals & Indexing',
          shortDescription: 'B-Trees, Write-Ahead Logs (WAL), MVCC concurrency control, and query execution plans in PostgreSQL.',
          detailedExplanation: 'Understand why a database is not just a black-box storage. Learn how B+ Tree index scans operate, how EXPLAIN ANALYZE reveals sequential scans, how Write-Ahead Logging guarantees ACID durability, and how MVCC handles isolation levels.',
          category: 'Data Storage',
          difficulty: 'Intermediate',
          estimatedHours: 35,
          prerequisites: ['networking-protocols'],
          tags: ['PostgreSQL', 'Databases', 'B-Tree', 'ACID'],
          isEssential: true,
          resources: [
            {
              title: 'Official PostgreSQL Documentation — Indexing & Performance',
              url: 'https://www.postgresql.org/docs/current/indexes.html',
              type: 'official-doc',
              authorityTier: 'Tier 1 Official Spec',
              description: 'Comprehensive manual on B-tree, Hash, GIN, BRIN indexes, and cost-based query planner tuning.',
              isFree: true,
              estimatedReadHours: 20
            },
            {
              title: 'Use The Index, Luke! (Markus Winand)',
              url: 'https://use-the-index-luke.com/',
              type: 'interactive',
              authorityTier: 'Canonical Open Book',
              description: 'Visual, deeply practical guide explaining indexing algorithms and SQL optimization.',
              isFree: true,
              estimatedReadHours: 18
            }
          ]
        }
      ],
      capstoneProject: {
        id: 'high-perf-rate-limiter',
        title: 'Capstone: Distributed Token-Bucket Rate Limiter with Redis & Lua',
        brief: 'Implement a zero-race-condition distributed API rate limiter supporting Sliding Window Counter and Token Bucket algorithms using atomic Redis Lua scripts with microsecond latency guarantees.',
        deliverables: [
          'Atomic Lua script executed on Redis server preventing race conditions under high concurrency',
          'Express/Fastify/Go HTTP middleware returning standardized 429 Retry-After headers',
          'Locust/k6 load test suite validating 20,000 req/sec throughput under load'
        ],
        estimatedHours: 20,
        difficulty: 'Intermediate'
      }
    },
    {
      phaseNumber: 2,
      title: 'Distributed Systems & Data at Scale',
      subtitle: 'Distributed consensus (Raft/Paxos), event-driven messaging (Kafka), caching topologies, and partition tolerance.',
      badge: 'Distributed Systems',
      learnerExperience: {
        stageNumber: 2,
        phaseName: 'Eventual Consistency & Raft Consensus',
        emotionalState: 'The Aha! Breakthrough',
        feelingSummary: 'You stop thinking in terms of single-server guarantees. You realize network partitions, clock skew, and partial server crashes are inevitable realities.',
        internalMonologue: [
          '"CAP theorem isn\'t just theory — network partitions happen in real clouds all the time."',
          '"Eventual consistency requires idempotency keys and outbox patterns to prevent double payments."'
        ],
        whatIsActuallyHappening: 'You have elevated from developer to system architect. You design systems where any node can fail without bringing down the platform.',
        commonPitfalls: [
          'Assuming wall-clock time (`Date.now()`) is monotonically synchronized across different servers.',
          'Not designing consumers with idempotency, causing duplicate charge/processing during message retries.'
        ],
        survivalAdvice: 'Read the "Secret Lives of Data" visual Raft consensus tutorial. Step through leader election visually.'
      },
      nodes: [
        {
          id: 'distributed-systems-design',
          title: 'Distributed Architecture & Consensus (Raft/Paxos)',
          shortDescription: 'CAP theorem, linearizability, vector clocks, leader election, and distributed consensus.',
          detailedExplanation: 'How distributed nodes agree on state without a single point of failure. Study the Raft consensus algorithm (Leader Election, Log Replication, Safety invariants) and understand replication strategies across availability zones.',
          category: 'Distributed Systems',
          difficulty: 'Advanced',
          estimatedHours: 45,
          prerequisites: ['database-internals'],
          tags: ['Distributed Systems', 'Raft', 'Consensus', 'CAP Theorem'],
          isEssential: true,
          resources: [
            {
              title: 'Designing Data-Intensive Applications (Martin Kleppmann)',
              url: 'https://dataintensive.net/',
              type: 'book',
              authorityTier: 'Canonical Open Book',
              description: 'The bible of modern distributed architecture: storage engines, transactions, replication, and batch/stream processing.',
              isFree: true,
              estimatedReadHours: 50
            },
            {
              title: 'The Raft Consensus Algorithm — Visual Interactive Simulation',
              url: 'https://thesecretlivesofdata.com/raft/',
              type: 'interactive',
              authorityTier: 'Tier 1 Official Spec',
              description: 'Brilliant animated walkthrough explaining leader election and replicated log synchronization.',
              isFree: true,
              estimatedReadHours: 4
            },
            {
              title: 'MIT 6.824: Distributed Systems (Prof. Robert Morris)',
              url: 'https://pdos.csail.mit.edu/6.824/',
              type: 'university',
              authorityTier: 'MIT / Stanford / Harvard',
              description: 'World-renowned MIT course with lecture videos, reading assignments, and hands-on Go labs.',
              isFree: true,
              estimatedReadHours: 40
            }
          ]
        }
      ],
      capstoneProject: {
        id: 'event-driven-ecommerce-engine',
        title: 'Capstone: Event-Driven Order Processing Engine with Transactional Outbox',
        brief: 'Build an event-driven microservice system with PostgreSQL and Apache Kafka. Implement the Transactional Outbox Pattern with Debezium CDC to guarantee exactly-once event delivery, inventory reservations, and payment processing.',
        deliverables: [
          'PostgreSQL transactional outbox table populated within same database transaction as order record',
          'CDC publisher streaming change events to Kafka topic',
          'Idempotent payment consumer service with dead-letter queue (DLQ) retry routing'
        ],
        estimatedHours: 30,
        difficulty: 'Advanced'
      }
    }
  ]
};
