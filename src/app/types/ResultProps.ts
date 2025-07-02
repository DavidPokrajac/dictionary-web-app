export interface PostProps {
  word: string;
  phonetic: string;
  meanings: {
    partOfSpeech: string;
    synonyms: string[];
    definitions: {definition: string}[];
  }[];
  sourceUrls: [string];
}

export interface MeaningProps {
  partOfSpeech: string;
  synonyms: string[];
  definitions: {definition: string; example?: string}[];
}

export interface DefinitionProps {
  definition: string;
  example?: string;
}
