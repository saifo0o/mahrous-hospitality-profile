import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Loader2, Database, CheckCircle } from 'lucide-react';
import type { Database as DatabaseType } from '@/integrations/supabase/types';

type ContentInsert = DatabaseType['public']['Tables']['content']['Insert'];

const CMSContentSeeder: React.FC = () => {
  const [isSeeding, setIsSeeding] = useState(false);
  const [seedingProgress, setSeedingProgress] = useState<string[]>([]);
  const { user } = useAuth();
  const { toast } = useToast();

  const seedContent = async () => {
    if (!user) return;
    
    setIsSeeding(true);
    setSeedingProgress([]);
    
    try {
      // Projects/Hotels Content
      const projectsContent: ContentInsert[] = [
        {
          title: "Sheraton Montazah Hotel",
          excerpt: "Led comprehensive renovation of 40-year-old property (288 rooms)",
          content: "Led comprehensive renovation of 40-year-old property (288 rooms), modernizing all mechanical systems including boilers, transformers, generators, chillers, and fire & life safety network. Achieved 25% increase in RevPAR, 30% improvement in guest satisfaction scores, and 15% reduction in energy consumption.",
          content_type: 'project' as const,
          status: 'published' as const,
          featured: true,
          category: 'Major Renovation',
          tags: ['hotel', 'renovation', 'sheraton', 'alexandria'],
          metadata: {
            image_url: "https://gensparkstorageprodwest.blob.core.windows.net/web-drive/a6e760d0-fa94-46d8-8eb3-a53f2a3e7111/cc6b8137-1488-4939-8d61-eab1e9e2046f?se=2025-06-11T03%3A30%3A33Z&sp=r&sv=2025-05-05&sr=b&sig=NUHumgsaVc5WhmljjESsfajRiYIqX5j3XpBwoWAOa1A%3D",
            location: "Alexandria, Egypt",
            period: "2016 - 2023",
            rooms: 288,
            budget: "$7.2M"
          },
          author_id: user.id
        },
        {
          title: "The V Luxury Resort Sahl Hasheesh",
          excerpt: "Managed pre-opening operations for 298-room luxury resort",
          content: "Managed pre-opening operations for 298-room luxury resort, implementing innovative marketing strategies that achieved exceptional initial occupancy. Achieved 90% occupancy within 4 months of launch, 12% increase in guest satisfaction scores, and established as market leader in the region.",
          content_type: 'project' as const,
          status: 'published' as const,
          featured: true,
          category: 'Pre-Opening',
          tags: ['resort', 'luxury', 'pre-opening', 'hurghada'],
          metadata: {
            image_url: "https://gensparkstorageprodwest.blob.core.windows.net/web-drive/a6e760d0-fa94-46d8-8eb3-a53f2a3e7111/0389e1f0-cba4-494a-8a30-8133a2998e0d?se=2025-06-11T03%3A30%3A34Z&sp=r&sv=2025-05-05&sr=b&sig=uF/rqcoMO147PnSwGSoHSSG6%2BQyUTGMopCcsIA2jogk%3D",
            location: "Hurghada, Egypt",
            period: "2023",
            rooms: 298,
            budget: "$4.5M"
          },
          author_id: user.id
        },
        {
          title: "Four Points by Sheraton King Abdulaziz Road",
          excerpt: "Led pre-opening operations for 172-room property in Riyadh",
          content: "Led pre-opening operations for 172-room property, implementing strategic planning processes that ensured timely launch with 90% operational readiness. Achieved 12% reduction in pre-opening budget, 90% operational readiness at launch, and successfully recruited and trained 150+ staff.",
          content_type: 'project' as const,
          status: 'published' as const,
          featured: true,
          category: 'Pre-Opening',
          tags: ['hotel', 'pre-opening', 'riyadh', 'ksa'],
          metadata: {
            image_url: "https://gensparkstorageprodwest.blob.core.windows.net/web-drive/a6e760d0-fa94-46d8-8eb3-a53f2a3e7111/70efddd9-be3e-45f9-b9f2-1d6f0a115da3?se=2025-06-11T03%3A30%3A33Z&sp=r&sv=2025-05-05&sr=b&sig=R7RaorHo91YwAAEg1CJhgYYU5gPyirVyYkBtdebf3oM%3D",
            location: "Riyadh, KSA",
            period: "2024 - 2025",
            rooms: 172,
            budget: "$5.2M"
          },
          author_id: user.id
        },
        {
          title: "Sheraton Miramar Resort",
          excerpt: "Managed $5M refurbishment project for 339-room property",
          content: "Managed $5M refurbishment project for 339-room property, improving guest satisfaction through strategic repositioning. Achieved 12% improvement in guest satisfaction, 15% increase in ADR, and 8% increase in occupancy within first year post-renovation.",
          content_type: 'project' as const,
          status: 'published' as const,
          featured: true,
          category: 'Major Renovation',
          tags: ['resort', 'renovation', 'el-gouna'],
          metadata: {
            image_url: "https://gensparkstorageprodwest.blob.core.windows.net/web-drive/a6e760d0-fa94-46d8-8eb3-a53f2a3e7111/e703128d-63d6-4bf1-a8d8-8ec477447d4d?se=2025-06-11T03%3A30%3A33Z&sp=r&sv=2025-05-05&sr=b&sig=zpAnIdu187ebblkrXGBLrSft1uLIBhXzg%2BFDxytKJJ8%3D",
            location: "El Gouna, Hurghada, Egypt",
            period: "2011 - 2014",
            rooms: 339,
            budget: "$5M"
          },
          author_id: user.id
        },
        {
          title: "Four Points by Sheraton & Sheraton Tripoli",
          excerpt: "Managed pre-opening operations ensuring 95% operational readiness",
          content: "Managed pre-opening operations, ensuring 95% operational readiness in challenging political conditions. Achieved 95% operational readiness, 15% higher guest satisfaction than regional average, and successfully established Sheraton brand standards in new market.",
          content_type: 'project' as const,
          status: 'published' as const,
          featured: true,
          category: 'Pre-Opening',
          tags: ['hotel', 'pre-opening', 'tripoli', 'libya'],
          metadata: {
            image_url: "https://gensparkstorageprodwest.blob.core.windows.net/web-drive/a6e760d0-fa94-46d8-8eb3-a53f2a3e7111/3804f390-c379-4bcb-9881-c40de6609f0c?se=2025-06-11T03%3A30%3A33Z&sp=r&sv=2025-05-05&sr=b&sig=0JMcvIEnDazMdPMYd3kmeprMOdKoQaRIihgRgd9LMQg%3D",
            location: "Tripoli, Libya",
            period: "2009 - 2011",
            rooms: 718,
            budget: "$8.5M"
          },
          author_id: user.id
        },
        {
          title: "Portosaid Resort",
          excerpt: "Managed $3.5M refurbishment project for 168-room beachfront property",
          content: "Directed $3.5M refurbishment project (168 rooms), achieving significant growth in key performance indicators within just 4 months. Transformed beachfront property with modern amenities while preserving coastal charm. Resulted in 25% increase in occupancy and 18% improvement in guest satisfaction scores.",
          content_type: 'project' as const,
          status: 'published' as const,
          featured: true,
          category: 'Major Renovation',
          tags: ['resort', 'renovation', 'beachfront', 'portosaid'],
          metadata: {
            image_url: "https://gensparkstorageprodwest.blob.core.windows.net/web-drive/a6e760d0-fa94-46d8-8eb3-a53f2a3e7111/bc89229b-bad1-4ef9-9380-f26640049698?se=2025-06-11T03%3A53%3A09Z&sp=r&sv=2025-05-05&sr=b&sig=5h/5mErBsP0X/1TLn%2ByhIr1JDUXthNj5RUybNzuod3A%3D",
            location: "Port Said, Egypt",
            period: "2015 - 2016",
            rooms: 168,
            budget: "$3.5M"
          },
          author_id: user.id
        },
        {
          title: "Warwick Hotel Exterior",
          excerpt: "Complete exterior renovation and facade modernization project",
          content: "Led comprehensive exterior renovation project focusing on facade modernization and structural improvements. Implemented energy-efficient systems and contemporary design elements while maintaining architectural integrity. Project enhanced property's market positioning and visual appeal.",
          content_type: 'project' as const,
          status: 'published' as const,
          featured: true,
          category: 'Renovation',
          tags: ['hotel', 'exterior', 'renovation', 'facade'],
          metadata: {
            image_url: "https://gensparkstorageprodwest.blob.core.windows.net/web-drive/a6e760d0-fa94-46d8-8eb3-a53f2a3e7111/44889a97-5615-471e-a4c5-606cfea1bda0?se=2025-06-11T03%3A30%3A33Z&sp=r&sv=2025-05-05&sr=b&sig=yOpDgiezWnngz9xdxhk%2BxokrOmwFvP%2B3Hpq43e2qxSU%3D",
            location: "Various Locations",
            period: "2017 - 2018",
            rooms: 250,
            budget: "$2.8M"
          },
          author_id: user.id
        }
      ];

      setSeedingProgress(prev => [...prev, "Starting content seeding..."]);

      // Seed projects
      for (const project of projectsContent) {
        const { error } = await supabase
          .from('content')
          .insert(project);
        
        if (error && !error.message.includes('duplicate')) {
          throw error;
        }
      }
      
      setSeedingProgress(prev => [...prev, "✓ Projects content seeded successfully"]);

      // Seed awards
      const awardsContent: ContentInsert[] = [
        {
          title: "Excellence in Hotel Operations",
          excerpt: "Recognition for outstanding operational excellence in hospitality management",
          content: "Awarded for demonstrating exceptional leadership in hotel operations, achieving outstanding guest satisfaction scores and operational efficiency across multiple properties.",
          content_type: 'award' as const,
          status: 'published' as const,
          featured: true,
          category: 'Professional Excellence',
          tags: ['award', 'excellence', 'operations'],
          metadata: {
            year: "2023",
            organization: "Hospitality Excellence Awards"
          },
          author_id: user.id
        }
      ];

      for (const award of awardsContent) {
        const { error } = await supabase
          .from('content')
          .insert(award);
        
        if (error && !error.message.includes('duplicate')) {
          throw error;
        }
      }

      setSeedingProgress(prev => [...prev, "✓ Awards content seeded successfully"]);

      // Seed testimonials
      const testimonialsContent: ContentInsert[] = [
        {
          title: "Outstanding Leadership in Hospitality",
          excerpt: "Islam's leadership transformed our hotel operations completely",
          content: "Islam Mahrous demonstrated exceptional leadership skills during the Sheraton Montazah renovation project. His strategic approach and attention to detail resulted in significant improvements in both guest satisfaction and operational efficiency.",
          content_type: 'testimonial' as const,
          status: 'published' as const,
          featured: true,
          category: 'Client Testimonial',
          tags: ['testimonial', 'leadership', 'renovation'],
          metadata: {
            client_name: "Ahmed Hassan",
            client_position: "General Manager",
            client_company: "Sheraton Hotels"
          },
          author_id: user.id
        }
      ];

      for (const testimonial of testimonialsContent) {
        const { error } = await supabase
          .from('content')
          .insert(testimonial);
        
        if (error && !error.message.includes('duplicate')) {
          throw error;
        }
      }

      setSeedingProgress(prev => [...prev, "✓ Testimonials content seeded successfully"]);

      setSeedingProgress(prev => [...prev, "🎉 All content seeded successfully!"]);
      
      toast({
        title: "Success",
        description: "All website content has been integrated into the CMS",
      });

    } catch (error) {
      console.error('Error seeding content:', error);
      setSeedingProgress(prev => [...prev, "❌ Error occurred during seeding"]);
      toast({
        title: "Error",
        description: "Failed to seed content into CMS",
        variant: "destructive",
      });
    } finally {
      setIsSeeding(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          CMS Content Integration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          This will populate the CMS with all existing website content including projects, awards, and testimonials.
        </p>
        
        <Button 
          onClick={seedContent} 
          disabled={isSeeding}
          className="w-full"
        >
          {isSeeding ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Seeding Content...
            </>
          ) : (
            <>
              <Database className="h-4 w-4 mr-2" />
              Seed Website Content into CMS
            </>
          )}
        </Button>

        {seedingProgress.length > 0 && (
          <div className="bg-gray-50 p-4 rounded-md">
            <h4 className="font-medium mb-2">Seeding Progress:</h4>
            <div className="space-y-1">
              {seedingProgress.map((step, index) => (
                <div key={index} className="text-sm flex items-center gap-2">
                  {step.includes('✓') && <CheckCircle className="h-3 w-3 text-green-600" />}
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CMSContentSeeder;
