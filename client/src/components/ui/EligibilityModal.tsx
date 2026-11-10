"use client";

import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ChevronRight, GraduationCap, Globe2, Briefcase, Plane } from "lucide-react";

export function EligibilityModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    goal: "",
    destination: "",
    level: "",
    english: "",
    timeline: "",
  });

  useEffect(() => {
    const handleOpen = (e: Event) => {
      if (e instanceof CustomEvent && e.detail?.country) {
        setFormData(prev => ({ ...prev, destination: e.detail.country }));
      }
      setIsOpen(true);
    };
    window.addEventListener("open-eligibility-modal", handleOpen);
    return () => window.removeEventListener("open-eligibility-modal", handleOpen);
  }, []);

  const onClose = () => setIsOpen(false);

  // Reset state when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({ goal: "", destination: "", level: "", english: "", timeline: "" });
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <m.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">What is your primary goal?</h3>
            <p className="text-ui-body text-slate-500 mb-6">Select the option that best describes your objective.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: "study", label: "Study Abroad", icon: GraduationCap },
                { id: "migrate", label: "Migrate Permanently", icon: Globe2 },
                { id: "work", label: "Work Overseas", icon: Briefcase },
                { id: "visit", label: "Visit / Tourist", icon: Plane },
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setFormData({ ...formData, goal: option.id });
                    handleNext();
                  }}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all duration-300 ${
                    formData.goal === option.id
                      ? "border-accent bg-accent/10 text-primary shadow-sm"
                      : "border-surface-border bg-white hover:border-accent/50 hover:bg-surface text-surface-foreground"
                  }`}
                >
                  <option.icon size={24} className={`mb-2 ${formData.goal === option.id ? "text-accent" : "text-surface-muted"}`} />
                  <span className="font-bold text-base">{option.label}</span>
                </button>
              ))}
            </div>
          </m.div>
        );
      case 2:
        return (
          <m.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Preferred Destination?</h3>
            <p className="text-ui-body text-slate-500 mb-6">Where are you planning to go?</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: "au", label: "Australia", flag: "🇦🇺" },
                { id: "ca", label: "Canada", flag: "🇨🇦" },
                { id: "uk", label: "United Kingdom", flag: "🇬🇧" },
                { id: "us", label: "United States", flag: "🇺🇸" },
              ].map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setFormData({ ...formData, destination: option.id });
                    handleNext();
                  }}
                  className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                    formData.destination === option.id
                      ? "border-accent bg-accent/10 text-primary shadow-sm"
                      : "border-surface-border bg-white hover:border-accent/50 hover:bg-surface text-surface-foreground"
                  }`}
                >
                  <span className="text-2xl">{option.flag}</span>
                  <span className="font-bold text-base">{option.label}</span>
                </button>
              ))}
            </div>
          </m.div>
        );
      case 3:
        return (
          <m.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Highest Education Level?</h3>
            <p className="text-ui-body text-slate-500 mb-6">This helps us evaluate your points or eligibility.</p>
            
            <div className="flex flex-col gap-2.5">
              {["High School (Year 12)", "Diploma / Certificate", "Bachelor's Degree", "Master's or Higher"].map((level) => (
                <button
                  key={level}
                  onClick={() => {
                    setFormData({ ...formData, level });
                    setTimeout(() => handleNext(), 300);
                  }}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    formData.level === level
                      ? "border-accent bg-accent/10 text-primary shadow-sm"
                      : "border-surface-border bg-white hover:border-accent/50 hover:bg-surface text-surface-foreground"
                  }`}
                >
                  <span className="font-bold text-base">{level}</span>
                  {formData.level === level && <CheckCircle2 className="text-accent" size={18} />}
                </button>
              ))}
            </div>
          </m.div>
        );
      case 4:
        return (
          <m.div
            key="step4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">English Proficiency</h3>
            <p className="text-ui-body text-slate-500 mb-6">Have you taken a test like IELTS or PTE?</p>
            
            <div className="flex flex-col gap-2.5">
              {["Yes, I have valid scores", "I am planning to take one soon", "No, I haven't taken one"].map((english) => (
                <button
                  key={english}
                  onClick={() => {
                    setFormData({ ...formData, english });
                    setTimeout(() => handleNext(), 300);
                  }}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    formData.english === english
                      ? "border-accent bg-accent/10 text-primary shadow-sm"
                      : "border-surface-border bg-white hover:border-accent/50 hover:bg-surface text-surface-foreground"
                  }`}
                >
                  <span className="font-bold text-base">{english}</span>
                  {formData.english === english && <CheckCircle2 className="text-accent" size={18} />}
                </button>
              ))}
            </div>
          </m.div>
        );
      case 5:
        return (
          <m.div
            key="step5"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col h-full"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2">Expected Timeline</h3>
            <p className="text-ui-body text-slate-500 mb-6">When do you want to start this journey?</p>
            
            <div className="flex flex-col gap-2.5">
              {["Within 3 months", "3-6 months from now", "More than 6 months", "Not sure yet, just exploring"].map((timeline) => (
                <button
                  key={timeline}
                  onClick={() => {
                    setFormData({ ...formData, timeline });
                    setTimeout(() => handleNext(), 300);
                  }}
                  className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                    formData.timeline === timeline
                      ? "border-accent bg-accent/10 text-primary shadow-sm"
                      : "border-surface-border bg-white hover:border-accent/50 hover:bg-surface text-surface-foreground"
                  }`}
                >
                  <span className="font-bold text-base">{timeline}</span>
                  {formData.timeline === timeline && <CheckCircle2 className="text-accent" size={18} />}
                </button>
              ))}
            </div>
          </m.div>
        );
      case 6:
        return (
          <m.div
            key="step6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center h-full text-center py-6"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-5 shadow-inner">
              <CheckCircle2 className="text-emerald-500 w-8 h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">You have strong potential!</h3>
            <p className="text-ui-body text-surface-foreground mb-8 max-w-md">
              Based on your answers, you have multiple pathways available. 
              Let&apos;s connect you with an expert to finalize your strategy.
            </p>
            
            <a 
              href={`https://calendly.com/samir-dreamtrip?a1=${encodeURIComponent(`Goal: ${formData.goal}, Dest: ${formData.destination}, Level: ${formData.level}, English: ${formData.english}, Timeline: ${formData.timeline}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full bg-accent text-primary font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:bg-white transition-all text-base flex items-center justify-center gap-2"
            >
              Book Free Assessment <ChevronRight size={18} />
            </a>
            
            <button 
              onClick={onClose}
              className="mt-5 text-sm text-surface-foreground hover:text-primary underline underline-offset-4"
            >
              Maybe later
            </button>
          </m.div>
        );
      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6">
          {/* Backdrop */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Content */}
          <m.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
          >
            {/* Header / Progress */}
            <div className="px-5 py-3 border-b border-surface-border flex items-center justify-between bg-surface">
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === step ? "w-6 bg-accent" : i < step ? "w-3 bg-accent/40" : "w-3 bg-surface-border"
                    }`} 
                  />
                ))}
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-surface-muted hover:text-primary hover:bg-surface-border rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-7 overflow-y-auto">
              <AnimatePresence mode="wait">
                {renderStepContent()}
              </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            {step > 1 && step < 6 && (
              <div className="px-5 sm:px-7 py-3.5 border-t border-surface-border flex justify-between bg-white items-center">
                <button 
                  onClick={handleBack}
                  className="text-sm font-medium text-surface-muted hover:text-primary transition-colors"
                >
                  Back
                </button>
                <span className="text-xs text-surface-muted">Step {step} of 5</span>
              </div>
            )}
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
}
