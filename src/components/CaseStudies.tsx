import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const cases = [
  {
    title: "GlobalFin Digital Transformation",
    category: "Cloud Migration",
    metrics: "40% Cost Reduction",
    image: "https://picsum.photos/seed/fintech/800/600",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "HealthTech AI Integration",
    category: "Machine Learning",
    metrics: "99.9% Accuracy",
    image: "https://picsum.photos/seed/health/800/600",
    color: "from-brand-600 to-accent-pink"
  },
  {
    title: "E-Commerce Scalability",
    category: "Microservices",
    metrics: "10x Traffic Handled",
    image: "https://picsum.photos/seed/ecommerce/800/600",
    color: "from-emerald-500 to-teal-400"
  }
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Featured Work</h2>
            <p className="text-slate-600 max-w-2xl">See how we've helped industry leaders transform their operations and achieve unprecedented growth.</p>
          </div>
          <button className="mt-6 md:mt-0 text-brand-600 font-semibold flex items-center gap-2 hover:text-brand-700 transition-colors group">
            View All Cases <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((c, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative rounded-[2rem] overflow-hidden cursor-pointer aspect-[4/5]"
            >
              <div className="absolute inset-0">
                <img 
                  src={c.image} 
                  alt={c.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className={`absolute inset-0 bg-linear-to-t ${c.color} opacity-60 mix-blend-multiply transition-opacity group-hover:opacity-80`} />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/80 font-medium mb-2">{c.category}</p>
                  <h3 className="text-2xl font-bold text-white mb-4">{c.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-bold">
                      {c.metrics}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-5 h-5 text-slate-900" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
