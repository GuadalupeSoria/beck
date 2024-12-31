import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blog';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button 
                  onClick={() => navigate(`/blog/${post.id}`)}
                  className="text-black font-medium hover:underline"
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;