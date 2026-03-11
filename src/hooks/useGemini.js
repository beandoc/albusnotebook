import { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel(
  { model: "gemini-2.5-flash" }, 
  { apiVersion: 'v1beta' }
);

export const useGemini = (sources) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuggesting, setIsSuggesting] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const generateResponse = async (query, parentContent = "") => {
    setIsLoading(true);
    try {
      const textSources = sources.filter(s => !s.isImage);
      const imageSources = sources.filter(s => s.isImage);

      const systemInstruction = `You are a Source Centric Research Assistant, powered by the core logic of NotebookLM. 
Your PRIMARY rule: Use ONLY the provided TEXT SOURCES and IMAGES to answer. 
If the answer is not in the sources, say: "I couldn't find information about this in your current sources."
Cite your sources in-line using brackets like [Source Name]. 
Be concise, accurate, and professional.`;

      const sourceContext = textSources.length > 0 
        ? `\n\n--- SOURCE MATERIAL ---\n${textSources.map(s => `SOURCE [${s.name}]:\n${s.content}`).join('\n\n')}\n--- END SOURCES ---`
        : "";

      const promptText = parentContent 
        ? `${systemInstruction}\n\n${sourceContext}\n\nContext from previous card: ${parentContent}\n\nQuestion: ${query}\n\nAnswer strictly using sources.`
        : `${systemInstruction}\n\n${sourceContext}\n\nTopic to explain: ${query}\n\nProvide a structured overview strictly grounded in the sources above.`;
      
      // Prepare multimodal parts
      const parts = [{ text: promptText }];
      
      // Add images if any
      imageSources.forEach(img => {
        const base64Data = img.content.split(',')[1];
        const mimeType = img.content.split(',')[0].split(':')[1].split(';')[0];
        parts.push({
          inlineData: {
            data: base64Data,
            mimeType: mimeType
          }
        });
      });

      // Try hitting the API proxy first (Proxy doesn't support multimodal yet in my basic version, so falling back)
      /* 
      try {
        const res = await fetch('/api/generate', { ... });
        ...
      } catch (e) { ... }
      */

      // Local Fallback (for multimodal or local dev)
      if (!import.meta.env.VITE_GEMINI_API_KEY) {
        throw new Error("No API Key configured");
      }
      const result = await model.generateContent(parts);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Gemini Error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const getSuggestions = async (node) => {
    setIsSuggesting(true);
    setSuggestions([]);
    try {
      const prompt = `Context: ${node.content}\n\nTask: Generate 4 short, highly relevant follow-up questions or sub-topics for a patient training mind map about ${node.name}. Return ONLY a JSON array of strings. Example: ["How long is recovery?", "What are the diet restrictions?"]`;
      
      // Try hitting the API proxy first
      try {
        const res = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, type: 'suggestions' })
        });
        if (res.ok) {
          const data = await res.json();
          const cleaned = data.text.replace(/```json|```/g, '').trim();
          const parsed = JSON.parse(cleaned);
          setSuggestions(parsed);
          return parsed;
        }
      } catch (e) {
        console.warn("API Proxy failed (expected in local dev), falling back to client-side...");
      }

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      const cleaned = text.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      setSuggestions(parsed);
      return parsed;
    } catch (e) {
      console.error("Suggestion error:", e);
      const fallback = ["What are the risks?", "How long does it take?", "What is the success rate?", "Is it painful?"];
      setSuggestions(fallback);
      return fallback;
    } finally {
      setIsSuggesting(false);
    }
  };

  return { generateResponse, getSuggestions, suggestions, isLoading, isSuggesting };
};
