import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
// import NoSSR from '@/components/NoSSR';
import dynamic from 'next/dynamic';

/** https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr */
const NoSSR = dynamic(() => import('../components/NoSSR'), {
  ssr: false,
});

const Example: NextPage = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const delayInSeconds = 2;
    const fetchData = async () => {
      const result = await new Promise<number>((resolve) => {
        setTimeout(() => resolve(Math.random()), delayInSeconds * 1000);
      });
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>Client-side data fetching</h1>
      <p>값: {data}</p>

      <h1>no SSR</h1>
      <NoSSR />
    </main>
  );
};

export default Example;
