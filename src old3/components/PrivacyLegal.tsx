import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, FileText, AlertTriangle, CheckCircle, Globe, Server, Key } from 'lucide-react';

const PrivacyLegal = () => {
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
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-800">Privacy & Legal</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-slate-700">Privacy & Security First</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Your Privacy & Security Are Our{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Top Priority
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We implement industry-leading security measures and maintain strict privacy standards 
            to protect your most sensitive information throughout the will creation process.
          </p>
        </div>

        {/* Security Overview */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Security Framework</h2>
              <p className="text-slate-600">Built on zero-knowledge architecture and bank-level encryption</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">End-to-End Encryption</h3>
                <p className="text-slate-600 text-sm">AES-256 encryption protects your data from device to server</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Key className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Zero-Knowledge</h3>
                <p className="text-slate-600 text-sm">We can't access your personal information - only you have the keys</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">SOC 2 Compliant</h3>
                <p className="text-slate-600 text-sm">Independently audited security controls and processes</p>
              </div>
            </div>
          </div>
        </section>

        {/* GDPR Compliance */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-3xl p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">GDPR Compliance</h2>
                <p className="text-slate-600">Full compliance with European data protection regulations</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Right to Access</h3>
                  <p className="text-slate-600 text-sm">You can request a copy of all personal data we hold about you at any time.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Right to Rectification</h3>
                  <p className="text-slate-600 text-sm">You can correct any inaccurate or incomplete personal data.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Right to Erasure</h3>
                  <p className="text-slate-600 text-sm">You can request deletion of your personal data under certain circumstances.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Data Portability</h3>
                  <p className="text-slate-600 text-sm">You can export your data in a structured, machine-readable format.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-800 mb-1">Consent Management</h3>
                  <p className="text-slate-600 text-sm">Clear consent mechanisms and the ability to withdraw consent at any time.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/60 border border-blue-300 rounded-xl">
              <p className="text-sm text-blue-800">
                <strong>Data Protection Officer:</strong> For GDPR-related inquiries, contact our DPO at{' '}
                <a href="mailto:dpo@digitalwill.ai" className="underline hover:no-underline">
                  dpo@digitalwill.ai
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Zero-Knowledge Policy */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Zero-Knowledge Architecture</h2>
                <p className="text-slate-600">We literally cannot access your personal information</p>
              </div>
            </div>

            <div className="prose prose-slate max-w-none">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">How It Works</h3>
              <p className="text-slate-600 mb-4">
                Our zero-knowledge architecture ensures that your sensitive information is encrypted on your device 
                before it ever reaches our servers. This means:
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-slate-600">Your will content is encrypted with keys only you possess</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-slate-600">Our servers only store encrypted data that we cannot decrypt</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-slate-600">Even our employees cannot access your personal information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-slate-600">Government requests cannot compromise your data privacy</span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mb-3">Technical Implementation</h3>
              <p className="text-slate-600 mb-4">
                We use client-side encryption with AES-256 encryption standards. Your encryption keys are derived 
                from your password using PBKDF2 with 100,000 iterations, ensuring that even if our servers were 
                compromised, your data would remain secure.
              </p>
            </div>
          </div>
        </section>

        {/* Legal Disclaimers */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-8 md:p-12">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Legal Disclaimers</h2>
                <p className="text-slate-600">Important legal information about our services</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Service Limitations</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Digital Will Assistant provides technology tools to help create will documents. We do not provide 
                  legal advice, and our service does not replace consultation with a qualified attorney. The documents 
                  generated are drafts that should be reviewed by legal professionals before execution.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Liability Limitations</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  While we strive for accuracy and compliance, we cannot guarantee that documents will meet all 
                  legal requirements in every jurisdiction. Users are responsible for ensuring their wills comply 
                  with local laws and are properly executed according to legal requirements.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Professional Review Required</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  All documents generated through our platform should be reviewed by qualified legal professionals 
                  before signing. Complex estates, international assets, or special circumstances may require 
                  additional legal consultation beyond our automated tools.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Jurisdiction Compliance</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Will requirements vary significantly by jurisdiction. While our platform attempts to provide 
                  jurisdiction-specific guidance, users must verify compliance with local laws and may need 
                  additional legal documentation not provided by our service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Handling Practices */}
        <section className="mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Data Handling Practices</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">What We Collect</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Personal information you provide for will creation</li>
                  <li>• Technical data for service functionality</li>
                  <li>• Usage analytics to improve our platform</li>
                  <li>• Communication records for support purposes</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">How We Protect It</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• End-to-end encryption for all sensitive data</li>
                  <li>• Regular security audits and penetration testing</li>
                  <li>• Strict access controls and employee training</li>
                  <li>• Secure data centers with physical protection</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Data Retention</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Will documents: Retained until user deletion</li>
                  <li>• Account data: Retained while account is active</li>
                  <li>• Analytics data: Anonymized after 24 months</li>
                  <li>• Support records: Retained for 3 years</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Third-Party Sharing</h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• We never sell your personal data</li>
                  <li>• Limited sharing with service providers under strict contracts</li>
                  <li>• Legal compliance only when required by law</li>
                  <li>• Anonymous analytics for platform improvement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Questions About Privacy or Legal Matters?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Our privacy and legal teams are here to help. Contact us for any questions about data protection, 
              GDPR rights, or legal disclaimers.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Privacy Officer</h3>
                <a href="mailto:privacy@digitalwill.ai" className="text-blue-300 hover:text-blue-200 text-sm">
                  privacy@digitalwill.ai
                </a>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">Legal Team</h3>
                <a href="mailto:legal@digitalwill.ai" className="text-blue-300 hover:text-blue-200 text-sm">
                  legal@digitalwill.ai
                </a>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-2">GDPR Requests</h3>
                <a href="mailto:dpo@digitalwill.ai" className="text-blue-300 hover:text-blue-200 text-sm">
                  dpo@digitalwill.ai
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-600 text-center">
              <p className="text-slate-400 text-sm">
                Last updated: January 2024 • This page is updated regularly to reflect current practices
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PrivacyLegal;