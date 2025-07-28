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
  const [reactionCounts, setReactionCounts] = useState({
    0: 20, // Like: 20%
    1: 60, // Love: 60%
    2: 5,  // Angry: 5%
    3: 5   // Sad: 5%
  });

  const handleReactionClick = (index) => {
    if (activeReaction === index) {
      setActiveReaction(null);
    } else {
      setActiveReaction(index);
    }
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
      <div className="flex gap-4 text-sm text-gray-600">
        {reactions.map((reaction, index) => (
          <span key={index}>
            {reaction.label}: {reactionCounts[index]}%
          </span>
        ))}
      </div>
    </div>
  );
};

export default Reactions;