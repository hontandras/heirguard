import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Globe, FileText, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PrivacyPolicy = () => {
  const { t } = useLanguage();

  useEffect(() => {
    console.log('[i18n] PrivacyPolicy translated');
  }, []);

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
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-800">{t('privacyPolicy')}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">{t('privacyPolicy')}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            {t('privacyPolicyTitle')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {t('privacyPolicy')}
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('privacyPolicyDesc')}
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-8 text-center">
          <p className="text-blue-800 text-sm">
            <strong>{t('lastUpdated')}:</strong> {t('lastUpdatedDate')} • <strong>{t('effectiveDate')}:</strong> {t('effectiveDateValue')}
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl space-y-8">
          
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-600" />
              {t('introduction')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              {t('introductionText')}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {t('introductionText2')}
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-green-600" />
              {t('informationWeCollect')}
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('personalInformation')}</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• {t('personalInfoItem1')}</li>
                  <li>• {t('personalInfoItem2')}</li>
                  <li>• {t('personalInfoItem3')}</li>
                  <li>• {t('personalInfoItem4')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('technicalInformation')}</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• {t('technicalInfoItem1')}</li>
                  <li>• {t('technicalInfoItem2')}</li>
                  <li>• {t('technicalInfoItem3')}</li>
                  <li>• {t('technicalInfoItem4')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('communicationData')}</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• {t('communicationDataItem1')}</li>
                  <li>• {t('communicationDataItem2')}</li>
                  <li>• {t('communicationDataItem3')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-purple-600" />
              {t('howWeUseInfo')}
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('serviceProvision')}</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• {t('serviceProvisionItem1')}</li>
                  <li>• {t('serviceProvisionItem2')}</li>
                  <li>• {t('serviceProvisionItem3')}</li>
                  <li>• {t('serviceProvisionItem4')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('communication')}</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• {t('communicationItem1')}</li>
                  <li>• {t('communicationItem2')}</li>
                  <li>• {t('communicationItem3')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('improvementAnalytics')}</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• {t('improvementAnalyticsItem1')}</li>
                  <li>• {t('improvementAnalyticsItem2')}</li>
                  <li>• {t('improvementAnalyticsItem3')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* GDPR Rights */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Globe className="w-6 h-6 mr-3 text-blue-600" />
              {t('gdprRights')}
            </h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-4">
              <p className="text-blue-800 text-sm leading-relaxed">
                {t('gdprDesc')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('accessPortability')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• <strong>{t('rightToAccessTitle')}:</strong> {t('rightToAccess')}</li>
                  <li>• <strong>{t('dataPortabilityTitle')}:</strong> {t('dataPortability')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('controlCorrection')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• <strong>{t('rightToRectificationTitle')}:</strong> {t('rightToRectification')}</li>
                  <li>• <strong>{t('rightToErasureTitle')}:</strong> {t('rightToErasure')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('processingControl')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• <strong>{t('rightToRestrictTitle')}:</strong> {t('rightToRestrict')}</li>
                  <li>• <strong>{t('rightToObjectTitle')}:</strong> {t('rightToObject')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('consentManagement')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• <strong>{t('withdrawConsentTitle')}:</strong> {t('withdrawConsent')}</li>
                  <li>• <strong>{t('complaintRightsTitle')}:</strong> {t('complaintRights')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-green-600" />
              {t('dataSecurityProtection')}
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('encryptionStorageTitle')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('encryptionStorage')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('accessControlsTitle')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('accessControls')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('infrastructureSecurityTitle')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('infrastructureSecurity')}
                </p>
              </div>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{t('dataRetention')}</h2>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('willDocumentsTitle')}</h3>
                  <p className="text-slate-600 text-sm">{t('willDocuments')}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('accountDataTitle')}</h3>
                  <p className="text-slate-600 text-sm">{t('accountData')}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('analyticsDataTitle')}</h3>
                  <p className="text-slate-600 text-sm">{t('analyticsData')}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('supportRecordsTitle')}</h3>
                  <p className="text-slate-600 text-sm">{t('supportRecords')}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Third-Party Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{t('thirdPartySharing')}</h2>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">{t('weNeverSell')}</h3>
              <p className="text-green-700 text-sm leading-relaxed mb-4">
                {t('limitedSharing')}
              </p>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-green-800 text-sm">{t('limitedSharingIncludes')}:</h4>
                  <ul className="text-green-700 text-sm space-y-1 ml-4">
                    <li>• {t('limitedSharingItem1')}</li>
                    <li>• {t('limitedSharingItem2')}</li>
                    <li>• {t('limitedSharingItem3')}</li>
                    <li>• {t('limitedSharingItem4')}</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{t('contactDataProtection')}</h2>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('privacyOfficer')}</h3>
                  <p className="text-slate-600 text-sm mb-2">{t('privacyOfficerDesc')}:</p>
                  <a href="mailto:privacy@heirguard.com" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    privacy@heirguard.com
                  </a>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('dataProtectionOfficer')}</h3>
                  <p className="text-slate-600 text-sm mb-2">{t('gdprRequests')}:</p>
                  <a href="mailto:dpo@heirguard.com" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    dpo@heirguard.com
                  </a>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-300">
                <p className="text-slate-600 text-sm">
                  <strong>{t('responseTime')}:</strong> {t('responseTimeDesc')}
                </p>
              </div>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">{t('changesToPolicy')}</h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    {t('changesToPolicyDesc')}
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

export default PrivacyPolicy;