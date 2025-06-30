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
              {t('resources')}
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
                  <li>{t('netherlandsWillRequirements')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('germany')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>{t('germanyWillRequirements')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('unitedKingdom')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>{t('ukWillRequirements')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('france')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>{t('franceWillRequirements')}</li>
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
                  <li>{t('generalRevocationPrinciples')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('bestPractices')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>{t('revocationBestPractices')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('commonMistakes')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>{t('revocationCommonMistakes')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('legalRequirements')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>{t('revocationLegalRequirements')}</li>
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
                  <li>{t('guardianAppointment')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">Guardian Responsibilities</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>{t('guardianResponsibilities')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('crossBorderConsiderations')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>{t('crossBorderGuardianship')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('specialCircumstances')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>{t('specialGuardianshipCircumstances')}</li>
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
                  <li>{t('euSuccessionRegulationDesc')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('keyConsiderations')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>{t('inheritanceKeyConsiderations')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('commonChallenges')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>{t('inheritanceCommonChallenges')}</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{t('planningStrategies')}</h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li>{t('inheritancePlanningStrategies')}</li>
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