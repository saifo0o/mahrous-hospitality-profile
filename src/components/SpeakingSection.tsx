import React, { useState } from 'react';
import { Mic, Calendar, Users, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SpeakingEngagementModal from './SpeakingEngagementModal';

interface SpeakingTopic {
  id: string;
  title: string;
  description: string;
  duration: string;
  audience: string;
  keyPoints: string[];
}

interface PastEngagement {
  id: string;
  event: string;
  topic: string;
  date: string;
  location: string;
  attendees: string;
  highlights: string[];
}

const SpeakingSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [expandedTopic, setExpandedTopic] = useState<string | null>(null);
  const [expandedEngagement, setExpandedEngagement] = useState<string | null>(null);

  const speakingTopics: SpeakingTopic[] = [
    {
      id: 'pre-opening',
      title: language.code === 'ar' 
        ? "استراتيجيات ما قبل الافتتاح للفنادق الفاخرة" 
        : "Pre-Opening Strategies for Luxury Hotels",
      description: language.code === 'ar'
        ? "دليل شامل لضمان افتتاح ناجح من التخطيط إلى التشغيل"
        : "Comprehensive guide to ensuring successful launches from planning to operations",
      duration: language.code === 'ar' ? "45-60 دقيقة" : "45-60 minutes",
      audience: language.code === 'ar' ? "المديرين التنفيذيين" : "C-Suite Executives",
      keyPoints: language.code === 'ar' 
        ? [
            "استراتيجيات التخطيط المسبق",
            "إدارة الفرق متعددة الثقافات",
            "ضمان الجودة والمعايير",
            "إدارة الميزانية والجدول الزمني"
          ]
        : [
            "Strategic pre-planning methodologies",
            "Multi-cultural team management",
            "Quality assurance and standards",
            "Budget and timeline management"
          ]
    },
    {
      id: 'transformations',
      title: language.code === 'ar'
        ? "قيادة التحولات في صناعة الضيافة"
        : "Leading Transformations in Hospitality",
      description: language.code === 'ar'
        ? "كيفية إدارة التغيير المعقد مع الحفاظ على معايير الخدمة"
        : "How to manage complex change while maintaining service excellence",
      duration: language.code === 'ar' ? "30-45 دقيقة" : "30-45 minutes",
      audience: language.code === 'ar' ? "مديري العمليات" : "Operations Managers",
      keyPoints: language.code === 'ar'
        ? [
            "إدارة التغيير التنظيمي",
            "الحفاظ على رضا الضيوف أثناء التحول",
            "تطوير المهارات القيادية",
            "قياس نجاح التحول"
          ]
        : [
            "Organizational change management",
            "Maintaining guest satisfaction during transformation",
            "Leadership skills development",
            "Measuring transformation success"
          ]
    },
    {
      id: 'mena-hospitality',
      title: language.code === 'ar'
        ? "الضيافة في منطقة الشرق الأوسط: الفرص والتحديات"
        : "MENA Hospitality: Opportunities and Challenges",
      description: language.code === 'ar'
        ? "رؤى حول السوق الفريد والاتجاهات الناشئة في المنطقة"
        : "Insights into the unique market dynamics and emerging trends in the region",
      duration: language.code === 'ar' ? "60-90 دقيقة" : "60-90 minutes",
      audience: language.code === 'ar' ? "المستثمرين والمطورين" : "Investors & Developers",
      keyPoints: language.code === 'ar'
        ? [
            "تحليل السوق الإقليمي",
            "الاتجاهات الاستثمارية",
            "التحديات الثقافية والتنظيمية",
            "الفرص المستقبلية"
          ]
        : [
            "Regional market analysis",
            "Investment trends and opportunities",
            "Cultural and regulatory challenges",
            "Future growth prospects"
          ]
    }
  ];

  const pastEngagements: PastEngagement[] = [
    {
      id: '1',
      event: language.code === 'ar' ? "قمة الضيافة العربية" : "Arab Hospitality Summit",
      topic: language.code === 'ar' ? "مستقبل الضيافة الفاخرة" : "Future of Luxury Hospitality",
      date: "2023",
      location: language.code === 'ar' ? "دبي، الإمارات" : "Dubai, UAE",
      attendees: "500+",
      highlights: language.code === 'ar'
        ? [
            "جلسة تفاعلية مع كبار المديرين التنفيذيين",
            "عرض حالة دراسية لمشروع ناجح",
            "نقاش مائدة مستديرة حول مستقبل الصناعة"
          ]
        : [
            "Interactive session with top executives",
            "Case study presentation of successful project",
            "Panel discussion on industry future"
          ]
    },
    {
      id: '2',
      event: language.code === 'ar' ? "مؤتمر إدارة الفنادق الدولي" : "International Hotel Management Conference",
      topic: language.code === 'ar' ? "استراتيجيات ما قبل الافتتاح" : "Pre-Opening Strategies",
      date: "2022",
      location: language.code === 'ar' ? "القاهرة، مصر" : "Cairo, Egypt",
      attendees: "300+",
      highlights: language.code === 'ar'
        ? [
            "ورشة عمل تطبيقية لمدة يوم كامل",
            "تدريب عملي على أدوات إدارة المشاريع",
            "جلسة أسئلة وأجوبة مفتوحة"
          ]
        : [
            "Full-day practical workshop",
            "Hands-on project management tools training",
            "Open Q&A session"
          ]
    }
  ];

  const handleBookSpeaking = (topicId?: string) => {
    setSelectedTopic(topicId || '');
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 md:py-28 bg-primary text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-flex items-center gap-3 mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-accent/80">
            <span className="inline-block w-[22px] h-px bg-accent" />
            {language.code === 'ar' ? "المحاضرات العامة والفعاليات" : "Keynotes & Public Speaking"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal font-playfair text-white">
            {language.code === 'ar' ? "المحاضرات والخطابات" : "Speaking Engagements"}
          </h2>
          <div className="w-16 h-px bg-accent mx-auto mt-6 mb-6" />
          <p className="text-luxury-parchment/80 mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {language.code === 'ar'
              ? "مشاركة الرؤى الاستراتيجية والخبرات العملية في المؤتمرات والفعاليات القيادية بقطاع الضيافة."
              : "Sharing strategic insights and operational expertise at premier hospitality industry conferences and leadership events."
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Available Topics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl md:text-3xl font-normal font-playfair mb-6 text-accent">
              {language.code === 'ar' ? "المواضيع المتاحة" : "Available Topics"}
            </h3>
            
            <div className="space-y-6">
              {speakingTopics.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card 
                    className="bg-white/5 border border-white/10 hover:border-accent/40 text-white hover:bg-white/10 transition-colors duration-300 cursor-pointer overflow-hidden group"
                    onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-semibold text-accent transition-colors group-hover:text-accent/90">
                          {topic.title}
                        </h4>
                        <ChevronRight 
                          className={`h-5 w-5 text-white/50 transition-transform duration-300 ${
                            expandedTopic === topic.id ? 'rotate-90' : isRTL ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                      
                      <p className="text-luxury-parchment/70 mb-4 leading-relaxed text-sm md:text-base">
                        {topic.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-xs md:text-sm text-luxury-parchment/60 mb-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 me-2 text-accent" />
                          <span>{topic.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 me-2 text-accent" />
                          <span>{topic.audience}</span>
                        </div>
                      </div>

                      <AnimatePresence>
                        {expandedTopic === topic.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-white/10 pt-4 mt-4">
                              <h5 className="font-semibold mb-2 text-accent text-sm">
                                {language.code === 'ar' ? "النقاط الرئيسية:" : "Key Points:"}
                              </h5>
                              <ul className="space-y-2 text-sm text-luxury-parchment/70">
                                {topic.keyPoints.map((point, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-accent me-2.5 select-none">•</span>
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                              <Button 
                                className="mt-5 bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm transition-colors duration-300 font-medium"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleBookSpeaking(topic.id);
                                }}
                              >
                                {language.code === 'ar' ? "احجز هذا الموضوع" : "Book This Topic"}
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past Engagements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-2xl md:text-3xl font-normal font-playfair mb-6 text-accent">
              {language.code === 'ar' ? "المحاضرات السابقة" : "Past Engagements"}
            </h3>
            
            <div className="space-y-6">
              {pastEngagements.map((engagement, index) => (
                <motion.div
                  key={engagement.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card 
                    className="bg-white/5 border border-white/10 hover:border-accent/40 text-white hover:bg-white/10 transition-colors duration-300 cursor-pointer overflow-hidden group"
                    onClick={() => setExpandedEngagement(expandedEngagement === engagement.id ? null : engagement.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-accent">
                          {engagement.event}
                        </h4>
                        <ChevronRight 
                          className={`h-5 w-5 text-white/50 transition-transform duration-300 ${
                            expandedEngagement === engagement.id ? 'rotate-90' : isRTL ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                      
                      <p className="text-accent mb-3 text-sm font-medium">
                        {engagement.topic}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-xs md:text-sm text-luxury-parchment/60 mb-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 me-2 text-accent" />
                          <span>{engagement.date}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 me-2 text-accent" />
                          <span>{engagement.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 me-2 text-accent" />
                          <span>{engagement.attendees} {language.code === 'ar' ? "حضور" : "attendees"}</span>
                        </div>
                      </div>

                      <AnimatePresence>
                        {expandedEngagement === engagement.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="border-t border-white/10 pt-4 mt-4">
                              <h5 className="font-semibold mb-2 text-accent text-sm">
                                {language.code === 'ar' ? "أبرز النقاط:" : "Highlights:"}
                              </h5>
                              <ul className="space-y-2 text-sm text-luxury-parchment/70">
                                {engagement.highlights.map((highlight, idx) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="text-accent me-2.5 select-none">•</span>
                                    <span>{highlight}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="bg-white/5 border border-accent/20 text-white overflow-hidden relative">
                <CardContent className="p-8 text-center relative z-10">
                  <h4 className="text-xl md:text-2xl font-normal font-playfair mb-3 text-accent">
                    {language.code === 'ar' ? "احجز محاضرة" : "Book a Speaking Engagement"}
                  </h4>
                  <p className="mb-6 text-luxury-parchment/70 max-w-md mx-auto text-sm md:text-base leading-relaxed">
                    {language.code === 'ar'
                      ? "هل ترغب في استضافة إسلام للتحدث في مؤتمرك أو فعاليتك القادمة؟ دعنا نخطط لمحاضرة استثنائية."
                      : "Interested in having Islam speak at your upcoming conference or corporate event? Let's curate an exceptional presentation."
                    }
                  </p>
                  <Button 
                    className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-sm transition-colors duration-300 font-medium"
                    onClick={() => handleBookSpeaking()}
                  >
                    <ExternalLink className="h-4 w-4 me-2" />
                    {language.code === 'ar' ? "تواصل معنا" : "Get in Touch"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <SpeakingEngagementModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTopic={selectedTopic}
      />
    </section>
  );
};

export default SpeakingSection;
