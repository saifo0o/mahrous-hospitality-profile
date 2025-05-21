
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
          gtag('config', 'G-8ZR0GLS69G');
        `}
      </script>
      
      {/* Image Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
    </Helmet>
  );
};

export default TrackingScripts;
