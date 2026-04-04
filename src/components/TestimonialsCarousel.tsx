import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "BigOneIT transformed our legacy systems into a modern, scalable cloud architecture. Their expertise is unmatched.",
    author: "Sarah Jenkins",
    role: "CTO, GlobalFin Corp",
    image: "https://picsum.photos/seed/sarah/150/150"
  },
  {
    quote: "The dedicated team from BigOneIT felt like an extension of our own. They delivered our MVP ahead of schedule.",
    author: "David Chen",
    role: "Founder, HealthTech Innovators",
    image: "https://picsum.photos/seed/david/150/150"
  },
  {
    quote: "Their UI/UX design completely revamped our user engagement metrics. A truly visionary partner.",
    author: "Elena Rodriguez",
    role: "VP of Product, E-Commerce Solutions",
    image: "https://picsum.photos/seed/elena/150/150"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Client Success Stories</h2>
          <p className="text-brand-200 max-w-2xl mx-auto">Don't just take our word for it. See what our partners have to say.</p>
        </div>
        
        <div className="relative max-w-4xl mx-auto h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center text-center justify-center"
            >
              <div className="text-4xl text-accent-pink mb-6">"</div>
              <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed max-w-3xl">
                {testimonials[currentIndex].quote}
              </p>
              <div className="flex flex-col items-center">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].author} 
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-brand-100"
                  referrerPolicy="no-referrer"
                />
                <h4 className="font-bold text-lg">{testimonials[currentIndex].author}</h4>
                <p className="text-brand-300 text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  idx === currentIndex ? "bg-accent-pink" : "bg-brand-700 hover:bg-brand-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
