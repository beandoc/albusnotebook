# Nirogyam AI Board — Mindmap for Patient Education

A professional, Albus-style mind-mapping canvas designed to empower kidney patients through structured, source-grounded education. Powered by **Gemini 2.5 Flash** and the core logic of **NotebookLM**.

![Nirogyam Logo](https://nirogyams.com/logo.png) (Replace with actual link)

## 🧠 Core Features

- **Source-Grounded Intelligence**: Unlike generic AI, Nirogyam AI only answers based on your uploaded medical records, images, or our curated medical modules.
- **Visual Mapping**: Branch out from core concepts into detailed sub-topics. Links are generated with directional arrows to show the "educational path."
- **Nirogyam Knowledge Nodes**: Built-in modules for CKD Road Maps, Renal Nutrition, Dialysis comparison, and ADPKD management.
- **Multimodal Support**: Upload X-rays, diet charts, or test reports and ask the AI specific questions about them.
- **TTS (Text-to-Speech)**: Integrated audio mode to hear patient summaries read aloud.
- **Minimap Navigation**: Easily navigate large, complex medical mind maps.

## 🛠 Tech Stack

- **Frontend**: React + Vite (Tailwind CSS v4)
- **Visualization**: D3.js (Force-directed simulation)
- **AI Engine**: Google Gemini 2.5 Flash SDK
- **Icons**: Lucide React

## 🚀 Getting Started

1. **Clone the Repo**:
   ```bash
   git clone https://github.com/beandoc/albusnotebook.git
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Set API Key**:
   Create a `.env` file and add:
   ```env
   VITE_GEMINI_API_KEY=your_google_ai_studio_key
   ```
4. **Run Locally**:
   ```bash
   npm run dev
   ```

## 🏥 About Nirogyam
Nirogyam is dedicated to empowering patients with kidney disease through digital health tools and expert-curated education. Visit us at [nirogyams.com](https://nirogyams.com).
