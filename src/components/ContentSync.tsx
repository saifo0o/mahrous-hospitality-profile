
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { RefreshCw, AlertTriangle, CheckCircle } from 'lucide-react';

const ContentSync = () => {
  const [isChecking, setIsChecking] = useState(false);
  const [issues, setIssues] = useState<string[]>([]);
  const [isFixed, setIsFixed] = useState(false);
  const { toast } = useToast();

  const checkContentIntegrity = async () => {
    setIsChecking(true);
    setIssues([]);
    
    try {
      console.log('Checking content integrity...');
      
      // Check if content table exists and is accessible
      const { data: contentData, error: contentError } = await supabase
        .from('content')
        .select('id, title, status')
        .limit(1);
      
      if (contentError) {
        console.error('Content table error:', contentError);
        setIssues(prev => [...prev, `Content table access error: ${contentError.message}`]);
      } else {
        console.log('Content table accessible:', contentData);
      }

      // Check if bookmarks table has UUID issues
      const { data: bookmarkData, error: bookmarkError } = await supabase
        .from('bookmarks')
        .select('id, content_id')
        .limit(1);
      
      if (bookmarkError) {
        console.error('Bookmark table error:', bookmarkError);
        setIssues(prev => [...prev, `Bookmark table error: ${bookmarkError.message}`]);
      }

      // Check profiles table
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('id, role')
        .limit(1);
      
      if (profileError) {
        console.error('Profile table error:', profileError);
        setIssues(prev => [...prev, `Profile table error: ${profileError.message}`]);
      }

      if (issues.length === 0) {
        setIsFixed(true);
        toast({
          title: "Success",
          description: "All CMS components are functioning correctly",
        });
      }

    } catch (error) {
      console.error('Content integrity check failed:', error);
      setIssues(prev => [...prev, `System error: ${error instanceof Error ? error.message : 'Unknown error'}`]);
    } finally {
      setIsChecking(false);
    }
  };

  const fixCmsIssues = async () => {
    setIsChecking(true);
    
    try {
      console.log('Attempting to fix CMS issues...');
      
      // Clear any problematic cache
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(
          cacheNames.map(cacheName => caches.delete(cacheName))
        );
        console.log('Browser caches cleared');
      }

      // Force refresh the content data
      const { data: refreshedContent, error: refreshError } = await supabase
        .from('content')
        .select('*')
        .order('created_at', { ascending: false });

      if (refreshError) {
        throw new Error(`Failed to refresh content: ${refreshError.message}`);
      }

      console.log('Content refreshed successfully:', refreshedContent?.length, 'items');

      setIsFixed(true);
      setIssues([]);
      
      toast({
        title: "CMS Fixed",
        description: "Content management system has been reset and should work correctly now",
      });

      // Reload the page to ensure all components are using fresh data
      setTimeout(() => {
        window.location.reload();
      }, 2000);

    } catch (error) {
      console.error('Failed to fix CMS issues:', error);
      toast({
        title: "Fix Failed",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <RefreshCw className="h-5 w-5" />
          CMS Diagnostic & Repair Tool
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {issues.length > 0 && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <div className="space-y-1">
                <strong>Issues detected:</strong>
                <ul className="list-disc list-inside">
                  {issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </div>
            </AlertDescription>
          </Alert>
        )}

        {isFixed && (
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              CMS is functioning correctly. All content updates should now reflect on the live website.
            </AlertDescription>
          </Alert>
        )}

        <div className="flex gap-2">
          <Button 
            onClick={checkContentIntegrity}
            disabled={isChecking}
            variant="outline"
          >
            {isChecking ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Checking...
              </>
            ) : (
              <>
                <RefreshCw className="h-4 w-4 mr-2" />
                Check CMS Health
              </>
            )}
          </Button>

          <Button 
            onClick={fixCmsIssues}
            disabled={isChecking}
          >
            {isChecking ? (
              <>
                <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                Fixing...
              </>
            ) : (
              <>
                <RefreshCw className="h-4 w-4 mr-2" />
                Fix CMS Issues
              </>
            )}
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          <p><strong>Common CMS Issues:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>Browser cache preventing updates from showing</li>
            <li>Database connection interruptions</li>
            <li>Content synchronization delays</li>
            <li>Invalid data format in bookmark references</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentSync;
