export interface LabeledPart {
  word: string;
  label: string; // e.g., "Subject", "Transitive Verb", "Direct Object", "Preposition"
  color: string; // tailwind text/bg color keys
  note: string; // educational breakdown of this word's role
}

export interface AnnotatedExample {
  id: string;
  sentence: string;
  parts: LabeledPart[];
  overallExplanation: string;
}

export interface ExerciseQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface GrammarTopic {
  id: string;
  title: string;
  category: string;
  subcategory: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  definition: string;
  rules: string[];
  keyTakeaways: string[];
  examples: AnnotatedExample[];
  exercises: ExerciseQuestion[];
}

export interface UserStats {
  bookmarks: string[]; // IDs of bookmarked topics
  completedQuizzes: { [topicId: string]: { score: number; total: number; completedAt: string } };
  studyStreak: number;
  lastStudyDate: string | null;
  totalXP: number; // Experience points earned from quiz completions
}

export interface SavedPresetSentence {
  sentence: string;
  description: string;
  parts: LabeledPart[];
}
