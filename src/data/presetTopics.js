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
        id: 'ckd-explained',
        name: 'source_nirogyams_ckd.txt', 
        content: `Chronic Kidney Disease (CKD) is a condition where kidneys lose function over time. 
        Diagnosis involves: 
        1. eGFR (Estimated Glomerular Filtration Rate): Measures how well kidneys filter waste. 
        2. Urine Albumin/Protein: Checks for kidney damage.
        Stages:
        - Stage 1: High function, GFR > 90.
        - Stage 2: Mild loss, GFR 60-89.
        - Stage 3: Moderate loss, GFR 30-59.
        - Stage 4: Severe loss, GFR 15-29.
        - Stage 5: Kidney failure, GFR < 15.
        Slowing Progression:
        - Hitting the brakes involves blood pressure control, managing diabetes, and avoiding kidney-toxic habits over-the-counter pain medications.`,
        size: '1.8 KB'
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
      'Is a high-protein diet safe?'
    ],
    sources: [
      { 
        id: 'nutrition-deep-dive',
        name: 'source_nirogyams_nutrition.txt', 
        content: `Renal nutrition is a key pillar of kidney health.
        1. Sodium Management: Limit to <2g daily to protect heart and BP.
        2. High vs Low Potassium: High potassium (bananas, potatoes, tomatoes) can be dangerous if kidneys can't clear it.
        3. Phosphorus: Hidden danger in processed foods and additives. High levels weaken bones and damage blood vessels.
        4. Protein: High-protein diets (like excessive paneer or protein powders) can stress already damaged kidneys. Pre-dialysis patients often need limited protein, whereas dialysis patients need more.
        5. Thali Health: Focusing on balanced, low-sodium traditional meals.`,
        size: '3.1 KB'
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
      'Hemodialysis vs Peritoneal Dialysis',
      'Quality of life comparison'
    ],
    sources: [
      { 
        id: 'treatment-guide',
        name: 'source_nirogyams_treatments.txt', 
        content: `Treatment options for kidney failure:
        1. Hemodialysis: Uses a machine to filter blood (usually 3 times a week at a center).
        2. Peritoneal Dialysis: Uses the abdomen lining to filter blood at home.
        3. Transplantation: Surgical placement of a healthy kidney from a living or deceased donor.
        Comparison:
        - Transplant generally offers better long-term survival and quality of life.
        - Dialysis is a life-sustaining bridge.
        - Choice involves emotional, daily life, and medical considerations.`,
        size: '2.5 KB'
      }
    ]
  },
  {
    id: 'hypertension-kidney',
    title: '📉 High BP & Your Kidneys',
    description: 'How high blood pressure silently damages kidney filtration.',
    icon: '📉',
    color: 'yellow',
    initialQuery: 'The link between Hypertension and Kidney Disease.',
    suggestedQueries: [
      'Ideal BP targets for kidney health',
      'Silent symptoms of hypertension',
      'How BP damage nephrons'
    ],
    sources: [
      { 
        id: 'bp-connection',
        name: 'source_nirogyams_bp.txt', 
        content: `Hypertension (High BP) is both a cause and a result of kidney disease.
        - It is the #2 cause of kidney failure globally.
        - High pressure damages the nephrons (filtering units), causing leakage of protein.
        - Yearly check-ups are vital because high BP is a silent worker that destroys kidneys without symptoms.
        - Managing weight and salt intake helps tackle this 'twin threat'.`,
        size: '1.9 KB'
      }
    ]
  },
  {
    id: 'adpkd-pkd',
    title: '🧬 ADPKD & Genetics',
    description: 'Navigating inherited kidney diseases and cyst management.',
    icon: '🧬',
    color: 'teal',
    initialQuery: 'Explain ADPKD and its management.',
    suggestedQueries: [
      'ADPKD Roadmap',
      'Tolvaptan treatment benefits',
      'Genetic screening for families'
    ],
    sources: [
      { 
        id: 'pkd-knowledge',
        name: 'source_nirogyams_pkd.txt', 
        content: `Autosomal Dominant Polycystic Kidney Disease (ADPKD):
        - A genetic condition causing fluid-filled cysts in kidneys.
        - Management involves monitoring Total Kidney Volume (TKV).
        - Tolvaptan is a medication used to slow cyst growth and preserve function.
        - Family history and early screening (Kidney Ultrasound/MRI) are crucial.`,
        size: '2.2 KB'
      }
    ]
  },
  {
    id: 'kidney-tests',
    title: '📋 Lab Tests Explained',
    description: 'Understanding Creatinine, eGFR, and Urine Protein.',
    icon: '📋',
    color: 'yellow',
    initialQuery: 'What do my Kidney Function Test (KFT) numbers mean?',
    suggestedQueries: [
      'What is Creatinine?',
      'Why is Urine Protein significant?',
      'Interpreting eGFR results'
    ],
    sources: [
      { 
        id: 'test-guide',
        name: 'source_nirogyams_tests.txt', 
        content: `Your Kidney Health Report Card (KFT):
        1. Creatinine: A waste product from muscles; high levels indicate poor filtration.
        2. eGFR: The most important number; estimated filtration percentage (e.g., eGFR 60 = 60% function).
        3. Hematuria (Seeing Red): Blood in urine can indicate stones, infection, or kidney disease.
        4. Urine Protein: Leaking protein indicates damage to the kidney's filters.`,
        size: '2.4 KB'
      }
    ]
  }
];
