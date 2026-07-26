// ─────────────────────────────────────────────────────────────
// Brand Constants — Single source of truth for all shared data
// ─────────────────────────────────────────────────────────────

import marriottLogo from '@/assets/logos/marriott.svg';
import ihgLogo from '@/assets/logos/ihg.svg';
import accorLogo from '@/assets/logos/accor.svg';
import sheratonLogo from '@/assets/logos/sheraton.svg';
import crownePlazaLogo from '@/assets/logos/crowne-plaza.svg';
import primeHotelsLogo from '@/assets/logos/prime-hotels.png';

// ── Brand Logos ──────────────────────────────────────────────

export interface BrandLogo {
  name: string;
  logo: string;
}

export const brandLogos: BrandLogo[] = [
  { name: 'Marriott International', logo: marriottLogo },
  { name: 'IHG Hotels & Resorts', logo: ihgLogo },
  { name: 'Accor Hotels', logo: accorLogo },
  { name: 'Sheraton Hotels & Resorts', logo: sheratonLogo },
  { name: 'Crowne Plaza', logo: crownePlazaLogo },
  { name: 'Prime Hotels Group', logo: primeHotelsLogo },
];

/** Compact subset for hero section */
export const heroBrandLogos: BrandLogo[] = [
  { name: 'Marriott', logo: marriottLogo },
  { name: 'IHG', logo: ihgLogo },
  { name: 'Accor', logo: accorLogo },
  { name: 'Sheraton', logo: sheratonLogo },
];

// ── Navigation ──────────────────────────────────────────────

export interface NavItem {
  labelEn: string;
  labelAr: string;
  path: string;
}

export const navigationItems: NavItem[] = [
  { labelEn: 'About', labelAr: 'من أنا', path: '/about' },
  { labelEn: 'Projects', labelAr: 'المشاريع', path: '/projects' },
  { labelEn: 'Career', labelAr: 'المسيرة', path: '/career' },
  { labelEn: 'Blog', labelAr: 'المدونة', path: '/blog' },
  { labelEn: 'Contact', labelAr: 'تواصل', path: '/contact' },
];

export const footerLinks: NavItem[] = [
  ...navigationItems,
  { labelEn: 'Awards', labelAr: 'الجوائز', path: '/awards' },
];

// ── Contact Info ────────────────────────────────────────────

export interface ContactItem {
  labelEn: string;
  labelAr: string;
  value: string;
  href?: string;
  regionEn?: string;
  regionAr?: string;
}

export const contactInfo: ContactItem[] = [
  {
    labelEn: 'Location',
    labelAr: 'الموقع',
    value: '',
    regionEn: 'Cairo, Egypt',
    regionAr: 'القاهرة، مصر',
  },
  {
    labelEn: 'Phone (Egypt)',
    labelAr: 'الهاتف (مصر)',
    value: '+20 109 555 6779',
    href: 'tel:+201095556779',
    regionEn: 'EG',
    regionAr: 'مصر',
  },
  {
    labelEn: 'Phone (KSA)',
    labelAr: 'الهاتف (السعودية)',
    value: '+966 55 374 1020',
    href: 'tel:+966553741020',
    regionEn: 'KSA',
    regionAr: 'السعودية',
  },
  {
    labelEn: 'Email',
    labelAr: 'البريد',
    value: 'mahrous.islam@yahoo.com',
    href: 'mailto:mahrous.islam@yahoo.com',
  },
  {
    labelEn: 'LinkedIn',
    labelAr: 'لينكدإن',
    value: 'islam-mahrous',
    href: 'https://www.linkedin.com/in/islam-mahrous-',
  },
];

// ── Social Links ────────────────────────────────────────────

export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/islam-mahrous-',
  whatsapp: 'https://wa.me/201095556779',
  email: 'mailto:mahrous.islam@yahoo.com',
} as const;

// ── Shared Content ──────────────────────────────────────────

export const signatureQuote = {
  en: '"Excellence in hospitality is not just service; it\'s strategy, vision, and emotional intelligence."',
  ar: '"التميز في الضيافة ليس مجرد خدمة؛ إنه استراتيجية ورؤية وذكاء عاطفي."',
} as const;
