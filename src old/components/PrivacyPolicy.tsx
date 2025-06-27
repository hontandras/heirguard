import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Globe, FileText, AlertTriangle } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4 md:py-6">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-slate-600 hover:text-slate-800 transition-colors mr-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-800">Privacy Policy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Privacy Policy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Privacy{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Your privacy is fundamental to our mission. This policy explains how we collect, 
            use, and protect your personal information.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-8 text-center">
          <p className="text-blue-800 text-sm">
            <strong>Last Updated:</strong> January 2024 • <strong>Effective Date:</strong> January 2024
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-600" />
              Introduction
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              HeirGuard ("we," "our," or "us") is committed to protecting your privacy and personal data. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you use our digital will creation platform and related services.
            </p>
            <p className="text-slate-600 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance 
              with this policy. We comply with the General Data Protection Regulation (GDPR) and other 
              applicable data protection laws.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-green-600" />
              Information We Collect
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Personal Information</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• Name, date of birth, and contact information</li>
                  <li>• Family relationships and beneficiary details</li>
                  <li>• Asset information and financial details</li>
                  <li>• Legal preferences and special instructions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Technical Information</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• IP address and device information</li>
                  <li>• Browser type and operating system</li>
                  <li>• Usage patterns and interaction data</li>
                  <li>• Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Communication Data</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• Support requests and correspondence</li>
                  <li>• Feedback and survey responses</li>
                  <li>• Marketing communication preferences</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-purple-600" />
              How We Use Your Information
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Service Provision</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• Creating and maintaining your digital will</li>
                  <li>• Providing personalized legal guidance</li>
                  <li>• Ensuring legal compliance and document validity</li>
                  <li>• Facilitating secure document storage and access</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Communication</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• Responding to your inquiries and support requests</li>
                  <li>• Sending important service updates and notifications</li>
                  <li>• Providing legal and security alerts when necessary</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Improvement and Analytics</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• Analyzing usage patterns to improve our services</li>
                  <li>• Developing new features and functionality</li>
                  <li>• Ensuring platform security and preventing fraud</li>
                </ul>
              </div>
            </div>
          </section>

          {/* GDPR Rights */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Globe className="w-6 h-6 mr-3 text-blue-600" />
              Your GDPR Rights
            </h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
              <p className="text-blue-800 text-sm leading-relaxed">
                Under the General Data Protection Regulation (GDPR), you have specific rights regarding 
                your personal data. We are committed to facilitating the exercise of these rights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Access & Portability</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• <strong>Right to Access:</strong> Request a copy of all personal data we hold about you</li>
                  <li>• <strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Control & Correction</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• <strong>Right to Rectification:</strong> Correct any inaccurate or incomplete data</li>
                  <li>• <strong>Right to Erasure:</strong> Request deletion of your personal data</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Processing Control</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• <strong>Right to Restrict:</strong> Limit how we process your data</li>
                  <li>• <strong>Right to Object:</strong> Object to certain types of processing</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Consent Management</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• <strong>Withdraw Consent:</strong> Revoke consent for data processing at any time</li>
                  <li>• <strong>Complaint Rights:</strong> Lodge complaints with supervisory authorities</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-green-600" />
              Data Security & Protection
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Encryption & Storage</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  All personal data is encrypted using AES-256 encryption both in transit and at rest. 
                  We implement zero-knowledge architecture, meaning your sensitive information is encrypted 
                  on your device before transmission, and we cannot access your unencrypted data.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Access Controls</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Access to personal data is strictly limited to authorized personnel who require it for 
                  legitimate business purposes. All access is logged and monitored, and employees undergo 
                  regular security training and background checks.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Infrastructure Security</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Our systems are hosted in secure, SOC 2 compliant data centers with physical security 
                  measures, redundant systems, and regular security audits. We implement multi-factor 
                  authentication and intrusion detection systems.
                </p>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Data Retention</h2>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Will Documents</h3>
                  <p className="text-slate-600 text-sm">Retained until you request deletion or account closure</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Account Data</h3>
                  <p className="text-slate-600 text-sm">Retained while your account remains active</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Analytics Data</h3>
                  <p className="text-slate-600 text-sm">Anonymized after 24 months</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Support Records</h3>
                  <p className="text-slate-600 text-sm">Retained for 3 years for quality assurance</p>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Third-Party Sharing</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">We Never Sell Your Data</h3>
              <p className="text-green-700 text-sm leading-relaxed mb-4">
                We do not sell, rent, or trade your personal information to third parties for marketing 
                or any other commercial purposes.
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">Limited Sharing Includes:</h4>
                  <ul className="text-green-700 text-sm space-y-1 ml-4">
                    <li>• Service providers under strict contractual obligations</li>
                    <li>• Legal compliance when required by law</li>
                    <li>• Anonymous analytics for platform improvement</li>
                    <li>• Professional legal review (with your explicit consent)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact & Data Protection</h2>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Privacy Officer</h3>
                  <p className="text-slate-600 text-sm mb-2">For general privacy inquiries:</p>
                  <a href="mailto:privacy@heirguard.com" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    privacy@heirguard.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Data Protection Officer</h3>
                  <p className="text-slate-600 text-sm mb-2">For GDPR-related requests:</p>
                  <a href="mailto:dpo@heirguard.com" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    dpo@heirguard.com
                  </a>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-300">
                <p className="text-slate-600 text-sm">
                  <strong>Response Time:</strong> We will respond to all privacy-related requests within 30 days 
                  as required by GDPR, or sooner when possible.
                </p>
              </div>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">Changes to This Policy</h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    We may update this Privacy Policy from time to time to reflect changes in our practices 
                    or legal requirements. We will notify you of any material changes by email and by posting 
                    the updated policy on our website. Your continued use of our services after such changes 
                    constitutes acceptance of the updated policy.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;