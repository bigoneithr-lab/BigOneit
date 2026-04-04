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
  MessageSquare,
  Heart
} from "lucide-react";
import React, { useState, useRef, useEffect, Suspense, lazy } from "react";
import { GoogleGenAI } from "@google/genai";
import { Canvas } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, OrbitControls, Float, Stars } from "@react-three/drei";



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
                <Hero3DElement />
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

const Hero3DElement = () => {
  return (
    <div className="w-full h-full absolute inset-0 rounded-[2rem] overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#d81b60" />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <Sphere visible args={[1.4, 64, 64]}>
            <MeshDistortMaterial 
              color="#3b82f6" 
              attach="material" 
              distort={0.4} 
              speed={2} 
              roughness={0.2} 
              metalness={0.8}
            />
          </Sphere>
        </Float>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} enablePan={false} />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
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
      <AIAssistant />
    </div>
  );
}
