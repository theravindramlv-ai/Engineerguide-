import type { Roadmap } from './types';

export const devopsCloudRoadmap: Roadmap = {
  id: 'devops-cloud',
  slug: 'devops-cloud',
  title: 'Cloud Platform & Site Reliability Engineering (SRE)',
  branchId: 'devops-cloud',
  branchName: 'Cloud Infrastructure & SRE Engineering',
  subtitle: 'From Linux Kernel cgroups & Container Internals to Multi-Cluster Kubernetes and GitOps Declarative Infrastructure',
  description: 'Design, automate, and operate high-availability cloud platforms. Learn how Linux namespaces isolate processes, how Kubernetes schedules pods, how Terraform declares infrastructure, and how eBPF observability catches production latency spikes.',
  accentColor: '#10b981',
  estimatedWeeks: 34,
  totalHours: 390,
  difficultyLevel: 'Systems Intensive',
  prerequisitesOverview: ['Comfort with Unix terminal/Bash scripting', 'Basic understanding of networking (DNS, subnets, ports)'],
  phases: [
    {
      phaseNumber: 1,
      title: 'Linux Kernel Internals & Container Virtualization',
      subtitle: 'cgroups v2, network namespaces, overlay filesystems, systemd, and building containers from scratch in bash.',
      badge: 'Operating System Internals',
      learnerExperience: {
        stageNumber: 1,
        phaseName: 'Linux Namespaces & Process Isolation',
        emotionalState: 'The Wall of Abstraction',
        feelingSummary: 'You used Docker for years without knowing what it does. Now, digging into `/proc`, `unshare`, and `iptables` rules feels dizzyingly low-level.',
        internalMonologue: [
          '"Containers aren\'t mini virtual machines? They\'re just regular processes with restricted kernel views!"',
          '"Looking at `strace` output and seeing system calls demystified why my permission errors were happening."'
        ],
        whatIsActuallyHappening: 'You are gaining root-level confidence in the operating system. You no longer fear Linux configuration files, memory limits, or kernel panics.',
        commonPitfalls: [
          'Running containers as root user in production without dropped Linux capabilities.',
          'Ignoring memory limits and watching the Linux OOM-killer silently terminate critical backend processes.'
        ],
        survivalAdvice: 'Build a container runtime from scratch using `unshare`, `chroot`, and `cgroups` in a 50-line bash script. It will dissolve all container mystery.'
      },
      nodes: [
        {
          id: 'linux-kernel-containers',
          title: 'Linux Internals: Namespaces, cgroups v2 & System Calls',
          shortDescription: 'Process isolation (PID, Mount, NET, IPC), resource quotas, memory cgroups, and strace debugging.',
          detailedExplanation: 'Demystify container runtimes. Learn how Linux `cgroups` restrict CPU and RAM bandwidth, how network namespaces provide virtual ethernet interfaces (`veth`), and how overlay2 filesystems layer image changes.',
          category: 'Linux & OS',
          difficulty: 'Intermediate',
          estimatedHours: 35,
          prerequisites: [],
          tags: ['Linux', 'Containers', 'cgroups', 'Namespaces', 'Kernel'],
          isEssential: true,
          resources: [
            {
              title: 'The Linux Programming Interface (Michael Kerrisk)',
              url: 'https://man7.org/tlpi/',
              type: 'book',
              authorityTier: 'Tier 1 Official Spec',
              description: 'The canonical authority on Linux system programming and kernel API mechanics.',
              isFree: true,
              estimatedReadHours: 40
            },
            {
              title: 'Build Your Own Container Using Less Than 100 Lines of Go (Liz Rice)',
              url: 'https://www.youtube.com/watch?v=8fi7uSYlOdc',
              type: 'lecture',
              authorityTier: 'Industry Benchmark GitHub',
              description: 'Legendary talk demonstrating how containers are made using basic Linux syscalls.',
              isFree: true,
              estimatedReadHours: 3
            }
          ]
        },
        {
          id: 'kubernetes-architecture',
          title: 'Kubernetes Architecture: Control Plane & Reconciliation Loops',
          shortDescription: 'API server, etcd consensus, kube-scheduler, kubelet, and declarative state reconciliation.',
          detailedExplanation: 'How Kubernetes orchestrates planetary-scale computing. Understand the level-triggered control loops: comparing desired state in etcd with actual cluster state, scheduling pods to worker nodes, and managing CNI network overlays.',
          category: 'Orchestration',
          difficulty: 'Advanced',
          estimatedHours: 45,
          prerequisites: ['linux-kernel-containers'],
          tags: ['Kubernetes', 'etcd', 'K8s', 'Cloud Native'],
          isEssential: true,
          resources: [
            {
              title: 'Official Kubernetes Documentation — Cluster Architecture',
              url: 'https://kubernetes.io/docs/concepts/architecture/',
              type: 'official-doc',
              authorityTier: 'Tier 1 Official Spec',
              description: 'Canonical documentation on control plane components, pod lifecycle, services, and ingress controllers.',
              isFree: true,
              estimatedReadHours: 25
            },
            {
              title: 'Kubernetes the Hard Way (Kelsey Hightower)',
              url: 'https://github.com/kelseyhightower/kubernetes-the-hard-way',
              type: 'github',
              authorityTier: 'Industry Benchmark GitHub',
              description: 'Bootstrap a secure Kubernetes cluster from scratch without automated tools. The gold standard for K8s mastery.',
              isFree: true,
              estimatedReadHours: 20
            }
          ]
        }
      ],
      capstoneProject: {
        id: 'k8s-hard-way-cluster',
        title: 'Capstone: Production Multi-Node Kubernetes Cluster with GitOps (ArgoCD)',
        brief: 'Provision a highly available 3-node Kubernetes cluster from virtual machines. Configure TLS certificates with cfssl, set up Cilium CNI with eBPF data path, deploy ingress-nginx, and establish a declarative GitOps pipeline with ArgoCD.',
        deliverables: [
          'Encrypted etcd multi-member cluster configuration with automated backup cron',
          'Cilium CNI deployed in kube-proxy replacement mode utilizing eBPF',
          'ArgoCD GitOps application tracking a GitHub repository with automated sync and rollback policies'
        ],
        estimatedHours: 30,
        difficulty: 'Advanced'
      }
    }
  ]
};
