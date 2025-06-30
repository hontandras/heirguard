import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Send, Bot, User, CheckCircle, AlertTriangle, Download } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getWillTemplate } from '../utils/willTemplates';

interface Message {
  id: number;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

interface UserData {
  country?: string;
  fullName?: string;
  dateOfBirth?: string;
  maritalStatus?: string;
  spouseName?: string;
  hasChildren?: boolean;
  childrenDetails?: string;
  hasExistingWill?: boolean;
  assets?: string;
  beneficiaries?: string;
  executor?: string;
  guardian?: string;
  donations?: string;
  specialInstructions?: string;
  funeralWishes?: string;
}

interface ConversationState {
  currentTopic: string;
  completedTopics: string[];
  needsClarification: boolean;
  warningIssued: boolean;
  context: Record<string, any>;
}

const WillAssistant = () => {
  const { t, currentLanguage, detectedCountry } = useLanguage();
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: t('welcomeMessage'),
      timestamp: new Date()
    }
  ]);
  
  const [currentInput, setCurrentInput] = useState('');
  const [userData, setUserData] = useState<UserData>({});
  const [conversationState, setConversationState] = useState<ConversationState>({
    currentTopic: 'country',
    completedTopics: [],
    needsClarification: false,
    warningIssued: false,
    context: {}
  });
  const [isComplete, setIsComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [isTyping]);

  // Update initial message when language changes
  useEffect(() => {
    setMessages([{
      id: 1,
      type: 'bot',
      content: t('welcomeMessage'),
      timestamp: new Date()
    }]);
  }, [currentLanguage, t]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (type: 'bot' | 'user', content: string) => {
    const newMessage: Message = {
      id: Date.now(),
      type,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = (callback: () => void, delay = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const getCountrySpecificMessage = (country: string): string => {
    const lowerCountry = country.toLowerCase();
    
    if (lowerCountry.includes('netherlands') || lowerCountry.includes('holland')) {
      return currentLanguage === 'nl' 
        ? "Uitstekend! Ik zal uw testament structureren om te voldoen aan het Nederlandse erfrecht. Nederland heeft specifieke vereisten voor testamentvaliditeit, inclusief getuigenvereisten en legitieme portie regels die bepaalde familieleden beschermen."
        : "Excellent! I will structure your will to comply with Dutch inheritance law (Erfrecht). The Netherlands has specific requirements for will validity, including witness requirements and forced heirship rules that protect certain family members.";
    } else if (lowerCountry.includes('germany')) {
      return currentLanguage === 'de'
        ? "Perfekt! Ich werde sicherstellen, dass Ihr Testament dem deutschen Erbrecht entspricht. Deutschland hat spezifische Regeln über Pflichtteil und formale Anforderungen für Testamente."
        : "Perfect! I will ensure your will complies with German inheritance law (Erbrecht). Germany has specific rules about forced heirship (Pflichtteil) and formal requirements for wills.";
    } else if (lowerCountry.includes('france')) {
      return currentLanguage === 'fr'
        ? "Parfait! Je structurerai votre testament selon le droit français des successions. La France a des règles spécifiques sur la réserve héréditaire et les exigences formelles."
        : "Great! I will structure your will according to French inheritance law (droit des successions). France has specific rules about forced heirship (réserve héréditaire) and formal requirements.";
    } else if (lowerCountry.includes('spain')) {
      return currentLanguage === 'es'
        ? "¡Excelente! Estructuraré su testamento de acuerdo con el derecho sucesorio español. España tiene reglas específicas sobre legítima y requisitos formales."
        : "Excellent! I will structure your will according to Spanish inheritance law. Spain has specific rules about forced heirship (legítima) and formal requirements.";
    } else if (lowerCountry.includes('uk') || lowerCountry.includes('united kingdom') || lowerCountry.includes('england') || lowerCountry.includes('scotland') || lowerCountry.includes('wales')) {
      return "Wonderful! I will ensure your will complies with UK inheritance law. The requirements vary slightly between England & Wales, Scotland, and Northern Ireland, and I'll make sure your will meets the specific legal standards for your jurisdiction.";
    } else if (lowerCountry.includes('usa') || lowerCountry.includes('united states') || lowerCountry.includes('america')) {
      return "Excellent! I will structure your will to comply with US state laws. Since inheritance law varies by state, I'll ensure your will meets the specific requirements for your state, including witness requirements and probate procedures.";
    } else {
      return t('countryConfirmation') + ` ${country}.`;
    }
  };

  const analyzeResponse = (input: string, topic: string): { isValid: boolean; warning?: string; extractedData?: any; contextualMessage?: string } => {
    const lowerInput = input.toLowerCase().trim();
    
    switch (topic) {
      case 'country':
        // Auto-detect if user didn't specify
        if (lowerInput.length < 3 && detectedCountry) {
          const contextualMessage = getCountrySpecificMessage(detectedCountry);
          return { 
            isValid: true, 
            extractedData: { country: detectedCountry },
            contextualMessage
          };
        }
        
        const countries = ['netherlands', 'holland', 'germany', 'belgium', 'france', 'uk', 'united kingdom', 'usa', 'united states', 'canada', 'australia', 'spain', 'italy'];
        const foundCountry = countries.find(country => lowerInput.includes(country));
        if (!foundCountry && lowerInput.length < 3) {
          return { 
            isValid: false, 
            warning: "Please provide a valid country name. This is important for ensuring your will complies with local laws. For example, inheritance laws differ significantly between countries - some have forced heirship rules that protect certain family members, while others allow complete testamentary freedom." 
          };
        }
        
        const finalCountry = foundCountry ? input : (detectedCountry || input);
        const contextualMessage = getCountrySpecificMessage(finalCountry);
        return { 
          isValid: true, 
          extractedData: { country: finalCountry },
          contextualMessage
        };

      case 'personal_info':
        if (!input.includes(',') || input.split(',').length < 2) {
          return { 
            isValid: false, 
            warning: "I need both your full name and date of birth to create a legally valid will. Please provide them separated by a comma. For example: 'John Smith, January 15, 1980'. Your full legal name ensures the will is properly attributed to you, and your date of birth helps verify your identity and legal capacity to make a will." 
          };
        }
        const [name, dob] = input.split(',').map(s => s.trim());
        if (name.split(' ').length < 2) {
          return { 
            isValid: false, 
            warning: "Please provide your complete legal name (first and last name at minimum). This is crucial because the will must clearly identify you as the testator. If your legal name differs from what you commonly use, please use your full legal name as it appears on official documents." 
          };
        }
        return { isValid: true, extractedData: { fullName: name, dateOfBirth: dob } };

      case 'marital_status':
        const maritalStatuses = ['single', 'married', 'divorced', 'widowed', 'separated', 'domestic partnership', 'civil union'];
        const foundStatus = maritalStatuses.find(status => lowerInput.includes(status));
        if (!foundStatus) {
          return { 
            isValid: false, 
            warning: "Your marital status is legally significant for inheritance purposes. Please specify one of the following: single, married, divorced, widowed, separated, or in a domestic partnership/civil union. This affects your spouse's legal rights to your estate and determines whether spousal consent may be required for certain bequests." 
          };
        }
        return { isValid: true, extractedData: { maritalStatus: foundStatus } };

      case 'spouse_info':
        if (input.trim().length < 2) {
          return { 
            isValid: false, 
            warning: "Please provide your spouse/partner's full legal name. This is important because in many jurisdictions, spouses have automatic inheritance rights that must be addressed in your will. Even if you plan to leave everything to your spouse, naming them clearly prevents any legal ambiguity." 
          };
        }
        return { isValid: true, extractedData: { spouseName: input.trim() } };

      case 'children':
        if (lowerInput.includes('yes') || lowerInput.includes('have')) {
          return { isValid: true, extractedData: { hasChildren: true } };
        } else if (lowerInput.includes('no') || lowerInput.includes('none')) {
          return { isValid: true, extractedData: { hasChildren: false } };
        }
        return { 
          isValid: false, 
          warning: "Please answer clearly with 'yes' or 'no' - do you have any children? This includes biological children, adopted children, and stepchildren. This information is crucial because children often have inheritance rights, and if you have minor children, you'll need to appoint guardians for them." 
        };

      case 'existing_will':
        if (lowerInput.includes('yes') || lowerInput.includes('have')) {
          return { 
            isValid: true, 
            extractedData: { hasExistingWill: true },
            warning: "Important legal note: Creating a new will typically revokes all previous wills automatically. However, it's best practice to explicitly state this revocation and to destroy physical copies of old wills to prevent confusion. If you have complex estate planning documents like trusts, those may not be affected by a new will."
          };
        } else if (lowerInput.includes('no') || lowerInput.includes('none')) {
          return { isValid: true, extractedData: { hasExistingWill: false } };
        }
        return { 
          isValid: false, 
          warning: "Please answer with 'yes' or 'no' - do you currently have an existing will or any estate planning documents? This is important because we need to ensure your new will properly revokes any previous versions and doesn't conflict with other estate planning tools you may have in place." 
        };

      default:
        return { isValid: true, extractedData: {} };
    }
  };

  const getNextQuestion = (currentTopic: string, userData: UserData, context: Record<string, any>): { topic: string; question: string } => {
    switch (currentTopic) {
      case 'country':
        return { topic: 'personal_info', question: t('personalInfoQuestion') };

      case 'personal_info':
        return { topic: 'marital_status', question: t('maritalStatusQuestion') };

      case 'marital_status':
        if (userData.maritalStatus === 'married' || userData.maritalStatus === 'domestic partnership' || userData.maritalStatus === 'civil union') {
          return { topic: 'spouse_info', question: t('spouseInfoQuestion') };
        }
        return { topic: 'children', question: t('childrenQuestion') };

      case 'spouse_info':
        return { topic: 'children', question: t('childrenQuestion') };

      case 'children':
        if (userData.hasChildren) {
          return { topic: 'children_details', question: t('childrenDetailsQuestion') };
        }
        return { topic: 'existing_will', question: t('existingWillQuestion') };

      case 'children_details':
        const hasMinors = context.hasMinors || userData.childrenDetails?.toLowerCase().includes('minor') || 
                          userData.childrenDetails?.toLowerCase().includes('under 18') ||
                          userData.childrenDetails?.toLowerCase().includes('years old');
        if (hasMinors) {
          return { topic: 'guardian', question: t('guardianQuestion') };
        }
        return { topic: 'existing_will', question: t('existingWillQuestion') };

      case 'guardian':
        return { topic: 'existing_will', question: t('existingWillQuestion') };

      case 'existing_will':
        return { topic: 'assets', question: t('assetsQuestion') };

      case 'assets':
        return { topic: 'beneficiaries', question: t('beneficiariesQuestion') };

      case 'beneficiaries':
        return { topic: 'executor', question: t('executorQuestion') };

      case 'executor':
        return { topic: 'donations', question: t('donationsQuestion') };

      case 'donations':
        return { topic: 'special_instructions', question: t('specialInstructionsQuestion') };

      case 'special_instructions':
        return { topic: 'review', question: t('reviewQuestion') };

      default:
        return { topic: 'complete', question: t('completeMessage') };
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    // Add user message
    addMessage('user', currentInput);
    
    const userResponse = currentInput;
    setCurrentInput('');

    // Process response with intelligent analysis
    simulateTyping(() => {
      const analysis = analyzeResponse(userResponse, conversationState.currentTopic);
      
      if (!analysis.isValid) {
        // Handle invalid response
        addMessage('bot', analysis.warning || "I need a bit more information to help you properly. Could you please clarify your response?");
        setConversationState(prev => ({ ...prev, needsClarification: true }));
        return;
      }

      // Update user data with extracted information
      const newUserData = { ...userData, ...analysis.extractedData };
      setUserData(newUserData);

      // Store simple response for non-complex topics
      if (!analysis.extractedData || Object.keys(analysis.extractedData).length === 0) {
        const fieldMap: Record<string, string> = {
          'children_details': 'childrenDetails',
          'assets': 'assets',
          'beneficiaries': 'beneficiaries',
          'executor': 'executor',
          'guardian': 'guardian',
          'donations': 'donations',
          'special_instructions': 'specialInstructions'
        };
        
        const field = fieldMap[conversationState.currentTopic];
        if (field) {
          newUserData[field as keyof UserData] = userResponse;
          setUserData(newUserData);
        }
      }

      // Add contextual message if provided (like country-specific reassurance)
      if (analysis.contextualMessage) {
        addMessage('bot', analysis.contextualMessage);
      }

      // Add warning if needed
      if (analysis.warning) {
        setTimeout(() => {
          addMessage('bot', analysis.warning);
        }, analysis.contextualMessage ? 2000 : 0);
      }

      // Determine next question
      const nextQ = getNextQuestion(conversationState.currentTopic, newUserData, conversationState.context);
      
      if (nextQ.topic === 'complete') {
        setIsComplete(true);
        setTimeout(() => {
          addMessage('bot', t('completeMessage'));
        }, analysis.contextualMessage ? 3000 : analysis.warning ? 2000 : 1000);
      } else {
        setTimeout(() => {
          addMessage('bot', nextQ.question);
          setConversationState(prev => ({
            ...prev,
            currentTopic: nextQ.topic,
            completedTopics: [...prev.completedTopics, prev.currentTopic],
            needsClarification: false
          }));
        }, analysis.contextualMessage ? 3000 : analysis.warning ? 2000 : 1000);
      }
    });
  };

  const generateWillDocument = () => {
    const today = new Date().toLocaleDateString('en-GB');
    const template = getWillTemplate(userData.country || detectedCountry || 'default', currentLanguage);
    
    // Replace placeholders in template
    const replacePlaceholders = (text: string): string => {
      return text
        .replace('{executor}', userData.executor || 'a trusted individual')
        .replace('{guardian}', userData.guardian || 'a trusted guardian')
        .replace('{date}', today)
        .replace('{location}', userData.country || detectedCountry || '[Location]')
        .replace('{country}', userData.country || detectedCountry || '[Country]');
    };

    const hasGuardian = userData.hasChildren && userData.guardian;
    const articleNumbers = {
      executor: 2,
      guardianship: hasGuardian ? 3 : 0,
      beneficiaries: hasGuardian ? 4 : 3,
      charitable: hasGuardian ? 5 : 4,
      special: hasGuardian ? 6 : 5,
      governing: hasGuardian ? 7 : 6
    };

    return `${template.title}

${t('declarationTitle')}
${replacePlaceholders(template.legalLanguage.declaration)}

${t('executorTitle')}
${replacePlaceholders(template.legalLanguage.executorClause)}

${hasGuardian ? `${t('guardianshipTitle')}
${replacePlaceholders(template.legalLanguage.guardianClause)}

` : ''}${t('beneficiariesTitle')}
${userData.beneficiaries || 'My estate shall be distributed equally among my named beneficiaries'}

${userData.assets ? `
SPECIFIC BEQUESTS:
${userData.assets}` : ''}

${t('charitableTitle')}
${userData.donations && userData.donations.toLowerCase() !== 'no' ? 
`I wish to make the following charitable donations:
${userData.donations}` : 
'No charitable donations specified.'}

${t('specialInstructionsTitle')}
${userData.specialInstructions || 'No special instructions provided.'}

${userData.funeralWishes ? `
FUNERAL AND BURIAL WISHES:
${userData.funeralWishes}` : ''}

${t('governingLawTitle')}
${replacePlaceholders(template.legalLanguage.governingLaw)}

${replacePlaceholders(template.legalLanguage.witnessClause)}

${t('signatureLine')}:
${userData.fullName || '[Full Name]'}
__________________________  
${t('signatureLine')}

${t('witnessTitle')}:
__________________________  
${t('witnessSignature')}

__________________________  
${t('witnessSignature')}

${t('legalDisclaimer')}`;
  };

  const handleDownloadPDF = () => {
    // Open feedback survey in new tab instead of downloading PDF
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSekNxqQRSpgUg3zEzQGW_90uE29IAvOnKIKcpD7pUdYK5nReQ/viewform', '_blank');
  };

  const getProgressSteps = () => {
    const allTopics = ['country', 'personal_info', 'marital_status', 'children', 'existing_will', 'assets', 'beneficiaries', 'executor', 'donations', 'special_instructions'];
    const currentIndex = allTopics.indexOf(conversationState.currentTopic);
    const completedCount = conversationState.completedTopics.length;
    
    return {
      current: currentIndex + 1,
      total: allTopics.length,
      completed: completedCount,
      percentage: Math.round((completedCount / allTopics.length) * 100)
    };
  };

  const progress = getProgressSteps();

  const DevelopmentWarning = () => (
    <div className="mb-8 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-6">
      <div className="flex items-start space-x-4">
        <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-amber-800 mb-2">
            ⚠️ THIS TOOL IS STILL IN DEVELOPMENT
          </h3>
          <p className="text-amber-700 mb-4 leading-relaxed">
            We're building a secure and AI-powered will creation platform tailored to your needs. 
            Your feedback will help us make it truly useful and safe for everyone.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-slate-800">{t('intelligentAssistant')}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chat Interface */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{t('intelligentAssistant')}</h2>
                    <p className="text-blue-100 text-sm">{t('personalizedGuidance')}</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                          : 'bg-gradient-to-r from-blue-500 to-indigo-500'
                      }`}>
                        {message.type === 'user' ? (
                          <User className="w-4 h-4 text-white" />
                        ) : (
                          <Bot className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <div className={`rounded-2xl px-4 py-3 ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                          : 'bg-slate-100 text-slate-800'
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                        <p className={`text-xs mt-1 ${
                          message.type === 'user' ? 'text-green-100' : 'text-slate-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-slate-100 rounded-2xl px-4 py-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input Form */}
              {!isComplete && (
                <div className="border-t border-slate-200 p-6">
                  <form onSubmit={handleSubmit} className="flex space-x-4">
                    <input
                      ref={inputRef}
                      type="text"
                      value={currentInput}
                      onChange={(e) => setCurrentInput(e.target.value)}
                      placeholder={t('typeResponse')}
                      className="flex-1 px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      disabled={isTyping}
                    />
                    <button
                      type="submit"
                      disabled={!currentInput.trim() || isTyping}
                      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t('send')}</span>
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Progress & Summary */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">{t('progress')}</h3>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-slate-600 mb-2">
                  <span>{t('completion')}</span>
                  <span>{progress.percentage}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress.percentage}%` }}
                  ></div>
                </div>
              </div>

              {/* Current Topic */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-xs font-semibold text-white">•</span>
                  </div>
                  <span className="text-sm font-medium text-blue-800">
                    Current: {conversationState.currentTopic.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                </div>

                {/* Completed Topics */}
                {conversationState.completedTopics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-slate-600">
                      {topic.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* User Data Summary */}
            {Object.keys(userData).length > 0 && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">{t('yourInformation')}</h3>
                <div className="space-y-2 text-sm">
                  {userData.fullName && (
                    <div><span className="font-medium">{t('name')}:</span> {userData.fullName}</div>
                  )}
                  {userData.country && (
                    <div><span className="font-medium">{t('country')}:</span> {userData.country}</div>
                  )}
                  {userData.maritalStatus && (
                    <div><span className="font-medium">{t('status')}:</span> {userData.maritalStatus}</div>
                  )}
                  {userData.hasChildren !== undefined && (
                    <div><span className="font-medium">{t('children')}:</span> {userData.hasChildren ? t('yes') : t('no')}</div>
                  )}
                  {userData.executor && (
                    <div><span className="font-medium">{t('executor')}:</span> {userData.executor}</div>
                  )}
                </div>
              </div>
            )}

            {/* Security Notice */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-green-800 text-sm mb-1">{t('securePrivate')}</h4>
                  <p className="text-green-700 text-xs leading-relaxed">
                    {t('securePrivateDesc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Will Document */}
        {isComplete && (
          <div className="mt-12">
            {/* Development Warning Above Will Draft */}
            <DevelopmentWarning />

            <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{t('willTitle')}</h2>
                <p className="text-slate-300">
                  Structured according to {userData.country || detectedCountry || 'your jurisdiction'}'s legal requirements
                </p>
              </div>
              
              <div className="p-8">
                <div className="bg-white border-2 border-slate-200 rounded-xl p-8 font-mono text-sm leading-relaxed whitespace-pre-line">
                  {generateWillDocument()}
                </div>
                
                {/* Download PDF Button */}
                <div className="text-center mt-8">
                  <button
                    onClick={handleDownloadPDF}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <Download className="mr-2 w-5 h-5" />
                    Finish & Get Your Document
                  </button>
                </div>
                
                <p className="text-center text-sm text-slate-500 mt-4">
                  This is a personalized draft based on your responses and jurisdiction. Final documents require legal review and proper execution.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Feedback Section - Below Will Document */}
        {isComplete && (
          <div className="my-12">
            <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                📝 We'd love your feedback!
              </h2>
              <p className="text-slate-600 mb-6">
                This tool is still in development. Help us improve it by answering a short 2-minute survey.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSekNxqQRSpgUg3zEzQGW_90uE29IAvOnKIKcpD7pUdYK5nReQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Fill Out Short Feedback Form
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WillAssistant;