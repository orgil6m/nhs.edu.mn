import React from "react";
import Head from "next/head";

const MetaHead = ({ title }) => {
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
    </Head>
  );
};

export default MetaHead;
