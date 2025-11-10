import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Mail, Phone, Building, MessageSquare, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { trackFormSubmit } from '@/utils/analytics';

const servicePackages = [
  {
    id: 'hourly-consulting',
    name: 'Hourly Consulting',
    duration: 60,
    description: 'Expert advice on specific challenges',
    price: 'Contact for pricing',
  },
  {
    id: 'pre-opening-advisory',
    name: 'Pre-Opening Advisory',
    duration: 120,
    description: 'Comprehensive pre-opening guidance',
    price: 'Contact for pricing',
  },
  {
    id: 'operational-audit',
    name: 'Operational Audit',
    duration: 180,
    description: 'Full property assessment and recommendations',
    price: 'Contact for pricing',
  },
  {
    id: 'training-workshop',
    name: 'Training Workshop',
    duration: 240,
    description: 'Team training and skill development',
    price: 'Contact for pricing',
  },
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
];

const BookingSystem = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const selectedService = servicePackages.find(s => s.id === formData.serviceType);
      
      const { error } = await supabase.from('consultation_bookings').insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service_type: formData.serviceType,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        duration: selectedService?.duration || 60,
        message: formData.message,
        status: 'pending',
      });

      if (error) throw error;

      trackFormSubmit('consultation_booking');
      setIsSubmitted(true);
      toast.success('Booking request submitted successfully!');
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6"
        >
          <Check className="h-10 w-10 text-primary" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-4">Booking Request Received!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for your interest. I'll review your request and get back to you within 24 hours to confirm the consultation details.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Book Another Session
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Full Name *
          </Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="John Doe"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@hotel.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Phone
          </Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            Hotel/Company
          </Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Grand Hotel"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Service Package *
        </Label>
        <Select required value={formData.serviceType} onValueChange={(value) => setFormData({ ...formData, serviceType: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {servicePackages.map((service) => (
              <SelectItem key={service.id} value={service.id}>
                <div className="flex flex-col">
                  <span className="font-medium">{service.name}</span>
                  <span className="text-xs text-muted-foreground">{service.description} • {service.duration} min</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="date" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Preferred Date *
          </Label>
          <Input
            id="date"
            type="date"
            required
            min={new Date().toISOString().split('T')[0]}
            value={formData.preferredDate}
            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
          />
        </div>

        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Preferred Time *
          </Label>
          <Select required value={formData.preferredTime} onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4" />
          Message
        </Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell me about your specific challenges or what you'd like to focus on..."
          rows={4}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Submitting...' : 'Request Consultation'}
      </Button>

      <p className="text-sm text-muted-foreground text-center">
        All consultations are conducted via video call. After submission, I'll contact you to confirm availability and payment details.
      </p>
    </form>
  );
};

export default BookingSystem;
