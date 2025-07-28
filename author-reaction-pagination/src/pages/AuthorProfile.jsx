// src/pages/AuthorProfile.jsx
import React from 'react';

const AuthorProfile = ({ authorId, onBack }) => {
  const author = `Author Name ${authorId}`;
  
  return (
    <div className="max-w-2xl mx-auto p-6">
      <button 
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
      >
        ← Back to Posts
      </button>
      <div className="text-center">
        <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">
            {author.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-2">{author}</h2>
        <p className="text-gray-600 mb-4">Professional Writer & Content Creator</p>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-700">
            Welcome to the profile of <strong>{author}</strong>. This is a minimal author profile page 
            to demonstrate routing functionality in the blog application.
          </p>
          <div className="mt-4 flex justify-center gap-4 text-sm text-gray-600">
            <span>📝 25 Posts</span>
            <span>👥 1.2k Followers</span>
            <span>📅 Joined Feb 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;