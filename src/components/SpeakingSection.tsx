
import React from 'react';
import { Mic, Calendar, Users, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface SpeakingTopic {
  title: string;
  description: string;
  duration: string;
  audience: string;
}

interface PastEngagement {
  event: string;
  topic: string;
  date: string;
  location: string;
  attendees: string;
}

const SpeakingSection: React.FC = () => {
  const { language, isRTL } = useLanguage();

  const speakingTopics: SpeakingTopic[] = [
    {
      title: language.code === 'ar' 
        ? "استراتيجيات ما قبل الافتتاح للفنادق الفاخرة" 
        : "Pre-Opening Strategies for Luxury Hotels",
      description: language.code === 'ar'
        ? "دليل شامل لضمان افتتاح ناجح من التخطيط إلى التشغيل"
        : "Comprehensive guide to ensuring successful launches from planning to operations",
      duration: language.code === 'ar' ? "45-60 دقيقة" : "45-60 minutes",
      audience: language.code === 'ar' ? "المديرين التنفيذيين" : "C-Suite Executives"
    },
    {
      title: language.code === 'ar'
        ? "قيادة التحولات في صناعة الضيافة"
        : "Leading Transformations in Hospitality",
      description: language.code === 'ar'
        ? "كيفية إدارة التغيير المعقد مع الحفاظ على معايير الخدمة"
        : "How to manage complex change while maintaining service excellence",
      duration: language.code === 'ar' ? "30-45 دقيقة" : "30-45 minutes",
      audience: language.code === 'ar' ? "مديري العمليات" : "Operations Managers"
    },
    {
      title: language.code === 'ar'
        ? "الضيافة في منطقة الشرق الأوسط: الفرص والتحديات"
        : "MENA Hospitality: Opportunities and Challenges",
      description: language.code === 'ar'
        ? "رؤى حول السوق الفريد والاتجاهات الناشئة في المنطقة"
        : "Insights into the unique market dynamics and emerging trends in the region",
      duration: language.code === 'ar' ? "60-90 دقيقة" : "60-90 minutes",
      audience: language.code === 'ar' ? "المستثمرين والمطورين" : "Investors & Developers"
    }
  ];

  const pastEngagements: PastEngagement[] = [
    {
      event: language.code === 'ar' ? "قمة الضيافة العربية" : "Arab Hospitality Summit",
      topic: language.code === 'ar' ? "مستقبل الضيافة الفاخرة" : "Future of Luxury Hospitality",
      date: "2023",
      location: language.code === 'ar' ? "دبي، الإمارات" : "Dubai, UAE",
      attendees: "500+"
    },
    {
      event: language.code === 'ar' ? "مؤتمر إدارة الفنادق الدولي" : "International Hotel Management Conference",
      topic: language.code === 'ar' ? "استراتيجيات ما قبل الافتتاح" : "Pre-Opening Strategies",
      date: "2022",
      location: language.code === 'ar' ? "القاهرة، مصر" : "Cairo, Egypt",
      attendees: "300+"
    }
  ];

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
          {/* Speaking Topics */}
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
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/10 border-white/20 text-white">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-3 text-luxury-gold">
                        {topic.title}
                      </h4>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {topic.description}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-luxury-gold" />
                          {topic.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2 text-luxury-gold" />
                          {topic.audience}
                        </div>
                      </div>
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
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-white/5 border-white/10 text-white hover:bg-white/10 transition-colors">
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold mb-2">
                        {engagement.event}
                      </h4>
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
                  <Button className="bg-luxury-navy hover:bg-blue-900 text-white">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    {language.code === 'ar' ? "تواصل معنا" : "Get in Touch"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;
