
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading inline-block">Get In Touch</h2>
          <p className="text-luxury-gray mt-4 max-w-2xl mx-auto">
            Interested in discussing hospitality leadership opportunities, consulting projects, or just want to connect? 
            Reach out through the form below or my contact details.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  required
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="w-full bg-luxury-navy hover:bg-blue-900">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0">
            <div className="bg-gray-50 p-8 rounded-lg h-full">
              <h3 className="text-xl font-bold text-luxury-navy mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={22} className="text-luxury-gold mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-luxury-navy">Location</h4>
                    <p className="text-luxury-gray">Jubail, Kingdom of Saudi Arabia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={22} className="text-luxury-gold mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-luxury-navy">Phone</h4>
                    <p className="text-luxury-gray">KSA: +966 501 721 876</p>
                    <p className="text-luxury-gray">Egypt: +20 109 555 6779</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={22} className="text-luxury-gold mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-luxury-navy">Email</h4>
                    <p className="text-luxury-gray">mahrous.islam@yahoo.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Linkedin size={22} className="text-luxury-gold mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-luxury-navy">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/islam-mahrous/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-luxury-navy hover:text-luxury-gold underline transition-colors"
                    >
                      linkedin.com/in/islam-mahrous
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white rounded-md border-l-4 border-luxury-gold shadow-sm">
                <p className="italic text-luxury-gray">
                  "Excellence in hospitality is not just service; it's strategy, vision, and emotional connection."
                </p>
                <p className="text-right text-sm font-medium mt-2">- Islam Mahrous</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
