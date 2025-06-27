export interface Translation {
  // Navigation
  backToHome: string;
  features: string;
  security: string;
  forFoundations: string;
  forLawyers: string;
  contact: string;
  pricing: string;
  support: string;
  
  // Homepage
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  startCreatingWill: string;
  imALawyer: string;
  iRepresentFoundation: string;
  whyChooseTitle: string;
  whyChooseSubtitle: string;
  bankLevelSecurity: string;
  bankLevelSecurityDesc: string;
  legallyCompliant: string;
  legallyCompliantDesc: string;
  aiPoweredGuidance: string;
  aiPoweredGuidanceDesc: string;
  
  // Footer
  footerDescription: string;
  product: string;
  createWill: string;
  helpCenter: string;
  legalResources: string;
  company: string;
  aboutUs: string;
  privacyPolicy: string;
  termsOfService: string;
  allRightsReserved: string;
  
  // Will Assistant
  intelligentAssistant: string;
  personalizedGuidance: string;
  securePrivate: string;
  securePrivateDesc: string;
  progress: string;
  completion: string;
  yourInformation: string;
  typeResponse: string;
  send: string;
  
  // Will Assistant Questions
  welcomeMessage: string;
  personalInfoQuestion: string;
  maritalStatusQuestion: string;
  spouseInfoQuestion: string;
  childrenQuestion: string;
  childrenDetailsQuestion: string;
  guardianQuestion: string;
  existingWillQuestion: string;
  assetsQuestion: string;
  beneficiariesQuestion: string;
  executorQuestion: string;
  donationsQuestion: string;
  specialInstructionsQuestion: string;
  reviewQuestion: string;
  completeMessage: string;
  
  // Will Assistant Responses
  countryConfirmation: string;
  personalInfoConfirmation: string;
  maritalStatusConfirmation: string;
  childrenConfirmation: string;
  existingWillWarning: string;
  
  // Will Document
  willTitle: string;
  declarationTitle: string;
  executorTitle: string;
  guardianshipTitle: string;
  beneficiariesTitle: string;
  charitableTitle: string;
  specialInstructionsTitle: string;
  governingLawTitle: string;
  witnessTitle: string;
  signatureLine: string;
  witnessSignature: string;
  legalDisclaimer: string;
  
  // Common
  name: string;
  country: string;
  status: string;
  children: string;
  executor: string;
  yes: string;
  no: string;
  loading: string;
  error: string;
  success: string;
  
  // Forms
  organizationName: string;
  website: string;
  email: string;
  phone: string;
  message: string;
  submit: string;
  required: string;
  
  // Legal
  legalAdviceDisclaimer: string;
  professionalReviewRequired: string;
  jurisdictionCompliance: string;
}

export const translations: Record<string, Translation> = {
  en: {
    // Navigation
    backToHome: "Back to Home",
    features: "Features",
    security: "Security",
    forFoundations: "For Foundations",
    forLawyers: "For Lawyers",
    contact: "Contact",
    pricing: "Pricing",
    support: "Support",
    
    // Homepage
    heroTitle: "Create Your Will – Securely, Simply, Digitally",
    heroSubtitle: "AI-powered assistant for quick and private will creation.",
    heroDescription: "Protect your family's future in minutes, not months.",
    startCreatingWill: "Start Creating My Will",
    imALawyer: "I'm a Lawyer or Charity",
    iRepresentFoundation: "I'm a Foundation/NGO",
    whyChooseTitle: "Why Choose HeirGuard?",
    whyChooseSubtitle: "Experience the future of estate planning with our secure, intelligent platform",
    bankLevelSecurity: "Bank-Level Security",
    bankLevelSecurityDesc: "Your sensitive information is protected with 256-bit encryption and zero-knowledge architecture.",
    legallyCompliant: "Legally Compliant",
    legallyCompliantDesc: "All documents are reviewed by legal professionals and comply with jurisdiction-specific requirements.",
    aiPoweredGuidance: "AI-Powered Guidance",
    aiPoweredGuidanceDesc: "Our intelligent assistant guides you through every step, ensuring nothing important is missed.",
    
    // Footer
    footerDescription: "Secure, simple, and legally compliant will creation for everyone.",
    product: "Product",
    createWill: "Create Will",
    helpCenter: "Help Center",
    legalResources: "Legal Resources",
    company: "Company",
    aboutUs: "About Us",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    allRightsReserved: "All rights reserved.",
    
    // Will Assistant
    intelligentAssistant: "Intelligent Will Assistant",
    personalizedGuidance: "Personalized guidance for your will creation",
    securePrivate: "Secure & Private",
    securePrivateDesc: "All information is encrypted and stored securely. Your data remains completely private throughout the process.",
    progress: "Progress",
    completion: "Completion",
    yourInformation: "Your Information",
    typeResponse: "Type your response...",
    send: "Send",
    
    // Will Assistant Questions
    welcomeMessage: "Hello! I'm your Digital Will Assistant, and I'm here to help you create a comprehensive and legally sound will. I'll guide you through this important process step by step, asking questions tailored to your specific situation. Let's begin with the basics - which country do you currently reside in? This will help me ensure your will complies with local laws.",
    personalInfoQuestion: "Thank you. Now I need your personal details. Please provide your full name and date of birth, separated by a comma. For example: 'Sarah Johnson, March 10, 1985'",
    maritalStatusQuestion: "What is your current marital status? Please specify if you are single, married, divorced, widowed, separated, or in a domestic partnership.",
    spouseInfoQuestion: "Since you're married/in a partnership, what is your spouse/partner's full name? This is important for legal clarity in your will.",
    childrenQuestion: "Do you have any children (including stepchildren or adopted children)?",
    childrenDetailsQuestion: "Please provide details about your children: their names, ages, and any special circumstances I should know about (such as disabilities, special needs, or if any are minors).",
    guardianQuestion: "Since you have minor children, it's crucial to name a guardian. Who would you like to appoint as guardian for your minor children if something happens to you?",
    existingWillQuestion: "Do you currently have an existing will or any other estate planning documents?",
    assetsQuestion: "Now let's discuss your assets. Please describe your main assets, such as real estate, bank accounts, investments, vehicles, valuable personal property, or business interests. Be as specific as you can.",
    beneficiariesQuestion: "Who would you like to name as beneficiaries of your estate? Please list their names, their relationship to you, and if you have preferences for how your assets should be distributed among them.",
    executorQuestion: "Who would you like to appoint as the executor of your will? This person will be responsible for carrying out your wishes and managing your estate. Choose someone trustworthy and capable.",
    donationsQuestion: "Would you like to include any charitable donations in your will? If yes, please specify the organizations and amounts or percentages. If not, just say 'no'.",
    specialInstructionsQuestion: "Are there any special instructions, wishes, or conditions you'd like to include? This could cover digital assets, specific bequests, funeral wishes, or any other important matters.",
    reviewQuestion: "Thank you for providing all that information. Let me review what we've covered and prepare your will draft. Is there anything else you'd like to add or modify before I generate your personalized will document?",
    completeMessage: "Perfect! I have all the information needed to create your personalized will. Let me generate your comprehensive Last Will and Testament now.",
    
    // Will Assistant Responses
    countryConfirmation: "Excellent! I will structure your will to comply with the inheritance laws of your country.",
    personalInfoConfirmation: "Thank you for providing your personal information.",
    maritalStatusConfirmation: "I've noted your marital status.",
    childrenConfirmation: "Thank you for the information about your children.",
    existingWillWarning: "Important: Creating a new will typically revokes any previous wills. We'll make sure to include proper revocation language.",
    
    // Will Document
    willTitle: "LAST WILL AND TESTAMENT",
    declarationTitle: "ARTICLE 1 – DECLARATION OF INTENT",
    executorTitle: "ARTICLE 2 – EXECUTOR",
    guardianshipTitle: "ARTICLE 3 – GUARDIANSHIP",
    beneficiariesTitle: "ARTICLE 4 – BENEFICIARIES AND DISTRIBUTION",
    charitableTitle: "ARTICLE 5 – CHARITABLE DONATIONS",
    specialInstructionsTitle: "ARTICLE 6 – SPECIAL INSTRUCTIONS",
    governingLawTitle: "ARTICLE 7 – GOVERNING LAW",
    witnessTitle: "WITNESSES",
    signatureLine: "(Signature line)",
    witnessSignature: "(Name & Signature)",
    legalDisclaimer: "NOTE: This is a digitally generated draft provided by HeirGuard. This document has been created based on your specific circumstances and responses, with consideration for the legal requirements in your jurisdiction. Please consult a qualified legal advisor to review, finalize, and properly execute this Will according to local legal requirements.",
    
    // Common
    name: "Name",
    country: "Country",
    status: "Status",
    children: "Children",
    executor: "Executor",
    yes: "Yes",
    no: "No",
    loading: "Loading...",
    error: "Error",
    success: "Success",
    
    // Forms
    organizationName: "Organization Name",
    website: "Website",
    email: "Email",
    phone: "Phone",
    message: "Message",
    submit: "Submit",
    required: "Required",
    
    // Legal
    legalAdviceDisclaimer: "This service provides technology tools but does not provide legal advice.",
    professionalReviewRequired: "All documents should be reviewed by qualified legal professionals before execution.",
    jurisdictionCompliance: "Users must verify compliance with local laws and requirements."
  },
  
  nl: {
    // Navigation
    backToHome: "Terug naar Home",
    features: "Functies",
    security: "Beveiliging",
    forFoundations: "Voor Stichtingen",
    forLawyers: "Voor Advocaten",
    contact: "Contact",
    pricing: "Prijzen",
    support: "Ondersteuning",
    
    // Homepage
    heroTitle: "Maak Uw Testament – Veilig, Eenvoudig, Digitaal",
    heroSubtitle: "AI-gestuurde assistent voor snelle en privé testament creatie.",
    heroDescription: "Bescherm de toekomst van uw familie in minuten, niet maanden.",
    startCreatingWill: "Begin Met Mijn Testament",
    imALawyer: "Ik ben Advocaat of Liefdadigheid",
    iRepresentFoundation: "Ik ben een Stichting/NGO",
    whyChooseTitle: "Waarom Kiezen voor HeirGuard?",
    whyChooseSubtitle: "Ervaar de toekomst van erfplanning met ons veilige, intelligente platform",
    bankLevelSecurity: "Bank-niveau Beveiliging",
    bankLevelSecurityDesc: "Uw gevoelige informatie wordt beschermd met 256-bit encryptie en zero-knowledge architectuur.",
    legallyCompliant: "Juridisch Conform",
    legallyCompliantDesc: "Alle documenten worden beoordeeld door juridische professionals en voldoen aan jurisdictie-specifieke vereisten.",
    aiPoweredGuidance: "AI-gestuurde Begeleiding",
    aiPoweredGuidanceDesc: "Onze intelligente assistent begeleidt u door elke stap, zodat niets belangrijks wordt gemist.",
    
    // Footer
    footerDescription: "Veilige, eenvoudige en juridisch conforme testament creatie voor iedereen.",
    product: "Product",
    createWill: "Testament Maken",
    helpCenter: "Helpcentrum",
    legalResources: "Juridische Bronnen",
    company: "Bedrijf",
    aboutUs: "Over Ons",
    privacyPolicy: "Privacybeleid",
    termsOfService: "Servicevoorwaarden",
    allRightsReserved: "Alle rechten voorbehouden.",
    
    // Will Assistant
    intelligentAssistant: "Intelligente Testament Assistent",
    personalizedGuidance: "Gepersonaliseerde begeleiding voor uw testament creatie",
    securePrivate: "Veilig & Privé",
    securePrivateDesc: "Alle informatie wordt versleuteld en veilig opgeslagen. Uw gegevens blijven volledig privé tijdens het hele proces.",
    progress: "Voortgang",
    completion: "Voltooiing",
    yourInformation: "Uw Informatie",
    typeResponse: "Typ uw antwoord...",
    send: "Versturen",
    
    // Will Assistant Questions
    welcomeMessage: "Hallo! Ik ben uw Digitale Testament Assistent en ik ben hier om u te helpen een uitgebreid en juridisch geldig testament te maken. Ik zal u stap voor stap door dit belangrijke proces begeleiden, met vragen die zijn afgestemd op uw specifieke situatie. Laten we beginnen met de basis - in welk land woont u momenteel? Dit helpt mij ervoor te zorgen dat uw testament voldoet aan de lokale wetten.",
    personalInfoQuestion: "Dank je. Nu heb ik uw persoonlijke gegevens nodig. Geef uw volledige naam en geboortedatum, gescheiden door een komma. Bijvoorbeeld: 'Sarah Johnson, 10 maart 1985'",
    maritalStatusQuestion: "Wat is uw huidige burgerlijke staat? Geef aan of u alleenstaand, getrouwd, gescheiden, weduwe/weduwnaar, gescheiden of in een geregistreerd partnerschap bent.",
    spouseInfoQuestion: "Omdat u getrouwd bent/in een partnerschap, wat is de volledige naam van uw echtgenoot/partner? Dit is belangrijk voor juridische duidelijkheid in uw testament.",
    childrenQuestion: "Heeft u kinderen (inclusief stiefkinderen of geadopteerde kinderen)?",
    childrenDetailsQuestion: "Geef details over uw kinderen: hun namen, leeftijden en eventuele bijzondere omstandigheden die ik moet weten (zoals handicaps, speciale behoeften, of als er minderjarigen zijn).",
    guardianQuestion: "Omdat u minderjarige kinderen heeft, is het cruciaal om een voogd te benoemen. Wie wilt u benoemen als voogd voor uw minderjarige kinderen als u iets overkomt?",
    existingWillQuestion: "Heeft u momenteel een bestaand testament of andere estate planning documenten?",
    assetsQuestion: "Laten we nu uw bezittingen bespreken. Beschrijf uw belangrijkste bezittingen, zoals onroerend goed, bankrekeningen, investeringen, voertuigen, waardevolle persoonlijke eigendommen of zakelijke belangen. Wees zo specifiek mogelijk.",
    beneficiariesQuestion: "Wie wilt u benoemen als begunstigden van uw nalatenschap? Vermeld hun namen, hun relatie tot u, en als u voorkeuren heeft voor hoe uw bezittingen onder hen verdeeld moeten worden.",
    executorQuestion: "Wie wilt u benoemen als executeur van uw testament? Deze persoon zal verantwoordelijk zijn voor het uitvoeren van uw wensen en het beheren van uw nalatenschap. Kies iemand betrouwbaar en bekwaam.",
    donationsQuestion: "Wilt u liefdadige donaties opnemen in uw testament? Zo ja, specificeer de organisaties en bedragen of percentages. Zo nee, zeg gewoon 'nee'.",
    specialInstructionsQuestion: "Zijn er speciale instructies, wensen of voorwaarden die u wilt opnemen? Dit kan digitale bezittingen, specifieke legaten, begrafeniswensen of andere belangrijke zaken omvatten.",
    reviewQuestion: "Dank u voor het verstrekken van al die informatie. Laat mij bekijken wat we hebben besproken en uw testament concept voorbereiden. Is er nog iets dat u wilt toevoegen of wijzigen voordat ik uw gepersonaliseerde testament document genereer?",
    completeMessage: "Perfect! Ik heb alle informatie die nodig is om uw gepersonaliseerde testament te maken. Laat mij nu uw uitgebreide Laatste Wil en Testament genereren.",
    
    // Will Assistant Responses
    countryConfirmation: "Uitstekend! Ik zal uw testament structureren om te voldoen aan de erfwetten van uw land.",
    personalInfoConfirmation: "Dank u voor het verstrekken van uw persoonlijke informatie.",
    maritalStatusConfirmation: "Ik heb uw burgerlijke staat genoteerd.",
    childrenConfirmation: "Dank u voor de informatie over uw kinderen.",
    existingWillWarning: "Belangrijk: Het maken van een nieuw testament herroept doorgaans alle eerdere testamenten. We zorgen ervoor dat we de juiste herroepingstaal opnemen.",
    
    // Will Document
    willTitle: "TESTAMENT (LAATSTE WIL)",
    declarationTitle: "ARTIKEL 1 – VERKLARING VAN INTENTIE",
    executorTitle: "ARTIKEL 2 – EXECUTEUR",
    guardianshipTitle: "ARTIKEL 3 – VOOGDIJ",
    beneficiariesTitle: "ARTIKEL 4 – BEGUNSTIGDEN EN VERDELING",
    charitableTitle: "ARTIKEL 5 – LIEFDADIGE DONATIES",
    specialInstructionsTitle: "ARTIKEL 6 – BIJZONDERE INSTRUCTIES",
    governingLawTitle: "ARTIKEL 7 – TOEPASSELIJK RECHT",
    witnessTitle: "GETUIGEN",
    signatureLine: "(Handtekening lijn)",
    witnessSignature: "(Naam & Handtekening)",
    legalDisclaimer: "OPMERKING: Dit is een digitaal gegenereerd concept verstrekt door HeirGuard. Dit document is gemaakt op basis van uw specifieke omstandigheden en antwoorden, met inachtneming van de wettelijke vereisten in uw jurisdictie. Raadpleeg een gekwalificeerde juridische adviseur om dit testament te beoordelen, af te ronden en correct uit te voeren volgens lokale wettelijke vereisten.",
    
    // Common
    name: "Naam",
    country: "Land",
    status: "Status",
    children: "Kinderen",
    executor: "Executeur",
    yes: "Ja",
    no: "Nee",
    loading: "Laden...",
    error: "Fout",
    success: "Succes",
    
    // Forms
    organizationName: "Organisatie Naam",
    website: "Website",
    email: "E-mail",
    phone: "Telefoon",
    message: "Bericht",
    submit: "Indienen",
    required: "Verplicht",
    
    // Legal
    legalAdviceDisclaimer: "Deze service biedt technologie tools maar geeft geen juridisch advies.",
    professionalReviewRequired: "Alle documenten moeten worden beoordeeld door gekwalificeerde juridische professionals voordat ze worden uitgevoerd.",
    jurisdictionCompliance: "Gebruikers moeten de naleving van lokale wetten en vereisten verifiëren."
  },
  
  de: {
    // Navigation
    backToHome: "Zurück zur Startseite",
    features: "Funktionen",
    security: "Sicherheit",
    forFoundations: "Für Stiftungen",
    forLawyers: "Für Anwälte",
    contact: "Kontakt",
    pricing: "Preise",
    support: "Support",
    
    // Homepage
    heroTitle: "Erstellen Sie Ihr Testament – Sicher, Einfach, Digital",
    heroSubtitle: "KI-gestützter Assistent für schnelle und private Testament-Erstellung.",
    heroDescription: "Schützen Sie die Zukunft Ihrer Familie in Minuten, nicht Monaten.",
    startCreatingWill: "Mein Testament Erstellen",
    imALawyer: "Ich bin Anwalt oder Wohltätigkeit",
    iRepresentFoundation: "Ich bin eine Stiftung/NGO",
    whyChooseTitle: "Warum HeirGuard Wählen?",
    whyChooseSubtitle: "Erleben Sie die Zukunft der Nachlassplanung mit unserer sicheren, intelligenten Plattform",
    bankLevelSecurity: "Bank-Level Sicherheit",
    bankLevelSecurityDesc: "Ihre sensiblen Informationen werden mit 256-Bit-Verschlüsselung und Zero-Knowledge-Architektur geschützt.",
    legallyCompliant: "Rechtlich Konform",
    legallyCompliantDesc: "Alle Dokumente werden von Rechtsprofis geprüft und entsprechen jurisdiktionsspezifischen Anforderungen.",
    aiPoweredGuidance: "KI-gestützte Führung",
    aiPoweredGuidanceDesc: "Unser intelligenter Assistent führt Sie durch jeden Schritt und stellt sicher, dass nichts Wichtiges übersehen wird.",
    
    // Footer
    footerDescription: "Sichere, einfache und rechtlich konforme Testament-Erstellung für alle.",
    product: "Produkt",
    createWill: "Testament Erstellen",
    helpCenter: "Hilfezentrum",
    legalResources: "Rechtliche Ressourcen",
    company: "Unternehmen",
    aboutUs: "Über Uns",
    privacyPolicy: "Datenschutzrichtlinie",
    termsOfService: "Nutzungsbedingungen",
    allRightsReserved: "Alle Rechte vorbehalten.",
    
    // Will Assistant
    intelligentAssistant: "Intelligenter Testament-Assistent",
    personalizedGuidance: "Personalisierte Führung für Ihre Testament-Erstellung",
    securePrivate: "Sicher und Privat",
    securePrivateDesc: "Alle Informationen werden verschlüsselt und sicher gespeichert. Ihre Daten bleiben während des gesamten Prozesses vollständig privat.",
    progress: "Fortschritt",
    completion: "Fertigstellung",
    yourInformation: "Ihre Informationen",
    typeResponse: "Geben Sie Ihre Antwort ein...",
    send: "Senden",
    
    // Will Assistant Questions
    welcomeMessage: "Hallo! Ich bin Ihr Digitaler Testament-Assistent und ich bin hier, um Ihnen zu helfen, ein umfassendes und rechtlich gültiges Testament zu erstellen. Ich werde Sie Schritt für Schritt durch diesen wichtigen Prozess führen und Fragen stellen, die auf Ihre spezifische Situation zugeschnitten sind. Beginnen wir mit den Grundlagen - in welchem Land wohnen Sie derzeit? Das hilft mir sicherzustellen, dass Ihr Testament den örtlichen Gesetzen entspricht.",
    personalInfoQuestion: "Danke. Jetzt brauche ich Ihre persönlichen Daten. Bitte geben Sie Ihren vollständigen Namen und Ihr Geburtsdatum an, getrennt durch ein Komma. Zum Beispiel: 'Sarah Johnson, 10. März 1985'",
    maritalStatusQuestion: "Wie ist Ihr aktueller Familienstand? Bitte geben Sie an, ob Sie ledig, verheiratet, geschieden, verwitwet, getrennt oder in einer eingetragenen Partnerschaft sind.",
    spouseInfoQuestion: "Da Sie verheiratet sind/in einer Partnerschaft leben, wie ist der vollständige Name Ihres Ehepartners/Partners? Das ist wichtig für die rechtliche Klarheit in Ihrem Testament.",
    childrenQuestion: "Haben Sie Kinder (einschließlich Stiefkinder oder adoptierte Kinder)?",
    childrenDetailsQuestion: "Bitte geben Sie Details über Ihre Kinder an: ihre Namen, Alter und besondere Umstände, die ich wissen sollte (wie Behinderungen, besondere Bedürfnisse oder wenn welche minderjährig sind).",
    guardianQuestion: "Da Sie minderjährige Kinder haben, ist es entscheidend, einen Vormund zu benennen. Wen möchten Sie als Vormund für Ihre minderjährigen Kinder bestellen, falls Ihnen etwas passiert?",
    existingWillQuestion: "Haben Sie derzeit ein bestehendes Testament oder andere Nachlassplanungsdokumente?",
    assetsQuestion: "Lassen Sie uns nun Ihr Vermögen besprechen. Beschreiben Sie Ihre Hauptvermögenswerte wie Immobilien, Bankkonten, Investitionen, Fahrzeuge, wertvolle persönliche Gegenstände oder Geschäftsanteile. Seien Sie so spezifisch wie möglich.",
    beneficiariesQuestion: "Wen möchten Sie als Begünstigte Ihres Nachlasses benennen? Listen Sie ihre Namen, ihre Beziehung zu Ihnen auf und wenn Sie Präferenzen haben, wie Ihr Vermögen unter ihnen aufgeteilt werden soll.",
    executorQuestion: "Wen möchten Sie als Testamentsvollstrecker Ihres Testaments bestellen? Diese Person wird dafür verantwortlich sein, Ihre Wünsche auszuführen und Ihren Nachlass zu verwalten. Wählen Sie jemanden Vertrauenswürdigen und Fähigen.",
    donationsQuestion: "Möchten Sie wohltätige Spenden in Ihr Testament aufnehmen? Wenn ja, geben Sie die Organisationen und Beträge oder Prozentsätze an. Wenn nicht, sagen Sie einfach 'nein'.",
    specialInstructionsQuestion: "Gibt es besondere Anweisungen, Wünsche oder Bedingungen, die Sie aufnehmen möchten? Dies könnte digitale Vermögenswerte, spezifische Vermächtnisse, Bestattungswünsche oder andere wichtige Angelegenheiten umfassen.",
    reviewQuestion: "Vielen Dank für die Bereitstellung all dieser Informationen. Lassen Sie mich überprüfen, was wir besprochen haben, und Ihren Testamentsentwurf vorbereiten. Gibt es noch etwas, das Sie hinzufügen oder ändern möchten, bevor ich Ihr personalisiertes Testamentsdokument erstelle?",
    completeMessage: "Perfekt! Ich habe alle Informationen, die benötigt werden, um Ihr personalisiertes Testament zu erstellen. Lassen Sie mich nun Ihr umfassendes Letztes Testament erstellen.",
    
    // Will Assistant Responses
    countryConfirmation: "Ausgezeichnet! Ich werde Ihr Testament so strukturieren, dass es den Erbgesetzen Ihres Landes entspricht.",
    personalInfoConfirmation: "Vielen Dank für die Bereitstellung Ihrer persönlichen Informationen.",
    maritalStatusConfirmation: "Ich habe Ihren Familienstand notiert.",
    childrenConfirmation: "Vielen Dank für die Informationen über Ihre Kinder.",
    existingWillWarning: "Wichtig: Die Erstellung eines neuen Testaments widerruft normalerweise alle vorherigen Testamente. Wir werden sicherstellen, dass wir die ordnungsgemäße Widerrufsprache einschließen.",
    
    // Will Document
    willTitle: "TESTAMENT (LETZTER WILLE)",
    declarationTitle: "§ 1 – ERKLÄRUNG DER ABSICHT",
    executorTitle: "§ 2 – TESTAMENTSVOLLSTRECKER",
    guardianshipTitle: "§ 3 – VORMUNDSCHAFT",
    beneficiariesTitle: "§ 4 – ERBEN UND VERTEILUNG",
    charitableTitle: "§ 5 – WOHLTÄTIGE SPENDEN",
    specialInstructionsTitle: "§ 6 – BESONDERE ANWEISUNGEN",
    governingLawTitle: "§ 7 – ANWENDBARES RECHT",
    witnessTitle: "ZEUGEN",
    signatureLine: "(Unterschriftslinie)",
    witnessSignature: "(Name & Unterschrift)",
    legalDisclaimer: "HINWEIS: Dies ist ein digital erstellter Entwurf von HeirGuard. Dieses Dokument wurde basierend auf Ihren spezifischen Umständen und Antworten erstellt, unter Berücksichtigung der gesetzlichen Anforderungen in Ihrer Jurisdiktion. Bitte konsultieren Sie einen qualifizierten Rechtsberater, um dieses Testament zu überprüfen, zu finalisieren und ordnungsgemäß nach lokalen gesetzlichen Anforderungen zu errichten.",
    
    // Common
    name: "Name",
    country: "Land",
    status: "Status",
    children: "Kinder",
    executor: "Testamentsvollstrecker",
    yes: "Ja",
    no: "Nein",
    loading: "Laden...",
    error: "Fehler",
    success: "Erfolg",
    
    // Forms
    organizationName: "Organisationsname",
    website: "Website",
    email: "E-Mail",
    phone: "Telefon",
    message: "Nachricht",
    submit: "Einreichen",
    required: "Erforderlich",
    
    // Legal
    legalAdviceDisclaimer: "Dieser Service bietet Technologie-Tools, aber keine Rechtsberatung.",
    professionalReviewRequired: "Alle Dokumente sollten von qualifizierten Rechtsprofis vor der Ausführung überprüft werden.",
    jurisdictionCompliance: "Benutzer müssen die Einhaltung lokaler Gesetze und Anforderungen überprüfen."
  },
  
  fr: {
    // Navigation
    backToHome: "Retour à l'Accueil",
    features: "Fonctionnalités",
    security: "Sécurité",
    forFoundations: "Pour les Fondations",
    forLawyers: "Pour les Avocats",
    contact: "Contact",
    pricing: "Tarifs",
    support: "Support",
    
    // Homepage
    heroTitle: "Créez Votre Testament – En Sécurité, Simplement, Numériquement",
    heroSubtitle: "Assistant alimenté par IA pour une création de testament rapide et privée.",
    heroDescription: "Protégez l'avenir de votre famille en minutes, pas en mois.",
    startCreatingWill: "Commencer Mon Testament",
    imALawyer: "Je suis Avocat ou Charité",
    iRepresentFoundation: "Je suis une Fondation/ONG",
    whyChooseTitle: "Pourquoi Choisir HeirGuard?",
    whyChooseSubtitle: "Découvrez l'avenir de la planification successorale avec notre plateforme sécurisée et intelligente",
    bankLevelSecurity: "Sécurité de Niveau Bancaire",
    bankLevelSecurityDesc: "Vos informations sensibles sont protégées par un cryptage 256 bits et une architecture à connaissance zéro.",
    legallyCompliant: "Conforme Légalement",
    legallyCompliantDesc: "Tous les documents sont examinés par des professionnels juridiques et respectent les exigences spécifiques à la juridiction.",
    aiPoweredGuidance: "Guidage Alimenté par IA",
    aiPoweredGuidanceDesc: "Notre assistant intelligent vous guide à chaque étape, s'assurant que rien d'important n'est oublié.",
    
    // Footer
    footerDescription: "Création de testament sécurisée, simple et légalement conforme pour tous.",
    product: "Produit",
    createWill: "Créer Testament",
    helpCenter: "Centre d'Aide",
    legalResources: "Ressources Juridiques",
    company: "Entreprise",
    aboutUs: "À Propos",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions de Service",
    allRightsReserved: "Tous droits réservés.",
    
    // Will Assistant
    intelligentAssistant: "Assistant Testament Intelligent",
    personalizedGuidance: "Guidage personnalisé pour la création de votre testament",
    securePrivate: "Sécurisé et Privé",
    securePrivateDesc: "Toutes les informations sont cryptées et stockées en sécurité. Vos données restent complètement privées tout au long du processus.",
    progress: "Progrès",
    completion: "Achèvement",
    yourInformation: "Vos Informations",
    typeResponse: "Tapez votre réponse...",
    send: "Envoyer",
    
    // Will Assistant Questions
    welcomeMessage: "Bonjour! Je suis votre Assistant Testament Numérique et je suis ici pour vous aider à créer un testament complet et juridiquement valide. Je vous guiderai étape par étape dans ce processus important, en posant des questions adaptées à votre situation spécifique. Commençons par les bases - dans quel pays résidez-vous actuellement? Cela m'aidera à m'assurer que votre testament respecte les lois locales.",
    personalInfoQuestion: "Merci. Maintenant j'ai besoin de vos détails personnels. Veuillez fournir votre nom complet et votre date de naissance, séparés par une virgule. Par exemple: 'Sarah Johnson, 10 mars 1985'",
    maritalStatusQuestion: "Quel est votre statut matrimonial actuel? Veuillez préciser si vous êtes célibataire, marié(e), divorcé(e), veuf/veuve, séparé(e) ou en partenariat domestique.",
    spouseInfoQuestion: "Puisque vous êtes marié(e)/en partenariat, quel est le nom complet de votre époux/épouse/partenaire? C'est important pour la clarté juridique dans votre testament.",
    childrenQuestion: "Avez-vous des enfants (y compris les beaux-enfants ou les enfants adoptés)?",
    childrenDetailsQuestion: "Veuillez fournir des détails sur vos enfants: leurs noms, âges et toute circonstance particulière que je devrais connaître (comme des handicaps, des besoins spéciaux, ou s'il y en a qui sont mineurs).",
    guardianQuestion: "Puisque vous avez des enfants mineurs, il est crucial de nommer un tuteur. Qui aimeriez-vous nommer comme tuteur pour vos enfants mineurs s'il vous arrive quelque chose?",
    existingWillQuestion: "Avez-vous actuellement un testament existant ou d'autres documents de planification successorale?",
    assetsQuestion: "Discutons maintenant de vos biens. Décrivez vos principaux actifs comme l'immobilier, les comptes bancaires, les investissements, les véhicules, les biens personnels de valeur ou les intérêts commerciaux. Soyez aussi spécifique que possible.",
    beneficiariesQuestion: "Qui aimeriez-vous nommer comme bénéficiaires de votre succession? Listez leurs noms, leur relation avec vous, et si vous avez des préférences sur la façon dont vos biens devraient être distribués entre eux.",
    executorQuestion: "Qui aimeriez-vous nommer comme exécuteur de votre testament? Cette personne sera responsable de l'exécution de vos souhaits et de la gestion de votre succession. Choisissez quelqu'un de digne de confiance et capable.",
    donationsQuestion: "Aimeriez-vous inclure des dons caritatifs dans votre testament? Si oui, spécifiez les organisations et les montants ou pourcentages. Sinon, dites simplement 'non'.",
    specialInstructionsQuestion: "Y a-t-il des instructions spéciales, des souhaits ou des conditions que vous aimeriez inclure? Cela pourrait couvrir les actifs numériques, les legs spécifiques, les souhaits funéraires ou toute autre question importante.",
    reviewQuestion: "Merci d'avoir fourni toutes ces informations. Laissez-moi examiner ce que nous avons couvert et préparer votre projet de testament. Y a-t-il autre chose que vous aimeriez ajouter ou modifier avant que je génère votre document de testament personnalisé?",
    completeMessage: "Parfait! J'ai toutes les informations nécessaires pour créer votre testament personnalisé. Laissez-moi maintenant générer votre Testament complet.",
    
    // Will Assistant Responses
    countryConfirmation: "Excellent! Je structurerai votre testament pour qu'il respecte les lois successorales de votre pays.",
    personalInfoConfirmation: "Merci d'avoir fourni vos informations personnelles.",
    maritalStatusConfirmation: "J'ai noté votre statut matrimonial.",
    childrenConfirmation: "Merci pour les informations sur vos enfants.",
    existingWillWarning: "Important: Créer un nouveau testament révoque généralement tous les testaments précédents. Nous nous assurerons d'inclure le langage de révocation approprié.",
    
    // Will Document
    willTitle: "TESTAMENT (DERNIÈRES VOLONTÉS)",
    declarationTitle: "ARTICLE 1 – DÉCLARATION D'INTENTION",
    executorTitle: "ARTICLE 2 – EXÉCUTEUR TESTAMENTAIRE",
    guardianshipTitle: "ARTICLE 3 – TUTELLE",
    beneficiariesTitle: "ARTICLE 4 – BÉNÉFICIAIRES ET RÉPARTITION",
    charitableTitle: "ARTICLE 5 – DONS CARITATIFS",
    specialInstructionsTitle: "ARTICLE 6 – INSTRUCTIONS SPÉCIALES",
    governingLawTitle: "ARTICLE 7 – LOI APPLICABLE",
    witnessTitle: "TÉMOINS",
    signatureLine: "(Ligne de signature)",
    witnessSignature: "(Nom & Signature)",
    legalDisclaimer: "NOTE: Ceci est un projet généré numériquement fourni par HeirGuard. Ce document a été créé basé sur vos circonstances spécifiques et réponses, en considération des exigences légales dans votre juridiction. Veuillez consulter un conseiller juridique qualifié pour réviser, finaliser et exécuter correctement ce testament selon les exigences légales locales.",
    
    // Common
    name: "Nom",
    country: "Pays",
    status: "Statut",
    children: "Enfants",
    executor: "Exécuteur",
    yes: "Oui",
    no: "Non",
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
    
    // Forms
    organizationName: "Nom de l'Organisation",
    website: "Site Web",
    email: "E-mail",
    phone: "Téléphone",
    message: "Message",
    submit: "Soumettre",
    required: "Requis",
    
    // Legal
    legalAdviceDisclaimer: "Ce service fournit des outils technologiques mais ne donne pas de conseils juridiques.",
    professionalReviewRequired: "Tous les documents doivent être examinés par des professionnels juridiques qualifiés avant l'exécution.",
    jurisdictionCompliance: "Les utilisateurs doivent vérifier la conformité avec les lois et exigences locales."
  },
  
  es: {
    // Navigation
    backToHome: "Volver al Inicio",
    features: "Características",
    security: "Seguridad",
    forFoundations: "Para Fundaciones",
    forLawyers: "Para Abogados",
    contact: "Contacto",
    pricing: "Precios",
    support: "Soporte",
    
    // Homepage
    heroTitle: "Cree Su Testamento – Seguro, Simple, Digital",
    heroSubtitle: "Asistente impulsado por IA para creación rápida y privada de testamentos.",
    heroDescription: "Proteja el futuro de su familia en minutos, no meses.",
    startCreatingWill: "Comenzar Mi Testamento",
    imALawyer: "Soy Abogado o Caridad",
    iRepresentFoundation: "Soy una Fundación/ONG",
    whyChooseTitle: "¿Por Qué Elegir HeirGuard?",
    whyChooseSubtitle: "Experimente el futuro de la planificación patrimonial con nuestra plataforma segura e inteligente",
    bankLevelSecurity: "Seguridad de Nivel Bancario",
    bankLevelSecurityDesc: "Su información sensible está protegida con encriptación de 256 bits y arquitectura de conocimiento cero.",
    legallyCompliant: "Legalmente Conforme",
    legallyCompliantDesc: "Todos los documentos son revisados por profesionales legales y cumplen con requisitos específicos de jurisdicción.",
    aiPoweredGuidance: "Guía Impulsada por IA",
    aiPoweredGuidanceDesc: "Nuestro asistente inteligente lo guía en cada paso, asegurando que nada importante se pase por alto.",
    
    // Footer
    footerDescription: "Creación de testamento segura, simple y legalmente conforme para todos.",
    product: "Producto",
    createWill: "Crear Testamento",
    helpCenter: "Centro de Ayuda",
    legalResources: "Recursos Legales",
    company: "Empresa",
    aboutUs: "Acerca de Nosotros",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    allRightsReserved: "Todos los derechos reservados.",
    
    // Will Assistant
    intelligentAssistant: "Asistente de Testamento Inteligente",
    personalizedGuidance: "Guía personalizada para la creación de su testamento",
    securePrivate: "Seguro y Privado",
    securePrivateDesc: "Toda la información se encripta y almacena de forma segura. Sus datos permanecen completamente privados durante todo el proceso.",
    progress: "Progreso",
    completion: "Finalización",
    yourInformation: "Su Información",
    typeResponse: "Escriba su respuesta...",
    send: "Enviar",
    
    // Will Assistant Questions
    welcomeMessage: "¡Hola! Soy su Asistente de Testamento Digital y estoy aquí para ayudarle a crear un testamento completo y legalmente válido. Le guiaré paso a paso a través de este importante proceso, haciendo preguntas adaptadas a su situación específica. Comencemos con lo básico - ¿en qué país reside actualmente? Esto me ayudará a asegurar que su testamento cumpla con las leyes locales.",
    personalInfoQuestion: "Gracias. Ahora necesito sus datos personales. Por favor proporcione su nombre completo y fecha de nacimiento, separados por una coma. Por ejemplo: 'Sarah Johnson, 10 de marzo de 1985'",
    maritalStatusQuestion: "¿Cuál es su estado civil actual? Por favor especifique si está soltero(a), casado(a), divorciado(a), viudo(a), separado(a) o en pareja de hecho.",
    spouseInfoQuestion: "Ya que está casado(a)/en pareja, ¿cuál es el nombre completo de su cónyuge/pareja? Esto es importante para la claridad legal en su testamento.",
    childrenQuestion: "¿Tiene hijos (incluyendo hijastros o hijos adoptados)?",
    childrenDetailsQuestion: "Por favor proporcione detalles sobre sus hijos: sus nombres, edades y cualquier circunstancia especial que deba conocer (como discapacidades, necesidades especiales, o si alguno es menor de edad).",
    guardianQuestion: "Ya que tiene hijos menores, es crucial nombrar un tutor. ¿A quién le gustaría nombrar como tutor de sus hijos menores si algo le pasa?",
    existingWillQuestion: "¿Tiene actualmente un testamento existente u otros documentos de planificación patrimonial?",
    assetsQuestion: "Ahora hablemos de sus bienes. Describa sus principales activos como bienes raíces, cuentas bancarias, inversiones, vehículos, propiedades personales valiosas o intereses comerciales. Sea tan específico como pueda.",
    beneficiariesQuestion: "¿A quién le gustaría nombrar como beneficiarios de su patrimonio? Liste sus nombres, su relación con usted, y si tiene preferencias sobre cómo deberían distribuirse sus bienes entre ellos.",
    executorQuestion: "¿A quién le gustaría nombrar como albacea de su testamento? Esta persona será responsable de ejecutar sus deseos y administrar su patrimonio. Elija a alguien confiable y capaz.",
    donationsQuestion: "¿Le gustaría incluir donaciones caritativas en su testamento? Si es así, especifique las organizaciones y cantidades o porcentajes. Si no, simplemente diga 'no'.",
    specialInstructionsQuestion: "¿Hay instrucciones especiales, deseos o condiciones que le gustaría incluir? Esto podría cubrir activos digitales, legados específicos, deseos funerarios o cualquier otro asunto importante.",
    reviewQuestion: "Gracias por proporcionar toda esa información. Permítame revisar lo que hemos cubierto y preparar su borrador de testamento. ¿Hay algo más que le gustaría agregar o modificar antes de que genere su documento de testamento personalizado?",
    completeMessage: "¡Perfecto! Tengo toda la información necesaria para crear su testamento personalizado. Permítame ahora generar su Testamento completo.",
    
    // Will Assistant Responses
    countryConfirmation: "¡Excelente! Estructuraré su testamento para cumplir con las leyes de sucesión de su país.",
    personalInfoConfirmation: "Gracias por proporcionar su información personal.",
    maritalStatusConfirmation: "He anotado su estado civil.",
    childrenConfirmation: "Gracias por la información sobre sus hijos.",
    existingWillWarning: "Importante: Crear un nuevo testamento típicamente revoca todos los testamentos anteriores. Nos aseguraremos de incluir el lenguaje de revocación apropiado.",
    
    // Will Document
    willTitle: "TESTAMENTO (ÚLTIMAS VOLUNTADES)",
    declarationTitle: "ARTÍCULO 1 – DECLARACIÓN DE INTENCIÓN",
    executorTitle: "ARTÍCULO 2 – ALBACEA",
    guardianshipTitle: "ARTÍCULO 3 – TUTELA",
    beneficiariesTitle: "ARTÍCULO 4 – BENEFICIARIOS Y DISTRIBUCIÓN",
    charitableTitle: "ARTÍCULO 5 – DONACIONES CARITATIVAS",
    specialInstructionsTitle: "ARTÍCULO 6 – INSTRUCCIONES ESPECIALES",
    governingLawTitle: "ARTÍCULO 7 – LEY APLICABLE",
    witnessTitle: "TESTIGOS",
    signatureLine: "(Línea de firma)",
    witnessSignature: "(Nombre y Firma)",
    legalDisclaimer: "NOTA: Este es un borrador generado digitalmente proporcionado por HeirGuard. Este documento ha sido creado basado en sus circunstancias específicas y respuestas, con consideración de los requisitos legales en su jurisdicción. Por favor consulte a un asesor legal calificado para revisar, finalizar y ejecutar correctamente este testamento según los requisitos legales locales.",
    
    // Common
    name: "Nombre",
    country: "País",
    status: "Estado",
    children: "Hijos",
    executor: "Albacea",
    yes: "Sí",
    no: "No",
    loading: "Cargando...",
    error: "Error",
    success: "Éxito",
    
    // Forms
    organizationName: "Nombre de la Organización",
    website: "Sitio Web",
    email: "Correo Electrónico",
    phone: "Teléfono",
    message: "Mensaje",
    submit: "Enviar",
    required: "Requerido",
    
    // Legal
    legalAdviceDisclaimer: "Este servicio proporciona herramientas tecnológicas pero no brinda asesoramiento legal.",
    professionalReviewRequired: "Todos los documentos deben ser revisados por profesionales legales calificados antes de la ejecución.",
    jurisdictionCompliance: "Los usuarios deben verificar el cumplimiento con las leyes y requisitos locales."
  }
};

export const getTranslation = (key: keyof Translation, language: string): string => {
  return translations[language]?.[key] || translations['en'][key] || key;
};