const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf-8');

// 1. Imports
content = content.replace(
  'import { \n  ArrowRight, \n  Menu, \n  X,',
  'import { \n  ArrowRight, \n  Menu, \n  X,\n  Globe2,\n  Zap,\n  Heart,'
);

// 2. Navbar links
content = content.replace(
  /\["Solutions", "Services", "Resources", "About Us"\]/g,
  '["Solutions", "Services", "Resources", "Careers", "About Us"]'
);

// 3. Footer links
content = content.replace(
  `<li><a href="#" className="hover:text-white transition-colors">Careers</a></li>`,
  `<li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>`
);

// 4. Component insertion
const careersComponent = `const Careers = () => {
  const jobs = [
    { title: "Senior Full Stack Engineer", type: "Full-time", location: "Remote" },
    { title: "Cloud Solutions Architect", type: "Full-time", location: "Remote" },
    { title: "Lead UX/UI Designer", type: "Full-time", location: "New York, NY / Remote" },
    { title: "B2B Sales Director", type: "Full-time", location: "London, UK / Remote" }
  ];

  return (
    <section id="careers" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-6">Join Our Team</h2>
          <p className="text-xl text-slate-600">Build the future of enterprise technology with a global, innovative, and remote-first team.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Culture & Benefits</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 shrink-0"><Globe2 className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Remote-First Culture</h4>
                  <p className="text-slate-600">Work from anywhere. We value output and creativity over office hours.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 shrink-0"><Zap className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Continuous Learning</h4>
                  <p className="text-slate-600">Generous budget for courses, conferences, and certifications.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 shrink-0"><Heart className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Health & Wellness</h4>
                  <p className="text-slate-600">Comprehensive health coverage and dedicated mental wellness days.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-brand-600 shrink-0"><Briefcase className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-slate-900">Equity Options</h4>
                  <p className="text-slate-600">We believe in shared success. Every employee gets equity in the company.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Open Positions</h3>
            <div className="space-y-4">
              {jobs.map((job, i) => (
                <div key={i} className="p-4 rounded-2xl border border-slate-100 hover:border-brand-300 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900">{job.title}</h4>
                    <p className="text-sm text-slate-500">{job.type} &middot; {job.location}</p>
                  </div>
                  <a href={\`mailto:bigoneithr@gmail.com?subject=Application for \${job.title}\`} className="bg-brand-50 text-brand-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-brand-600 hover:text-white transition-colors text-center whitespace-nowrap">
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center pt-6 border-t border-slate-100">
              <p className="text-sm text-slate-500 mb-3">Don't see a perfect fit? We're always looking for great talent.</p>
              <a href="mailto:bigoneithr@gmail.com?subject=General Application" className="text-brand-600 font-bold hover:underline">Send us your resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {`;

content = content.replace('const CTA = () => {', careersComponent);

// 5. Render insertion
content = content.replace(
  '<Insights />\n        <CTA />',
  '<Insights />\n        <Careers />\n        <CTA />'
);

fs.writeFileSync('src/App.tsx', content);
