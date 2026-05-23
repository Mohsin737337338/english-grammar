import { useState } from "react";
import { 
  Folder, 
  ChevronRight, 
  ChevronDown, 
  FileText, 
  Compass, 
  BookMarked, 
  CheckCircle2, 
  Network,
  Save,
  Trophy,
  Activity
} from "lucide-react";
import { GrammarTopic, UserStats } from "../types";

interface ExplorerSidebarProps {
  topics: GrammarTopic[];
  selectedTopicId: string | null;
  onSelectTopic: (id: string) => void;
  activeView: 'reader' | 'sandbox' | 'dashboard';
  onChangeView: (view: 'reader' | 'sandbox' | 'dashboard') => void;
  stats: UserStats;
}

export default function ExplorerSidebar({
  topics,
  selectedTopicId,
  onSelectTopic,
  activeView,
  onChangeView,
  stats
}: ExplorerSidebarProps) {
  // Navigation structure groupings
  const categories = Array.from(new Set(topics.map(t => t.category)));
  
  // Track open/closed states for categories in our treeview
  const [expandedCats, setExpandedCats] = useState<Record<string, boolean>>({
    "Parts of Speech": true,
    "Phrases & Clauses": true,
    "Sentence Structure": true,
    "Verb Tenses": true,
    "Voice & Narration": true,
    "Other Topics": true,
  });

  const toggleCategory = (cat: string) => {
    setExpandedCats(prev => ({
      ...prev,
      [cat]: !prev[cat]
    }));
  };

  const getTopicCountInCat = (cat: string) => {
    return topics.filter(t => t.category === cat).length;
  };

  const isCompleted = (topicId: string) => {
    return !!stats.completedQuizzes[topicId];
  };

  const isBookmarked = (topicId: string) => {
    return stats.bookmarks.includes(topicId);
  };

  return (
    <aside className="w-68 border-r border-[#cbd5e1] bg-slate-50 text-slate-800 flex flex-col select-none h-full shrink-0">
      {/* Search Header Info */}
      <div className="p-3.5 border-b border-[#cbd5e1] bg-white flex items-center justify-between shadow-sm">
        <span className="text-xs font-semibold tracking-wider uppercase text-slate-500 flex items-center gap-1.5">
          <Compass className="w-3.5 h-3.5 text-[#2563eb]" />
          My Handbook Navigator
        </span>
        <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-mono font-bold">
          {topics.length} items
        </span>
      </div>

      <div className="flex-1 overflow-y-auto p-2.5 space-y-4">
        {/* Core Quick Access Nodes */}
        <div>
          <h4 className="px-2 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Favorites & Tools
          </h4>
          <div className="space-y-0.5">
            <button
              onClick={() => onChangeView('dashboard')}
              className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded text-xs text-left transition-colors duration-150 ${
                activeView === 'dashboard'
                  ? "bg-blue-50 text-blue-700 font-semibold border-l-2 border-blue-600"
                  : "hover:bg-slate-200 text-slate-700"
              }`}
            >
              <Activity className="w-4 h-4 text-emerald-600" />
              <span>Offline Study Progress</span>
              <span className="ml-auto text-[10px] text-slate-500 font-mono">
                {stats.totalXP} XP
              </span>
            </button>

            <button
              onClick={() => onChangeView('sandbox')}
              className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded text-xs text-left transition-colors duration-150 ${
                activeView === 'sandbox'
                  ? "bg-blue-50 text-blue-700 font-semibold border-l-2 border-blue-600"
                  : "hover:bg-slate-200 text-slate-700"
              }`}
            >
              <Network className="w-4 h-4 text-purple-600" />
              <span>Interactive Label Workshop</span>
            </button>
          </div>
        </div>

        {/* Categories folder tree */}
        <div className="space-y-1">
          <h4 className="px-2 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Grammar Database
          </h4>

          {categories.map(cat => {
            const isExpanded = expandedCats[cat];
            const catTopics = topics.filter(t => t.category === cat);

            return (
              <div key={cat} className="space-y-0.5">
                {/* Category Group Header (Folder representation) */}
                <button
                  onClick={() => toggleCategory(cat)}
                  className="w-full flex items-center gap-1.5 px-2 py-1.5 rounded hover:bg-slate-200 text-slate-700 text-xs font-semibold text-left transition-colors duration-150"
                >
                  {isExpanded ? (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  )}
                  <Folder className={`w-4 h-4 ${isExpanded ? "text-amber-500 fill-amber-300" : "text-amber-400 fill-amber-200"}`} />
                  <span className="truncate flex-1">{cat}</span>
                  <span className="text-[10px] font-mono text-slate-400 font-normal">
                    ({getTopicCountInCat(cat)})
                  </span>
                </button>

                {/* Topics in category */}
                {isExpanded && (
                  <div className="pl-4 border-l border-slate-200 ml-3.5 space-y-0.5">
                    {catTopics.map(topic => {
                      const isSelected = selectedTopicId === topic.id && activeView === 'reader';
                      return (
                        <button
                          key={topic.id}
                          onClick={() => {
                            onChangeView('reader');
                            onSelectTopic(topic.id);
                          }}
                          className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded text-xs text-left transition-colors duration-100 group ${
                            isSelected
                              ? "bg-blue-50 text-blue-700 font-semibold border-l-2 border-blue-600"
                              : "hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                          }`}
                        >
                          <FileText className={`w-3.5 h-3.5 ${isSelected ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"}`} />
                          <span className="truncate flex-1">{topic.title}</span>
                          
                          {/* Bookmarked & Completed badges */}
                          <div className="flex items-center gap-0.5 shrink-0">
                            {isBookmarked(topic.id) && (
                              <BookMarked className="w-3 h-3 text-amber-500" />
                            )}
                            {isCompleted(topic.id) && (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 fill-emerald-100" />
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bookmarks Section */}
        {stats.bookmarks.length > 0 && (
          <div>
            <h4 className="px-2 mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-1">
              <BookMarked className="w-3 h-3 text-amber-500" />
              Bookmarked Topics
            </h4>
            <div className="space-y-0.5 px-1 bg-amber-50/50 rounded-md py-1 border border-amber-100">
              {topics
                .filter(t => stats.bookmarks.includes(t.id))
                .map(topic => (
                  <button
                    key={topic.id}
                    onClick={() => {
                      onChangeView('reader');
                      onSelectTopic(topic.id);
                    }}
                    className="w-full flex items-center gap-1.5 px-2 py-1 rounded text-xs text-left hover:bg-amber-100/50 text-amber-900 group font-medium"
                  >
                    <FileText className="w-3 h-3 text-amber-500 shrink-0" />
                    <span className="truncate flex-1">{topic.title}</span>
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
}
