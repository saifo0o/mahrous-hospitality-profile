import React from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

interface EnhancedProjectCardProps {
  title: string;
  category: string;
  image: string;
  video: string;
  description: string;
  onPlayVideo: (video: string) => void;
  index: number;
}

const EnhancedProjectCard: React.FC<EnhancedProjectCardProps> = ({
  title,
  category,
  image,
  video,
  description,
  onPlayVideo,
  index
}) => {
  const { t, isRTL } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-accent/50"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Image Container */}
      <div className="relative h-72 overflow-hidden">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <motion.div
          className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} bg-accent/95 text-accent-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm border border-accent`}
          initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {category}
        </motion.div>
        
        {/* Play Button */}
        <motion.button
          onClick={() => onPlayVideo(video)}
          className="absolute inset-0 m-auto w-16 h-16 bg-white/95 hover:bg-white backdrop-blur-md rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
        >
          <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
        </motion.button>
        
        {/* Decorative Corner */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Container */}
      <div className="p-6 space-y-4 bg-gradient-to-b from-card to-muted/30">
        <motion.h3 
          className="font-bold text-xl text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-2"
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {description}
        </p>
        
        {/* Action Button */}
        <Link 
          to="/projects" 
          className={`inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-all duration-300 group/link ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <span className="story-link">{t('viewDetails')}</span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ExternalLink className={`h-4 w-4 ${isRTL ? 'rotate-180' : ''}`} />
          </motion.div>
        </Link>
      </div>

      {/* Bottom Accent Line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
};

export default EnhancedProjectCard;
