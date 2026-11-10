"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Send, User, Mail, Phone, Loader2, AlertCircle } from "lucide-react";



export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLeadCaptured, setIsLeadCaptured] = useState(false);
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [messages, setMessages] = useState<{ id: string; role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isShifted, setIsShifted] = useState(false);

  useEffect(() => {
    const handleQuickActionsToggle = (e: Event) => {
      setIsShifted((e as CustomEvent).detail);
    };
    window.addEventListener("quick-actions-toggled", handleQuickActionsToggle);
    return () => window.removeEventListener("quick-actions-toggled", handleQuickActionsToggle);
  }, []);

  // Load persisted state on mount (to avoid hydration mismatch)
  useEffect(() => {
    setIsMounted(true);
    const captured = localStorage.getItem("eevs_chatbot_lead_captured");
    if (captured === "true") {
      setIsLeadCaptured(true);
    }

    try {
      const savedMessages = localStorage.getItem("eevs_chatbot_messages");
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
    } catch {
      console.error("Failed to load chat history");
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { id: Date.now().toString(), role: "user" as const, content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setError(false);

    try {
      const res = await fetch(`/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) throw new Error("Network response was not ok");

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) throw new Error("No reader available");

      let assistantMessage = { id: (Date.now() + 1).toString(), role: "assistant" as const, content: "" };
      setMessages(prev => [...prev, assistantMessage]);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        assistantMessage = { ...assistantMessage, content: assistantMessage.content + chunk };

        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = assistantMessage;
          return updated;
        });
      }
    } catch (err) {
      console.error("Chat error:", err);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Persist messages whenever they change
  useEffect(() => {
    if (isMounted && messages.length > 0) {
      localStorage.setItem("eevs_chatbot_messages", JSON.stringify(messages));
    }
  }, [messages, isMounted]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email) return;

    setIsSubmittingLead(true);
    try {
      const res = await fetch(`/api/chatbot-leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadForm),
      });

      if (res.ok) {
        setIsLeadCaptured(true);
        localStorage.setItem("eevs_chatbot_lead_captured", "true");
      } else {
        console.error("Failed to capture lead");
        setIsLeadCaptured(true); // Let them chat anyway
        localStorage.setItem("eevs_chatbot_lead_captured", "true");
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
      setIsLeadCaptured(true);
      localStorage.setItem("eevs_chatbot_lead_captured", "true");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  // Prevent rendering until mounted to avoid hydration errors
  if (!isMounted) return null;

  return (
    <div className={`fixed right-6 z-[95] transition-all duration-300 ease-in-out ${isShifted ? 'bottom-[450px]' : 'bottom-24'}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex justify-between items-center text-white">
              <div>
                <h3 className="font-semibold">Everest Assistant</h3>
                <p className="text-xs text-white/80">We typically reply instantly</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-hidden bg-gray-50 flex flex-col relative">
              {!isLeadCaptured ? (
                /* Lead Capture Form */
                <div className="p-6 flex flex-col h-full justify-center">
                  <div className="mb-6 text-center">
                    <div className="w-16 h-16 bg-accent/20 border border-accent/30 rounded-full flex items-center justify-center mx-auto mb-3 overflow-hidden shadow-inner relative">
                      <Image src="/logos/aibot.png" alt="AI Assistant" fill sizes="64px" className="object-contain" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-1">Hi there! 👋</h4>
                    <p className="text-sm text-gray-500">
                      Before we start, please let us know how to reach you.
                    </p>
                  </div>
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm bg-white text-gray-900"
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm bg-white text-gray-900"
                        value={leadForm.email}
                        onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="tel"
                        placeholder="Phone Number (Optional)"
                        className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm bg-white text-gray-900"
                        value={leadForm.phone}
                        onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmittingLead}
                      className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmittingLead ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Starting...
                        </>
                      ) : (
                        "Start Chat"
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                /* Chat Messages Area */
                <>
                  <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {messages.length === 0 && (
                      <div className="text-center text-gray-500 text-sm mt-4">
                        Ask us anything about studying abroad!
                      </div>
                    )}
                    {messages.map((m) => (
                      <div
                        key={m.id}
                        className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm whitespace-pre-wrap ${m.role === "user"
                              ? "bg-primary text-white rounded-br-none"
                              : "bg-white text-gray-800 border border-gray-100 shadow-sm rounded-bl-none"
                            }`}
                        >
                          {m.content}
                        </div>
                      </div>
                    ))}

                    {isLoading && (
                      <div className="flex justify-start">
                        <div className="bg-white border border-gray-100 shadow-sm rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center">
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                          <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                        </div>
                      </div>
                    )}

                    {error && (
                      <div className="flex justify-center mt-2">
                        <div className="bg-red-50 text-red-600 text-xs px-3 py-2 rounded-lg flex items-center gap-1.5 border border-red-100">
                          <AlertCircle className="w-4 h-4" />
                          Unable to connect. Please try again.
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Input Area */}
                  <div className="p-3 bg-white border-t border-gray-100">
                    <form
                      onSubmit={handleSubmit}
                      className="flex items-center gap-2 bg-gray-50 rounded-full border border-gray-200 px-2 py-1.5"
                    >
                      <input
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Type a message..."
                        className="flex-1 bg-transparent border-none focus:outline-none text-sm px-2 text-gray-900"
                        disabled={isLoading}
                      />
                      <button
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        className="bg-primary text-white p-2 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:hover:bg-primary"
                      >
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Welcome Hint Bubble */}
      <AnimatePresence>
        {!hasInteracted && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            className="absolute right-[80px] top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-slate-800 text-sm font-semibold py-2.5 px-4 rounded-2xl shadow-xl border border-slate-100 flex items-center pointer-events-none"
          >
            <span>Hi! I&apos;m Everest AI 👋</span>
            {/* Triangle pointer */}
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-r border-t border-slate-100 rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          if (!hasInteracted) setHasInteracted(true);
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-16 h-16 bg-accent/20 border border-accent/30 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:shadow-xl hover:bg-accent/30 transition-all overflow-hidden"
        aria-label="Toggle Chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-slate-200 text-slate-800">
                <X size={24} />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full h-full flex items-center justify-center relative"
            >
              <Image src="/logos/aibot.png" alt="Chat with us" fill sizes="64px" className="object-contain" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
