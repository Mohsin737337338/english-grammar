import { GrammarTopic } from "../types";
import { partsOfSpeechTopics } from "./topics/partsOfSpeech";
import { phrasesAndClausesTopics } from "./topics/phrasesAndClauses";
import { sentenceTypesTopics } from "./topics/sentenceTypes";
import { tensesTopics } from "./topics/tenses";
import { voiceAndNarrationTopics } from "./topics/voiceAndNarration";
import { otherTopics } from "./topics/otherTopics";

export const GRAMMAR_DB: GrammarTopic[] = [
  ...partsOfSpeechTopics,
  ...phrasesAndClausesTopics,
  ...sentenceTypesTopics,
  ...tensesTopics,
  ...voiceAndNarrationTopics,
  ...otherTopics
];
