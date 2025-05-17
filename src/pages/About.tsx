
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Briefcase, Award, User, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Page Header */}
        <div className="bg-luxury-navy text-white py-20">
          <div className="container mx-auto px-4 md:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              A hospitality leader with a passion for excellence, transformation, and innovation.
            </p>
          </div>
        </div>
        
        {/* Bio Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" 
                  alt="Islam Mahrous" 
                  className="w-full rounded-lg shadow-lg h-auto object-cover"
                />
              </div>
              
              <div className="md:w-2/3">
                <h2 className="section-heading">Professional Bio</h2>
                
                <p className="text-luxury-gray mb-4 leading-relaxed">
                  As an accomplished Hospitality Executive with over 30 years of progressive leadership experience, I have specialized in pre-opening operations, large-scale renovations, and operational excellence. Throughout my career, I have maintained a proven track record of driving record-breaking financial results, elevating guest satisfaction metrics, and fostering long-term stakeholder relationships across international markets.
                </p>
                
                <p className="text-luxury-gray mb-4 leading-relaxed">
                  I have been recognized with prestigious industry awards for innovation, customer excellence, and operational leadership. My expertise lies in leading high-performing teams through complex transformations while maintaining exceptional service standards and profitability.
                </p>
                
                <p className="text-luxury-gray mb-4 leading-relaxed">
                  My international experience spans across Egypt, Saudi Arabia, Libya, and the UAE, giving me a unique perspective on regional hospitality trends and cultural nuances that impact guest experiences and operational strategies.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start">
                    <Briefcase className="text-luxury-gold mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-luxury-navy mb-1">Professional Experience</h3>
                      <p className="text-sm text-luxury-gray">
                        30+ years in luxury hospitality, including roles with Marriott, Sheraton, Four Points by Sheraton, and other premium brands.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="text-luxury-gold mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-luxury-navy mb-1">Expertise</h3>
                      <p className="text-sm text-luxury-gray">
                        Pre-opening operations, renovations, operational excellence, financial management, team leadership.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <User className="text-luxury-gold mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-luxury-navy mb-1">Personal Qualities</h3>
                      <p className="text-sm text-luxury-gray">
                        Energizer, Supporter, Committed, Enthusiastic, Analytical, Passionate for excellence.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FileText className="text-luxury-gold mr-3 mt-1" size={20} />
                    <div>
                      <h3 className="font-semibold text-luxury-navy mb-1">Educational Background</h3>
                      <p className="text-sm text-luxury-gray">
                        MBA from Arab Academy for Science and Technology, Rooms Division Diploma from Glion Institute.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Button className="bg-luxury-gold hover:bg-yellow-600 text-luxury-navy">
                    <a href="/Islam-Mahrous-CV.pdf" download>Download Full CV</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Philosophy Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="section-heading text-center mb-12">Leadership Philosophy</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow border-t-2 border-luxury-gold">
                <h3 className="font-bold text-luxury-navy mb-3">Operational Excellence</h3>
                <p className="text-luxury-gray text-sm">
                  Streamlining processes to maximize efficiency while maintaining the highest quality standards in all aspects of hospitality operations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border-t-2 border-luxury-gold">
                <h3 className="font-bold text-luxury-navy mb-3">Guest Experience</h3>
                <p className="text-luxury-gray text-sm">
                  Creating memorable, personalized experiences that exceed expectations and foster long-term guest loyalty.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border-t-2 border-luxury-gold">
                <h3 className="font-bold text-luxury-navy mb-3">Talent Development</h3>
                <p className="text-luxury-gray text-sm">
                  Mentoring and empowering team members to reach their full potential through training, guidance, and opportunities for growth.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow border-t-2 border-luxury-gold">
                <h3 className="font-bold text-luxury-navy mb-3">Innovation & Sustainability</h3>
                <p className="text-luxury-gray text-sm">
                  Embracing new technologies and sustainable practices to enhance operational efficiency and reduce environmental impact.
                </p>
              </div>
            </div>
            
            <div className="mt-16 bg-luxury-navy text-white p-8 rounded-lg">
              <blockquote className="text-xl md:text-2xl italic font-light text-center">
                "Excellence in hospitality is not just service; it's strategy, vision, and emotional connection."
                <footer className="mt-4 text-luxury-gold">— Islam Mahrous</footer>
              </blockquote>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-8">
            <h2 className="section-heading text-center mb-12">Key Skills & Expertise</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Revenue Growth", "Managing Budgets", "Operational Efficiency",
                "Operational Processes", "Enhance Customer Experiences", "Financial Management",
                "Strategic Thinking", "Team Leadership", "Adaptability",
                "Performance Evaluation", "Performance Improvement", "Sustainable Organization",
                "Positive Team Morale", "Business Strategies", "Develop Contingency Plans"
              ].map((skill, index) => (
                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-md">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                  <span className="text-luxury-navy">{skill}</span>
                </div>
              ))}
            </div>
            
            <h3 className="font-bold text-luxury-navy mt-10 mb-4">Technical Skills</h3>
            <div className="flex flex-wrap gap-3">
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
            <h2 className="section-heading text-center mb-12">Education & Certifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-luxury-navy mb-4">Academic Qualifications</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-medium">MBA</h4>
                      <p className="text-sm text-luxury-gray">Arab Academy for Science and Technology University (GPA: 3.56)</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-medium">Bachelor's Degree</h4>
                      <p className="text-sm text-luxury-gray">Faculty of Tourism & Hotels, Alexandria, Egypt</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-medium">Rooms Division Diploma</h4>
                      <p className="text-sm text-luxury-gray">Glion Institute, Switzerland</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-bold text-luxury-navy mb-4">Professional Certifications</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-medium">Six Sigma Black Belt Certification</h4>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-medium">Operational Innovation Director & Coach Certification</h4>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-medium">CTC Craft Training Certificate</h4>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-medium">Yield Management Certification</h4>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 mr-3"></div>
                    <div>
                      <h4 className="font-medium">Emotional Intelligence Leadership Training</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <h3 className="font-bold text-luxury-navy mb-4">Languages</h3>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="font-medium">Arabic</div>
                  <p className="text-sm text-luxury-gray">Native Proficiency</p>
                </div>
                <div className="text-center">
                  <div className="font-medium">English</div>
                  <p className="text-sm text-luxury-gray">Fluent</p>
                </div>
                <div className="text-center">
                  <div className="font-medium">German</div>
                  <p className="text-sm text-luxury-gray">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
