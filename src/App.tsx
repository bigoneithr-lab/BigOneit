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
  Shield
} from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { GoogleGenAI } from "@google/genai";

const Logo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
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
  </div>
);

const Navbar = () => {
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
              <button className="text-slate-600 hover:text-brand-600 font-bold text-sm">Log In</button>
              <button className="bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-700 transition-all">
                Contact Us
              </button>
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
              <button className="w-full text-center text-slate-600 font-bold py-2">Log In</button>
              <button className="w-full bg-brand-600 text-white px-5 py-3 rounded-full text-sm font-bold">
                Contact Us
              </button>
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
              <img src="https://picsum.photos/seed/enterprise/1200/900" alt="Enterprise Technology" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
    { type: "Webinar", title: "Built to Last: Sustainable Technology Teams for 2026", date: "Available On-Demand", image: "https://picsum.photos/seed/webinar1/600/400" },
    { type: "Article", title: "The Technology AI Assistant Built for Enterprise IT", date: "Read Now", image: "https://picsum.photos/seed/article1/600/400" },
    { type: "Webinar", title: "Designing a Smooth Launch for Your Next Big Release", date: "Upcoming: Nov 15", image: "https://picsum.photos/seed/webinar2/600/400" }
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
        <button className="bg-white text-brand-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
          Contact Sales
        </button>
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
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
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

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      <main>
        <Hero />
        <Suites />
        <Roles />
        <Services />
        <Insights />
        <Careers />
        <CTA />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
