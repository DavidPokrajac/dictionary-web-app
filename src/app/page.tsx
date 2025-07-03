'use client';

import SearchInput from './components/SearchInput';
import Header from './components/Header';
import {Suspense, lazy, useEffect} from 'react';
import {useStore} from './store';
import Loading from './components/Loading';

const Result = lazy(() => import('./components/Result'));
const preloadComponent = () => {
  import('./components/Result');
};

export default function Home() {
  const query = useStore(state => state.query);
  const handleQueryChange = useStore(state => state.handleQueryChange);

  useEffect(() => {
    preloadComponent();
  }, []);

  return (
    <>
      <Header />
      <SearchInput onChange={handleQueryChange} value={query} />
      <Suspense fallback={<Loading />}>
        <Result searchTerm={query} />
      </Suspense>
    </>
  );
}
