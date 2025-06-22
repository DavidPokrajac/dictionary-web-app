'use client';

import useSWR from 'swr';
import NoResults from './NoResults';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Result({searchTerm}: {searchTerm: string}) {
  const {data, error, isLoading} = useSWR(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);

  return (
    <ul>
      {data.length > 0 ? (
        data.map((post: {word: string}) => (
          <li key={Math.floor(Math.random() * 1000000)}>{post.word}</li>
        ))
      ) : (
        <NoResults data={data} />
      )}
    </ul>
  );
}
