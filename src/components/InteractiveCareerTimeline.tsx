import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, MapPin, Calendar, Award, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
  type: 'executive' | 'management' | 'consultant';
  duration: string;
}

const InteractiveCareerTimeline: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [focusedItem, setFocusedItem] = useState<string | null>(null);
  const { language } = useLanguage();
  const timelineRef = useRef<HTMLDivElement>(null);

  const timelineData: TimelineEvent[] = [
    {
      id: '2024',
      year: '2024',
      title: 'Regional General Manager',
      company: 'Luxury Hotel Group',
      location: 'Dubai, UAE',
      duration: '2024 - Present',
      description: 'Leading multi-property operations across the MENA region, overseeing 15+ luxury properties with combined revenue of $500M+',
      achievements: [
        'Achieved 25% revenue growth across portfolio',
        'Successfully launched 3 new luxury properties',
        'Implemented sustainability initiatives reducing costs by 15%',
        'Led digital transformation improving guest satisfaction by 30%'
      ],
      skills: ['Strategic Leadership', 'Revenue Management', 'Digital Transformation', 'Sustainability'],
      type: 'executive'
    },
    {
      id: '2020',
      year: '2020',
      title: 'Hotel General Manager',
      company: 'Five-Star Resort & Spa',
      location: 'Marrakech, Morocco',
      duration: '2020 - 2024',
      description: 'Managed flagship 300-room luxury resort, leading 450+ team members and driving exceptional guest experiences',
      achievements: [
        'Increased RevPAR by 35% over 4 years',
        'Achieved highest guest satisfaction scores in company history',
        'Led successful property renovation project worth $50M',
        'Reduced operational costs by 20% while maintaining service standards'
      ],
      skills: ['Operations Management', 'Team Leadership', 'Project Management', 'Guest Relations'],
      type: 'executive'
    },
    {
      id: '2017',
      year: '2017',
      title: 'Assistant General Manager',
      company: 'International Hotel Chain',
      location: 'Cairo, Egypt',
      duration: '2017 - 2020',
      description: 'Supported general management of 250-room business hotel, focusing on operational excellence and team development',
      achievements: [
        'Improved employee satisfaction scores by 40%',
        'Implemented new training programs reducing turnover by 25%',
        'Led F&B renovation increasing restaurant revenue by 45%',
        'Established quality standards improving TripAdvisor ranking to #1'
      ],
      skills: ['Staff Development', 'Quality Management', 'F&B Operations', 'Performance Optimization'],
      type: 'management'
    },
    {
      id: '2014',
      year: '2014',
      title: 'Hospitality Consultant',
      company: 'Independent Practice',
      location: 'Various Locations',
      duration: '2014 - 2017',
      description: 'Provided strategic consulting services for hotel openings, renovations, and operational improvements across MENA region',
      achievements: [
        'Consulted on 12 successful hotel pre-openings',
        'Developed operational procedures for 8 hotel renovations',
        'Created training programs adopted by 25+ properties',
        'Achieved average 30% improvement in operational efficiency for clients'
      ],
      skills: ['Strategic Consulting', 'Pre-Opening', 'Process Development', 'Training Design'],
      type: 'consultant'
    }
  ];

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'executive':
        return 'bg-luxury-gold text-white';
      case 'management':
        return 'bg-luxury-navy text-white';
      case 'consultant':
        return 'bg-luxury-emerald text-white';
      default:
        return 'bg-secondary';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'executive':
        return <Award className="h-4 w-4" />;
      case 'management':
        return <Users className="h-4 w-4" />;
      case 'consultant':
        return <MapPin className="h-4 w-4" />;
      default:
        return <Calendar className="h-4 w-4" />;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFocusedItem(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const items = timelineRef.current?.querySelectorAll('[data-timeline-item]');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
            {language.code === 'ar' ? 'الخط الزمني المهني' : 'Career Timeline'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language.code === 'ar' 
              ? 'رحلة من الخبرة والإنجازات في صناعة الضيافة عبر الشرق الأوسط وشمال إفريقيا'
              : 'A journey of experience and achievements in hospitality across the MENA region'
            }
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />
          
          {timelineData.map((event, index) => (
            <motion.div
              key={event.id}
              data-timeline-item
              id={event.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-8 md:mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full border-4 border-background flex items-center justify-center z-10 ${
                focusedItem === event.id ? 'bg-primary scale-110' : 'bg-muted'
              } transition-all duration-300`}>
                <span className="text-xs font-bold text-primary-foreground">
                  {event.year.slice(-2)}
                </span>
              </div>

              {/* Content Card */}
              <Card className={`ml-12 md:ml-0 ${
                index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
              } hover:shadow-lg transition-all duration-300`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge className={getTypeColor(event.type)}>
                          {getTypeIcon(event.type)}
                          <span className="ml-1 capitalize">{event.type}</span>
                        </Badge>
                        <span className="text-sm text-muted-foreground">{event.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                      <p className="text-primary font-medium mb-1">{event.company}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExpanded(event.id)}
                      className="shrink-0"
                    >
                      {expandedItems.has(event.id) ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  <p className="text-muted-foreground mb-4">{event.description}</p>

                  <AnimatePresence>
                    {expandedItems.has(event.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        {/* Achievements */}
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Award className="h-4 w-4 text-primary" />
                            {language.code === 'ar' ? 'الإنجازات الرئيسية' : 'Key Achievements'}
                          </h4>
                          <ul className="space-y-1">
                            {event.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-muted-foreground pl-4 relative">
                                <span className="absolute left-0 top-2 w-1 h-1 bg-primary rounded-full" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Skills */}
                        <div>
                          <h4 className="font-semibold mb-2">
                            {language.code === 'ar' ? 'المهارات المطورة' : 'Skills Developed'}
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {event.skills.map((skill, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveCareerTimeline;