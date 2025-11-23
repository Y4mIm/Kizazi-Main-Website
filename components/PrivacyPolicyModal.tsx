import React from 'react';
import { X, Shield, Lock, Eye } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-3xl max-h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
              <Shield size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Privacy Policy</h2>
              <p className="text-xs text-slate-500">Last Updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-8 overflow-y-auto leading-relaxed text-slate-600 space-y-8 scrollbar-thin scrollbar-thumb-slate-200">
          
          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
              <Eye size={18} className="mr-2 text-blue-500" /> 1. Introduction
            </h3>
            <p className="text-sm">
              Welcome to Kizazi Technologies ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>kizazitech.mw</strong>.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center">
              <Lock size={18} className="mr-2 text-blue-500" /> 2. Information We Collect
            </h3>
            <p className="text-sm mb-2">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services.</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and any other information you provide in our contact forms.</li>
              <li><strong>Usage Data:</strong> We may collect information about how you access and use the website (e.g., browser type, operating system).</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">3. How We Use Your Information</h3>
            <p className="text-sm mb-2">We use the information we collect or receive:</p>
            <ul className="list-disc pl-5 text-sm space-y-1">
              <li>To facilitate account creation and logon process.</li>
              <li>To send you administrative information.</li>
              <li>To respond to your inquiries and offer support.</li>
              <li>To request feedback and contact you about your use of our Site.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">4. Sharing Your Information</h3>
            <p className="text-sm">
              We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-slate-900 mb-3">5. Contact Us</h3>
            <p className="text-sm">
              If you have questions or comments about this policy, you may email us at <a href="mailto:info@kizazitech.mw" className="text-blue-600 hover:underline">info@kizazitech.mw</a> or by post to:
            </p>
            <div className="mt-3 p-4 bg-slate-50 rounded-xl text-sm font-medium border border-slate-100">
              Kizazi Technologies<br />
              Blantyre, Malawi<br />
              Phone: +265 993 909 120
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-blue-500/30"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;