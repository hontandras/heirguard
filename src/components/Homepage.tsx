import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText, Users, CheckCircle, ArrowRight, Heart } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

const Homepage = () => {
  const { t, currentLanguage } = useLanguage();
  
  console.log('Homepage: Current language is:', currentLanguage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pointer-events-none">
      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-sm border-b border-slate-200/60 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4 md:py-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-semibold text-slate-800">HeirGuard</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <nav className="hidden md:flex space-x-8">
                <Link to="/pricing" className="text-slate-600 hover:text-slate-800 transition-colors">{t('pricing')}</Link>
                <Link to="/security" className="text-slate-600 hover:text-slate-800 transition-colors">{t('security')}</Link>
                <Link to="/support" className="text-slate-600 hover:text-slate-800 transition-colors">{t('support')}</Link>
                <Link to="/for-foundations" className="text-slate-600 hover:text-slate-800 transition-colors">{t('forFoundations')}</Link>
              </nav>
              
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-8">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-slate-700">{t('bankLevelSecurity')}</span>
              <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
              <span className="text-sm font-medium text-slate-700">{t('legallyCompliant')}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-800 leading-tight mb-6">
              {t('heroTitle')}
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('heroSubtitle')}
              <span className="block mt-2 text-lg">{t('heroDescription')}</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link
                to="/will-assistant"
                className="group pointer-events-auto inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('startCreatingWill')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/for-lawyers"
                className="pointer-events-auto inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 font-semibold rounded-2xl border border-slate-300 hover:bg-white hover:border-slate-400 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t('imALawyer')}
                <Users className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="mb-16">
              <Link
                to="/for-foundations"
                className="pointer-events-auto inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-600 to-red-600 text-white font-medium rounded-xl hover:from-pink-700 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Heart className="mr-2 w-4 h-4" />
                {t('iRepresentFoundation')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white/50 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
              {t('whyChooseTitle')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {t('whyChooseSubtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('bankLevelSecurity')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('bankLevelSecurityDesc')}
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('legallyCompliant')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('legallyCompliantDesc')}
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">{t('aiPoweredGuidance')}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t('aiPoweredGuidanceDesc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 pointer-events-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold">HeirGuard</span>
              </div>
              <p className="text-slate-400">{t('footerDescription')}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('product')}</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/pricing" className="hover:text-white transition-colors">{t('pricing')}</Link></li>
                <li><Link to="/security" className="hover:text-white transition-colors">{t('security')}</Link></li>
                <li><Link to="/will-assistant" className="hover:text-white transition-colors">{t('createWill')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('support')}</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/support" className="hover:text-white transition-colors">{t('helpCenter')}</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">{t('contact')}</Link></li>
                <li><Link to="/legal-resources" className="hover:text-white transition-colors">{t('legalResources')}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">{t('company')}</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link to="/about" className="hover:text-white transition-colors">{t('aboutUs')}</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-white transition-colors">{t('privacyPolicy')}</Link></li>
                <li><Link to="/terms-of-service" className="hover:text-white transition-colors">{t('termsOfService')}</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} HeirGuard by Pertex Holdings. {t('allRightsReserved')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;