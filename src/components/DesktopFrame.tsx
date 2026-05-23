import { useState, useEffect } from "react";
import { 
  Search, 
  X, 
  BookMarked, 
  BookOpen, 
  Menu, 
  Award, 
  Activity, 
  Network,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { GRAMMAR_DB } from "../data/grammarDatabase";
import { GrammarTopic, UserStats } from "../types";
import ExplorerSidebar from "./ExplorerSidebar";
import TopicDetails from "./TopicDetails";
import GrammarSandbox from "./GrammarSandbox";
import ProgressDashboard from "./ProgressDashboard";

export default function DesktopFrame() {
  const [stats, setStats] = useState<UserStats>({
    bookmarks: [],
    completedQuizzes: {},
    studyStreak: 3, 
    lastStudyDate: new Date().toISOString().slice(0, 10),
    totalXP: 50
  });

  const [selectedTopicId, setSelectedTopicId] = useState<string>("nouns_count_uncount");
  const [activeView, setActiveView] = useState<'reader' | 'sandbox' | 'dashboard'>('reader');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  
  // Search parameters
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [filteredTopics, setFilteredTopics] = useState<GrammarTopic[]>([]);

  // Load study accomplishments on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("grammar_stats_win_v1");
      if (stored) {
        const parsed = JSON.parse(stored);
        const todayStr = new Date().toISOString().slice(0, 10);
        let updatedStreak = parsed.studyStreak || 3;
        
        if (parsed.lastStudyDate && parsed.lastStudyDate !== todayStr) {
          const yesterdayStr = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
          if (parsed.lastStudyDate === yesterdayStr) {
            updatedStreak += 1;
          } else {
            updatedStreak = 1;
          }
        }

        setStats({
          ...parsed,
          studyStreak: updatedStreak,
          lastStudyDate: todayStr
        });
      }
    } catch (e) {
      console.error("Local storage sync failed", e);
    }

    // Auto-collapse sidebar on very small screens initially
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  }, []);

  // Save changes to local database state
  const saveStats = (updatedStats: UserStats) => {
    setStats(updatedStats);
    try {
      localStorage.setItem("grammar_stats_win_v1", JSON.stringify(updatedStats));
    } catch (e) {
      console.error("Failed to persist stats", e);
    }
  };

  // Search filter
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredTopics([]);
      return;
    }
    const query = searchQuery.toLowerCase().trim();
    const matches = GRAMMAR_DB.filter(topic => {
      const titleMatch = topic.title.toLowerCase().includes(query);
      const categoryMatch = topic.category.toLowerCase().includes(query);
      const subcategoryMatch = topic.subcategory.toLowerCase().includes(query);
      const definitionMatch = topic.definition.toLowerCase().includes(query);
      return titleMatch || categoryMatch || subcategoryMatch || definitionMatch;
    });
    setFilteredTopics(matches);
  }, [searchQuery]);

  const handleToggleBookmark = (topicId: string) => {
    const isBookmarked = stats.bookmarks.includes(topicId);
    let updatedBookmarks = [...stats.bookmarks];
    if (isBookmarked) {
      updatedBookmarks = updatedBookmarks.filter(id => id !== topicId);
    } else {
      updatedBookmarks.push(topicId);
    }
    const updated = {
      ...stats,
      bookmarks: updatedBookmarks
    };
    saveStats(updated);
  };

  const handleCompleteQuiz = (topicId: string, score: number, total: number) => {
    const currentQuizRecord = stats.completedQuizzes[topicId];
    let scoreDelta = score;
    if (currentQuizRecord) {
      scoreDelta = Math.max(0, score - currentQuizRecord.score);
    }
    const xpEarned = scoreDelta * 15; 

    const updated = {
      ...stats,
      completedQuizzes: {
        ...stats.completedQuizzes,
        [topicId]: {
          score: Math.max(score, currentQuizRecord?.score || 0),
          total,
          completedAt: new Date().toISOString()
        }
      },
      totalXP: stats.totalXP + xpEarned
    };
    saveStats(updated);
  };

  const handleImportStats = (imported: UserStats) => {
    saveStats(imported);
  };

  const handleResetStats = () => {
    const defaults: UserStats = {
      bookmarks: [],
      completedQuizzes: {},
      studyStreak: 1,
      lastStudyDate: new Date().toISOString().slice(0, 10),
      totalXP: 0
    };
    saveStats(defaults);
  };

  const currentTopic = GRAMMAR_DB.find(t => t.id === selectedTopicId) || GRAMMAR_DB[0];

  return (
    <div className="w-full h-screen flex flex-col bg-slate-100 text-slate-800 font-sans overflow-hidden">
      
      {/* NEW SIMPLIFIED HEADER BAR */}
      <header className="h-14 bg-white border-b border-slate-200 px-4 flex items-center justify-between shrink-0 z-20">
        
        {/* Left Side: Handbook Brand & Menu Toggle */}
        <div className="flex items-center gap-3">
          <button 
            type="button"
            id="btn-sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 px-2.5 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            title="Toggle Sidebar Navigator"
          >
            <Menu className="w-4 h-4" />
            <span className="hidden sm:inline">
              {sidebarOpen ? "Hide Chapters" : "Show Chapters"}
            </span>
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <BookOpen className="w-3.5 h-3.5 text-white" />
            </div>
            <h1 className="text-sm font-bold tracking-tight text-slate-900 hidden xs:block">
              Grammar Handbook
            </h1>
          </div>
        </div>

        {/* Middle: Integrated Topic Search */}
        <div className="relative w-48 sm:w-64 max-w-xs mx-2">
          <div className="flex items-center gap-1.5 border border-slate-200 px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100/50 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-500 transition-all">
            <Search className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <input
              type="text"
              id="search-topics-input"
              placeholder="Quick search..."
              value={searchQuery}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs text-slate-700 bg-transparent outline-none border-none placeholder-slate-400"
            />
            {searchQuery && (
              <button 
                type="button"
                id="btn-clear-search"
                onClick={() => setSearchQuery("")} 
                className="p-0.5 hover:bg-slate-200 rounded text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>

          {/* Autocomplete Overlay */}
          {searchFocused && searchQuery.trim() && (
            <div className="absolute top-10 left-0 right-0 max-h-60 overflow-y-auto bg-white border border-slate-200 rounded-lg shadow-xl z-50 p-1 divide-y divide-slate-100">
              {filteredTopics.length > 0 ? (
                filteredTopics.map(topic => (
                  <button
                    key={topic.id}
                    id={`search-result-${topic.id}`}
                    type="button"
                    onClick={() => {
                      setSelectedTopicId(topic.id);
                      setActiveView('reader');
                      setSearchQuery("");
                    }}
                    className="w-full text-left py-2 px-3 hover:bg-slate-50 transition-colors flex justify-between items-center text-xs text-slate-800"
                  >
                    <div className="truncate pr-2">
                      <span className="font-bold text-slate-900 block truncate">{topic.title}</span>
                      <span className="text-[10px] text-slate-400 font-mono italic">{topic.category}</span>
                    </div>
                    <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
                  </button>
                ))
              ) : (
                <div className="py-3 px-2 text-center text-[11px] text-slate-400 italic">
                  No matching chapters found.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right Side: Elegant Navigation Modes */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            id="tab-reader"
            onClick={() => setActiveView('reader')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeView === 'reader'
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Handbook</span>
          </button>

          <button
            type="button"
            id="tab-sandbox"
            onClick={() => setActiveView('sandbox')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeView === 'sandbox'
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Workshop</span>
          </button>

          <button
            type="button"
            id="tab-dashboard"
            onClick={() => setActiveView('dashboard')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeView === 'dashboard'
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Milestones</span>
          </button>

          {/* Core XP Indicator Pill */}
          <div className="ml-1 px-2.5 py-1 bg-amber-50 rounded-full border border-amber-200 flex items-center gap-1 text-[11px] text-amber-850 font-bold hidden xs:flex">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>{stats.totalXP} XP</span>
          </div>
        </div>
      </header>

      {/* WORKSPACE AREA with COLLAPSIBLE SIDEBAR */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Explorer Sidebar (collapsible) */}
        {sidebarOpen && (
          <ExplorerSidebar
            topics={GRAMMAR_DB}
            selectedTopicId={selectedTopicId}
            onSelectTopic={setSelectedTopicId}
            activeView={activeView}
            onChangeView={setActiveView}
            stats={stats}
          />
        )}

        {/* Main Content Pane */}
        <main className="flex-1 flex flex-col overflow-hidden bg-slate-50 relative">
          
          <div className="flex-1 overflow-y-auto flex flex-col">
            <div className="w-full max-w-5xl mx-auto p-4 md:p-6 lg:p-8 flex-1 flex flex-col">
              
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex-1 flex flex-col overflow-hidden">
                {activeView === 'reader' && (
                  <TopicDetails
                    topic={currentTopic}
                    stats={stats}
                    onToggleBookmark={handleToggleBookmark}
                    onCompleteQuiz={handleCompleteQuiz}
                  />
                )}
                
                {activeView === 'sandbox' && (
                  <GrammarSandbox />
                )}

                {activeView === 'dashboard' && (
                  <ProgressDashboard
                    topics={GRAMMAR_DB}
                    stats={stats}
                    onImportStats={handleImportStats}
                    onResetStats={handleResetStats}
                  />
                )}
              </div>

            </div>
          </div>
          
        </main>

      </div>

    </div>
  );
}
