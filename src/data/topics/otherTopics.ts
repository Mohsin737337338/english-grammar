import { GrammarTopic } from "../../types";

export const otherTopics: GrammarTopic[] = [
  {
    id: "articles_all",
    title: "Articles: Definite, Indefinite & Zero",
    category: "Other Topics",
    subcategory: "Articles",
    difficulty: "Beginner",
    definition: "Articles are determiners used to clarify whether a noun refers to something specific or general. They are divided into: Definite ('the'), Indefinite ('a', 'an'), and Zero Article (no article).",
    rules: [
      "Use Indefinite Article 'a' before singular countable nouns starting with consonant sounds (e.g., 'a database', 'a user').",
      "Use Indefinite Article 'an' before singular countable nouns starting with vowel sounds (e.g., 'an index', 'an hour' - silent 'h').",
      "Use Definite Article 'the' when referring to specific nouns known to both speaker and listener, or singular unique items (e.g., 'the sun', 'the code we deployed').",
      "Use Zero Article when referring to plural countable or uncountable nouns in a general sense (e.g., 'Water is essential', 'Developers write software')."
    ],
    keyTakeaways: [
      "The choice of 'a' vs 'an' depends on the spoken sound, not the spelling consonant/vowel letter (e.g., 'a university' because it starts with a consonant /j/ sound).",
      "Proper geographical names often have strict article rules (e.g., 'the United Kingdom' vs 'Germany')."
    ],
    examples: [
      {
        id: "art_ex1",
        sentence: "The developer spent an hour on a responsive design.",
        parts: [
          { word: "The", label: "Definite Article", color: "sky", note: "Refers to a specific developer known in this context." },
          { word: "developer", label: "Noun Subject", color: "emerald", note: "Subject singular noun." },
          { word: "spent", label: "Verb", color: "rose", note: "Past simple of spend." },
          { word: "an", label: "Indefinite Article ('an')", color: "indigo", note: "Precedes 'hour' because 'hour' begins with a vowel sound /aʊ/." },
          { word: "hour", label: "Noun Duration", color: "violet", note: "Object noun denoting duration." },
          { word: "on", label: "Preposition", color: "teal", note: "Preposition leading into location." },
          { word: "a", label: "Indefinite Article ('a')", color: "indigo", note: "Precedes 'responsive' because it begins with consonant sound /r/." },
          { word: "responsive", label: "Adjective Modifier", color: "amber", note: "Describes design." },
          { word: "design.", label: "Noun Obj-of-Prep", color: "teal", note: "Object of preposition." }
        ],
        overallExplanation: "This example shows the definite article 'The' denoting a specific developer, 'an' before 'hour' due to a vocal vowel sound, and 'a' before 'responsive' due to a consonant sound."
      }
    ],
    exercises: [
      {
        id: "art_q1",
        question: "Select the sentence with CORRECT article usage:",
        options: [
          "She bought an computer to run a software.",
          "The hardware developer goes to university with an backpack.",
          "We checked a system variables of the computer.",
          "We spent an hour reviewing a useful guide."
        ],
        correctAnswer: "We spent an hour reviewing a useful guide.",
        explanation: "'Hour' starts with a vowel sound (silent 'h'), so it gets 'an'. 'Useful' starts with a consonant /j/ sound (yoo-z-ful), so it gets 'a'."
      }
    ]
  },
  {
    id: "modal_verbs",
    title: "Modal Verbs & Auxiliaries",
    category: "Other Topics",
    subcategory: "Modal Verbs",
    difficulty: "Beginner",
    definition: "Modal verbs are a subset of auxiliary (helping) verbs used to express ability, permission, obligation, advice, or probability. They include: can, could, may, might, must, should, will, would.",
    rules: [
      "Modal verbs are never followed by 'to' except for semi-modals ('ought to', 'have to'). The base verb is always bare (e.g., 'The system must run', NOT 'must to run').",
      "Modals do not take suffixes like -s or -ed (e.g., 'She can write code', NOT 'She cans...').",
      "Expressing Ability: Use 'can' (present) and 'could' (past or polite request).",
      "Expressing Obligation & Advice: Use 'must' (strong necessity/command) and 'should' (recommendation/advice).",
      "Expressing Probability & Concession: Use 'may', 'might', or 'could'."
    ],
    keyTakeaways: [
      "In the negative form, 'must not' expresses prohibition (forbidden), while 'do not have to' expresses lack of obligation (optional).",
      "Modals form questions by simple inversion without 'do/does' (e.g., 'Can we review?' NOT 'Do we can review?')."
    ],
    examples: [
      {
        id: "mod_ex1",
        sentence: "You should review the codebase now.",
        parts: [
          { word: "You", label: "Subject", color: "emerald", note: "Subject pronoun." },
          { word: "should", label: "Modal Verb (Advice)", color: "indigo", note: "Indicates strong and helpful recommendation." },
          { word: "review", label: "Bare Infinitive Verb", color: "rose", note: "The bare infinitive action directly following the modal verb." },
          { word: "the", label: "Article", color: "sky", note: "Article." },
          { word: "codebase", label: "Noun Object", color: "violet", note: "Direct object receiving the review." },
          { word: "now.", label: "Adverb of Time", color: "teal", note: "Expresses current timeframe." }
        ],
        overallExplanation: "This sentence showcases the modal auxiliary verb 'should' paired with a bare infinitive verb 'review' to deliver standard professional recommendation."
      }
    ],
    exercises: [
      {
        id: "mod_q1",
        question: "Choose the modal verb expressing strict PROHIBITION (forbidden action):",
        options: [
          "You should not check that master branch.",
          "You must not push to the master branch directly.",
          "You do not have to write documentation.",
          "You might not upgrade the system today."
        ],
        correctAnswer: "You must not push to the master branch directly.",
        explanation: "'Must not' stands strictly for prohibition or forbidden activity. 'Do not have to' means the activity is optional or unnecessary."
      }
    ]
  },
  {
    id: "conditionals_all",
    title: "Conditionals: 5 Structural Types",
    category: "Other Topics",
    subcategory: "Conditionals",
    difficulty: "Advanced",
    definition: "Conditionals are structures used to discuss hypothetical or real scenarios and their consequences. They comprise five configurations: Zero, First, Second, Third, and Mixed Conditionals.",
    rules: [
      "Zero Conditional (Real/Timeless): If + Present Simple, ... Present Simple (e.g., 'If it rains, paths get wet'). Explains laws of nature or absolute facts.",
      "First Conditional (Real/Future): If + Present Simple, ... Will + Base Verb (e.g., 'If you compilation, we will launch'). Refers to realistic future possibilities.",
      "Second Conditional (Hypothetical/Present): If + Past Simple, ... Would + Base Verb (e.g., 'If I had money, I would buy a host'). Refers to unreal present or future scenarios.",
      "Third Conditional (Unreal/Past): If + Past Perfect, ... Would have + Past Participle (e.g., 'If he had tested code, it would not have crashed'). Refers to hypothetical past outcomes.",
      "Mixed Conditional (Past Reason, Present Result): If + Past Perfect, ... Would + Base Verb (e.g., 'If you had saved a backup, you would be stress-free now')."
    ],
    keyTakeaways: [
      "In formal conditionals, use 'were' instead of 'was' for all subjects in Second Conditional (e.g., 'If I were you...').",
      "You can omit 'if' by inverting the auxiliary verb (e.g., 'Had you tested the compiler...' replaces 'If you had tested...').",
      "Do not use 'would' in the conditional 'if'-clause itself (e.g., write 'If we deploy early...', NOT 'If we would deploy early...')."
    ],
    examples: [
      {
        id: "cond_ex1",
        sentence: "If Emily had tested the database, it would run fine.",
        parts: [
          { word: "If", label: "Conditional Connector", color: "indigo", note: "Introduces hypothetical condition clause." },
          { word: "Emily", label: "Subject 1", color: "emerald", note: "Subject of hypothesis clause." },
          { word: "had", label: "Auxiliary Past Perfect", color: "rose", note: "Helping verb forming past perfect condition." },
          { word: "tested", label: "Past Participle Verb", color: "rose", note: "Main action participle of test." },
          { word: "the", label: "Article", color: "sky", note: "Article." },
          { word: "database,", label: "Noun Object 1", color: "violet", note: "Direct object of the conditional clause." },
          { word: "it", label: "Subject 2", color: "emerald", note: "Subject of the consequence clause." },
          { word: "would", label: "Modal Auxiliary (Result)", color: "indigo", note: "Expresses hypothetical possibility." },
          { word: "run", label: "Bare Infinitive Verb 2", color: "rose", note: "Base verb describing result." },
          { word: "fine.", label: "Adverb of Manner", color: "teal", note: "Modifies the state of running." }
        ],
        overallExplanation: "This matches the mixed conditional structure: If + Past Perfect, ... Would + Bare Verb, illustrating a hypothetical past activity ('had tested') yielding a present outcome ('would run fine')."
      }
    ],
    exercises: [
      {
        id: "cond_q1",
        question: "Determine the conditional type: 'If we compile on Linux, the shell runs faster.'",
        options: [
          "First Conditional",
          "Zero Conditional",
          "Second Conditional",
          "Third Conditional"
        ],
        correctAnswer: "Zero Conditional",
        explanation: "Both the context and grammar 'compiles... runs' (Present Simple, ... Present Simple) describe a timeless real fact of system behavior (Zero Conditional)."
      },
      {
        id: "cond_q2",
        question: "Correct the second conditional structure: 'If I was rich, I would buy a mainframe server.'",
        options: [
          "If I am rich, I would buy a mainframe server.",
          "If I was rich, I had bought a mainframe server.",
          "If I were rich, I would buy a mainframe server.",
          "If I would be rich, I would buy a mainframe server."
        ],
        correctAnswer: "If I were rich, I would buy a mainframe server.",
        explanation: "In standard formal subjunctive English (Second Conditional), 'were' is conventionally preferred over 'was' for all grammatical subjects."
      }
    ]
  },
  {
    id: "subject_verb_agreement",
    title: "Subject-Verb Agreement",
    category: "Other Topics",
    subcategory: "Subject-Verb Agreement",
    difficulty: "Intermediate",
    definition: "Subject-verb agreement requires that singular subjects take singular verbs, and plural subjects take plural verbs. This syntax correspondence is governed by several precise linguistic rules.",
    rules: [
      "Compound subjects joined by 'and' require a plural verb (e.g., 'Emily and Sarah code daily'). Exceptions occur if they represent a single concept ('Bread and butter is my meal').",
      "When subjects are joined by 'or' or 'nor', the verb agrees with the closest subject (e.g., 'Neither the master node nor the client servers are online').",
      "Parenthetical expressions (such as 'along with', 'in addition to', 'as well as') do not alter the number of the subject (e.g., 'Emily, along with her assistant, codes scripts').",
      "Indefinite pronouns ('everyone', 'somebody', 'each', 'either') are singular and require singular verbs (e.g., 'Each of the servers compiles locally')."
    ],
    keyTakeaways: [
      "Ignore modifying prepositional phrases between the subject and the verb (e.g., 'The quality of the database tables is excellent' -> 'quality is', not 'tables are').",
      "Nouns expressing amounts, distances, and quantities are treated as singular (e.g., 'Five thousand dollars is required')."
    ],
    examples: [
      {
        id: "sva_ex1",
        sentence: "Each of the server clusters is fully responsive.",
        parts: [
          { word: "Each", label: "Indefinite Pronoun Subject", color: "emerald", note: "The core subject; indefinite and strictly singular." },
          { word: "of", label: "Preposition", color: "indigo", note: "Relates cluster elements." },
          { word: "the", label: "Article", color: "sky", note: "Article." },
          { word: "server", label: "Noun Modifier", color: "teal", note: "Modifies clusters." },
          { word: "clusters", label: "Object of Preposition", color: "violet", note: "Plural noun; ignored for agreement purposes." },
          { word: "is", label: "Singular Linking Verb", color: "rose", note: "Singular verb agreeing directly with 'Each', NOT 'clusters'." },
          { word: "fully", label: "Adverb", color: "indigo", note: "Modifies adjective." },
          { word: "responsive.", label: "Adjective Modifier", color: "amber", note: "Completes the predicate description." }
        ],
        overallExplanation: "Although 'clusters' is plural, the single singular indefinite pronoun 'Each' functions as the core subject of the sentence, requiring the singular verb 'is'."
      }
    ],
    exercises: [
      {
        id: "sva_q1",
        question: "Repair the SVA error: 'The primary database, along with several backup endpoints, are offline.'",
        options: [
          "The primary database, along with several backup endpoints, is offline.",
          "The primary database, along with several backup endpoints, were offline.",
          "The primary database, along with several backup endpoints, are being offline.",
          "Leave as is (fully correct)."
        ],
        correctAnswer: "The primary database, along with several backup endpoints, is offline.",
        explanation: "'along with...' is parenthetical and does not change the core host subject 'database' which is singular, requiring 'is'."
      },
      {
        id: "sva_q2",
        question: "Select the sentence written in PERFECT agreement syntax:",
        options: [
          "Neither the team nor the supervisor code on weekends.",
          "Each of the developers have been compiling reports.",
          "Ten kilometers are a long distance to walk.",
          "The collection of script templates is stored in git."
        ],
        correctAnswer: "The collection of script templates is stored in git.",
        explanation: "'Collection' is a singular collective subject. Interrupted by plural modifier 'of scripts', it still takes the singular verb 'is'. 'Each' requires singular 'has', distance requires singular 'is', and supervisor nearest subject requires singular 'codes'."
      }
    ]
  },
  {
    id: "degrees_of_comparison",
    title: "Degrees of Comparison",
    category: "Other Topics",
    subcategory: "Degrees of Comparison",
    difficulty: "Beginner",
    definition: "Adjectives and adverbs can change form to reflect three levels or degrees of comparison: Positive, Comparative, and Superlative.",
    rules: [
      "Positive Degree: The base form representing no active comparison (e.g., 'This script is fast').",
      "Comparative Degree: Compares two subjects. Formed by adding '-er' to short modifiers or placing 'more' before multi-syllable modifiers (e.g., 'faster than Unix', 'more responsive than Node').",
      "Superlative Degree: Compares three or more participants. Formed by adding '-est' or placing 'most' before multi-syllable modifiers (e.g., 'the fastest host', 'the most responsive client').",
      "Irregular Comparisons: 'good' -> 'better' -> 'best'; 'bad' -> 'worse' -> 'worst'; 'little' -> 'less' -> 'least'."
    ],
    keyTakeaways: [
      "Do not combine '-er' with 'more' or '-est' with 'most' (e.g., 'more faster' is incorrect).",
      "Use 'than' to connect comparative links, never use 'then' (e.g., 'faster than', not 'faster then').",
      "Double consonants on suffixes sometimes apply (e.g., 'big' -> 'bigger')."
    ],
    examples: [
      {
        id: "doc_ex1",
        sentence: "This model compiles more quickly than the previous algorithm.",
        parts: [
          { word: "This", label: "Demonstrative Adjective", color: "indigo", note: "Specifies model." },
          { word: "model", label: "Noun Subject", color: "emerald", note: "The subject model." },
          { word: "compiles", label: "Verb", color: "rose", note: "Action verb." },
          { word: "more", label: "Comparative Adverb 1", color: "fuchsia", note: "Comparative modifier for quickly." },
          { word: "quickly", label: "Adverb", color: "fuchsia", note: "Head manner adverb." },
          { word: "than", label: "Comparative Connector", color: "indigo", note: "Connects contrasting participants." },
          { word: "the", label: "Article", color: "sky", note: "Article." },
          { word: "previous", label: "Adjective Modifier", color: "amber", note: "Modifies algorithm." },
          { word: "algorithm.", label: "Noun Object", color: "violet", note: "Contrasting noun." }
        ],
        overallExplanation: "This sentence contains a comparative adverb phrase 'more quickly than' linking how the positive verb 'compiles' is compare-wise faster than the preceding algorithm."
      }
    ],
    exercises: [
      {
        id: "doc_q1",
        question: "Correct the comparison error: 'This is the most cheapest server module we compiled.'",
        options: [
          "This is the more cheapest server module.",
          "This is the cheap server module.",
          "This is the cheapest server module we compiled.",
          "This is the more cheap server module."
        ],
        correctAnswer: "This is the cheapest server module we compiled.",
        explanation: "'Cheapest' already contains the superlative '-est' suffix. Adding 'most' makes it a double superlative, which is incorrect syntax."
      }
    ]
  },
  {
    id: "gerunds_and_infinitives",
    title: "Gerunds vs Infinitives",
    category: "Other Topics",
    subcategory: "Gerunds & Infinitives",
    difficulty: "Intermediate",
    definition: "Gerunds (-ing forms acting as nouns) and Infinitives ('to' + base verb) are non-finite verbals that serve various grammatical functions in a sentence.",
    rules: [
      "Gerund functions as a subject, subjective complement, or prepositional object (e.g., 'Coding is addictive', 'enjoyed testing').",
      "Infinitive functions as a noun, adjective, or adverb (e.g., 'I want to compile', 'a script to run', 'studied to learn').",
      "Some verbs dictate being followed exclusively by gerunds (e.g., 'avoid', 'dislike', 'recommend', 'practice', 'finish').",
      "Some verbs dictate being followed exclusively by infinitives (e.g., 'agree', 'decide', 'hope', 'manage', 'plan', 'refuse').",
      "Some verbs accept both with negligible change in value (e.g., 'start', 'continue'), while others shift meaning completely (e.g., 'remember', 'stop', 'try')."
    ],
    keyTakeaways: [
      "Compare: 'Stop writing' (Terminate the writing activity) vs 'Stop to write' (Halt another activity in order to begin writing).",
      "Prepositions are strictly followed by gerunds, never by infinitives (e.g., 'responsible for checking', NOT 'responsible for to check')."
    ],
    examples: [
      {
        id: "gai_ex1",
        sentence: "He practiced coding variables to optimize loading speed.",
        parts: [
          { word: "He", label: "Subject", color: "emerald", note: "Subject pronoun." },
          { word: "practiced", label: "Transitive Verb", color: "rose", note: "Verb only accepting gerund direct objects." },
          { word: "coding", label: "Noun (Gerund Direct Object)", color: "fuchsia", note: "Gerund acting as direct object of 'practiced'." },
          { word: "variables", label: "Noun Object-of-Gerund", color: "violet", note: "Direct object target of 'coding'." },
          { word: "to", label: "Infinitive Marker", color: "indigo", note: "Infinitive marker." },
          { word: "optimize", label: "Infinitive Verb (Purpose)", color: "rose", note: "Infinitive showing adverbial purpose." },
          { word: "loading", label: "Noun Modifier (Gerund)", color: "teal", note: "Gerund acting as modifier." },
          { word: "speed.", label: "Noun Object", color: "violet", note: "Object of infinitive 'optimize'." }
        ],
        overallExplanation: "This sentence showcases the gerund 'coding' acting as the direct object of 'practiced', and an adverbial infinitive 'to optimize' expressing purpose."
      }
    ],
    exercises: [
      {
        id: "gai_q1",
        question: "Select the sentence where the gerund/infinitive is used INCORRECTLY:",
        options: [
          "He managed to deploy the system on time.",
          "She recommended index debugging for performance.",
          "We decided studying clauses together last night.",
          "He avoided pushing changes to master."
        ],
        correctAnswer: "We decided studying clauses together last night.",
        explanation: "The verb 'decide' must be followed by an infinitive, not a gerund. It should be: 'We decided to study clauses'."
      }
    ]
  },
  {
    id: "question_tags",
    title: "Question Tags",
    category: "Other Topics",
    subcategory: "Question Tags",
    difficulty: "Beginner",
    definition: "A question tag is a tiny clause appended to the end of a statement, converting it into an interrogative request for agreement or validation.",
    rules: [
      "Rule of Polarity: If the main statement is positive, the tag is negative (e.g., 'The script works, doesn't it?'). If the statement is negative, the tag is positive (e.g., 'It isn't offline, is it?').",
      "Tense Alignment: The tag uses the auxiliary verb or be-verb that matches the tense of the main clause (e.g., 'Emily coded yesterday, didn't she?').",
      "Pronoun Matching: The subject of the tag must be a pronoun corresponding to the subject of the main clause (e.g., 'Sarah and you went, didn't you?')."
    ],
    keyTakeaways: [
      "Statements with 'nobody', 'nothing', or 'no' are negative, requiring a positive tag.",
      "The tag for 'I am' is irregularly 'aren't I' (e.g., 'I am compiling, aren't I?')."
    ],
    examples: [
      {
        id: "qtag_ex1",
        sentence: "The database compiling completes soon, doesn't it?",
        parts: [
          { word: "The", label: "Article", color: "sky", note: "Article." },
          { word: "database", label: "Noun Modifier", color: "teal", note: "Modifies compiling." },
          { word: "compiling", label: "Gerund Subject", color: "emerald", note: "Subject of statement." },
          { word: "completes", label: "Verb (Simple Present)", color: "rose", note: "Simple present action." },
          { word: "soon,", label: "Adverb", color: "indigo", note: "Time adverb." },
          { word: "doesn't", label: "Negative Tag Auxiliary", color: "fuchsia", note: "Matches singular simple present verb with negative polarity." },
          { word: "it?", label: "Tag Pronoun", color: "emerald", note: "Pronoun matching 'compiling'." }
        ],
        overallExplanation: "This matches standard question tag construction: a positive simple present statement expects a negative present singular auxiliary tag ('doesn't it?')."
      }
    ],
    exercises: [
      {
        id: "qtag_q1",
        question: "Find the correct tag: 'We finished the layout checks, _____?'",
        options: [
          "didn't we",
          "haven't we",
          "wasn't we",
          "not we"
        ],
        correctAnswer: "didn't we",
        explanation: "The main clause uses Simple Past ('finished') with positive polarity. Thus, we need past negative auxiliary 'didn't we'."
      }
    ]
  },
  {
    id: "punctuation_rules",
    title: "Punctuation Standards",
    category: "Other Topics",
    subcategory: "Punctuation",
    difficulty: "Beginner",
    definition: "Punctuation consists of conventional symbols used in written script to establish boundaries, clarify syntax relations, and coordinate structural flow.",
    rules: [
      "The Comma (,) separates list items, introduces direct quotes, separates clauses with coordinating conjunctions, and sets off parenthetical inserts.",
      "The Semicolon (;) joins two independent clauses of close conceptual relation without using a conjunction (e.g., 'The script is secure; we verified it').",
      "The Colon (:) introduces lists, explanations, or quotes succeeding an independent clause (e.g., 'Ensure three guidelines: clean variables, closed links, and robust tenses').",
      "Apostrophes (') show noun possession or form contractions (its/it's, Emily's code), while Quotation Marks contain spoken dialogues."
    ],
    keyTakeaways: [
      "Avoid comma splices (joining two independent clauses with only a comma, e.g., 'The system compiled, we went home' should be linked with and / semicolon)."
    ],
    examples: [
      {
        id: "punc_ex1",
        sentence: "We indexed the table; consequently, coordinates loaded quickly.",
        parts: [
          { word: "We", label: "Subject", color: "emerald", note: "Subject pronoun." },
          { word: "indexed", label: "Verb", color: "rose", note: "Transitive verb." },
          { word: "the", label: "Article", color: "sky", note: "Article." },
          { word: "table;", label: "Noun Object", color: "violet", note: "Independent clause ends here with a semicolon separator." },
          { word: "consequently,", label: "Conjunctive Adverb", color: "indigo", note: "Conjunctive phrase, succeeded by a clarifying comma." },
          { word: "coordinates", label: "Subject 2", color: "emerald", note: "Subject of second clause." },
          { word: "loaded", label: "Verb 2", color: "rose", note: "Intransitive verb." },
          { word: "quickly.", label: "Adverb", color: "teal", note: "Manner adverb." }
        ],
        overallExplanation: "This demonstrates correct compound logical separation. The semicolon marks clause separation, and the conjunctive adverb 'consequently' takes a comma before releasing the next clause."
      }
    ],
    exercises: [
      {
        id: "punc_q1",
        question: "Identify the sentence that suffers from an INCORRECT comma splice:",
        options: [
          "The hardware compiled; we deployed it.",
          "The database failed, therefore the records were corrupt.",
          "The database failed, and the records were corrupt.",
          "Since the database failed, the records were corrupt."
        ],
        correctAnswer: "The database failed, therefore the records were corrupt.",
        explanation: "'The database failed' and 'therefore...' are separate clauses. Joining them with only a comma creates a comma splice. It should use a semicolon before 'therefore'."
      }
    ]
  },
  {
    id: "transformation_sentences",
    title: "Transformation of Sentences",
    category: "Other Topics",
    subcategory: "Transformation",
    difficulty: "Advanced",
    definition: "Sentence transformation is the revision of a sentence's structural configuration or tone without changing its core semantic meaning.",
    rules: [
      "Assertive to Negative: Change stating structures using opposite descriptors (e.g., 'He is slow' -> 'He is not fast'). Maintains equivalent semantic parameters.",
      "Simple to Compound: Subdivide modifying phrases into separate independent clauses (e.g., 'In spite of being rich, she lives simply' -> 'She is rich, yet she lives simply').",
      "Simple to Complex: Expand modifiers or infinitive clauses into dependent clauses (e.g., 'Studied to compile code' -> 'Studied so that he could compile code')."
    ],
    keyTakeaways: [
      "Ensure logical connectors are altered without mutating truths."
    ],
    examples: [
      {
        id: "trans_ex1",
        sentence: "He is not incompetent at analyzing complex loops.",
        parts: [
          { word: "He", label: "Subject", color: "emerald", note: "Subject pronoun." },
          { word: "is", label: "Linking Verb", color: "rose", note: "Active be verb." },
          { word: "not", label: "Polarity Negative", color: "indigo", note: "Inverts description to achieve positive state double negation." },
          { word: "incompetent", label: "Adjective Descriptor", color: "amber", note: "Negatively-formed adjective. 'not incompetent' = competent." },
          { word: "at", label: "Preposition", color: "teal", note: "Preposition leading to gerund object." },
          { word: "analyzing", label: "Gerund Obj-of-Prep", color: "fuchsia", note: "The gerund object." },
          { word: "complex", label: "Adjective Modifier", color: "amber", note: "Describes loops." },
          { word: "loops.", label: "Noun Object", color: "violet", note: "Object noun." }
        ],
        overallExplanation: "This shows negative transformation. Expressing 'He is competent' as 'He is not incompetent' preserves semantic values through double negative syntax."
      }
    ],
    exercises: [
      {
        id: "trans_q1",
        question: "Transform this simple sentence into a compound sentence: 'Despite failing the first build, we successfully released the app.'",
        options: [
          "Although we failed the first build, we successfully released the app.",
          "We failed the first build, yet we successfully released the app.",
          "Since we failed the first build, we released the app.",
          "We failed the first build so we released the app."
        ],
        correctAnswer: "We failed the first build, yet we successfully released the app.",
        explanation: "A compound sentence requires joining matching independent clauses with a coordinating connector (', yet'), whereas 'Although' creates a complex sentence."
      }
    ]
  },
  {
    id: "common_grammar_errors",
    title: "Common Grammar Errors Worksheet",
    category: "Other Topics",
    subcategory: "Grammar Errors",
    difficulty: "Intermediate",
    definition: "Common errors occur due to incorrect syntax agreement, layout positioning, punctuation, or phrase formatting. Key examples are: Dangling Modifiers, Comma Splices, and Incorrect Comparison structures.",
    rules: [
      "Dangling Modifier occurs when a descriptive modifier is placed in a sentence without a logical subject connection (e.g., 'Running tests, the computer crashed' -> implies the computer was running the tests. Correction: 'While I was running tests, the computer crashed').",
      "Comma Splice is joining independent clauses with only a comma, which is invalid syntax.",
      "Subject-Object Pronoun Mix: Misusing personal cases (e.g., 'Sarah and me went' should be 'Sarah and I went')."
    ],
    keyTakeaways: [
      "Always verify word modifications align. Check introductory modifiers modify the exact subject succeeding the comma.",
      "Ensure coordinating conjunction phrases are balanced."
    ],
    examples: [
      {
        id: "err_ex1",
        sentence: "While testing the code, the developer found several bugs.",
        parts: [
          { word: "While", label: "Conjunction", color: "indigo", note: "Introduces introductory participial." },
          { word: "testing", label: "Participial Phrase Part", color: "rose", note: "Introductory participial modifying the upcoming subject." },
          { word: "the", label: "Article", color: "sky", note: "Article." },
          { word: "code,", label: "Noun Modifier Object", color: "violet", note: "Object of testing modifier." },
          { word: "the", label: "Article", color: "sky", note: "Article." },
          { word: "developer", label: "Subject", color: "emerald", note: "Subject noun. She is the actor who performed the 'testing'. (Correct structure, no dangling)." },
          { word: "found", label: "Transitive Verb", color: "rose", note: "Past simple." },
          { word: "several", label: "Adjective Modifier", color: "amber", note: "Quantifier." },
          { word: "bugs.", label: "Noun (Object)", color: "violet", note: "Direct object." }
        ],
        overallExplanation: "This avoids the 'dangling modifier' error. The performer of 'testing' corresponds directly to the grammatical subject 'developer'."
      }
    ],
    exercises: [
      {
        id: "err_q1",
        question: "Correct the dangling modifier: 'Having loaded the modules, the compile errors resolved.'",
        options: [
          "Having loaded the modules, we resolved the compile errors.",
          "The compile errors, having loaded the modules, resolved.",
          "Having loaded the modules the errors resolved.",
          "Leave as is."
        ],
        correctAnswer: "Having loaded the modules, we resolved the compile errors.",
        explanation: "In 'Having loaded the modules, the errors...', the modifier incorrectly targets 'errors' as having loaded the modules (dangling). Making 'we' the subject corrects it."
      }
    ]
  }
];
