import type { Roadmap } from './types';

export const embeddedRoboticsRoadmap: Roadmap = {
  id: 'embedded-robotics',
  slug: 'embedded-robotics',
  title: 'Embedded Systems & Robotics Engineering',
  branchId: 'embedded-robotics',
  branchName: 'Hardware, Embedded Firmware & Autonomous Robotics',
  subtitle: 'From Bare-Metal C & ARM Registers to FreeRTOS Schedulers and Autonomous ROS2 Navigation',
  description: 'Bridge software and physical reality. Learn how bits turn into voltage, how memory-mapped registers manipulate silicon, how Real-Time OS kernels prevent race conditions, and how autonomous robots navigate using sensor fusion.',
  accentColor: '#00dfd8',
  estimatedWeeks: 40,
  totalHours: 460,
  difficultyLevel: 'Systems Intensive',
  prerequisitesOverview: ['Fundamental C programming', 'Basic circuit theory (Ohm\'s Law, voltage dividers)', 'Curiosity for hardware debugging with oscilloscopes and logic analyzers'],
  phases: [
    {
      phaseNumber: 1,
      title: 'Bare-Metal C & Silicon Microcontroller Architecture',
      subtitle: 'Registers, Linker Scripts, Memory-Mapped I/O, and Vector Interrupt Tables on ARM Cortex-M.',
      badge: 'Bare-Metal Hardware',
      learnerExperience: {
        stageNumber: 1,
        phaseName: 'Registers & Memory Mapped I/O',
        emotionalState: 'The Wall of Abstraction',
        feelingSummary: 'There is no operating system, no stdout, and no safety net. Your program crashed and the microcontroller is in HardFault. You feel blind without a console.',
        internalMonologue: [
          '"Where did printf go? How do I even print a number?"',
          '"I flipped a bit in the RCC peripheral clock register and nothing happened — wait, clock gating was disabled!"',
          '"Looking at a datasheet that is 1,200 pages long feels terrifying."'
        ],
        whatIsActuallyHappening: 'You are stripping away decades of high-level OS abstractions. For the first time, you understand what a CPU really does: fetch, decode, and execute instructions against physical memory addresses.',
        commonPitfalls: [
          'Forgetting to enable the peripheral clock before accessing register addresses, triggering an immediate BusFault.',
          'Not using the `volatile` keyword for hardware registers, leading compiler optimization passes to optimize away hardware poll loops.'
        ],
        survivalAdvice: 'Use an inexpensive USB logic analyzer ($10) and PulseView. Seeing the physical square waves on an SPI or UART line makes the invisible visible.'
      },
      nodes: [
        {
          id: 'bare-metal-c-pointers',
          title: 'Low-Level C: Pointer Arithmetic & Volatile Memory',
          shortDescription: 'Struct bitfields, volatile keywords, memory alignment, and casting raw addresses to pointer structs.',
          detailedExplanation: 'In embedded systems, hardware peripherals (timers, UART, GPIO) appear as memory addresses. You must master pointer casting, bitwise masking (`|= (1 << PIN)`), structure packing, and using `volatile` to prevent the compiler from caching hardware status register reads in CPU registers.',
          category: 'Firmware Fundamentals',
          difficulty: 'Intermediate',
          estimatedHours: 35,
          prerequisites: ['Basic C'],
          tags: ['C', 'Memory', 'Pointers', 'Volatile'],
          isEssential: true,
          resources: [
            {
              title: 'Making Embedded Systems: Design Patterns for Great Software (Elecia White)',
              url: 'https://www.oreilly.com/library/view/making-embedded-systems/9781449302146/',
              type: 'book',
              authorityTier: 'Canonical Open Book',
              description: 'Essential architectural guide covering resource constraints, memory boundaries, and state machines.',
              isFree: true,
              estimatedReadHours: 20
            },
            {
              title: 'Modern Embedded Systems Programming Course (Quantum Leaps / Miro Samek)',
              url: 'https://www.youtube.com/playlist?list=PLPW8O6W-1chwyTzI3BHwBLbGQoPFxPAPM',
              type: 'lecture',
              authorityTier: 'Tier 1 Official Spec',
              description: 'Acclaimed visual walkthrough explaining ARM architecture, registers, stack frames, and assembly.',
              isFree: true,
              estimatedReadHours: 25
            }
          ]
        },
        {
          id: 'arm-cortex-internals',
          title: 'ARM Cortex-M Architecture & NVIC Interrupt Controller',
          shortDescription: 'Startup code, reset handlers, linker scripts, stack pointers (MSP vs PSP), and priority interrupts.',
          detailedExplanation: 'How a microcontroller boots: executing Reset_Handler, copying initialized `.data` from Flash ROM to SRAM, zeroing `.bss`, and setting up the Nested Vectored Interrupt Controller (NVIC) to service hardware interrupts with deterministic microsecond latency.',
          category: 'Computer Architecture',
          difficulty: 'Advanced',
          estimatedHours: 40,
          prerequisites: ['bare-metal-c-pointers'],
          tags: ['ARM', 'Cortex-M', 'Interrupts', 'Linker Scripts'],
          isEssential: true,
          resources: [
            {
              title: 'ARM Cortex-M3/M4 Technical Reference Manual (ARM Official Documentation)',
              url: 'https://developer.arm.com/documentation/dui0553/latest/',
              type: 'official-doc',
              authorityTier: 'Tier 1 Official Spec',
              description: 'The authoritative silicon spec on CPU registers, instruction set, fault status, and NVIC registers.',
              isFree: true,
              estimatedReadHours: 30
            },
            {
              title: 'The Definitive Guide to ARM Cortex-M3 and Cortex-M4 Processors (Joseph Yiu)',
              url: 'https://www.sciencedirect.com/book/9780124080829/the-definitive-guide-to-arm-cortex-m3-and-cortex-m4-processors',
              type: 'book',
              authorityTier: 'Canonical Open Book',
              description: 'The industry-standard reference manual for firmware architects working on ARM silicon.',
              isFree: true,
              estimatedReadHours: 35
            }
          ]
        }
      ],
      capstoneProject: {
        id: 'bare-metal-uart-driver',
        title: 'Capstone: Bare-Metal UART Driver & Shell from Zero Libraries',
        brief: 'Write a complete bare-metal serial boot shell on an STM32 or RP2040 without using vendor HAL or standard C library. Configure PLL clock tree to 72MHz, enable USART transmitter/receiver with circular ring buffer interrupts, and implement interactive commands.',
        deliverables: [
          'Minimal Linker Script (.ld) and Startup Assembly/C defining vector table',
          'Peripheral register header mapping GPIO and USART registers via memory-mapped structs',
          'Interrupt-driven circular ring buffer for non-blocking serial communication',
          'Command-line interpreter with memory inspect (`peek`/`poke`) functionality'
        ],
        estimatedHours: 25,
        difficulty: 'Intermediate'
      }
    },
    {
      phaseNumber: 2,
      title: 'Real-Time Operating Systems (RTOS) & Concurrency',
      subtitle: 'Preemptive schedulers, semaphores, mutex priority inheritance, and deterministic thread communication.',
      badge: 'Real-Time Systems',
      learnerExperience: {
        stageNumber: 2,
        phaseName: 'FreeRTOS & Deadlocks',
        emotionalState: 'The Aha! Breakthrough',
        feelingSummary: 'Your single `while(1)` super-loop was becoming unmaintainable with delay timers. Moving to RTOS tasks with independent priorities feels like an incredible leap in power.',
        internalMonologue: [
          '"I can blink an LED, read an IMU sensor, and listen to a radio packet concurrently without stutter!"',
          '"Why did my high-priority task freeze? Ah, priority inversion because low-priority task held the I2C mutex!"'
        ],
        whatIsActuallyHappening: 'You are mastering deterministic concurrency. You understand that real-time does not mean "fast" — it means guaranteed execution deadlines.',
        commonPitfalls: [
          'Calling non-ISR-safe FreeRTOS functions inside an Interrupt Service Routine instead of `FromISR` variants.',
          'Under-allocating task stack size, leading to silent memory corruption when an interrupt pushes context to the stack.'
        ],
        survivalAdvice: 'Always enable stack overflow hooks (`configCHECK_FOR_STACK_OVERFLOW = 2`) during development.'
      },
      nodes: [
        {
          id: 'freertos-kernel',
          title: 'FreeRTOS Architecture & Task Scheduling',
          shortDescription: 'Preemptive priority scheduling, task control blocks (TCB), context switching, and tick timers.',
          detailedExplanation: 'Explore how a software context switch works on ARM (saving R4-R11 on task stack, triggering PendSV interrupt, restoring next task stack pointer). Learn task states (Running, Ready, Blocked, Suspended) and tick interrupts.',
          category: 'RTOS',
          difficulty: 'Advanced',
          estimatedHours: 35,
          prerequisites: ['arm-cortex-internals'],
          tags: ['FreeRTOS', 'Context Switch', 'Scheduler', 'Concurrency'],
          isEssential: true,
          resources: [
            {
              title: 'Mastering the FreeRTOS Real Time Kernel (Official FreeRTOS Guide)',
              url: 'https://www.freertos.org/Documentation/RTOS_book.html',
              type: 'official-doc',
              authorityTier: 'Tier 1 Official Spec',
              description: 'Official comprehensive textbook on FreeRTOS task management, queues, timers, and memory allocators.',
              isFree: true,
              estimatedReadHours: 25
            }
          ]
        }
      ],
      capstoneProject: {
        id: 'rtos-sensor-hub',
        title: 'Capstone: Multi-Sensor Telemetry Logger with FreeRTOS & Queue Routing',
        brief: 'Architect an RTOS telemetry logger. A high-priority sensor task samples an accelerometer via SPI at 200Hz, pushes samples to a thread-safe message queue, and a worker task logs records to an SD card with zero missed deadlines.',
        deliverables: [
          'Producer-consumer architecture with FreeRTOS queues and counting semaphores',
          'Mutex with priority inheritance protecting the shared SPI bus',
          'Watchdog timer task monitoring thread heartbeat'
        ],
        estimatedHours: 22,
        difficulty: 'Advanced'
      }
    },
    {
      phaseNumber: 3,
      title: 'Autonomous Robotics, ROS2 & Sensor Fusion',
      subtitle: 'Robot Operating System 2, URDF kinematic chains, Extended Kalman Filtering, and autonomous navigation.',
      badge: 'Robotics & Autonomy',
      learnerExperience: {
        stageNumber: 3,
        phaseName: 'ROS2 & Kinematic Control',
        emotionalState: 'Engineering Fluency',
        feelingSummary: 'You watch a simulated differential-drive robot navigate a virtual room, avoid obstacles, and build an occupancy grid map in RViz. You are designing autonomous machines.',
        internalMonologue: [
          '"DDS middleware handles distributed network communication across microcontrollers and companion computers."',
          '"The robot is actually calculating forward kinematics and generating motor velocities in real time."'
        ],
        whatIsActuallyHappening: 'You have combined control theory, embedded firmware, distributed networking, and computer vision into an integrated robotic system.',
        commonPitfalls: [
          'Misaligning coordinate frames in the TF2 transformation tree (e.g. `base_link` vs `odom` vs `map`).',
          'Relying purely on wheel odometry without IMU sensor fusion, leading to rapid wheel-slip drift.'
        ],
        survivalAdvice: 'Always inspect the TF2 frame tree (`ros2 run tf2_tools view_frames`) whenever a navigation or lidar mapping transform fails.'
      },
      nodes: [
        {
          id: 'ros2-architecture',
          title: 'ROS2 Architecture: Nodes, Topics, Services & Actions',
          shortDescription: 'DDS distributed middleware, publish-subscribe topology, lifecycle nodes, and QoS profiles.',
          detailedExplanation: 'ROS2 (Robot Operating System) is the modern industry standard for industrial and autonomous robotics. Learn DDS pub/sub, real-time executors, Quality of Service (QoS) for lossy wireless vs reliable sensor streams, and building reusable C++/Python packages.',
          category: 'Robotics Software',
          difficulty: 'Intermediate',
          estimatedHours: 40,
          prerequisites: ['freertos-kernel'],
          tags: ['ROS2', 'DDS', 'Robotics', 'C++'],
          isEssential: true,
          resources: [
            {
              title: 'Official ROS2 Documentation & Tutorials (Humble / Jazzy)',
              url: 'https://docs.ros.org/en/jazzy/',
              type: 'official-doc',
              authorityTier: 'Tier 1 Official Spec',
              description: 'Canonical documentation covering workspace setup, nodes, parameters, launch files, and launch testing.',
              isFree: true,
              estimatedReadHours: 25
            },
            {
              title: 'Modern Robotics: Mechanics, Planning, and Control (Kevin Lynch, Frank Park)',
              url: 'http://hades.mech.northwestern.edu/index.php/Modern_Robotics',
              type: 'book',
              authorityTier: 'Canonical Open Book',
              description: 'Free open textbook and video course from Northwestern University on kinematic chains and rigid-body mechanics.',
              isFree: true,
              estimatedReadHours: 40
            }
          ]
        }
      ],
      capstoneProject: {
        id: 'autonomous-nav-robot',
        title: 'Capstone: Autonomous SLAM Navigation Robot with ROS2 & Nav2',
        brief: 'Build an autonomous differential drive robot in ROS2 simulation (Gazebo). Implement an Extended Kalman Filter (robot_localization) fusing wheel encoders and IMU, generate a 2D occupancy grid with SLAM Toolbox, and autonomous waypoint navigation with Nav2.',
        deliverables: [
          'URDF robot description with calibrated joints and lidar/camera sensors',
          'EKF configuration fusing IMU and wheel odometry topics',
          'Nav2 costmap parameters and autonomous obstacle avoidance path planning'
        ],
        estimatedHours: 35,
        difficulty: 'Advanced'
      }
    }
  ]
};
