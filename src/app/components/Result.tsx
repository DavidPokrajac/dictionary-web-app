'use client';

import useSWR from 'swr';
import NoResults from './NoResults';
import {Fragment} from 'react';
import Image from 'next/image';
import newWindow from '../../../public/assets/images/icon-new-window.svg';
import PlayIcon from './PlayIcon';
import {v4 as uuidv4} from 'uuid';
import {changeStyles} from '../utils/helpers';
import {useSelectedFontStore} from '../stores/selectedFontStore';
import {PostProps, MeaningProps, DefinitionProps} from '../types/ResultProps';
import Loading from './Loading';
import Error from './Error';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export default function Result({searchTerm}: {searchTerm: string}) {
  const {data, error, isLoading} = useSWR(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`,
    fetcher
  );

  const font = useSelectedFontStore(state => state.selectedFont);
  if (isLoading) return <Loading />;
  if (error) return <Error error={error.message} />;

  return (
    <ul className="w-[90%] sm:w-[95%] lg:max-w-[736px] mx-auto list-none mt-5 md:[mt-10]">
      {data.length > 0 ? (
        data.map((post: PostProps) => {
          return (
            <li key={uuidv4()}>
              <article className="main-content text-left">
                <div className="grid grid-cols-2 grid-rows-[auto_auto] items-center max-w-[736px]">
                  <h2 className="text-[2rem] sm:text-main font-bold dark:text-(--clr-primary-100)">
                    {post.word}
                  </h2>
                  <span className="text-(--clr-accent-400) text-h4 sm:text-h2 row-start-2 col-start-1">
                    {post.phonetic}
                  </span>
                  <PlayIcon />
                </div>
                {post.meanings.map((meaning: MeaningProps) => {
                  return (
                    <div className="main-content max-w-[736px]" key={uuidv4()}>
                      <span className="flex items-center space-between gap-[1.1875rem] sm:gap-[2rem] text-(--clr-primary-800) dark:text-(--clr-primary-100) text-h4 sm:text-h2 font-bold relative part-of-speech max-w-[736px]">
                        <span
                          className={`part-of-speech ${changeStyles(font)}`}>
                          {meaning.partOfSpeech}
                        </span>
                        <hr className="h-[2px] w-[100%] text-(--clr-primary-300) dark:text-(--clr-primary-500)" />
                      </span>
                      <div className="max-w-[736px]">
                        <p className="text-(--clr-primary-400) sm:text-h3 mb-4">
                          Meaning
                        </p>
                        <ul className="meaning-wrapper list-disc marker:text-(--clr-accent-400) pl-[1rem] sm:pl-[2rem] dark:text-(--clr-primary-100)">
                          {meaning.definitions.map(
                            (definition: DefinitionProps) => {
                              return (
                                <Fragment key={uuidv4()}>
                                  <li className="pl-[0.5rem] sm:pl-[1.25rem] md:pl-[2rem] text-[0.9375rem] sm:text-h4">
                                    {definition.definition}
                                  </li>
                                  {definition.example && (
                                    <p
                                      className="pl-[0.5rem] sm:pl-[2rem] text-[0.9375rem] sm:text-h4 text-(--clr-primary-400)"
                                      key={uuidv4()}>
                                      {'' + definition.example + ''}
                                    </p>
                                  )}
                                </Fragment>
                              );
                            }
                          )}
                        </ul>
                      </div>
                      {meaning.synonyms.length > 0 && (
                        <div className="flex gap-[1.375rem] max-w-[736px]">
                          <span className="text-(--clr-primary-400) sm:text-h3">
                            Synonyms
                          </span>
                          <ul className="inline-flex gap-[0.5rem] flex-wrap">
                            {meaning.synonyms.map((synonym: string) => {
                              return (
                                <li
                                  key={uuidv4()}
                                  className="text-(--clr-accent-400) font-bold sm:text-h3 hover:underline hover:decoration-(--clr-accent-400) hover:cursor-pointer">
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
                  <span className="text-(--clr-primary-400) underline mr-[1.5rem] dark:no-underline">
                    Source
                  </span>
                  <span className="underline mr-[0.5rem] dark:text-(--clr-primary-100) dark:no-underline">
                    {post.sourceUrls[0]}
                  </span>
                  <Image src={newWindow} alt="" width={12} height={12} />
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
