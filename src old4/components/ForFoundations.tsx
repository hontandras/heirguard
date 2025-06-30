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

${t('organizationName')}: ${formData.organizationName}
${t('organizationType')}: ${formData.organizationType}
${t('website')}: ${formData.website}
${t('registrationNumber')}: ${formData.registrationNumber}
${t('country')}: ${formData.country}
${t('contact')} Email: ${formData.contactEmail}
${t('missionMainCause')}: ${formData.mainCause}
${t('selectedPlan')}: ${formData.selectedPlan || t('notSpecified')}

${t('applicationSubmittedOn')}: ${new Date().toLocaleString()}
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
            {t('applicationReceivedDesc')}
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
            <span className="text-sm font-medium text-slate-700">{t('legacyGivingProgram')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            {t('partnerWithHeirGuard')}{' '}
            <span className="bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
              {t('legacyGiving')}
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            {t('foundationsHeroDescription')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#partnership-form"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-red-600 text-white font-semibold rounded-2xl hover:from-pink-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Heart className="mr-2 w-5 h-5" />
              {t('applyForPartnership')}
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-2xl border border-slate-300 hover:bg-white hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('howOurPartnershipWorks')}
            </a>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-pink-600 mb-2">{t('totalLegacyDonationsValue')}</div>
            <p className="text-slate-600 text-sm">{t('totalLegacyDonations')}</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">{t('partnerOrganizationsValue')}</div>
            <p className="text-slate-600 text-sm">{t('partnerOrganizations')}</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-green-600 mb-2">{t('willsIncludingDonationsValue')}</div>
            <p className="text-slate-600 text-sm">{t('willsIncludingDonations')}</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">{t('countriesServedValue')}</div>
            <p className="text-slate-600 text-sm">{t('countriesServed')}</p>
          </div>
        </div>

        {/* How It Works Section */}
        <section id="how-it-works" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">{t('howOurPartnershipWorks')}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('foundationsSimpleProcess')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('joinOurNetwork')}</h3>
              <p className="text-slate-600 leading-relaxed">
                Apply to join our network of trusted charitable organizations. We verify all partners to ensure legitimacy and maintain donor trust.
              </p>
            </div>

            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('getListed')}</h3>
              <p className="text-slate-600 leading-relaxed">
                Your organization appears as a donation option for users creating their wills. We highlight your mission and impact to potential donors.
              </p>
            </div>

            <div className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('receiveDonations')}</h3>
              <p className="text-slate-600 leading-relaxed">
                When users include your organization in their wills, you'll receive notifications and eventually the legacy donations when the time comes.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">{t('whyPartnerWithUs')}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('foundationsGrowingNetwork')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Globe className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{t('globalReach')}</h3>
                  <p className="text-slate-600">{t('globalReachDesc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{t('growingMarket')}</h3>
                  <p className="text-slate-600">{t('growingMarketDesc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{t('trustedPlatform')}</h3>
                  <p className="text-slate-600">{t('trustedPlatformDesc')}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{t('meaningfulConnections')}</h3>
                  <p className="text-slate-600">{t('meaningfulConnectionsDesc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{t('qualityAssurance')}</h3>
                  <p className="text-slate-600">{t('qualityAssuranceDesc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <DollarSign className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{t('noUpfrontCosts')}</h3>
                  <p className="text-slate-600">{t('noUpfrontCostsDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">{t('partnershipPricing')}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('transparentPricing')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 text-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('basicListing')}</h3>
              <div className="text-3xl font-bold text-slate-800 mb-2">{t('free')}</div>
              <p className="text-slate-600 mb-6">{t('noUpfrontCosts2')}</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{t('listedAsDonationOption')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{t('basicOrganizationProfile')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{t('processingFeeOnDonations')}</span>
                </li>
              </ul>
              <button 
                onClick={() => handlePricingClick(t('mostPopular'))}
                className="w-full px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
              >
                {t('mostPopular')}
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {t('recommended')}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('featuredPartner')}</h3>
              <div className="text-3xl font-bold text-slate-800 mb-2">€99{t('month')}</div>
              <p className="text-slate-600 mb-6">{t('plusProcessingFee')}</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{t('priorityPlacement')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{t('enhancedProfile')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{t('donationAnalytics')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{t('donorCommunication')}</span>
                </li>
              </ul>
              <button 
                onClick={() => handlePricingClick(t('getFeatured'))}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-colors"
              >
                {t('getFeatured')}
              </button>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 text-center">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('premiumPartner')}</h3>
              <div className="text-3xl font-bold text-slate-800 mb-2">€299{t('month')}</div>
              <p className="text-slate-600 mb-6">{t('plusProcessingFee')}</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{t('topTierPlacement')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{t('customBranding')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{t('advancedAnalytics')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{t('dedicatedAccountManager')}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm">{t('marketingCoPromotion')}</span>
                </li>
              </ul>
              <button 
                onClick={() => handlePricingClick(t('goPremium'))}
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-colors"
              >
                {t('goPremium')}
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
                <p className="text-slate-400 text-sm mt-1">{t('partnerSince')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Application Form */}
        <section id="partnership-form" className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">{t('applyForPartnership')}</h2>
            <p className="text-slate-600">Join our network of trusted charitable organizations and receive legacy donations through our platform.</p>
            {formData.selectedPlan && (
              <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
                <span className="text-sm font-medium">{t('selectedPlan')}: {formData.selectedPlan}</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organizationName" className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('organizationName')} *
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
                  {t('organizationType')} *
                </label>
                <select
                  id="organizationType"
                  name="organizationType"
                  required
                  value={formData.organizationType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">{t('selectType')}</option>
                  <option value="foundation">{t('foundation')}</option>
                  <option value="ngo">{t('ngo')}</option>
                  <option value="charity">{t('charity')}</option>
                  <option value="nonprofit">{t('nonprofitOrganization')}</option>
                  <option value="other">{t('other')}</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('website')} *
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
                  {t('registrationNumber')}
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
                {t('missionMainCause')} *
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
                {t('confirmLegallyRegistered')}
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
                    {t('submittingApplication')}
                  </>
                ) : (
                  <>
                    <Send className="mr-2 w-5 h-5" />
                    {t('submitPartnershipApplication')}
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
                  <strong>{t('questionsAboutPartnership')}</strong> {t('contactOurTeamDirectly')}{' '}
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