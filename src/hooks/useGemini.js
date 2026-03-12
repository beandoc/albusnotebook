import { useState } from 'react';

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
      
      // Hit the Secure API Proxy
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          prompt: promptText, 
          type: 'chat',
          images: imageSources.map(img => ({
            data: img.content.split(',')[1],
            mimeType: img.content.split(',')[0].split(':')[1].split(';')[0]
          }))
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to fetch from API proxy");
      }

      const data = await response.json();
      return data.text;
    } catch (error) {
      console.error("Gemini Proxy Error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const getSuggestions = async (node) => {
    setIsSuggesting(true);
    setSuggestions([]);
    try {
      // Logic from AIBoard turn: Check for preset suggestions first
      if (node.presetSuggestions && node.presetSuggestions.length > 0) {
        setSuggestions(node.presetSuggestions);
        setIsSuggesting(false);
        return node.presetSuggestions;
      }

      const prompt = `Context: ${node.content}\n\nTask: Generate 3 short, highly relevant follow-up questions or sub-topics for a patient training mind map about ${node.name}. Return ONLY a JSON array of strings. Example: ["How long is recovery?", "What are the diet restrictions?"]`;
      
      // Hit the Secure API Proxy
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, type: 'suggestions' })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Proxy failed");
      }

      const data = await response.json();
      const text = data.text;
      const cleaned = text.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(cleaned);
      setSuggestions(parsed);
      return parsed;
    } catch (e) {
      console.error("Suggestion error:", e);
      const fallback = ["What are the risks?", "How long does it take?", "What is the success rate?"];
      setSuggestions(fallback);
      return fallback;
    } finally {
      setIsSuggesting(false);
    }
  };

  return { generateResponse, getSuggestions, suggestions, isLoading, isSuggesting };
};
