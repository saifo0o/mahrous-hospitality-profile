import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HospitalityCalculators from '@/components/HospitalityCalculators';
import { useLanguage } from '@/context/LanguageContext';

const Calculators = () => {
  const { isRTL } = useLanguage();

  return (
    <div className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      <Navbar />
      
      <main className="pt-20">
        <div className="section-padding">
          <div className="container-padding">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <HospitalityCalculators />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Calculators;
