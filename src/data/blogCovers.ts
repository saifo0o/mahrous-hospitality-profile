// Curated luxury hospitality & architectural cover imagery for leadership thought leadership articles
export const curatedBlogCovers: Record<string, string> = {
  preopening: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
  revenue: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
  leadership: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
  quality: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
  ksa: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
  default: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
};

export function getFallbackBlogCoverUrl(title: string, category?: string): string {
  const textStr = `${category || ''} ${title}`.toLowerCase();
  if (textStr.includes('opening') || textStr.includes('pipeline') || textStr.includes('افتتاح') || textStr.includes('تأسيس')) {
    return curatedBlogCovers.preopening;
  } else if (textStr.includes('revenue') || textStr.includes('revpar') || textStr.includes('str') || textStr.includes('yield') || textStr.includes('إيرادات') || textStr.includes('ربحية')) {
    return curatedBlogCovers.revenue;
  } else if (textStr.includes('talent') || textStr.includes('mentor') || textStr.includes('leadership') || textStr.includes('قيادة') || textStr.includes('مواهب') || textStr.includes('تدريب')) {
    return curatedBlogCovers.leadership;
  } else if (textStr.includes('six sigma') || textStr.includes('kaizen') || textStr.includes('quality') || textStr.includes('sop') || textStr.includes('جودة') || textStr.includes('كايزن') || textStr.includes('سيكس سيجما')) {
    return curatedBlogCovers.quality;
  } else if (textStr.includes('ksa') || textStr.includes('vision 2030') || textStr.includes('saudi') || textStr.includes('السعودية') || textStr.includes('رؤية')) {
    return curatedBlogCovers.ksa;
  }
  return curatedBlogCovers.default;
}
