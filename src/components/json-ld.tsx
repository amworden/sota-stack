export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sota Stack",
    "url": "https://sotastack.com",
    "logo": "https://sotastack.com/logo.png",
    "description": "Minnesota-based custom software company specializing in websites, cloud hosting, and custom software solutions for businesses of all sizes.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "MN",
      "addressCountry": "US"
    },
    "email": "info@sotastack.com",
    "telephone": "+16125551234",
    "sameAs": [
      "https://www.linkedin.com/in/adammworden/",
      "https://www.linkedin.com/in/steven-dockendorf-2294a336/",
      "https://twitter.com/sotastack",
      "https://github.com/sota-stack"
    ],
    "founders": [
      {
        "@type": "Person",
        "name": "Adam Worden",
        "jobTitle": "Co-Founder",
        "sameAs": "https://www.linkedin.com/in/adammworden/",
        "knowsAbout": ["Cloud Systems", "Software Development", "Web Development"]
      },
      {
        "@type": "Person",
        "name": "Steve Dockendorf",
        "jobTitle": "Co-Founder",
        "sameAs": "https://www.linkedin.com/in/steven-dockendorf-2294a336/",
        "knowsAbout": ["Software Development", "Web Applications", "Technical Leadership"]
      }
    ],
    "foundingDate": "2024",
    "serviceArea": {
      "@type": "State",
      "name": "Minnesota"
    },
    "knowsAbout": [
      "Web Development",
      "Cloud Hosting",
      "Custom Software Development",
      "Website Design",
      "Cloud Infrastructure",
      "API Development"
    ],
    "areaServed": {
      "@type": "GeoCircle",
      "name": "Minnesota and surrounding areas",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 46.7296,
        "longitude": -94.6859
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 