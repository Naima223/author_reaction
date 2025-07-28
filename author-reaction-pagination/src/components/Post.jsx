// src/components/Post.jsx
import React from 'react';
import Reactions from './Reactions';

// Comment Component
const Comment = ({ comment }) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-sm font-semibold">
            {comment.author.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <span className="font-semibold text-sm">{comment.author}</span>
          <span className="text-gray-500 text-xs ml-2">{comment.date}</span>
        </div>
      </div>
      <p className="text-gray-700 text-sm mb-3">{comment.content}</p>
      <div className="flex gap-2">
        <button className="text-xs text-gray-500 hover:text-blue-600">Like</button>
        <button className="text-xs text-gray-500 hover:text-blue-600">Dislike</button>
        <button className="text-xs text-gray-500 hover:text-blue-600">Reply</button>
      </div>
      <Reactions postId={`comment-${comment.id}`} type="comment" />
    </div>
  );
};

const Post = ({ post, onAuthorClick }) => {
  return (
    <article className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h1>
      
      <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
        <span>By</span>
        <button 
          onClick={() => onAuthorClick(post.authorId)}
          className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
        >
          {post.authorName}
        </button>
        <span>•</span>
        <span>{post.date}</span>
      </div>
      
      <div className="prose max-w-none mb-6">
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>
      
      <Reactions postId={post.id} />
      
      <div className="mt-8 border-t pt-6">
        <h3 className="text-lg font-semibold mb-4">{post.comments.length} Comments</h3>
        
        <div className="mb-6">
          <textarea
            placeholder="Write your comment..."
            className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="3"
          />
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Post Comment
          </button>
        </div>
        
        <div className="space-y-4">
          {post.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </article>
  );
};

export default Post;