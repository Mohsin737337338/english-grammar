import { GrammarTopic } from "../../types";

export const partsOfSpeechTopics: GrammarTopic[] = [
  {
    id: "nouns_all_types",
    title: "Nouns & All 7 Types",
    category: "Parts of Speech",
    subcategory: "Nouns",
    difficulty: "Beginner",
    definition: "A noun is a word that names a person, place, thing, idea, or activity. Nouns are divided into seven major classes: Proper, Common, Concrete, Abstract, Collective, Countable/Uncountable, and Compound.",
    rules: [
      "Proper Nouns start with capital letters and refer to specific, unique items (e.g., 'London', 'Google', 'Emily').",
      "Common Nouns name general, non-specific things (e.g., 'city', 'corporation', 'girl').",
      "Concrete Nouns indicate physical objects detectable by the senses (e.g., 'table', 'smoke', 'pizza').",
      "Abstract Nouns name non-physical ideas, qualities, or concepts (e.g., 'happiness', 'logic', 'justice').",
      "Collective Nouns represent groups of individuals functioning as a single unit (e.g., 'team', 'swarm', 'family').",
      "Countable Nouns have singular and plural forms (e.g., 'bug', 'bugs'), whereas Uncountable Nouns represent masses or entities that cannot be counted directly (e.g., 'water', 'advice').",
      "Compound Nouns are formed by joining two or more words (e.g., 'database', 'software', 'mother-in-law')."
    ],
    keyTakeaways: [
      "Collective nouns usually take singular verbs in American English ('The team builds...') but can take plural verbs in British English ('The team build...').",
      "Abstract nouns never take plural form unless referring to recurring specific instances (e.g., 'behaviors').",
      "Notice spelling rules for hyphenated compound nouns."
    ],
    examples: [
      {
        id: "noun_all_ex1",
        sentence: "Emily led the database development team yesterday.",
        parts: [
          { word: "Emily", label: "Proper Noun", color: "emerald", note: "Names a specific person; must be capitalized." },
          { word: "led", label: "Transitive Verb", color: "rose", note: "Past tense of lead; describes action." },
          { word: "the", label: "Definite Article", color: "sky", note: "Specifies the database team." },
          { word: "database", label: "Compound Noun Part", color: "indigo", note: "A noun modifier (database) joined with development to classify the team." },
          { word: "development", label: "Abstract Noun", color: "violet", note: "Abstract noun representing the process of creation." },
          { word: "team", label: "Collective Noun", color: "teal", note: "Represents a group of developers acting as one unit." },
          { word: "yesterday.", label: "Adverb", color: "fuchsia", note: "Temp adverb highlighting when the action occurred." }
        ],
        overallExplanation: "This sentence contains a Proper Noun (Emily) acting as the subject, a Collective Noun (team) as the direct object, modified by abstract and compound noun elements (database development)."
      }
    ],
    exercises: [
      {
        id: "noun_all_q1",
        question: "In the sentence 'Our software team received great advice', identify the collective noun and the uncountable noun:",
        options: [
          "'software' (collective), 'team' (uncountable)",
          "'team' (collective), 'advice' (uncountable)",
          "'team' (collective), 'software' (uncountable)",
          "'advice' (collective), 'team' (uncountable)"
        ],
        correctAnswer: "'team' (collective), 'advice' (uncountable)",
        explanation: "'Team' represents a group acting as a unit (collective), and 'advice' cannot be counted as separate units (uncountable)."
      },
      {
        id: "noun_all_q2",
        question: "Which of the following contains a proper compound noun?",
        options: [
          "The hardware developer traveled to New York.",
          "We ate slices of pizza in the breakroom.",
          "Our mother-in-law bought a laptop.",
          "The swarming swarm of bees flew away."
        ],
        correctAnswer: "The hardware developer traveled to New York.",
        explanation: "'New York' is a Proper compound noun. While 'mother-in-law' is a compound noun, it is common, not proper."
      }
    ]
  },
  {
    id: "pronouns_all_types",
    title: "Pronouns & All 7 Types",
    category: "Parts of Speech",
    subcategory: "Pronouns",
    difficulty: "Beginner",
    definition: "A pronoun is a word used in place of a noun to avoid word repetition. The seven major types are: Personal, Possessive, Reflexive, Relative, Demonstrative, Indefinite, and Interrogative.",
    rules: [
      "Personal Pronouns represent specific people or things as subjects or objects (e.g., 'I', 'he', 'they', 'me', 'them').",
      "Possessive Pronouns show ownership without a following noun (e.g., 'mine', 'yours', 'theirs'). Do not confuse with possessive adjectives ('my', 'their').",
      "Reflexive Pronouns refer back to the subject of the clause (e.g., 'myself', 'himself', 'themselves').",
      "Relative Pronouns connect dependent clauses to independent clauses (e.g., 'who', 'whom', 'which', 'that', 'whose').",
      "Demonstrative Pronouns point out specific things relative to the speaker (e.g., 'this', 'that', 'these', 'those').",
      "Indefinite Pronouns refer to non-specific people or items (e.g., 'someone', 'everything', 'anybody', 'each', 'none').",
      "Interrogative Pronouns introduce questions (e.g., 'who', 'what', 'which', 'whose')."
    ],
    keyTakeaways: [
      "Relative pronoun 'who' is used for subjects, and 'whom' is for objects (e.g., 'The person who updated the code...' vs 'The dev whom I invited...').",
      "Singular indefinite pronouns (e.g., 'everyone', 'something', 'each') require singular verbs (e.g., 'Everyone is present').",
      "Demonstrative pronouns stand alone; demonstrative adjectives modify a noun (e.g., 'This is sweet' vs 'This coffee is sweet')."
    ],
    examples: [
      {
        id: "pronoun_ex1",
        sentence: "He found the code that refreshed itself.",
        parts: [
          { word: "He", label: "Personal Pronoun (Subject)", color: "emerald", note: "Third-person singular masculine subject pronoun." },
          { word: "found", label: "Transitive Verb", color: "rose", note: "Past tense simple verb searching for an object." },
          { word: "the", label: "Definite Article", color: "sky", note: "Modifies code." },
          { word: "code", label: "Noun", color: "emerald", note: "The thing that was found." },
          { word: "that", label: "Relative Pronoun", color: "teal", note: "Connects the description clause back to the antecedent 'code'." },
          { word: "refreshed", label: "Verb", color: "rose", note: "Past tense action inside the adjective clause." },
          { word: "itself.", label: "Reflexive Pronoun", color: "fuchsia", note: "Refers back to 'code' as the receiver of the action." }
        ],
        overallExplanation: "This active sentence employs a personal pronoun 'He' as the primary actor, a relative pronoun 'that' linking the description, and a reflexive pronoun 'itself' targeting the code."
      }
    ],
    exercises: [
      {
        id: "pron_q1",
        question: "Choose the sentence containing an INDEFINITE pronoun:",
        options: [
          "This is the script that I fixed.",
          "Everyone voted in favor of the compiler upgrade.",
          "She explained the database schema herself.",
          "Which script compiles the fastest?"
        ],
        correctAnswer: "Everyone voted in favor of the compiler upgrade.",
        explanation: "'Everyone' is an indefinite pronoun, referring to a general group without specifying individual identities."
      },
      {
        id: "pron_q2",
        question: "Correct the pronoun case: 'The team invited Sarah and _____ to review the pull request.'",
        options: [
          "I",
          "me",
          "myself",
          "mine"
        ],
        correctAnswer: "me",
        explanation: "'Sarah and me' is the correct object phrase receiving the action 'invited'. To test, drop Sarah: 'invited me' (correct) vs 'invited I' (incorrect)."
      }
    ]
  },
  {
    id: "verbs_all_types",
    title: "Verbs & All 8 Types",
    category: "Parts of Speech",
    subcategory: "Verbs",
    difficulty: "Beginner",
    definition: "Verbs are action or state-of-being words that form the predicate of a sentence. They classify into: Action, Stative, Transitive, Intransitive, Auxiliary, Modal, Phrasal, and Irregular verbs.",
    rules: [
      "Action Verbs express physical or mental actions (e.g., 'run', 'code', 'think').",
      "Stative Verbs describe states, feelings, or relationships rather than physical activities (e.g., 'know', 'believe', 'exist'). They are rarely used in continuous aspects.",
      "Transitive Verbs require a direct object to complete their meaning (e.g., 'launch [the script]').",
      "Intransitive Verbs complete their meaning without a direct object (e.g., 'occur', 'sleep', 'happen').",
      "Auxiliary Verbs are helping verbs that construct tense, aspect, or voice (e.g., 'be', 'have', 'do').",
      "Modal Verbs express necessity, ability, permission, or probability (e.g., 'can', 'must', 'should').",
      "Phrasal Verbs consist of a verb plus a particle (preposition/adverb) yielding a unique idiom (e.g., 'look up', 'shut down').",
      "Irregular Verbs do not form their past tense with the suffix '-ed' (e.g., 'go' -> 'went', 'build' -> 'built')."
    ],
    keyTakeaways: [
      "A transitive verb will always answer 'what?' or 'who?' immediately after (e.g., 'He deployed... what? The app').",
      "Never say 'I am knowing' as 'know' is a stative verb. Use flat present: 'I know'.",
      "Phrasal verbs can be separable ('shut it down') or inseparable ('run into trouble')."
    ],
    examples: [
      {
        id: "verb_ex1",
        sentence: "You must shut down the main node immediately.",
        parts: [
          { word: "You", label: "Subject Pronoun", color: "emerald", note: "The target listener." },
          { word: "must", label: "Modal Verb", color: "indigo", note: "Expresses strong obligation or necessity." },
          { word: "shut", label: "Phrasal Verb (Base)", color: "rose", note: "First element of the phrasal verb 'shut down'." },
          { word: "down", label: "Phrasal Particle", color: "rose", note: "The particle completing the idiom 'shut down' (meaning to terminate)." },
          { word: "the", label: "Definite Article", color: "sky", note: "Points to a specific node." },
          { word: "main", label: "Adjective", color: "amber", note: "Modifies the level of the node." },
          { word: "node", label: "Noun (Direct Object)", color: "violet", note: "The recipient noun that is shut down." },
          { word: "immediately.", label: "Adverb", color: "fuchsia", note: "Adverb of time explaining when." }
        ],
        overallExplanation: "This sentence showcases the modal auxiliary 'must' paired with the transitive phrasal verb 'shut down' which acts on the direct object 'node'."
      }
    ],
    exercises: [
      {
        id: "verb_q1",
        question: "Which of the following contains a strictly STATIVE verb?",
        options: [
          "We are running a speed audit.",
          "I believe the program runs on Unix.",
          "She typed the commands quickly.",
          "The system shut down on its own."
        ],
        correctAnswer: "I believe the program runs on Unix.",
        explanation: "'Believe' describes a cognitive state or feeling rather than an active physical motion, which is a characteristic of stative verbs."
      },
      {
        id: "verb_q2",
        question: "Identify the transitive verb in: 'The developer wrote a function before she slept.'",
        options: [
          "wrote",
          "slept",
          "before",
          "function"
        ],
        correctAnswer: "wrote",
        explanation: "'Wrote' is transitive because it acts on the direct object 'a function'. 'Slept' is intransitive because it does not accept a direct object."
      }
    ]
  },
  {
    id: "adjectives_all_types",
    title: "Adjectives & All 7 Types",
    category: "Parts of Speech",
    subcategory: "Adjectives",
    difficulty: "Beginner",
    definition: "Adjectives are modifiers that describe, qualify, or limit nouns and pronouns. They classify into: Descriptive, Quantitative, Demonstrative, Possessive, Interrogative, Indefinite, and Distributive.",
    rules: [
      "Descriptive Adjectives highlight attributes or sizes (e.g., 'responsive', 'large', 'blue').",
      "Quantitative Adjectives state counts or approximate measures (e.g., 'many', 'few', 'twelve').",
      "Demonstrative Adjectives modify nouns by pointing them out (e.g., 'this server', 'those computers').",
      "Possessive Adjectives show noun ownership (e.g., 'my application', 'their framework'). Do not confuse with possessive pronouns.",
      "Interrogative Adjectives ask questions about nouns (e.g., 'which script?', 'whose code?').",
      "Indefinite Adjectives modify nouns vaguely (e.g., 'some variables', 'any workstation').",
      "Distributive Adjectives refer to nouns individually within a group (e.g., 'each branch', 'every query', 'either solution')."
    ],
    keyTakeaways: [
      "Remember the standard English adjective order: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose (OSASCOMP).",
      "Adjectives do not change structure for plural nouns (e.g., 'difficult books', not 'difficults books').",
      "Coordinating adjectives deserve commas (e.g., 'a robust, responsive design'), while cumulative adjectives do not (e.g., 'three modern SQL databases')."
    ],
    examples: [
      {
        id: "adj_ex1",
        sentence: "Each developer reviewed my new script.",
        parts: [
          { word: "Each", label: "Distributive Adjective", color: "teal", note: "Modifies developer, pointing them out individually." },
          { word: "developer", label: "Noun (Subject)", color: "emerald", note: "Singular count noun acting as subject." },
          { word: "reviewed", label: "Verb", color: "rose", note: "Past tense action verb." },
          { word: "my", label: "Possessive Adjective", color: "indigo", note: "Modifies script, showing ownership belonging to the speaker." },
          { word: "new", label: "Descriptive Adjective", color: "amber", note: "Describes the age/state attribute of the script." },
          { word: "script.", label: "Noun (Object)", color: "violet", note: "The direct object receiving the review." }
        ],
        overallExplanation: "This active sentence uses 'Each' to distribute the developers and 'my' + 'new' to modify the properties of 'script'."
      }
    ],
    exercises: [
      {
        id: "adj_q1",
        question: "Identify the phrase that conforms to the standard English Adjective Order (OSASCOMP):",
        options: [
          "a metal ancient beautiful box",
          "a beautiful ancient metal box",
          "an ancient metal beautiful box",
          "a beautiful metal ancient box"
        ],
        correctAnswer: "a beautiful ancient metal box",
        explanation: "The order is Opinion (beautiful) -> Age (ancient) -> Material (metal) preceding the noun (box)."
      },
      {
        id: "adj_q2",
        question: "In the sentence 'Which version did you flash on those microprocessors?', specify 'Which' and 'those' types:",
        options: [
          "'Which' is Demonstrative; 'those' is Interrogative",
          "'Which' is Interrogative; 'those' is Indefinite",
          "'Which' is Interrogative; 'those' is Demonstrative",
          "'Which' is Possessive; 'those' is Distributive"
        ],
        correctAnswer: "'Which' is Interrogative; 'those' is Demonstrative",
        explanation: "'Which' asks a question specifying a noun (Interrogative adjective); 'those' points out specific items (Demonstrative adjective)."
      }
    ]
  },
  {
    id: "adverbs_all_types",
    title: "Adverbs & All 6 Types",
    category: "Parts of Speech",
    subcategory: "Adverbs",
    difficulty: "Beginner",
    definition: "An adverb is a modifier that explains, details, or restricts a verb, adjective, or another adverb. Adverbs answer questions like 'how?', 'when?', 'where?', or 'to what extent?'. The six main types are: Manner, Time, Place, Frequency, Degree, and Conjunctive adverbs.",
    rules: [
      "Adverbs of Manner describe how an action occurs (e.g., 'he compiled successfully', 'ran quickly').",
      "Adverbs of Time explain when or for how long (e.g., 'we will update tomorrow', 'then we ran').",
      "Adverbs of Place outline location or direction (e.g., 'keep the resources here', 'move backward').",
      "Adverbs of Frequency state how often something is carried out (e.g., 'always test', 'sometimes fails').",
      "Adverbs of Degree indicate scale, measure, or intensity (e.g., 'extremely hot', 'very fast', 'totally ruined').",
      "Conjunctive Adverbs link independent clauses together, requiring a semicolon before and a comma after (e.g., '; therefore,', '; however,', '; nested;')."
    ],
    keyTakeaways: [
      "Not all adverbs end in '-ly' (e.g., 'fast', 'well', 'hard', 'always').",
      "Do not confuse the adjective 'good' with the adverb 'well'. (e.g., 'The code is good' vs 'The code runs well').",
      "Adverbs of degree modify other adverbs or adjectives (e.g., 'quite easily')."
    ],
    examples: [
      {
        id: "adv_ex1",
        sentence: "He completed the backup extremely quickly yesterday.",
        parts: [
          { word: "He", label: "Subject", color: "emerald", note: "Subject pronoun." },
          { word: "completed", label: "Verb", color: "rose", note: "Past tense action." },
          { word: "the", label: "Article", color: "sky", note: "Specifies backup." },
          { word: "backup", label: "Noun (Object)", color: "violet", note: "The direct object." },
          { word: "extremely", label: "Adverb of Degree", color: "indigo", note: "Modifies the adverb 'quickly', scaling up its intensity." },
          { word: "quickly", label: "Adverb of Manner", color: "fuchsia", note: "Describes how the completion was conducted." },
          { word: "yesterday.", label: "Adverb of Time", color: "teal", note: "States exactly when the action was taken." }
        ],
        overallExplanation: "This structure showcases consecutive adverbs where 'extremely' scales 'quickly' (Degree -> Manner), coupled with the temporal marker 'yesterday'."
      }
    ],
    exercises: [
      {
        id: "adv_q1",
        question: "In the sentence 'The server is highly responsive; therefore, tests compile very quickly', identify a conjunctive adverb and an adverb of degree:",
        options: [
          "'highly' (conjunctive), 'very' (degree)",
          "'therefore' (conjunctive), 'highly' (degree)",
          "'quickly' (conjunctive), 'therefore' (degree)",
          "'responsive' (conjunctive), 'very' (degree)"
        ],
        correctAnswer: "'therefore' (conjunctive), 'highly' (degree)",
        explanation: "'Therefore' functions to connect clauses conjunctive-wise, and 'highly' measures the degree of the adjective 'responsive'."
      },
      {
        id: "adv_q2",
        question: "Correct the adverb usage: 'The custom caching engine operates _____.'",
        options: [
          "very good",
          "extremely good",
          "exceptionally well",
          "efficiently good"
        ],
        correctAnswer: "exceptionally well",
        explanation: "'Operates' is an action verb, so it requires an adverb ('well', not the adjective 'good'). 'Exceptionally' acts correctly as a degree adverb."
      }
    ]
  },
  {
    id: "prepositions",
    title: "Prepositions (Simple vs. Complex)",
    category: "Parts of Speech",
    subcategory: "Prepositions",
    difficulty: "Beginner",
    definition: "A preposition is a word or group of words used before a noun, pronoun, or noun phrase to show direction, time, place, spatial relationship, or to introduce an object. They can be simple (one-word) or compound/phrasal (multi-word).",
    rules: [
      "Simple Prepositions are single words that establish fundamental links (e.g., 'in', 'on', 'at', 'under', 'through', 'since', 'by').",
      "Double Prepositions are formed by merging simple prepositions (e.g., 'into', 'onto', 'upon', 'within', 'without').",
      "Compound / Phrasal Prepositions consist of multiple words acting as a relational unit (e.g., 'according to', 'in front of', 'because of', 'with respect to').",
      "Prepositions of Time specify duration or schedules (e.g., 'at 9:00', 'on Monday', 'in summer', 'for two hours').",
      "Prepositions of Place show location relative coordinates (e.g., 'above the fold', 'below the layout margin', 'inside')."
    ],
    keyTakeaways: [
      "Prepositions must be followed by their object (noun/pronoun/gerund), never by a flat finite verb.",
      "Be careful with standard prepositions in idioms (e.g., 'comply with', NOT 'comply to'; 'independent of', NOT 'independent from').",
      "The preposition 'to' is also used as an infinitive marker (e.g., 'to run' is a verb form, whereas 'to the gym' is a prepositional phrase)."
    ],
    examples: [
      {
        id: "prep_ex1",
        sentence: "He copied the data into the database because of the outage.",
        parts: [
          { word: "He", label: "Subject", color: "emerald", note: "Personal pronoun subject." },
          { word: "copied", label: "Verb", color: "rose", note: "Transitive past tense action." },
          { word: "the", label: "Article", color: "sky", note: "Definite article." },
          { word: "data", label: "Noun (Object)", color: "violet", note: "The direct object." },
          { word: "into", label: "Double Preposition", color: "indigo", note: "Shows direction of movement into an interior space (the database)." },
          { word: "the", label: "Article", color: "sky", note: "Definite article." },
          { word: "database", label: "Noun Obj-of-Prep", color: "teal", note: "The object of the preposition 'into'." },
          { word: "because", label: "Phrasal Preposition 1", color: "fuchsia", note: "First half of the phrasal preposition 'because of'." },
          { word: "of", label: "Phrasal Preposition 2", color: "fuchsia", note: "Second half of the phrasal preposition 'because of' showing causation." },
          { word: "the", label: "Article", color: "sky", note: "Definite article." },
          { word: "outage.", label: "Noun Obj-of-Prep", color: "teal", note: "The object of the causational phrasal preposition." }
        ],
        overallExplanation: "This sentence contains two prepositional links: 'into the database' (spatial direction) and the phrasal relation 'because of the outage' (causation)."
      }
    ],
    exercises: [
      {
        id: "prep_q1",
        question: "Find the sentence where the preposition is used INCORRECTLY according to standard prepositional idioms:",
        options: [
          "The script is entirely independent of external variables.",
          "We must comply with the secure hashing guidelines.",
          "He was angry with the continuous compilation crashes.",
          "She is capable to build standard full-stack widgets."
        ],
        correctAnswer: "She is capable to build standard full-stack widgets.",
        explanation: "The correct prepositional idiom is 'capable of building' (preposition + gerund), not 'capable to build'."
      },
      {
        id: "prep_q2",
        question: "Select the phrasal preposition that shows causation or justification:",
        options: [
          "on top of",
          "in spite of",
          "on behalf of",
          "by virtue of"
        ],
        correctAnswer: "by virtue of",
        explanation: "'By virtue of' means by reason of or because of (causational), whereas 'in spite of' shows concession and 'on top of' shows physical/cumulative position."
      }
    ]
  },
  {
    id: "conjunctions_all_types",
    title: "Conjunctions & All 3 Types",
    category: "Parts of Speech",
    subcategory: "Conjunctions",
    difficulty: "Beginner",
    definition: "A conjunction is a connector word used to link words, phrases, or clauses. The three primary categories are: Coordinating, Subordinating, and Correlative conjunctions.",
    rules: [
      "Coordinating Conjunctions connect words or clauses of equal grammatical importance. Remember them using the acronym FANBOYS: 'For', 'And', 'Nor', 'But', 'Or', 'Yet', 'So'.",
      "Subordinating Conjunctions introduce dependent clauses, establishing a relationship of cause, contrast, condition, or time (e.g., 'although', 'because', 'if', 'since', 'while', 'unless').",
      "Correlative Conjunctions function in paired equivalents to join matching sentence parts (e.g., 'either... or', 'neither... nor', 'both... and', 'not only... but also')."
    ],
    keyTakeaways: [
      "Always set a comma before a coordinating conjunction when joining two independent clauses (e.g., 'The script failed, but we resolved it').",
      "When a subordinating clause begins a sentence, use a comma at its end (e.g., 'Although the code built, it crashed'). If the main clause comes first, do not use a comma ('The code built although it crashed').",
      "Ensure grammatical parallel structure with correlative conjunctions (e.g., 'either by writing code or by testing' matches prepositional structures)."
    ],
    examples: [
      {
        id: "conj_ex1",
        sentence: "Although the code compiled, neither you nor Emily tested it.",
        parts: [
          { word: "Although", label: "Subordinating Conjunction", color: "indigo", note: "Introduces a dependent clause showing contrast or concession." },
          { word: "the", label: "Article", color: "sky", note: "Articles." },
          { word: "code", label: "Noun (Subject)", color: "emerald", note: "Subject of subordinate clause." },
          { word: "compiled,", label: "Verb", color: "rose", note: "Verb of subordinate clause." },
          { word: "neither", label: "Correlative Conj 1", color: "fuchsia", note: "First element of the paired correlative conjunction." },
          { word: "you", label: "Pronoun Subject 1", color: "teal", note: "First subjective noun equivalent." },
          { word: "nor", label: "Correlative Conj 2", color: "fuchsia", note: "Second element of the paired correlative conjunction." },
          { word: "Emily", label: "Proper Noun Subject 2", color: "teal", note: "Second subjective noun equivalent." },
          { word: "tested", label: "Verb", color: "rose", note: "The shared verb of the correlative subject." },
          { word: "it.", label: "Pronoun Object", color: "violet", note: "Direct object pronoun." }
        ],
        overallExplanation: "This sentence begins with a dependent concessive clause using 'Although' followed by an independent clause containing a paired correlative subject structure ('neither... nor')."
      }
    ],
    exercises: [
      {
        id: "conj_q1",
        question: "Select the sentence with CORRECT punctuation for its subordinating clause insertion:",
        options: [
          "The main query is slow because, we didn't index the table.",
          "Because the developer didn't index the table, the query was slow.",
          "Because the developer didn't index the table the query was slow.",
          "The query was slow, because the table was not indexed."
        ],
        correctAnswer: "Because the developer didn't index the table, the query was slow.",
        explanation: "When a subordinate clause begins a sentence (using 'Because'), a comma must separate it from the main independent clause. If it comes second, no comma is needed."
      },
      {
        id: "conj_q2",
        question: "Identify the sentence violating PARALLEL structure with its correlative conjunctions:",
        options: [
          "She wants either to write code or to create animations.",
          "He has not only updated the local memory but also saved a backup.",
          "Neither the database was restored nor the client compiled.",
          "We must both inspect the layout and verify the server."
        ],
        correctAnswer: "Neither the database was restored nor the client compiled.",
        explanation: "In optimal parallel style, it should be 'Neither was the database restored nor was the client compiled' or simply 'Neither the database nor the client compiled.' to balance the items."
      }
    ]
  },
  {
    id: "interjections",
    title: "Interjections & Expressions",
    category: "Parts of Speech",
    subcategory: "Interjections",
    difficulty: "Beginner",
    definition: "An interjection is a word, expression, or sound inserted into a sentence to communicate immediate exclamation or psychological emotion (e.g., surprise, pain, joy, hesitation). They lack strict grammatical links to other sentence parts.",
    rules: [
      "Strong Interjections express high intensity and are followed by exclamation points (e.g., 'Ouch! That compile failed.', 'Oh! I see it.').",
      "Mild Interjections represent casual hesitation, compliance, or entry points, and are followed by commas (e.g., 'Well, let's explore this.', 'Oh, I forgot.').",
      "Yes/No words when acting as isolated entry points can be treated as mild interjections (e.g., 'Yes, it works fine.')."
    ],
    keyTakeaways: [
      "Interjections should be used sparingly in formal prose, but are important in dialogues and conversational registers.",
      "They have no syntax relation as modifiers, subjects, or actions to other clauses."
    ],
    examples: [
      {
        id: "inter_ex1",
        sentence: "Hooray! The server compiled successfully today.",
        parts: [
          { word: "Hooray!", label: "Strong Interjection", color: "fuchsia", note: "Expresses joy or celebration; isolated by an exclamation point." },
          { word: "The", label: "Article", color: "sky", note: "Precedes server." },
          { word: "server", label: "Noun Subject", color: "emerald", note: "The actor noun." },
          { word: "compiled", label: "Verb", color: "rose", note: "Past simple intransitive action." },
          { word: "successfully", label: "Adverb", color: "indigo", note: "Manner adverb." },
          { word: "today.", label: "Adverb", color: "teal", note: "Temporal adverb." }
        ],
        overallExplanation: "This sentence isolates the strong emotion of victory via the word 'Hooray!' before launching into a standard declarative statement."
      }
    ],
    exercises: [
      {
        id: "inter_q1",
        question: "Which of the following contains a MILD interjection used to introduce a statement?",
        options: [
          "Hooray! We got the certificate.",
          "Indeed, that is a better layout paradigm.",
          "Ouch! I made a bad git commit.",
          "Oops! The server just crashed."
        ],
        correctAnswer: "Indeed, that is a better layout paradigm.",
        explanation: "'Indeed' is used here as a mild interjection to assert consensus, separated by a comma rather than an exclamation point."
      }
    ]
  }
];
