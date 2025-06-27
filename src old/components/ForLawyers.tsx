import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, Users, Building, CheckCircle, Mail, Phone, FileText, Award, TrendingUp, Shield, DollarSign, Star, Send, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ForLawyers = () => {
  const { t, currentLanguage } = useLanguage();
  
  console.log('ForLawyers: Current language is:', currentLanguage);

  const [formData, setFormData] = useState({
    fullName: '',
    firmName: '',
    email: '',
    phone: '',
    barNumber: '',
    jurisdiction: '',
    yearsExperience: '',
    practiceAreas: '',
    clientVolume: '',
    partnershipType: '',
    message: '',
    selectedPlan: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePricingClick = (planName: string) => {
    setFormData(prev => ({ ...prev, selectedPlan: planName }));
    // Scroll to form
    document.getElementById('partnership-application')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = encodeURIComponent(`Legal Partnership Application - ${formData.fullName}`);
    const body = encodeURIComponent(`
Legal Partnership Application

Full Name: ${formData.fullName}
Law Firm: ${formData.firmName}
Email: ${formData.email}
Phone: ${formData.phone}
Bar Number: ${formData.barNumber}
Jurisdiction(s): ${formData.jurisdiction}
Years of Experience: ${formData.yearsExperience}
Practice Areas: ${formData.practiceAreas}
Monthly Client Volume: ${formData.clientVolume}
Preferred Partnership Type: ${formData.partnershipType}
Selected Plan: ${formData.selectedPlan || 'Not specified'}

Additional Information:
${formData.message}

Application submitted on: ${new Date().toLocaleString()}
    `);
    
    window.location.href = `mailto:hont@pertexholdings.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center p-8">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Application Received!</h1>
          <p className="text-lg text-slate-600 mb-8">
            Thank you for your interest in partnering with us. Your email client should have opened with your application. 
            Our legal partnerships team will review your application and contact you within 2 business days.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            {t('backToHome')}
          </Link>
        </div>
      </div>
    );
  }

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
              <span>{t('backToHome')}</span>
            </Link>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-800">{t('forLawyers')}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6">
            <Scale className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Legal Partnership Program</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Transform Your Estate Planning Practice with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Innovation
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Join our network of legal professionals and offer your clients cutting-edge digital will creation 
            technology while growing your practice with our white-label solutions and referral programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#partnership-application"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Scale className="mr-2 w-5 h-5" />
              Apply for Partnership
            </a>
            <a
              href="#partnership-options"
              className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-2xl border border-slate-300 hover:bg-white hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Partnership Options
            </a>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-slate-600 text-sm">Legal Partners</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
            <p className="text-slate-600 text-sm">Average Efficiency Increase</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">€2.1M+</div>
            <p className="text-slate-600 text-sm">Additional Revenue Generated</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-pink-600 mb-2">98%</div>
            <p className="text-slate-600 text-sm">Partner Satisfaction Rate</p>
          </div>
        </div>

        {/* Partnership Options */}
        <section id="partnership-options" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Partnership Options</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the partnership model that best fits your practice and client needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* White-Label Solution */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">White-Label Solution</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Integrate our platform seamlessly into your practice with your firm's branding. 
                Offer clients a premium digital will creation experience under your name.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Custom branding with your firm's logo and colors</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Client management dashboard</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">State-specific compliance automation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Professional document review workflow</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Revenue sharing: 60% to you, 40% to us</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                  <strong>Best for:</strong> Established firms wanting to modernize their estate planning services
                </p>
              </div>
            </div>

            {/* Referral Program */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Referral Program</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Refer clients to our platform and earn commissions while maintaining your relationship. 
                Perfect for lawyers who want to offer digital solutions without integration complexity.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">25% commission on all referred clients</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Dedicated referral tracking dashboard</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Client progress notifications</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Marketing materials and support</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">Monthly commission payments</span>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm text-green-800">
                  <strong>Best for:</strong> Solo practitioners and small firms looking for additional revenue streams
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Partner with HeirGuard?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Join a growing network of legal professionals committed to modernizing estate planning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Increase Practice Efficiency</h3>
                  <p className="text-slate-600">Automate routine will creation tasks and focus on high-value legal counsel.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Generate Additional Revenue</h3>
                  <p className="text-slate-600">Earn through revenue sharing or referral commissions while serving more clients.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Maintain Professional Standards</h3>
                  <p className="text-slate-600">All documents undergo professional legal review and compliance checking.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Enhance Client Experience</h3>
                  <p className="text-slate-600">Offer modern, convenient digital solutions that clients expect in 2025.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Continuing Education</h3>
                  <p className="text-slate-600">Access CLE programs and stay current with estate planning technology trends.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Practice Growth Support</h3>
                  <p className="text-slate-600">Marketing support and business development resources to grow your practice.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-12 text-white">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl mb-6 italic leading-relaxed max-w-4xl mx-auto">
                "HeirGuard has transformed how we serve our estate planning clients. The white-label 
                solution integrates seamlessly with our practice, and our clients love the modern, secure experience. 
                We've increased our estate planning revenue by 65% since partnering with them, while actually 
                reducing the time we spend on routine document preparation."
              </blockquote>
              <div className="border-t border-slate-600 pt-6">
                <p className="font-semibold text-lg">Michael Rodriguez, Esq.</p>
                <p className="text-slate-300">Senior Partner, Rodriguez Estate Planning</p>
                <p className="text-slate-400 text-sm mt-1">Licensed in California, Nevada, Arizona • Partner since 2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Application Form */}
        <section id="partnership-application" className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Apply for Legal Partnership</h2>
            <p className="text-slate-600">Join our network of legal professionals and transform your estate planning practice</p>
            {formData.selectedPlan && (
              <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
                <span className="text-sm font-medium">Selected Plan: {formData.selectedPlan}</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="John Smith, Esq."
                />
              </div>

              <div>
                <label htmlFor="firmName" className="block text-sm font-semibold text-slate-700 mb-2">
                  Law Firm Name *
                </label>
                <input
                  type="text"
                  id="firmName"
                  name="firmName"
                  required
                  value={formData.firmName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Smith & Associates Law Firm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@smithlaw.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="+36 30 850 8365"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="barNumber" className="block text-sm font-semibold text-slate-700 mb-2">
                  Bar Number *
                </label>
                <input
                  type="text"
                  id="barNumber"
                  name="barNumber"
                  required
                  value={formData.barNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="State Bar Number"
                />
              </div>

              <div>
                <label htmlFor="jurisdiction" className="block text-sm font-semibold text-slate-700 mb-2">
                  Jurisdiction(s) *
                </label>
                <input
                  type="text"
                  id="jurisdiction"
                  name="jurisdiction"
                  required
                  value={formData.jurisdiction}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="California, Nevada"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="yearsExperience" className="block text-sm font-semibold text-slate-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  id="yearsExperience"
                  name="yearsExperience"
                  required
                  value={formData.yearsExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select Experience</option>
                  <option value="1-3">1-3 years</option>
                  <option value="4-7">4-7 years</option>
                  <option value="8-15">8-15 years</option>
                  <option value="15+">15+ years</option>
                </select>
              </div>

              <div>
                <label htmlFor="clientVolume" className="block text-sm font-semibold text-slate-700 mb-2">
                  Monthly Estate Planning Clients
                </label>
                <select
                  id="clientVolume"
                  name="clientVolume"
                  value={formData.clientVolume}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select Volume</option>
                  <option value="1-5">1-5 clients</option>
                  <option value="6-15">6-15 clients</option>
                  <option value="16-30">16-30 clients</option>
                  <option value="30+">30+ clients</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="practiceAreas" className="block text-sm font-semibold text-slate-700 mb-2">
                Practice Areas *
              </label>
              <textarea
                id="practiceAreas"
                name="practiceAreas"
                required
                rows={3}
                value={formData.practiceAreas}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Estate Planning, Wills & Trusts, Probate, Elder Law..."
              />
            </div>

            <div>
              <label htmlFor="partnershipType" className="block text-sm font-semibold text-slate-700 mb-2">
                Preferred Partnership Type *
              </label>
              <select
                id="partnershipType"
                name="partnershipType"
                required
                value={formData.partnershipType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select Partnership Type</option>
                <option value="white-label">White-Label Solution</option>
                <option value="referral">Referral Program</option>
                <option value="both">Interested in Both Options</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell us about your practice goals and how you'd like to integrate digital will services..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    Submit Partnership Application
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm text-blue-800">
                  <strong>Bar Admission Required:</strong> All legal partners must be licensed attorneys 
                  in good standing with their respective state bar associations. Contact us at{' '}
                  <a href="mailto:hont@pertexholdings.com" className="underline hover:no-underline">
                    hont@pertexholdings.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ForLawyers;