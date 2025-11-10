import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingSystem from '@/components/BookingSystem';
import { Calendar, Clock, Award, Target } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const BookConsultation = () => {
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
              className="max-w-4xl mx-auto"
            >
              {/* Header */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4"
                >
                  <Calendar className="h-8 w-8 text-primary" />
                </motion.div>
                <h1 className="text-4xl font-bold mb-4">Book a Consultation</h1>
                <p className="text-xl text-muted-foreground">
                  Get personalized guidance from an experienced General Manager
                </p>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <Clock className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose a time that works best for you. Video consultations available worldwide.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <Award className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Expert Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    20+ years of hospitality management experience across luxury properties.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <Target className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Tailored Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Custom strategies designed specifically for your property's unique challenges.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-card border border-border rounded-lg p-6"
                >
                  <Calendar className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Follow-Up Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Post-consultation email support to ensure successful implementation.
                  </p>
                </motion.div>
              </div>

              {/* Booking Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-card border border-border rounded-lg p-8"
              >
                <h2 className="text-2xl font-bold mb-6">Request a Consultation</h2>
                <BookingSystem />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookConsultation;
