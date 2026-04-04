import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Briefcase, Globe2, Heart, Zap } from "lucide-react";

const jobListings = [
  { id: 1, title: "Senior Full Stack Engineer", department: "Engineering", location: "Remote", type: "Full-time" },
  { id: 2, title: "Lead UX/UI Designer", department: "Design", location: "New York, NY", type: "Full-time" },
  { id: 3, title: "Cloud Solutions Architect", department: "Engineering", location: "Remote", type: "Full-time" },
  { id: 4, title: "B2B Sales Director", department: "Sales", location: "London, UK", type: "Full-time" },
  { id: 5, title: "Product Manager", department: "Product", location: "Remote", type: "Full-time" },
];

const Careers = () => {
  const [filterDept, setFilterDept] = useState("All");
  const [filterLoc, setFilterLoc] = useState("All");

  const departments = ["All", ...Array.from(new Set(jobListings.map(job => job.department)))];
  const locations = ["All", ...Array.from(new Set(jobListings.map(job => job.location)))];

  const filteredJobs = jobListings.filter(job => {
    return (filterDept === "All" || job.department === filterDept) &&
           (filterLoc === "All" || job.location === filterLoc);
  });

  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Join Our Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We're always looking for talented individuals to help us build the future of technology.</p>
        </div>

        {/* Culture & Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Why BigOneIT?</h3>
            <div className="space-y-6">
              {[
                { icon: Globe2, title: "Remote-First Culture", desc: "Work from anywhere in the world with our flexible policies." },
                { icon: Zap, title: "Continuous Learning", desc: "Generous budget for courses, conferences, and certifications." },
                { icon: Heart, title: "Health & Wellness", desc: "Comprehensive health coverage and mental wellness days." },
                { icon: Briefcase, title: "Equity Options", desc: "We believe in shared success. Every employee gets equity." }
              ].map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-6 h-6 text-brand-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                    <p className="text-slate-600 text-sm">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://picsum.photos/seed/team/800/800" 
              alt="Our Culture" 
              loading="lazy"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent flex items-end p-8">
              <p className="text-white font-medium text-lg">"The most collaborative and innovative environment I've ever worked in."</p>
            </div>
          </div>
        </div>

        {/* Job Listings with Filters */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <h3 className="text-2xl font-bold text-slate-900">Open Positions</h3>
            <div className="flex gap-4 w-full md:w-auto">
              <select 
                className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-brand-600 outline-none w-full md:w-auto"
                value={filterDept}
                onChange={(e) => setFilterDept(e.target.value)}
              >
                {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
              </select>
              <select 
                className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-brand-600 outline-none w-full md:w-auto"
                value={filterLoc}
                onChange={(e) => setFilterLoc(e.target.value)}
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <motion.div 
                    key={job.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-200 hover:shadow-md transition-all group flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                  >
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">{job.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">{job.department}</span>
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">{job.location}</span>
                        <span className="px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-medium">{job.type}</span>
                      </div>
                    </div>
                    <button className="flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors whitespace-nowrap">
                      Apply Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 text-slate-500"
                >
                  No open positions found matching your criteria.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
