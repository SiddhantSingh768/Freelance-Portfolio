/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Mail, Phone, Linkedin, MapPin, 
  Code2, Server, Wrench, 
  ShoppingBag, Utensils, ShoppingCart, 
  Search, PenTool, CheckCircle, Rocket, 
  Layout, Smartphone, Zap, Briefcase, ExternalLink, ChevronRight
} from 'lucide-react';

export default function App() {
  const skills = [
    {
      category: "Frontend",
      icon: <Code2 className="text-blue-500 mb-4" size={32} />,
      items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    },
    {
      category: "Backend",
      icon: <Server className="text-emerald-500 mb-4" size={32} />,
      items: ["Node.js", "Express.js", "MongoDB", "REST APIs", "JWT Auth"]
    },
    {
      category: "Tools",
      icon: <Wrench className="text-purple-500 mb-4" size={32} />,
      items: ["Git", "Vercel", "Render", "MongoDB Atlas", "VS Code"]
    }
  ];

  const projects = [
    {
      title: "Clothing Brand Website",
      category: "Fashion & Retail",
      icon: <ShoppingBag size={24} className="text-pink-500" />,
      features: [
        "Clean, minimal brand-focused UI",
        "Product detail page with size selector",
        "Fully responsive across all devices",
        "Modern layout for fashion brands"
      ],
      bestFor: "Clothing brands, fashion startups, Instagram sellers",
      link: "https://sample-clothing-three.vercel.app",
      color: "from-pink-500/20 to-rose-500/5"
    },
    {
      title: "Restaurant / Cafe Website",
      category: "Food & Hospitality",
      icon: <Utensils size={24} className="text-orange-500" />,
      features: [
        "Interactive menu with category tabs",
        "Modern dark-theme UI + WhatsApp CTA",
        "Contact, location & opening hours section",
        "Mobile-first responsive layout"
      ],
      bestFor: "Restaurants, cafes, local food businesses",
      link: "https://sample-restaurant-pied.vercel.app",
      color: "from-orange-500/20 to-amber-500/5"
    },
    {
      title: "E-commerce Website",
      category: "Online Store",
      icon: <ShoppingCart size={24} className="text-blue-500" />,
      features: [
        "Product listing with filters & categories",
        "Shopping cart and full checkout flow",
        "Order summary and pricing breakdown",
        "Clean, fast, responsive UI"
      ],
      bestFor: "Small online stores, D2C brands, new e-commerce businesses",
      link: "https://sample-e-commerce-flame.vercel.app",
      color: "from-blue-500/20 to-cyan-500/5"
    }
  ];

  const process = [
    { step: "01", title: "Discovery", icon: <Search size={24} /> },
    { step: "02", title: "Design", icon: <PenTool size={24} /> },
    { step: "03", title: "Development", icon: <Code2 size={24} /> },
    { step: "04", title: "Review", icon: <CheckCircle size={24} /> },
    { step: "05", title: "Launch", icon: <Rocket size={24} /> },
  ];

  const pricing = [
    {
      name: "Basic Website",
      subtitle: "Landing Page",
      price: "Rs.4,000 – Rs.6,000",
      features: ["1–3 pages", "Responsive design", "Contact form"],
      bestFor: "Local businesses, Startups",
      popular: false
    },
    {
      name: "Business Website",
      subtitle: "Multi-page",
      price: "Rs.7,000 – Rs.12,000",
      features: ["4–8 pages", "Custom UI", "WhatsApp integration"],
      bestFor: "SMEs, Service providers",
      popular: true
    },
    {
      name: "E-commerce Website",
      subtitle: "Online Store",
      price: "Rs.12,000 – Rs.20,000",
      features: ["Product listing", "Cart & checkout", "Basic setup"],
      bestFor: "Online stores, D2C brands",
      popular: false
    }
  ];

  const reasons = [
    {
      title: "Clean UI Design",
      desc: "Modern aesthetics that convert visitors into paying customers.",
      icon: <Layout size={32} className="text-blue-500" />
    },
    {
      title: "Mobile-First",
      desc: "Perfect on phones — where most Indian users browse.",
      icon: <Smartphone size={32} className="text-purple-500" />
    },
    {
      title: "Fast Delivery",
      desc: "5–10 day turnaround. Your launch stays on schedule.",
      icon: <Zap size={32} className="text-yellow-500" />
    },
    {
      title: "Business Focused",
      desc: "Real business goals, not just pretty mockups.",
      icon: <Briefcase size={32} className="text-emerald-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight">Siddhant Singh</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-white bg-zinc-800 hover:bg-zinc-700 px-5 py-2.5 rounded-full transition-colors">Hire Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-start pt-32 pb-12 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Available for freelance work
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
            Freelance <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Web Developer</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light">
            I build modern, responsive, and conversion-focused websites for small businesses and B2C brands across India.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-white hover:bg-zinc-200 text-zinc-950 px-8 py-4 rounded-full font-bold transition-colors flex items-center gap-2">
              Let's Work Together <ChevronRight size={20} />
            </a>
            <a href="#projects" className="bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white px-8 py-4 rounded-full font-medium transition-colors">
              View Projects
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-20 flex flex-wrap gap-6 text-zinc-400 text-sm relative z-10"
        >
          <a href="mailto:siddhantsingh768@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={18} /> siddhantsingh768@gmail.com
          </a>
          <a href="https://wa.me/916386489660" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <Phone size={18} /> +91 6386489660
          </a>
          <a href="https://linkedin.com/in/siddhantsingh768" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
            <Linkedin size={18} /> LinkedIn
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={18} /> Noida, India
          </span>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-zinc-800/50">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Technical Arsenal</h2>
          <p className="text-zinc-400 text-lg">The tools and technologies I use to build scalable web applications.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-zinc-900/40 border border-zinc-800/80 p-8 rounded-3xl hover:border-zinc-700 transition-colors group">
              <div className="bg-zinc-800/50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{skill.category}</h3>
              <ul className="space-y-4">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-zinc-400 flex items-center gap-3 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-zinc-800/50">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Featured Projects</h2>
          <p className="text-zinc-400 text-lg">A selection of my recent freelance work.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-zinc-900/40 border border-zinc-800/80 rounded-3xl overflow-hidden flex flex-col hover:border-zinc-700 transition-colors">
              <div className={`h-40 bg-gradient-to-br ${project.color} p-8 flex flex-col justify-between`}>
                <div className="flex justify-between items-start">
                  <span className="bg-zinc-950/50 text-zinc-300 text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md uppercase tracking-wider">
                    {project.category}
                  </span>
                  <div className="bg-zinc-950/30 p-2 rounded-xl backdrop-blur-md">
                    {project.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <ul className="space-y-4 mb-8 flex-1">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-zinc-400 text-sm flex items-start gap-3">
                      <CheckCircle size={18} className="text-zinc-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mb-8 p-4 bg-zinc-950/50 rounded-2xl border border-zinc-800/50">
                  <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">Best For</h4>
                  <p className="text-sm text-zinc-300 font-medium">{project.bestFor}</p>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-white hover:bg-zinc-200 text-zinc-950 rounded-xl font-bold transition-colors"
                >
                  Live Demo <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-zinc-800/50">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">My Process</h2>
          <p className="text-zinc-400 text-lg">How we go from an idea to a live website.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 lg:gap-8">
          {process.map((p, i) => (
            <div key={i} className="bg-zinc-900/40 border border-zinc-800/80 p-6 lg:p-8 rounded-3xl flex flex-col items-center text-center hover:bg-zinc-800/50 transition-colors relative">
              <span className="text-5xl lg:text-6xl font-black text-zinc-800/50 mb-6">{p.step}</span>
              <div className="text-blue-400 mb-4 bg-blue-500/10 p-4 rounded-2xl">{p.icon}</div>
              <h3 className="text-white font-bold text-lg">{p.title}</h3>
              
              {/* Connector line for desktop */}
              {i < process.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-8 w-8 lg:w-16 h-[2px] bg-zinc-800 -translate-y-1/2 z-[-1]" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-zinc-800/50">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Transparent Pricing</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">Flat-rate pricing — no hidden charges. All packages include source code handover.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pricing.map((pkg, i) => (
            <div key={i} className={`relative bg-zinc-900/40 border ${pkg.popular ? 'border-blue-500 shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)]' : 'border-zinc-800/80'} p-8 lg:p-10 rounded-3xl flex flex-col`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-6 py-1.5 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-zinc-500 font-medium">{pkg.subtitle}</p>
              </div>
              <div className="mb-10">
                <span className="text-3xl lg:text-4xl font-black text-white tracking-tight">{pkg.price}</span>
              </div>
              <ul className="space-y-5 mb-10 flex-1">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="text-zinc-300 flex items-center gap-4 font-medium">
                    <CheckCircle size={20} className="text-blue-500 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-8 border-t border-zinc-800/80">
                <p className="text-sm text-zinc-500 mb-3 font-semibold uppercase tracking-wider">Best for</p>
                <p className="text-zinc-300 font-medium">{pkg.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-zinc-900/40 border border-zinc-800/80 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-white font-bold text-xl mb-2">Add-ons (Rs.500 – Rs.3,000)</h4>
            <p className="text-zinc-400">Extra pages, SEO, Hosting / Maintenance. Available for any package.</p>
          </div>
          <p className="text-sm text-zinc-500 italic">* Prices may vary based on complexity. Contact me for a custom quote.</p>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-zinc-800/50">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Why Choose Me</h2>
          <p className="text-zinc-400 text-lg">What sets me apart from other developers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-zinc-900/30 border border-zinc-800/50 p-8 rounded-3xl">
              <div className="mb-8 bg-zinc-800/50 w-16 h-16 rounded-2xl flex items-center justify-center">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact/Footer Section */}
      <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto border-t border-zinc-800/50">
        <div className="bg-gradient-to-br from-blue-900/20 to-emerald-900/20 border border-blue-500/20 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight">Ready to build your website?</h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Let's discuss your project and see how I can help your business grow online.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="mailto:siddhantsingh768@gmail.com" className="w-full sm:w-auto bg-white text-zinc-950 hover:bg-zinc-200 px-10 py-5 rounded-full font-bold transition-colors flex items-center justify-center gap-3 text-lg">
                <Mail size={24} /> Email Me
              </a>
              <a href="https://wa.me/916386489660" target="_blank" rel="noreferrer" className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-5 rounded-full font-bold transition-colors flex items-center justify-center gap-3 text-lg">
                <Phone size={24} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <footer className="mt-32 flex flex-col md:flex-row items-center justify-between gap-6 text-zinc-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} Siddhant Singh. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <a href="https://linkedin.com/in/siddhantsingh768" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="mailto:siddhantsingh768@gmail.com" className="hover:text-white transition-colors">Email</a>
            <a href="https://wa.me/916386489660" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </footer>
      </section>
    </div>
  );
}
