import React, { useEffect, useState } from 'react';

function ThrottleResizeExample() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  const throttle = (func, limit) => {
    let inThrottle;
    return (...args) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  useEffect(() => {
    const handleResize = throttle(() => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }, 500);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h3>Throttled Window Resize</h3>
      <p>
        <strong>Width:</strong> {size.width}
      </p>
      <p>
        <strong>Height:</strong> {size.height}
      </p>
      <p>Resize the window and observe that updates happen every 500ms.</p>
    </div>
  );
}

export default ThrottleResizeExample;
