import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';
import { getInitialLocale } from '../translations/getInitialLocale';

const Index = () => {
  const router = useRouter();
  React.useEffect(() => {
    router.push(`/${getInitialLocale()}`);
  });
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
