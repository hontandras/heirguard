import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Globe, Mail, Building, CheckCircle, Send, Users, TrendingUp, Shield, DollarSign, Star, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ForFoundations = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    organizationName: '',
    website: '',
    country: '',
    mainCause: '',
    contactEmail: '',
    organizationType: '',
    registrationNumber: '',
    interestedInDonations: false,
    selectedPlan: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [websiteError, setWebsiteError] = useState('');

  const validateWebsite = (url: string): boolean => {
    if (!url) return true;
    
    if (!url.match(/^https?:\/\//)) {
      setWebsiteError('Website URL must start with http:// or https://');
      return false;
    }
    
    const urlPattern = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
    
    if (!urlPattern.test(url)) {
      setWebsiteError('Please enter a valid website URL (e.g., https://www.example.org)');
      return false;
    }
    
    setWebsiteError('');
    return true;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'website') {
      validateWebsite(value);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handlePricingClick = (planName: string) => {
    setFormData(prev => ({ ...prev, selectedPlan: planName }));
    document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.website && !validateWebsite(formData.website)) {
      return;
    }
    
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Foundation Partnership Application - ${formData.organizationName}`);
    const body = encodeURIComponent(`
Foundation Partnership Application

Organization Name: ${formData.organizationName}
Organization Type: ${formData.organizationType}
Website: ${formData.website}
Registration Number: ${formData.registrationNumber}
Country: ${formData.country}
Contact Email: ${formData.contactEmail}
Main Cause: ${formData.mainCause}
Selected Plan: ${formData.selectedPlan || 'Not specified'}

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
          <h1 className="text-3xl font-bold text-slate-800 mb-4">{t('thankYou')}</h1>
          <p className="text-lg text-slate-600 mb-8">
            We've received your submission. Your email client should have opened with your partnership application. 
            We'll be in touch within 48 hours to discuss partnership opportunities.
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
              <div className="w-8 h-8 bg-gradient-to-r from-pink-600 to-red-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-800">{t('forFoundations')}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-medium text-slate-700">Legacy Giving Program</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            Partner with HeirGuard for{' '}
            <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              Legacy Giving
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Join our trusted network of foundations and NGOs to help individuals create meaningful charitable legacies. 
            Connect with donors who want to make a lasting impact through their wills.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#partnership-form"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-2xl hover:from-pink-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Heart className="mr-2 w-5 h-5" />
              Apply for Partnership
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-2xl border border-slate-300 hover:bg-white hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Learn How It Works
            </a>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-pink-600 mb-2">€2.3M+</div>
            <p className="text-slate-600 text-sm">Total Legacy Donations Facilitated</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <p className="text-slate-600 text-sm">Partner Organizations</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-green-600 mb-2">12,000+</div>
            <p className="text-slate-600 text-sm">Wills Including Charitable Donations</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">25</div>
            <p className="text-slate-600 text-sm">Countries Served</p>
          </div>
        </div>

        {/* How It Works Section */}
        <section id="how-it-works" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">How Our Partnership Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We make it simple for your organization to receive legacy donations through our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">1. Join Our Network</h3>
              <p className="text-slate-600 leading-relaxed">
                Apply to become a verified partner organization. We review your credentials and mission alignment.
              </p>
            </div>

            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">2. Get Listed</h3>
              <p className="text-slate-600 leading-relaxed">
                Your organization appears as a donation option when users create their wills through our platform.
              </p>
            </div>

            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">3. Receive Donations</h3>
              <p className="text-slate-600 leading-relaxed">
                When donors pass away, their designated charitable bequests are processed and transferred to you.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Partner with Us?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Access a growing network of donors who want to create meaningful charitable legacies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Global Reach</h3>
                  <p className="text-slate-600">Connect with donors across 25+ countries through our international platform.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Growing Market</h3>
                  <p className="text-slate-600">Legacy giving is growing 15% annually as more people plan their charitable impact.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Trusted Platform</h3>
                  <p className="text-slate-600">Bank-level security and legal compliance ensure safe, reliable donation processing.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Meaningful Connections</h3>
                  <p className="text-slate-600">Help donors create lasting legacies that align with their values and your mission.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">Quality Assurance</h3>
                  <p className="text-slate-600">All partner organizations are verified and meet our strict quality standards.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <DollarSign className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">No Upfront Costs</h3>
                  <p className="text-slate-600">Join our network with no initial fees - you only pay when you receive donations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Partnership Pricing</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transparent, fair pricing that grows with your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 text-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Basic Listing</h3>
              <div className="text-3xl font-bold text-slate-800 mb-2">Free</div>
              <p className="text-slate-600 mb-6">No upfront costs</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Listed as donation option</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Basic organization profile</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">5% processing fee on donations</span>
                </li>
              </ul>
              <button 
                onClick={() => handlePricingClick('Most Popular')}
                className="w-full px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
              >
                Most Popular
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Recommended
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Featured Partner</h3>
              <div className="text-3xl font-bold text-slate-800 mb-2">€99/month</div>
              <p className="text-slate-600 mb-6">Plus 3% processing fee</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Priority placement in listings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Enhanced organization profile</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Donation analytics dashboard</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Donor communication tools</span>
                </li>
              </ul>
              <button 
                onClick={() => handlePricingClick('Get Featured')}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-colors"
              >
                Get Featured
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 text-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Premium Partner</h3>
              <div className="text-3xl font-bold text-slate-800 mb-2">€299/month</div>
              <p className="text-slate-600 mb-6">Plus 2% processing fee</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Top-tier placement</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Custom branding options</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Advanced analytics & reporting</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Dedicated account manager</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">Marketing co-promotion</span>
                </li>
              </ul>
              <button 
                onClick={() => handlePricingClick('Premium')}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                Go Premium
              </button>
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
                "Partnering with HeirGuard has significantly increased our legacy giving income. 
                The platform makes it easy for donors to include us in their wills, and the team provides 
                excellent support throughout the process. We've received over €180,000 in donations through 
                the platform in just 18 months."
              </blockquote>
              <div className="border-t border-slate-600 pt-6">
                <p className="font-semibold text-lg">Maria Rodriguez</p>
                <p className="text-slate-300">Development Director, Children's Future Foundation</p>
                <p className="text-slate-400 text-sm mt-1">Partner since 2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Application Form */}
        <section id="partnership-form" className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Apply for Partnership</h2>
            <p className="text-slate-600">Join our network of trusted organizations and start receiving legacy donations</p>
            {formData.selectedPlan && (
              <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
                <span className="text-sm font-medium">Selected Plan: {formData.selectedPlan}</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organizationName" className="block text-sm font-semibold text-slate-700 mb-2">
                  Organization Name *
                </label>
                <input
                  type="text"
                  id="organizationName"
                  name="organizationName"
                  required
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Your Foundation/NGO Name"
                />
              </div>

              <div>
                <label htmlFor="organizationType" className="block text-sm font-semibold text-slate-700 mb-2">
                  Organization Type *
                </label>
                <select
                  id="organizationType"
                  name="organizationType"
                  required
                  value={formData.organizationType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select Type</option>
                  <option value="foundation">Foundation</option>
                  <option value="ngo">NGO</option>
                  <option value="charity">Charity</option>
                  <option value="nonprofit">Nonprofit Organization</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-slate-700 mb-2">
                  Website *
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  required
                  value={formData.website}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    websiteError ? 'border-red-300' : 'border-slate-300'
                  }`}
                  placeholder="https://www.yourorganization.org"
                />
                {websiteError && (
                  <p className="mt-1 text-sm text-red-600">{websiteError}</p>
                )}
              </div>

              <div>
                <label htmlFor="registrationNumber" className="block text-sm font-semibold text-slate-700 mb-2">
                  Registration Number
                </label>
                <input
                  type="text"
                  id="registrationNumber"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Official registration number"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('country')} of Registration *
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Netherlands"
                />
              </div>

              <div>
                <label htmlFor="contactEmail" className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('contact')} Email *
                </label>
                <input
                  type="email"
                  id="contactEmail"
                  name="contactEmail"
                  required
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="contact@yourorganization.org"
                />
              </div>
            </div>

            <div>
              <label htmlFor="mainCause" className="block text-sm font-semibold text-slate-700 mb-2">
                Mission & Main Cause *
              </label>
              <textarea
                id="mainCause"
                name="mainCause"
                required
                rows={4}
                value={formData.mainCause}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Describe your organization's mission, the main cause you support, and the impact you make..."
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="interestedInDonations"
                name="interestedInDonations"
                checked={formData.interestedInDonations}
                onChange={handleInputChange}
                className="mt-1 w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="interestedInDonations" className="text-sm text-slate-700 leading-relaxed">
                I confirm that our organization is legally registered and authorized to receive charitable donations, 
                and I agree to the partnership terms and conditions.
              </label>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting || !formData.interestedInDonations || websiteError !== ''}
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-2xl hover:from-pink-700 hover:to-red-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                  <strong>Questions about partnership?</strong> {t('contact')} our team directly at{' '}
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

export default ForFoundations;