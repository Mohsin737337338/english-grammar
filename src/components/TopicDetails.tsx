import { useState, useEffect } from "react";
import { 
  BookMarked, 
  Bookmark, 
  Award, 
  HelpCircle, 
  RotateCcw, 
  ArrowRight, 
  CheckCircle, 
  XCircle, 
  Check, 
  Lightbulb, 
  Info,
  ChevronRight,
  BookOpen
} from "lucide-react";
import { GrammarTopic, UserStats, AnnotatedExample } from "../types";

interface TopicDetailsProps {
  topic: GrammarTopic;
  stats: UserStats;
  onToggleBookmark: (id: string) => void;
  onCompleteQuiz: (id: string, score: number, total: number) => void;
}

export default function TopicDetails({
  topic,
  stats,
  onToggleBookmark,
  onCompleteQuiz
}: TopicDetailsProps) {
  const [activeTab, setActiveTab] = useState<"learn" | "examples" | "quiz">("learn");
  
  // Quiz specific states
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submittedQuizzes, setSubmittedQuizzes] = useState<Record<string, boolean>>({});
  const [scoreFeedback, setScoreFeedback] = useState<{ score: number; total: number } | null>(null);

  // Examples dynamic labels state
  const [selectedExampleId, setSelectedExampleId] = useState<string>("");
  const [hoveredPart, setHoveredPart] = useState<{ word: string; label: string; note: string; color: string } | null>(null);
  const [activeLegendFilter, setActiveLegendFilter] = useState<string | null>(null);

  // Initialize selected example on mount or transition
  useEffect(() => {
    if (topic.examples && topic.examples.length > 0) {
      setSelectedExampleId(topic.examples[0].id);
      setHoveredPart(null);
      setActiveLegendFilter(null);
    }
  }, [topic]);

  // Reset quiz states when topic changes
  useEffect(() => {
    setSelectedAnswers({});
    setSubmittedQuizzes({});
    setScoreFeedback(null);
    setActiveTab("learn");
  }, [topic.id]);

  const isBookmarked = stats.bookmarks.includes(topic.id);
  const hasFinishedQuiz = !!stats.completedQuizzes[topic.id];
  const previousScore = stats.completedQuizzes[topic.id]?.score;

  const handleSelectAnswer = (questionId: string, value: string) => {
    if (submittedQuizzes[questionId]) return; // locked once checked
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const checkIndividualAnswer = (questionId: string) => {
    setSubmittedQuizzes(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const handleCheckAll = () => {
    // Submit all non-submitted answers in this quiz
    const updatedSubmissions = { ...submittedQuizzes };
    let correctCount = 0;
    
    topic.exercises.forEach(q => {
      updatedSubmissions[q.id] = true;
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });

    setSubmittedQuizzes(updatedSubmissions);
    setScoreFeedback({
      score: correctCount,
      total: topic.exercises.length
    });

    onCompleteQuiz(topic.id, correctCount, topic.exercises.length);
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setSubmittedQuizzes({});
    setScoreFeedback(null);
  };

  const currentExample = topic.examples.find(ex => ex.id === selectedExampleId) || topic.examples[0];

  // Colors mapping utility for part labeling background and borders
  const getColorClasses = (colorName: string) => {
    switch (colorName) {
      case "emerald":
        return "bg-emerald-50 text-emerald-800 border-emerald-300 dark:bg-emerald-950/20 dark:text-emerald-300 dark:border-emerald-800 hover:bg-emerald-100";
      case "rose":
        return "bg-rose-50 text-rose-800 border-rose-300 dark:bg-rose-950/20 dark:text-rose-300 dark:border-rose-800 hover:bg-rose-100";
      case "violet":
        return "bg-violet-50 text-violet-800 border-violet-300 dark:bg-violet-950/20 dark:text-violet-300 dark:border-violet-800 hover:bg-violet-100";
      case "amber":
        return "bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/20 dark:text-amber-300 dark:border-amber-800 hover:bg-amber-100";
      case "sky":
        return "bg-sky-50 text-sky-800 border-sky-300 dark:bg-sky-950/20 dark:text-sky-300 dark:border-sky-800 hover:bg-sky-100";
      case "indigo":
        return "bg-indigo-50 text-indigo-800 border-indigo-300 dark:bg-indigo-950/20 dark:text-indigo-300 dark:border-indigo-800 hover:bg-indigo-100";
      case "fuchsia":
        return "bg-fuchsia-50 text-fuchsia-800 border-fuchsia-300 dark:bg-fuchsia-950/20 dark:text-fuchsia-300 dark:border-fuchsia-800 hover:bg-fuchsia-100";
      default:
        return "bg-gray-50 text-gray-800 border-gray-300 dark:bg-gray-800/20 dark:text-gray-300 dark:border-gray-700 hover:bg-gray-100";
    }
  };

  // Get difficulty color pills
  const getDifficultyPill = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-emerald-100 text-emerald-800 border-emerald-200";
      case "Intermediate":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Advanced":
        return "bg-purple-100 text-purple-800 border-purple-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Extract list of all unique grammatical labels from the current active example
  const legendLabels = currentExample 
    ? Array.from(new Set(currentExample.parts.map(p => p.label)))
    : [];

  return (
    <div className="flex-1 flex flex-col bg-white text-[#201f1e] overflow-hidden">
      {/* Top Breadcrumb & Heading Area */}
      <div className="px-8 pt-8 pb-5 shrink-0 bg-white">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-2 text-xs text-slate-400 select-none">
            <span>Grammar</span>
            <span>/</span>
            <span>{topic.category}</span>
            <span>/</span>
            <span className="text-slate-600">{topic.subcategory}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full border ${getDifficultyPill(topic.difficulty)}`}>
              {topic.difficulty}
            </span>
            {hasFinishedQuiz && (
              <span className="flex items-center gap-1 text-[11px] bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded border border-emerald-200">
                <Award className="w-3 h-3 text-emerald-500" />
                Passed: {previousScore} pts
              </span>
            )}
            <button
              onClick={() => onToggleBookmark(topic.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold select-none transition-all duration-150 border ${
                isBookmarked
                  ? "bg-amber-50 border-amber-300 text-amber-700 shadow-sm"
                  : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-800 cursor-pointer"
              }`}
            >
              {isBookmarked ? (
                <>
                  <BookMarked className="w-3.5 h-3.5 text-amber-500" />
                  <span>Saved on PC</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-500" />
                  <span>Save on Computer</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-4xl font-bold font-sans text-slate-900 tracking-tight">
            {topic.title}
          </h1>
          <div className="text-right hidden sm:block">
            <span className="text-[10px] text-slate-400 font-mono font-bold tracking-wider">REF ID: {topic.id.toUpperCase()}</span>
          </div>
        </div>
      </div>

      {/* Ribbon Navigation Tabs */}
      <div className="px-6 border-b border-slate-200 shrink-0 bg-slate-50 flex select-none">
        <button
          onClick={() => setActiveTab("learn")}
          className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all duration-150 flex items-center gap-2 cursor-pointer ${
            activeTab === "learn"
              ? "border-blue-600 text-blue-600 font-bold bg-blue-50/20"
              : "border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-200"
          }`}
        >
          <BookOpen className="w-4 h-4 text-blue-500" />
          1. Theory & Rules
        </button>

        <button
          onClick={() => {
            setActiveTab("examples");
            // Auto initialize helper labels
            if (topic.examples && topic.examples.length > 0) {
              setSelectedExampleId(topic.examples[0].id);
              setHoveredPart(null);
            }
          }}
          className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all duration-150 flex items-center gap-2 cursor-pointer ${
            activeTab === "examples"
              ? "border-blue-600 text-blue-600 font-bold bg-blue-50/20"
              : "border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-200"
          }`}
        >
          <Lightbulb className="w-4 h-4 text-amber-500" />
          2. Labeled Examples
          <span className="bg-red-100 text-red-800 text-[10px] font-bold font-mono px-1.5 py-0.5 rounded-full">
            Details
          </span>
        </button>

        <button
          onClick={() => setActiveTab("quiz")}
          className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all duration-150 flex items-center gap-2 cursor-pointer ${
            activeTab === "quiz"
              ? "border-blue-600 text-blue-600 font-bold bg-blue-50/20"
              : "border-transparent text-slate-600 hover:text-slate-800 hover:border-slate-200"
          }`}
        >
          <HelpCircle className="w-4 h-4 text-purple-500" />
          3. Self-Assess Exercises
          <span className="bg-purple-100 text-purple-800 text-[10px] font-bold font-mono px-1.5 py-0.5 rounded-full">
            {topic.exercises.length} Qs
          </span>
        </button>
      </div>

      {/* Main Tab Contents Panel */}
      <div className="flex-1 overflow-y-auto p-8 bg-white">
        
        {/* -- TAB 1: LEARN THEORY -- */}
        {activeTab === "learn" && (
          <div className="space-y-6 max-w-4xl">
            {/* Topic Definition box */}
            <section className="p-6 bg-slate-50 border border-slate-200 rounded-xl shadow-sm">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">Definition</h2>
              <p className="text-base text-slate-700 leading-relaxed font-sans">
                {topic.definition}
              </p>
            </section>

            {/* Core Guidelines Lists */}
            <section className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm space-y-4">
              <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wider border-b pb-2 flex items-center gap-2">
                Prescriptive Grammar Rules
              </h2>
              <ul className="space-y-3 pt-1">
                {topic.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                    <span className="font-bold text-blue-600 shrink-0 text-sm mt-px">{idx + 1}.</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Key Takeaways warning boxes */}
            <section className="p-6 bg-amber-50 border border-amber-200 rounded-xl shadow-sm shrink-0">
              <h2 className="text-xs font-bold text-amber-800 uppercase tracking-widest mb-3">
                Writer's Quick-Tips & Common Pitfalls
              </h2>
              <ul className="space-y-2">
                {topic.keyTakeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-amber-900 leading-relaxed">
                    <span className="text-amber-500 shrink-0 mt-0.5">✦</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Hint Card to Next Tab */}
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 flex items-center justify-between">
              <div className="text-xs text-blue-800">
                <span className="font-bold">Next Recommended Step:</span> Inspect the word-by-word sentence structure graphs to see labels in action.
              </div>
              <button
                onClick={() => setActiveTab("examples")}
                className="flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
              >
                Go to Labeled Examples
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* -- TAB 2: LABELED EXAMPLES -- */}
        {activeTab === "examples" && (
          <div className="space-y-6 max-w-5xl">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-150 pb-3 gap-3">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 flex items-center gap-1.5 uppercase tracking-wide">
                    <Lightbulb className="w-4 h-4 text-blue-600" />
                    Word-by-Word Structural Map
                  </h3>
                  <p className="text-xs text-slate-500 font-sans">
                    Hover or click individual tokens below to visually isolate the grammar patterns and explanatory parameters.
                  </p>
                </div>

                {/* Example selection dropdown buttons */}
                {topic.examples.length > 1 && (
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-slate-400 font-bold font-mono whitespace-nowrap">EXAMPLES:</span>
                    {topic.examples.map((ex, idx) => (
                      <button
                        key={ex.id}
                        onClick={() => {
                          setSelectedExampleId(ex.id);
                          setHoveredPart(null);
                          setActiveLegendFilter(null);
                        }}
                        className={`text-xs px-2.5 py-1 rounded transition-colors font-semibold cursor-pointer ${
                          selectedExampleId === ex.id
                            ? "bg-blue-600 text-white shadow"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        Ex {idx + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* EXCITING VISUALIZATION STAGE */}
              <div className="py-8 px-4 bg-slate-900 rounded-lg text-white border border-slate-800 relative shadow-inner overflow-hidden flex flex-col items-center">
                {/* Visual guidelines backdrop grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] opacity-25"></div>

                {/* Decorative Window indicators */}
                <div className="absolute top-2 left-3 flex items-center gap-1 opacity-45 select-none pointer-events-none">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-[9px] text-slate-400 font-mono pl-1.5">offline parsing rendering container</span>
                </div>

                <div className="relative z-10 w-full flex flex-col items-center">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-blue-500 font-mono mb-4 text-center">
                    Visual Token Flow Representer
                  </span>

                  {/* Sentence Render Stage - Wrapped Token buttons */}
                  <div className="flex flex-wrap justify-center gap-x-2.5 gap-y-4 max-w-3xl mb-4 p-4 rounded bg-slate-950/50 border border-slate-800/80">
                    {currentExample.parts.map((part, index) => {
                      const isLabelFiltered = activeLegendFilter === part.label;
                      const isPartSelected = hoveredPart?.word === part.word;
                      const highlightState = isPartSelected || isLabelFiltered;

                      return (
                        <div key={index} className="flex flex-col items-center relative">
                          <button
                            onMouseEnter={() => setHoveredPart(part)}
                            onClick={() => setHoveredPart(part)}
                            className={`px-3 py-1.5 text-sm font-semibold rounded border transition-all duration-150 cursor-pointer ${
                              highlightState
                                ? "bg-amber-400 text-slate-950 border-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.35)] scale-105 font-bold"
                                : "bg-slate-800 text-slate-100 border-slate-700 hover:bg-slate-700"
                            }`}
                          >
                            {part.word}
                          </button>
                          
                          {/* Part POS Mini marker */}
                          <span className={`text-[10px] mt-1.5 px-1.5 py-0.2 rounded font-mono select-none tracking-tight font-semibold shrink-0 transition-opacity ${
                            highlightState ? "bg-amber-300 text-slate-900 border border-amber-400 opacity-100" : "bg-slate-800/40 text-slate-400 opacity-55"
                          }`}>
                            {part.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Interactive Dynamic Description Overlay display */}
                  <div className="mt-4 w-full max-w-2xl bg-slate-950/80 rounded-lg p-4 border border-slate-800 min-h-[92px] transition-all duration-200">
                    {hoveredPart ? (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                          <span className="text-xs font-bold text-amber-400 uppercase tracking-wide font-mono flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                            Selected: "{hoveredPart.word}"
                          </span>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-blue-100 border border-blue-200 text-blue-700 font-bold font-mono">
                            {hoveredPart.label}
                          </span>
                        </div>
                        <p className="text-xs text-slate-350 leading-relaxed font-sans pt-1">
                          {hoveredPart.note}
                        </p>
                      </div>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center py-3 text-slate-400">
                        <Info className="w-5 h-5 text-slate-500 mb-1" />
                        <span className="text-xs">Hover or click any word token above to analyze its exact role, part of speech, and connection rule!</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* interactive Legend Box filters */}
              {legendLabels.length > 0 && (
                <div className="bg-slate-50 rounded-xl p-4 space-y-2 border border-slate-150">
                  <div className="text-[10px] font-bold text-slate-500 font-sans uppercase tracking-wider">
                    Label Class Legendary (Click Class to Isolate in Sentence)
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveLegendFilter(null)}
                      className={`text-xs px-2.5 py-1 rounded-md border font-mono transition-all font-semibold cursor-pointer ${
                        activeLegendFilter === null
                          ? "bg-slate-800 text-white border-slate-850 shadow"
                          : "bg-white text-slate-600 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      Show All
                    </button>
                    {legendLabels.map(lbl => {
                      const isActive = activeLegendFilter === lbl;
                      return (
                        <button
                          key={lbl}
                          onClick={() => {
                            setActiveLegendFilter(isActive ? null : lbl);
                            setHoveredPart(null);
                          }}
                          className={`text-xs px-2.5 py-1 rounded-md border font-mono transition-all font-semibold ${
                            isActive
                              ? "bg-amber-400 text-[#201f1e] border-amber-500 shadow-sm font-bold"
                              : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          {lbl}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Overall structural contextual explanation */}
              <div className="bg-blue-50/50 border border-blue-100 rounded-lg p-4 flex gap-3">
                <Lightbulb className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-blue-900 leading-relaxed">
                  <span className="font-bold">Summary Explanation:</span> {currentExample.overallExplanation}
                </div>
              </div>
            </div>

            {/* Hint to move to Quiz tab */}
            <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 flex items-center justify-between">
              <div className="text-xs text-purple-800">
                <span className="font-bold">Review Complete?</span> Put your offline knowledge to the test with multiple-choice exercises tailored to this exact topic!
              </div>
              <button
                onClick={() => setActiveTab("quiz")}
                className="flex items-center gap-1 text-xs font-bold text-purple-600 hover:text-purple-800 cursor-pointer"
              >
                Go to Quizzes
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* -- TAB 3: PRACTICE & QUIZ -- */}
        {activeTab === "quiz" && (
          <div className="space-y-6 max-w-4xl">
            
            {/* Top Stats Banner */}
            {scoreFeedback && (
              <div className={`p-4 border rounded-lg flex items-center justify-between shadow ${
                scoreFeedback.score === scoreFeedback.total
                  ? "bg-emerald-50 border-emerald-300 text-emerald-950"
                  : "bg-blue-50 border-blue-300 text-blue-950"
              }`}>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-700 block">
                    {scoreFeedback.score === scoreFeedback.total ? "🏆 Master Class Achieved!" : "📈 Quiz Checked!"}
                  </span>
                  <p className="text-sm font-bold">
                    You answered {scoreFeedback.score} out of {scoreFeedback.total} questions correctly! (+{scoreFeedback.score * 15} XP)
                  </p>
                </div>
                <button
                  onClick={handleResetQuiz}
                  className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded bg-white hover:bg-gray-100 shadow-sm border border-gray-200 text-gray-700"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Try Again
                </button>
              </div>
            )}

            {/* List of quiz questions */}
            <div className="space-y-6">
              {topic.exercises.map((question, qIdx) => {
                const isChecked = submittedQuizzes[question.id] || scoreFeedback !== null;
                const selectedAns = selectedAnswers[question.id];
                const isCorrect = selectedAns === question.correctAnswer;

                return (
                  <div 
                    key={question.id} 
                    className={`bg-white rounded-xl border p-6 shadow-sm transition-all duration-200 ${
                      isChecked
                        ? isCorrect
                          ? "border-emerald-300 bg-emerald-50/5"
                          : "border-red-200 bg-red-50/5"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    {/* Header: Question Number and verification badges */}
                    <div className="flex items-start justify-between mb-3 gap-2 select-none">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 text-xs font-bold font-mono flex items-center justify-center shrink-0">
                          {qIdx + 1}
                        </span>
                        <h4 className="text-[10px] text-slate-400 font-extrabold tracking-widest uppercase font-mono">
                          Challenge #{qIdx + 1}
                        </h4>
                      </div>

                      {/* Result tags */}
                      {isChecked && (
                        <div>
                          {isCorrect ? (
                            <span className="flex items-center gap-1 text-[11px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold">
                              <CheckCircle className="w-3 h-3 text-emerald-600" />
                              Correct
                            </span>
                          ) : (
                            <span className="flex items-center gap-1 text-[11px] bg-red-50 text-red-800 border border-red-200 px-2.5 py-0.5 rounded-full font-bold">
                              <XCircle className="w-3 h-3 text-red-600" />
                              Incorrect
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Question description */}
                    <p className="text-base font-bold text-slate-900 mb-4 whitespace-pre-wrap font-sans">
                      {question.question}
                    </p>

                    {/* Radio Options List */}
                    <div className="space-y-2">
                      {question.options.map((opt, oIdx) => {
                        const isOptionSelected = selectedAns === opt;
                        const isThisCorrectOption = opt === question.correctAnswer;
                        
                        let optionStyle = "border-slate-200 hover:bg-slate-50 text-slate-705";
                        if (isOptionSelected) {
                          optionStyle = "bg-blue-50/75 border-blue-300 text-blue-900";
                        }
                        if (isChecked) {
                          if (isThisCorrectOption) {
                            optionStyle = "bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold";
                          } else if (isOptionSelected && !isCorrect) {
                            optionStyle = "bg-red-50 border-red-200 text-red-950 line-through";
                          } else {
                            optionStyle = "opacity-45 border-slate-100 text-slate-400";
                          }
                        }

                        return (
                          <label
                            key={oIdx}
                            className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-md border text-xs cursor-pointer select-none transition-all ${optionStyle}`}
                          >
                            <input
                              type="radio"
                              name={question.id}
                              value={opt}
                              checked={isOptionSelected}
                              disabled={isChecked}
                              onChange={() => handleSelectAnswer(question.id, opt)}
                              className="w-3.5 h-3.5 text-blue-600 border-slate-300 focus:ring-blue-500 shrink-0 cursor-pointer"
                            />
                            <span>{opt}</span>
                            
                            {/* Visual auxiliary checkmark inside inputs */}
                            {isChecked && isThisCorrectOption && (
                              <Check className="w-3.5 h-3.5 text-emerald-600 font-bold ml-auto" />
                            )}
                          </label>
                        );
                      })}
                    </div>

                    {/* Expandable Explanation block, once checked */}
                    {isChecked && (
                      <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs space-y-1">
                        <div className="font-bold text-slate-800 flex items-center gap-1">
                          <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                          Explanatory Rule breakdown:
                        </div>
                        <p className="text-slate-600 leading-relaxed font-sans">
                          {question.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Check All submit trigger */}
            {!scoreFeedback && (
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex items-center justify-between shadow-sm">
                <div>
                  <h5 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Finished answering?</h5>
                  <p className="text-[11px] text-slate-400 font-medium">Your results will be verified immediately and saved to your computer database registry.</p>
                </div>
                <button
                  onClick={handleCheckAll}
                  disabled={Object.keys(selectedAnswers).length < topic.exercises.length}
                  className={`px-4 py-2 rounded text-xs font-bold flex items-center gap-1.5 select-none text-white transition-colors duration-150 ${
                    Object.keys(selectedAnswers).length === topic.exercises.length
                      ? "bg-blue-600 hover:bg-blue-700 shadow cursor-pointer"
                      : "bg-slate-300 cursor-not-allowed opacity-75"
                  }`}
                >
                  Confirm and Terminate Quiz
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
