import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, AlertTriangle, Lock, Server, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Security = () => {
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
              <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-800">{t('security')}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-slate-700">{t('securityInfrastructure')}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            {t('buildingSecure')}{' '}
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
              {t('infrastructure')}
            </span>
          </h1>
        </div>

        {/* Warning Notice */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-3xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold text-amber-800 mb-4">{t('importantSecurityNotice')}</h2>
              <p className="text-amber-700 mb-4 leading-relaxed">
                {t('securityNoticeText')}
              </p>
              <p className="text-amber-700 leading-relaxed">
                <strong>{t('recommendation')}:</strong> {t('usePlaceholderInfo')}
              </p>
            </div>
          </div>
        </div>

        {/* Future Security Features */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-8 text-center">{t('plannedSecurity')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('blockchainTechnology')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('blockchainDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('bankLevelSecurity')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('bankLevelSecurityDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('zeroKnowledgeArchitecture')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('zeroKnowledgeDesc')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('multiFactor')}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('multiFactorDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Development Timeline */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-6">{t('securityImplementation')}</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-2">Phase 1</div>
              <h3 className="text-lg font-semibold mb-2">{t('basicEncryption')}</h3>
              <p className="text-slate-300 text-sm">{t('sslTlsEncryption')}</p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">Phase 2</div>
              <h3 className="text-lg font-semibold mb-2">{t('advancedSecurity')}</h3>
              <p className="text-slate-300 text-sm">{t('zeroKnowledgeEndToEnd')}</p>
            </div>
            
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">Phase 3</div>
              <h3 className="text-lg font-semibold mb-2">{t('blockchainIntegration')}</h3>
              <p className="text-slate-300 text-sm">{t('immutableStorage')}</p>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-xl p-4">
            <p className="text-slate-300 text-sm">
              <strong>{t('stayUpdated')}</strong>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Security;