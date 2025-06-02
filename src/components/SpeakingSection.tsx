import React, { useState } from 'react';
import { Mic, Calendar, Users, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <section className="py-20 bg-luxury-navy text-white">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Mic className="h-8 w-8 text-luxury-gold mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">
              {language.code === 'ar' ? "المحاضرات والخطابات" : "Speaking Engagements"}
            </h2>
          </div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            {language.code === 'ar'
              ? "شارك خبرتي وأفكاري في المؤتمرات والفعاليات الرائدة في صناعة الضيافة"
              : "Sharing expertise and insights at leading hospitality industry conferences and events"
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Available Topics */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-luxury-gold">
              {language.code === 'ar' ? "المواضيع المتاحة" : "Available Topics"}
            </h3>
            
            <div className="space-y-6">
              {speakingTopics.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 border-white/20 text-white hover:bg-white/15 transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div 
                        className="flex items-center justify-between mb-3"
                        onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                      >
                        <h4 className="text-lg font-bold text-luxury-gold">
                          {topic.title}
                        </h4>
                        <ChevronRight 
                          className={`h-5 w-5 transition-transform ${
                            expandedTopic === topic.id ? 'rotate-90' : ''
                          }`} 
                        />
                      </div>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {topic.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-luxury-gold" />
                          {topic.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-luxury-gold" />
                          {topic.audience}
                        </div>
                      </div>

                      {expandedTopic === topic.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-white/20 pt-4 mt-4"
                        >
                          <h5 className="font-semibold mb-2 text-luxury-gold">
                            {language.code === 'ar' ? "النقاط الرئيسية:" : "Key Points:"}
                          </h5>
                          <ul className="space-y-1 text-sm text-gray-300">
                            {topic.keyPoints.map((point, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-luxury-gold mr-2">•</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                          <Button 
                            className="mt-4 bg-luxury-gold hover:bg-yellow-600 text-luxury-navy"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleBookSpeaking(topic.id);
                            }}
                          >
                            {language.code === 'ar' ? "احجز هذا الموضوع" : "Book This Topic"}
                          </Button>
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past Engagements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-luxury-gold">
              {language.code === 'ar' ? "المحاضرات السابقة" : "Past Engagements"}
            </h3>
            
            <div className="space-y-6">
              {pastEngagements.map((engagement, index) => (
                <motion.div
                  key={engagement.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer">
                    <CardContent className="p-6">
                      <div 
                        className="flex items-center justify-between mb-2"
                        onClick={() => setExpandedEngagement(expandedEngagement === engagement.id ? null : engagement.id)}
                      >
                        <h4 className="text-lg font-bold">
                          {engagement.event}
                        </h4>
                        <ChevronRight 
                          className={`h-5 w-5 transition-transform ${
                            expandedEngagement === engagement.id ? 'rotate-90' : ''
                          }`} 
                        />
                      </div>
                      
                      <p className="text-luxury-gold mb-3">
                        {engagement.topic}
                      </p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {engagement.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {engagement.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {engagement.attendees} {language.code === 'ar' ? "حضور" : "attendees"}
                        </div>
                      </div>

                      {expandedEngagement === engagement.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="border-t border-white/20 pt-4 mt-4"
                        >
                          <h5 className="font-semibold mb-2 text-luxury-gold">
                            {language.code === 'ar' ? "أبرز النقاط:" : "Highlights:"}
                          </h5>
                          <ul className="space-y-1 text-sm text-gray-300">
                            {engagement.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-luxury-gold mr-2">•</span>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
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
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="bg-luxury-gold text-luxury-navy">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-bold mb-3">
                    {language.code === 'ar' ? "احجز محاضرة" : "Book a Speaking Engagement"}
                  </h4>
                  <p className="mb-4">
                    {language.code === 'ar'
                      ? "مهتم بدعوة إسلام للحديث في فعاليتك؟"
                      : "Interested in having Islam speak at your event?"
                    }
                  </p>
                  <Button 
                    className="bg-luxury-navy hover:bg-blue-900 text-white"
                    onClick={() => handleBookSpeaking()}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
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
