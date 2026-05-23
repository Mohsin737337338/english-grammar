import { useState, FormEvent } from "react";
import { 
  Trophy, 
  BookMarked, 
  CheckCircle2, 
  Activity, 
  Download, 
  Upload, 
  RotateCcw,
  Award,
  Calendar,
  Layers,
  FileCode,
  Check,
  ShieldAlert,
  Save
} from "lucide-react";
import { GrammarTopic, UserStats } from "../types";

interface ProgressDashboardProps {
  topics: GrammarTopic[];
  stats: UserStats;
  onImportStats: (imported: UserStats) => void;
  onResetStats: () => void;
}

export default function ProgressDashboard({
  topics,
  stats,
  onImportStats,
  onResetStats
}: ProgressDashboardProps) {
  const [importText, setImportText] = useState("");
  const [showImportArea, setShowImportArea] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const totalTopics = topics.length;
  const completedCount = Object.keys(stats.completedQuizzes).length;
  const completionPercentage = Math.round((completedCount / totalTopics) * 100) || 0;

  // Group statistics by categories
  const categories = Array.from(new Set(topics.map(t => t.category)));
  
  const getCategoryMetrics = (cat: string) => {
    const catTopics = topics.filter(t => t.category === cat);
    const catTopicIds = catTopics.map(t => t.id);
    const completedInCat = catTopicIds.filter(id => !!stats.completedQuizzes[id]).length;
    const pct = Math.round((completedInCat / catTopics.length) * 100) || 0;
    return {
      total: catTopics.length,
      completed: completedInCat,
      pct
    };
  };

  // Export progress as JSON file to computer
  const handleExportDatabase = () => {
    try {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(stats, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `grammar_handbook_pc_backup_${new Date().toISOString().slice(0, 10)}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      
      setSuccessMsg("Progress file generated! Check your PC downloads folder.");
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (e) {
      setErrorMsg("Failed to generate offline export package.");
    }
  };

  // Import JSON configuration
  const handleImportDatabase = (e: FormEvent) => {
    e.preventDefault();
    try {
      const parsed = JSON.parse(importText);
      if (typeof parsed.studyStreak !== "number" || !parsed.bookmarks || !parsed.completedQuizzes) {
        throw new Error("Invalid stats backup structure");
      }
      onImportStats(parsed);
      setSuccessMsg("Offline progress database state restored successfully!");
      setImportText("");
      setShowImportArea(false);
      setTimeout(() => setSuccessMsg(""), 4000);
    } catch (err) {
      setErrorMsg("Failed to load back-up array. Please ensure the JSON is valid.");
      setTimeout(() => setErrorMsg(""), 4000);
    }
  };

  // Check if fully qualified for the final certificate
  const isEligibleForCertificate = completedCount === totalTopics && totalTopics > 0;

  return (
    <div className="flex-1 flex flex-col bg-white overflow-hidden text-slate-850">
      {/* Header bar */}
      <div className="px-6 py-4 border-b border-slate-200 bg-white shrink-0">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
            <Trophy className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold font-sans text-slate-900 tracking-tight">
              My Learning Milestones
            </h1>
            <p className="text-xs text-slate-500 font-sans">
              Track your acquired XP, completed quizzes, active daily streak, and unlock official completions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats container scrollable */}
      <div className="flex-1 overflow-y-auto p-8 space-y-6">
        
        {/* Core numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:border-slate-300 transition-all select-none">
            <div className="p-3 bg-slate-50 text-slate-600 rounded-lg">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-sans">Acquired Experience</span>
              <p className="text-xl font-black text-slate-800">{stats.totalXP} <span className="text-xs text-blue-500 font-mono font-bold">XP</span></p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:border-slate-300 transition-all select-none">
            <div className="p-3 bg-slate-50 text-slate-600 rounded-lg">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-sans">Assessment Progress</span>
              <p className="text-xl font-black text-slate-800">
                {completionPercentage}% <span className="text-xs text-slate-500 normal-case font-mono">({completedCount}/{totalTopics})</span>
              </p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:border-slate-300 transition-all select-none">
            <div className="p-3 bg-slate-50 text-slate-600 rounded-lg">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-sans">Saved References</span>
              <p className="text-xl font-black text-slate-800">{stats.bookmarks.length} <span className="text-xs text-slate-500 font-light">Chapters</span></p>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:border-slate-300 transition-all select-none">
            <div className="p-3 bg-slate-50 text-slate-600 rounded-lg">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block font-sans">Local Study Streak</span>
              <p className="text-xl font-black text-slate-800">{stats.studyStreak} <span className="text-xs text-emerald-700 font-mono font-bold">Days</span></p>
            </div>
          </div>

        </div>

        {/* FEEDBACK alerts */}
        {successMsg && (
          <div className="p-4 bg-emerald-50 border border-emerald-250 text-emerald-900 rounded-lg text-xs font-bold font-sans flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            {successMsg}
          </div>
        )}
        {errorMsg && (
          <div className="p-4 bg-red-50 border border-red-200 text-red-900 rounded-lg text-xs font-bold font-sans flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-red-600" />
            {errorMsg}
          </div>
        )}

        {/* Categories break-down grid progress */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 pb-2 border-b border-slate-100">
            <Layers className="w-4 h-4 text-blue-500" />
            Grammar Database Category Coverage
          </h3>
          
          <div className="space-y-4 max-w-3xl">
            {categories.map(cat => {
              const metr = getCategoryMetrics(cat);
              return (
                <div key={cat} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-700">{cat}</span>
                    <span className="text-slate-500 font-mono text-[11px]">
                      Completed {metr.completed} of {metr.total} ({metr.pct}%)
                    </span>
                  </div>
                  {/* Progress track */}
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden border border-slate-200/50">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${metr.pct}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CERTIFICATE DISPLAY UNLOCKED OR LOCKED */}
        <div className="bg-slate-900 text-slate-100 border border-slate-800 rounded-xl p-6 relative overflow-hidden">
          {/* Backdrop shine glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="p-4 bg-amber-400/10 text-amber-400 rounded-full border border-amber-400/20 shrink-0">
              <Award className="w-12 h-12" />
            </div>

            <div className="space-y-2 flex-1 text-center md:text-left">
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest font-mono">
                Official Certification of Achievement
              </span>
              <h3 className="text-lg font-bold font-mono text-white">
                English Grammar Mastery Credential
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                Complete grammar quizzes for all available chapters (currently {completedCount}/{totalTopics}) to generate and print your official certified English Grammar Handbook diploma!
              </p>

              {isEligibleForCertificate ? (
                <div className="pt-2">
                  <div className="border border-double border-amber-400/60 p-5 bg-slate-950/80 rounded-xl space-y-3 max-w-xl shadow-xl text-center">
                    <span className="text-[11px] font-black tracking-widest uppercase text-amber-400 block font-serif">DIPLOMA OF COMPLETION</span>
                    <h4 className="text-sm font-bold font-serif italic text-white">Granted for Exquisite Grammar Competency</h4>
                    <p className="text-[11px] text-slate-300">
                      We hereby state that the student has fully completed, reviewed, and passed all modules of English Grammar including parts of speech, syntax, clauses, tense, and conditionals.
                    </p>
                    <div className="flex justify-between items-center text-[9px] text-[#0a5c36] font-mono pt-2 border-t border-slate-800">
                      <span>VERIFIED: HANDBOOK APAL</span>
                      <span>STREAK: {stats.studyStreak} DAYS</span>
                      <span>DATE: 2026-05-23</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => window.print()}
                    className="mt-3 text-xs font-bold px-4 py-2.5 bg-amber-400 hover:bg-amber-500 text-slate-950 rounded-lg shadow-md transition-colors cursor-pointer"
                  >
                    Print Milestone Credential
                  </button>
                </div>
              ) : (
                <div className="text-[11px] text-amber-400/80 italic font-mono pt-1">
                  🔒 Locked. Finish {totalTopics - completedCount} more high-quality quizzes to unlock your achievement.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* LOCAL STORAGE RESET / STUDY MANAGEMENT SECTION */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-sm font-bold text-slate-800">
              Settings & Reset Option
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Reset cached status indicators, saved bookmarks, and historical streak accomplishments to start fresh.
            </p>
          </div>

          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to restore default values? This deletes all local bookmarks and quiz logs.")) {
                onResetStats();
                setSuccessMsg("System records deleted and restored to initial parameters.");
                setTimeout(() => setSuccessMsg(""), 4000);
              }
            }}
            className="text-xs px-4 py-2 bg-red-50 border border-red-200 hover:bg-red-100 hover:border-red-350 rounded-lg font-bold text-red-700 transition-all shadow-sm shrink-0 cursor-pointer"
          >
            Reset Study Stats
          </button>
        </div>

      </div>
    </div>
  );
}
