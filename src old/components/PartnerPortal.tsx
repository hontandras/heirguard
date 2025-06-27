import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Building, Scale, CheckCircle, Mail, Phone, FileText, Award, TrendingUp } from 'lucide-react';

const PartnerPortal = () => {
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
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-800">Legal Professional Portal</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6">
            <Scale className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Legal Partnership Program</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Partner with Digital Will Assistant
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Join our network of legal professionals to streamline your estate planning practice 
            and better serve your clients with cutting-edge technology.
          </p>
        </div>

        {/* Legal Professional Benefits */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 mb-16 shadow-xl">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-slate-800 mb-4">For Legal Professionals</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Enhance your estate planning practice with our comprehensive white-label solution 
              designed specifically for lawyers, notaries, and estate planning professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">White-Label Platform Integration</h3>
                  <p className="text-slate-600 text-sm">Seamlessly integrate our platform under your firm's branding</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Client Management Dashboard</h3>
                  <p className="text-slate-600 text-sm">Track client progress and manage cases efficiently</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">State-Specific Compliance Tools</h3>
                  <p className="text-slate-600 text-sm">Automated compliance checking for all 50 states</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Revenue Sharing Opportunities</h3>
                  <p className="text-slate-600 text-sm">Earn additional income through our partnership program</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Professional Legal Review</h3>
                  <p className="text-slate-600 text-sm">All documents reviewed by qualified legal professionals</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Continuing Education Credits</h3>
                  <p className="text-slate-600 text-sm">Access to CLE programs and professional development</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Scale className="mr-2 w-5 h-5" />
              Join as Legal Partner
            </button>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Partner with Us?</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Join a growing network of legal professionals committed to modernizing estate planning 
              and providing exceptional client service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Established Platform</h3>
              <p className="text-slate-300 text-sm">Built on proven technology with thousands of satisfied clients</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Professional Excellence</h3>
              <p className="text-slate-300 text-sm">Maintain the highest standards of legal practice and client care</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Practice Growth</h3>
              <p className="text-slate-300 text-sm">Partners see average 40% increase in estate planning efficiency</p>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <blockquote className="text-xl text-slate-700 mb-6 italic leading-relaxed">
              "Digital Will Assistant has transformed how we serve our estate planning clients. 
              The platform's security, compliance features, and user experience are exceptional. 
              Our clients love the convenience, and we've been able to serve more families efficiently."
            </blockquote>
            <div className="border-t border-slate-200 pt-6">
              <p className="font-semibold text-slate-800">Michael Rodriguez, Esq.</p>
              <p className="text-slate-600">Senior Partner, Rodriguez Estate Planning</p>
              <p className="text-slate-500 text-sm mt-1">Licensed in California, Nevada, Arizona</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">Ready to Transform Your Practice?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact our legal partnership team to learn more about integration options, 
            revenue opportunities, and how we can help modernize your estate planning services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:legal-partners@digitalwillassistant.com"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2 w-5 h-5" />
              Email Legal Partnership Team
            </a>
            
            <a
              href="tel:+1-800-LEGAL-WILL"
              className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-2xl border border-slate-300 hover:bg-white hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call: 1-800-LEGAL-WILL
            </a>
          </div>

          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-xl max-w-2xl mx-auto">
            <p className="text-sm text-blue-800">
              <strong>Bar Admission Required:</strong> All legal partners must be licensed attorneys 
              in good standing with their respective state bar associations.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PartnerPortal;