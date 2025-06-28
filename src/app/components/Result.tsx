/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import useSWR from 'swr';
import NoResults from './NoResults';
import {Fragment} from 'react';
import Image from 'next/image';

interface PostProps {
  word: string;
  phonetic: string;
  meanings: {
    partOfSpeech: string;
    synonyms: string[];
    definitions: {definition: string}[];
  }[];
  sourceUrls: [string];
}

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Result({searchTerm}: {searchTerm: string}) {
  const {data, error, isLoading} = useSWR(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`,
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul className="w-[90%] lg:max-w-[736px] mx-auto list-none">
      {data.length > 0 ? (
        data.map((post: PostProps) => {
          console.log(post);
          return (
            <li key={Math.floor(Math.random() * 1000000)}>
              <article className="main-content text-left">
                <div className="grid grid-cols-2 grid-rows-[auto_auto] items-center max-w-[736px]">
                  <h2 className="text-[2rem] md:text-main font-bold">
                    {post.word}
                  </h2>
                  <span className="text-(--clr-accent-400) text-h4 md:text-h2 row-start-2 col-start-1">
                    {post.phonetic}
                  </span>

                  <Image
                    src="/assets/images/icon-play.svg"
                    alt=""
                    width={48}
                    height={48}
                    className="inline-block md:w-[75px] md:h-[75px] col-start-2 row-start-1 row-end-3 justify-self-end rounded-full hover:bg-(--clr-accent-400) hover:text-(--color-primary-100)"
                  />
                </div>
                {post.meanings.map((meaning: any) => {
                  return (
                    <div
                      className="main-content max-w-[736px]"
                      key={Math.floor(Math.random() * 1000000)}>
                      <span className="flex items-center space-between gap-[1rem] text-(--clr-primary-800) text-h4 md:text-h2 font-bold relative part-of-speech max-w-[736px]">
                        <span>{meaning.partOfSpeech}</span>
                        <hr className="h-[2px] w-[100%] text-(--clr-primary-300)" />
                      </span>
                      <div className="max-w-[736px]">
                        <p className="text-(--clr-primary-400) md:text-h3 mb-4">
                          Meaning
                        </p>
                        <ul className="meaning-wrapper list-disc marker:text-(--clr-accent-400) pl-[1rem] md:pl-[2rem]">
                          {meaning.definitions.map((definition: any) => {
                            return (
                              <Fragment
                                key={Math.floor(Math.random() * 1000000)}>
                                <li className="pl-[0.5rem] md:pl-[2rem] text-[0.9375rem] md:text-h4">
                                  {definition.definition}
                                </li>
                                {definition.example && (
                                  <p
                                    className="pl-[0.5rem] md:pl-[2rem] text-[0.9375rem] md:text-h4 text-(--clr-primary-400)"
                                    key={Math.floor(Math.random() * 1000000)}>
                                    {'' + definition.example + ''}
                                  </p>
                                )}
                              </Fragment>
                            );
                          })}
                        </ul>
                      </div>
                      {meaning.synonyms.length > 0 && (
                        <div className="flex gap-[1.375rem] max-w-[736px]">
                          <span className="text-(--clr-primary-400) md:text-h3">
                            Synonyms
                          </span>
                          <ul className="inline-flex gap-[0.5rem] flex-wrap">
                            {meaning.synonyms.map((synonym: string) => {
                              return (
                                <li
                                  key={Math.floor(Math.random() * 1000000)}
                                  className="text-(--clr-accent-400) font-bold md:text-h3">
                                  {synonym}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="flex text-h5">
                  <span className="text-(--clr-primary-400) underline mr-[1.5rem]">
                    Source
                  </span>
                  <span className="underline mr-[0.5rem]">
                    {post.sourceUrls[0]}
                  </span>
                  <Image
                    src="/assets/images/icon-new-window.svg"
                    alt=""
                    width={12}
                    height={12}
                  />
                </div>
              </article>
            </li>
          );
        })
      ) : (
        <NoResults data={data} />
      )}
    </ul>
  );
}
