import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, Users, Building, CheckCircle, Mail, Phone, FileText, Award, TrendingUp, Shield, DollarSign, Star, Send, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ForLawyers = () => {
  const { t } = useLanguage();

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
    document.getElementById('partnership-application')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Legal Partnership Application - ${formData.fullName}`);
    const body = encodeURIComponent(`
Legal Partnership Application

${t('fullName')}: ${formData.fullName}
${t('lawFirmName')}: ${formData.firmName}
${t('emailAddress')}: ${formData.email}
${t('phoneNumber')}: ${formData.phone}
${t('barNumber')}: ${formData.barNumber}
${t('jurisdictions')}: ${formData.jurisdiction}
${t('yearsOfExperience')}: ${formData.yearsExperience}
${t('practiceAreas')}: ${formData.practiceAreas}
${t('monthlyEstateClients')}: ${formData.clientVolume}
${t('preferredPartnershipType')}: ${formData.partnershipType}
${t('selectedPlan')}: ${formData.selectedPlan || t('notSpecified')}

${t('additionalInformation')}:
${formData.message}

${t('applicationSubmittedOn')} ${new Date().toLocaleString()}
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
          <h1 className="text-3xl font-bold text-slate-800 mb-4">{t('applicationReceived')}</h1>
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
            <span className="text-sm font-medium text-slate-700">{t('legalPartnershipProgram')}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
            {t('transformYourPractice')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('digitalInnovation')}
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            {t('lawyersHeroDescription')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#partnership-application"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Scale className="mr-2 w-5 h-5" />
              {t('applyForLegalPartnership')}
            </a>
            <a
              href="#partnership-options"
              className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-2xl border border-slate-300 hover:bg-white hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('partnershipOptions')}
            </a>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-blue-600 mb-2">{t('legalPartnersCount')}</div>
            <p className="text-slate-600 text-sm">{t('legalPartners')}</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-green-600 mb-2">{t('averageEfficiencyIncreaseValue')}</div>
            <p className="text-slate-600 text-sm">{t('averageEfficiencyIncrease')}</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-purple-600 mb-2">{t('additionalRevenueGeneratedValue')}</div>
            <p className="text-slate-600 text-sm">{t('additionalRevenueGenerated')}</p>
          </div>
          <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
            <div className="text-3xl font-bold text-pink-600 mb-2">{t('partnerSatisfactionRateValue')}</div>
            <p className="text-slate-600 text-sm">{t('partnerSatisfactionRate')}</p>
          </div>
        </div>

        {/* Partnership Options */}
        <section id="partnership-options" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">{t('partnershipOptions')}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('chooseBestFit')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* White-Label Solution */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <Building className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('whiteLabelSolution')}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t('seamlessIntegration')}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{t('customBrandingWithLogo')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{t('clientManagementDashboard')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{t('stateSpecificCompliance')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{t('professionalDocumentReview')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{t('revenueSharing')}</span>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                  <strong>{t('bestFor')}</strong> {t('establishedFirms')}
                </p>
              </div>
            </div>

            {/* Referral Program */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('referralProgram')}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t('referClients')}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{t('commissionOnReferrals')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{t('referralTracking')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{t('clientProgressNotifications')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{t('marketingMaterials')}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-700">{t('monthlyCommissions')}</span>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <p className="text-sm text-green-800">
                  <strong>{t('bestFor')}</strong> {t('soloSmallFirms')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">{t('whyPartnerWithHeirGuard')}</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('modernizingEstatePlanning')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{t('increasePracticeEfficiency')}</h3>
                  <p className="text-slate-600">{t('increasePracticeEfficiencyDesc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{t('generateAdditionalRevenue')}</h3>
                  <p className="text-slate-600">{t('generateAdditionalRevenueDesc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{t('maintainProfessionalStandards')}</h3>
                  <p className="text-slate-600">{t('maintainProfessionalStandardsDesc')}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{t('enhanceClientExperience')}</h3>
                  <p className="text-slate-600">{t('enhanceClientExperienceDesc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <FileText className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{t('continuingEducation')}</h3>
                  <p className="text-slate-600">{t('continuingEducationDesc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Briefcase className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2">{t('practiceGrowthSupport')}</h3>
                  <p className="text-slate-600">{t('practiceGrowthSupportDesc')}</p>
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
                <p className="text-slate-400 text-sm mt-1">Licensed in California, Nevada, Arizona • {t('partnerSince')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Application Form */}
        <section id="partnership-application" className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">{t('applyForLegalPartnership')}</h2>
            <p className="text-slate-600">{t('transformYourPracticeDesc')}</p>
            {formData.selectedPlan && (
              <div className="mt-4 inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-lg">
                <span className="text-sm font-medium">{t('selectedPlan')}: {formData.selectedPlan}</span>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('fullName')} *
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
                  {t('lawFirmName')} *
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
                  {t('emailAddress')} *
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
                  {t('phoneNumber')} *
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
                  {t('barNumber')} *
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
                  {t('jurisdictions')} *
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
                  {t('yearsOfExperience')} *
                </label>
                <select
                  id="yearsExperience"
                  name="yearsExperience"
                  required
                  value={formData.yearsExperience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">{t('selectExperience')}</option>
                  <option value="1-3">{t('years1to3')}</option>
                  <option value="4-7">{t('years4to7')}</option>
                  <option value="8-15">{t('years8to15')}</option>
                  <option value="15+">{t('years15plus')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="clientVolume" className="block text-sm font-semibold text-slate-700 mb-2">
                  {t('monthlyEstateClients')}
                </label>
                <select
                  id="clientVolume"
                  name="clientVolume"
                  value={formData.clientVolume}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                >
                  <option value="">{t('selectVolume')}</option>
                  <option value="1-5">{t('clients1to5')}</option>
                  <option value="6-15">{t('clients6to15')}</option>
                  <option value="16-30">{t('clients16to30')}</option>
                  <option value="30+">{t('clients30plus')}</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="practiceAreas" className="block text-sm font-semibold text-slate-700 mb-2">
                {t('practiceAreas')} *
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
                {t('preferredPartnershipType')} *
              </label>
              <select
                id="partnershipType"
                name="partnershipType"
                required
                value={formData.partnershipType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">{t('selectPartnershipType')}</option>
                <option value="white-label">{t('whiteLabelSolutionOption')}</option>
                <option value="referral">{t('referralProgramOption')}</option>
                <option value="both">{t('interestedInBoth')}</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                {t('additionalInformation')}
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
                  <strong>{t('barAdmissionRequired')}:</strong> {t('barAdmissionRequiredDesc')}{' '}
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