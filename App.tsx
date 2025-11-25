
import React, { useState } from 'react';
import { MapPin, Mail, Phone, Twitter, Facebook, Instagram, Linkedin, CheckCircle, Zap, ShieldCheck, TrendingUp, Leaf, Award, UserCheck, Target, ArrowRight, Star, Quote, Heart } from 'lucide-react';
import Navigation from './components/Navigation';
import Services from './components/Services';
import RevealOnScroll from './components/RevealOnScroll';
import Logo from './components/Logo';
import PrivacyPolicyModal from './components/PrivacyPolicyModal';
import { TechWeavePattern, ChevronCircuitDivider, AfroGeometricCorner, MudclothDashPattern } from './components/AfricanPatterns';
import { SectionId, ValueItem } from './types';

// Constants
const values: ValueItem[] = [
  { title: "Innovation", description: "Embracing creativity", icon: Zap },
  { title: "Integrity", description: "Trust & transparency", icon: ShieldCheck },
  { title: "Excellence", description: "High-quality delivery", icon: Award },
  { title: "Empowerment", description: "Developing talent", icon: TrendingUp },
  { title: "Sustainability", description: "Built to last", icon: Leaf },
];

const testimonials = [
  {
    text: "Kizazi's AI solution transformed our customer service operations completely. Highly professional team.",
    author: "Sarah M.",
    role: "Operations Director",
    company: "FinServe Malawi"
  },
  {
    text: "The mobile app they developed for us is world-class. User engagement has increased by 200%.",
    author: "James Banda",
    role: "CEO",
    company: "AgriTech Solutions"
  }
];

// Single static hero image - Young African Man in Data Center
const heroImage = "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=75&w=1920";

const App: React.FC = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-navy-900 font-sans overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <Navigation />
      <PrivacyPolicyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
      
      {/* Hero Section - Real Navy Theme */}
      <section id={SectionId.HOME} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-950 pt-20 pb-10">
        
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Young African man working in a data center" 
              className="w-full h-full object-cover opacity-100"
              fetchPriority="high"
            />
          </div>
          {/* Dark Navy overlay for text readability */}
          <div className="absolute inset-0 bg-navy-950/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-transparent to-navy-950"></div>
        </div>

        {/* African Pattern Overlay - Subtle */}
        <TechWeavePattern className="z-0" color="#64ffda" opacity="0.05" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-10">
          
          {/* Header Element: Architectural Line */}
          <RevealOnScroll delay={100}>
            <div className="flex items-center justify-center space-x-4 mb-8 opacity-90">
              <div className="h-px w-8 sm:w-16 bg-blue-400"></div>
              <span className="text-blue-200 font-sans text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">
                Future of Technology
              </span>
              <div className="h-px w-8 sm:w-16 bg-blue-400"></div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={300}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 leading-tight font-display">
              Innovations for <br />
              <span className="text-blue-400">Generations</span>
            </h1>
          </RevealOnScroll>
          
          <RevealOnScroll delay={400}>
            <p className="mt-2 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Building the future of <span className="text-white font-medium">AI</span> and <span className="text-white font-medium">Digital Innovation</span>. 
              We empower businesses with intelligent, scalable solutions.
            </p>
          </RevealOnScroll>
          
          <RevealOnScroll delay={500}>
            <div className="flex flex-col sm:flex-row justify-center gap-5 w-full sm:w-auto">
              <a href={`#${SectionId.CONTACT}`} className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-lg transition-colors flex items-center justify-center font-display shadow-lg">
                Book Consultation 
                <ArrowRight size={20} className="ml-2" />
              </a>
              <a href={`#${SectionId.PORTFOLIO}`} className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 text-white rounded-lg font-bold text-lg transition-colors flex items-center justify-center font-display">
                View Our Work
              </a>
            </div>
          </RevealOnScroll>

          {/* Static Tech Stats - Simplified */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl px-4 relative">
            {/* Decor accent */}
            <AfroGeometricCorner className="-top-4 -left-4 w-8 h-8" color="#60a5fa" />
            <AfroGeometricCorner className="-bottom-4 -right-4 w-8 h-8" color="#60a5fa" rotation="180" />

            {[
              { label: "Client Satisfaction", value: "98%", icon: UserCheck },
              { label: "Projects Delivered", value: "50+", icon: Target }
            ].map((stat, i) => (
              <RevealOnScroll key={i} delay={600 + (i * 100)}>
                <div className="flex items-center p-5 border border-white/10 rounded-xl bg-navy-900/50 backdrop-blur-sm">
                  <div className="p-3 bg-blue-600/20 rounded-lg text-blue-400 mr-5 flex-shrink-0">
                    <stat.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="text-left">
                    <p className="text-3xl font-bold text-white mb-0.5 font-display">{stat.value}</p>
                    <p className="text-xs text-blue-200 uppercase tracking-wider font-medium">{stat.label}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Clean & Simple */}
      <section id={SectionId.ABOUT} className="py-24 bg-white border-b border-gray-100 relative">
        {/* Minimal African Dash Pattern for texture in white space */}
        <MudclothDashPattern opacity="0.04" color="#0a192f" />

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/2 -translate-y-1/2">
           <svg width="200" height="200" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="#0060af" strokeWidth="1" />
              <circle cx="50" cy="50" r="30" stroke="#0060af" strokeWidth="1" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <RevealOnScroll>
              <div>
                <div className="inline-block mb-4">
                  <span className="text-blue-600 font-bold tracking-widest uppercase text-xs border-b-2 border-blue-600 pb-1 font-sans">Who We Are</span>
                </div>
                <h2 className="text-4xl font-bold text-navy-900 mb-6 leading-tight font-display">
                  Visionaries Building the <br/>
                  <span className="text-blue-600">Digital Tomorrow</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Kizazi Technologies is a visionary Malawian technology company building the future of Artificial Intelligence and digital innovation. Our mission is to empower businesses, organizations, and communities with intelligent, scalable, and transformative technology solutions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-8">
                  {values.map((value, index) => (
                      <div key={index} className="flex items-center">
                        <div className="flex-shrink-0 p-1.5 bg-blue-50 rounded text-blue-600 mr-3">
                          <value.icon size={18} />
                        </div>
                        <div>
                          <h3 className="font-bold text-navy-900 font-display text-sm">{value.title}</h3>
                        </div>
                      </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
            
            <RevealOnScroll delay={200}>
              <div className="space-y-6 relative">
                <AfroGeometricCorner className="-top-6 -right-6 opacity-20" color="#0a192f" />
                
                <div className="bg-navy-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                  {/* Texture Overlay */}
                  <TechWeavePattern opacity="0.03" color="#ffffff" />
                  
                  <Quote className="text-blue-500 mb-4 opacity-40" size={32} />
                  <p className="text-xl font-medium italic mb-6 relative z-10 font-display leading-relaxed">"To position Malawi as a regional leader in advanced technology, innovation, and AI development."</p>
                  <p className="font-bold text-blue-400 uppercase tracking-widest text-xs font-sans relative z-10">Our Vision</p>
                </div>
                
                <div className="bg-blue-50 text-navy-900 p-8 rounded-2xl border border-blue-100 relative">
                   <AfroGeometricCorner className="bottom-4 right-4 w-6 h-6 opacity-30" color="#0060af" rotation="180" />
                   <h3 className="text-xl font-bold mb-4 font-display">Why Choose Kizazi?</h3>
                   <ul className="space-y-3">
                     {[
                       "Locally rooted, globally inspired solutions",
                       "Expert team focused on impactful results",
                       "Affordable and scalable for all sizes",
                       "Committed to transforming Malawi's tech landscape"
                     ].map((item, i) => (
                       <li key={i} className="flex items-start text-sm font-medium text-slate-700">
                         <CheckCircle size={16} className="mr-3 text-blue-600 flex-shrink-0 mt-0.5" />
                         {item}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <Services />

      {/* Portfolio / Impact Section - Navy Background */}
      <section id={SectionId.PORTFOLIO} className="py-24 bg-navy-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 font-display">
                Our Impact
              </h2>
              <p className="text-lg text-blue-200 max-w-2xl mx-auto">
                Real-world solutions solving real-world problems across Malawi.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project Card 1: Zoko */}
            <RevealOnScroll delay={0}>
              <div className="group relative h-[350px] rounded-2xl overflow-hidden cursor-pointer bg-navy-900 border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80" 
                  alt="Zoko Beauty Platform" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">Lifestyle & Wellness</span>
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">Zoko</h3>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    A revolutionary beauty platform connecting beauticians, wellness, and health professionals directly to clients.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Project Card 2: FinTech */}
            <RevealOnScroll delay={100}>
              <div className="group relative h-[350px] rounded-2xl overflow-hidden cursor-pointer bg-navy-900 border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
                  alt="FinData Analytics" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">FinTech</span>
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">FinData Analytics</h3>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    AI-powered dashboard for financial institutions to visualize data trends and predict market shifts.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Project Card 3: AgriTech */}
            <RevealOnScroll delay={200}>
              <div className="group relative h-[350px] rounded-2xl overflow-hidden cursor-pointer bg-navy-900 border border-white/5">
                <img 
                  src="https://images.unsplash.com/photo-1628126235206-5260b9ea6441?auto=format&fit=crop&w=800&q=80" 
                  alt="AgriSmart IoT - African Farmer" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <span className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">AgriTech</span>
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">AgriSmart IoT</h3>
                  <p className="text-gray-300 text-sm line-clamp-3">
                    IoT sensor network helping farmers monitor soil moisture levels in real-time via a mobile app.
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials - Simple Grid */}
      <section className="py-24 bg-navy-50 relative">
        <MudclothDashPattern opacity="0.03" color="#0060af" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
             <h2 className="text-3xl font-bold text-center mb-12 text-navy-900 font-display">Trusted by Industry Leaders</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={i} delay={i*100}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-colors relative overflow-hidden">
                  {/* Subtle Accent */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
                  
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-navy-800 text-lg leading-relaxed mb-6">"{t.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-navy-100 rounded-full flex items-center justify-center text-navy-700 font-bold text-lg mr-3 font-display">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-navy-900 font-display text-sm">{t.author}</p>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">{t.role}, {t.company}</p>
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Navy Blue Professional */}
      <section id={SectionId.CONTACT} className="py-24 bg-navy-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
             <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-white mb-4 font-display">Let's Build Your Vision</h2>
               <p className="text-blue-200">Partner with Kizazi Technologies to bring your ideas to life.</p>
             </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <RevealOnScroll delay={100}>
              <div className="bg-navy-800 p-8 rounded-2xl border border-navy-700 h-full relative overflow-hidden">
                {/* Pattern Accent */}
                <TechWeavePattern opacity="0.05" color="#60a5fa" />
                
                <h3 className="text-xl font-bold text-white mb-8 font-display relative z-10">Contact Information</h3>
                
                <div className="space-y-8 relative z-10">
                  <div className="flex items-start">
                    <MapPin size={20} className="text-blue-400 mt-1 mr-4" />
                    <div>
                      <p className="text-xs text-blue-300 uppercase tracking-wider mb-1">Headquarters</p>
                      <p className="text-white">Blantyre, Malawi</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail size={20} className="text-blue-400 mt-1 mr-4" />
                    <div>
                      <p className="text-xs text-blue-300 uppercase tracking-wider mb-1">Email Us</p>
                      <a href="mailto:info@kizazitech.mw" className="text-white hover:text-blue-400 transition-colors">info@kizazitech.mw</a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone size={20} className="text-blue-400 mt-1 mr-4" />
                    <div>
                      <p className="text-xs text-blue-300 uppercase tracking-wider mb-1">Call Us</p>
                      <a href="tel:+265993909120" className="text-white hover:text-blue-400 transition-colors">+265 993 909 120</a>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-navy-700 relative z-10">
                  <p className="text-blue-300 mb-4 text-sm">Connect with us</p>
                  <div className="flex space-x-4">
                    <a href="https://x.com/kizazitechmw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-navy-700 hover:bg-blue-600 flex items-center justify-center text-white transition-all" aria-label="Follow us on X (Twitter)">
                      <Twitter size={18} />
                    </a>
                    <a href="https://web.facebook.com/profile.php?id=61583758394223" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-navy-700 hover:bg-blue-600 flex items-center justify-center text-white transition-all" aria-label="Follow us on Facebook">
                      <Facebook size={18} />
                    </a>
                    <a href="https://www.instagram.com/kizazitech/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-navy-700 hover:bg-blue-600 flex items-center justify-center text-white transition-all" aria-label="Follow us on Instagram">
                      <Instagram size={18} />
                    </a>
                    <a href="https://www.linkedin.com/company/kizazi-technologies" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-navy-700 hover:bg-blue-600 flex items-center justify-center text-white transition-all" aria-label="Follow us on LinkedIn">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Contact Form */}
            <RevealOnScroll delay={200}>
              <div className="bg-white p-8 rounded-2xl shadow-xl relative">
                <AfroGeometricCorner className="-top-3 -left-3 w-8 h-8" color="#0060af" />
                <form action="https://formsubmit.co/kizazitechhnologies@gmail.com" method="POST" className="space-y-5">
                  <input type="hidden" name="_subject" value="New Consultation Request" />
                  <input type="hidden" name="_captcha" value="false" />
                  
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                      <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                      <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" />
                  </div>

                  <div>
                     <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                     <select id="service" name="service" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none text-gray-700">
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="AI & Automation">AI & Automation</option>
                        <option value="Software Development">Software & App Development</option>
                        <option value="Digital Transformation">Digital Transformation / IT</option>
                        <option value="Innovation/Training">Innovation & Training</option>
                     </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none" placeholder="Tell us about your project or requirements..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg shadow-md transition-colors font-display">
                    Request Consultation
                  </button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-950 border-t border-navy-900 relative">
        <ChevronCircuitDivider className="text-blue-600" opacity="0.2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
             <div className="col-span-1 md:col-span-2">
                <Logo className="mb-6" isFooter={true} />
                <p className="text-slate-400 max-w-sm leading-relaxed text-sm">
                  Empowering generations through sustainable innovation and intelligent technology solutions.
                </p>
             </div>
             <div>
               <h3 className="text-white font-bold mb-4 font-display text-sm uppercase tracking-wider">Company</h3>
               <ul className="space-y-3 text-sm text-slate-400">
                 <li><a href={`#${SectionId.ABOUT}`} className="hover:text-blue-400 transition-colors">About Us</a></li>
                 <li><a href={`#${SectionId.SERVICES}`} className="hover:text-blue-400 transition-colors">Services</a></li>
                 <li><a href={`#${SectionId.PORTFOLIO}`} className="hover:text-blue-400 transition-colors">Portfolio</a></li>
                 <li><a href={`#${SectionId.CONTACT}`} className="hover:text-blue-400 transition-colors">Contact</a></li>
                 <li>
                   <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-blue-400 transition-colors text-left">
                     Privacy Policy
                   </button>
                 </li>
               </ul>
             </div>
             <div>
                <h3 className="text-white font-bold mb-4 font-display text-sm uppercase tracking-wider">Newsletter</h3>
                <p className="text-xs text-slate-500 mb-4">Subscribe to get the latest tech trends from Malawi.</p>
                <form className="flex" onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Enter email" className="bg-navy-900 text-white px-4 py-2 rounded-l-lg text-sm w-full border border-navy-800 focus:outline-none focus:border-blue-600" />
                  <button className="bg-blue-600 px-4 py-2 rounded-r-lg text-white hover:bg-blue-700 transition-colors">
                    <ArrowRight size={16} />
                  </button>
                </form>
             </div>
           </div>

           <div className="border-t border-navy-900 pt-8 flex flex-col md:flex-row justify-between items-center">
             <p className="text-slate-500 text-xs mb-4 md:mb-0">
               &copy; {new Date().getFullYear()} Kizazi Technologies. All rights reserved.
             </p>
             <div className="flex items-center space-x-2 text-xs text-slate-600">
               <span>Made with</span>
               <Heart size={12} className="text-red-500 fill-current" />
               <span>by Kizazi Tech</span>
             </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
