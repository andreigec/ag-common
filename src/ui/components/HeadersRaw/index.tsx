import React from 'react';

export interface IHeadersRaw {
  title?: string;
  image?: string;
  description?: string;
  /** eg https://abc.def */
  siteUrl: string;
  /** eg 'a site to remember' */
  tagline: string;
  /** csv or separate keyword strings */
  keywords: string | string[];
}

export const HeadersRaw = ({
  title,
  image,
  siteUrl,
  tagline,
  keywords,
}: IHeadersRaw) => {
  const { origin, hostname } = new URL(siteUrl);
  const fullTitle = `${title ? `${title} | ` : ''}${hostname} | ${tagline}`;
  const titleFallback = title || fullTitle;
  const titleBlock = [
    <title key="1">{fullTitle}</title>,
    <meta key="2" property="og:title" content={titleFallback} />,
    <meta key="3" name="twitter:title" content={titleFallback} />,
    <meta key="4" itemProp="name" content={titleFallback} />,
    <meta key="5" name="description" content={fullTitle} />,
    <meta key="6" itemProp="description" content={fullTitle} />,
    <meta key="7" property="og:description" content={fullTitle} />,
    <meta key="8" name="twitter:description" content={fullTitle} />,
  ];

  const imagearr = !image
    ? []
    : [
        <meta key="9" property="og:image" content={image} />,
        <meta key="10" name="twitter:image" content={image} />,
      ];

  return [
    <meta key="11" charSet="utf-8" />,
    ...titleBlock,
    <meta key="12" property="og:site_name" content={hostname} />,
    <meta key="13" property="og:url" content={origin} />,
    <meta key="14" itemProp="url" content={origin} />,
    <meta key="15" name="twitter:url" content={origin} />,
    <meta key="16" property="og:type" content="website" />,
    <meta key="17" name="twitter:card" content="summary_large_image" />,
    <meta key="18" name="robots" content="index, follow" />,
    <meta
      key="19"
      name="keywords"
      content={Array.isArray(keywords) ? keywords.join(', ') : keywords}
    />,
    ...imagearr,
  ];
};

export const HeadersRawNext = ({
  title,
  image,
  siteUrl,
  tagline,
  description,
  keywords,
}: IHeadersRaw) => {
  const { origin, hostname } = new URL(siteUrl);
  const fullTitle = `${title ? `${title} | ` : ''}${hostname} | ${tagline}`;

  return {
    title: fullTitle,
    description: description || fullTitle,
    keywords,

    openGraph: {
      title: fullTitle,
      description: description || fullTitle,
      siteName: hostname,
      url: origin,
      images: image,
    },
    twitter: {
      title: fullTitle,
      description: description || fullTitle,
      card: 'summary_large_image',
      images: image,
    },
  };
};
