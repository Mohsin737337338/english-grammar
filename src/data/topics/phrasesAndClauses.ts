import { GrammarTopic } from "../../types";

export const phrasesAndClausesTopics: GrammarTopic[] = [
  {
    id: "phrases_all_types",
    title: "Phrases: Structural Types",
    category: "Phrases & Clauses",
    subcategory: "Phrases",
    difficulty: "Intermediate",
    definition: "A phrase is a group of two or more words functioning as a meaningful unit within a sentence, containing no subject-predicate relationship. Major types include: Noun Phrase, Verb Phrase, Adjective Phrase, Adverb Phrase, Prepositional Phrase, Participial Phrase, Gerund Phrase, Infinitive Phrase, and Absolute Phrase.",
    rules: [
      "Noun Phrase consists of a noun and its modifiers (e.g., 'the extremely fast database').",
      "Verb Phrase contains a main verb plus auxiliaries or helping verbs (e.g., 'has been testing').",
      "Adjective Phrase modifies a noun, centering on an adjective (e.g., 'very rich in syntax details').",
      "Adverb Phrase modifies a verb, adjective, or adverb, centering on an adverb (e.g., 'quite exceptionally well').",
      "Prepositional Phrase starts with a preposition and ends with its noun object (e.g., 'across the terminal').",
      "Participial Phrase begins with a participle (present or past) acting as an adjective descriptor (e.g., 'Having finished the compilation, Emily slept').",
      "Gerund Phrase begins with a verb ending in -ing serving as a noun (e.g., 'Writing clean code is mandatory').",
      "Infinitive Phrase begins with a base verb preceded by 'to' functioning as a noun, adjective, or adverb (e.g., 'to run this secure script').",
      "Absolute Phrase modifies the whole sentence, consisting of a noun followed by a participle (e.g., 'Our software having loaded, we closed our laptops')."
    ],
    keyTakeaways: [
      "Do not confuse gerund phrases (nouns) with participial phrases (adjectives). (e.g., 'Running tests is fun' -> Gerund vs 'An developer, running tests, found a bug' -> Participial).",
      "An absolute phrase contains a noun and modifier, but lacks an auxiliary verb, so it cannot stand alone as a sentence."
    ],
    examples: [
      {
        id: "phrase_ex1",
        sentence: "To build secure websites, writing clean code is required.",
        parts: [
          { word: "To", label: "Infinitive Marker", color: "indigo", note: "Introduces the infinitive verb form." },
          { word: "build", label: "Infinitive Verb", color: "rose", note: "Head verb of the infinitive phrase." },
          { word: "secure", label: "Adjective Modifier", color: "amber", note: "Modifies the target noun websites." },
          { word: "websites,", label: "Infinitive Object", color: "violet", note: "Completes the adverbial infinitive phrase: 'To build secure websites'." },
          { word: "writing", label: "Gerund Head", color: "rose", note: "An -ing verb serving as the subject of the main clause." },
          { word: "clean", label: "Adjective Modifier", color: "amber", note: "Modifies the noun 'code' inside the gerund phrase." },
          { word: "code", label: "Gerund Object", color: "violet", note: "Completes the noun gerund phrase: 'writing clean code'." },
          { word: "is", label: "Auxiliary Verb", color: "teal", note: "Helping verb forming passive voice." },
          { word: "required.", label: "Past Participle Verb", color: "rose", note: "Forms passive predicate asserting the core condition." }
        ],
        overallExplanation: "This sentence showcases two major verbal phrases: an adverbial infinitive phrase at the start ('To build secure websites') and a nominal gerund phrase acting as the subject ('writing clean code')."
      }
    ],
    exercises: [
      {
        id: "phrase_q1",
        question: "Identify the type of phrase underlined: '[The database connection having timed out], Emily restarted the server.'",
        options: [
          "Prepositional Phrase",
          "Participial Phrase",
          "Absolute Phrase",
          "Gerund Phrase"
        ],
        correctAnswer: "Absolute Phrase",
        explanation: "'The database connection having timed out' is an absolute phrase (noun + participle modification modifying the entire independent clause)."
      },
      {
        id: "phrase_q2",
        question: "In the sentence 'She loves [compiling the script with optimize flags]', specify the underlined phrase:",
        options: [
          "Noun Phrase",
          "Infinitive Phrase",
          "Gerund Phrase",
          "Participial Phrase"
        ],
        correctAnswer: "Gerund Phrase",
        explanation: "'Compiling the script...' is a gerund phrase because it begins with the gerund 'compiling' and acts as the direct object noun of 'loves'."
      }
    ]
  },
  {
    id: "clauses_all_types",
    title: "Clauses: Structural Types",
    category: "Phrases & Clauses",
    subcategory: "Clauses",
    difficulty: "Intermediate",
    definition: "A clause is a group of words containing a subject and a working predicate. They can be of two basic structural types (Independent or Dependent/Subordinate) and classify by role into Noun, Adjective/Relative, and Adverb clauses.",
    rules: [
      "Independent Clause can stand alone as a complete sentence, expressing an independent thought (e.g., 'The system works').",
      "Dependent Clause cannot stand alone, relying on an independent clause (e.g., 'because the battery died').",
      "Noun Clause functions as a noun subject, object, or complement (e.g., 'What you wrote is correct').",
      "Adjective / Relative Clause modifies a preceding noun or pronoun, beginning with a relative pronoun (e.g., 'The code that we deployed is stable').",
      "Adverb Clause modifies a verb, adjective, or adverb, indicating time, cause, condition, or concession (e.g., 'When the backup completes, exit the shell')."
    ],
    keyTakeaways: [
      "Noun clauses are often introduced by 'that', 'whether', or relative questions, but they replace noun positions, e.g. 'I know [what you did]' (Direct Object).",
      "Adjective clauses are either restrictive (no commas; essential to meaning) or non-restrictive (with commas; extra info).",
      "Dependent clauses must connect to at least one independent clause to avoid writing a sentence fragment."
    ],
    examples: [
      {
        id: "clause_ex1",
        sentence: "When the server starts, you must check what changed.",
        parts: [
          { word: "When", label: "Subordinating Conjunction", color: "indigo", note: "Introduces the adverb clause of time." },
          { word: "the", label: "Article", color: "sky", note: "Article." },
          { word: "server", label: "Noun Subject 1", color: "emerald", note: "Subject of dependent clause." },
          { word: "starts,", label: "Verb 1", color: "rose", note: "Predicate of the dependent adverb clause." },
          { word: "you", label: "Subject 2", color: "emerald", note: "Main independent clause subject." },
          { word: "must", label: "Modal Auxiliary", color: "teal", note: "Expresses obligation." },
          { word: "check", label: "Main Transitive Verb", color: "rose", note: "Requires an object clause." },
          { word: "what", label: "Interrogative Connector", color: "fuchsia", note: "Introduces the noun clause." },
          { word: "changed.", label: "Verb 3", color: "rose", note: "Predicate of the direct object noun clause." }
        ],
        overallExplanation: "This compound-structure sentence contains an initial dependent adverb clause ('When the server starts'), a main independent clause, and a concluding dependent noun clause ('what changed') acting as the object of 'check'."
      }
    ],
    exercises: [
      {
        id: "clause_q1",
        question: "Identify the clause type of '[that the server failed on line 12]': 'The developer realized [that the server failed on line 12].'",
        options: [
          "Independent Clause",
          "Adjective Clause",
          "Noun Clause",
          "Adverb Clause"
        ],
        correctAnswer: "Noun Clause",
        explanation: "'that the server failed on line 12' is a noun clause acting as the direct object of the transitive verb 'realized'."
      },
      {
        id: "clause_q2",
        question: "What is the role of '[whose code compiled successfully]' in 'The dev, [whose code compiled successfully], received a credit'?",
        options: [
          "Noun Clause",
          "Adjective/Relative Clause modifying 'The dev'",
          "Adverb Clause of cause",
          "Independent Clause"
        ],
        correctAnswer: "Adjective/Relative Clause modifying 'The dev'",
        explanation: "This clause acts as an adjective clause because it begins with the relative possessive pronoun 'whose' and modifies the preceding noun 'The dev'."
      }
    ]
  }
];
