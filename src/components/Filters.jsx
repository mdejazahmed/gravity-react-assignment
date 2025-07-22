import { Filter, Circle, Check } from 'lucide-react';

export const FilterComponent = ({ filter, onFilterChange }) => {
    const filters = [
      { key: 'all', label: 'All Tasks', icon: Filter, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/20', borderColor: 'border-blue-400/50' },
      { key: 'pending', label: 'In Progress', icon: Circle, color: 'from-orange-500 to-yellow-500', bgColor: 'bg-orange-500/20', borderColor: 'border-orange-400/50' },
      { key: 'completed', label: 'Done', icon: Check, color: 'from-green-500 to-emerald-500', bgColor: 'bg-green-500/20', borderColor: 'border-green-400/50' }
    ];
  
    return (
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {filters.map(({ key, label, icon: Icon, color, bgColor, borderColor }) => (
            <button
              key={key}
              onClick={() => onFilterChange(key)}
              className={`relative group overflow-hidden ${
                filter === key 
                  ? `bg-gradient-to-r ${color} text-white shadow-2xl shadow-purple-500/25 scale-105` 
                  : `${bgColor} backdrop-blur-lg border-2 ${borderColor} text-white/80 hover:text-white hover:scale-105 hover:shadow-xl`
              } rounded-2xl px-6 py-4 transition-all duration-300 flex items-center gap-3 font-medium min-w-[120px] justify-center`}
            >
              {/* Background animation effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Icon with pulse effect for active filter */}
              <div className={`relative z-10 ${filter === key ? 'animate-pulse' : ''}`}>
                <Icon size={18} />
              </div>
              
              {/* Label */}
              <span className="relative z-10 text-sm font-semibold tracking-wide">
                {label}
              </span>
              
              {/* Active indicator dot */}
              {filter === key && (
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-lg animate-bounce"></div>
              )}
            </button>
          ))}
        </div>
        
        {/* Filter description */}
        <div className="text-center mt-4">
          <p className="text-white/50 text-sm">
            {filter === 'all' && '📋 Viewing all your tasks'}
            {filter === 'pending' && '⏳ Focus on what needs to be done'}
            {filter === 'completed' && '🎉 Celebrating your achievements'}
          </p>
        </div>
      </div>
    );
  };
  