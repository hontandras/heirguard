import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, Shield, Scale, Users } from 'lucide-react';

const TermsOfService = () => {
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
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-800">Terms of Service</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6">
            <Scale className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-slate-700">Terms of Service</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Terms of{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            These terms govern your use of HeirGuard's digital will creation platform and services. 
            Please read them carefully.
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-8 text-center">
          <p className="text-purple-800 text-sm">
            <strong>Last Updated:</strong> January 2024 • <strong>Effective Date:</strong> January 2024
          </p>
        </div>

        {/* Terms Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl space-y-8">
          
          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-purple-600" />
              Acceptance of Terms
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              By accessing or using HeirGuard's services, you agree to be bound by these Terms of Service 
              and our Privacy Policy. If you do not agree to these terms, please do not use our services.
            </p>
            <p className="text-slate-600 leading-relaxed">
              These terms constitute a legally binding agreement between you and HeirGuard (operated by 
              Pertex Holdings). We may update these terms from time to time, and your continued use of 
              our services constitutes acceptance of any changes.
            </p>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-3 text-blue-600" />
              Service Description
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">What We Provide</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• AI-powered digital will creation platform</li>
                  <li>• Personalized legal guidance and document generation</li>
                  <li>• Secure document storage and management</li>
                  <li>• Educational resources and legal information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Development Status</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  HeirGuard is currently in development. The platform is provided as a demonstration 
                  and testing environment. Full security features and legal compliance measures are 
                  being implemented and are not yet complete.
                </p>
              </div>
            </div>
          </section>

          {/* Service Disclaimer */}
          <section>
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-amber-800 mb-3">Important Service Disclaimer</h2>
                  
                  <div className="space-y-3 text-amber-700 text-sm">
                    <div>
                      <h3 className="font-semibold mb-1">Not Legal Advice</h3>
                      <p>
                        HeirGuard provides technology tools and general information but does not provide 
                        legal advice. Our service does not replace consultation with qualified legal professionals.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-1">Professional Review Required</h3>
                      <p>
                        All documents generated through our platform are drafts that should be reviewed 
                        by qualified legal professionals before execution. We strongly recommend professional 
                        legal review for all estate planning documents.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-1">Jurisdiction Compliance</h3>
                      <p>
                        While we strive to provide jurisdiction-specific guidance, users must verify 
                        compliance with local laws and may need additional legal documentation not 
                        provided by our service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-3 text-green-600" />
              User Responsibilities
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Account Security</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• Maintain the confidentiality of your account credentials</li>
                  <li>• Notify us immediately of any unauthorized access</li>
                  <li>• Use strong passwords and enable available security features</li>
                  <li>• Log out of your account when using shared devices</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Accurate Information</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• Provide accurate and complete information</li>
                  <li>• Update your information when circumstances change</li>
                  <li>• Verify all generated documents for accuracy</li>
                  <li>• Seek professional legal review before document execution</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Prohibited Uses</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• Using the service for illegal or fraudulent purposes</li>
                  <li>• Attempting to circumvent security measures</li>
                  <li>• Sharing account access with unauthorized parties</li>
                  <li>• Reverse engineering or copying our technology</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Liability Limitations */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-red-600" />
              Liability Limitations
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="space-y-4 text-red-700 text-sm">
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Service Limitations</h3>
                  <p className="leading-relaxed">
                    HeirGuard provides technology tools and general guidance but cannot guarantee that 
                    generated documents will meet all legal requirements in every jurisdiction. Users 
                    are responsible for ensuring legal compliance and proper document execution.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Limitation of Liability</h3>
                  <p className="leading-relaxed">
                    To the maximum extent permitted by law, HeirGuard and its affiliates shall not be 
                    liable for any indirect, incidental, special, consequential, or punitive damages, 
                    including but not limited to loss of profits, data, or use, arising from your use 
                    of our services.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Maximum Liability</h3>
                  <p className="leading-relaxed">
                    Our total liability to you for any claims arising from or related to our services 
                    shall not exceed the amount you have paid us for the services in the twelve months 
                    preceding the claim.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-blue-600" />
              Data Protection & Privacy
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Data Collection & Use</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We collect and process personal data as described in our Privacy Policy. By using 
                  our services, you consent to such collection and processing in accordance with 
                  applicable data protection laws, including GDPR.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Security Measures</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal 
                  data. However, no method of transmission or storage is 100% secure, and we cannot 
                  guarantee absolute security.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Data Retention</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We retain your personal data only as long as necessary for the purposes outlined in 
                  our Privacy Policy or as required by law. You may request deletion of your data 
                  subject to legal and operational requirements.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Intellectual Property</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Our Rights</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  All content, features, and functionality of our services, including but not limited 
                  to text, graphics, logos, software, and design, are owned by HeirGuard or our licensors 
                  and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Your Content</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  You retain ownership of the personal information and content you provide to our services. 
                  By using our services, you grant us a limited license to use this information to provide 
                  our services to you.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Generated Documents</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Documents generated through our platform belong to you. However, the underlying 
                  technology, templates, and processes remain our intellectual property.
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Termination</h2>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">By You</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    You may terminate your account at any time by contacting us or using account 
                    deletion features when available. Upon termination, your access to our services 
                    will cease, and we will delete your personal data as described in our Privacy Policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">By Us</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We may terminate or suspend your account if you violate these terms, engage in 
                    fraudulent activity, or for other legitimate business reasons. We will provide 
                    reasonable notice when possible.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Effect of Termination</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Upon termination, your right to use our services ceases immediately. Provisions 
                    regarding liability limitations, intellectual property, and dispute resolution 
                    survive termination.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Governing Law & Disputes</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Applicable Law</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  These terms are governed by and construed in accordance with the laws of the Netherlands, 
                  without regard to conflict of law principles. Any disputes arising from these terms 
                  or our services shall be subject to the exclusive jurisdiction of Dutch courts.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Dispute Resolution</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  We encourage resolving disputes through direct communication. If informal resolution 
                  is not possible, disputes may be resolved through binding arbitration or court proceedings 
                  as permitted by applicable law.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Contact Information</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">Legal Questions</h3>
                  <p className="text-blue-700 text-sm">
                    For questions about these terms or legal matters: 
                    <a href="mailto:legal@heirguard.com" className="ml-1 underline hover:no-underline">
                      legal@heirguard.com
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">General Support</h3>
                  <p className="text-blue-700 text-sm">
                    For general inquiries and support: 
                    <a href="mailto:hont@pertexholdings.com" className="ml-1 underline hover:no-underline">
                      hont@pertexholdings.com
                    </a>
                  </p>
                </div>
                
                <div className="pt-3 border-t border-blue-300">
                  <p className="text-blue-700 text-sm">
                    <strong>HeirGuard</strong> is operated by Pertex Holdings<br />
                    Registered in the Netherlands
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">Changes to These Terms</h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    We may update these Terms of Service from time to time to reflect changes in our 
                    services, legal requirements, or business practices. We will notify you of material 
                    changes by email and by posting the updated terms on our website. Your continued 
                    use of our services after such changes constitutes acceptance of the updated terms.
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

export default TermsOfService;