
import { Helmet } from 'react-helmet-async';

interface TrackingScriptsProps {
  // You can add props if needed for configuration
}

const TrackingScripts: React.FC<TrackingScriptsProps> = () => {
  return (
    <Helmet>
      {/* Google Analytics GA4 */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </script>
      
      {/* Facebook Pixel */}
      <script>
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', 'XXXXXXXXXXXXXXX');
          fbq('track', 'PageView');
        `}
      </script>
      
      {/* Image Optimization */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link rel="dns-prefetch" href="//www.facebook.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
    </Helmet>
  );
};

export default TrackingScripts;
