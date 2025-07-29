// src/pages/Home.jsx - This is now integrated into App.js
// You can delete this file or keep it for reference

import React, { useState } from 'react';
import Post from '../components/Post';


// Extended dummy data with comments
const dummyPosts = new Array(15).fill(null).map((_, i) => ({
  id: i + 1,
  title: `Post Title ${i + 1}`,
  content: `CSE (Computer Science and Engineering) is the study of computing technologies, covering programming, software development, algorithms, data structures, computer hardware, networks, cybersecurity, AI, and more. It focuses on designing and developing computer systems and solving real-world problems using technology.`,
  authorId: (i % 5) + 1,
  authorName: `Naima${(i % 5) + 1}`,
  date: `${10 + (i % 20)} February 2025`,
  comments: [
    {
      id: 1,
      author: `Commenter ${(i % 3) + 1}`,
      date: `${12 + (i % 15)} February 2025`,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`
    },
    {
      id: 2,
      author: `Commenter ${(i % 3) + 2}`,
      date: `${13 + (i % 10)} February 2025`,
      content: `Ut enim ad minim veniam, quis nostrud exercitation.`
    }
  ]
}));

const Home = ({ onAuthorClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 1; // Show one post per page
  const totalPages = Math.ceil(dummyPosts.length / postsPerPage);
  
  const getCurrentPost = () => {
    const startIndex = (currentPage - 1) * postsPerPage;
    return dummyPosts[startIndex];
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Blog Posts</h1>
          <p className="text-gray-600">Discover amazing content from our writers</p>
        </header>
        
        <Post 
          post={getCurrentPost()} 
          onAuthorClick={onAuthorClick}
        />
        
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Home;