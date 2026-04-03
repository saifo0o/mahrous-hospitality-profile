
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Share2, Bookmark, Calendar, Tag, Eye, Facebook, Twitter, Linkedin, Link2, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { toast } from 'sonner';
import ReactMarkdown from 'react-markdown';
import EnhancedSEOSchema from './EnhancedSEOSchema';
import { useLanguage } from '@/context/LanguageContext';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url?: string;
  category?: string;
  tags?: string[];
  published: boolean;
  published_at?: string;
  created_at: string;
  views_count?: number;
}

interface BlogPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  post: BlogPost | null;
}

const BlogPostModal: React.FC<BlogPostModalProps> = ({ isOpen, onClose, post }) => {
  const { language } = useLanguage();

  if (!post) return null;

  const shareUrl = `${window.location.origin}/blog/${post.slug}`;
  const readingTime = Math.max(1, Math.ceil((post.content?.split(/\s+/).length || 0) / 200));

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-[#0A66C2] hover:text-white',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-[#1DA1F2] hover:text-white',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-[#1877F2] hover:text-white',
    },
  ];

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success(language.code === 'ar' ? 'تم نسخ الرابط!' : 'Link copied!');
    } catch {
      toast.error('Failed to copy link');
    }
  };

  const handleBookmark = () => {
    toast.success(language.code === 'ar' ? 'تم حفظ المقال!' : 'Article bookmarked!');
  };

  return (
    <>
      {post && isOpen && (
        <EnhancedSEOSchema
          type="article"
          title={post.title}
          description={post.excerpt}
          image={post.image_url}
          datePublished={post.published_at || post.created_at}
          author={{ name: "Islam Mahrous" }}
        />
      )}
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                {post.category && (
                  <Badge variant="secondary" className="font-semibold">
                    {post.category}
                  </Badge>
                )}
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" onClick={handleBookmark} className="h-8 w-8 p-0">
                  <Bookmark className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <DialogTitle className="text-2xl md:text-3xl font-bold mb-4">
              {post.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-4 border-b">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{format(new Date(post.published_at || post.created_at), 'MMMM dd, yyyy')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readingTime} min read</span>
              </div>
              {post.views_count && post.views_count > 0 && (
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>{post.views_count} views</span>
                </div>
              )}
              <span className="font-medium">By Islam Mahrous</span>
            </div>

            {/* Featured Image */}
            {post.image_url && (
              <div className="w-full rounded-xl overflow-hidden">
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Excerpt */}
            <p className="text-lg text-muted-foreground font-medium leading-relaxed">
              {post.excerpt}
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
                  h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
                  h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
                  p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
                  ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />,
                  li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
                  strong: ({ node, ...props }) => <strong className="font-semibold text-primary" {...props} />,
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground" {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a className="text-primary hover:underline font-medium" {...props} />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Social Share Bar */}
            <div className="pt-6 border-t">
              <p className="text-sm font-semibold text-foreground mb-3">
                {language.code === 'ar' ? 'شارك هذا المقال' : 'Share this article'}
              </p>
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted-foreground transition-all duration-200 ${social.color}`}
                    aria-label={`Share on ${social.name}`}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
                <button
                  onClick={handleCopyLink}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-border text-muted-foreground hover:bg-muted transition-all duration-200"
                  aria-label="Copy link"
                >
                  <Link2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Topics:</span>
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="hover:bg-primary/10 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="mt-8 p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl border-2 border-primary/20">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">
                  {language.code === 'ar' ? 'تريد المزيد من الرؤى؟' : 'Want more insights on hotel management?'}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {language.code === 'ar' 
                    ? 'استكشف المزيد من المقالات حول التميز التشغيلي والقيادة والابتكار في الضيافة.'
                    : 'Explore more articles on operational excellence, leadership, and hospitality innovation.'
                  }
                </p>
                <Button 
                  variant="default" 
                  onClick={onClose}
                  className="font-semibold"
                >
                  {language.code === 'ar' ? 'استكشف المزيد ←' : 'Explore More Articles →'}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BlogPostModal;
