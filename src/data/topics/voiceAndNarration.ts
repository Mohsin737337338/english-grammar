import { GrammarTopic } from "../../types";

export const voiceAndNarrationTopics: GrammarTopic[] = [
  {
    id: "voice_active_passive",
    title: "Active vs Passive Voice",
    category: "Voice & Narration",
    subcategory: "Voice",
    difficulty: "Intermediate",
    definition: "Voice describes the relationship between the action expressed by the verb and the participants identified by the arguments (subject, object). Active voice emphasizes the agent performing the action, whereas passive voice shifts focus to the recipient of the action.",
    rules: [
      "Active Voice Structure: Subject (Agent) + Verb + Object (Recipient) (e.g., 'The developer wrote the script').",
      "Passive Voice Structure: Object (New Subject) + [Be Verb in correct tense] + Past Participle + [by + Agent] (e.g., 'The script was written by the developer').",
      "Only transitive verbs can be transformed into passive voice. Intransitive verbs cannot (e.g., 'He fell' has no passive form).",
      "Use passive voice when the agent is unknown, obvious, or less important than the target action."
    ],
    keyTakeaways: [
      "Be sure to adapt the 'be' verb to the correct tense of the original active sentence (e.g., Present Continuous 'is coding' -> 'is being coded').",
      "The agent is introduced through the preposition 'by' if needed, but is often omitted in passive voice."
    ],
    examples: [
      {
        id: "voice_ex1",
        sentence: "The compiler is being updated by the systems engineer.",
        parts: [
          { word: "The", label: "Article", color: "sky", note: "Article." },
          { word: "compiler", label: "Subject Recipient", color: "emerald", note: "Subject of passive clause (recipient of action)." },
          { word: "is", label: "Auxiliary Verb 1", color: "rose", note: "Singular present tense auxiliary." },
          { word: "being", label: "Auxiliary Verb 2", color: "rose", note: "Continuous passive aspectual helper." },
          { word: "updated", label: "Past Participle Verb", color: "rose", note: "Main past participle verb." },
          { word: "by", label: "Preposition of Agent", color: "indigo", note: "Introduces the original agent performer." },
          { word: "the", label: "Article", color: "sky", note: "Article." },
          { word: "systems", label: "Noun Modifier", color: "teal", note: "Modifies engineer." },
          { word: "engineer.", label: "Noun Performer Obj-of-Prep", color: "violet", note: "The actual agent performing the edit." }
        ],
        overallExplanation: "This sentence is constructed in Present Continuous Passive Voice. Focus resides on 'the compiler', with 'by the engineer' designating the actor at the end."
      }
    ],
    exercises: [
      {
        id: "v_q1",
        question: "Transform this active sentence into passive voice: 'They compiled the release candidate yesterday.'",
        options: [
          "The release candidate has been compiled yesterday by them.",
          "The release candidate was compiled by them yesterday.",
          "The release candidate is compiled by them yesterday.",
          "The release candidate compiled yesterday from them."
        ],
        correctAnswer: "The release candidate was compiled by them yesterday.",
        explanation: "The original active sentence is in Simple Past ('compiled'). Thus, passive requires past version of 'to be' ('was') + past participle ('compiled') -> 'was compiled'."
      },
      {
        id: "v_q2",
        question: "Which of the following sentences CANNOT be converted into passive voice?",
        options: [
          "The database restored the user files.",
          "The server crashed at midnight.",
          "We checked the configuration parameters.",
          "She wrote three functions in TypeScript."
        ],
        correctAnswer: "The server crashed at midnight.",
        explanation: "'Crashed' is used here as an intransitive verb with no direct object recipient. Thus, it cannot undergo a passive transformation."
      }
    ]
  },
  {
    id: "narration_direct_indirect",
    title: "Direct vs Indirect Speech",
    category: "Voice & Narration",
    subcategory: "Narration",
    difficulty: "Advanced",
    definition: "Narration (Direct and Indirect/Reported Speech) refers to how we report the words spoken by another person. Direct speech quotes the exact original words, whereas indirect speech reports the content, adjusting pronouns, tenses, and time expressions.",
    rules: [
      "Direct Speech contains quotation marks and a speaker tag (e.g., 'Sarah said, \"I wrote the script yesterday.\"').",
      "Indirect Speech removes quotation marks and incorporates reported connectors (e.g., 'Sarah said that she had written the script the previous day').",
      "Tense Backshifting Rule: If the reporting verb is in the past tense ('said', 'explained'), shift verbal tenses in the quote one stage backward (e.g., Simple Present -> Simple Past; Simple Past -> Past Perfect).",
      "Adjust temporal expressions: 'now' -> 'then', 'yesterday' -> 'the previous day', 'tomorrow' -> 'the next day', 'here' -> 'there'."
    ],
    keyTakeaways: [
      "No backshift occurs if the reporting verb is in the present tense (e.g., 'Sarah says she is happy').",
      "Check pronoun matching: 'I' within the quote transitions to match the reporting speaker's pronoun gender ('she' or 'he').",
      "Questions use 'if/whether' (for Yes/No) or question words (what, why, how) in declarative syntax (no inversion, e.g., 'asked if I compiled', NOT 'asked if did I compile')."
    ],
    examples: [
      {
        id: "narr_ex1",
        sentence: "Emily explained that she had coded the system the previous day.",
        parts: [
          { word: "Emily", label: "Subject", color: "emerald", note: "The reporting speaker." },
          { word: "explained", label: "Reporting Verb", color: "rose", note: "Past tense reporting verb triggering tense backshift." },
          { word: "that", label: "Reported Conjunction", color: "indigo", note: "Optional reported connector linking the content." },
          { word: "she", label: "Pronoun Subject", color: "teal", note: "Backshifted pronoun corresponding to Emily." },
          { word: "had", label: "Past Auxiliary Verb", color: "rose", note: "First part of the backshifted past perfect verb." },
          { word: "coded", label: "Past Participle Verb", color: "rose", note: "Second part of the backshifted past perfect verb (originally 'coded' or 'have coded')." },
          { word: "the", label: "Article", color: "sky", note: "Article." },
          { word: "system", label: "Noun Object", color: "violet", note: "Object noun." },
          { word: "the", label: "Article", color: "sky", note: "Article." },
          { word: "previous", label: "Adjective Modifier", color: "amber", note: "Backshifted temporal adjective." },
          { word: "day.", label: "Noun Time Anchor", color: "teal", note: "Backshifted time marker (originally 'yesterday')." }
        ],
        overallExplanation: "This sentence represents Indirect Speech. The original utterance: 'I coded the system yesterday' backshifts its past tense to past perfect, its pronoun to she, and its time marker to 'the previous day'."
      }
    ],
    exercises: [
      {
        id: "n_q1",
        question: "Convert the direct speech quote into correct indirect speech: 'He said, \"I am testing the database now.\"'",
        options: [
          "He said that he was testing the database then.",
          "He said that I am testing the database now.",
          "He said that he had been testing the database now.",
          "He says that he is testing the database then."
        ],
        correctAnswer: "He said that he was testing the database then.",
        explanation: "'Said' is past, so tense backshifts from Present Continuous ('am testing') to Past Continuous ('was testing'). 'I' shifts to 'he' and 'now' shifts to 'then'."
      },
      {
        id: "n_q2",
        question: "Identify the INCORRECT indirect reported question structure:",
        options: [
          "The instructor asked if I had completed the workspace audit.",
          "She asked why did the database crash.",
          "He inquired whether we were using TypeScript.",
          "The systems operator asked why the computer shut down."
        ],
        correctAnswer: "She asked why did the database crash.",
        explanation: "Reported questions must use standard declarative word order, not interrogative inversion. It should be: 'She asked why the database crashed' (no 'did')."
      }
    ]
  }
];
