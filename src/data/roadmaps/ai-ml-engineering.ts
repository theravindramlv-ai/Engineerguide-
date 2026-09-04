import type { Roadmap } from './types';

export const aiMlRoadmap: Roadmap = {
  id: 'ai-ml-engineering',
  slug: 'ai-ml-engineering',
  title: 'AI & Machine Learning Systems Engineering',
  branchId: 'ai-ml',
  branchName: 'Artificial Intelligence & Machine Learning',
  subtitle: 'From Multivariable Calculus & PyTorch internals to Transformer Attention & Production LLM Infrastructure',
  description: 'A mathematically rigorous and systems-focused journey into modern machine learning. Go beyond calling APIs to understanding tensor operations, gradient descent backpropagation, architecture design, and low-latency deployment.',
  accentColor: '#7928ca',
  estimatedWeeks: 36,
  totalHours: 420,
  difficultyLevel: 'Rigorous Technical',
  prerequisitesOverview: ['Comfort with Python programming', 'High-school Algebra & Basic Calculus', 'Willingness to debug tensor shape mismatches'],
  phases: [
    {
      phaseNumber: 1,
      title: 'Mathematical Foundations & Computational Tensors',
      subtitle: 'Linear algebra, calculus of vector spaces, and probability distributions that power neural networks.',
      badge: 'Core Foundations',
      learnerExperience: {
        stageNumber: 1,
        phaseName: 'Linear Algebra & Gradients',
        emotionalState: 'The Wall of Abstraction',
        feelingSummary: 'You expected to build neural networks on day 1, but you find yourself staring at matrix decompositions and partial derivatives. You wonder: "Do I really need this math?"',
        internalMonologue: [
          '"Why am I calculating eigenvalues by hand when PyTorch does it in 1 line?"',
          '"I feel like I took a detour into pure mathematics."',
          '"Wait, when I look at a tensor shape error, I finally understand what row-major vs column-major memory layout actually means."'
        ],
        whatIsActuallyHappening: 'Your brain is establishing spatial intuition for high-dimensional geometric hyperplanes. Without this, modern loss landscapes and embedding spaces will always feel like black magic.',
        commonPitfalls: [
          'Skipping matrix dimensions and struggling endlessly later with tensor broadcast errors.',
          'Memorizing proofs instead of understanding geometric transformations (rotation, scaling, projection).'
        ],
        survivalAdvice: 'Visualize matrices as transformations of space (3Blue1Brown). When a concept feels abstract, write a 10-line NumPy script to verify the dimensions.'
      },
      nodes: [
        {
          id: 'linear-algebra-tensors',
          title: 'Linear Algebra for Machine Learning',
          shortDescription: 'Vector spaces, matrix multiplications, dot products, projection, and SVD decomposition.',
          detailedExplanation: 'Machine learning models are fundamentally sequences of geometric affine transformations. Grasping vector projections, orthogonal bases, matrix ranks, and Singular Value Decomposition (SVD) allows you to reason about embeddings, dimensionality reduction (PCA), and transformer query-key attention.',
          category: 'Mathematics',
          difficulty: 'Intermediate',
          estimatedHours: 40,
          prerequisites: ['Basic Python'],
          tags: ['Linear Algebra', 'NumPy', 'Math'],
          isEssential: true,
          resources: [
            {
              title: 'MIT 18.06: Linear Algebra (Prof. Gilbert Strang)',
              url: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
              type: 'university',
              authorityTier: 'MIT / Stanford / Harvard',
              description: 'The golden standard of computational linear algebra by legendary professor Gilbert Strang.',
              isFree: true,
              estimatedReadHours: 35
            },
            {
              title: 'Essence of Linear Algebra — 3Blue1Brown',
              url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab',
              type: 'interactive',
              authorityTier: 'Tier 1 Official Spec',
              description: 'Visual geometric animations explaining eigenvectors, transformations, and determinants.',
              isFree: true,
              estimatedReadHours: 8
            },
            {
              title: 'Mathematics for Machine Learning (Deisenroth, Faisal, Ong)',
              url: 'https://mml-book.github.io/',
              type: 'book',
              authorityTier: 'Canonical Open Book',
              description: 'Free open-access textbook bridging linear algebra and probability directly into ML formulations.',
              isFree: true,
              estimatedReadHours: 30
            }
          ]
        },
        {
          id: 'multivariable-calculus',
          title: 'Vector Calculus & Automatic Differentiation',
          shortDescription: 'Jacobians, Hessians, partial derivatives, and computational reverse-mode graphs.',
          detailedExplanation: 'Gradient descent computes the steepest descent direction across millions of model parameters. Reverse-mode automatic differentiation (the algorithmic engine of PyTorch autograd) relies directly on the chain rule applied across a Directed Acyclic Graph (DAG) of tensor operations.',
          category: 'Mathematics',
          difficulty: 'Intermediate',
          estimatedHours: 30,
          prerequisites: ['linear-algebra-tensors'],
          tags: ['Calculus', 'Autograd', 'Optimization'],
          isEssential: true,
          resources: [
            {
              title: 'Khan Academy: Multivariable Calculus & Gradient Vectors',
              url: 'https://www.khanacademy.org/math/multivariable-calculus',
              type: 'interactive',
              authorityTier: 'Canonical Open Book',
              description: 'Intuitive breakdown of gradients, directional derivatives, and optimization surfaces.',
              isFree: true,
              estimatedReadHours: 15
            },
            {
              title: 'The Matrix Calculus You Need For Deep Learning (Parr & Howard)',
              url: 'https://arxiv.org/abs/1802.01528',
              type: 'book',
              authorityTier: 'Tier 1 Official Spec',
              description: 'Clear, concise paper deriving matrix derivatives and chain rules for neural networks.',
              isFree: true,
              estimatedReadHours: 6
            }
          ]
        },
        {
          id: 'numpy-vectorization',
          title: 'NumPy Tensor Computations & Vectorization',
          shortDescription: 'Strides, memory broadcasting, contiguous buffers, and vectorized SIMD execution.',
          detailedExplanation: 'Python loops are slow. Vectorization translates numerical operations into optimized C/BLAS library routines using hardware SIMD. You will build a deep understanding of broadcasting rules, views vs copies, and tensor contiguity in memory.',
          category: 'Implementation',
          difficulty: 'Beginner',
          estimatedHours: 20,
          prerequisites: ['linear-algebra-tensors'],
          tags: ['NumPy', 'Python', 'Performance'],
          isEssential: true,
          resources: [
            {
              title: 'Official NumPy Comprehensive Documentation & Tutorials',
              url: 'https://numpy.org/doc/stable/user/absolute_beginners.html',
              type: 'official-doc',
              authorityTier: 'Tier 1 Official Spec',
              description: 'The definitive manual on NumPy array structures, indexing, broadcasting, and universal functions.',
              isFree: true,
              estimatedReadHours: 12
            },
            {
              title: 'From Python to NumPy (Nicolas P. Rougier)',
              url: 'https://www.labri.fr/perso/nrougier/from-python-to-numpy/',
              type: 'book',
              authorityTier: 'Canonical Open Book',
              description: 'Open-access masterclass on writing blazing-fast vectorized code without memory bloat.',
              isFree: true,
              estimatedReadHours: 10
            }
          ]
        }
      ],
      capstoneProject: {
        id: 'micrograd-from-scratch',
        title: 'Capstone: Autograd Engine from Pure Python',
        brief: 'Build a miniature scalar autograd engine (similar to Andrej Karpathy micrograd) implementing forward and backward passes, dynamic computational DAG, and training an MLP classifier from scratch without PyTorch.',
        deliverables: [
          'Value class supporting +, *, pow, relu, and tanh with graph tracking',
          'Reverse-mode topological sort .backward() pass',
          'Miniature Multi-Layer Perceptron (MLP) trained on a synthetic non-linear dataset',
          'Unit tests comparing computed gradients against PyTorch numerical gradients'
        ],
        estimatedHours: 18,
        difficulty: 'Intermediate',
        githubTemplateUrl: 'https://github.com/karpathy/micrograd'
      }
    },
    {
      phaseNumber: 2,
      title: 'Deep Neural Networks & PyTorch Internals',
      subtitle: 'Convolutions, Recurrence, Regularization, and debugging PyTorch training loops on GPU.',
      badge: 'Deep Learning',
      learnerExperience: {
        stageNumber: 2,
        phaseName: 'PyTorch & Backpropagation',
        emotionalState: 'The Aha! Breakthrough',
        feelingSummary: 'After the initial struggle with tensor shapes, things click! You train your first model and watch the loss curve decay steadily. You feel a massive wave of capability.',
        internalMonologue: [
          '"My GPU is actually at 100% utilization!"',
          '"Loss went from 2.4 down to 0.18 — it actually learned patterns without hardcoded rules."',
          '"Wait, why is validation loss exploding while training loss hits 0? Oh, overfitting is real."'
        ],
        whatIsActuallyHappening: 'You have transitioned from passive theory into active experimental science. You learn to read loss curves like an EKG and understand bias-variance trade-offs.',
        commonPitfalls: [
          'Treating deep learning like magic hyperparameters without checking gradient norm explosions.',
          'Forgetting model.eval() and torch.no_grad() during inference, causing silent test evaluation leakage.'
        ],
        survivalAdvice: 'Always overfit a single batch first (5 samples). If your architecture cannot achieve 0 loss on 5 samples, you have a code bug, not a data problem.'
      },
      nodes: [
        {
          id: 'pytorch-fundamentals',
          title: 'PyTorch Architecture: Tensors, Autograd & Modules',
          shortDescription: 'nn.Module, Dataset/DataLoader workers, custom loss functions, and CUDA device transfers.',
          detailedExplanation: 'Deep dive into PyTorch idioms. Learn how nn.Parameter registers tensors, how torch.optim updates gradients, how zero_grad() prevents accumulation, and how multi-worker DataLoaders prevent GPU starvation.',
          category: 'Deep Learning',
          difficulty: 'Intermediate',
          estimatedHours: 35,
          prerequisites: ['multivariable-calculus', 'numpy-vectorization'],
          tags: ['PyTorch', 'Deep Learning', 'GPU'],
          isEssential: true,
          resources: [
            {
              title: 'Official PyTorch Deep Learning Tutorials',
              url: 'https://pytorch.org/tutorials/',
              type: 'official-doc',
              authorityTier: 'Tier 1 Official Spec',
              description: 'Canonical PyTorch guides from beginner blitz to production C++ LibTorch extensions.',
              isFree: true,
              estimatedReadHours: 20
            },
            {
              title: 'Stanford CS231n: Deep Learning for Computer Vision (Fei-Fei Li / Karpathy)',
              url: 'https://cs231n.github.io/',
              type: 'university',
              authorityTier: 'MIT / Stanford / Harvard',
              description: 'World-renowned lecture notes on backprop, CNNs, batch norm, and optimization algorithms.',
              isFree: true,
              estimatedReadHours: 30
            }
          ]
        },
        {
          id: 'optimization-regularization',
          title: 'Optimization Dynamics: AdamW, Learning Rate Schedules & Norms',
          shortDescription: 'Momentum, RMSprop, AdamW weight decay, Batch Normalization, Layer Normalization, and Dropout.',
          detailedExplanation: 'Why vanilla SGD fails on saddle points. Mathematical breakdown of adaptive learning rates, cosine annealing with warm restarts, and why LayerNorm is preferred over BatchNorm in sequential and transformer architectures.',
          category: 'Deep Learning',
          difficulty: 'Intermediate',
          estimatedHours: 25,
          prerequisites: ['pytorch-fundamentals'],
          tags: ['Optimization', 'AdamW', 'LayerNorm'],
          isEssential: true,
          resources: [
            {
              title: 'Deep Learning Book (Goodfellow, Bengio, Courville)',
              url: 'https://www.deeplearningbook.org/',
              type: 'book',
              authorityTier: 'Canonical Open Book',
              description: 'Comprehensive free academic textbook covering optimization for training deep models.',
              isFree: true,
              estimatedReadHours: 25
            },
            {
              title: 'Fast.ai Practical Deep Learning for Coders',
              url: 'https://course.fast.ai/',
              type: 'interactive',
              authorityTier: 'Industry Benchmark GitHub',
              description: 'Pragmatic, high-yield code-first approach to training world-class models on modern GPUs.',
              isFree: true,
              estimatedReadHours: 30
            }
          ]
        }
      ],
      capstoneProject: {
        id: 'resnet-from-scratch',
        title: 'Capstone: Residual Neural Network with Custom GPU DataLoader',
        brief: 'Implement a ResNet architecture with skip connections, custom convolution blocks, mixed precision (torch.cuda.amp), and achieve >92% test accuracy on CIFAR-10 in under 15 minutes of training.',
        deliverables: [
          'Custom ResNet-18 module with skip connections implemented from scratch',
          'Mixed precision training loop utilizing FP16 and GradScaler',
          'TensorBoard/WandB telemetry tracking learning rate decay and gradient norms',
          'Model checkpointing and latency profiling script'
        ],
        estimatedHours: 20,
        difficulty: 'Intermediate'
      }
    },
    {
      phaseNumber: 3,
      title: 'Attention Mechanisms, Transformers & Modern LLMs',
      subtitle: 'Self-attention, Multi-Head Attention, RoPE embeddings, KV-cache, and decoder-only architectures.',
      badge: 'Modern GenAI',
      learnerExperience: {
        stageNumber: 3,
        phaseName: 'Transformer Architecture & KV-Cache',
        emotionalState: 'Engineering Fluency',
        feelingSummary: 'You move from consumer of AI to builder of AI systems. You dismantle the transformer black-box and see that attention is simply query-key dot products and softmax routing.',
        internalMonologue: [
          '"Q, K, V are just linear projections of the same token embeddings!"',
          '"Now I see why autoregressive generation is memory-bandwidth bound: the KV-cache has to be re-read every token."',
          '"I can actually read contemporary NeurIPS/ArXiv papers and implement their equations."'
        ],
        whatIsActuallyHappening: 'You have achieved true engineering literacy. Instead of depending on third-party SaaS wrappers, you understand memory footprints, sequence lengths, and context windows at the byte level.',
        commonPitfalls: [
          'Confusing training attention (parallel causal mask) with autoregressive inference (sequential generation with KV cache).',
          'Ignoring tokenization quirks (BPE merges, byte fallbacks, and whitespace handling).'
        ],
        survivalAdvice: 'Watch Andrej Karpathy "Let\'s build GPT from scratch" multiple times while typing every line of code by hand into your editor.'
      },
      nodes: [
        {
          id: 'attention-mechanisms',
          title: 'Scaled Dot-Product & Multi-Head Attention',
          shortDescription: 'Attention Is All You Need: queries, keys, values, causal masking, and rotary position embeddings (RoPE).',
          detailedExplanation: 'Breakdown of self-attention mechanisms. Learn why the square root of dk scaling prevents softmax saturation, how causal masks prevent looking into future tokens, and how Rotary Position Embeddings (RoPE) inject relative positional distance.',
          category: 'Modern Architectures',
          difficulty: 'Advanced',
          estimatedHours: 35,
          prerequisites: ['pytorch-fundamentals'],
          tags: ['Attention', 'Transformers', 'RoPE'],
          isEssential: true,
          resources: [
            {
              title: 'Attention Is All You Need (Vaswani et al.)',
              url: 'https://arxiv.org/abs/1706.03762',
              type: 'book',
              authorityTier: 'Tier 1 Official Spec',
              description: 'The foundational scientific paper that revolutionized NLP, vision, and modern generative AI.',
              isFree: true,
              estimatedReadHours: 8
            },
            {
              title: 'The Illustrated Transformer (Jay Alammar)',
              url: 'https://jalammar.github.io/illustrated-transformer/',
              type: 'interactive',
              authorityTier: 'Canonical Open Book',
              description: 'Visual diagrams breaking down tensor routing through self-attention layers.',
              isFree: true,
              estimatedReadHours: 6
            },
            {
              title: 'Let\'s build GPT: from scratch, in code (Andrej Karpathy)',
              url: 'https://www.youtube.com/watch?v=kCc8FmEb1nY',
              type: 'lecture',
              authorityTier: 'MIT / Stanford / Harvard',
              description: '2-hour masterclass coding a character-level Generative Pre-trained Transformer step by step.',
              isFree: true,
              estimatedReadHours: 5
            }
          ]
        },
        {
          id: 'inference-kv-cache',
          title: 'LLM Inference Optimization: KV-Cache, PagedAttention & Quantization',
          shortDescription: 'Understanding the memory-bandwidth wall, flash-attention, INT8/INT4 quantization, and speculative decoding.',
          detailedExplanation: 'During autoregressive decoding, recomputing prior token activations costs O(N^2) compute. The KV-cache caches prior Key and Value vectors, converting generation to O(1) compute per step but O(N) memory. Explore vLLM PagedAttention and FlashAttention-2 GPU SRAM tiling.',
          category: 'Systems Engineering',
          difficulty: 'Advanced',
          estimatedHours: 30,
          prerequisites: ['attention-mechanisms'],
          tags: ['vLLM', 'Inference', 'Quantization', 'FlashAttention'],
          isEssential: true,
          resources: [
            {
              title: 'FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness (Tri Dao)',
              url: 'https://arxiv.org/abs/2205.14135',
              type: 'book',
              authorityTier: 'Tier 1 Official Spec',
              description: 'Seminal hardware-aware attention algorithm reducing HBM memory read/writes.',
              isFree: true,
              estimatedReadHours: 10
            },
            {
              title: 'vLLM: Efficient Memory Management for Large Language Models',
              url: 'https://docs.vllm.ai/en/latest/',
              type: 'official-doc',
              authorityTier: 'Tier 1 Official Spec',
              description: 'Architecture documentation on virtual memory paging (PagedAttention) for high-throughput serving.',
              isFree: true,
              estimatedReadHours: 12
            }
          ]
        }
      ],
      capstoneProject: {
        id: 'nano-gpt-custom-tokenizer',
        title: 'Capstone: Mini-Llama Decoder with KV-Cache & Streaming API',
        brief: 'Build and train a 50M parameter decoder-only transformer with RoPE, SwiGLU activation, and RMSNorm. Implement autoregressive generation with KV-cache and wrap it in an asynchronous FastAPI streaming server.',
        deliverables: [
          'Pre-training script using PyTorch DDP on a raw text corpus',
          'Inference engine with KV-cache yielding 3x token-per-second acceleration over naive forward pass',
          'Server-Sent Events (SSE) streaming API endpoint serving generated completions'
        ],
        estimatedHours: 25,
        difficulty: 'Advanced'
      }
    }
  ]
};
