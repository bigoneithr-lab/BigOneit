import React, { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Bot, X, Send, MessageSquare } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Hi! I'm your BigOneIT assistant. How can I help you build something big today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `User: ${userMsg}\n\nContext: You are a helpful assistant for BigOneITLLC, a premier global technology partner. We specialize in enterprise-grade Software Development, strategic Cloud Consulting, scalable IT Outsourcing, Creative & Design, and B2B Leads Generation. Keep your answers concise, professional, and encourage users to schedule a strategic discovery call.`,
      });
      
      setMessages(prev => [...prev, { 
        role: "ai", 
        text: response.text || "I'm sorry, I couldn't process that request." 
      }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { 
        role: "ai", 
        text: "Sorry, I'm having trouble connecting right now. Please try again later or book a consultation directly!" 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={false}
        animate={isOpen ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.8, opacity: 0, y: 20 }}
        className={`absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div className="bg-brand-600 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">BigOneIT Assistant</h3>
              <p className="text-white/70 text-[10px]">Always online</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 h-80 overflow-y-auto p-4 space-y-4 bg-slate-50">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                msg.role === "user" 
                  ? "bg-brand-600 text-white rounded-tr-none" 
                  : "bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-none"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 bg-slate-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-brand-600"
          />
          <button 
            onClick={handleSend}
            className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center text-white hover:bg-brand-700 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-600 rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform active:scale-95 relative group"
      >
        <motion.div
          animate={isOpen ? { rotate: 90, opacity: 0 } : { rotate: 0, opacity: 1 }}
          className="absolute"
        >
          <MessageSquare className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={isOpen ? { rotate: 0, opacity: 1 } : { rotate: -90, opacity: 0 }}
          className="absolute"
        >
          <X className="w-6 h-6" />
        </motion.div>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent-pink rounded-full border-2 border-white animate-pulse" />
        )}
      </button>
    </div>
  );
};

export default AIAssistant;
