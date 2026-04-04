import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Globe2, 
  Layers, 
  LayoutDashboard, 
  Menu, 
  ShieldCheck, 
  Zap,
  X,
  Linkedin,
  Twitter,
  Github,
  Code2,
  Cloud,
  Palette,
  Target,
  Users,
  Briefcase,
  ExternalLink,
  Lock,
  Activity,
  Calendar,
  ChevronRight,
  Send,
  Bot,
  MessageSquare
} from "lucide-react";
import React, { useState, useRef, useEffect, Suspense, lazy } from "react";
import { GoogleGenAI } from "@google/genai";

const Hero3DElement = lazy(() => import('./components/Hero3DElement'));
const AIAssistant = lazy(() => import('./components/AIAssistant'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Careers = lazy(() => import('./components/Careers'));
const TestimonialsCarousel = lazy(() => import('./components/TestimonialsCarousel'));
const InsightsSection = lazy(() => import('./components/InsightsSection'));

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex flex-col">
            <Logo />
            <span className="text-[7px] font-bold tracking-[0.25em] text-slate-500 uppercase -mt-1 ml-1">Build something big together</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {["Services", "Dashboard", "Case Studies", "Careers", "About"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-700 transition-all shadow-lg shadow-brand-200 active:scale-95 flex items-center gap-2">
              <Lock className="w-4 h-4" /> Client Portal
            </button>
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
            className="md:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 overflow-hidden"
          >
            {["Services", "Dashboard", "Case Studies", "Careers", "About"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(" ", "-")}`} 
                className="block text-base font-medium text-slate-600"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-brand-600 text-white px-5 py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2">
              <Lock className="w-4 h-4" /> Client Portal
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <motion.div style={{ opacity }} className="absolute inset-0 -z-10">
        <motion.div style={{ y: y1 }} className="absolute top-0 left-1/4 w-96 h-96 bg-brand-100 rounded-full blur-[120px] opacity-60" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-pink/10 rounded-full blur-[120px] opacity-40" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-brand-600 text-xs font-bold mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-accent-pink animate-pulse" />
              Empowering Global Enterprises
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-6xl lg:text-8xl font-display font-bold leading-[0.95] mb-8 text-balance">
              Transform Your Vision Into <span className="text-gradient">Digital Reality</span>.
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
              BigOneITLLC is a premier global technology partner, delivering enterprise-grade software development, strategic cloud consulting, and scalable IT outsourcing to drive your business forward.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-5">
              <a href="#consultation" className="bg-brand-600 text-white px-10 py-5 rounded-2xl font-bold flex items-center gap-3 hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 active:scale-95">
                Schedule Discovery Call <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95 shadow-sm inline-flex items-center justify-center">
                Explore Our Capabilities
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative perspective-1000"
          >
            <div className="relative z-10 bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl transform-gpu hover:rotate-x-2 hover:rotate-y-2 transition-transform duration-500">
              <div className="bg-slate-800 rounded-[2rem] overflow-hidden aspect-square relative group">
                <Suspense fallback={<div className="w-full h-full bg-slate-800 animate-pulse" />}>
                  <Hero3DElement />
                </Suspense>
                <div className="absolute inset-0 bg-linear-to-tr from-brand-900/40 via-transparent to-accent-pink/20 pointer-events-none" />
                
                {/* Floating UI Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute top-10 right-10 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl"
                >
                  <Activity className="w-8 h-8 text-brand-400 mb-2" />
                  <div className="text-[10px] uppercase font-bold text-white/60">System Health</div>
                  <div className="text-xl font-bold text-white">99.9%</div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                  className="absolute bottom-10 left-10 bg-white/10 backdrop-blur-xl p-4 rounded-2xl border border-white/20 shadow-2xl"
                >
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4].map(i => <div key={i} className="w-1.5 h-6 bg-brand-400 rounded-full animate-pulse" style={{ animationDelay: `${i*0.2}s` }} />)}
                  </div>
                  <div className="text-[10px] uppercase font-bold text-white/60">Cloud Traffic</div>
                  <div className="text-xl font-bold text-white">Active</div>
                </motion.div>
              </div>
            </div>
            
            {/* 3D-like background rings */}
            <motion.div style={{ y: y1 }} className="absolute -top-20 -right-20 w-80 h-80 border border-brand-200/30 rounded-full -z-10 animate-[spin_20s_linear_infinite]" />
            <motion.div style={{ y: y2 }} className="absolute -bottom-20 -left-20 w-64 h-64 border border-accent-pink/20 rounded-full -z-10 animate-[spin_15s_linear_infinite_reverse]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TechStackMarquee = () => {
  const technologies = [
    "React", "Node.js", "AWS", "Google Cloud", "Azure", "Python", 
    "TypeScript", "Docker", "Kubernetes", "Next.js", "GraphQL", "PostgreSQL"
  ];

  return (
    <div className="py-12 bg-white border-b border-slate-100 overflow-hidden flex flex-col items-center">
      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Trusted Technologies & Platforms</p>
      <div className="relative w-full max-w-7xl mx-auto flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex whitespace-nowrap gap-16 pr-16"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {[...technologies, ...technologies].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
              <span className="text-2xl font-display font-bold text-slate-800">{tech}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const ServiceCard = ({ s, i }: { s: any, i: number, key?: React.Key }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="group h-full"
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full p-10 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:border-brand-200 hover:shadow-2xl hover:shadow-brand-600/5 transition-colors duration-500"
      >
        <motion.div 
          style={{ transform: "translateZ(50px)" }}
          className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6"
        >
          {s.icon}
        </motion.div>
        <motion.h4 style={{ transform: "translateZ(30px)" }} className="text-2xl font-bold mb-4 text-slate-900">{s.title}</motion.h4>
        <motion.p style={{ transform: "translateZ(20px)" }} className="text-slate-600 leading-relaxed text-lg">{s.desc}</motion.p>
        <motion.div style={{ transform: "translateZ(40px)" }} className="mt-8 flex items-center gap-2 text-brand-600 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
          Learn More <ChevronRight className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Users className="w-7 h-7" />,
      title: "Outsourcing",
      desc: "Accelerate your roadmap with our elite global talent pool. We seamlessly integrate dedicated, senior-level engineers and IT professionals into your existing workflows."
    },
    {
      icon: <Code2 className="w-7 h-7" />,
      title: "Software Development",
      desc: "Bespoke enterprise applications, scalable SaaS platforms, and high-performance mobile apps architected with modern, future-proof technologies."
    },
    {
      icon: <Cloud className="w-7 h-7" />,
      title: "Cloud Consulting",
      desc: "Optimize infrastructure and reduce costs with our strategic cloud migration, architecture design, and DevOps automation across AWS, Azure, and GCP."
    },
    {
      icon: <Cpu className="w-7 h-7" />,
      title: "IT Solutions",
      desc: "Comprehensive digital transformation, robust cybersecurity protocols, and resilient infrastructure management designed to protect and scale your enterprise."
    },
    {
      icon: <Palette className="w-7 h-7" />,
      title: "Creative & Design",
      desc: "Award-winning UI/UX design and brand strategy that transforms complex user journeys into intuitive, engaging, and conversion-optimized digital experiences."
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Leads Generation",
      desc: "Precision-targeted B2B lead generation and data-driven growth marketing strategies engineered to fill your pipeline with high-intent prospects."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-base font-bold text-accent-pink uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold text-slate-900 leading-tight">Comprehensive IT Services for a Digital World</h3>
          </div>
          <p className="text-slate-600 text-lg max-w-md">
            We combine technical excellence with creative vision to deliver solutions that drive real business value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Dashboard = () => {
  return (
    <section id="dashboard" className="py-24 bg-brand-600 text-white overflow-hidden relative">
      {/* Live Status Indicator */}
      <div className="absolute top-8 right-8 z-20 flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Client Portal Live</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-base font-bold text-brand-200 uppercase tracking-[0.2em] mb-4">Client Portal</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold mb-8">Project Command Center</h3>
            <p className="text-brand-100 text-lg mb-10 leading-relaxed">
              Gain complete transparency into your digital initiatives. Track real-time sprint velocity, resource allocation, and critical milestones in one secure, centralized hub.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Project Completion", value: "68%" },
                { label: "Active Sprints", value: "3" },
                { label: "Team Members", value: "12" },
                { label: "Hours Logged", value: "450" }
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-brand-200 text-[10px] uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 border border-white/10 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Active Timeline</span>
              </div>
              <div className="text-xs text-slate-500">Updated just now</div>
            </div>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
              {[
                { phase: "Discovery & Planning", status: "Completed", color: "bg-emerald-500", text: "text-emerald-500" },
                { phase: "UI/UX Design", status: "Completed", color: "bg-emerald-500", text: "text-emerald-500" },
                { phase: "Frontend Development", status: "In Progress (80%)", color: "bg-brand-500", text: "text-brand-400" },
                { phase: "Backend Integration", status: "Pending", color: "bg-slate-600", text: "text-slate-400" }
              ].map((r, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 text-slate-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <div className={`w-3 h-3 rounded-full ${r.color}`} />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/5 bg-white/5 backdrop-blur-sm">
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-bold text-white text-sm">{r.phase}</div>
                    </div>
                    <div className={`text-xs font-bold ${r.text}`}>{r.status}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 flex justify-center">
              <button className="text-brand-400 text-sm font-bold flex items-center gap-2 hover:text-white transition-colors">
                Open Full Client Portal <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Software Development",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", service: "Software Development", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="consultation" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-10 lg:p-16 rounded-[3rem] shadow-2xl border border-slate-100">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mx-auto mb-6">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Book a Consultation</h2>
            <p className="text-slate-500">Schedule a strategic discovery call with our technical experts to discuss your digital transformation roadmap.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Work Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all" 
                  placeholder="john@company.com" 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Service Interested In</label>
              <select 
                value={formData.service}
                onChange={(e) => setFormData({...formData, service: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all appearance-none"
              >
                <option>Software Development</option>
                <option>Cloud Consulting</option>
                <option>IT Solutions</option>
                <option>Outsourcing</option>
                <option>Creative & Design</option>
                <option>Leads Generation</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
              <textarea 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all" 
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <button 
              disabled={status === "submitting"}
              className="w-full bg-brand-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 active:scale-95 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending..." : "Send Message"} <Send className="w-5 h-5" />
            </button>

            {status === "success" && (
              <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl text-center font-bold text-sm">
                Message sent successfully! We will contact you at bigoneithr@gmail.com.
              </div>
            )}
            {status === "error" && (
              <div className="p-4 bg-red-50 text-red-600 rounded-2xl text-center font-bold text-sm">
                There was an error sending your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex flex-col mb-8">
              <Logo className="brightness-0 invert" />
              <span className="text-[7px] font-bold tracking-[0.25em] text-slate-400 uppercase mt-1 ml-1">Build something big together</span>
            </div>
            <p className="text-slate-400 max-w-xs mb-8 leading-relaxed">
              BigOneITLLC is a global leader in digital transformation, providing world-class software engineering, strategic IT consulting, and scalable outsourcing solutions to enterprises worldwide.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-400 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Outsourcing</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Software Dev</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cloud Consulting</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Leads Gen</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© 2026 BigOneITLLC. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-slate-300 transition-colors">Status</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Stats = () => {
  return (
    <section className="py-24 bg-brand-600 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Global Enterprise Clients", value: "500+" },
            { label: "Projects Delivered", value: "1,200+" },
            { label: "Expert Engineers", value: "300+" },
            { label: "Years of Excellence", value: "15+" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="text-5xl lg:text-6xl font-display font-bold mb-4">{stat.value}</div>
              <div className="text-brand-100 font-medium uppercase tracking-wider text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TechStackMarquee />
        <Services />
        <Dashboard />
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full animate-spin" /></div>}>
          <CaseStudies />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full animate-spin" /></div>}>
          <TestimonialsCarousel />
        </Suspense>
        <Stats />
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full animate-spin" /></div>}>
          <InsightsSection />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="w-8 h-8 border-4 border-brand-600 border-t-transparent rounded-full animate-spin" /></div>}>
          <Careers />
        </Suspense>
        <ConsultationForm />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <AIAssistant />
      </Suspense>
    </div>
  );
}
