'use client'
import React, { useState, useEffect } from 'react';

const Bookmarks = () => {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  useEffect(() => {
    try {
      const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
      setBookmarkedItems(storedBookmarks);
    } catch (error) {
      console.error("Failed to fetch bookmarks:", error);
      setBookmarkedItems([]);
    }
  }, []);

  const addBookmark = (newBookmark) => {
    const updatedBookmarks = [...bookmarkedItems, newBookmark];
    setBookmarkedItems(updatedBookmarks);
    localStorage.setItem('bookmarkedItems', JSON.stringify(updatedBookmarks)); 
  };

  // Function to clear bookmarks
  const clearBookmarks = () => {
    setBookmarkedItems([]); 
    localStorage.removeItem('bookmarkedItems'); 
  };

  return (
    <div className="min-h-screen bg-[#f8f9f5] px-4 py-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-4xl font-bold text-green-800">Bookmarked Schemes</h1>
        <button onClick={clearBookmarks} className="mb-4 bg-red-500 text-white px-4 py-2 rounded">
          Clear 
        </button>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bookmarkedItems.length > 0 ? (
            bookmarkedItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
                <h3 className="mb-1 text-xl font-bold text-gray-900">{item.name}</h3>
                <p className="mb-4 text-gray-600">{item.description}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-green-600">Learn More →</a>
              </div>
            ))
          ) : (
            <p>No bookmarked schemes found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;