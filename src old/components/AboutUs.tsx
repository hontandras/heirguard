import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Users, Globe, Heart, Target, Award } from 'lucide-react';

const AboutUs = () => {
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
                <Users className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-800">About Us</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-slate-700">Our Story</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            Building{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              HeirGuard
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We are building HeirGuard – a secure, AI-powered assistant for digital will creation. 
            Our mission is to make estate planning accessible, secure, and fully compliant worldwide.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              To democratize estate planning by providing secure, intelligent, and legally compliant 
              digital will creation tools that protect families and preserve legacies worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Trust & Privacy</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Built with privacy at its core, using zero-knowledge architecture and bank-level security 
                to protect your most sensitive information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Accessibility</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Making estate planning accessible to everyone, regardless of technical expertise or 
                legal knowledge, through intelligent AI guidance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Global Compliance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ensuring full legal compliance across multiple jurisdictions with country-specific 
                requirements and professional legal review.
              </p>
            </div>
          </div>
        </div>

        {/* Why We're Building This */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Why We're Building HeirGuard</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">The Problem</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Traditional estate planning is expensive, time-consuming, and often inaccessible to many families. 
                  Over 60% of adults don't have a will, leaving their families vulnerable and their wishes unknown.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">Our Solution</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  HeirGuard combines artificial intelligence with legal expertise to guide users through 
                  personalized will creation, ensuring legal compliance while maintaining the highest 
                  security standards.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">The Impact</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  By making estate planning accessible and secure, we help families protect their legacies, 
                  reduce legal disputes, and ensure their wishes are honored across generations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Our Values</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Security First</h3>
                  <p className="text-slate-300 text-sm">Your privacy and data security are non-negotiable priorities in everything we build.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">User-Centric Design</h3>
                  <p className="text-slate-300 text-sm">We design for real people with real needs, making complex legal processes simple and intuitive.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Legal Excellence</h3>
                  <p className="text-slate-300 text-sm">We maintain the highest standards of legal accuracy and compliance across all jurisdictions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Family Focus</h3>
                  <p className="text-slate-300 text-sm">Every feature we build is designed to protect families and preserve what matters most.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Status */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Current Development Status</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              HeirGuard is currently in active development. We're building the foundation for a secure, 
              intelligent estate planning platform that will serve families worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">Phase 1</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Core Platform</h3>
              <p className="text-slate-600 text-sm">AI-powered will creation interface and basic security implementation</p>
              <div className="mt-4 text-xs text-blue-600 font-medium">In Progress</div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">Phase 2</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Security & Compliance</h3>
              <p className="text-slate-600 text-sm">Zero-knowledge architecture and multi-jurisdiction legal compliance</p>
              <div className="mt-4 text-xs text-green-600 font-medium">Planned</div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">Phase 3</div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Advanced Features</h3>
              <p className="text-slate-600 text-sm">Blockchain integration, professional partnerships, and global expansion</p>
              <div className="mt-4 text-xs text-purple-600 font-medium">Future</div>
            </div>
          </div>
        </div>

        {/* Contact & Feedback */}
        <div className="text-center bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-2xl font-bold mb-4">Join Our Journey</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            We're building HeirGuard with input from real users like you. Your feedback helps us create 
            a platform that truly meets your estate planning needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSekNxqQRSpgUg3zEzQGW_90uE29IAvOnKIKcpD7pUdYK5nReQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-2xl hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Share Your Feedback
            </a>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              Contact Our Team
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-green-500 text-center">
            <p className="text-green-100 text-sm">
              HeirGuard is a product of Pertex Holdings • Building the future of estate planning
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;