import React, { useState, useEffect } from 'react';

function LazyLoadComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check the scroll position and trigger loading
    const handleScroll = () => {
      const scrollHeight = window.scrollY + window.innerHeight;
      if (scrollHeight >= document.documentElement.scrollHeight - 100) {
        // When the scroll reaches near the bottom, load the component
        setIsVisible(true);
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Lazy Loading Without Suspense</h1>
      <div style={{ height: '1500px' }}>
        {/* Simulating a long page to scroll */}
        Scroll down to load the component
      </div>

      {/* Conditionally load the component based on visibility */}
      {isVisible && <LazyLoadedContent />}
    </div>
  );
}

// The lazily loaded component
const LazyLoadedContent = () => {
  return (
    <div>
      <h2>This content was loaded lazily when you scrolled!</h2>
    </div>
  );
};

export default LazyLoadComponent;
