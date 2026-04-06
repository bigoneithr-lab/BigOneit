import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Menu, 
  X,
  Globe2,
  Zap,
  Heart,
  Linkedin,
  Twitter,
  Github,
  Code2,
  Cloud,
  Palette,
  Users,
  Briefcase,
  ChevronRight,
  Send,
  Bot,
  MessageSquare,
  BookOpen,
  Video,
  MonitorSmartphone,
  Shield,
  Star,
  TrendingUp,
  CheckCircle2,
  Quote,
  Plus,
  Minus,
  Mail
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="flex flex-col">
      <div className="relative flex items-center">
        <span className="text-2xl font-display font-bold tracking-tight text-brand-600 mr-1">BIG</span>
        <div className="relative px-2 py-1">
          {/* The Swoosh - Refined to match the logo image */}
          <svg className="absolute inset-0 w-full h-full -z-10 overflow-visible" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M5 32C5 32 15 5 75 5C95 5 98 22 85 32C70 42 10 42 5 32Z" 
              className="stroke-[3.5]"
              stroke="url(#logo-gradient)"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="logo-gradient" x1="0" y1="20" x2="100" y2="20" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#d81b60" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-2xl font-display font-bold tracking-tight text-brand-600">ONE</span>
        </div>
        <span className="text-2xl font-display font-bold tracking-tight text-brand-600 ml-1">IT</span>
      </div>
      <span className="text-[10px] font-bold tracking-widest text-brand-600 self-end -mt-1">LLC</span>
    </div>
  </div>
);

const Navbar = ({ onLoginClick }: { onLoginClick: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-4" : "bg-white py-6"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo />
          
          <div className="hidden md:flex items-center gap-8">
            {["Solutions", "Services", "Resources", "Careers", "About Us"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-sm font-bold text-slate-700 hover:text-brand-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex items-center gap-4 ml-4 border-l border-slate-200 pl-8">
              <button onClick={onLoginClick} className="text-slate-600 hover:text-brand-600 font-bold text-sm">Log In</button>
              <a href="#contact-us" className="bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-700 transition-all">
                Contact Us
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-4 overflow-hidden shadow-lg absolute w-full"
          >
            {["Solutions", "Services", "Resources", "Careers", "About Us"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="block text-base font-bold text-slate-700 py-2"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button onClick={() => { onLoginClick(); setIsOpen(false); }} className="w-full text-center text-slate-600 font-bold py-2">Log In</button>
              <a href="#contact-us" onClick={() => setIsOpen(false)} className="w-full text-center block bg-brand-600 text-white px-5 py-3 rounded-full text-sm font-bold">
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 leading-[1.1] mb-6">
              Powerful tools that simplify the complex work of running global enterprises.
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              Get the software development, cloud consulting, and IT outsourcing support you need in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-600 text-white px-8 py-4 rounded-full font-bold hover:bg-brand-700 transition-all text-lg">
                Explore Solutions
              </button>
              <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold hover:border-slate-300 hover:bg-slate-50 transition-all text-lg">
                Get Started
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80" alt="Enterprise Technology" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply"></div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-accent-pink/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-brand-400/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Suites = () => {
  const suites = [
    { title: "Software Development Suite", icon: <Code2 className="w-8 h-8" />, desc: "Custom enterprise applications and scalable SaaS platforms.", color: "bg-blue-50 text-blue-600" },
    { title: "Cloud & Infrastructure Suite", icon: <Cloud className="w-8 h-8" />, desc: "Strategic cloud migration, architecture design, and DevOps.", color: "bg-sky-50 text-sky-600" },
    { title: "IT Outsourcing Suite", icon: <Users className="w-8 h-8" />, desc: "Elite global talent pool integrated into your workflows.", color: "bg-indigo-50 text-indigo-600" },
    { title: "Creative & Design Suite", icon: <Palette className="w-8 h-8" />, desc: "Award-winning UI/UX design and brand strategy.", color: "bg-purple-50 text-purple-600" },
    { title: "Data & Security Suite", icon: <Shield className="w-8 h-8" />, desc: "Robust cybersecurity protocols and data management.", color: "bg-emerald-50 text-emerald-600" },
  ];

  return (
    <section id="solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-6">Solutions for Your Everyday Needs</h2>
          <p className="text-xl text-slate-600">Comprehensive technology suites designed to streamline operations, enhance security, and drive growth across your entire organization.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suites.map((suite, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl border border-slate-200 hover:border-brand-300 hover:shadow-xl transition-all cursor-pointer bg-white"
            >
              <div className={`w-16 h-16 rounded-2xl ${suite.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {suite.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">{suite.title}</h3>
              <p className="text-slate-600 mb-6">{suite.desc}</p>
              <div className="flex items-center text-brand-600 font-bold group-hover:gap-2 transition-all">
                Explore Suite <ArrowRight className="w-5 h-5 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Roles = () => {
  const roles = [
    "CTOs & Tech Leaders",
    "Startup Founders",
    "Enterprise Administrators",
    "Product Managers",
    "Finance Leaders",
    "Operations Directors"
  ];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-display font-extrabold mb-6">Search By Role</h2>
            <p className="text-slate-400 text-lg mb-8">Discover how BigOneIT's solutions are tailored to meet the specific challenges of your position.</p>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-100 transition-all">
              View All Roles
            </button>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {roles.map((role, i) => (
              <motion.a
                href="#"
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-6 rounded-2xl bg-slate-800 hover:bg-brand-600 transition-colors group border border-slate-700 hover:border-brand-500"
              >
                <span className="text-lg font-bold">{role}</span>
                <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Intuitive Onboarding", icon: <MonitorSmartphone className="w-6 h-6" />, desc: "Seamlessly integrate our teams and tools into your existing workflows with guided implementation." },
    { title: "Dedicated Teams", icon: <Users className="w-6 h-6" />, desc: "Scale your capacity instantly with our pre-vetted, senior-level engineering pods." },
    { title: "World-Class Training", icon: <BookOpen className="w-6 h-6" />, desc: "Empower your internal staff with comprehensive knowledge transfer and technical workshops." },
    { title: "Strategic Consulting", icon: <Briefcase className="w-6 h-6" />, desc: "Navigate complex digital transformations with our experienced enterprise architects." },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-6">With You Every Step of the Way</h2>
          <p className="text-xl text-slate-600">We don't just deliver software; we partner with you to ensure long-term success, adoption, and continuous improvement.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center text-brand-600 mb-6 border border-slate-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Insights = () => {
  const insights = [
    { type: "Webinar", title: "Built to Last: Sustainable Technology Teams for 2026", date: "Available On-Demand", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" },
    { type: "Article", title: "The Technology AI Assistant Built for Enterprise IT", date: "Read Now", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80" },
    { type: "Webinar", title: "Designing a Smooth Launch for Your Next Big Release", date: "Upcoming: Nov 15", image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-4">Want to Learn More?</h2>
            <p className="text-xl text-slate-600">Explore our upcoming events, webinars, and thought leadership articles.</p>
          </div>
          <button className="mt-6 md:mt-0 text-brand-600 font-bold flex items-center gap-2 hover:text-brand-700 transition-colors text-lg">
            View All Resources <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((item, i) => (
            <motion.a 
              href="#"
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group block"
            >
              <div className="rounded-2xl overflow-hidden mb-6 relative aspect-[3/2]">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white px-4 py-1.5 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 shadow-md">
                  {item.type === "Webinar" ? <Video className="w-4 h-4 text-brand-600" /> : <BookOpen className="w-4 h-4 text-brand-600" />}
                  {item.type}
                </div>
              </div>
              <p className="text-brand-600 font-bold text-sm mb-2 uppercase tracking-wider">{item.date}</p>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">{item.title}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Careers = () => {
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
                  <a href={`mailto:bigoneithr@gmail.com?subject=Application for ${job.title}`} className="bg-brand-50 text-brand-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-brand-600 hover:text-white transition-colors text-center whitespace-nowrap">
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

const CTA = () => {
  return (
    <section className="py-24 bg-brand-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl lg:text-6xl font-display font-extrabold mb-8">Let's Get Started</h2>
        <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
          Ready to simplify your enterprise technology operations? Contact our team today to schedule a personalized demo.
        </p>
        <a href="#contact-us" className="inline-block bg-white text-brand-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
          Contact Sales
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2">
            <Logo className="brightness-0 invert mb-6" />
            <p className="text-slate-400 max-w-sm mb-8">
              BigOneITLLC provides powerful tools and dedicated teams that simplify the complex work of running global enterprises.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-600 hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#about-us" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact-us" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Solutions</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Software Dev</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cloud Consulting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Outsourcing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Roles</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Tech Leaders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Founders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Administrators</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 BigOneITLLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

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

const AboutUs = () => {
  return (
    <section id="about-us" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-6">About BigOneIT</h2>
            <p className="text-xl text-slate-600 mb-6">
              We are a premier global technology partner dedicated to simplifying the complex work of running enterprise operations. Since our founding, we have been committed to delivering excellence in software development, cloud infrastructure, and IT outsourcing.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Our team of world-class engineers, designers, and strategists work tirelessly to build solutions that drive growth, enhance security, and empower organizations worldwide.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-3xl font-extrabold text-brand-600 mb-2">10+</h4>
                <p className="text-slate-600 font-bold">Years of Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-extrabold text-brand-600 mb-2">500+</h4>
                <p className="text-slate-600 font-bold">Global Clients</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Our Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-brand-400/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Use the provided key, falling back to env variable if set later
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "d055dc0c-4a14-420e-93ac-8807963ebcb6";
    
    if (!accessKey) {
      // Fallback to simulation if no key is provided yet
      console.warn("Web3Forms Access Key is missing. Simulating submission.");
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message,
          subject: "New Contact Form Submission - BIG ONE IT",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        console.error("Form submission failed:", result);
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact-us" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-slate-600">Have a question or want to learn more about our services? We'd love to hear from you.</p>
        </FadeIn>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeIn delay={0.1}>
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-600">Thank you for contacting us. We will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-brand-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required disabled={isSubmitting} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-600 disabled:opacity-50" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required disabled={isSubmitting} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-600 disabled:opacity-50" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required disabled={isSubmitting} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-600 disabled:opacity-50" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} required disabled={isSubmitting} rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-600 disabled:opacity-50" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-brand-600 text-white font-bold py-4 rounded-lg hover:bg-brand-700 transition-colors disabled:bg-brand-400 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2} className="h-full">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden h-full min-h-[400px] relative">
              <iframe 
                src="https://maps.google.com/maps?width=100%25&height=100%25&hl=en&q=415%20Mission%20St,%20San%20Francisco,%20CA%2094105+(BIG%20ONE%20IT)&t=&z=14&ie=UTF8&iwloc=B&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-2">Global Headquarters</h4>
                <p className="text-sm text-slate-600 mb-4">415 Mission St, San Francisco, CA 94105</p>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="mailto:bigoneithr@gmail.com" className="text-brand-600 font-bold hover:underline flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    bigoneithr@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

const LoginModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X className="w-6 h-6" />
        </button>
        <div className="p-8">
          <div className="mb-8 text-center">
            <Logo className="justify-center mb-4" />
            <h3 className="text-2xl font-bold text-slate-900">Welcome Back</h3>
            <p className="text-slate-500 mt-2">Log in to your BigOneIT account</p>
          </div>
          <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Login functionality will be implemented soon!'); onClose(); }}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
              <input type="email" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-600" placeholder="name@company.com" />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
              <input type="password" required className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-600" placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded text-brand-600 focus:ring-brand-600" />
                <span className="text-sm text-slate-600">Remember me</span>
              </label>
              <a href="#" className="text-sm font-bold text-brand-600 hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="w-full bg-brand-600 text-white font-bold py-3.5 rounded-lg hover:bg-brand-700 transition-colors">
              Log In
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">Don't have an account? <a href="#contact-us" onClick={onClose} className="font-bold text-brand-600 hover:underline">Contact Sales</a></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const CaseStudies = () => {
  const cases = [
    {
      title: "Global Cloud Migration",
      client: "FinTech Solutions Inc.",
      industry: "Financial Services",
      challenge: "Legacy on-premise infrastructure was causing slow transaction times, frequent downtime, and high maintenance costs.",
      solution: "Migrated 100% of their core systems to a highly available, multi-region cloud architecture using AWS.",
      impact: "Reduced operational costs by 35%, improved transaction speed by 3x, and achieved 99.99% uptime.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Enterprise Cybersecurity Overhaul",
      client: "HealthCare Plus",
      industry: "Healthcare",
      challenge: "Vulnerable to ransomware attacks with outdated security protocols and non-compliant data storage.",
      solution: "Implemented a Zero Trust security model, end-to-end encryption, and automated threat detection systems.",
      impact: "Zero security breaches in 2 years, 100% HIPAA compliance, and a 60% reduction in false-positive alerts.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">Case Studies</h2>
          <h3 className="text-4xl font-display font-extrabold text-slate-900 mb-6">Proven Results, Real Impact</h3>
          <p className="text-xl text-slate-600">See how we've helped industry leaders overcome their biggest technological challenges.</p>
        </div>
        
        <div className="space-y-16">
          {cases.map((study, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-brand-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{study.industry}</span>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-2">{study.title}</h4>
                  <p className="text-lg font-medium text-brand-600">{study.client}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                    <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-rose-500" /> The Challenge
                    </h5>
                    <p className="text-slate-600">{study.challenge}</p>
                  </div>
                  
                  <div className="bg-brand-50 p-6 rounded-2xl border border-brand-100">
                    <h5 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-brand-600" /> The Impact
                    </h5>
                    <p className="text-slate-600">{study.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "BIG ONE IT completely transformed our infrastructure. We've seen a 40% increase in system performance and zero downtime since partnering with them. Their team is incredibly responsive and knowledgeable.",
      author: "Sarah Jenkins",
      role: "CTO",
      company: "TechFlow Inc.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The cybersecurity overhaul they implemented saved us from a major ransomware attempt. I sleep much better at night knowing BIG ONE IT is monitoring our networks 24/7.",
      author: "Michael Chen",
      role: "Director of Operations",
      company: "HealthCare Plus",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "We needed a custom enterprise application built from scratch in record time. Not only did they deliver ahead of schedule, but the UI/UX is flawless. Highly recommended.",
      author: "Elena Rodriguez",
      role: "VP of Product",
      company: "Global Finance Corp",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-brand-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-rose-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-400 font-bold tracking-wide uppercase text-sm mb-3">Client Success Stories</h2>
          <h3 className="text-4xl font-display font-extrabold mb-6">Don't Just Take Our Word For It</h3>
          <p className="text-xl text-slate-300">Hear from the innovative companies that trust BIG ONE IT to power their digital transformation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700 relative">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-700 opacity-50" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-lg text-slate-300 mb-8 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img src={testimonial.image} alt={testimonial.author} className="w-12 h-12 rounded-full object-cover border-2 border-slate-700" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What is your pricing structure?",
      answer: "We offer flexible pricing models tailored to your specific needs. This includes project-based fixed pricing for well-defined scopes, and retainer models for ongoing support and maintenance. Contact us for a custom quote."
    },
    {
      question: "How does your onboarding process work?",
      answer: "Our onboarding is designed to be seamless. We start with a comprehensive discovery phase to understand your infrastructure, followed by a detailed roadmap, secure credential transfer, and a kickoff meeting with your dedicated account manager."
    },
    {
      question: "What are your support response times?",
      answer: "For critical issues, we guarantee a response time of under 15 minutes, 24/7/365. Standard inquiries are addressed within 2-4 hours during regular business hours."
    },
    {
      question: "Do you offer custom software development?",
      answer: "Yes, our team of expert engineers builds scalable, secure, and high-performance custom applications tailored to your unique business requirements, from web apps to enterprise software."
    },
    {
      question: "Are you compliant with industry security standards?",
      answer: "Absolutely. We adhere to strict security protocols and are fully compliant with major industry standards including SOC 2, HIPAA, and GDPR to ensure your data is always protected."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">FAQ</h2>
          <h3 className="text-4xl font-display font-extrabold text-slate-900 mb-6">Frequently Asked Questions</h3>
          <p className="text-xl text-slate-600">Everything you need to know about partnering with BIG ONE IT.</p>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div 
                className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'border-brand-600 bg-brand-50/50' : 'border-slate-200 bg-white hover:border-brand-300'}`}
              >
                <button 
                  className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-slate-900 pr-8">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-brand-600 flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-slate-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
              <div className="absolute top-[-50%] right-[-10%] w-96 h-96 bg-brand-600/30 rounded-full blur-3xl"></div>
            </div>

            <div className="md:w-1/2 text-center md:text-left z-10">
              <h3 className="text-3xl font-display font-extrabold text-white mb-4">Stay Ahead of the Curve</h3>
              <p className="text-slate-300 text-lg">Subscribe to our newsletter for the latest IT insights, cybersecurity alerts, and company updates.</p>
            </div>

            <div className="md:w-1/2 w-full z-10">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={status !== "idle"}
                    className="w-full bg-slate-800/50 border border-slate-700 text-white rounded-xl pl-12 pr-4 py-4 focus:outline-none focus:ring-2 focus:ring-brand-500 disabled:opacity-50"
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={status !== "idle"}
                  className="bg-brand-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-700 transition-colors whitespace-nowrap disabled:bg-brand-600/50 flex items-center justify-center min-w-[140px]"
                >
                  {status === "loading" ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : status === "success" ? (
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> Subscribed</span>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
              <p className="text-slate-400 text-sm mt-3 text-center md:text-left">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-200 selection:text-brand-900">
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />
      <main>
        <Hero />
        <FadeIn><Suites /></FadeIn>
        <FadeIn><AboutUs /></FadeIn>
        <FadeIn><Roles /></FadeIn>
        <FadeIn><Services /></FadeIn>
        <FadeIn><CaseStudies /></FadeIn>
        <FadeIn><Testimonials /></FadeIn>
        <FadeIn><Insights /></FadeIn>
        <FadeIn><Careers /></FadeIn>
        <FAQ />
        <ContactUs />
        <Newsletter />
        <FadeIn><CTA /></FadeIn>
      </main>
      <Footer />
      <AIAssistant />
      <AnimatePresence>
        {isLoginOpen && <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
