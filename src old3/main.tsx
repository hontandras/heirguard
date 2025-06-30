import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { LanguageProvider } from './context/LanguageContext'; // ⬅️ EZ FONTOS

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>      {/* ⬅️ az egész App itt van "becsomagolva" */}
      <App />
    </LanguageProvider>
  </StrictMode>
);
