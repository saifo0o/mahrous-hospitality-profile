
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Users, Clock, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/context/LanguageContext';

interface SpeakingEngagementModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTopic?: string;
}

const SpeakingEngagementModal: React.FC<SpeakingEngagementModalProps> = ({
  isOpen,
  onClose,
  selectedTopic
}) => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    eventName: '',
    eventDate: '',
    expectedAttendees: '',
    topic: selectedTopic || '',
    duration: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast({
        title: language.code === 'ar' ? "تم إرسال الطلب بنجاح!" : "Request Sent Successfully!",
        description: language.code === 'ar' 
          ? "سيتواصل معك إسلام قريباً لمناقشة التفاصيل" 
          : "Islam will contact you soon to discuss the details"
      });
      setIsSubmitting(false);
      onClose();
      setFormData({
        name: '',
        email: '',
        organization: '',
        eventName: '',
        eventDate: '',
        expectedAttendees: '',
        topic: '',
        duration: '',
        message: ''
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-luxury-navy">
            {language.code === 'ar' ? "طلب محاضرة" : "Speaking Engagement Request"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                {language.code === 'ar' ? "الاسم الكامل" : "Full Name"} *
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={language.code === 'ar' ? "اسمك الكامل" : "Your full name"}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                {language.code === 'ar' ? "البريد الإلكتروني" : "Email Address"} *
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={language.code === 'ar' ? "your@email.com" : "your@email.com"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                {language.code === 'ar' ? "المؤسسة" : "Organization"} *
              </label>
              <Input
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
                placeholder={language.code === 'ar' ? "اسم المؤسسة" : "Organization name"}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                {language.code === 'ar' ? "اسم الفعالية" : "Event Name"} *
              </label>
              <Input
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
                required
                placeholder={language.code === 'ar' ? "اسم المؤتمر أو الفعالية" : "Conference or event name"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                <Calendar className="inline h-4 w-4 mr-1" />
                {language.code === 'ar' ? "تاريخ الفعالية" : "Event Date"} *
              </label>
              <Input
                name="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                <Users className="inline h-4 w-4 mr-1" />
                {language.code === 'ar' ? "عدد الحضور المتوقع" : "Expected Attendees"}
              </label>
              <Input
                name="expectedAttendees"
                value={formData.expectedAttendees}
                onChange={handleChange}
                placeholder={language.code === 'ar' ? "مثال: 200-300" : "e.g., 200-300"}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                {language.code === 'ar' ? "الموضوع المفضل" : "Preferred Topic"}
              </label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">
                  {language.code === 'ar' ? "اختر موضوعاً" : "Select a topic"}
                </option>
                <option value="pre-opening">
                  {language.code === 'ar' ? "استراتيجيات ما قبل الافتتاح" : "Pre-Opening Strategies"}
                </option>
                <option value="transformations">
                  {language.code === 'ar' ? "قيادة التحولات" : "Leading Transformations"}
                </option>
                <option value="mena-hospitality">
                  {language.code === 'ar' ? "الضيافة في منطقة الشرق الأوسط" : "MENA Hospitality"}
                </option>
                <option value="custom">
                  {language.code === 'ar' ? "موضوع مخصص" : "Custom Topic"}
                </option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                <Clock className="inline h-4 w-4 mr-1" />
                {language.code === 'ar' ? "المدة المطلوبة" : "Requested Duration"}
              </label>
              <select
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">
                  {language.code === 'ar' ? "اختر المدة" : "Select duration"}
                </option>
                <option value="30-45">30-45 {language.code === 'ar' ? "دقيقة" : "minutes"}</option>
                <option value="45-60">45-60 {language.code === 'ar' ? "دقيقة" : "minutes"}</option>
                <option value="60-90">60-90 {language.code === 'ar' ? "دقيقة" : "minutes"}</option>
                <option value="90+">90+ {language.code === 'ar' ? "دقيقة" : "minutes"}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              {language.code === 'ar' ? "تفاصيل إضافية" : "Additional Details"}
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder={language.code === 'ar' 
                ? "أخبرنا المزيد عن فعاليتك وما تتوقعه من المحاضرة..." 
                : "Tell us more about your event and what you expect from the session..."
              }
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-luxury-navy hover:bg-blue-900"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                {language.code === 'ar' ? "جاري الإرسال..." : "Sending..."}
              </div>
            ) : (
              <>
                <Send className="h-4 w-4 mr-2" />
                {language.code === 'ar' ? "إرسال الطلب" : "Send Request"}
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SpeakingEngagementModal;
