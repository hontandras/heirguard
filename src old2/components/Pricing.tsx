import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, DollarSign, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();

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
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-800">{t('pricing')}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-slate-700">Pricing Information</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            {t('pricingPolicy')}{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {t('inDevelopment')}
            </span>
          </h1>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-slate-800 mb-6">{t('pricingBeingDefined')}</h2>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            {t('demoVersion')}
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">{t('helpUsShape')}</h3>
            <p className="text-blue-700 text-sm leading-relaxed">
              Your feedback is invaluable in helping us create pricing that works for everyone. 
              Please fill out our short feedback survey and we'll notify you once the live version launches.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSekNxqQRSpgUg3zEzQGW_90uE29IAvOnKIKcpD7pUdYK5nReQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              {t('fillFeedbackSurvey')}
            </a>
            
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-2xl border border-slate-300 hover:bg-white hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2 w-5 h-5" />
              {t('contactDirectly')}
            </Link>
          </div>

          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-xl">
            <p className="text-sm text-green-800">
              <strong>{t('earlyAccess')}</strong>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pricing;