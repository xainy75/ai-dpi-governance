// Central Data Store for AI for Digital Public Infrastructure & Governance Platform

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Pillars', href: '#pillars' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Framework', href: '#framework' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Insights', href: '#insights' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

export const DPI_PILLARS = [
  {
    id: 'identity',
    title: 'Digital Identity',
    subtitle: 'Inclusive, Biometric & Sovereign ID',
    icon: 'Fingerprint',
    color: 'from-blue-500 to-cyan-400',
    borderColor: 'border-cyan-500/30',
    description: 'Foundational digital identification providing verifiable proof of legal identity for every citizen.',
    aiEnhancement: 'Liveness detection, low-resolution biometric matching, automated document OCR, and fraud spoofing detection.',
    traditionalVsAi: {
      traditional: 'Manual document verification, prone to duplicate registrations and physical impersonation.',
      aiEnhanced: 'Real-time deepfake defense, edge biometric matching across 100M+ records in sub-seconds.'
    }
  },
  {
    id: 'payments',
    title: 'Instant Digital Payments',
    subtitle: 'Zero-Cost P2P & G2P Transfer Stacks',
    icon: 'CreditCard',
    color: 'from-teal-500 to-emerald-400',
    borderColor: 'border-teal-500/30',
    description: 'Interoperable fast-payment rails enabling seamless government-to-person (G2P) transfers and commercial transactions.',
    aiEnhancement: 'Real-time transaction anomaly detection, beneficiary eligibility scoring, and proactive leakage prevention.',
    traditionalVsAi: {
      traditional: 'Batch processing, manual audit logs, high administrative overhead and ghost-beneficiary leakage.',
      aiEnhanced: 'Automated ML pattern matching detecting synthetic IDs and suspicious transfer clusters in milliseconds.'
    }
  },
  {
    id: 'data-exchange',
    title: 'Data Exchange & Interoperability',
    subtitle: 'Consent-Based Data Sharing Networks',
    icon: 'Network',
    color: 'from-indigo-500 to-purple-400',
    borderColor: 'border-indigo-500/30',
    description: 'Standardized protocols allowing siloed government departments to exchange citizen data securely with explicit user consent.',
    aiEnhancement: 'Semantic schema mapping across legacy databases, automated privacy masking (PII redaction), and synthetic data generation for policy modeling.',
    traditionalVsAi: {
      traditional: 'Custom fragile API integrations, manual data harmonization, risk of unmonitored data exposure.',
      aiEnhanced: 'Smart AI routing, zero-knowledge metadata compliance verification, self-healing data pipeline mappers.'
    }
  }
];

export const USE_CASES = [
  {
    id: 'id-verification',
    icon: 'Scan',
    title: 'AI Digital ID Verification & Liveness Detection',
    badge: 'Identity DPI',
    shortDesc: 'Automated liveness verification and anti-spoofing biometrics for inclusive remote onboarding.',
    fullDesc: 'Leverages computer vision models trained on diverse demographic datasets to perform edge biometric verification. Ensures remote bank account opening, SIM registration, and public service enrollment remain secure against physical masks, digital deepfakes, and photo replay attacks.',
    impact: 'Reduces onboarding drop-off by 65% while preventing identity impersonation across rural branches.',
    layer: 'Biometric AI Engine → Identity Stack',
    prerequisites: ['High-throughput biometric registry', 'Sovereign hardware security module (HSM)', 'Privacy-preserving facial feature embeddings']
  },
  {
    id: 'fraud-detection',
    icon: 'ShieldCheck',
    title: 'Fraud & Leakage Detection in Welfare Payments',
    badge: 'Payments DPI',
    shortDesc: 'Graph neural networks and anomaly detection pinpointing duplicate claims and ghost beneficiaries.',
    fullDesc: 'Analyzes multi-dimensional transaction graphs across G2P payout systems to identify collusion, synthetic identities, and illegal intermediary fees. Operates in real-time before payment release to safeguard social safety net funds.',
    impact: 'Estimated 40% reduction in social welfare fund leakage without delaying legitimate transfers.',
    layer: 'ML Anomaly Engine → G2P Payment Rails',
    prerequisites: ['Normalized payout ledgers', 'Real-time transaction logging', 'Audit trail compliance pipeline']
  },
  {
    id: 'citizen-chatbots',
    icon: 'MessageSquareText',
    title: 'Conversational AI for Citizen Service Delivery',
    badge: 'Omnichannel Voice/Text',
    shortDesc: 'Multilingual voice and text LLM agents trained on official gazettes and administrative procedures.',
    fullDesc: 'Enables citizens—including non-literate populations—to access e-governance portals using local spoken dialects (e.g., Urdu, Pashto, Punjabi, Sindhi). Provides step-by-step guidance for birth certificates, land registries, and pension applications.',
    impact: 'Resolves 78% of routine civic queries instantly via WhatsApp, IVR, and web portals.',
    layer: 'Multilingual GenAI → Public Service Portal',
    prerequisites: ['Acoustic model for regional dialects', 'RAG database of updated civil laws', 'Human escalation dispatch']
  },
  {
    id: 'predictive-analytics',
    icon: 'TrendingUp',
    title: 'Predictive Analytics for Health & Agriculture',
    badge: 'Data Exchange DPI',
    shortDesc: 'Satellite imagery and regional health data integration for climate resilience and epidemic forecasting.',
    fullDesc: 'Integrates geospatial satellite telemetry, weather streams, and district health records over secure data exchange channels. Forecasts crop yields, pest outbreaks, and vector-borne disease surges to trigger proactive subsidy dispatches.',
    impact: 'Provides 3-week early warning windows for agricultural drought and dengue surge responses.',
    layer: 'Spatio-Temporal ML → Ministry Dashboards',
    prerequisites: ['Cross-departmental data trust', 'Geospatial raster processing pipeline', 'Standardized health registries']
  },
  {
    id: 'data-interop',
    icon: 'FileCode2',
    title: 'AI-Driven Interoperable Data Exchange',
    badge: 'Data Exchange DPI',
    shortDesc: 'Automated semantic translation between legacy government databases without manual schema rewrites.',
    fullDesc: 'Employs semantic AI agents to automatically translate, clean, and map disparate legacy database schemas across tax, land, and education departments, preserving privacy while enabling single-window citizen applications.',
    impact: 'Cuts inter-departmental data integration projects from months to hours.',
    layer: 'Semantic Parser → Open Data Exchange API',
    prerequisites: ['Consent management framework', 'Zero-Trust network architecture', 'PII auto-anonymization']
  },
  {
    id: 'smart-dashboards',
    icon: 'LayoutDashboard',
    title: 'Smart E-Governance Policy Dashboards',
    badge: 'Policy & Executive Layer',
    shortDesc: 'Real-time decision support systems with natural language query interfaces for public administrators.',
    fullDesc: 'Aggregates national DPI metrics into an executive dashboard allowing ministers and policy directors to ask natural-language questions (e.g., "Which districts show payment disbursement delays this week?") and receive instant verified visualizations.',
    impact: 'Transforms monthly paper reporting cycles into real-time evidence-based governance.',
    layer: 'Executive RAG & Analytics → Minister Suite',
    prerequisites: ['Encrypted data warehouse', 'Role-Based Access Control (RBAC)', 'Explainable AI audit trails']
  }
];

export const FRAMEWORK_LAYERS = [
  {
    id: 'governance',
    number: '04',
    name: 'Governance, Privacy & Ethics Overlay',
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/40',
    textColor: 'text-amber-400',
    badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
    description: 'Enforces human oversight, algorithmic accountability, data sovereignty, and strict privacy boundaries across all lower stacks.',
    components: ['Data Protection & Consent Manager', 'Explainable AI (XAI) Audit Trails', 'Bias & Demographic Parity Checker', 'Human-in-the-Loop (HITL) Dispatch']
  },
  {
    id: 'application',
    number: '03',
    name: 'Application & Service Delivery Layer',
    color: 'from-purple-500/20 to-indigo-500/20',
    borderColor: 'border-purple-500/40',
    textColor: 'text-purple-400',
    badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    description: 'Citizen-facing portals, mobile apps, voice IVR, and administrator control suites powered by responsive AI interfaces.',
    components: ['Civic WhatsApp & Mobile Bots', 'Unified One-Window Portals', 'Ministerial Policy Command Center', 'Field Agent Verification Kits']
  },
  {
    id: 'ai-ml',
    number: '02',
    name: 'AI & Machine Learning Engine Layer',
    color: 'from-teal-500/20 to-cyan-500/20',
    borderColor: 'border-teal-500/40',
    textColor: 'text-teal-400',
    badgeBg: 'bg-teal-500/10 text-teal-300 border-teal-500/30',
    description: 'Core intelligence stack processing multimodal data streams into actionable predictions, automated verifications, and voice dialogue.',
    components: ['Biometric Deep Learning Models', 'Multilingual Low-Resource LLMs', 'Graph Neural Fraud Detectors', 'Geospatial Spatio-Temporal ML']
  },
  {
    id: 'foundational-dpi',
    number: '01',
    name: 'Foundational Digital Public Infrastructure (DPI) Layer',
    color: 'from-blue-500/20 to-sky-500/20',
    borderColor: 'border-blue-500/40',
    textColor: 'text-cyan-400',
    badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    description: 'Open, interoperable, non-proprietary building blocks serving as the digital bedrock for society.',
    components: ['Digital ID Stack (e.g., NADRA / Aadhaar / MOSIP)', 'Fast Payment Rails (e.g., Raast / UPI / Pix)', 'Consent Data Exchange (e.g., Data Stack / Account Aggregator)']
  }
];

export const CASE_STUDIES = [
  {
    id: 'nadra',
    tag: 'Digital ID & Biometrics',
    title: 'NADRA Digital Identity & AI Liveness Verification',
    location: 'Pakistan (National Scale)',
    entity: 'National Database & Registration Authority',
    metrics: [
      { label: 'Registered Citizens', value: '130M+' },
      { label: 'Match Latency', value: '< 400ms' },
      { label: 'Spoof Detection Accuracy', value: '99.4%' }
    ],
    challenge: 'Verification of identity across remote, low-connectivity rural communities suffered from spoofing attacks, poor lighting conditions, and manual document fraud, restricting digital financial inclusion.',
    solution: 'Integrated lightweight AI computer vision algorithms directly into handheld biometric devices used by field agents and bank branch personnel. Implemented passive liveness detection to verify physical presence without complex user gestures.',
    impact: 'Enabled millions of previously unbanked citizens—particularly women in rural districts—to open verified bank accounts instantly while preventing duplicate ID issuances.',
    techStack: ['Convolutional Neural Networks', 'Edge Tensor Processing', 'ISO 30107-3 Liveness Spec', 'Sovereign HSM']
  },
  {
    id: 'ehsaas',
    tag: 'Social Protection & Payouts',
    title: 'Ehsaas / BISP Fraud & Leakage Prevention Rail',
    location: 'Pakistan (Federal & Provincial)',
    entity: 'Benazir Income Support Programme / Ehsaas',
    metrics: [
      { label: 'Beneficiaries Served', value: '15M+ Households' },
      { label: 'Fraud Reduction', value: '~ 38% Potential' },
      { label: 'Processing Speed', value: 'Real-time' }
    ],
    challenge: 'Distributing cash transfers to millions of vulnerable families required eliminating ghost beneficiaries, corrupt agent skimming, and double-dipping while ensuring fast delivery during economic shocks.',
    solution: 'Combined biometric payment authentication at cash points with machine learning anomaly detection engines that analyze disbursement patterns across payment agents, geographical clusters, and account creation velocities.',
    impact: 'Protected public welfare funds from organized fraudulent cartels while establishing a transparent, auditable trail for international development partners.',
    techStack: ['Graph Anomaly Detection', 'Biometric Payout Gateway', 'Automated Reconciliation Engine', 'Role-Based Audit Logs']
  },
  {
    id: 'agri-advisory',
    tag: 'Agriculture & Climate Resiliency',
    title: 'Voice-Activated Dialect AI for Smallholder Farmers',
    location: 'Punjab & Sindh, Pakistan',
    entity: 'Digital Agriculture & Extension Services Initiative',
    metrics: [
      { label: 'Farmers Engaged', value: '2.5M+' },
      { label: 'Supported Dialects', value: 'Urdu, Punjabi, Seraiki, Sindhi' },
      { label: 'Yield Increase', value: '+18% Avg' }
    ],
    challenge: 'Smallholder farmers lacked timely, localized advice on weather anomalies, pest outbreaks, and market crop prices due to low text literacy and lack of extension officers.',
    solution: 'Deployed an AI voice agent accessible via low-cost phone calls (IVR) and WhatsApp. The AI understands regional dialects, analyzes voice queries, and cross-references local satellite weather and soil telemetry to deliver hyper-specific farming advice.',
    impact: 'Empowered rural farmers to optimize irrigation schedules and fertilizer usage, reducing crop damage during unexpected heatwaves and flood events.',
    techStack: ['Whisper-based Dialect ASR', 'Domain-Specific Crop RAG', 'Text-to-Speech (TTS) Synthesizer', 'Geospatial Telemetry']
  }
];

export const INSIGHTS = [
  {
    id: 'architecting-trust',
    category: 'Policy & Ethics',
    title: 'Architecting Trust: Responsible AI on Sovereign Digital Public Infrastructure',
    date: 'August 28, 2026',
    author: 'Dr. Tariq Mansoor & Global DPI Team',
    readTime: '6 min read',
    excerpt: 'How governments can deploy predictive models on citizen databases while maintaining non-negotiable standards of privacy, algorithmic transparency, and human oversight.',
    content: `
### Executive Summary

As nation-states rapidly modernize their administrative capabilities, the integration of Artificial Intelligence into Digital Public Infrastructure (DPI) represents a pivotal shift from passive data collection to active civic intelligence. However, layering machine learning algorithms over foundational registries (Digital ID, Instant Payments, Data Swaps) introduces systemic risks if governance frameworks are not established proactively.

### Key Pillars of Responsible DPI-AI

1. **Sovereign Model Control**: AI models serving critical civic functions must not rely on proprietary, closed-box cloud endpoints outside national jurisdiction. Open weights or locally hosted sovereign infrastructure ensure long-term stability and national data independence.
2. **Explicit Consent & Zero-Knowledge Verification**: Citizen data accessed for AI training or inference must strictly enforce consent protocols. Techniques like Federated Learning and Differential Privacy permit model optimization without aggregating raw citizen records.
3. **Algorithmic Redress Mechanisms**: When an automated fraud engine flag blocks a citizen's welfare disbursement, a human-in-the-loop escalation pathway must resolve disputes within a mandatory 48-hour window.

### Conclusion

AI can dramatically elevate public trust in government services—provided efficiency is never prioritized at the expense of equity, transparency, and civil rights.
    `
  },
  {
    id: 'biometric-ai-scale',
    category: 'Architecture',
    title: 'Biometric AI at Scale: Lessons from NADRA and Global ID Systems',
    date: 'August 14, 2026',
    author: 'Engr. Ayesha Malik',
    readTime: '8 min read',
    excerpt: 'A technical analysis of sub-second biometric matching across 100M+ population databases using lightweight convolutional networks and edge hardware.',
    content: `
### Overview

High-capacity identity registries face exponential computational bottlenecks as population sizes grow into tens or hundreds of millions. Traditional 1:N fingerprint and facial matching engines require prohibitive hardware infrastructure. Modern edge AI biometrics solve this problem through cascaded feature vector embeddings.

### Technical Breakthroughs

- **Vector Index Compression**: Converting dense facial landmarks into quantized 512-dimensional vector embeddings reduces memory footprint by 90% while maintaining a False Accept Rate (FAR) under 0.0001%.
- **Edge Liveness Guardrails**: Running lightweight micro-models directly on handheld mobile scanners ensures that liveness validation occurs locally before biometric templates are transmitted across mobile networks.
- **Demographic Bias Mitigation**: Fine-tuning matching models on regionally representative training data drastically reduces false rejection rates across elder, manual laborer, and diverse skin tone demographics.
    `
  },
  {
    id: 'eliminating-leakage',
    category: 'Case Analysis',
    title: 'Eliminating Leakage: Machine Learning Anomaly Detection in Social Safety Net Disbursements',
    date: 'July 30, 2026',
    author: 'Public Sector Innovation Lab',
    readTime: '5 min read',
    excerpt: 'Combating organized payout cartels and ghost accounts through real-time graph neural network pattern matching in G2P payment systems.',
    content: `
### The Challenge of G2P Leakage

Government-to-Person (G2P) transfers are vulnerable to systemic exploitation:
- **Synthetic Account Creation**: Fraudulent networks registering multiple fake accounts linked to compromised SIM cards.
- **Agent Siphoning**: Corrupt payment point operators charging unauthorized fees or under-dispensing cash to vulnerable beneficiaries.

### Machine Learning Interventions

By deploying Graph Neural Networks (GNNs) over unified payment logs, administrative systems detect structural anomalies:
1. **Cluster Detection**: Identifying clusters of accounts sharing identical contact numbers, withdrawal device IDs, or rapid sequential cash-out locations.
2. **Velocity Scoring**: Flagging payment points executing cash-outs at humanly impossible speeds.
3. **Automated Interception**: Suspending payouts for high-risk transactions prior to final settlement, routing flagged cases to human auditors.
    `
  },
  {
    id: 'multilingual-voice',
    category: 'Inclusion',
    title: 'Multilingual Civic Voice Assistants for Low-Literacy Populations',
    date: 'July 12, 2026',
    author: 'Civic AI Research Collective',
    readTime: '7 min read',
    excerpt: 'Overcoming the digital divide by building domain-specific speech recognition for regional dialects like Urdu, Pashto, Punjabi, and Sindhi.',
    content: `
### Bridging the Literacy Divide

Digital public portals often assume digital and textual literacy, excluding millions of citizens in emerging economies. Voice-first AI interfaces democratize access by allowing citizens to speak naturally in their native dialects.

### Architectural Blueprint

1. **Acoustic Adaptation**: Fine-tuning transformer-based ASR models on crowdsourced, accent-rich local voice corpora.
2. **Retrieval-Augmented Generation (RAG)**: Indexing official administrative guidelines (such as passport renewals, disability benefits, and crop subsidies) to ensure factual, hallucination-free answers.
3. **Voice Outbound IVR**: Utilizing localized TTS engines to respond over low-cost feature phone voice calls without requiring smartphones or internet data plans.
    `
  }
];

export const ILLUSTRATIVE_STATS = [
  {
    id: 'stat-1',
    value: 500,
    suffix: 'M+',
    label: 'Digital IDs Enabled',
    description: 'Globally supported by AI biometric verification frameworks'
  },
  {
    id: 'stat-2',
    value: 40,
    suffix: '%',
    label: 'Fraud Leakage Reduction',
    description: 'Potential savings demonstrated in social protection G2P payments'
  },
  {
    id: 'stat-3',
    value: 40,
    suffix: '+',
    label: 'Nations Deploying DPI',
    description: 'Building foundational identity, payment, and data exchange stacks'
  },
  {
    id: 'stat-4',
    value: 40,
    suffix: '+',
    label: 'Dialects & Languages',
    description: 'Required for inclusive conversational AI civic access'
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Dr. Zarrar Shah',
    role: 'Executive Director & Chief DPI Architect',
    bio: 'Former senior advisor on civic tech infrastructure, specializing in scalable sovereign biometric identity and interoperable digital payments.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    specialty: 'Digital ID & Payment Systems'
  },
  {
    name: 'Amina Al-Hassan',
    role: 'Head of Responsible AI & Governance',
    bio: 'Ethicist and public policy scholar focusing on algorithmic transparency, data sovereignty, and human rights in automated governance.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    specialty: 'AI Ethics & Policy'
  },
  {
    name: 'Kashif Mehmood',
    role: 'Lead ML Engineer (Fraud & Security)',
    bio: 'Pioneer in deploying graph neural networks and edge biometric verification for large-scale social protection programs.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    specialty: 'Graph ML & Anti-Fraud'
  },
  {
    name: 'Dr. Sarah Lin',
    role: 'Senior Fellow (Global Policy & Inclusion)',
    bio: 'Researches cross-border data exchange standards and inclusive multilingual voice technology for emerging market public services.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80',
    specialty: 'Multilingual GenAI & Access'
  }
];

export const PARTNERS = [
  { name: 'Digital Public Goods Alliance', category: 'Standards' },
  { name: 'Global DPI Collaborative', category: 'Knowledge Network' },
  { name: 'Emerging Market Civic Tech Lab', category: 'Research' },
  { name: 'Open Identity & Governance Initiative', category: 'Policy' },
  { name: 'South Asian Public Data Forum', category: 'Regional Partner' }
];
