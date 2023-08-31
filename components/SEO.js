import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="google-site-verification" content="r4vWS5jpPIf3fVV2odiCSj5DeOHnB2_OurqLeMhuqbQ" />
    </Head>
  );
}
