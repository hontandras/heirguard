export interface WillTemplate {
  title: string;
  structure: {
    declarationTitle: string;
    executorTitle: string;
    guardianshipTitle: string;
    beneficiariesTitle: string;
    charitableTitle: string;
    specialInstructionsTitle: string;
    governingLawTitle: string;
    witnessTitle: string;
  };
  legalLanguage: {
    declaration: string;
    executorClause: string;
    guardianClause: string;
    governingLaw: string;
    witnessClause: string;
    disclaimer: string;
  };
}

export const willTemplates: Record<string, Record<string, WillTemplate>> = {
  netherlands: {
    nl: {
      title: "TESTAMENT (LAATSTE WIL)",
      structure: {
        declarationTitle: "ARTIKEL 1 – VERKLARING VAN INTENTIE",
        executorTitle: "ARTIKEL 2 – EXECUTEUR",
        guardianshipTitle: "ARTIKEL 3 – VOOGDIJ",
        beneficiariesTitle: "ARTIKEL 4 – BEGUNSTIGDEN EN VERDELING",
        charitableTitle: "ARTIKEL 5 – LIEFDADIGE DONATIES",
        specialInstructionsTitle: "ARTIKEL 6 – BIJZONDERE INSTRUCTIES",
        governingLawTitle: "ARTIKEL 7 – TOEPASSELIJK RECHT",
        witnessTitle: "GETUIGEN"
      },
      legalLanguage: {
        declaration: "Dit testament wordt opgesteld onder de Nederlandse wet (Erfrecht), en ik beoog dat het volledige rechtskracht heeft onder deze jurisdictie. Hierbij herroep ik alle eerder gemaakte testamenten en codicillen.",
        executorClause: "Ik benoem {executor} tot executeur van dit testament, met volledige bevoegdheid om mijn nalatenschap te beheren volgens de hierin gestelde voorwaarden.",
        guardianClause: "In geval van mijn overlijden benoem ik {guardian} tot voogd van mijn minderjarige kinderen, met volledige bevoegdheid om te zorgen voor hun fysieke, emotionele en financiële welzijn.",
        governingLaw: "Dit testament wordt beheerst en geïnterpreteerd in overeenstemming met het Nederlandse recht (Erfrecht).",
        witnessClause: "TEN BLIJKE WAARVAN ik hieronder mijn handtekening stel op {date} te {location}.",
        disclaimer: "OPMERKING: Dit is een digitaal gegenereerd concept verstrekt door HeirGuard. Dit document is gemaakt op basis van uw specifieke omstandigheden en antwoorden, met inachtneming van de wettelijke vereisten in Nederland. Dit document werd gegenereerd in overeenstemming met de erfwetten van Nederland. Raadpleeg een gekwalificeerde juridische adviseur in Nederland om dit testament te beoordelen, af te ronden en correct uit te voeren volgens de Nederlandse wettelijke vereisten."
      }
    },
    en: {
      title: "TESTAMENT (LAST WILL AND TESTAMENT)",
      structure: {
        declarationTitle: "ARTICLE 1 – DECLARATION OF INTENT",
        executorTitle: "ARTICLE 2 – EXECUTOR",
        guardianshipTitle: "ARTICLE 3 – GUARDIANSHIP",
        beneficiariesTitle: "ARTICLE 4 – BENEFICIARIES AND DISTRIBUTION",
        charitableTitle: "ARTICLE 5 – CHARITABLE DONATIONS",
        specialInstructionsTitle: "ARTICLE 6 – SPECIAL INSTRUCTIONS",
        governingLawTitle: "ARTICLE 7 – GOVERNING LAW",
        witnessTitle: "WITNESSES"
      },
      legalLanguage: {
        declaration: "This testament is made under Dutch law (Erfrecht), and I intend it to have full legal effect under this jurisdiction. I hereby revoke all previously made wills and codicils.",
        executorClause: "I appoint {executor} as executor of this will, with full authority to manage my estate according to the terms set forth herein.",
        guardianClause: "In the event of my death, I appoint {guardian} as guardian of my minor children, with full authority to care for their physical, emotional and financial well-being.",
        governingLaw: "This will shall be governed and interpreted in accordance with Dutch law (Erfrecht).",
        witnessClause: "IN WITNESS WHEREOF, I hereunto set my hand this {date} at {location}.",
        disclaimer: "NOTE: This is a digitally generated draft provided by HeirGuard. This document has been created based on your specific circumstances and responses, with consideration for the legal requirements in the Netherlands. This document was generated in accordance with the inheritance laws of the Netherlands. Please consult a qualified legal advisor in the Netherlands to review, finalize, and properly execute this Will according to Dutch legal requirements."
      }
    }
  },
  
  germany: {
    de: {
      title: "TESTAMENT (LETZTER WILLE)",
      structure: {
        declarationTitle: "§ 1 – ERKLÄRUNG DER ABSICHT",
        executorTitle: "§ 2 – TESTAMENTSVOLLSTRECKER",
        guardianshipTitle: "§ 3 – VORMUNDSCHAFT",
        beneficiariesTitle: "§ 4 – ERBEN UND VERTEILUNG",
        charitableTitle: "§ 5 – WOHLTÄTIGE SPENDEN",
        specialInstructionsTitle: "§ 6 – BESONDERE ANWEISUNGEN",
        governingLawTitle: "§ 7 – ANWENDBARES RECHT",
        witnessTitle: "ZEUGEN"
      },
      legalLanguage: {
        declaration: "Dieses Testament wird nach deutschem Erbrecht erstellt, und ich beabsichtige, dass es volle Rechtskraft unter dieser Jurisdiktion hat. Hiermit widerrufe ich alle zuvor errichteten Testamente und Nachträge.",
        executorClause: "Ich bestelle {executor} zum Testamentsvollstrecker dieses Testaments mit voller Befugnis, meinen Nachlass gemäß den hierin festgelegten Bestimmungen zu verwalten.",
        guardianClause: "Im Falle meines Todes bestelle ich {guardian} zum Vormund meiner minderjährigen Kinder mit voller Befugnis, für ihr körperliches, emotionales und finanzielles Wohlergehen zu sorgen.",
        governingLaw: "Dieses Testament unterliegt dem deutschen Erbrecht und ist entsprechend auszulegen.",
        witnessClause: "ZU URKUND DESSEN setze ich hierunter meine Unterschrift am {date} in {location}.",
        disclaimer: "HINWEIS: Dies ist ein digital erstellter Entwurf von HeirGuard. Dieses Dokument wurde basierend auf Ihren spezifischen Umständen und Antworten erstellt, unter Berücksichtigung der gesetzlichen Anforderungen in Deutschland. Dieses Dokument wurde in Übereinstimmung mit den Erbgesetzen Deutschlands erstellt. Bitte konsultieren Sie einen qualifizierten Rechtsberater in Deutschland, um dieses Testament zu überprüfen, zu finalisieren und ordnungsgemäß nach deutschen gesetzlichen Anforderungen zu errichten."
      }
    },
    en: {
      title: "TESTAMENT (LAST WILL AND TESTAMENT)",
      structure: {
        declarationTitle: "§ 1 – DECLARATION OF INTENT",
        executorTitle: "§ 2 – EXECUTOR",
        guardianshipTitle: "§ 3 – GUARDIANSHIP",
        beneficiariesTitle: "§ 4 – BENEFICIARIES AND DISTRIBUTION",
        charitableTitle: "§ 5 – CHARITABLE DONATIONS",
        specialInstructionsTitle: "§ 6 – SPECIAL INSTRUCTIONS",
        governingLawTitle: "§ 7 – GOVERNING LAW",
        witnessTitle: "WITNESSES"
      },
      legalLanguage: {
        declaration: "This testament is made under German inheritance law (Erbrecht), and I intend it to have full legal effect under this jurisdiction. I hereby revoke all previously made wills and codicils.",
        executorClause: "I appoint {executor} as executor of this will with full authority to manage my estate according to the terms set forth herein.",
        guardianClause: "In the event of my death, I appoint {guardian} as guardian of my minor children with full authority to care for their physical, emotional and financial well-being.",
        governingLaw: "This will shall be governed and interpreted in accordance with German inheritance law (Erbrecht).",
        witnessClause: "IN WITNESS WHEREOF, I hereunto set my hand this {date} at {location}.",
        disclaimer: "NOTE: This is a digitally generated draft provided by HeirGuard. This document has been created based on your specific circumstances and responses, with consideration for the legal requirements in Germany. This document was generated in accordance with the inheritance laws of Germany. Please consult a qualified legal advisor in Germany to review, finalize, and properly execute this Will according to German legal requirements."
      }
    }
  },
  
  france: {
    fr: {
      title: "TESTAMENT (DERNIÈRES VOLONTÉS)",
      structure: {
        declarationTitle: "ARTICLE 1 – DÉCLARATION D'INTENTION",
        executorTitle: "ARTICLE 2 – EXÉCUTEUR TESTAMENTAIRE",
        guardianshipTitle: "ARTICLE 3 – TUTELLE",
        beneficiariesTitle: "ARTICLE 4 – BÉNÉFICIAIRES ET RÉPARTITION",
        charitableTitle: "ARTICLE 5 – DONS CARITATIFS",
        specialInstructionsTitle: "ARTICLE 6 – INSTRUCTIONS SPÉCIALES",
        governingLawTitle: "ARTICLE 7 – LOI APPLICABLE",
        witnessTitle: "TÉMOINS"
      },
      legalLanguage: {
        declaration: "Ce testament est établi sous le droit français des successions, et j'entends qu'il ait plein effet juridique sous cette juridiction. Par les présentes, je révoque tous les testaments et codicilles précédemment établis.",
        executorClause: "Je nomme {executor} comme exécuteur testamentaire de ce testament, avec pleins pouvoirs pour administrer ma succession selon les termes établis dans les présentes.",
        guardianClause: "En cas de mon décès, je nomme {guardian} comme tuteur de mes enfants mineurs, avec pleine autorité pour prendre soin de leur bien-être physique, émotionnel et financier.",
        governingLaw: "Ce testament est régi et interprété conformément au droit français des successions.",
        witnessClause: "EN FOI DE QUOI, j'appose ma signature le {date} à {location}.",
        disclaimer: "NOTE: Ceci est un projet généré numériquement fourni par HeirGuard. Ce document a été créé basé sur vos circonstances spécifiques et réponses, en considération des exigences légales en France. Ce document a été généré conformément aux lois successorales de la France. Veuillez consulter un conseiller juridique qualifié en France pour réviser, finaliser et exécuter correctement ce testament selon les exigences légales françaises."
      }
    },
    en: {
      title: "TESTAMENT (LAST WILL AND TESTAMENT)",
      structure: {
        declarationTitle: "ARTICLE 1 – DECLARATION OF INTENT",
        executorTitle: "ARTICLE 2 – EXECUTOR",
        guardianshipTitle: "ARTICLE 3 – GUARDIANSHIP",
        beneficiariesTitle: "ARTICLE 4 – BENEFICIARIES AND DISTRIBUTION",
        charitableTitle: "ARTICLE 5 – CHARITABLE DONATIONS",
        specialInstructionsTitle: "ARTICLE 6 – SPECIAL INSTRUCTIONS",
        governingLawTitle: "ARTICLE 7 – GOVERNING LAW",
        witnessTitle: "WITNESSES"
      },
      legalLanguage: {
        declaration: "This testament is made under French inheritance law (droit des successions), and I intend it to have full legal effect under this jurisdiction. I hereby revoke all previously made wills and codicils.",
        executorClause: "I appoint {executor} as executor of this will, with full power to administer my estate according to the terms established herein.",
        guardianClause: "In the event of my death, I appoint {guardian} as guardian of my minor children, with full authority to care for their physical, emotional and financial well-being.",
        governingLaw: "This will shall be governed and interpreted in accordance with French inheritance law (droit des successions).",
        witnessClause: "IN WITNESS WHEREOF, I hereunto set my hand this {date} at {location}.",
        disclaimer: "NOTE: This is a digitally generated draft provided by HeirGuard. This document has been created based on your specific circumstances and responses, with consideration for the legal requirements in France. This document was generated in accordance with the inheritance laws of France. Please consult a qualified legal advisor in France to review, finalize, and properly execute this Will according to French legal requirements."
      }
    }
  },
  
  spain: {
    es: {
      title: "TESTAMENTO (ÚLTIMAS VOLUNTADES)",
      structure: {
        declarationTitle: "ARTÍCULO 1 – DECLARACIÓN DE INTENCIÓN",
        executorTitle: "ARTÍCULO 2 – ALBACEA",
        guardianshipTitle: "ARTÍCULO 3 – TUTELA",
        beneficiariesTitle: "ARTÍCULO 4 – BENEFICIARIOS Y DISTRIBUCIÓN",
        charitableTitle: "ARTÍCULO 5 – DONACIONES CARITATIVAS",
        specialInstructionsTitle: "ARTÍCULO 6 – INSTRUCCIONES ESPECIALES",
        governingLawTitle: "ARTÍCULO 7 – LEY APLICABLE",
        witnessTitle: "TESTIGOS"
      },
      legalLanguage: {
        declaration: "Este testamento se hace bajo el derecho sucesorio español, y pretendo que tenga pleno efecto legal bajo esta jurisdicción. Por la presente revoco todos los testamentos y codicilos previamente hechos.",
        executorClause: "Nombro a {executor} como albacea de este testamento, con pleno poder para administrar mi patrimonio según los términos establecidos en el presente.",
        guardianClause: "En caso de mi muerte, nombro a {guardian} como tutor de mis hijos menores, con plena autoridad para cuidar de su bienestar físico, emocional y financiero.",
        governingLaw: "Este testamento se regirá e interpretará de acuerdo con el derecho sucesorio español.",
        witnessClause: "EN FE DE LO CUAL, pongo mi firma el {date} en {location}.",
        disclaimer: "NOTA: Este es un borrador generado digitalmente proporcionado por HeirGuard. Este documento ha sido creado basado en sus circunstancias específicas y respuestas, con consideración de los requisitos legales en España. Este documento fue generado de acuerdo con las leyes de sucesión de España. Por favor consulte a un asesor legal calificado en España para revisar, finalizar y ejecutar correctamente este testamento según los requisitos legales españoles."
      }
    },
    en: {
      title: "TESTAMENTO (LAST WILL AND TESTAMENT)",
      structure: {
        declarationTitle: "ARTICLE 1 – DECLARATION OF INTENT",
        executorTitle: "ARTICLE 2 – EXECUTOR",
        guardianshipTitle: "ARTICLE 3 – GUARDIANSHIP",
        beneficiariesTitle: "ARTICLE 4 – BENEFICIARIES AND DISTRIBUTION",
        charitableTitle: "ARTICLE 5 – CHARITABLE DONATIONS",
        specialInstructionsTitle: "ARTICLE 6 – SPECIAL INSTRUCTIONS",
        governingLawTitle: "ARTICLE 7 – GOVERNING LAW",
        witnessTitle: "WITNESSES"
      },
      legalLanguage: {
        declaration: "This testament is made under Spanish inheritance law, and I intend it to have full legal effect under this jurisdiction. I hereby revoke all previously made wills and codicils.",
        executorClause: "I appoint {executor} as executor of this will, with full power to administer my estate according to the terms established herein.",
        guardianClause: "In the event of my death, I appoint {guardian} as guardian of my minor children, with full authority to care for their physical, emotional and financial well-being.",
        governingLaw: "This will shall be governed and interpreted in accordance with Spanish inheritance law.",
        witnessClause: "IN WITNESS WHEREOF, I hereunto set my hand this {date} at {location}.",
        disclaimer: "NOTE: This is a digitally generated draft provided by HeirGuard. This document has been created based on your specific circumstances and responses, with consideration for the legal requirements in Spain. This document was generated in accordance with the inheritance laws of Spain. Please consult a qualified legal advisor in Spain to review, finalize, and properly execute this Will according to Spanish legal requirements."
      }
    }
  },
  
  uk: {
    en: {
      title: "LAST WILL AND TESTAMENT",
      structure: {
        declarationTitle: "CLAUSE 1 – DECLARATION",
        executorTitle: "CLAUSE 2 – EXECUTOR",
        guardianshipTitle: "CLAUSE 3 – GUARDIANSHIP",
        beneficiariesTitle: "CLAUSE 4 – BENEFICIARIES AND DISTRIBUTION",
        charitableTitle: "CLAUSE 5 – CHARITABLE BEQUESTS",
        specialInstructionsTitle: "CLAUSE 6 – SPECIAL INSTRUCTIONS",
        governingLawTitle: "CLAUSE 7 – GOVERNING LAW",
        witnessTitle: "WITNESSES"
      },
      legalLanguage: {
        declaration: "This Last Will and Testament is made under the laws of England and Wales, and I intend it to have full legal effect under such jurisdiction. I hereby revoke all previously made wills and codicils.",
        executorClause: "I appoint {executor} as the executor of this Will, with full power to administer my estate according to the terms herein.",
        guardianClause: "In the event of my death, I appoint {guardian} as the guardian of my minor children, with full authority to care for their physical, emotional, and financial well-being.",
        governingLaw: "This Will shall be governed and interpreted in accordance with the laws of England and Wales.",
        witnessClause: "IN WITNESS WHEREOF, I hereunto set my hand this {date} at {location}.",
        disclaimer: "NOTE: This is a digitally generated draft provided by HeirGuard. This document has been created based on your specific circumstances and responses, with consideration for the legal requirements in the United Kingdom. This document was generated in accordance with the inheritance laws of the United Kingdom. Please consult a qualified legal advisor in the UK to review, finalise, and properly execute this Will according to UK legal requirements."
      }
    }
  },
  
  usa: {
    en: {
      title: "LAST WILL AND TESTAMENT",
      structure: {
        declarationTitle: "ARTICLE I – DECLARATION",
        executorTitle: "ARTICLE II – PERSONAL REPRESENTATIVE",
        guardianshipTitle: "ARTICLE III – GUARDIANSHIP",
        beneficiariesTitle: "ARTICLE IV – DISPOSITION OF PROPERTY",
        charitableTitle: "ARTICLE V – CHARITABLE BEQUESTS",
        specialInstructionsTitle: "ARTICLE VI – SPECIAL PROVISIONS",
        governingLawTitle: "ARTICLE VII – GOVERNING LAW",
        witnessTitle: "ATTESTATION"
      },
      legalLanguage: {
        declaration: "This Last Will and Testament is made under the laws of the United States, and I intend it to have full legal effect under the jurisdiction of my state of residence. I hereby revoke all previously made wills and codicils.",
        executorClause: "I nominate and appoint {executor} as Personal Representative (Executor) of this Will, with full power to administer my estate according to the terms herein and applicable state law.",
        guardianClause: "In the event of my death, I nominate and appoint {guardian} as guardian of the person and estate of my minor children, with full authority to care for their physical, emotional, and financial well-being.",
        governingLaw: "This Will shall be governed and construed in accordance with the laws of my state of residence at the time of my death.",
        witnessClause: "IN WITNESS WHEREOF, I have hereunto set my hand and seal this {date} at {location}.",
        disclaimer: "NOTE: This is a digitally generated draft provided by HeirGuard. This document has been created based on your specific circumstances and responses, with consideration for general US legal requirements. This document was generated in accordance with the inheritance laws of the United States. Please consult a qualified attorney licensed in your state to review, finalize, and properly execute this Will according to your state's specific legal requirements."
      }
    }
  },
  
  default: {
    en: {
      title: "LAST WILL AND TESTAMENT",
      structure: {
        declarationTitle: "ARTICLE 1 – DECLARATION OF INTENT",
        executorTitle: "ARTICLE 2 – EXECUTOR",
        guardianshipTitle: "ARTICLE 3 – GUARDIANSHIP",
        beneficiariesTitle: "ARTICLE 4 – BENEFICIARIES AND DISTRIBUTION",
        charitableTitle: "ARTICLE 5 – CHARITABLE DONATIONS",
        specialInstructionsTitle: "ARTICLE 6 – SPECIAL INSTRUCTIONS",
        governingLawTitle: "ARTICLE 7 – GOVERNING LAW",
        witnessTitle: "WITNESSES"
      },
      legalLanguage: {
        declaration: "This Last Will is made under the laws of {country}, and I intend it to have full legal effect under such jurisdiction. I hereby revoke all previously made wills and codicils.",
        executorClause: "I appoint {executor} as the executor of this Will, with full power to administer my estate according to the terms herein.",
        guardianClause: "In the event of my death, I appoint {guardian} as the guardian of my minor children, with full authority to care for their physical, emotional, and financial well-being.",
        governingLaw: "This Will shall be governed and interpreted in accordance with the laws of {country}.",
        witnessClause: "IN WITNESS WHEREOF, I hereunto set my hand this {date} in {location}.",
        disclaimer: "NOTE: This is a digitally generated draft provided by HeirGuard. This document has been created based on your specific circumstances and responses, with consideration for the legal requirements in {country}. This document was generated in accordance with the inheritance laws of {country}. Please consult a qualified legal advisor in your jurisdiction to review, finalize, and properly execute this Will according to local legal requirements."
      }
    }
  }
};

export const getWillTemplate = (country: string, language: string = 'en'): WillTemplate => {
  const lowerCountry = country.toLowerCase();
  
  let countryKey = 'default';
  
  if (lowerCountry.includes('netherlands') || lowerCountry.includes('holland')) {
    countryKey = 'netherlands';
  } else if (lowerCountry.includes('germany') || lowerCountry.includes('deutschland')) {
    countryKey = 'germany';
  } else if (lowerCountry.includes('france') || lowerCountry.includes('français')) {
    countryKey = 'france';
  } else if (lowerCountry.includes('spain') || lowerCountry.includes('españa')) {
    countryKey = 'spain';
  } else if (lowerCountry.includes('uk') || lowerCountry.includes('united kingdom') || 
             lowerCountry.includes('england') || lowerCountry.includes('scotland') || 
             lowerCountry.includes('wales') || lowerCountry.includes('britain')) {
    countryKey = 'uk';
  } else if (lowerCountry.includes('usa') || lowerCountry.includes('united states') || 
             lowerCountry.includes('america')) {
    countryKey = 'usa';
  }
  
  // Get template for country and language, fallback to English if language not available
  const countryTemplates = willTemplates[countryKey];
  if (countryTemplates && countryTemplates[language]) {
    return countryTemplates[language];
  } else if (countryTemplates && countryTemplates['en']) {
    return countryTemplates['en'];
  } else {
    return willTemplates.default.en;
  }
};