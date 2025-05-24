
import { Helmet } from 'react-helmet-async';

interface TrackingScriptsProps {
  // You can add props if needed for configuration
}

const TrackingScripts: React.FC<TrackingScriptsProps> = () => {
  return (
    <Helmet>
      {/* Google Analytics GA4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-8ZR0GLS69G`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-8ZR0GLS69G', {
            page_title: document.title,
            page_location: window.location.href
          });
        `}
      </script>
      
      {/* Performance and SEO optimizations */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch for performance */}
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Site verification and ownership */}
      <meta name="author" content="Islam Mahrous" />
      <meta name="copyright" content="© 2025 Islam Mahrous. All rights reserved." />
    </Helmet>
  );
};

export default TrackingScripts;
