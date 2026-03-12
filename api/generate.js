import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, type, images } = req.body;
  const apiKey = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("Backend Error: Gemini API Key missing in environment.");
    return res.status(500).json({ error: 'Gemini API Key not configured on server' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel(
      { model: "gemini-2.5-flash" },
      { apiVersion: 'v1beta' }
    );

    const parts = [{ text: prompt }];
    if (images && images.length > 0) {
      images.forEach(img => {
        parts.push({
          inlineData: {
            data: img.data,
            mimeType: img.mimeType
          }
        });
      });
    }

    const result = await model.generateContent(parts);
    const response = await result.response;
    const text = response.text();
    
    res.status(200).json({ text });
  } catch (error) {
    console.error("API Proxy Error:", error);
    res.status(500).json({ error: error.message });
  }
}
