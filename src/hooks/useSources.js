import { useState } from 'react';
import * as pdfjs from 'pdfjs-dist';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const useSources = () => {
  const [sources, setSources] = useState([]);
  const [showSources, setShowSources] = useState(false);

  const handleFileUpload = async (file) => {
    if (!file) return;

    if (file.type === "application/pdf") {
      try {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;
        let fullText = "";
        
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const items = textContent.items.map(item => item.str);
          fullText += items.join(" ") + "\n";
        }

        const newSource = {
          id: Math.random().toString(36).substr(2, 9),
          name: file.name,
          type: "PDF",
          content: fullText,
          size: (file.size / 1024).toFixed(1) + ' KB',
          pages: pdf.numPages,
          metadata: `Extracted ${pdf.numPages} pages`
        };
        setSources(prev => [...prev, newSource]);
        setShowSources(true);
      } catch (err) {
        console.error("PDF Parsing Error:", err);
        throw new Error("Could not parse PDF.");
      }
    } else if (file.type.startsWith("image/")) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target.result;
          const newSource = {
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            type: "IMAGE",
            content: content, // Base64 for preview
            size: (file.size / 1024).toFixed(1) + ' KB',
            isImage: true
          };
          setSources(prev => [...prev, newSource]);
          setShowSources(true);
          resolve(newSource);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    } else {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const content = event.target.result;
          const newSource = {
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            type: "TEXT",
            content: content,
            size: (file.size / 1024).toFixed(1) + ' KB'
          };
          setSources(prev => [...prev, newSource]);
          setShowSources(true);
          resolve(newSource);
        };
        reader.onerror = reject;
        reader.readAsText(file);
      });
    }
  };

  const removeSource = (id) => {
    setSources(prev => prev.filter(s => s.id !== id));
  };

  return { sources, setSources, showSources, setShowSources, handleFileUpload, removeSource };
};
