
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  type: 'position' | 'achievement' | 'milestone';
}

interface InteractiveTimelineProps {
  events: TimelineEvent[];
  className?: string;
}

const InteractiveTimeline: React.FC<InteractiveTimelineProps> = ({ events, className = '' }) => {
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const { language, isRTL } = useLanguage();

  const getIcon = (type: TimelineEvent['type']) => {
    switch (type) {
      case 'position': return <Building className="w-5 h-5" />;
      case 'achievement': return <Award className="w-5 h-5" />;
      case 'milestone': return <Calendar className="w-5 h-5" />;
      default: return <Calendar className="w-5 h-5" />;
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* Timeline line */}
      <div className={`absolute top-0 bottom-0 w-0.5 bg-luxury-gold/30 ${isRTL ? 'right-6' : 'left-6'}`} />
      
      <div className="space-y-8">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className={`relative flex items-start gap-6 ${isRTL ? 'flex-row-reverse' : ''}`}
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredEvent(event.id)}
            onMouseLeave={() => setHoveredEvent(null)}
          >
            {/* Timeline node */}
            <motion.div
              className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 border-4 border-luxury-gold shadow-lg"
              whileHover={{ scale: 1.1 }}
              animate={{
                backgroundColor: hoveredEvent === event.id ? '#D4AF37' : undefined,
                color: hoveredEvent === event.id ? '#FFFFFF' : undefined
              }}
              transition={{ duration: 0.2 }}
            >
              {getIcon(event.type)}
            </motion.div>

            {/* Content card */}
            <motion.div
              className="flex-1 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              animate={{
                borderColor: hoveredEvent === event.id ? '#D4AF37' : undefined
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {event.title}
                  </h3>
                  <p className="text-luxury-gold font-medium mb-1">{event.company}</p>
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-1" />
                    {event.location}
                  </div>
                </div>
                <span className="text-lg font-bold text-luxury-gold bg-luxury-gold/10 px-3 py-1 rounded-full">
                  {event.year}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {event.description}
              </p>

              {/* Achievements */}
              {event.achievements.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredEvent === event.id ? 1 : 0.7,
                    height: hoveredEvent === event.id ? 'auto' : 'auto'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                    <Award className="w-4 h-4 mr-2 text-luxury-gold" />
                    {language.code === 'ar' ? 'الإنجازات الرئيسية' : 'Key Achievements'}
                  </h4>
                  <ul className="space-y-1">
                    {event.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-luxury-gold mr-2 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTimeline;
