
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, Award, User, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import WhatsAppButton from '@/components/WhatsAppButton';

const About = () => {
  const { language, t, isRTL } = useLanguage();
  
  return (
    <div className={`min-h-screen flex flex-col ${isRTL ? 'text-right' : ''}`}>
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Page Header */}
        <div className="bg-luxury-navy text-white py-20">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('about')}</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              {language.code === 'ar' 
                ? "قائد في مجال الضيافة مع شغف للتميز والتحول والابتكار."
                : "A hospitality leader with a passion for excellence, transformation, and innovation."
              }
            </p>
          </div>
        </div>
        
        {/* Bio Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className={`flex flex-col md:flex-row gap-12 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-1/3">
                <img alt={language.code === 'ar' ? "إسلام محروس" : "Islam Mahrous"} className="w-full rounded-lg shadow-lg h-auto object-cover" src="/lovable-uploads/2a742c4a-aaea-4c0f-ad38-ea2891228c62.jpg" />
              </div>
              
              <div className="md:w-2/3">
                <h2 className={`section-heading ${isRTL ? 'text-right' : ''}`}>{t('professionalBio')}</h2>
                
                <p className="text-luxury-gray mb-4 leading-relaxed">
                  {language.code === 'ar'
                    ? "كمدير تنفيذي متميز في مجال الضيافة مع أكثر من 30 عامًا من الخبرة القيادية التقدمية، تخصصت في عمليات ما قبل الافتتاح، وعمليات التجديد واسعة النطاق، والتميز التشغيلي. طوال مسيرتي المهنية، حافظت على سجل حافل في تحقيق نتائج مالية قياسية، ورفع مقاييس رضا الضيوف، وتعزيز العلاقات طويلة الأمد مع أصحاب المصلحة عبر الأسواق الدولية."
                    : "As an accomplished Hospitality Executive with over 30 years of progressive leadership experience, I have specialized in pre-opening operations, large-scale renovations, and operational excellence. Throughout my career, I have maintained a proven track record of driving record-breaking financial results, elevating guest satisfaction metrics, and fostering long-term stakeholder relationships across international markets."
                  }
                </p>
                
                <p className="text-luxury-gray mb-4 leading-relaxed">
                  {language.code === 'ar'
                    ? "لقد حصلت على اعتراف من خلال جوائز صناعية مرموقة للابتكار والتميز في خدمة العملاء والقيادة التشغيلية. تكمن خبرتي في قيادة فرق عالية الأداء خلال التحولات المعقدة مع الحفاظ على معايير خدمة استثنائية والربحية."
                    : "I have been recognized with prestigious industry awards for innovation, customer excellence, and operational leadership. My expertise lies in leading high-performing teams through complex transformations while maintaining exceptional service standards and profitability."
                  }
                </p>
                
                <p className="text-luxury-gray mb-4 leading-relaxed">
                  {language.code === 'ar'
                    ? "تمتد خبرتي الدولية عبر مصر والمملكة العربية السعودية وليبيا والإمارات العربية المتحدة، مما يمنحني منظورًا فريدًا حول اتجاهات الضيافة الإقليمية والفروق الثقافية التي تؤثر على تجارب الضيوف والاستراتيجيات التشغيلية."
                    : "My international experience spans across Egypt, Saudi Arabia, Libya, and the UAE, giving me a unique perspective on regional hospitality trends and cultural nuances that impact guest experiences and operational strategies."
                  }
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Briefcase className={`text-luxury-gold ${isRTL ? 'ml-3' : 'mr-3'} mt-1`} size={20} />
                    <div>
                      <h3 className="font-semibold text-luxury-navy mb-1">
                        {language.code === 'ar' ? "الخبرة المهنية" : "Professional Experience"}
                      </h3>
                      <p className="text-sm text-luxury-gray">
                        {language.code === 'ar'
                          ? "+30 عامًا في ضيافة الفاخرة، بما في ذلك أدوار مع ماريوت، وشيراتون، وفور بوينتس من شيراتون، وغيرها من العلامات التجارية المتميزة."
                          : "30+ years in luxury hospitality, including roles with Marriott, Sheraton, Four Points by Sheraton, and other premium brands."
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Award className={`text-luxury-gold ${isRTL ? 'ml-3' : 'mr-3'} mt-1`} size={20} />
                    <div>
                      <h3 className="font-semibold text-luxury-navy mb-1">
                        {language.code === 'ar' ? "التخصص" : "Expertise"}
                      </h3>
                      <p className="text-sm text-luxury-gray">
                        {language.code === 'ar'
                          ? "عمليات ما قبل الافتتاح، التجديدات، التميز التشغيلي، الإدارة المالية، قيادة الفريق."
                          : "Pre-opening operations, renovations, operational excellence, financial management, team leadership."
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <User className={`text-luxury-gold ${isRTL ? 'ml-3' : 'mr-3'} mt-1`} size={20} />
                    <div>
                      <h3 className="font-semibold text-luxury-navy mb-1">
                        {language.code === 'ar' ? "الصفات الشخصية" : "Personal Qualities"}
                      </h3>
                      <p className="text-sm text-luxury-gray">
                        {language.code === 'ar'
                          ? "محفِّز، داعم، ملتزم، متحمس، تحليلي، شغوف بالتميز."
                          : "Energizer, Supporter, Committed, Enthusiastic, Analytical, Passionate for excellence."
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <FileText className={`text-luxury-gold ${isRTL ? 'ml-3' : 'mr-3'} mt-1`} size={20} />
                    <div>
                      <h3 className="font-semibold text-luxury-navy mb-1">
                        {language.code === 'ar' ? "الخلفية التعليمية" : "Educational Background"}
                      </h3>
                      <p className="text-sm text-luxury-gray">
                        {language.code === 'ar'
                          ? "ماجستير إدارة الأعمال من الأكاديمية العربية للعلوم والتكنولوجيا، دبلوم في إدارة الغرف من معهد جليون."
                          : "MBA from Arab Academy for Science and Technology, Rooms Division Diploma from Glion Institute."
                        }
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-luxury-gold hover:bg-yellow-600 text-luxury-navy">
                    <a href="https://drive.google.com/file/d/1jyAbDkfP2rkgPH4148TMWLmF2uzhw0Jr/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
                      {t('downloadCV')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className={`section-heading text-center mb-12 ${isRTL ? 'text-center' : ''}`}>
              {language.code === 'ar' ? "فلسفة القيادة" : "Leadership Philosophy"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow border-t-2 border-luxury-gold">
                <h3 className="font-bold text-luxury-navy mb-3">
                  {language.code === 'ar' ? "التميز التشغيلي" : "Operational Excellence"}
                </h3>
                <p className="text-luxury-gray text-sm">
                  {language.code === 'ar' 
                    ? "تبسيط العمليات لزيادة الكفاءة مع الحفاظ على أعلى معايير الجودة في جميع جوانب عمليات الضيافة."
                    : "Streamlining processes to maximize efficiency while maintaining the highest quality standards in all aspects of hospitality operations."
                  }
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border-t-2 border-luxury-gold">
                <h3 className="font-bold text-luxury-navy mb-3">
                  {language.code === 'ar' ? "تجربة الضيوف" : "Guest Experience"}
                </h3>
                <p className="text-luxury-gray text-sm">
                  {language.code === 'ar'
                    ? "خلق تجارب مميزة وشخصية تتجاوز التوقعات وتعزز ولاء الضيوف على المدى الطويل."
                    : "Creating memorable, personalized experiences that exceed expectations and foster long-term guest loyalty."
                  }
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border-t-2 border-luxury-gold">
                <h3 className="font-bold text-luxury-navy mb-3">
                  {language.code === 'ar' ? "تطوير المواهب" : "Talent Development"}
                </h3>
                <p className="text-luxury-gray text-sm">
                  {language.code === 'ar'
                    ? "إرشاد وتمكين أعضاء الفريق للوصول إلى كامل إمكاناتهم من خلال التدريب والتوجيه وفرص النمو."
                    : "Mentoring and empowering team members to reach their full potential through training, guidance, and opportunities for growth."
                  }
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border-t-2 border-luxury-gold">
                <h3 className="font-bold text-luxury-navy mb-3">
                  {language.code === 'ar' ? "الابتكار والاستدامة" : "Innovation & Sustainability"}
                </h3>
                <p className="text-luxury-gray text-sm">
                  {language.code === 'ar'
                    ? "تبني التقنيات الجديدة والممارسات المستدامة لتعزيز الكفاءة التشغيلية وتقليل التأثير البيئي."
                    : "Embracing new technologies and sustainable practices to enhance operational efficiency and reduce environmental impact."
                  }
                </p>
              </div>
            </div>
            
            <div className="mt-16 bg-luxury-navy text-white p-8 rounded-lg">
              <blockquote className="text-xl md:text-2xl italic font-light text-center">
                {language.code === 'ar'
                  ? '"التميز في الضيافة ليس مجرد خدمة؛ إنه استراتيجية ورؤية واتصال عاطفي."'
                  : '"Excellence in hospitality is not just service; it\'s strategy, vision, and emotional connection."'
                }
                <footer className="mt-4 text-luxury-gold">— Islam Mahrous</footer>
              </blockquote>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className={`section-heading text-center mb-12 ${isRTL ? 'text-center' : ''}`}>
              {language.code === 'ar' ? "المهارات والخبرات الرئيسية" : "Key Skills & Expertise"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                language.code === 'ar' ? "نمو الإيرادات" : "Revenue Growth",
                language.code === 'ar' ? "إدارة الميزانيات" : "Managing Budgets",
                language.code === 'ar' ? "الكفاءة التشغيلية" : "Operational Efficiency",
                language.code === 'ar' ? "العمليات التشغيلية" : "Operational Processes",
                language.code === 'ar' ? "تعزيز تجارب العملاء" : "Enhance Customer Experiences",
                language.code === 'ar' ? "الإدارة المالية" : "Financial Management",
                language.code === 'ar' ? "التفكير الاستراتيجي" : "Strategic Thinking",
                language.code === 'ar' ? "قيادة الفريق" : "Team Leadership",
                language.code === 'ar' ? "التكيف" : "Adaptability",
                language.code === 'ar' ? "تقييم الأداء" : "Performance Evaluation",
                language.code === 'ar' ? "تحسين الأداء" : "Performance Improvement",
                language.code === 'ar' ? "المؤسسة المستدامة" : "Sustainable Organization",
                language.code === 'ar' ? "معنويات الفريق الإيجابية" : "Positive Team Morale",
                language.code === 'ar' ? "استراتيجيات الأعمال" : "Business Strategies",
                language.code === 'ar' ? "تطوير خطط الطوارئ" : "Develop Contingency Plans"
              ].map((skill, index) => (
                <div key={index} className={`flex items-center p-3 bg-gray-50 rounded-md ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                  <span className="text-luxury-navy">{skill}</span>
                </div>
              ))}
            </div>
            
            <h3 className={`font-bold text-luxury-navy mt-10 mb-4 ${isRTL ? 'text-right' : ''}`}>
              {language.code === 'ar' ? "المهارات التقنية" : "Technical Skills"}
            </h3>
            <div className={`flex flex-wrap gap-3 ${isRTL ? 'justify-end' : ''}`}>
              {["HIS", "Fidelio", "Opera", "MS Office"].map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-luxury-navy text-white rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className={`section-heading text-center mb-12 ${isRTL ? 'text-center' : ''}`}>
              {language.code === 'ar' ? "التعليم والشهادات" : "Education & Certifications"}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className={`font-bold text-luxury-navy mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {language.code === 'ar' ? "المؤهلات الأكاديمية" : "Academic Qualifications"}
                </h3>
                <ul className="space-y-4">
                  <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-2 h-2 bg-luxury-gold rounded-full mt-2 ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                    <div>
                      <h4 className="font-medium">
                        {language.code === 'ar' ? "ماجستير إدارة الأعمال" : "MBA"}
                      </h4>
                      <p className="text-sm text-luxury-gray">
                        {language.code === 'ar' 
                          ? "الأكاديمية العربية للعلوم والتكنولوجيا (المعدل التراكمي: 3.56)"
                          : "Arab Academy for Science and Technology University (GPA: 3.56)"
                        }
                      </p>
                    </div>
                  </li>
                  <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-2 h-2 bg-luxury-gold rounded-full mt-2 ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                    <div>
                      <h4 className="font-medium">
                        {language.code === 'ar' ? "بكالوريوس" : "Bachelor's Degree"}
                      </h4>
                      <p className="text-sm text-luxury-gray">
                        {language.code === 'ar'
                          ? "كلية السياحة والفنادق، الإسكندرية، مصر"
                          : "Faculty of Tourism & Hotels, Alexandria, Egypt"
                        }
                      </p>
                    </div>
                  </li>
                  <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-2 h-2 bg-luxury-gold rounded-full mt-2 ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                    <div>
                      <h4 className="font-medium">
                        {language.code === 'ar' ? "دبلوم قسم الغرف" : "Rooms Division Diploma"}
                      </h4>
                      <p className="text-sm text-luxury-gray">
                        {language.code === 'ar'
                          ? "معهد جليون، سويسرا"
                          : "Glion Institute, Switzerland"
                        }
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className={`font-bold text-luxury-navy mb-4 ${isRTL ? 'text-right' : ''}`}>
                  {language.code === 'ar' ? "الشهادات المهنية" : "Professional Certifications"}
                </h3>
                <ul className="space-y-4">
                  <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-2 h-2 bg-luxury-gold rounded-full mt-2 ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                    <div>
                      <h4 className="font-medium">
                        {language.code === 'ar' ? "شهادة الحزام الأسود سيكس سيجما" : "Six Sigma Black Belt Certification"}
                      </h4>
                    </div>
                  </li>
                  <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-2 h-2 bg-luxury-gold rounded-full mt-2 ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                    <div>
                      <h4 className="font-medium">
                        {language.code === 'ar' ? "شهادة مدير ومدرب الابتكار التشغيلي" : "Operational Innovation Director & Coach Certification"}
                      </h4>
                    </div>
                  </li>
                  <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-2 h-2 bg-luxury-gold rounded-full mt-2 ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                    <div>
                      <h4 className="font-medium">
                        {language.code === 'ar' ? "شهادة تدريب الحرف CTC" : "CTC Craft Training Certificate"}
                      </h4>
                    </div>
                  </li>
                  <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-2 h-2 bg-luxury-gold rounded-full mt-2 ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                    <div>
                      <h4 className="font-medium">
                        {language.code === 'ar' ? "شهادة إدارة العائد" : "Yield Management Certification"}
                      </h4>
                    </div>
                  </li>
                  <li className={`flex items-start ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-2 h-2 bg-luxury-gold rounded-full mt-2 ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                    <div>
                      <h4 className="font-medium">
                        {language.code === 'ar' ? "تدريب القيادة للذكاء العاطفي" : "Emotional Intelligence Leadership Training"}
                      </h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className={`font-bold text-luxury-navy mb-4 ${isRTL ? 'text-center' : ''}`}>
                {language.code === 'ar' ? "اللغات" : "Languages"}
              </h3>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="font-medium">
                    {language.code === 'ar' ? "العربية" : "Arabic"}
                  </div>
                  <p className="text-sm text-luxury-gray">
                    {language.code === 'ar' ? "اللغة الأم" : "Native Proficiency"}
                  </p>
                </div>
                <div className="text-center">
                  <div className="font-medium">
                    {language.code === 'ar' ? "الإنجليزية" : "English"}
                  </div>
                  <p className="text-sm text-luxury-gray">
                    {language.code === 'ar' ? "طليق" : "Fluent"}
                  </p>
                </div>
                <div className="text-center">
                  <div className="font-medium">
                    {language.code === 'ar' ? "الألمانية" : "German"}
                  </div>
                  <p className="text-sm text-luxury-gray">
                    {language.code === 'ar' ? "متوسط" : "Intermediate"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;
