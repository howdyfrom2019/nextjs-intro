import Head from "next/head";
import React from "react";

const Seo: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title style={{ textTransform: "capitalize" }}>{title} | Next Movies</title>
    </Head>
  )
}

export default Seo;