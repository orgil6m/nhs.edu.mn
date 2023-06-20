import React from "react";
import Head from "next/head";

const MetaHead = ({ title, cover = "/assets/images/cover3.jpg" }) => {
  return (
    <Head>
      <title>{title} Nest Education IT School</title>
      <meta name="title" content="Nest Education IT School" />
      <meta
        name="description"
        content="Nest Education IT School Official Website"
      />
      <meta
        name="keywords"
        content="nest, nhs, academy, nest education, it, school, medeelel, нэст, нест"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      {/* social */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:card" content={title} />
      <meta name="twitter:description" content={title} />
      <meta name="twitter:image" content={cover} />
      <meta name="twitter:creator" content="@NestEdtech" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={cover} />
    </Head>
  );
};

export default MetaHead;
