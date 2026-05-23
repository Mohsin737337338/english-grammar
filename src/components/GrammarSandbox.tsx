import { useState, FormEvent } from "react";
import { 
  Network, 
  HelpCircle, 
  CheckCircle, 
  Bookmark, 
  BookMarked,
  Info, 
  ChevronRight, 
  RotateCcw,
  PlusCircle,
  Lightbulb,
  Check,
  AlertTriangle
} from "lucide-react";
import { LabeledPart } from "../types";

export default function GrammarSandbox() {
  const [activeSubTab, setActiveSubTab] = useState<"analyzer" | "confusion">("analyzer");

  // --- ANALYZER WORKSPACE STATES ---
  const presetSentences = [
    {
      id: "preset_1",
      sentence: "The clever software developer completely rebuilt the offline database in three hours.",
      description: "A complete sentence loaded with adjectives, compound nouns, and precise prepositional temporal modifiers.",
      parts: [
        { word: "The", label: "Definite Article", color: "sky", note: "Points to a specific noun (developer)." },
        { word: "clever", label: "Adjective", color: "amber", note: "Modifies and describes the developer." },
        { word: "software", label: "Noun Modifier", color: "emerald", note: "Part of the compound noun 'software developer'." },
        { word: "developer", label: "Subject Noun", color: "emerald", note: "The central person performing the action." },
        { word: "completely", label: "Adverb of Degree", color: "fuchsia", note: "Modifies 'rebuilt', indicating the extent of completion." },
        { word: "rebuilt", label: "Transitive Verb", color: "rose", note: "Action verb representing what the developer did in simple past." },
        { word: "the", label: "Definite Article", color: "sky", note: "Points to a specific database." },
        { word: "offline", label: "Adjective Modifier", color: "amber", note: "Qualifies the 'database' trait." },
        { word: "database", label: "Direct Object Noun", color: "violet", note: "The noun that receives the action of being rebuilt." },
        { word: "in", label: "Preposition of Time", color: "indigo", note: "Introduces the duration constraint." },
        { word: "three", label: "Cardinal Numeral", color: "indigo", note: "Specifies quantitative counter for hours." },
        { word: "hours.", label: "Noun (Prepositional Object)", color: "violet", note: "The target object of the preposition 'in'." }
      ]
    },
    {
      id: "preset_2",
      sentence: "She easily passed the test because she had reviewed her notes diligently.",
      description: "Complex sentence containing a main independent clause and a subordinating causal clause with auxiliary past perfect tenses.",
      parts: [
        { word: "She", label: "Subject Pronoun", color: "emerald", note: "Third-person singular feminine pronoun serving as the main subject." },
        { word: "easily", label: "Adverb of Manner", color: "fuchsia", note: "Modifies the verb 'passed', detailing speed/effort." },
        { word: "passed", label: "Transitive Verb", color: "rose", note: "The central past tense action." },
        { word: "the", label: "Definite Article", color: "sky", note: "Points specifically to the test." },
        { word: "test", label: "Direct Object Noun", color: "violet", note: "Object receiving the positive action of passing." },
        { word: "because", label: "Subordinating Conjunction", color: "indigo", note: "Launches the subordinating adverbial causal sub-clause." },
        { word: "she", label: "Subject Pronoun", color: "emerald", note: "Subject of the dependent sub-clause." },
        { word: "had", label: "Past Perfect Auxiliary", color: "rose", note: "Part of past perfect aspect, showing action happened before another past action." },
        { word: "reviewed", label: "Past Participle Verb", color: "rose", note: "The main perfective action of the sub-clause." },
        { word: "her", label: "Possessive Determiner", color: "indigo", note: "Shows ownership of the following 'notes'." },
        { word: "notes", label: "Direct Object (Clause)", color: "violet", note: "The receiver of review action." },
        { word: "diligently.", label: "Adverb of Manner", color: "fuchsia", note: "Modifies 'reviewed', showing thorough effort." }
      ]
    }
  ];

  const [selectedPresetId, setSelectedPresetId] = useState<string>("preset_1");
  const [customSentence, setCustomSentence] = useState<string>("");
  const [customWords, setCustomWords] = useState<string[]>([]);
  const [customLabels, setCustomLabels] = useState<Record<string, string>>({});
  const [activeWordIdx, setActiveWordIdx] = useState<number | null>(null);

  // Confusion tracker states
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [checkedStats, setCheckedStats] = useState<Record<string, boolean>>({});

  const activePreset = presetSentences.find(p => p.id === selectedPresetId) || presetSentences[0];

  const handleCustomSentenceSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!customSentence.trim()) return;
    const tokens = customSentence.trim().split(/\s+/).map(w => w.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""));
    setCustomWords(tokens);
    setCustomLabels({});
    setActiveWordIdx(null);
  };

  const handleAssignLabel = (word: string, label: string) => {
    setCustomLabels(prev => ({
      ...prev,
      [word]: label
    }));
  };

  const getGrammarBadgeColor = (lbl: string | undefined) => {
    if (!lbl) return "bg-gray-100 text-gray-500 border-gray-200";
    if (lbl.includes("Noun") || lbl.includes("Pronoun")) return "bg-emerald-100 text-emerald-800 border-emerald-200 font-semibold";
    if (lbl.includes("Verb") || lbl.includes("Auxiliary")) return "bg-rose-100 text-rose-800 border-rose-200 font-semibold";
    if (lbl.includes("Adjective")) return "bg-amber-100 text-amber-800 border-amber-200 font-semibold";
    if (lbl.includes("Adverb")) return "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200 font-semibold";
    if (lbl.includes("Preposition") || lbl.includes("Conjunction")) return "bg-indigo-100 text-indigo-800 border-indigo-200 font-semibold";
    if (lbl.includes("Article")) return "bg-sky-100 text-sky-800 border-sky-200 font-semibold";
    return "bg-blue-100 text-blue-800 border-blue-200 font-semibold";
  };

  // Check confusion quiz answer
  const handleSelectConfusion = (quizId: string, choice: string) => {
    setAnswers(prev => ({ ...prev, [quizId]: choice }));
    setCheckedStats(prev => ({ ...prev, [quizId]: false }));
  };

  const verifyConfusion = (quizId: string) => {
    setCheckedStats(prev => ({ ...prev, [quizId]: true }));
  };

  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden text-slate-800">
      {/* Title block */}
      <div className="px-6 py-5 border-b border-slate-200 bg-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-100 rounded-lg text-slate-700">
            <Network className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h1 className="text-xl font-bold font-sans text-slate-900 tracking-tight">
              Interactive Label Workshop
            </h1>
            <p className="text-xs text-slate-500 font-sans">
              Engage directly with granular structure and study common tricky words in physical models.
            </p>
          </div>
        </div>
      </div>

      {/* Ribbon Tabs */}
      <div className="px-6 border-b border-slate-200 shrink-0 bg-slate-50 flex select-none">
        <button
          onClick={() => setActiveSubTab("analyzer")}
          className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
            activeSubTab === "analyzer"
              ? "border-blue-600 text-blue-600 font-bold bg-blue-50/20"
              : "border-transparent text-slate-600 hover:text-slate-850 hover:border-slate-200"
          }`}
        >
          Sentence POS Analyzer
        </button>
        <button
          onClick={() => setActiveSubTab("confusion")}
          className={`py-3 px-4 text-xs font-semibold border-b-2 transition-all duration-150 flex items-center gap-1.5 cursor-pointer ${
            activeSubTab === "confusion"
              ? "border-blue-600 text-blue-600 font-bold bg-blue-50/20"
              : "border-transparent text-slate-600 hover:text-slate-850 hover:border-slate-200"
          }`}
        >
          Tricky Pairs Worksheet
        </button>
      </div>

      {/* Main Sandbox flow */}
      <div className="flex-1 overflow-y-auto p-8 bg-white">
        
        {/* -- SUB-TAB 1: DYNAMIC ANALYZER -- */}
        {activeSubTab === "analyzer" && (
          <div className="space-y-6 max-w-5xl">

            {/* Introductory Explanation */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex gap-3">
              <Lightbulb className="w-5 h-5 text-blue-600 shrink-0 mt-px" />
              <div className="text-xs text-slate-700 leading-relaxed">
                <span className="font-bold text-slate-900">What is this?</span> Active labeling is the absolute best way to practice English grammar. This tool breaks down a sentence into physical slots. Try exploring the pre-built sentences with expert details or input your own and map the parts of speech yourself!
              </div>
            </div>

            {/* Preset Sentences selector */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 border-b border-slate-150 pb-2">
                <span className="w-1.5 h-3 bg-blue-500 rounded-full"></span>
                Analyze Pre-mapped Sentences (Interactive)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {presetSentences.map(preset => (
                  <button
                    key={preset.id}
                    onClick={() => {
                      setSelectedPresetId(preset.id);
                      setCustomWords([]);
                      setCustomSentence("");
                    }}
                    className={`p-4 rounded-lg border text-left transition-all cursor-pointer ${
                      selectedPresetId === preset.id && customWords.length === 0
                        ? "border-blue-400 bg-blue-50/30 shadow-sm ring-1 ring-blue-100 font-semibold"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <div className="text-xs font-bold text-blue-600 mb-1 font-mono uppercase">
                      Preset {preset.id === "preset_1" ? "A" : "B"} Structure
                    </div>
                    <p className="text-xs font-semibold text-slate-800 mb-1 leading-snug">
                      "{preset.sentence}"
                    </p>
                    <p className="text-[11px] text-slate-500">
                      {preset.description}
                    </p>
                  </button>
                ))}
              </div>

              {/* Showcase preset sentence structure */}
              {customWords.length === 0 && (
                <div className="mt-4 border border-slate-800 rounded-lg overflow-hidden bg-slate-900 text-slate-100 p-5">
                  <div className="text-[10px] text-blue-400 uppercase tracking-wider font-mono mb-3 select-none">
                    Visual Core Breakdown
                  </div>
                  
                  {/* Words wrap */}
                  <div className="flex flex-wrap gap-2 mb-4 p-3 bg-slate-950/45 rounded border border-slate-850">
                    {activePreset.parts.map((p, idx) => (
                      <div key={idx} className="flex flex-col items-center">
                        <span className="px-2.5 py-1 text-xs bg-slate-800 border border-slate-700 rounded font-medium text-slate-100">
                          {p.word}
                        </span>
                        <span className="text-[9px] font-mono font-bold mt-1 text-blue-450">
                          {p.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="text-xs text-slate-350 bg-slate-950/20 p-3 rounded border border-slate-850 leading-relaxed max-w-3xl">
                    <span className="font-bold text-amber-400">Structural Insight:</span> {activePreset.description} Each token is classified with its exact syntactic value above.
                  </div>
                </div>
              )}
            </div>

            {/* Custom Sentence inputs / DIY parsing workspace */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2 border-b border-slate-150 pb-2">
                <span className="w-1.5 h-3 bg-emerald-500 rounded-full"></span>
                Do-It-Yourself Label Workspace (Try Your Own Code/Grammar)
              </h3>

              <form onSubmit={handleCustomSentenceSubmit} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Paste or type a sentence here (e.g., The system runs offline...)"
                  value={customSentence}
                  onChange={(e) => setCustomSentence(e.target.value)}
                  className="flex-1 text-xs border border-slate-300 px-3.5 py-2.5 rounded-md focus:outline-none focus:border-blue-500 bg-white text-slate-800"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-md shadow shrink-0 flex items-center gap-1 cursor-pointer"
                >
                  <PlusCircle className="w-4 h-4" />
                  Load Form
                </button>
              </form>

              {customWords.length > 0 ? (
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2 select-none">
                    <span className="text-xs font-bold text-slate-500 font-mono uppercase">
                      Current Active DIY Target View
                    </span>
                    <button
                      onClick={() => {
                        setCustomWords([]);
                        setCustomSentence("");
                        setCustomLabels({});
                        setActiveWordIdx(null);
                      }}
                      className="text-[10px] text-red-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Clear and Reset Workspace
                    </button>
                  </div>

                  {/* Rendering words for labeling action */}
                  <div className="flex flex-wrap gap-2.5 p-4 bg-white border border-slate-200 rounded-xl min-h-[80px]">
                    {customWords.map((word, idx) => {
                      const labelAssigned = customLabels[word];
                      const isActive = activeWordIdx === idx;

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setActiveWordIdx(idx)}
                          className={`px-3 py-1.5 text-xs rounded border transition-all cursor-pointer flex flex-col items-center ${
                            isActive
                              ? "bg-blue-100 border-blue-400 ring-2 ring-blue-200 text-blue-900 font-bold"
                              : labelAssigned
                                ? "bg-emerald-50 border-emerald-300 text-emerald-900 font-medium"
                                : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                          }`}
                        >
                          <span>{word}</span>
                          {labelAssigned && (
                            <span className="text-[10px] mt-0.5 font-mono px-1 py-0.2 rounded bg-emerald-100/60 text-emerald-800 font-bold">
                              {labelAssigned}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Assign layout tags controls */}
                  {activeWordIdx !== null ? (
                    <div className="bg-white border border-slate-200 p-4 rounded-xl space-y-3">
                      <div className="text-xs text-slate-500">
                        Choose the correct grammatical label class to assign to word:{" "}
                        <span className="font-bold text-blue-700 text-sm">
                          "{customWords[activeWordIdx]}"
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Subject Noun", "Object Noun", "Personal Pronoun", "Possessive Pronoun",
                          "Action Verb", "Auxiliary Verb", "Descriptive Adjective", "Possessive Adjective",
                          "Adverb of Manner", "Adverb of Time/Freq", "Preposition", "Conjunction", "Article"
                        ].map(lbl => (
                          <button
                            key={lbl}
                            type="button"
                            onClick={() => {
                              handleAssignLabel(customWords[activeWordIdx!], lbl);
                              // Auto advance or close
                              if (activeWordIdx! < customWords.length - 1) {
                                setActiveWordIdx(activeWordIdx! + 1);
                              } else {
                                setActiveWordIdx(null);
                              }
                            }}
                            className="text-[10px] px-2.5 py-1 rounded bg-slate-100 border hover:bg-slate-200 cursor-pointer text-slate-700 font-mono font-semibold"
                          >
                            + {lbl}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-xs text-slate-400 italic text-center py-2 select-none">
                      Click on any word above to open the Parts of Speech Tagging Board!
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-xs text-slate-500 py-3 text-center border border-dashed rounded-xl bg-slate-50/50">
                  No custom sentence loaded yet. Input a sentence above to practice DIY grammatical parsing!
                </div>
              )}
            </div>

          </div>
        )}

        {/* -- SUB-TAB 2: TRICKY GENERAL MISCONCEPTIONS -- */}
        {activeSubTab === "confusion" && (
          <div className="space-y-6 max-w-4xl">
            {/* What are confusing pairs intro */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-slate-800 border-b border-slate-150 pb-2 flex items-center gap-1.5 select-none">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                Common Homophone & Contraction Traps
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Many fluent speakers fall victim to homophone traps (words that sound identical but are spelled differently and carry distinct grammar properties). Review the comparisons below and run the mini-tests to reinforce your skills.
              </p>
            </div>

            {/* THE TRICKY COMPARATIVE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* CARD 1: Its vs It's */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1 select-none">
                    <span className="text-[10px] font-bold text-blue-600 font-mono">COMPARISON</span>
                    <span className="text-[9px] bg-red-100 text-red-800 font-medium px-1.5 py-0.5 rounded">High Probability Trap</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">Its vs. It's</h4>
                  <div className="text-xs space-y-1.5 text-slate-600 leading-relaxed font-sans">
                    <p>
                      <strong className="text-emerald-700 font-mono font-bold">Its (Possessive Adjective):</strong> Shows ownership belonging to a singular animal, object, or system. 
                      <span className="block text-[11px] text-slate-400 italic pl-1">Example: "The database updated its main table." (no apostrophe)</span>
                    </p>
                    <p>
                      <strong className="text-rose-700 font-mono font-bold">It's (Contraction):</strong> A shortened form representing <em>"It is"</em> or <em>"It has"</em>.
                      <span className="block text-[11px] text-slate-400 italic pl-1">Example: "It's working offline." (means: It is working)</span>
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-150 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 font-mono uppercase block select-none">Diagnostic Check:</span>
                  <p className="text-xs font-semibold text-slate-800">"_____ complete and ready to run."</p>
                  <div className="flex items-center gap-2">
                    {["Its", "It's"].map(ans => {
                      const isSelected = answers["its_q"] === ans;
                      const isChecked = checkedStats["its_q"];
                      return (
                        <button
                          key={ans}
                          disabled={isChecked}
                          onClick={() => handleSelectConfusion("its_q", ans)}
                          className={`text-xs px-3 py-1.5 font-semibold rounded-md transition-all select-none cursor-pointer border ${
                            isSelected
                              ? "bg-blue-50 border-blue-400 text-blue-900"
                              : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                          }`}
                        >
                          {ans}
                        </button>
                      );
                    })}
                    {answers["its_q"] && !checkedStats["its_q"] && (
                      <button
                        onClick={() => verifyConfusion("its_q")}
                        className="text-xs text-blue-600 font-bold hover:underline ml-auto cursor-pointer"
                      >
                        Verify
                      </button>
                    )}
                  </div>
                  {checkedStats["its_q"] && (
                    <div className={`p-3 rounded-lg mt-1.5 text-xs font-medium border ${answers["its_q"] === "It's" ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-red-50 border-red-200 text-red-800"}`}>
                      {answers["its_q"] === "It's" ? (
                        <span>✓ Correct! "It is" complete {"->"} "It's complete".</span>
                      ) : (
                        <span>✗ Incorrect. "Its" shows possession. "It is complete" is required, so "It's" is correct.</span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* CARD 2: Their vs There vs They're */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1 select-none">
                    <span className="text-[10px] font-bold text-blue-600 font-mono">COMPARISON</span>
                    <span className="text-[9px] bg-red-100 text-red-800 font-medium px-1.5 py-0.5 rounded">High Probability Trap</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">Their vs. There vs. They're</h4>
                  <div className="text-xs space-y-1.5 text-slate-600 leading-relaxed font-sans">
                    <p>
                      <strong className="text-emerald-700 font-mono font-bold">Their (Possessive Pronoun):</strong> Indicates ownership belonging to multiple people.
                      <span className="block text-[11px] text-slate-400 italic pl-1">Example: "That is their database."</span>
                    </p>
                    <p>
                      <strong className="text-blue-700 font-mono font-bold">There (Location / Anchor):</strong> Refers to a physical place, or coordinates introductory statements.
                      <span className="block text-[11px] text-slate-400 italic pl-1">Example: "Let us go there," or "There is some advice."</span>
                    </p>
                    <p>
                      <strong className="text-rose-700 font-mono font-bold">They're (Contraction):</strong> Shortened pronoun phrase for <em>"They are"</em>.
                      <span className="block text-[11px] text-slate-400 italic pl-1">Example: "They're reading the exercises."</span>
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-150 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 font-mono uppercase block select-none">Diagnostic Check:</span>
                  <p className="text-xs font-semibold text-slate-800">"_____ copying the dataset contents."</p>
                  <div className="flex flex-wrap gap-2">
                    {["Their", "There", "They're"].map(ans => {
                      const isSelected = answers["their_q"] === ans;
                      const isChecked = checkedStats["their_q"];
                      return (
                        <button
                          key={ans}
                          disabled={isChecked}
                          onClick={() => handleSelectConfusion("their_q", ans)}
                          className={`text-xs px-3 py-1.5 font-semibold rounded-md transition-all select-none cursor-pointer border ${
                            isSelected
                              ? "bg-blue-50 border-blue-400 text-blue-900"
                              : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                          }`}
                        >
                          {ans}
                        </button>
                      );
                    })}
                    {answers["their_q"] && !checkedStats["their_q"] && (
                      <button
                        onClick={() => verifyConfusion("their_q")}
                        className="text-xs text-blue-600 font-bold hover:underline ml-auto cursor-pointer"
                      >
                        Verify
                      </button>
                    )}
                  </div>
                  {checkedStats["their_q"] && (
                    <div className={`p-3 rounded-lg mt-1.5 text-xs font-medium border ${answers["their_q"] === "They're" ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-red-50 border-red-200 text-red-800"}`}>
                      {answers["their_q"] === "They're" ? (
                        <span>✓ Correct! They're = they are (performing the action of copying).</span>
                      ) : (
                        <span>✗ Incorrect. "They are copying..." is needed, so contractive "They're" fits the slot.</span>
                      )}
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* THE SECOND ROW OF TRICKY COMPARATIVE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              
              {/* CARD 3: Affect vs Effect */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1 select-none">
                    <span className="text-[10px] font-bold text-blue-600 font-mono">COMPARISON</span>
                    <span className="text-[9px] bg-red-100 text-red-800 font-medium px-1.5 py-0.5 rounded">High Probability Trap</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">Affect vs. Effect</h4>
                  <div className="text-xs space-y-1.5 text-slate-600 leading-relaxed font-sans">
                    <p>
                      <strong className="text-blue-700 font-mono font-bold">Affect (Usually a Verb):</strong> To influence, adjust, change, or mock with something.
                      <span className="block text-[11px] text-slate-400 italic pl-1">Example: "Does this compile fail affect the application launch?"</span>
                    </p>
                    <p>
                      <strong className="text-emerald-700 font-mono font-bold">Effect (Usually a Noun):</strong> The result, consequence, or outcome of a physical change.
                      <span className="block text-[11px] text-slate-400 italic pl-1">Example: "The update had a marvelous effect on latency."</span>
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-150 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 font-mono uppercase block select-none">Diagnostic Check:</span>
                  <p className="text-xs font-semibold text-slate-800">"This error will majorly _____ compilation."</p>
                  <div className="flex items-center gap-2">
                    {["affect", "effect"].map(ans => {
                      const isSelected = answers["affect_q"] === ans;
                      const isChecked = checkedStats["affect_q"];
                      return (
                        <button
                          key={ans}
                          disabled={isChecked}
                          onClick={() => handleSelectConfusion("affect_q", ans)}
                          className={`text-xs px-3 py-1.5 font-semibold rounded-md transition-all select-none cursor-pointer border ${
                            isSelected
                              ? "bg-blue-50 border-blue-400 text-blue-900"
                              : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                          }`}
                        >
                          {ans}
                        </button>
                      );
                    })}
                    {answers["affect_q"] && !checkedStats["affect_q"] && (
                      <button
                        onClick={() => verifyConfusion("affect_q")}
                        className="text-xs text-blue-600 font-bold hover:underline ml-auto cursor-pointer"
                      >
                        Verify
                      </button>
                    )}
                  </div>
                  {checkedStats["affect_q"] && (
                    <div className={`p-3 rounded-lg mt-1.5 text-xs font-medium border ${answers["affect_q"] === "affect" ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-red-50 border-red-200 text-red-800"}`}>
                      {answers["affect_q"] === "affect" ? (
                        <span>✓ Correct! We need a verb meaning 'influence' {"->"} 'affect'.</span>
                      ) : (
                        <span>✗ Incorrect. 'Effect' is usually a noun. Here we need a verb, so 'affect' is correct.</span>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* CARD 4: Your vs You're */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-1 select-none">
                    <span className="text-[10px] font-bold text-blue-600 font-mono">COMPARISON</span>
                    <span className="text-[9px] bg-red-100 text-red-800 font-medium px-1.5 py-0.5 rounded">High Probability Trap</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">Your vs. You're</h4>
                  <div className="text-xs space-y-1.5 text-slate-600 leading-relaxed font-sans">
                    <p>
                      <strong className="text-emerald-700 font-mono font-bold">Your (Possessive Adjective):</strong> Indicates possession belonging to the listener.
                      <span className="block text-[11px] text-slate-400 italic pl-1">Example: "Is this your physical computer?"</span>
                    </p>
                    <p>
                      <strong className="text-rose-700 font-mono font-bold">You're (Contraction):</strong> Shortened form representing <em>"You are"</em>.
                      <span className="block text-[11px] text-slate-400 italic pl-1">Example: "You're demonstrating spectacular grammar progress."</span>
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-150 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 font-mono uppercase block select-none">Diagnostic Check:</span>
                  <p className="text-xs font-semibold text-slate-800">"We need _____ database backup script now."</p>
                  <div className="flex items-center gap-2">
                    {["your", "you're"].map(ans => {
                      const isSelected = answers["your_q"] === ans;
                      const isChecked = checkedStats["your_q"];
                      return (
                        <button
                          key={ans}
                          disabled={isChecked}
                          onClick={() => handleSelectConfusion("your_q", ans)}
                          className={`text-xs px-3 py-1.5 font-semibold rounded-md transition-all select-none cursor-pointer border ${
                            isSelected
                              ? "bg-blue-50 border-blue-400 text-blue-900"
                              : "bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-700"
                          }`}
                        >
                          {ans}
                        </button>
                      );
                    })}
                    {answers["your_q"] && !checkedStats["your_q"] && (
                      <button
                        onClick={() => verifyConfusion("your_q")}
                        className="text-xs text-blue-600 font-bold hover:underline ml-auto cursor-pointer"
                      >
                        Verify
                      </button>
                    )}
                  </div>
                  {checkedStats["your_q"] && (
                    <div className={`p-3 rounded-lg mt-1.5 text-xs font-medium border ${answers["your_q"] === "your" ? "bg-emerald-50 border-emerald-200 text-emerald-800" : "bg-red-50 border-red-200 text-red-800"}`}>
                      {answers["your_q"] === "your" ? (
                        <span>✓ Correct! Fits possessive modifying 'database backup script'.</span>
                      ) : (
                        <span>✗ Incorrect. "You're" means "You are". Your meaning "belonging to you" is correct.</span>
                      )}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}
