import React, { useState, useEffect, useRef, useCallback } from 'react';

const Snackbar = () => {
  const [snacks, setSnacks] = useState([]);
  const [pausedIds, setPausedIds] = useState(new Set());
  const idCounter = useRef(0);

  const addSnack = useCallback((message, type = 'info', duration = 4000) => {
    const id = idCounter.current++;
    setSnacks(prev => [...prev, { id, message, type, duration }]);
  }, []);

  const removeSnack = useCallback(id => {
    setSnacks(prev => prev.filter(s => s.id !== id));
    setPausedIds(prev => {
      const copy = new Set(prev);
      copy.delete(id);
      return copy;
    });
  }, []);

  const handleMouseEnter = useCallback(id => {
    setPausedIds(prev => new Set(prev).add(id));
  }, []);

  const handleMouseLeave = useCallback(id => {
    setPausedIds(prev => {
      const copy = new Set(prev);
      copy.delete(id);
      return copy;
    });
  }, []);

  return (
    <div style={{ minHeight: '100vh', padding: 32, background: '#f9fafb' }}>
      <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>Snackbar Demo</h1>
      <div style={{ display: 'flex', gap: 12 }}>
        <button onClick={() => addSnack('Success!', 'success')}>Success</button>
        <button onClick={() => addSnack('Error occurred', 'error')}>Error</button>
        <button onClick={() => addSnack('Warning issued', 'warning')}>Warning</button>
        <button onClick={() => addSnack('Info update', 'info')}>Info</button>
      </div>

      <SnackbarContainer
        snacks={snacks}
        pausedIds={pausedIds}
        onRemove={removeSnack}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
};

const SnackbarContainer = ({ snacks, pausedIds, onRemove, onMouseEnter, onMouseLeave }) => (
  <div
    style={{
      position: 'fixed',
      bottom: 16,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      flexDirection: 'column-reverse',
      gap: 12,
      zIndex: 1000,
      pointerEvents: 'none',
    }}
  >
    {snacks.map(snack => (
      <SnackbarItem
        key={snack.id}
        snack={snack}
        isPaused={pausedIds.has(snack.id)}
        onRemove={onRemove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    ))}
  </div>
);

const SnackbarItem = ({ snack, onRemove, isPaused, onMouseEnter, onMouseLeave }) => {
  const [progress, setProgress] = useState(100);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef();
  const progressRef = useRef();

  // Handle mount animation
  useEffect(() => setIsVisible(true), []);

  // Simplified timer + progress handling
  useEffect(() => {
    if (isPaused) {
      clearInterval(timerRef.current);
      clearInterval(progressRef.current);
      return;
    }

    const start = Date.now();
    const duration = snack.duration;

    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.max(0, 100 - (elapsed / duration) * 100));
    }, 100);

    timerRef.current = setTimeout(() => {
      handleClose();
    }, duration);

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(progressRef.current);
    };
  }, [isPaused, snack.duration]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => onRemove(snack.id), 300);
  }, [onRemove, snack.id]);

  const { bg, border } = getColors(snack.type);

  return (
    <div
      style={{
        pointerEvents: 'auto',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => onMouseEnter(snack.id)}
      onMouseLeave={() => onMouseLeave(snack.id)}
    >
      <div
        onClick={handleClose}
        style={{
          backgroundColor: bg,
          borderLeft: `4px solid ${border}`,
          color: 'white',
          padding: '12px 16px',
          borderRadius: 8,
          minWidth: 280,
          boxShadow:
            '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        <div style={{ fontWeight: 500 }}>{snack.message}</div>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 4,
            background: 'rgba(255,255,255,0.4)',
            width: `${progress}%`,
            transition: 'width 0.1s linear',
          }}
        />
      </div>
    </div>
  );
};

const getColors = type => {
  switch (type) {
    case 'success':
      return { bg: '#16a34a', border: '#15803d' };
    case 'error':
      return { bg: '#dc2626', border: '#b91c1c' };
    case 'warning':
      return { bg: '#ca8a04', border: '#a16207' };
    case 'info':
    default:
      return { bg: '#2563eb', border: '#1d4ed8' };
  }
};

export default Snackbar;
