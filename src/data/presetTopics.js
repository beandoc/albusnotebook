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
    presetData: [
      {
        query: 'Explain the CKD Road Map and stages of kidney disease.',
        content: `### Welcome to Your CKD Road Map
        
Chronic Kidney Disease (CKD) is a progressive journey, but with the right knowledge, you can slow its path. This roadmap guides you through:

- **Early Stages (1-2):** Identifying damage and managing blood pressure.
- **Moderate Stage (3):** The critical turning point where diet and meds are vital.
- **Advanced Stage (4):** Preparing for specialized care.
- **Failure Stage (5):** Evaluating dialysis and transplant options.

Use the **+** button to explore specific stages or slowing strategies.`,
        suggestions: ['What are the 5 stages of CKD?', 'How can I slow down kidney disease?', 'What lifestyle changes are most effective?']
      },
      {
        query: 'What are the 5 stages of CKD?',
        content: `Chronic Kidney Disease is categorized into 5 stages based on your eGFR:

1. **Stage 1 (GFR 90+):** Normal function but some kidney damage.
2. **Stage 2 (GFR 60-89):** Mild loss of function.
3. **Stage 3 (GFR 30-59):** Moderate loss. This is often when symptoms appear.
4. **Stage 4 (GFR 15-29):** Severe loss. Preparation for kidney failure treatments begins.
5. **Stage 5 (GFR <15):** Kidney Failure. Dialysis or transplant is required.`,
        suggestions: ['Is Stage 3 reversible?', 'What is eGFR?', 'How to stay in Stage 2?']
      },
      {
        query: 'How can I slow down kidney disease?',
        content: `Slowing progression is about "hitting the brakes" on further damage:

- **Blood Pressure Control:** Keep it under 130/80.
- **Diabetes Management:** Maintain healthy blood sugar levels.
- **Avoid NSAIDs:** Stay away from Ibuprofen/Naproxen as they are toxic to kidneys.
- **Low Salt Intake:** Less than 2g of sodium per day reduces kidney strain.
- **Regular Check-ups:** Monitor your Creatinine and Urine Protein levels monthly.`,
        suggestions: ['List of kidney-safe painkillers', 'Blood pressure targets', 'Daily sodium guide']
      },
      {
        query: 'What lifestyle changes are most effective?',
        content: `Top 3 lifestyle modifications for CKD patients:

1. **The Renal Diet:** Focus on low sodium, controlled potassium, and moderate protein.
2. **Hydration Balance:** Drinking enough but not over-loading if you have swelling.
3. **Physical Activity:** 30 minutes of light walking daily improves blood flow and reduces BP.`,
        suggestions: ['Renal diet basics', 'How much water should I drink?', 'Safe exercises for CKD']
      }
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
    presetData: [
      {
        query: 'High vs Low Potassium foods',
        content: `Potassium management is one of the most critical parts of a renal diet:

- **Low Potassium (Safer):** Apples, berries, cabbage, cucumbers, cauliflower, white rice, and ginger ale.
- **High Potassium (Limit):** Bananas, oranges, potatoes, spinach, tomatoes, and coconut water.
- **Tip (Leaching):** You can reduce potassium in potatoes by peeling, slicing, and soaking them in warm water for 2 hours before cooking.`,
        suggestions: ['How to leach potatoes?', 'Safe fruits for CKD', 'Potassium blood targets']
      },
      {
        query: 'The danger of High Phosphorus',
        content: `Phosphorus is a "silent" danger because high levels don't make you feel sick immediately, but they cause long-term damage:

1. **Weakens Bones:** High phosphorus pulls calcium out of your bones, making them brittle.
2. **Hardens Heart:** It causes calcium to build up in your blood vessels (calcification), increasing heart attack risk.
3. **Hidden Additives:** Beware of "Phos" in ingredient labels (e.g., Phosphoric acid). These artificial additives are absorbed almost 100% by your body.`,
        suggestions: ['List of phosphate additives', 'Bone health in CKD', 'Phosphorus binder guide']
      }
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
    presetData: [
      {
        query: 'Compare Dialysis and Kidney Transplantation.',
        content: `### Dialysis vs. Transplant: Choosing Your Path

When kidneys reach Stage 5 (Failure), two main paths exist:

1. **Kidney Transplantation:**
   - **What it is:** A surgical procedure to place a healthy kidney from a donor.
   - **Pros:** Best long-term survival, fewer dietary restrictions, near-normal lifestyle.
   - **Cons:** Major surgery, lifelong anti-rejection meds, waiting list time.

2. **Dialysis:**
   - **What it is:** A machine or your abdomen lining filters your blood.
   - **Pros:** Immediate life-saving treatment, no major surgery required.
   - **Cons:** Time-consuming (12+ hours/week), strict diet/fluid limits, fatigue.

**The Verdict:** While dialysis is a vital bridge, transplantation is considered the "gold standard" for qualified patients.`,
        suggestions: ['How to get on the transplant list?', 'Hemodialysis vs Peritoneal', 'Life expectancy comparison']
      },
      {
        query: 'Hemodialysis vs Peritoneal Dialysis',
        content: `There are two ways to do dialysis:

- **Hemodialysis (HD):** Usually done in a center 3 times a week for 4 hours. A machine cleans your blood through an "access" in your arm.
- **Peritoneal Dialysis (PD):** Done at home daily, often while you sleep. It uses the lining of your abdomen (peritoneum) to filter blood.

**PD is often preferred for those wanting more independence.**`,
        suggestions: ['Setting up PD at home', 'What is an AV fistula?', 'Can I travel on dialysis?']
      }
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
    initialQuery: 'Show me the link between Hypertension and Kidney Disease.',
    suggestedQueries: [
      'Ideal BP targets for kidney health',
      'Silent symptoms of hypertension',
      'How BP damage nephrons'
    ],
    presetData: [
      {
        query: 'Show me the link between Hypertension and Kidney Disease.',
        content: `### The BP-Kidney Connection

Hypertension is a "Silent Killer" of kidneys. Here is the mechanism:

- **Damage to Vessels:** High pressure causes the tiny blood vessels in the kidney to thicken and narrow.
- **Nephron Loss:** As vessels narrow, the nephrons (filtering units) lose blood supply and die.
- **Protein Leakage:** Damaged filters start "leaking" protein into your urine (Albuminuria).
- **The Loop:** Kidney damage then *raises* your blood pressure even further, creating a dangerous cycle.`,
        suggestions: ['What is Albuminuria?', 'How to lower BP without meds?', 'Top 3 kidney-safe BP meds']
      }
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
      'The ADPKD Roadmap',
      'Tolvaptan treatment benefits',
      'Genetic screening for families'
    ],
    presetData: [
      {
        query: 'Explain ADPKD and its management.',
        content: `### Understanding ADPKD

Autosomal Dominant Polycystic Kidney Disease (ADPKD) is a genetic condition:

- **Cyst Growth:** Fluid-filled sacs (cysts) grow in the kidneys, making them swell to the size of a football.
- **Monitoring:** Measured by **Total Kidney Volume (TKV)** via MRI/Ultrasound.
- **Treatment:** **Tolvaptan** is a breakthrough drug that slows the growth of these cysts.
- **Hydration:** Drinking lots of water is a core part of managing PKD to suppress the hormone (Vasopressin) that feeds cyst growth.`,
        suggestions: ['Is Tolvaptan right for me?', 'Family screening guide', 'TKV measurement basics']
      }
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
    presetData: [
      {
        query: 'What do my Kidney Function Test (KFT) numbers mean?',
        content: `### Decoding Your Lab Report

Here are the 3 "Vital Signs" of your kidney labs:

1. **Creatinine:** A muscle waste product. If it rises, it means kidneys are failing to clear it.
2. **eGFR (The Percentage):** Estimated GFR. A result of **60** means your kidneys are working at roughly **60% capacity**.
3. **Urine Albumin (Protein):** Your kidneys should not leak protein. Even a small amount ("Microalbuminuria") is an early warning sign of damage.`,
        suggestions: ['How to lower Creatinine?', 'Can GFR improve?', 'Normal vs Abnormal levels']
      }
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
  },
  {
    id: 'kidney-biopsy-deep-dive',
    title: '🔬 Kidney Biopsy Deep Dive',
    description: 'A comprehensive protocol covering indications, technique, pathology, and risks.',
    icon: '🔬',
    color: 'teal',
    initialQuery: 'Explain the Kidney Biopsy (Renal Biopsy) process and its significance.',
    suggestedQueries: [
      'Clinical Indications (The Why)',
      'Technical Execution (The How)',
      'Pathological Triad (The Analysis)',
      'Risks & Contraindications'
    ],
    presetData: [
      {
        query: 'Explain the Kidney Biopsy (Renal Biopsy) process and its significance.',
        content: `### Kidney Biopsy (Renal Biopsy)
        
A kidney biopsy is an invasive diagnostic procedure used to obtain renal tissue. It bridges the critical gap between clinical symptoms (like proteinuria or rising creatinine) and a **definitive histopathological diagnosis**.

The data gathered dictates whether a patient requires simple monitoring, aggressive immunosuppression, or preparation for long-term treatments.`,
        suggestions: ['Clinical Indications (The Why)', 'Technical Execution (The How)', 'Pathological Triad (The Analysis)', 'Risks & Contraindications']
      },
      // BRANCH 1: Indications
      {
        query: 'Clinical Indications (The Why)',
        content: `### Why do a Biopsy?
        
Biopsy is necessary when systemic markers (blood/urine tests) indicate kidney damage but do not define the specific pattern of injury.

Key triggers include:
- Unexplained Nephrotic Syndrome.
- Rapidly Progressive Glomerulonephritis (RPGN).
- Understanding "Attack Patterns" in Systemic Diseases (Lupus, Vasculitis).`,
        suggestions: ['Nephrotic Syndrome', 'RPGN (Medical Emergency)', 'Systemic Disease Involvement']
      },
      {
        query: 'Nephrotic Syndrome',
        content: `**Nephrotic Syndrome** is characterized by >3.5g/day protein loss in urine. Biopsy is the only way to distinguish between:
        
- **Minimal Change Disease (MCD):** Common in children, usually responds well to steroids.
- **FSGS:** Focal Segmental Glomerulosclerosis, often involves more scarring.
- **Membranous Nephropathy:** Common in adults, requires specific immune-targeting therapy.`,
        suggestions: ['MCD Treatment', 'How FSGS is graded', 'Blood tests for Membranous']
      },
      {
        query: 'RPGN (Medical Emergency)',
        content: `**RPGN** is a medical emergency where kidney function can drop by 50% within weeks. 

The biopsy looks for **"Crescents"** (cell build-up) in the filter units (glomeruli). The more crescents found, the more aggressive the treatment must be to save the kidney.`,
        suggestions: ['What are "Crescents"?', 'Vasculitis markers', 'Standard RPGN therapy']
      },
      {
        query: 'Systemic Disease Involvement',
        content: `Biopsy confirms if systemic diseases like **Lupus (SLE)**, **Vasculitis**, or **Amyloidosis** have explicitly attacked the kidney filters. This guides whether high-dose immunosuppressive therapy is justified.`,
        suggestions: ['Lupus Nephritis Stages', 'Amyloidosis staining', 'Vasculitis management']
      },

      // BRANCH 2: Execution
      {
        query: 'Technical Execution (The How)',
        content: `### How it's performed
        
The procedure is usually performed via a **"True-Cut"** spring-loaded needle under real-time imaging guidance.

Key technical aspects:
- Ultrasound or CT guidance.
- Specific entry routes to minimize risk.
- Targeting the "Safe Zones" of the kidney tissue.`,
        suggestions: ['Imaging Modalities', 'Alternative Routes', 'The "Sweet Spot"']
      },
      {
        query: 'Imaging Modalities',
        content: `Choosing the right guidance:
        
- **Ultrasound (Standard):** Provides real-time, non-radiation visualization of the lower pole. It is the gold standard for most patients.
- **CT Scan:** Used primarily for obese patients or those with complex kidney anatomy where US visibility is poor.`,
        suggestions: ['US vs CT accuracy', 'Preparing for CT Biopsy', 'Lower Pole visualization']
      },
      {
        query: 'Alternative Routes',
        content: `If the standard route is too risky:
        
- **Transjugular Biopsy:** Accessing the kidney via the vein in the neck. This is used if the patient has a severe bleeding disorder or cannot lie flat for several hours.`,
        suggestions: ['When to use Transjugular', 'Recovery time for neck access', 'Bleeding risk comparison']
      },
      {
        query: 'The "Sweet Spot"',
        content: `The needle targets the **lower pole cortex**. This is the "Sweet Spot" because it contains the most filter units (glomeruli) while avoiding the major blood vessels located near the renal hilum (center).`,
        suggestions: ['Why target the Cortex?', 'Avoiding the Medulla', 'Renal Hilum anatomy']
      },

      // BRANCH 3: Analysis
      {
        query: 'Pathological Triad (The Analysis)',
        content: `### The Analysis
        
A single biopsy core is split into three pieces for specialized viewing. This "triad" of testing ensures no detail is missed.`,
        suggestions: ['Light Microscopy (LM)', 'Immunofluorescence (IF)', 'Electron Microscopy (EM)']
      },
      {
        query: 'Light Microscopy (LM)',
        content: `**Light Microscopy (LM)** evaluates the overall tissue architecture (Glomeruli, Tubules, Interstitium, Vessels) at 400x magnification.
        
Common findings:
1. **Sclerosis/Scarring:** Indicates chronic damage (e.g., FSGS).
2. **Cellular Proliferation:** Indicates active inflammation (e.g., Lupus Nephritis).
3. **Tubular Necrosis:** Indicates acute injury (AKI).`,
        suggestions: ['Staining: PAS vs Silver', 'How scarring is measured', 'Acute Tubular Necrosis (ATN)']
      },
      {
        query: 'Immunofluorescence (IF)',
        content: `**IF** uses fluorescent antibodies to detect immune system proteins attacking the kidney.
        
Key Patterns:
- **IgA Deposits:** Diagnoses IgA Nephropathy (Berger's Disease).
- **IgG Deposits (Linear):** Diagnoses Anti-GBM (Goodpasture's) Disease.
- **"Full House" Pattern:** All immunoglobulins present; suggests Lupus Nephritis.`,
        suggestions: ['Granular vs Linear IF', 'What is C3 staining?', 'Immune Complex diseases']
      },
      {
        query: 'Electron Microscopy (EM)',
        content: `**EM** provides magnification up to 100,000x to see the smallest filter structures.
        
Vital for:
- **Podocyte Effacement:** Flattening of foot processes; diagnoses MCD.
- **"Basket-Weave" GBM:** Diagnoses Alport Syndrome (Genetic).
- **Subepithelial "Humps":** Diagnoses Post-Infectious kidney damage.`,
        suggestions: ['Alport Syndrome Genetics', 'Subepithelial Humps', 'Seeing Podocytes']
      },

      // BRANCH 4: Safety
      {
        query: 'Risks & Contraindications',
        content: `### Safety First
        
The core goal is identifying patients at high risk for life-threatening bleeding. 

Safety metrics:
- Blood Pressure must be < 160/100.
- Normal Coagulation (INR/PT/PTT).
- No uncorrectable bleeding disorders.`,
        suggestions: ['Absolute Contraindications', 'Relative Contraindications', 'The "10% Rule"']
      },
      {
        query: 'Absolute Contraindications',
        content: `You **cannot** perform a biopsy if:
- Hypertension is Uncontrolled (>160/100).
- There is an uncorrectable bleeding disorder.
- The patient is uncooperative (as they must hold their breath during the poke).`,
        suggestions: ['Managing BP before biopsy', 'Platelet count requirements', 'Patient breathing techniques']
      },
      {
        query: 'Relative Contraindications',
        content: `Proceed with caution if:
- **Solitary Kidney:** High stakes as there is only one working kidney left.
- **Polycystic Kidneys:** High risk of hitting an infected cyst.
- Active skin infection at the biopsy site.`,
        suggestions: ['Biopsy on a solitary kidney', 'Alternatives for ADPKD', 'Infection management']
      },
      {
        query: 'The "10% Rule"',
        content: `Roughly **10%** of patients experience minor hematoma (bruising or small internal blood collection). However, **less than 1%** require a blood transfusion or intervention post-procedure.`,
        suggestions: ['Long-term recovery', 'Signs of severe bleeding', 'Post-biopsy monitoring']
      },

      // BRANCH 5: Timeline
      {
        query: 'Clinical Timeline (Prep & Recovery)',
        content: `### Timeline of Events
        
A strict protocol is followed from 2 weeks before the procedure to 24 hours after.`,
        suggestions: ['1–2 Weeks Prior (Pre-Op)', 'Day of Procedure (Intra-Op)', '24-Hour Post-Op (Recovery)']
      },
      {
        query: '1–2 Weeks Prior (Pre-Op)',
        content: `**Preparation Phase:**
- **Medication Halt:** Stop Aspirin, Plavix, and NSAIDs.
- **Lab Checks:** Verify Platelet count (>100,000) and normal coagulation (INR/PTT).`,
        suggestions: ['List of meds to stop', 'Coagulation profile basics', 'When to resume meds']
      },
      {
        query: 'Day of Procedure (Intra-Op)',
        content: `**Procedure Room Protocol:**
- **BP Control:** Must stay <140/90.
- **Positioning:** Patient lies prone (on stomach) with a pillow under the abdomen to push kidneys up toward the back.`,
        suggestions: ['Prone positioning guide', 'Local anesthesia used', 'What the patient feels']
      },
      {
        query: '24-Hour Post-Op (Recovery)',
        content: `**Immediate Recovery:**
- **Bed Rest:** Strict flat rest (supine) for 4 to 8 hours. Your body weight provides the necessary compression to stop bleeding.
- **Monitoring:** Serial blood tests and urine checks for blood.`,
        suggestions: ['Strict Bed Rest rules', 'Gross Hematuria signs', 'Discharge criteria']
      },

      // BRANCH 6: Native vs Transplant
      {
        query: 'Native vs. Transplant Biopsy',
        content: `### Two Different Approaches
        
The rationale and technique change if the kidney is your own or a donor organ.`,
        suggestions: ['Native Kidney Biopsy', 'Allograft (Transplant) Biopsy']
      },
      {
        query: 'Native Kidney Biopsy',
        content: `Performed on the patient's original kidneys in the back (retroperitoneal space). Always targets the lower pole.`,
        suggestions: ['Anatomy of the Back', 'Flank Pain post-biopsy']
      },
      {
        query: 'Allograft (Transplant) Biopsy',
        content: `Performed on a donor kidney in the lower abdomen. 
        
**Primary Goal:** Differentiating between drug toxicity (CNI Toxicity), Acute Cellular Rejection, or Antibody-Mediated Rejection.`,
        suggestions: ['Transplant Rejection signs', 'CNI Toxicity vs Rejection', 'Abdominal positioning']
      }
    ],
    sources: [
      { 
        id: 'biopsy-handbook',
        name: 'source_nirogyams_biopsy.txt', 
        content: `Kidney Biopsy Protocol:
- Absolute necessity for diagnosing FSGS, IgA Nephropathy, and Lupus Nephritis.
- Triad: Light Microscopy, IF, and Electron Microscopy.
- Contraindications: High BP and bleeding disorders.
- Post-op: 6-8 hours of strict bed rest.`,
        size: '4.2 KB'
      }
    ]
  }
];
