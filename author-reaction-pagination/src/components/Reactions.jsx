// src/components/Reactions.jsx
import React, { useState } from 'react';

const reactions = [
  { emoji: '👍', label: 'Like' },
  { emoji: '❤️', label: 'Love' },
  { emoji: '😠', label: 'Angry' },
  { emoji: '😢', label: 'Sad' }
];

const Reactions = ({ postId, type = 'post' }) => {
  const [activeReaction, setActiveReaction] = useState(null);
  // CHANGED: Updated initial values to actual numbers instead of percentages
  const [reactionCounts, setReactionCounts] = useState({
    0: 42,  // Like: 42 reactions
    1: 156, // Love: 156 reactions
    2: 8,   // Angry: 8 reactions
    3: 12   // Sad: 12 reactions
  });

  const handleReactionClick = (index) => {
    // CHANGED: Updated logic to increment/decrement counts when clicking reactions
    setReactionCounts(prev => {
      const newCounts = { ...prev };
      
      if (activeReaction === index) {
        // If clicking the same reaction, remove it and decrease count
        newCounts[index] = Math.max(0, newCounts[index] - 1);
        setActiveReaction(null);
      } else {
        // If clicking a different reaction
        if (activeReaction !== null) {
          // Decrease count of previously active reaction
          newCounts[activeReaction] = Math.max(0, newCounts[activeReaction] - 1);
        }
        // Increase count of new reaction
        newCounts[index] = newCounts[index] + 1;
        setActiveReaction(index);
      }
      
      return newCounts;
    });
  };

  return (
    <div className="mt-4">
      <div className="flex gap-4 mb-2">
        {reactions.map((reaction, index) => (
          <button
            key={index}
            onClick={() => handleReactionClick(index)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full border transition-colors ${
              activeReaction === index 
                ? 'bg-blue-100 border-blue-300 text-blue-700' 
                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
            }`}
          >
            <span className="text-lg">{reaction.emoji}</span>
            <span className="text-sm font-medium">{reaction.label}</span>
          </button>
        ))}
      </div>
      {/* CHANGED: Updated display to show actual numbers instead of percentages */}
      <div className="flex gap-4 text-sm text-gray-600">
        {reactions.map((reaction, index) => (
          <span key={index}>
            {reaction.label}: {reactionCounts[index]}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Reactions;