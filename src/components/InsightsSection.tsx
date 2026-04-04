import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const insights = [
  {
    title: "The Future of Cloud-Native Architecture in 2025",
    category: "Cloud Computing",
    date: "Oct 24, 2024",
    image: "https://picsum.photos/seed/cloud/600/400"
  },
  {
    title: "Leveraging AI for Predictive Business Analytics",
    category: "Artificial Intelligence",
    date: "Oct 18, 2024",
    image: "https://picsum.photos/seed/ai/600/400"
  },
  {
    title: "Building Resilient Distributed Systems",
    category: "Software Engineering",
    date: "Oct 12, 2024",
    image: "https://picsum.photos/seed/system/600/400"
  }
];

const InsightsSection = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Latest Insights</h2>
            <p className="text-slate-600 max-w-2xl">Stay ahead of the curve with our latest thoughts on technology, design, and business strategy.</p>
          </div>
          <button className="mt-6 md:mt-0 text-brand-600 font-semibold flex items-center gap-2 hover:text-brand-700 transition-colors group">
            View All Articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 group cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={insight.image} 
                  alt={insight.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold text-brand-600">
                  {insight.category}
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-400 mb-2">{insight.date}</p>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors line-clamp-2">
                  {insight.title}
                </h3>
                <div className="flex items-center text-sm font-medium text-brand-600">
                  Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
