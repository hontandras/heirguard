import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Globe, Users, Scale, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LegalResources = () => {
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
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-800">{t('legalResources')}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-4 py-2 mb-6">
            <FileText className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-slate-700">{t('legalInformation')}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
            {t('legalResourcesTitle')}{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t('legalResourcesDesc')}
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-3xl p-8 mb-12">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-amber-800 mb-2">{t('legalDisclaimer2')}</h2>
              <p className="text-amber-700 leading-relaxed">
                {t('notLegalAdviceDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* Legal Resources Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Will Validity by Country */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">{t('willValidityByCountry')}</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('netherlands')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Must be written entirely by hand (holographic) or notarized</li>
                  <li>• Requires two witnesses if not holographic</li>
                  <li>• Forced heirship rules protect spouse and children</li>
                  <li>• Must be in Dutch or officially translated</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('germany')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Holographic wills must be entirely handwritten and signed</li>
                  <li>• Public wills require notarization</li>
                  <li>• Pflichtteil (forced share) protects close relatives</li>
                  <li>• Joint wills allowed for married couples</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('unitedKingdom')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Must be in writing and signed by testator</li>
                  <li>• Requires two witnesses present simultaneously</li>
                  <li>• No forced heirship - full testamentary freedom</li>
                  <li>• Different rules apply in Scotland</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('france')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Holographic wills must be handwritten, dated, and signed</li>
                  <li>• Authentic wills require notary and two witnesses</li>
                  <li>• Réserve héréditaire protects children and spouse</li>
                  <li>• Registration with central registry recommended</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Revoking Previous Wills */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">{t('revokingPreviousWills')}</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('generalPrinciples')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• A new will typically revokes all previous wills automatically</li>
                  <li>• Express revocation clauses provide additional clarity</li>
                  <li>• Physical destruction of a will can constitute revocation</li>
                  <li>• Marriage often revokes existing wills in many jurisdictions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('bestPractices')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Include explicit revocation language in new wills</li>
                  <li>• Destroy physical copies of old wills when possible</li>
                  <li>• Notify executors and beneficiaries of changes</li>
                  <li>• Keep records of will creation and revocation dates</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('commonMistakes')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Failing to include revocation clauses</li>
                  <li>• Assuming verbal revocations are sufficient</li>
                  <li>• Not informing relevant parties of changes</li>
                  <li>• Leaving multiple conflicting wills in existence</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('legalRequirements')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Revocation must meet same formalities as will creation</li>
                  <li>• Some jurisdictions require witness signatures for revocation</li>
                  <li>• Partial revocations may require specific procedures</li>
                  <li>• Codicils can modify without full revocation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Guardianship Laws in Europe */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">{t('guardianshipLaws')}</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('appointmentOfGuardians')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Parents can nominate guardians in their wills</li>
                  <li>• Courts have final authority over guardian appointments</li>
                  <li>• Best interests of the child are paramount</li>
                  <li>• Multiple guardians can be appointed for different responsibilities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Guardian Responsibilities</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Physical care and custody of minor children</li>
                  <li>• Educational and medical decision-making</li>
                  <li>• Financial management of child's assets</li>
                  <li>• Regular reporting to courts in some jurisdictions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('crossBorderConsiderations')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• EU regulations facilitate cross-border recognition</li>
                  <li>• Hague Convention provides international framework</li>
                  <li>• Habitual residence determines applicable law</li>
                  <li>• Local court approval may still be required</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('specialCircumstances')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Children with special needs may require specialized guardians</li>
                  <li>• Temporary guardianship arrangements for emergencies</li>
                  <li>• Financial guardians separate from personal guardians</li>
                  <li>• Age of majority varies by country (16-18 years)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cross-Border Inheritance Guidelines */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800">{t('crossBorderInheritance')}</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('euSuccessionRegulation')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Applies to deaths after August 17, 2015</li>
                  <li>• Law of habitual residence generally applies</li>
                  <li>• Choice of nationality law permitted in wills</li>
                  <li>• European Certificate of Succession available</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('keyConsiderations')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Multiple tax jurisdictions may apply</li>
                  <li>• Double taxation treaties provide relief</li>
                  <li>• Asset location affects applicable procedures</li>
                  <li>• Professional advice essential for complex estates</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('commonChallenges')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Conflicting forced heirship rules</li>
                  <li>• Different probate procedures by country</li>
                  <li>• Currency exchange and valuation issues</li>
                  <li>• Language barriers and translation requirements</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('planningStrategies')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>• Choose applicable law explicitly in will</li>
                  <li>• Consider trust structures for asset protection</li>
                  <li>• Coordinate with tax planning strategies</li>
                  <li>• Regular review as circumstances change</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl font-bold mb-6">{t('needProfessionalAdvice')}</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            {t('professionalAdviceDesc')}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 border border-white/20 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Find Local Attorneys</h3>
              <p className="text-slate-300 text-sm">{t('findLocalAttorneys')}</p>
            </div>
            
            <div className="bg-white/10 border border-white/20 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Legal Aid Services</h3>
              <p className="text-slate-300 text-sm">{t('legalAidServices')}</p>
            </div>
            
            <div className="bg-white/10 border border-white/20 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Online Legal Resources</h3>
              <p className="text-slate-300 text-sm">{t('onlineLegalResources')}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalResources;