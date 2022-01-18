import React from 'react';

export const HeadersRaw = ({
  title,
  image,
  SiteShort,
  FullSiteUrl,
  siteDesc,
}: {
  title?: string;
  image?: string;
  SiteShort: string;
  FullSiteUrl: string;
  siteDesc: string;
}) => {
  const fullTitle = `${title ? `${title} | ` : ''}${SiteShort} | ${siteDesc}`;
  const titleBlock =
    title === undefined
      ? []
      : [
          <title key="1">{fullTitle}</title>,
          <meta key="2" property="og:title" content={title} />,
          <meta key="3" name="twitter:title" content={title} />,
          <meta key="4" itemProp="name" content={title} />,
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
    <meta key="12" property="og:site_name" content={SiteShort} />,
    <meta key="13" property="og:url" content={FullSiteUrl} />,
    <meta key="14" itemProp="url" content={FullSiteUrl} />,
    <meta key="15" name="twitter:url" content={FullSiteUrl} />,
    <meta key="16" property="og:type" content="website" />,
    <meta key="17" name="twitter:card" content="summary" />,
    <meta key="18" name="robots" content="index, follow" />,
    ...imagearr,
  ];
};
