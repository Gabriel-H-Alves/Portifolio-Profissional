// ═══════════════════════════════════════════════════════
// NEXUS OS v3 — Project Vault Data
// ═══════════════════════════════════════════════════════

export const projects = [
  {
    id: 'VLT-001',
    name: 'Neural Vision System',
    spec: 'SYS.ENG // COMP_VISION_01',
    desc: 'High-throughput computer vision engine performing real-time multi-object detection and segmentation at 60+ FPS using custom TensorRT-optimized CNNs.',
    fullDesc: 'End-to-end computer vision infrastructure engineered with custom deep learning backbones. Features dynamic bounding box prediction, spatial trajectory analysis, and sub-10ms inference latency on CUDA hardware.',
    problem: 'Manual inspection bottlenecks in high-speed manufacturing lines resulting in missed quality defects.',
    solution: 'Designed and deployed an edge-accelerated CNN pipeline with real-time RTSP stream consumption and automated telemetry alerts.',
    result: 'Reduced defect escape rates by 84% and achieved over $400K annual cost reduction.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'CUDA', 'FastAPI', 'Docker'],
    status: 'deployed',
    category: 'ai',
    icon: '👁️',
    links: { demo: '#', code: 'https://github.com' }
  },
  {
    id: 'VLT-002',
    name: 'Autonomous Agent Orchestrator',
    spec: 'AI.OPS // MULTI_AGENT_02',
    desc: 'Autonomous multi-agent orchestration framework leveraging LLMs, vector memory (RAG), and dynamic tool execution for complex workflow automation.',
    fullDesc: 'Enterprise-grade agentic system capable of decomposing multi-step strategic objectives into verifiable atomic tasks, self-correcting runtime errors, and collaborating across specialized agent personas.',
    problem: 'Repetitive human triage and complex decision-tree workflows creating operational drag.',
    solution: 'Engineered a graph-based state machine powered by LangChain and pgvector for hierarchical agent decision execution.',
    result: 'Automated 75% of tier-1 and tier-2 operational workflows with 98.2% semantic accuracy.',
    tech: ['Python', 'LangChain', 'FastAPI', 'pgvector', 'PostgreSQL', 'Redis'],
    status: 'deployed',
    category: 'ai',
    icon: '🤖',
    links: { demo: '#', code: 'https://github.com' }
  },
  {
    id: 'VLT-003',
    name: 'Smart Automation & IoT Hub',
    spec: 'HW.IOT // EMBEDDED_ROBOTICS_03',
    desc: 'Unified industrial command platform orchestrating distributed RPA software robots and embedded IoT sensor microcontrollers with telemetry HUD.',
    fullDesc: 'Centralized edge-to-cloud telemetry and orchestration bridge connecting ESP32/Arduino sensor grids with software bot runners using pub/sub architecture.',
    problem: 'Fragmented hardware devices and lack of real-time telemetry across multi-site industrial plants.',
    solution: 'Built an event-driven broker using MQTT protocols with zero-lag WebSocket dashboard synchronization.',
    result: 'Seamless telemetry ingestion from 50+ concurrent hardware nodes with 99.9% packet delivery.',
    tech: ['Python', 'React', 'MQTT', 'Arduino', 'ESP32', 'Docker'],
    status: 'deployed',
    category: 'automation',
    icon: '🦾',
    links: { demo: '#', code: 'https://github.com' }
  },
  {
    id: 'VLT-004',
    name: 'DataFlow Analytics Matrix',
    spec: 'DATA.ENG // STREAM_PIPELINE_04',
    desc: 'Real-time high-scale data visualization platform with ETL processing engines handling 2M+ records daily with sub-second OLAP query response times.',
    fullDesc: 'Modern data warehousing and streaming analytics dashboard featuring modular D3.js visualization widgets, anomaly detection spikes, and automated report generation.',
    problem: 'Siloed relational databases unable to deliver real-time operational insights to executive leadership.',
    solution: 'Designed an asynchronous streaming ETL pipeline backed by Redis caching layers and optimized PostgreSQL indexes.',
    result: 'Instant dashboard telemetry rendering with query latency under 350ms across millions of historical records.',
    tech: ['TypeScript', 'React', 'D3.js', 'Node.js', 'PostgreSQL', 'Redis'],
    status: 'deployed',
    category: 'web',
    icon: '📊',
    links: { demo: '#', code: 'https://github.com' }
  },
  {
    id: 'VLT-005',
    name: 'RoboGuard Sentinel Drone',
    spec: 'ROB.SLAM // AUTONOMOUS_NAV_05',
    desc: 'Autonomous patrol robot prototype utilizing SLAM (Simultaneous Localization and Mapping), LiDAR obstacle avoidance, and thermal anomaly scanning.',
    fullDesc: 'Autonomous mobile robot (AMR) integrating ROS navigation stacks, 2D LiDAR sensors, and computer vision object tracking for 24/7 facility safety patrolling.',
    problem: 'High risk exposure and blind spots in continuous hazardous industrial patrol zones.',
    solution: 'Configured ROS navigation waypoint nodes with fail-safe collision avoidance and real-time thermal alert streaming.',
    result: 'Completed 500+ hours of autonomous obstacle navigation with zero collision incidents.',
    tech: ['ROS', 'C++', 'Python', 'Raspberry Pi', 'OpenCV', 'LiDAR'],
    status: 'prototype',
    category: 'automation',
    icon: '🛡️',
    links: { demo: '#', code: 'https://github.com' }
  },
  {
    id: 'VLT-006',
    name: 'NEXUS OS Command Center',
    spec: 'CORE.SYS // AI_CAREER_OS_06',
    desc: 'Personal AI Operating System showcasing career milestones, neural tech graphs, tactical logs, and built-in AI conversational assistant.',
    fullDesc: 'State-of-the-art interactive web experience demonstrating engineering mastery through custom design systems, GSAP timeline animations, and zero heavy dependencies.',
    problem: 'Conventional portfolios fail to convey modern engineering rigor, vision, and depth.',
    solution: 'Crafted a sci-fi command center aesthetic with real interactive systems and game-like immersion.',
    result: 'Unforgettable impression establishing undisputed technical authority and innovation.',
    tech: ['JavaScript', 'CSS3 Design System', 'GSAP', 'HTML5 Canvas', 'Vite'],
    status: 'active',
    category: 'web',
    icon: '🔮',
    links: { demo: '#', code: 'https://github.com' }
  }
];
