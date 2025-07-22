import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const addSound = () => {
    const audio = new Audio('/add.mp3');
    audio.play();
};
  const handleSubmit = (e) => {
    e.preventDefault();
    addSound();
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  const handleKeyPress = (e) => {
   
    if (e.key === 'Enter') {
      addSound();
      handleSubmit(e);
    }
  };

  return (
    <div className="mb-8">
      <div className={`relative transition-all duration-300 ${isFocused ? 'transform scale-[1.01]' : ''}`}>
        {/* Subtle focused border */}
        <div className={`absolute -inset-0.5 bg-purple-500/40 rounded-2xl transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-0'}`}></div>
        
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl overflow-hidden">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="✨ What amazing thing will you accomplish today?"
            className="w-full px-6 py-5 text-lg bg-transparent text-white placeholder-white/60 focus:outline-none transition-all duration-300 pr-16"
          />
          
          {/* Clean Add Button */}
          <button
            onClick={handleSubmit}
            disabled={!text.trim()}
            className={`absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-300 rounded-xl p-3 ${
              text.trim() 
                ? 'bg-purple-500 hover:bg-purple-600 shadow-lg hover:shadow-xl hover:scale-110 cursor-pointer' 
                : 'bg-white/10 cursor-not-allowed opacity-50'
            }`}
          >
            <Plus size={20} className="text-white" />
          </button>
        </div>
        
        {/* Encouraging text with animation */}
        <div className={`text-center mt-3 transition-all duration-300 ${isFocused ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-2'}`}>
          <p className="text-white/70 text-sm flex items-center justify-center gap-2">
            <span>🚀</span>
            Press Enter or click the + button to add your task
            <span>🎯</span>
          </p>
        </div>
      </div>
      
      {/* Optional: Add a subtle pulse animation for empty state */}
      {!text && !isFocused && (
        <div className="text-center mt-4 animate-bounce">
          <p className="text-white/40 text-xs">👆 Click here to start being productive!</p>
        </div>
      )}
    </div>
  );
};