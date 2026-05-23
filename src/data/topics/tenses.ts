import { GrammarTopic } from "../../types";

export const tensesTopics: GrammarTopic[] = [
  {
    id: "tenses_present_all",
    title: "Present Tenses: All 4 Aspects",
    category: "Verb Tenses",
    subcategory: "Present Tenses",
    difficulty: "Beginner",
    definition: "Present tenses describe states or actions connected to the present moment. They comprise four distinct aspectual forms: Simple Present, Present Continuous, Present Perfect, and Present Perfect Continuous.",
    rules: [
      "Simple Present (Formula: Subject + Verb[s]): Used for habits, timeless facts, general truths, or schedules (e.g., 'The script compiles on startup').",
      "Present Continuous (Formula: Subject + am/is/are + Verb-ing): Used for ongoing actions occurring right now or temporary situations (e.g., 'Emily is writing a script').",
      "Present Perfect (Formula: Subject + have/has + Past Participle): Used for finished past actions with contemporary results, experiences, or open timeframes (e.g., 'We have updated the code').",
      "Present Perfect Continuous (Formula: Subject + have/has + been + Verb-ing): Used for actions that started in the past, continue in the present, and emphasize duration (e.g., 'He has been debugging for hours')."
    ],
    keyTakeaways: [
      "Third-person singular pronouns (he, she, it) require suffix -s/-es in Simple Present.",
      "Stative verbs (like 'need', 'believe', 'own') are not idiomatic in continuous forms (e.g., say 'I need help', NOT 'I am needing help').",
      "Use 'since' with a specific point in time and 'for' with a duration."
    ],
    examples: [
      {
        id: "ten_pres_ex1",
        sentence: "He has been debugging the compiler since nine o'clock.",
        parts: [
          { word: "He", label: "Subject", color: "emerald", note: "Subject pronoun." },
          { word: "has", label: "Auxiliary Verb 1", color: "rose", note: "Third-person singular auxiliary verb." },
          { word: "been", label: "Auxiliary Verb 2", color: "rose", note: "Aspectual passive/perfect baseline helper participle." },
          { word: "debugging", label: "Gerund Participle Verb", color: "rose", note: "Main action verb showing continuous ongoing progress." },
          { word: "the", label: "Definite Article", color: "sky", note: "Article." },
          { word: "compiler", label: "Noun Object", color: "violet", note: "Direct object receiving continuous debugging." },
          { word: "since", label: "Preposition of Time", color: "indigo", note: "Denotes the starting point in past time." },
          { word: "nine", label: "Adjective Modifier", color: "amber", note: "Numeral modifier." },
          { word: "o'clock.", label: "Noun Time Anchor", color: "teal", note: "Object of time preposition." }
        ],
        overallExplanation: "This sentence uses the Present Perfect Continuous tense ('has been debugging') to express an action that started in the past at nine o'clock and is still going on right now."
      }
    ],
    exercises: [
      {
        id: "t_pres_q1",
        question: "Select the sentence written in the PRESENT PERFECT CONTINUOUS aspect:",
        options: [
          "He has saved the backup database file to the desktop.",
          "We are restoring the records onto the hardware.",
          "The designer has been testing the color values for an hour.",
          "The system runs offline parameters automatically."
        ],
        correctAnswer: "The designer has been testing the color values for an hour.",
        explanation: "'Has been testing' matches the formula (Subject + have/has + been + Verb-ing), indicating continuous duration extending to the present."
      },
      {
        id: "t_pres_q2",
        question: "Correct the stative verb tense: 'Right now, I am owning three responsive modules.'",
        options: [
          "I owned three responsive modules.",
          "I own three responsive modules.",
          "I is owning three responsive modules.",
          "I have been owning three responsive modules."
        ],
        correctAnswer: "I own three responsive modules.",
        explanation: "'Own' is a stative verb expressing possession. Continuous structures ('am owning') are incorrect; use Simple Present ('own')."
      }
    ]
  },
  {
    id: "tenses_past_all",
    title: "Past Tenses: All 4 Aspects",
    category: "Verb Tenses",
    subcategory: "Past Tenses",
    difficulty: "Intermediate",
    definition: "Past tenses describe actions completed or ongoing in a previous period. They consist of: Simple Past, Past Continuous, Past Perfect, and Past Perfect Continuous.",
    rules: [
      "Simple Past (Formula: Subject + Verb-ed [or Irregular form]): Used for completed actions at a specified time in the past (e.g., 'We launched the build yesterday').",
      "Past Continuous (Formula: Subject + was/were + Verb-ing): Used for background actions disrupted by other events or ongoing past moments (e.g., 'Emily was writing code when it crashed').",
      "Past Perfect (Formula: Subject + had + Past Participle): Describes a past event that occurred BEFORE another past event (e.g., 'The script had compiled before she shut down the host').",
      "Past Perfect Continuous (Formula: Subject + had + been + Verb-ing): Emphasizes the duration of a past action leading up to another past action (e.g., 'He had been testing the CPU block for hours before it melted')."
    ],
    keyTakeaways: [
      "Past Perfect acts as the 'past of the past', sequencing timeline landmarks.",
      "Past Continuous sets the setting, while Simple Past serves as the interrupting trigger.",
      "Ensure irregular past conjugations are memorized perfectly (e.g., 'write' -> 'wrote', NOT 'writed')."
    ],
    examples: [
      {
        id: "ten_past_ex1",
        sentence: "Emily had been debugging code before the electricity failed.",
        parts: [
          { word: "Emily", label: "Subject 1", color: "emerald", note: "Subject of first past clause." },
          { word: "had", label: "Auxiliary Verb 1", color: "rose", note: "Past marker for perfect aspect." },
          { word: "been", label: "Auxiliary Verb 2", color: "rose", note: "Duration perfect helper." },
          { word: "debugging", label: "Main Verb 1", color: "rose", note: "First verb showing ongoing past process." },
          { word: "code", label: "Noun Object", color: "violet", note: "Object of first predicate." },
          { word: "before", label: "Subordinating Conjunction", color: "indigo", note: "Connects past clauses chronologically." },
          { word: "the", label: "Article", color: "sky", note: "Article." },
          { word: "electricity", label: "Subject 2", color: "emerald", note: "Subject of second past clause." },
          { word: "failed.", label: "Simple Past Verb 2", color: "rose", note: "Interrupting past event in Simple Past." }
        ],
        overallExplanation: "This sentence showcases the Past Perfect Continuous ('had been debugging') to represent an action in progress prior to a separate finished past point ('electricity failed')."
      }
    ],
    exercises: [
      {
        id: "t_past_q1",
        question: "Fill in the blank: 'We couldn't open the files because the compiler _____ the data.'",
        options: [
          "has corrupted",
          "corrupts",
          "had corrupted",
          "was corrupting"
        ],
        correctAnswer: "had corrupted",
        explanation: "The corruption happened PRIOR to the attempt to open (past timeline sequence). Thus, the Past Perfect ('had corrupted') is correct."
      },
      {
        id: "t_past_q2",
        question: "State the tense of the underlined verb: 'While I [was compiling] the script, the computer shut down.'",
        options: [
          "Past Perfect",
          "Past Continuous",
          "Simple Past",
          "Past Perfect Continuous"
        ],
        correctAnswer: "Past Continuous",
        explanation: "'Was compiling' uses (Subject + was/were + Verb-ing) describing an ongoing background action in progress in the past."
      }
    ]
  },
  {
    id: "tenses_future_all",
    title: "Future Tenses: All 4 Aspects",
    category: "Verb Tenses",
    subcategory: "Future Tenses",
    difficulty: "Advanced",
    definition: "Future tenses describe events expected to happen in a period succeeding the present. They comprise: Simple Future, Future Continuous, Future Perfect, and Future Perfect Continuous.",
    rules: [
      "Simple Future (Formula: Subject + will + Verb [or be going to + Verb]): Describes spontaneous choices, predictions, or planned future actions (e.g., 'We will release the source file').",
      "Future Continuous (Formula: Subject + will + be + Verb-ing): Describes actions in progress at a specific future duration (e.g., 'Tomorrow at noon, I will be compiling tests').",
      "Future Perfect (Formula: Subject + will + have + Past Participle): Shows an action that will be completed BEFORE a specified future checkpoint (e.g., 'By Sunday, we will have uploaded the modules').",
      "Future Perfect Continuous (Formula: Subject + will + have + been + Verb-ing): Highlights future duration accomplished before a specified checkpoint (e.g., 'In July, she will have been developing software for ten years')."
    ],
    keyTakeaways: [
      "Future Perfect uses temporal milestones (especially starting with 'by', e.g., 'by Monday').",
      "Do not use 'will' in dependent adverb clauses of time (e.g., write 'When the server starts, I will inspect it', NOT 'When the server will start...').",
      "Use 'shall' instead of 'will' in highly formal or legal registers, mostly with 'I' or 'we'."
    ],
    examples: [
      {
        id: "ten_fut_ex1",
        sentence: "By tomorrow, our team will have built the release packages.",
        parts: [
          { word: "By", label: "Preposition of Time", color: "indigo", note: "Preposition introducing future deadline." },
          { word: "tomorrow,", label: "Noun Modifier", color: "teal", note: "The temporal landmark." },
          { word: "our", label: "Possessive Adjective", color: "indigo", note: "Modifies the subject group." },
          { word: "team", label: "Subject", color: "emerald", note: "The subject collective noun." },
          { word: "will", label: "Modal Auxiliary", color: "rose", note: "Future tense marker." },
          { word: "have", label: "Perfect Auxiliary", color: "rose", note: "Perfect helper verb." },
          { word: "built", label: "Past Participle Verb", color: "rose", note: "Main action participle of build." },
          { word: "the", label: "Article", color: "sky", note: "Article." },
          { word: "release", label: "Noun Modifier", color: "emerald", note: "Classifies the type of packages." },
          { word: "packages.", label: "Noun (Object)", color: "violet", note: "Direct object receiving action." }
        ],
        overallExplanation: "This sentence employs Future Perfect ('will have built') because the action is predicted to be finished relative to a future checkpoint ('By tomorrow')."
      }
    ],
    exercises: [
      {
        id: "t_fut_q1",
        question: "Correct the sentence: 'When the developer will deploy the software, we will celebrate.'",
        options: [
          "When the developer will deploy the software, we celebrate.",
          "When the developer deploys the software, we will celebrate.",
          "When the developer is deploying the software, we correspond.",
          "When the developer will have deployed the software, we had celebrated."
        ],
        correctAnswer: "When the developer deploys the software, we will celebrate.",
        explanation: "In adverb time clauses (beginning with 'When'), use Present Simple ('deplays') instead of 'will deploy' to frame the future action."
      },
      {
        id: "t_fut_q2",
        question: "Identify the tense: 'By next January, she [will have been studying] layout design for five years.'",
        options: [
          "Future Perfect",
          "Future Continuous",
          "Future Perfect Continuous",
          "Simple Future"
        ],
        correctAnswer: "Future Perfect Continuous",
        explanation: "'Will have been studying' conforms exactly to (Subject + will + have + been + Verb-ing) tracking future duration."
      }
    ]
  }
];
