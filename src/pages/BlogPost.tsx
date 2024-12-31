import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import Button from '../components/ui/Button';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return (
      <div className="py-12 px-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
      </div>
    );
  }

  return (
    <div className="py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-6">{post.date}</p>
        <div className="prose max-w-none">
          {post.content}
        </div>
        
        <div className="mt-12 pt-8 border-t">
          <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;