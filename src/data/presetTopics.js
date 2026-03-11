export const PRESET_TOPICS = [
  {
    id: 'ckd-roadmap',
    title: '🗺️ Your CKD Road Map',
    description: 'A personalized guide for your Chronic Kidney Disease journey, from diagnosis to management.',
    icon: '🗺️',
    color: 'teal',
    initialQuery: 'Explain the CKD Road Map and stages of kidney disease.',
    suggestedQueries: [
      'What are the 5 stages of CKD?',
      'How can I slow down kidney disease?',
      'What lifestyle changes are most effective?'
    ],
    sources: [
      { 
        id: 'ckd-guide',
        name: 'CKD Roadmap.txt', 
        content: 'Chronic Kidney Disease (CKD) is a progressive condition where kidneys lose function over time. The Roadmap involves: 1. Diagnosis via eGFR and Urine Albumin. 2. Staging (1-5). 3. Management (BP control, Diet, Medication). 4. Preparation for future treatments if needed. Early detection is key to slowing progression.',
        size: '1.5 KB'
      }
    ]
  },
  {
    id: 'renal-nutrition',
    title: '🥗 Guide to Renal Nutrition',
    description: 'Managing Potassium, Phosphorus, and Sodium intake to protect your kidneys.',
    icon: '🥗',
    color: 'yellow',
    initialQuery: 'What are the core principles of Renal Nutrition?',
    suggestedQueries: [
      'High vs Low Potassium foods',
      'The danger of High Phosphorus',
      'Protein intake guidelines for CKD'
    ],
    sources: [
      { 
        id: 'nutrition-guide',
        name: 'Renal Nutrition.txt', 
        content: 'Renal nutrition focuses on: 1. Sodium reduction (<2g/day) to control BP. 2. Potassium management (staying below 2-3g if eGFR is low). 3. Phosphorus control (avoiding processed foods and additives). 4. Protein balance (higher in dialysis, lower in pre-dialysis CKD).',
        size: '2.8 KB'
      }
    ]
  },
  {
    id: 'dialysis-vs-transplant',
    title: '⚖️ Dialysis vs. Transplant',
    description: 'Compare the two primary paths for treating kidney failure.',
    icon: '⚖️',
    color: 'teal',
    initialQuery: 'Compare Dialysis and Kidney Transplantation.',
    suggestedQueries: [
      'Benefits of Kidney Transplant',
      'Life on Hemodialysis',
      'Which option is better for long-term health?'
    ],
    sources: [
      { 
        id: 'treatment-paths',
        name: 'Treatment Paths.txt', 
        content: 'Dialysis (Hemo or Peritoneal) acts as an artificial filter when kidneys fail. Transplantation is a surgical procedure to place a healthy kidney. Transplantation generally offers better quality of life and longer life expectancy but requires lifelong immunosuppressants and a donor.',
        size: '2.2 KB'
      }
    ]
  },
  {
    id: 'hypertension-kidney',
    title: '📉 High BP & Your Kidneys',
    description: 'Understand how high blood pressure acts as a silent killer for your kidneys.',
    icon: '📉',
    color: 'yellow',
    initialQuery: 'How does high blood pressure damage kidneys?',
    suggestedQueries: [
      'What is the ideal BP for kidney patients?',
      'Silent symptoms of high BP',
      'Heart-Kidney connection'
    ],
    sources: [
      { 
        id: 'bp-kidney',
        name: 'Hypertension Guide.txt', 
        content: 'Hypertension is the #2 cause of kidney failure. High pressure damages the small blood vessels in the kidneys (nephrons), making them unable to filter waste. This creates a vicious cycle where kidney damage further increases blood pressure.',
        size: '1.9 KB'
      }
    ]
  },
  {
    id: 'adpkd-roadmap',
    title: '🧬 ADPKD Road Map',
    description: 'Navigating Autosomal Dominant Polycystic Kidney Disease.',
    icon: '🧬',
    color: 'teal',
    initialQuery: 'Overview of ADPKD management.',
    suggestedQueries: [
      'Genetic testing for PKD',
      'Tolvaptan and other treatments',
      'Managing PKD symptoms'
    ],
    sources: [
      { 
        id: 'pkd-guide',
        name: 'ADPKD Roadmap.txt', 
        content: 'ADPKD is a genetic condition where fluid-filled cysts grow in the kidneys. Management includes monitoring cyst growth (TKV), blood pressure control, high water intake (for some), and specific medications like Tolvaptan to slow cyst expansion.',
        size: '2.1 KB'
      }
    ]
  }
];
