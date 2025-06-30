import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import ForLawyers from './components/ForLawyers';
import ForFoundations from './components/ForFoundations';
import Contact from './components/Contact';
import PrivacyLegal from './components/PrivacyLegal';
import WillAssistant from './components/WillAssistant';
import Pricing from './components/Pricing';
import Security from './components/Security';
import Support from './components/Support';
import LegalResources from './components/LegalResources';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/for-lawyers" element={<ForLawyers />} />
          <Route path="/for-foundations" element={<ForFoundations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-legal" element={<PrivacyLegal />} />
          <Route path="/will-assistant" element={<WillAssistant />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/security" element={<Security />} />
          <Route path="/support" element={<Support />} />
          <Route path="/legal-resources" element={<LegalResources />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;