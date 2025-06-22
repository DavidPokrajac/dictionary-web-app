'use client';
import React, {useState} from 'react';
import SearchInput from './components/SearchInput';
import Result from './components/Result';
import Header from './components/Header';
import {Suspense} from 'react';

export default function Home() {
  const [query, setQuery] = useState<string>('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  return (
    <>
      <Header />
      <SearchInput onChange={handleChange} value={query} />
      <Suspense fallback={<div>Loading...</div>}>
        <Result searchTerm={query} />
      </Suspense>
    </>
  );
}
