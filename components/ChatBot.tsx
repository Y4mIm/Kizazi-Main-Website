
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, Sparkles, Cpu } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings. I am Kizazi AI. How may I assist with your digital transformation today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isLoading]);

  const handleSend = async () => {
    if (isLoading || !input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await sendMessageToGemini(userMessage.text);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Connection interrupted. Please verify your network or contact support manually." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 group flex items-center justify-center w-16 h-16 bg-blue-600 hover:bg-blue-500 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all transform hover:scale-110 ${isOpen ? 'hidden' : 'flex'}`}
        aria-label="Open AI Chat Assistant"
      >
        <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-50 animate-ping"></div>
        <Cpu size={32} className="text-white" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">AI</span>
      </button>

      {/* Chat Window - HUD Style */}
      {isOpen && (
        <div 
          className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] h-[600px] bg-slate-950/90 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-blue-500/30 animate-in fade-in slide-in-from-bottom-10"
          role="dialog"
          aria-label="Kizazi AI Assistant"
        >
          {/* HUD Header */}
          <div className="bg-slate-900/50 p-4 border-b border-blue-500/20 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative w-10 h-10 flex items-center justify-center bg-blue-500/20 rounded-lg border border-blue-500/50">
                 <Bot size={24} className="text-blue-400" />
                 <div className="absolute inset-0 bg-blue-400 blur-lg opacity-20"></div>
              </div>
              <div>
                <h3 className="font-bold text-white tracking-wide text-sm font-display">KIZAZI AI <span className="text-xs font-normal text-blue-400 ml-2 font-sans">v2.5</span></h3>
                <div className="flex items-center space-x-1.5">
                  <div className={`w-1.5 h-1.5 rounded-full shadow-[0_0_8px] ${isLoading ? 'bg-yellow-400 shadow-yellow-400 animate-pulse' : 'bg-green-400 shadow-green-400'}`}></div>
                  <span className="text-[10px] text-blue-200 uppercase tracking-widest">{isLoading ? 'PROCESSING...' : 'SYSTEM ONLINE'}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
              aria-label="Close Chat"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed relative ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-900/50' 
                    : 'bg-slate-800/80 text-blue-50 border border-white/10 rounded-bl-none'
                }`}>
                  {msg.role === 'model' && (
                     <div className="absolute -top-2.5 -left-2.5 bg-slate-950 border border-blue-500/50 rounded-full p-1">
                        <Sparkles size={12} className="text-blue-400" />
                     </div>
                  )}
                  {msg.text}
                </div>
              </div>
            ))}
            
            {/* Futuristic Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start animate-in fade-in duration-300">
                <div className="bg-slate-900/80 border border-blue-500/30 p-4 rounded-2xl rounded-bl-none shadow-[0_0_10px_rgba(59,130,246,0.2)] backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    {/* Spinning Ring */}
                    <div className="relative w-5 h-5">
                      <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full"></div>
                      <div className="absolute inset-0 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    
                    {/* Text & Dots */}
                    <div className="flex items-center">
                      <span className="text-xs font-mono text-blue-300 tracking-wider mr-1">ANALYZING</span>
                      <span className="flex space-x-0.5">
                        <span className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></span>
                        <span className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-75"></span>
                        <span className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-150"></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-900/80 border-t border-blue-500/20 backdrop-blur-md">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isLoading ? "Waiting for response..." : "Input command or query..."}
                disabled={isLoading}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-4 pr-12 py-3.5 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 placeholder-slate-500 transition-all disabled:opacity-60 font-sans"
                aria-label="Chat message input"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 bg-blue-600 text-white p-1.5 rounded-lg hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center w-8 h-8"
                aria-label="Send message"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <Send size={18} />
                )}
              </button>
            </div>
            <div className="flex justify-between items-center mt-3 px-1">
               <span className="text-[10px] text-slate-500 font-mono">SECURE CONNECTION // ENCRYPTED</span>
               <span className="text-[10px] text-blue-500/50 font-mono">POWERED BY GEMINI</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;