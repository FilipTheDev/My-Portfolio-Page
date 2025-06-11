import React from 'react';
import { Helmet } from 'react-helmet';

interface MetaTagsProps {
  title: string;
  description: string;
  name: string;
  image?: string;
  url?: string;
}

const MetaTags: React.FC<MetaTagsProps> = ({ 
  title, 
  description, 
  name, 
  image = '', 
  url = '' 
}) => {
  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="twitter:creator" content={`@${name.replace(/\s+/g, '')}`} />
      
      {/* Additional meta tags */}
      <meta name="author" content={name} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default MetaTags;
