
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/toaster';
import { useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';

import Index from './pages/Index';
const About = lazy(() => import('./pages/About'));
const Career = lazy(() => import('./pages/Career'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectCaseStudy = lazy(() => import('./pages/ProjectCaseStudy'));
const Consulting = lazy(() => import('./pages/Consulting'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Awards = lazy(() => import('./pages/Awards'));
const Contact = lazy(() => import('./pages/Contact'));
const BookConsultation = lazy(() => import('./pages/BookConsultation'));
const Admin = lazy(() => import('./pages/Admin'));
const Auth = lazy(() => import('./pages/Auth'));
const NotFound = lazy(() => import('./pages/NotFound'));
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import WhatsAppButton from './components/WhatsAppButton';
import TrackingScripts from './components/TrackingScripts';
import SkipToContent from './components/SkipToContent';
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

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-consultation" element={<BookConsultation />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
    </Suspense>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <AuthProvider>
          <BrowserRouter>
            <SkipToContent />
            <TrackingScripts />
            <AnimatedRoutes />
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
