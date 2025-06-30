import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, AlertTriangle, Shield, Scale, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const TermsOfService = () => {
  const { t } = useLanguage();

  useEffect(() => {
    console.log('[i18n] TermsOfService translated');
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
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-800">{t('termsOfService')}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6">
            <Scale className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-slate-700">{t('termsOfService')}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            {t('termsOfServiceTitle')}{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              {t('termsOfService')}
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('termsDesc')}
          </p>
        </div>

        {/* Last Updated */}
        <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 mb-8 text-center">
          <p className="text-purple-800 text-sm">
            <strong>{t('lastUpdated')}:</strong> {t('lastUpdatedDate')} • <strong>{t('effectiveDate')}:</strong> {t('effectiveDateValue')}
          </p>
        </div>

        {/* Terms Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl space-y-8">
          
          {/* Acceptance of Terms */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-purple-600" />
              {t('acceptanceOfTerms')}
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              {t('acceptanceText')}
            </p>
            <p className="text-slate-600 leading-relaxed">
              {t('acceptanceText2')}
            </p>
          </section>

          {/* Service Description */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-3 text-blue-600" />
              {t('serviceDescription')}
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('whatWeProvide')}</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• {t('whatWeProvideItem1')}</li>
                  <li>• {t('whatWeProvideItem2')}</li>
                  <li>• {t('whatWeProvideItem3')}</li>
                  <li>• {t('whatWeProvideItem4')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('developmentStatus')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('developmentStatusDesc')}
                </p>
              </div>
            </div>
          </section>

          {/* Service Disclaimer */}
          <section>
            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-amber-800 mb-3">{t('importantDisclaimer')}</h2>
                  
                  <div className="space-y-3 text-amber-700 text-sm">
                    <div>
                      <h3 className="font-semibold mb-1">{t('notLegalAdvice')}</h3>
                      <p>
                        {t('notLegalAdviceDesc')}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-1">{t('professionalReviewRequired')}</h3>
                      <p>
                        {t('professionalReviewRequiredDesc')}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-1">{t('jurisdictionCompliance')}</h3>
                      <p>
                        {t('jurisdictionComplianceDesc')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Users className="w-6 h-6 mr-3 text-green-600" />
              {t('userResponsibilities')}
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('accountSecurity')}</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• {t('accountSecurityItem1')}</li>
                  <li>• {t('accountSecurityItem2')}</li>
                  <li>• {t('accountSecurityItem3')}</li>
                  <li>• {t('accountSecurityItem4')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('accurateInformation')}</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• {t('accurateInformationItem1')}</li>
                  <li>• {t('accurateInformationItem2')}</li>
                  <li>• {t('accurateInformationItem3')}</li>
                  <li>• {t('accurateInformationItem4')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('prohibitedUses')}</h3>
                <ul className="text-slate-600 text-sm space-y-1 ml-4">
                  <li>• {t('prohibitedUsesItem1')}</li>
                  <li>• {t('prohibitedUsesItem2')}</li>
                  <li>• {t('prohibitedUsesItem3')}</li>
                  <li>• {t('prohibitedUsesItem4')}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Liability Limitations */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-red-600" />
              {t('liabilityLimitations')}
            </h2>
            
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="space-y-4 text-red-700 text-sm">
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">{t('serviceLimitations')}</h3>
                  <p className="leading-relaxed">
                    {t('serviceLimitationsDesc')}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">{t('limitationOfLiability')}</h3>
                  <p className="leading-relaxed">
                    {t('limitationOfLiabilityDesc')}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">{t('maximumLiability')}</h3>
                  <p className="leading-relaxed">
                    {t('maximumLiabilityDesc')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-blue-600" />
              {t('dataProtectionPrivacy')}
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('dataCollectionUse')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('dataCollectionUseDesc')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('securityMeasures')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('securityMeasuresDesc')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('dataRetention')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('dataRetentionDesc')}
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{t('intellectualProperty')}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('ourRights')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('ourRightsDesc')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('yourContent')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('yourContentDesc')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('generatedDocuments')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('generatedDocumentsDesc')}
                </p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{t('termination')}</h2>
            
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('byYou')}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t('byYouDesc')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('byUs')}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t('byUsDesc')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('effectOfTermination')}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {t('effectOfTerminationDesc')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{t('governingLawDisputes')}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('applicableLaw')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('applicableLawDesc')}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{t('disputeResolution')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('disputeResolutionDesc')}
                </p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-slate-800 mb-4">{t('contactInformation')}</h2>
            
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">{t('legalQuestions2')}</h3>
                  <p className="text-blue-700 text-sm">
                    {t('legalQuestionsDesc')}: 
                    <a href="mailto:legal@heirguard.com" className="ml-1 underline hover:no-underline">
                      legal@heirguard.com
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-blue-800 mb-1">{t('generalSupport')}</h3>
                  <p className="text-blue-700 text-sm">
                    {t('generalSupportDesc')}: 
                    <a href="mailto:hont@pertexholdings.com" className="ml-1 underline hover:no-underline">
                      hont@pertexholdings.com
                    </a>
                  </p>
                </div>
                
                <div className="pt-3 border-t border-blue-300">
                  <p className="text-blue-700 text-sm">
                    <strong>HeirGuard</strong> {t('heirGuardOperated')}<br />
                    {t('registeredInNetherlands')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Changes to Terms */}
          <section>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">{t('changesToTerms')}</h3>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    {t('changesToTermsDesc')}
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

export default TermsOfService;