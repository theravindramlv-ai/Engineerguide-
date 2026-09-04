// src/data/diagnostic/questions.ts
import type { DiagnosticQuestion } from './types';

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  // ==========================================
  // JAVASCRIPT & ASYNCHRONOUS PROGRAMMING
  // ==========================================
  {
    id: 'js-event-loop-order',
    skillId: 'javascript',
    title: 'Asynchronous Execution Order',
    prompt: 'What will be printed to the console when this JavaScript snippet executes?',
    type: 'code-prediction',
    difficulty: 'intermediate',
    whyThisQuestionMatters: 'Tests understanding of the JavaScript event loop, microtask queue (Promises), and macrotask queue (setTimeout).',
    codeSnippet: {
      language: 'javascript',
      code: `console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');`
    },
    options: [
      { id: 'a', text: '1, 2, 3, 4', isCorrect: false, explanation: 'Incorrect: setTimeout is scheduled in the macrotask queue, not executed synchronously.' },
      { id: 'b', text: '1, 4, 3, 2', isCorrect: true, explanation: 'Correct! Synchronous code runs first (1, 4), then microtasks from Promise.then (3), then macrotasks from setTimeout (2).' },
      { id: 'c', text: '1, 4, 2, 3', isCorrect: false, explanation: 'Incorrect: Microtasks (Promise resolutions) always execute before the next macrotask (setTimeout).' },
      { id: 'd', text: '1, 3, 4, 2', isCorrect: false, explanation: 'Incorrect: The synchronous console.log("4") finishes before the Promise microtask resolves.' }
    ]
  },
  {
    id: 'js-closure-scope',
    skillId: 'javascript',
    title: 'Closure & Variable Scope',
    prompt: 'What is the output of the following loop using `var` vs `let`?',
    type: 'debugging',
    difficulty: 'beginner',
    whyThisQuestionMatters: 'Tests foundational knowledge of lexical scoping, closure capture, and variable hoisting.',
    codeSnippet: {
      language: 'javascript',
      code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 10);
}`
    },
    options: [
      { id: 'a', text: '0, 1, 2', isCorrect: false, explanation: 'Incorrect: Because `var` is function-scoped, by the time the callbacks execute after 10ms, `i` has already reached 3.' },
      { id: 'b', text: '3, 3, 3', isCorrect: true, explanation: 'Correct! `var` is hoisted to function/global scope. All 3 closures reference the exact same memory variable `i` which ends at 3.' },
      { id: 'c', text: 'undefined, undefined, undefined', isCorrect: false, explanation: 'Incorrect: `i` is defined and retains its final value.' },
      { id: 'd', text: 'An error is thrown', isCorrect: false, explanation: 'Incorrect: This is valid JavaScript.' }
    ]
  },
  {
    id: 'js-array-reference-mutation',
    skillId: 'javascript',
    title: 'Reference vs Value Mutation',
    prompt: 'What is logged by the following code?',
    type: 'code-prediction',
    difficulty: 'beginner',
    whyThisQuestionMatters: 'Tests foundational object reference vs primitive copy behavior, crucial for avoiding state corruption.',
    codeSnippet: {
      language: 'javascript',
      code: `const original = [1, 2, 3];
const copy = original;
copy.push(4);

console.log(original.length, copy.length);`
    },
    options: [
      { id: 'a', text: '3 4', isCorrect: false, explanation: 'Incorrect: `copy` is not a clone; it is a reference pointing to the identical array in memory.' },
      { id: 'b', text: '4 4', isCorrect: true, explanation: 'Correct! Objects and arrays in JavaScript are assigned by reference. Mutating `copy` mutates `original`.' },
      { id: 'c', text: '3 3', isCorrect: false, explanation: 'Incorrect: `push` mutates the array directly.' },
      { id: 'd', text: 'TypeError: Assignment to constant variable', isCorrect: false, explanation: 'Incorrect: `const` prevents re-assigning the variable identifier, not mutating the object content.' }
    ]
  },

  // ==========================================
  // REACT & CLIENT STATE ARCHITECTURE
  // ==========================================
  {
    id: 'react-state-mutation-bug',
    skillId: 'react',
    prerequisiteSkillId: 'javascript',
    title: 'State Mutation in Component Hooks',
    prompt: 'A junior developer wrote the following React component, but clicking the button never updates the screen. What is wrong?',
    type: 'debugging',
    difficulty: 'intermediate',
    whyThisQuestionMatters: 'Tests understanding of React reconciliation and why direct state mutations break shallow comparison checks.',
    codeSnippet: {
      language: 'javascript',
      code: `function TodoList() {
  const [items, setItems] = useState(['Buy milk']);

  function handleAdd() {
    items.push('Read book');
    setItems(items);
  }

  return <button onClick={handleAdd}>Count: {items.length}</button>;
}`
    },
    options: [
      { id: 'a', text: 'React does not re-render because `items` reference has not changed; state must be updated immutably with `setItems([...items, "Read book"])`', isCorrect: true, explanation: 'Correct! React uses Object.is() shallow comparison. Mutating the existing array in-place keeps the exact same memory reference, so React skips the re-render.' },
      { id: 'b', text: 'The `useState` hook cannot store arrays; it only supports strings and numbers', isCorrect: false, explanation: 'Incorrect: useState supports any JavaScript data structure.' },
      { id: 'c', text: 'The button onClick handler must be wrapped in `useCallback` to fire', isCorrect: false, explanation: 'Incorrect: Normal inline functions work fine on onClick.' },
      { id: 'd', text: 'The button needs an `id` attribute for React to attach event listeners', isCorrect: false, explanation: 'Incorrect: Synthetic events do not require element IDs.' }
    ]
  },
  {
    id: 'react-use-effect-dependencies',
    skillId: 'react',
    prerequisiteSkillId: 'javascript',
    title: 'Effect Lifecycle & Memory Leaks',
    prompt: 'What happens when this component mounts?',
    type: 'code-prediction',
    difficulty: 'advanced',
    whyThisQuestionMatters: 'Tests mastery of React effect dependency arrays and stale closure / infinite loop hazards.',
    codeSnippet: {
      language: 'javascript',
      code: `function LiveClock() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>{count}</div>;
}`
    },
    options: [
      { id: 'a', text: 'The counter increments by 1 every second forever (0, 1, 2, 3...)', isCorrect: false, explanation: 'Incorrect: Because `count` is captured in the closure of `[]`, it always sees count as 0.' },
      { id: 'b', text: 'The counter increments to 1 after 1 second, then stays at 1 forever', isCorrect: true, explanation: 'Correct! Stale closure bug: the effect closure captured `count = 0`. Every second it executes `setCount(0 + 1)`, staying at 1. The fix is functional state update: `setCount(prev => prev + 1)`.' },
      { id: 'c', text: 'An infinite re-render loop crashes the browser tab immediately', isCorrect: false, explanation: 'Incorrect: The interval only fires every 1000ms.' },
      { id: 'd', text: 'The component throws an Uncaught ReferenceError on mount', isCorrect: false, explanation: 'Incorrect: The code is syntactically valid.' }
    ]
  },

  // ==========================================
  // REST APIS & WEB SERVICES
  // ==========================================
  {
    id: 'api-http-status-semantics',
    skillId: 'rest-apis',
    prerequisiteSkillId: 'networking-protocols',
    title: 'HTTP Status Code Semantics',
    prompt: 'A client sends a request to `GET /api/v1/users/999`. The server connects to the database successfully, but no user with ID 999 exists. What is the semantically correct HTTP response status code?',
    type: 'concept',
    difficulty: 'beginner',
    whyThisQuestionMatters: 'Tests foundational HTTP API design conventions and difference between server errors and resource absence.',
    options: [
      { id: 'a', text: '200 OK with body `null` or `{ "error": "not found" }`', isCorrect: false, explanation: 'Incorrect: Hiding 404 under 200 OK violates HTTP semantics and breaks client caching.' },
      { id: 'b', text: '404 Not Found', isCorrect: true, explanation: 'Correct! 404 indicates the origin server did not find a current representation for the target resource.' },
      { id: 'c', text: '500 Internal Server Error', isCorrect: false, explanation: 'Incorrect: 500 is reserved for unexpected server crashes, unhandled exceptions, or database disconnects.' },
      { id: 'd', text: '400 Bad Request', isCorrect: false, explanation: 'Incorrect: 400 is for malformed syntax (e.g. invalid JSON), not missing valid resource IDs.' }
    ]
  },
  {
    id: 'api-idempotency-methods',
    skillId: 'rest-apis',
    prerequisiteSkillId: 'networking-protocols',
    title: 'HTTP Method Idempotency',
    prompt: 'In RESTful architecture, which of the following HTTP methods is expected to be IDEMPOTENT?',
    type: 'concept',
    difficulty: 'intermediate',
    whyThisQuestionMatters: 'Tests critical architectural knowledge of network retries, safe caching, and payment/mutation operations.',
    options: [
      { id: 'a', text: 'POST', isCorrect: false, explanation: 'Incorrect: Multiple identical POST requests create multiple distinct resources (non-idempotent).' },
      { id: 'b', text: 'PUT', isCorrect: true, explanation: 'Correct! Calling PUT with the same payload multiple times results in the same server state as calling it once.' },
      { id: 'c', text: 'PATCH', isCorrect: false, explanation: 'Incorrect: Standard PATCH is not strictly guaranteed to be idempotent (e.g. an "append" operation).' },
      { id: 'd', text: 'CONNECT', isCorrect: false, explanation: 'Incorrect: CONNECT establishes tunnel proxies.' }
    ]
  },
  {
    id: 'api-password-security-storage',
    skillId: 'rest-apis',
    prerequisiteSkillId: 'javascript',
    title: 'User Authentication & Password Storage',
    prompt: 'You are implementing user authentication for a web backend. How should user passwords be stored in the database?',
    type: 'practical-scenario',
    difficulty: 'intermediate',
    whyThisQuestionMatters: 'Tests practical engineering hygiene and security knowledge against database leakage and rainbow table attacks.',
    options: [
      { id: 'a', text: 'Encrypted using AES-256 with a secret key stored in an environment variable', isCorrect: false, explanation: 'Incorrect: Two-way encryption can be decrypted if the key is compromised. Passwords should be irreversibly hashed.' },
      { id: 'b', text: 'Hashed using MD5 or SHA-256 for fast lookup speed', isCorrect: false, explanation: 'Incorrect: Fast general-purpose hashes like SHA-256 or MD5 can be cracked in seconds using GPUs and rainbow tables.' },
      { id: 'c', text: 'Hashed using a slow, salted cryptographic hash function such as bcrypt, Argon2, or scrypt', isCorrect: true, explanation: 'Correct! Slow, computationally intensive hashing with unique salts makes brute-force and rainbow table attacks infeasible.' },
      { id: 'd', text: 'In plaintext, but secured behind TLS database connection strings', isCorrect: false, explanation: 'Incorrect: Plaintext storage is catastrophic if read access to the database is compromised.' }
    ]
  },

  // ==========================================
  // COMPUTER NETWORKING
  // ==========================================
  {
    id: 'networking-tcp-handshake',
    skillId: 'networking-protocols',
    title: 'Transport Layer Protocols',
    prompt: 'Why does an HTTP web server typically use TCP rather than UDP for transmitting web page files and API data?',
    type: 'engineering-reasoning',
    difficulty: 'beginner',
    whyThisQuestionMatters: 'Tests understanding of the transport layer, packet loss, and data reliability guarantees.',
    options: [
      { id: 'a', text: 'TCP provides reliable, ordered, and error-checked delivery through acknowledgments and retransmissions', isCorrect: true, explanation: 'Correct! TCP guarantees that every byte sent arrives intact and in sequence, which is essential for HTML, scripts, and JSON data.' },
      { id: 'b', text: 'TCP requires less CPU overhead and has lower latency than UDP', isCorrect: false, explanation: 'Incorrect: UDP has lower overhead and lower latency because it does not maintain connection state or perform retransmissions.' },
      { id: 'c', text: 'UDP cannot cross home router NAT boundaries', isCorrect: false, explanation: 'Incorrect: UDP travels across NATs routinely (used in DNS, VoIP, gaming).' },
      { id: 'd', text: 'Web browsers do not support network sockets', isCorrect: false, explanation: 'Incorrect: All browsers establish TCP sockets for HTTP.' }
    ]
  },
  {
    id: 'networking-http2-multiplexing',
    skillId: 'networking-protocols',
    title: 'HTTP/2 Protocol Advantage',
    prompt: 'What major limitation of HTTP/1.1 does HTTP/2 multiplexing solve?',
    type: 'engineering-reasoning',
    difficulty: 'intermediate',
    whyThisQuestionMatters: 'Tests understanding of network latency bottlenecks, connection overhead, and modern web transport.',
    options: [
      { id: 'a', text: 'Head-of-line blocking at the application layer, allowing multiple concurrent requests over a single TCP connection', isCorrect: true, explanation: 'Correct! HTTP/1.1 required separate TCP connections or sequential waiting. HTTP/2 interleaves binary frames over one connection.' },
      { id: 'b', text: 'It completely replaces the IP routing layer on the internet', isCorrect: false, explanation: 'Incorrect: HTTP/2 remains strictly an application-layer protocol.' },
      { id: 'c', text: 'It eliminates the need for SSL/TLS certificates', isCorrect: false, explanation: 'Incorrect: In practice, HTTP/2 requires TLS encryption in all modern browsers.' },
      { id: 'd', text: 'It converts all relational database queries into GraphQL', isCorrect: false, explanation: 'Incorrect: HTTP/2 is transport-level and independent of database query formats.' }
    ]
  },

  // ==========================================
  // RELATIONAL DATABASES & SQL INDEXING
  // ==========================================
  {
    id: 'database-disk-vs-memory',
    skillId: 'database-internals',
    prerequisiteSkillId: 'networking-protocols',
    title: 'Persistence & Durability',
    prompt: 'Why do production web applications store user data in a database (e.g. PostgreSQL) rather than keeping it in server process memory (RAM)?',
    type: 'engineering-reasoning',
    difficulty: 'beginner',
    whyThisQuestionMatters: 'Tests foundational engineering reasoning regarding process lifecycle, volatile vs non-volatile memory, and crash durability.',
    options: [
      { id: 'a', text: 'RAM is volatile; if the server crashes or restarts, all in-memory data is instantly lost without ACID persistence', isCorrect: true, explanation: 'Correct! Databases guarantee durability (the "D" in ACID) by persisting transactions to non-volatile disk via Write-Ahead Logs (WAL).' },
      { id: 'b', text: 'Reading data from a hard drive is significantly faster than reading from RAM', isCorrect: false, explanation: 'Incorrect: RAM is thousands of times faster than SSD/hard disk.' },
      { id: 'c', text: 'Operating systems prohibit processes from allocating more than 1 megabyte of memory', isCorrect: false, explanation: 'Incorrect: Operating systems allocate gigabytes of virtual memory.' },
      { id: 'd', text: 'Databases are required by law for all website domains', isCorrect: false, explanation: 'Incorrect: It is an engineering requirement for data durability.' }
    ]
  },
  {
    id: 'database-b-tree-indexing',
    skillId: 'database-internals',
    prerequisiteSkillId: 'data-structures',
    title: 'SQL Query Execution & Index Performance',
    prompt: 'A table has 10,000,000 rows. Running `SELECT * FROM users WHERE email = "alice@example.com"` takes 1,800ms. Why would creating an index on the `email` column reduce query time to under 2ms?',
    type: 'engineering-reasoning',
    difficulty: 'intermediate',
    whyThisQuestionMatters: 'Tests understanding of full sequential table scans vs logarithmic B-Tree index lookups in production storage engines.',
    options: [
      { id: 'a', text: 'It replaces a linear scan O(n) across 10 million disk pages with an O(log n) tree traversal using a balanced B-Tree', isCorrect: true, explanation: 'Correct! Without an index, the database must read every row from disk. A B-Tree index locates the pointer in just 3–4 page reads.' },
      { id: 'b', text: 'It compresses the 10 million rows down to 10 rows', isCorrect: false, explanation: 'Incorrect: The table still holds all 10 million rows.' },
      { id: 'c', text: 'It converts PostgreSQL into an in-memory Redis cluster automatically', isCorrect: false, explanation: 'Incorrect: An index is a disk-backed data structure maintained by PostgreSQL.' },
      { id: 'd', text: 'It bypasses the SQL parser completely', isCorrect: false, explanation: 'Incorrect: Queries still parse and optimize through the query planner.' }
    ]
  },
  {
    id: 'database-acid-transactions',
    skillId: 'database-internals',
    title: 'Bank Transfer Concurrency & ACID',
    prompt: 'You are transferring $100 from Account A to Account B. Account A is debited, but the server crashes before Account B is credited. Which database feature ensures Account A\'s money is NOT lost?',
    type: 'practical-scenario',
    difficulty: 'intermediate',
    whyThisQuestionMatters: 'Tests understanding of atomic database transactions and rollback safety in mission-critical applications.',
    options: [
      { id: 'a', text: 'Atomic Transactions (BEGIN ... COMMIT / ROLLBACK)', isCorrect: true, explanation: 'Correct! Atomicity ensures all operations in the transaction block succeed together, or if any step fails/crashes, the entire transaction is rolled back.' },
      { id: 'b', text: 'Automatic DNS Failover', isCorrect: false, explanation: 'Incorrect: DNS routes network traffic; it does not manage database consistency.' },
      { id: 'c', text: 'Client-side LocalStorage cache', isCorrect: false, explanation: 'Incorrect: Browser storage has no control over server database state.' },
      { id: 'd', text: 'Foreign key cascade deletes', isCorrect: false, explanation: 'Incorrect: Cascade deletes remove child records, not rollback incomplete debits.' }
    ]
  },

  // ==========================================
  // DATA STRUCTURES & ALGORITHMIC COMPLEXITY
  // ==========================================
  {
    id: 'ds-hashmap-lookup-complexity',
    skillId: 'data-structures',
    title: 'Time Complexity of Data Access',
    prompt: 'What is the average time complexity of looking up a value by its key in a Hash Table (e.g. JavaScript Map / Python dict)?',
    type: 'concept',
    difficulty: 'beginner',
    whyThisQuestionMatters: 'Tests foundational Big-O complexity knowledge that dictates scalability decisions.',
    options: [
      { id: 'a', text: 'O(1) Constant Time', isCorrect: true, explanation: 'Correct! With a good hash function and proper load factor, hash table lookups compute an array bucket index in O(1) average time.' },
      { id: 'b', text: 'O(n) Linear Time', isCorrect: false, explanation: 'Incorrect: O(n) is the lookup time for an unsorted array or linked list.' },
      { id: 'c', text: 'O(log n) Logarithmic Time', isCorrect: false, explanation: 'Incorrect: O(log n) is the lookup time for binary search or balanced search trees.' },
      { id: 'd', text: 'O(n²)', isCorrect: false, explanation: 'Incorrect: Quadratic time indicates nested loops.' }
    ]
  },

  // ==========================================
  // GIT VERSION CONTROL
  // ==========================================
  {
    id: 'git-rebase-vs-merge',
    skillId: 'git-github',
    title: 'Git History & Collaboration',
    prompt: 'What is the primary difference between `git merge main` and `git rebase main` when updating your feature branch?',
    type: 'concept',
    difficulty: 'beginner',
    whyThisQuestionMatters: 'Tests understanding of distributed version control graphs, linear commit histories, and team hygiene.',
    options: [
      { id: 'a', text: 'Merge creates a new merge commit preserving exact history; rebase replays your feature commits on top of main, creating a linear history', isCorrect: true, explanation: 'Correct! Merge creates a two-parent commit that ties histories together; rebase rewrites commit hashes to sit on the tip of the target branch.' },
      { id: 'b', text: 'Rebase permanently deletes all previous commits on the remote server', isCorrect: false, explanation: 'Incorrect: Rebase replays your local branch commits; it does not delete main.' },
      { id: 'c', text: 'Merge only works on GitHub, while rebase works on your terminal', isCorrect: false, explanation: 'Incorrect: Both are standard core Git commands.' },
      { id: 'd', text: 'Rebase automatically resolves all merge conflicts without human review', isCorrect: false, explanation: 'Incorrect: Rebase pauses on conflict and requires manual resolution commit by commit.' }
    ]
  },

  // ==========================================
  // PYTHON SYSTEMS & DATA
  // ==========================================
  {
    id: 'py-mutable-default-arg',
    skillId: 'python',
    title: 'Mutable Default Arguments',
    prompt: 'What does this Python code print when called consecutively?',
    type: 'code-prediction',
    difficulty: 'beginner',
    whyThisQuestionMatters: 'Tests Python object model understanding and avoiding one of the most notorious memory bugs in Python.',
    codeSnippet: {
      language: 'python',
      code: `def append_val(val, target_list=[]):
    target_list.append(val)
    return target_list

print(append_val(1))
print(append_val(2))`
    },
    options: [
      { id: 'a', text: '[1] then [2]', isCorrect: false, explanation: 'Incorrect: In Python, default arguments are evaluated only once when the function is defined, not on each call.' },
      { id: 'b', text: '[1] then [1, 2]', isCorrect: true, explanation: 'Correct! The default empty list `[]` is created once at function definition time. Subsequent calls append to the exact same list instance in memory.' },
      { id: 'c', text: 'SyntaxError: mutable default parameters are disallowed', isCorrect: false, explanation: 'Incorrect: Python allows this, though linters warn against it.' },
      { id: 'd', text: '[2] then [2]', isCorrect: false, explanation: 'Incorrect: The list grows.' }
    ]
  },

  // ==========================================
  // MACHINE LEARNING & NUMPY
  // ==========================================
  {
    id: 'ml-overfitting-symptom',
    skillId: 'machine-learning',
    prerequisiteSkillId: 'python',
    title: 'Model Evaluation & Generalization',
    prompt: 'A machine learning model achieves 99.4% accuracy on the training dataset, but only 58.1% accuracy on the validation dataset. What is this phenomenon called, and how is it typically addressed?',
    type: 'concept',
    difficulty: 'intermediate',
    whyThisQuestionMatters: 'Tests foundational ML intuition: model generalization vs memorization.',
    options: [
      { id: 'a', text: 'Overfitting; addressed using regularization (L1/L2, Dropout), more training data, or reducing model capacity', isCorrect: true, explanation: 'Correct! The model memorized statistical noise in the training set rather than learning generalizable patterns.' },
      { id: 'b', text: 'Underfitting; addressed by removing training data and making the model smaller', isCorrect: false, explanation: 'Incorrect: Underfitting results in low accuracy on both training and validation sets.' },
      { id: 'c', text: 'Vanishing gradient; addressed by switching to sigmoid activations', isCorrect: false, explanation: 'Incorrect: Vanishing gradient prevents the model from training in the first place.' },
      { id: 'd', text: 'Data leakage; addressed by increasing the learning rate 100x', isCorrect: false, explanation: 'Incorrect: High learning rate will cause divergence, not fix validation discrepancy.' }
    ]
  },
  {
    id: 'ml-numpy-vectorization',
    skillId: 'machine-learning',
    prerequisiteSkillId: 'python',
    title: 'Vectorization vs Python Loops',
    prompt: 'Why do modern data science and AI libraries (NumPy, PyTorch) prioritize vectorized tensor operations over standard Python `for` loops?',
    type: 'engineering-reasoning',
    difficulty: 'beginner',
    whyThisQuestionMatters: 'Tests computational understanding of SIMD hardware instructions, memory locality, and C-extension acceleration.',
    options: [
      { id: 'a', text: 'Vectorized operations execute in contiguous C/Fortran memory blocks leveraging CPU SIMD vector instructions, running up to 100x faster', isCorrect: true, explanation: 'Correct! Python loops incur dynamic type-checking and boxing overhead on every iteration. Vectorized operations run directly in optimized native hardware registers.' },
      { id: 'b', text: 'Python loops are capped at a maximum of 1,000 iterations by the operating system', isCorrect: false, explanation: 'Incorrect: Python loops can iterate billions of times.' },
      { id: 'c', text: 'NumPy arrays store text instead of numbers', isCorrect: false, explanation: 'Incorrect: NumPy arrays are typed numeric buffers.' },
      { id: 'd', text: 'Vectorized operations run exclusively on quantum computers', isCorrect: false, explanation: 'Incorrect: Vectorization runs on standard CPUs and GPUs.' }
    ]
  },

  // ==========================================
  // LINUX & DOCKER CONTAINERS
  // ==========================================
  {
    id: 'devops-docker-vs-vm',
    skillId: 'docker-kubernetes',
    prerequisiteSkillId: 'linux-systems',
    title: 'Containerization vs Virtual Machines',
    prompt: 'How does a Docker container differ architecturally from a traditional Virtual Machine (e.g. VMware / VirtualBox)?',
    type: 'engineering-reasoning',
    difficulty: 'intermediate',
    whyThisQuestionMatters: 'Tests core understanding of OS kernels, cgroups, namespaces, and lightweight virtualization.',
    options: [
      { id: 'a', text: 'Containers share the host OS kernel and isolate processes using namespaces and cgroups, whereas VMs run a complete guest OS on top of a hypervisor', isCorrect: true, explanation: 'Correct! Containers are isolated user-space processes running directly on the host kernel, making them start in milliseconds and use minimal RAM.' },
      { id: 'b', text: 'Docker containers compile Python code into hardware silicon chips', isCorrect: false, explanation: 'Incorrect: Containers are software packaging abstractions.' },
      { id: 'c', text: 'Virtual machines cannot run Linux', isCorrect: false, explanation: 'Incorrect: VMs run Linux, Windows, BSD, etc.' },
      { id: 'd', text: 'Docker containers require their own physical motherboard and power supply', isCorrect: false, explanation: 'Incorrect: Containers run on standard virtual or physical servers.' }
    ]
  },
  {
    id: 'linux-process-signals',
    skillId: 'linux-systems',
    title: 'Process Termination & Signals',
    prompt: 'When stopping a server gracefully during a zero-downtime deployment, which POSIX signal should the orchestrator send to allow the server to finish in-flight HTTP requests?',
    type: 'concept',
    difficulty: 'intermediate',
    whyThisQuestionMatters: 'Tests production reliability knowledge for backend systems and container orchestrators.',
    options: [
      { id: 'a', text: 'SIGKILL (kill -9)', isCorrect: false, explanation: 'Incorrect: SIGKILL cannot be caught or handled by the process; it terminates the process abruptly, dropping active connections.' },
      { id: 'b', text: 'SIGTERM (kill -15)', isCorrect: true, explanation: 'Correct! SIGTERM notifies the application to initiate graceful shutdown (stop accepting new requests, drain existing sockets, flush database connections).' },
      { id: 'c', text: 'SIGSTOP', isCorrect: false, explanation: 'Incorrect: SIGSTOP pauses process execution without terminating.' },
      { id: 'd', text: 'SIGSEGV', isCorrect: false, explanation: 'Incorrect: SIGSEGV indicates invalid memory segmentation fault.' }
    ]
  },

  // ==========================================
  // EMBEDDED C & HARDWARE
  // ==========================================
  {
    id: 'embedded-pointer-arithmetic',
    skillId: 'embedded-c',
    title: 'C Pointers & Memory Increment',
    prompt: 'Given a 32-bit architecture where `sizeof(uint32_t) == 4`, what is the byte address printed by `ptr + 1`?',
    type: 'code-prediction',
    difficulty: 'intermediate',
    whyThisQuestionMatters: 'Tests mastery of typed pointer arithmetic and memory addressing in systems programming.',
    codeSnippet: {
      language: 'c',
      code: `uint32_t *ptr = (uint32_t *)0x20000000;
printf("%p\\n", (void *)(ptr + 1));`
    },
    options: [
      { id: 'a', text: '0x20000001', isCorrect: false, explanation: 'Incorrect: Pointer arithmetic scales by the size of the pointed-to type, not 1 byte.' },
      { id: 'b', text: '0x20000004', isCorrect: true, explanation: 'Correct! Adding 1 to a pointer of type `uint32_t *` advances the address by `1 * sizeof(uint32_t)` = 4 bytes.' },
      { id: 'c', text: '0x20000008', isCorrect: false, explanation: 'Incorrect: 8 bytes would be for uint64_t.' },
      { id: 'd', text: 'Undefined behavior compilation error', isCorrect: false, explanation: 'Incorrect: This is standard C pointer arithmetic.' }
    ]
  }
];

export function getQuestionsForCareer(careerId: string): DiagnosticQuestion[] {
  // Return tailored set of questions based on target career
  switch (careerId) {
    case 'frontend-developer':
      return DIAGNOSTIC_QUESTIONS.filter(q =>
        ['javascript', 'react', 'rest-apis', 'git-github'].includes(q.skillId)
      );

    case 'backend-developer':
      return DIAGNOSTIC_QUESTIONS.filter(q =>
        ['rest-apis', 'database-internals', 'networking-protocols', 'javascript', 'data-structures', 'linux-systems'].includes(q.skillId)
      );

    case 'aiml-engineer':
    case 'data-scientist':
      return DIAGNOSTIC_QUESTIONS.filter(q =>
        ['python', 'machine-learning', 'data-structures', 'git-github', 'database-internals'].includes(q.skillId)
      );

    case 'devops-cloud-engineer':
    case 'cybersecurity-engineer':
      return DIAGNOSTIC_QUESTIONS.filter(q =>
        ['linux-systems', 'networking-protocols', 'docker-kubernetes', 'git-github', 'rest-apis'].includes(q.skillId)
      );

    case 'embedded-engineer':
    case 'electronics-engineer':
    case 'robotics-engineer':
      return DIAGNOSTIC_QUESTIONS.filter(q =>
        ['embedded-c', 'data-structures', 'linux-systems', 'python', 'git-github'].includes(q.skillId)
      );

    case 'fullstack-developer':
    case 'software-engineer':
    case 'exploring':
    default:
      return DIAGNOSTIC_QUESTIONS.filter(q =>
        ['javascript', 'react', 'rest-apis', 'database-internals', 'networking-protocols', 'data-structures', 'git-github'].includes(q.skillId)
      );
  }
}
