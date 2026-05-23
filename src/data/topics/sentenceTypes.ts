import { GrammarTopic } from "../../types";

export const sentenceTypesTopics: GrammarTopic[] = [
  {
    id: "sentence_types_all",
    title: "Sentence Classification: 4 Types",
    category: "Sentence Structure",
    subcategory: "Sentence Types",
    difficulty: "Intermediate",
    definition: "Sentences are classified structurally based on the number and type of independent and dependent clauses they contain. The four types are: Simple, Compound, Complex, and Compound-Complex.",
    rules: [
      "Simple Sentence contains exactly one independent clause and no dependent clauses (e.g., 'Emily coded all night'). It may contain compound subjects or compound verbs, but still remains structural simple.",
      "Compound Sentence contains two or more independent clauses joined by a coordinating conjunction (FANBOYS) or a semicolon (e.g., 'Emily coded, and Sarah designed' or 'Emily coded; Sarah designed').",
      "Complex Sentence contains exactly one independent clause and at least one dependent clause (e.g., 'While Emily coded, she drank coffee').",
      "Compound-Complex Sentence contains at least two independent clauses and at least one dependent clause (e.g., 'While Emily coded, she drank coffee, and Sarah designed the layout')."
    ],
    keyTakeaways: [
      "A compound sentence requires a comma before coordinating conjunctions (FANBOYS) joining two clauses.",
      "Conjunctive adverbs (e.g., 'however', 'therefore') join compound sentences with a semicolon and a comma.",
      "Sentences with compound subjects ('Emily and Sarah') or compound verbs ('coded and compiled') are still simple if they contain only one clause."
    ],
    examples: [
      {
        id: "st_ex1",
        sentence: "Emily built the application; it compiles, but it crashes because variables are undefined.",
        parts: [
          { word: "Emily", label: "Subject 1", color: "emerald", note: "Subject of first independent clause." },
          { word: "built", label: "Verb 1", color: "rose", note: "Transitive past tense verb." },
          { word: "the", label: "Article", color: "sky", note: "Article." },
          { word: "application;", label: "Object 1", color: "violet", note: "First independent clause ends here with a semicolon." },
          { word: "it", label: "Subject 2", color: "emerald", note: "Subject of second independent clause." },
          { word: "compiles,", label: "Verb 2", color: "rose", note: "Intransitive verb ending in comma before conjunction." },
          { word: "but", label: "Coordinating Conjunction", color: "indigo", note: "FANBOYS connector joining independent clauses." },
          { word: "it", label: "Subject 3", color: "emerald", note: "Subject of third independent clause." },
          { word: "crashes", label: "Verb 3", color: "rose", note: "Intransitive action of third independent clause." },
          { word: "because", label: "Subordinating Conjunction", color: "indigo", note: "Introduces dependent clause of cause." },
          { word: "variables", label: "Subject 4", color: "emerald", note: "Subject of the dependent adverb clause." },
          { word: "are", label: "Auxiliary Verb", color: "teal", note: "State verb helping be." },
          { word: "undefined.", label: "Adjective Predicate", color: "amber", note: "Completes the dependent adverb clause: 'because variables are undefined'." }
        ],
        overallExplanation: "This is a compound-complex structure. It has three independent clauses: 'Emily built the application', 'it compiles', and 'it crashes' joined by a semicolon and 'but'. It has one dependent adverb clause: 'because variables are undefined'."
      }
    ],
    exercises: [
      {
        id: "st_q1",
        question: "Identify the structure: 'The developer and the junior designer collaborated on the system and built a secure script yesterday.'",
        options: [
          "Simple Sentence",
          "Compound Sentence",
          "Complex Sentence",
          "Compound-Complex Sentence"
        ],
        correctAnswer: "Simple Sentence",
        explanation: "Although it has a compound subject ('developer and designer') and compound verb ('collaborated and built'), it is a single independent clause with no subordinate dependent clauses, hence Simple."
      },
      {
        id: "st_q2",
        question: "Identify the structure: 'Although the code built, the server crashed immediately, but we recovered the database later.'",
        options: [
          "Compound Sentence",
          "Complex Sentence",
          "Compound-Complex Sentence",
          "Simple Sentence"
        ],
        correctAnswer: "Compound-Complex Sentence",
        explanation: "It contains two independent clauses ('the server crashed immediately', 'we recovered the database later' joined by ', but') and one dependent clause ('Although the code built')."
      }
    ]
  }
];
