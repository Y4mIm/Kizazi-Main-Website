import React from 'react';
import { Cpu, Terminal, Signal, Lightbulb, ArrowRight } from 'lucide-react';
import { SectionId, ServiceItem } from '../types';
import RevealOnScroll from './RevealOnScroll';
import { MudclothDashPattern } from './AfricanPatterns';

const services: ServiceItem[] = [
  {
    title: "AI & Automation",
    description: "Revolutionize workflows with intelligent agents and predictive modeling.",
    icon: Cpu,
    details: ["AI Model Development", "Machine Learning", "Chatbots & Assistants", "Predictive Analytics"]
  },
  {
    title: "Software Engineering",
    description: "Building robust, scalable digital ecosystems tailored to your enterprise.",
    icon: Terminal,
    details: ["Mobile Apps (iOS/Android)", "Web Platforms", "Enterprise Systems", "UX/UI Design"]
  },
  {
    title: "Digital Transformation",
    description: "Future-proofing your infrastructure for the cloud-native era.",
    icon: Signal,
    details: ["Cloud Architecture", "IT Consulting", "Data Strategy", "Cybersecurity"]
  },
  {
    title: "Innovation Hub",
    description: "Cultivating the next generation of Malawian tech leaders.",
    icon: Lightbulb,
    details: ["R&D Lab", "Tech Incubation", "AI Literacy", "Youth Empowerment"]
  }
];

const Services: React.FC = () => {
  return (
    <section id={SectionId.SERVICES} className="py-24 bg-navy-50 relative overflow-hidden">
      <MudclothDashPattern opacity="0.04" color="#0a192f" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded bg-blue-100 text-blue-800 text-xs font-bold tracking-widest uppercase mb-4 font-sans">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight mb-4 font-display">
              Empowering Through <span className="text-blue-600">Technology</span>
            </h2>
            <p className="mt-2 max-w-2xl text-lg text-gray-600 mx-auto">
              We deliver comprehensive, future-ready solutions that drive growth.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <RevealOnScroll key={index} delay={index * 100} className="h-full">
              <div 
                className="group bg-white rounded-xl p-6 h-full shadow-sm hover:shadow-lg border border-gray-200 hover:border-blue-200 transition-all duration-300 flex flex-col"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <service.icon size={24} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-lg font-bold text-navy-900 mb-3 font-display">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 mb-6 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="space-y-2 border-t border-gray-100 pt-4 mt-auto">
                  {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-xs font-medium text-gray-500">
                      <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;