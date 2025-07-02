'use client';

import SearchInput from './components/SearchInput';
import Result from './components/Result';
import Header from './components/Header';
import {Suspense} from 'react';
import {useStore} from './store';

export default function Home() {
  const query = useStore(state => state.query);
  const handleQueryChange = useStore(state => state.handleQueryChange);

  return (
    <>
      <Header />
      <SearchInput onChange={handleQueryChange} value={query} />
      <Suspense fallback={<div>Loading...</div>}>
        <Result searchTerm={query} />
      </Suspense>
    </>
  );
}
