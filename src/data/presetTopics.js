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
        suggestions: ['What are the 5 stages of CKD?', 'How can I slow down kidney disease?', 'What lifestyle changes are most effective?'],
        imageUrl: 'https://images.unsplash.com/photo-1576091160550-217359f49f4c?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'What are the 5 stages of CKD?',
        content: `Chronic Kidney Disease is categorized into 5 stages based on your eGFR:

1. **Stage 1 (GFR 90+):** Normal function but some kidney damage.
2. **Stage 2 (GFR 60-89):** Mild loss of function.
3. **Stage 3 (GFR 30-59):** Moderate loss. This is often when symptoms appear.
4. **Stage 4 (GFR 15-29):** Severe loss. Preparation for kidney failure treatments begins.
5. **Stage 5 (GFR <15):** Kidney Failure. Dialysis or transplant is required.`,
        suggestions: ['Is Stage 3 reversible?', 'What is eGFR?', 'How to stay in Stage 2?'],
        imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'How can I slow down kidney disease?',
        content: `Slowing progression is about "hitting the brakes" on further damage:

- **Blood Pressure Control:** Keep it under 130/80.
- **Diabetes Management:** Maintain healthy blood sugar levels.
- **Avoid NSAIDs:** Stay away from Ibuprofen/Naproxen as they are toxic to kidneys.
- **Low Salt Intake:** Less than 2g of sodium per day reduces kidney strain.
- **Regular Check-ups:** Monitor your Creatinine and Urine Protein levels monthly.`,
        suggestions: ['List of kidney-safe painkillers', 'Blood pressure targets', 'Daily sodium guide'],
        imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80'
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
  },
  {
    id: 'aki-deep-dive',
    title: '⚡ Acute Kidney Injury (AKI)',
    description: 'A comprehensive guide to sudden kidney failure: causes, staging, diagnosis, and emergency management.',
    icon: '⚡',
    color: 'yellow',
    initialQuery: 'Explain Acute Kidney Injury (AKI) and its significance.',
    suggestedQueries: [
      'Definition & Staging (The "What")',
      'Prerenal AKI (The "Flow" Problem)',
      'Intrinsic AKI (The "Filter" Problem)',
      'Postrenal AKI (The "Plumbing" Problem)',
      'Diagnostic Workup (The "Investigation")',
      'Emergency Management (The "Fix")',
      'Novel Biomarkers (The "Early Warning")',
      'Pharmacological Management (The "Balancing Act")',
      'Systemic Cross-Talk (The "Domino Effect")',
      'Prognosis & Transition to CKD'
    ],
    presetData: [
      {
        query: 'Explain Acute Kidney Injury (AKI) and its significance.',
        content: `### Acute Kidney Injury (AKI)
        
A sudden, rapid decline in kidney function (occurring over hours to days) that leads to an accumulation of nitrogenous waste products in the blood (uremia) and an inability to maintain fluid and electrolyte balance.`,
        suggestions: ['Definition & Staging (The "What")', 'Prerenal AKI (The "Flow" Problem)', 'Intrinsic AKI (The "Filter" Problem)', 'Novel Biomarkers (The "Early Warning System")'],
        imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f13931151?auto=format&fit=crop&w=800&q=80'
      },
      // Branch 1: Staging
      {
        query: 'Definition & Staging (The "What")',
        content: `AKI is diagnosed and staged using the internationally recognized **KDIGO Criteria**, based on two main parameters: **Serum Creatinine (sCr)** and **Urine Output (UO)**.`,
        suggestions: ['Stage 1 (Mild)', 'Stage 2 (Moderate)', 'Stage 3 (Severe)'],
        imageUrl: 'https://images.unsplash.com/photo-1579152276503-3467614f85e1?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'Stage 1 (Mild)',
        content: `**Stage 1 Definition:**
- **sCr:** Increases by 1.5–1.9 times baseline OR increases by $\ge$ 0.3 mg/dL within 48 hours.
- **Urine Output:** $< 0.5$ mL/kg/hr for 6–12 hours.`,
        suggestions: ['How to calculate Baseline sCr?', 'Wait-and-watch protocol']
      },
      {
        query: 'Stage 2 (Moderate)',
        content: `**Stage 2 Definition:**
- **sCr:** Increases to 2.0–2.9 times baseline.
- **Urine Output:** $< 0.5$ mL/kg/hr for $\ge$ 12 hours.`,
        suggestions: ['Critical care interventions', 'Is Stage 2 reversible?']
      },
      {
        query: 'Stage 3 (Severe)',
        content: `**Stage 3 Definition:**
- **sCr:** Increases to 3.0 times baseline OR sCr $\ge$ 4.0 mg/dL OR initiation of Renal Replacement Therapy (Dialysis).
- **Urine Output:** $< 0.3$ mL/kg/hr for $\ge$ 24 hours or **Anuria** (no urine) for $\ge$ 12 hours.`,
        suggestions: ['Emergency Dialysis criteria']
      },
      // Branch 2: Prerenal
      {
        query: 'Prerenal AKI (The "Flow" Problem)',
        content: `The most common cause of AKI (60-70%). The kidneys are structurally healthy, but they are starving for blood flow (**hypoperfusion**).`,
        suggestions: ['Absolute Fluid Loss (Hypovolemia)', 'Decreased Effective Circulation', 'Altered Renal Hemodynamics'],
        imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'Absolute Fluid Loss (Hypovolemia)',
        content: `Severe dehydration (vomiting, diarrhea), massive hemorrhage (trauma, GI bleed), or extensive burns. The pump is working, but there's no "gas" in the tank.`,
        suggestions: ['Fluid resuscitation guide', 'IV Fluids for AKI']
      },
      {
        query: 'Decreased Effective Circulation',
        content: `The body has enough fluid, but it isn't pumping effectively to the kidneys. Seen in **Congestive Heart Failure (CHF)**, severe liver disease (**Hepatorenal Syndrome**), or **Sepsis** (massive vasodilation).`,
        suggestions: ['CHF management in AKI', 'Hepatorenal Syndrome']
      },
      {
        query: 'Altered Renal Hemodynamics',
        content: `Medications that mess with the kidney's auto-regulation.
- **NSAIDs:** Constrict the incoming (afferent) arteriole.
- **ACE Inhibitors/ARBs:** Dilate the outgoing (efferent) arteriole, dropping the filtration pressure.`,
        suggestions: ['When to stop Lisinopril?', 'NSAID toxicity']
      },
      // Branch 3: Intrinsic
      {
        query: 'Intrinsic AKI (The "Filter" Problem)',
        content: `Direct structural damage to the kidney parenchyma (the actual filtering and tubule tissues).`,
        suggestions: ['Acute Tubular Necrosis (ATN)', 'Acute Interstitial Nephritis (AIN)', 'Glomerulonephritis (GN)'],
        imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'Acute Tubular Necrosis (ATN)',
        content: `Accounts for 85% of intrinsic AKI. Tubule cells die and slough off due to prolonged ischemia (untreated prerenal AKI) or nephrotoxins (contrast dye, aminoglycoside antibiotics, myoglobin from crush injuries).`,
        suggestions: ['Contrast-induced AKI', 'Casts in ATN']
      },
      {
        query: 'Acute Interstitial Nephritis (AIN)',
        content: `An allergic/inflammatory reaction in the kidney tissue, usually triggered by drugs (PPIs, Penicillins, NSAIDs) or infections. Often presents with a **rash, fever, and eosinophils** in the urine.`,
        suggestions: ['PPI-induced AIN', 'Biopsy for AIN']
      },
      {
        query: 'Glomerulonephritis (GN)',
        content: `Autoimmune or inflammatory damage to the glomeruli (the actual filter). Examples include Lupus Nephritis, Anti-GBM disease, or Post-streptococcal GN.`,
        suggestions: ['Explaining Glomerulonephritis', 'GN Lab markers']
      },
      // Branch 4: Postrenal
      {
        query: 'Postrenal AKI (The "Plumbing" Problem)',
        content: `An obstruction in the urinary tract that prevents urine from leaving the body, causing back-pressure that damages the kidneys. Accounts for 5-10% of AKI.`,
        suggestions: ['Ureteric Obstruction', 'Bladder Neck Obstruction', 'Urethral Obstruction'],
        imageUrl: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'Ureteric Obstruction',
        content: `Must be bilateral (blocking both kidneys) to cause AKI, unless the patient only has one working kidney. Caused by large kidney stones or tumors compressing the ureters.`,
        suggestions: ['Stones and Obstruction', 'Kidney Stent procedures']
      },
      {
        query: 'Bladder Neck Obstruction',
        content: `The most common postrenal cause in older men. Usually due to **Benign Prostatic Hyperplasia (BPH)** or prostate cancer blocking the exit of the bladder.`,
        suggestions: ['BPH symptoms', 'Alpha-blocker therapy']
      },
      {
        query: 'Urethral Obstruction',
        content: `Blockages further down the line, such as strictures (scar tissue), blood clots, or a blocked Foley catheter.`,
        suggestions: ['Troubleshooting catheters', 'Urethral strictures']
      },
      // Branch 5: Diagnostics
      {
        query: 'Diagnostic Workup (The "Investigation")',
        content: `Differentiating between Prerenal, Intrinsic, and Postrenal is critical for treatment.`,
        suggestions: ['BUN:Cr Ratio & FENa', 'Urine Microscopy', 'Renal Ultrasound'],
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'BUN:Cr Ratio & FENa',
        content: `**Biochemical Differentiators:**
- **Prerenal:** BUN:Cr ratio is **> 20:1**. Fractional Excretion of Sodium (FENa) is **< 1%** (kidneys holding salt to boost volume).
- **Intrinsic (ATN):** BUN:Cr ratio is **< 15:1**. FENa is **> 2%** (damaged tubules can't hold salt).`,
        suggestions: ['How to calculate FENa', 'Why BUN rises in prerenal?']
      },
      {
        query: 'Urine Microscopy',
        content: `The "Liquid Biopsy" - looking for cellular molds (**casts**):
- **Hyaline Casts:** Prerenal (concentrated urine).
- **Muddy Brown Granular Casts:** ATN (dead tubule cells).
- **White Blood Cell (WBC) Casts:** AIN or Pyelonephritis.
- **Red Blood Cell (RBC) Casts:** Glomerulonephritis.`,
        suggestions: ['Seeing Casts under the microscope']
      },
      {
        query: 'Renal Ultrasound',
        content: `The fastest way to rule out Postrenal AKI. It looks for **Hydronephrosis** (swelling of the kidney due to backed-up urine).`,
        suggestions: ['Hydronephrosis grading', 'Ureteric stones on US']
      },
      // Branch 6: Management
      {
        query: 'Emergency Management (The "Fix")',
        content: `Treatment depends on the cause: give fluids for prerenal, relieve obstruction for postrenal, stop toxins for intrinsic. Severe AKI requires immediate intervention.`,
        suggestions: ['The "AEIOU" Criteria for Urgent Dialysis', 'Pharmacological Management (The "Balancing Act")', 'Systemic Cross-Talk (The "Domino Effect")'],
        imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'The "AEIOU" Criteria for Urgent Dialysis',
        content: `Indications to start emergency hemodialysis:
- **A (Acidosis):** Severe metabolic acidosis (pH < 7.1).
- **E (Electrolytes):** Refractory hyperkalemia.
- **I (Intoxications):** Lithium, Aspirin, Methanol overdose.
- **O (Overload):** Pulmonary edema resistant to diuretics.
- **U (Uremia):** Confusion, coma, or pericarditis.`,
        suggestions: ['How Dialysis works', 'Managing Hyperkalemia']
      },
      // BRANCH 7: Novel Biomarkers
      {
        query: 'Novel Biomarkers (The "Early Warning System")',
        content: `### Early Warning System
        
Serum creatinine is a flawed marker because it lags 24–48 hours behind actual kidney injury. Novel biomarkers aim to detect renal "stress" or structural damage within hours, much like Troponin does for a heart attack.`,
        suggestions: ['Cell Cycle Arrest Markers (NephroCheck)', 'NGAL (Rapid Stress Marker)', 'KIM-1 (Intrinsic Specific)'],
        imageUrl: 'https://images.unsplash.com/photo-1579152438481-678508f75355?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'Cell Cycle Arrest Markers (NephroCheck)',
        content: `Tests for **TIMP-2** and **IGFBP7** in the urine. When kidney tubule cells are stressed (e.g., by low oxygen), they hit the "pause button" on cell division (G1 cell cycle arrest) to avoid dividing while damaged. High levels indicate imminent risk of severe AKI.`,
        suggestions: ['What is G1 Arrest?', 'Clinical use of NephroCheck']
      },
      {
        query: 'NGAL (Rapid Stress Marker)',
        content: `**NGAL (Neutrophil Gelatinase-Associated Lipocalin):** A protein rapidly upregulated by the kidney within 2–6 hours of ischemic or toxic injury. It can be measured in both blood and urine to detect Acute Tubular Necrosis (ATN) before creatinine ever moves.`,
        suggestions: ['NGAL vs Creatinine timeline', 'Accuracy in Sepsis']
      },
      {
        query: 'KIM-1 (Intrinsic Specific)',
        content: `**KIM-1 (Kidney Injury Molecule-1):** A transmembrane protein not normally found in healthy kidneys. It is heavily expressed on the surface of proximal tubule cells specifically during ischemic or nephrotoxic injury, making it a highly specific marker for intrinsic AKI.`,
        suggestions: ['Detecting Chronic Injury', 'KIM-1 in Drug Trials']
      },
      // BRANCH 8: Pharmacological Management
      {
        query: 'Pharmacological Management (The "Balancing Act")',
        content: `While waiting for the kidneys to heal, doctors must aggressively manage the life-threatening metabolic derangements caused by kidney failure.`,
        suggestions: ['The Hyperkalemia Protocol', 'Fluid Resuscitation vs. Overload', 'Acid-Base Management'],
        imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'The Hyperkalemia Protocol',
        content: `Kidneys excrete 90% of the body's potassium. In AKI, it builds up and can cause fatal cardiac arrhythmias.
        
1. **Stabilize (Heart):** IV Calcium Gluconate.
2. **Shift (Potassium):** IV Insulin + Dextrose, or Albuterol.
3. **Remove:** Potassium-binding resins (Lokelma) or emergent Hemodialysis.`,
        suggestions: ['Stabilize vs Shift vs Remove', 'ECG signs of Hyperkalemia']
      },
      {
        query: 'Fluid Resuscitation vs. Overload',
        content: `Prerenal AKI needs fluids, but if it transitions to ATN, the kidneys stop making urine. Giving more IV fluids at this stage causes fluid to back up into the lungs (**Pulmonary Edema**). 

**Loop diuretics (Furosemide)** are used to treat volume overload, not to "force" the kidneys to work.`,
        suggestions: ['Fluid responsiveness signs', 'The "Stress Test" with Lasix']
      },
      {
        query: 'Acid-Base Management',
        content: `The kidneys fail to excrete daily metabolic acids. If the blood becomes severely acidic ($pH < 7.1$), IV Sodium Bicarbonate is carefully administered as a bridge to dialysis.`,
        suggestions: ['The Bicarbonate calculation', 'When to Dialyze for Acidosis']
      },
      // BRANCH 9: Systemic Cross-Talk
      {
        query: 'Systemic Cross-Talk (The "Domino Effect")',
        content: `AKI does not happen in isolation. The sudden loss of kidney function triggers inflammatory cascades that damage distant organs.`,
        suggestions: ['Cardiorenal Syndrome (Type 3)', 'Uremic Encephalopathy', 'Immune System Paralysis'],
        imageUrl: 'https://images.unsplash.com/photo-1530213786676-dc3625727786?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'Cardiorenal Syndrome (Type 3)',
        content: `Acute kidney injury directly causes acute heart failure. Uremic toxins depress heart muscle contractility, and fluid overload stretches the heart walls, leading to reduced cardiac output and arrhythmias.`,
        suggestions: ['Brain Natriuretic Peptide (BNP)', 'Treatment of CR3']
      },
      {
        query: 'Uremic Encephalopathy',
        content: `Nitrogenous waste products cross the blood-brain barrier. Symptoms range from mild confusion and lethargy to **"asterixis"** (a characteristic flapping tremor of the hands) and potentially fatal seizures.`,
        suggestions: ['What is Asterixis?', 'Urgency of Dialysis']
      },
      {
        query: 'Immune System Paralysis',
        content: `Uremia severely impairs white blood cell function (specifically neutrophils and macrophages). This makes patients with AKI highly susceptible to hospital-acquired infections, a leading cause of death.`,
        suggestions: ['Sepsis and AKI loop', 'WBC dysfunction']
      },
      // BRANCH 10: Prognosis
      {
        query: 'Prognosis & The Transition to CKD',
        content: `### Timeline of Recovery
        
The kidneys have an incredible capacity to regenerate, but the repair process is not always perfect. Recovery can be measured in phases and long-term risk assessments.`,
        suggestions: ['The Diuretic Phase of Recovery', 'Acute Kidney Disease (AKD)', 'Maladaptive Repair & Fibrosis'],
        imageUrl: 'https://images.unsplash.com/photo-1454165833267-028a04595fa8?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'The Diuretic Phase of Recovery',
        content: `As dead tubule cells regenerate, they clear the obstruction but cannot yet concentrate urine. Patients urinate massive volumes (up to 4–5 Liters a day), risking secondary dehydration and electrolyte loss.`,
        suggestions: ['Volume management in Recovery', 'Electrolyte monitoring']
      },
      {
        query: 'Acute Kidney Disease (AKD)',
        content: `A clinical "gray zone" between days 7 and 90 post-injury. If kidney function has not returned to baseline within 7 days, the patient has **AKD**. This is a critical window for intervention.`,
        suggestions: ['The 90-day window', 'AKD vs CKD']
      },
      {
        query: 'Maladaptive Repair & Fibrosis',
        content: `If the injury is severe or repetitive, kidneys heal with scar tissue (**interstitial fibrosis**) rather than functional cells. ~25% of severe AKI survivors permanently lose function, transitioning to **CKD** after 90 days.`,
        suggestions: ['Predicting the transition', 'Protective strategies post-AKI']
      }
    ],
    sources: [
      { 
        id: 'aki-handbook',
        name: 'source_nirogyams_aki.txt', 
        content: `AKI (formerly ARF) is a sudden drop in GFR. 
        - Diagnosis: KDIGO Staging (sCr and Urine Output).
        - 3 Types: Prerenal (60%), Intrinsic (30%), Postrenal (10%).
        - Urgent Dialysis: AEIOU criteria.
        - FENa: <1% is Prerenal, >2% is ATN.`,
        size: '3.5 KB'
      }
    ]
  },
  {
    id: 'aki-patient-guide',
    title: '📘 AKI: A Simple Guide',
    description: 'A patient-friendly explanation of what happens when kidneys suddenly stop working and how they heal.',
    icon: '📘',
    color: 'teal',
    initialQuery: 'What is Acute Kidney Injury? (Simple Explanation)',
    suggestedQueries: [
      'The Three Main Causes (Why did this happen?)',
      'Real-Life Scenario: Severe Infection (Sepsis)',
      'How We Fix It (The Treatment Plan)',
      'Moving Forward (Life After AKI)'
    ],
    presetData: [
      {
        query: 'What is Acute Kidney Injury? (Simple Explanation)',
        content: `### Understanding Acute Kidney Injury (AKI)
        
Acute Kidney Injury means your kidneys have suddenly stopped working as well as they should. Think of your kidneys as the body’s natural water filters. When they are injured, they can't clean your blood or get rid of extra water. 

**The good news?** With the right care, they can often heal.`,
        suggestions: ['The Three Main Causes (Why did this happen?)', 'How We Fix It (The Treatment Plan)'],
        imageUrl: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=800&q=80'
      },
      // Branch 1: Causes
      {
        query: 'The Three Main Causes (Why did this happen?)',
        content: `To fix the kidneys, we first have to figure out where the problem is. We look at three main areas: the blood flow going in, the filter itself, or the plumbing going out.`,
        suggestions: ['The "Blood Flow" Problem (Prerenal)', 'The "Filter" Problem (Intrinsic)', 'The "Plumbing" Problem (Postrenal)'],
        imageUrl: 'https://images.unsplash.com/photo-1576091160611-259c093fad7b?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'The "Blood Flow" Problem (Prerenal)',
        content: `Your kidneys need a strong, steady flow of blood to work. If you get severely dehydrated, lose blood, or have low blood pressure, the kidneys get "thirsty" and can't do their job.`,
        suggestions: ['What causes low blood pressure?', 'Signs of dehydration']
      },
      {
        query: 'The "Filter" Problem (Intrinsic)',
        content: `Sometimes the kidney tissue itself gets bruised or damaged. This can happen from certain strong medications, dye used in X-rays, or a severe illness that attacks the kidney cells directly.`,
        suggestions: ['Medications to avoid', 'X-ray dye safety']
      },
      {
        query: 'The "Plumbing" Problem (Postrenal)',
        content: `If your kidneys are making urine but it can't leave your body, the urine backs up and causes pressure. This is usually caused by a blockage, like a kidney stone or an enlarged prostate.`,
        suggestions: ['Symptoms of kidney stones', 'Enlarged prostate basics']
      },
      // Branch 2: Sepsis Scenario
      {
        query: 'Real-Life Scenario: Severe Infection (Sepsis)',
        content: `One of the most common reasons people get AKI in the hospital is from a severe infection, like pneumonia or a bad urinary tract infection.`,
        suggestions: ['The Blood Pressure Drop', 'The Kidneys Go to "Sleep"', 'The Toxin Buildup'],
        imageUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'The Blood Pressure Drop',
        content: `When your body fights a huge infection, your blood vessels open up wide, causing your blood pressure to drop fast. Your kidneys suddenly aren't getting enough oxygen.`,
        suggestions: ['How doctors raise blood pressure']
      },
      {
        query: 'The Kidneys Go to "Sleep"',
        content: `To survive the lack of oxygen, your kidney cells essentially go into **hibernation**. Because they are resting, you might stop making urine entirely. This is a survival mechanism.`,
        suggestions: ['Will they wake up?']
      },
      {
        query: 'The Toxin Buildup',
        content: `While the kidneys are "asleep," normal daily waste products and extra water start building up in your blood. This can make you feel confused, tired, or swollen.`,
        suggestions: ['Signs of fluid buildup']
      },
      // Branch 3: Treatment
      {
        query: 'How We Fix It (The Treatment Plan)',
        content: `Our primary goal is to support your body while giving your kidneys the time and environment they need to wake up and heal.`,
        suggestions: ['Fluids and Medications', 'An Artificial Helper (Dialysis)', 'The "Waking Up" Phase'],
        imageUrl: 'https://images.unsplash.com/photo-1519494140681-891f9302ca48?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'Fluids and Medications',
        content: `If you are dehydrated, we will give you IV fluids. If your blood pressure is too low, we will give you medicines to gently squeeze your blood vessels and push blood back into your kidneys.`,
        suggestions: ['Common IV fluids', 'Blood pressure supports']
      },
      {
        query: 'An Artificial Helper (Dialysis)',
        content: `If your kidneys need total rest, or if dangerous wastes are building up too fast, we use a dialysis machine. Think of it as an **artificial kidney** that temporarily cleans your blood for you until your own kidneys recover.`,
        suggestions: ['How does the machine work?', 'Is it permanent?']
      },
      {
        query: 'The "Waking Up" Phase',
        content: `As your kidneys heal, they will start making urine again. Sometimes, they make too much urine at first because they are still a bit clumsy. We will watch your fluid levels very closely during this time.`,
        suggestions: ['Monitoring recovery']
      },
      // Branch 4: Recovery
      {
        query: 'Moving Forward (Life After AKI)',
        content: `The kidneys are amazing organs that can often repair themselves, but we need to keep a close eye on them even after you feel better.`,
        suggestions: ['Full Recovery', 'Protecting Your Kidneys', 'Long-Term Checkups'],
        imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80'
      },
      {
        query: 'Full Recovery',
        content: `Many patients regain their normal kidney function. It might take a few weeks or even a few months for them to get fully back to normal.`,
        suggestions: ['The timeline of healing']
      },
      {
        query: 'Protecting Your Kidneys',
        content: `Moving forward, you will need into protect your kidneys. 
- Drink plenty of water.
- Avoid certain over-the-counter painkillers like **Ibuprofen (Advil/Motrin)**.
- Keep your blood pressure under control.`,
        suggestions: ['Safe painkiller alternatives']
      },
      {
        query: 'Long-Term Checkups',
        content: `Sometimes, a severe AKI leaves behind a little bit of microscopic scar tissue. We will schedule regular, simple blood tests to make sure your kidneys stay healthy for years to come.`,
        suggestions: ['What tests do I need?']
      }
    ],
    sources: [
      { 
        id: 'patient-handbook-aki',
        name: 'patient_guide_aki.txt', 
        content: `AKI is a sudden but often reversible loss of kidney function. 
        - Causes: Poor flow, blockage, or direct injury.
        - Treatment: Support your body while the kidneys "sleep."
        - Recovery: Vigilance with labs and avoiding kidney-toxic drugs like Ibuprofen.`,
        size: '2.2 KB'
      }
    ]
  }
];
