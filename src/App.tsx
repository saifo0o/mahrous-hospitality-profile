
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/toaster';
import { useEffect } from 'react';

import Index from './pages/Index';
import About from './pages/About';
import Career from './pages/Career';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Awards from './pages/Awards';
import Contact from './pages/Contact';
import BookConsultation from './pages/BookConsultation';
import Calculators from './pages/Calculators';
import Admin from './pages/Admin';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import WhatsAppButton from './components/WhatsAppButton';
import TrackingScripts from './components/TrackingScripts';
import { trackPageView, trackLanguageChange } from './utils/analytics';

const queryClient = new QueryClient();

// Page tracker component
const PageTracker = () => {
  const location = useLocation();
  const { language } = useLanguage();
  
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
  
  useEffect(() => {
    trackLanguageChange(language.code);
  }, [language.code]);
  
  return null;
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AuthProvider>
          <BrowserRouter>
            <TrackingScripts />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/career" element={<Career />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-consultation" element={<BookConsultation />} />
              <Route path="/calculators" element={<Calculators />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <PageTracker />
            <WhatsAppButton />
            <Toaster />
          </BrowserRouter>
        </AuthProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
