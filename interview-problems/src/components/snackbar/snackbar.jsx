import React, { useState, useEffect, useCallback, useRef } from 'react';

const Snackbar = () => {
  const [snacks, setSnacks] = useState([]);
  const [pausedIds, setPausedIds] = useState(new Set());
  const idCounter = useRef(0);

  const addSnack = useCallback((message, type = 'info', duration = 4000) => {
    const id = idCounter.current++;
    const newSnack = { id, message, type, duration, timestamp: Date.now() };
    
    setSnacks(prev => [...prev, newSnack]);
  }, []);

  const removeSnack = useCallback((id) => {
    setSnacks(prev => prev.filter(snack => snack.id !== id));
    setPausedIds(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  }, []);

  const handleMouseEnter = useCallback((id) => {
    setPausedIds(prev => new Set(prev).add(id));
  }, []);

  const handleMouseLeave = useCallback((id) => {
    setPausedIds(prev => {
      const newSet = new Set(prev);
      newSet.delete(id);
      return newSet;
    });
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '32px' }}>
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1f2937', marginBottom: '32px' }}>
          Snackbar Component
        </h1>
        
        <div style={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#374151' }}>
            Test Controls
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <button
              onClick={() => addSnack('This is a success message!', 'success')}
              style={{ padding: '8px 16px', backgroundColor: '#22c55e', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#16a34a'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#22c55e'}
            >
              Success
            </button>
            <button
              onClick={() => addSnack('This is an error message!', 'error')}
              style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#dc2626'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#ef4444'}
            >
              Error
            </button>
            <button
              onClick={() => addSnack('This is a warning message!', 'warning')}
              style={{ padding: '8px 16px', backgroundColor: '#eab308', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#ca8a04'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#eab308'}
            >
              Warning
            </button>
            <button
              onClick={() => addSnack('This is an info message!', 'info')}
              style={{ padding: '8px 16px', backgroundColor: '#3b82f6', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
            >
              Info
            </button>
            <button
              onClick={() => addSnack('This snackbar stays for 8 seconds', 'info', 8000)}
              style={{ padding: '8px 16px', backgroundColor: '#a855f7', color: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer', transition: 'background-color 0.2s' }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#9333ea'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#a855f7'}
            >
              Long Duration
            </button>
          </div>
        </div>
      </div>

      <SnackbarContainer 
        snacks={snacks} 
        onRemove={removeSnack}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        pausedIds={pausedIds}
      />
    </div>
  );
};

const SnackbarContainer = ({ snacks, onRemove, onMouseEnter, onMouseLeave, pausedIds }) => {
  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '16px', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      zIndex: 50, 
      display: 'flex', 
      flexDirection: 'column-reverse', 
      gap: '12px', 
      pointerEvents: 'none' 
    }}>
      {snacks.map(snack => (
        <SnackbarItem
          key={snack.id}
          snack={snack}
          onRemove={onRemove}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          isPaused={pausedIds.has(snack.id)}
        />
      ))}
    </div>
  );
};

const SnackbarItem = ({ snack, onRemove, onMouseEnter, onMouseLeave, isPaused }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(100);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);
  const remainingTimeRef = useRef(snack.duration);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        const elapsed = Date.now() - startTimeRef.current;
        remainingTimeRef.current = Math.max(0, remainingTimeRef.current - elapsed);
      }
      return;
    }

    startTimeRef.current = Date.now();
    const startProgress = (remainingTimeRef.current / snack.duration) * 100;
    setProgress(startProgress);

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const remaining = Math.max(0, remainingTimeRef.current - elapsed);
      setProgress((remaining / snack.duration) * 100);
    }, 16);

    timerRef.current = setTimeout(() => {
      handleClose();
    }, remainingTimeRef.current);

    return () => {
      clearTimeout(timerRef.current);
      clearInterval(progressInterval);
    };
  }, [isPaused, snack.duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onRemove(snack.id), 300);
  };

  const getColors = () => {
    switch (snack.type) {
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

  const colors = getColors();

  return (
    <div
      style={{
        pointerEvents: 'auto',
        transition: 'all 0.3s ease',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(8px)'
      }}
      onMouseEnter={() => onMouseEnter(snack.id)}
      onMouseLeave={() => onMouseLeave(snack.id)}
      role="alert"
      aria-live="polite"
    >
      <div
        style={{
          backgroundColor: colors.bg,
          color: 'white',
          padding: '12px 16px',
          borderRadius: '8px',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          cursor: 'pointer',
          minWidth: '300px',
          maxWidth: '500px',
          borderLeft: `4px solid ${colors.border}`,
          position: 'relative',
          overflow: 'hidden'
        }}
        onClick={handleClose}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ flex: 1, fontWeight: '500' }}>{snack.message}</div>
          <button
            style={{
              flexShrink: 0,
              background: 'transparent',
              border: 'none',
              borderRadius: '4px',
              padding: '4px',
              cursor: 'pointer',
              color: 'white',
              transition: 'background-color 0.2s'
            }}
            onClick={handleClose}
            aria-label="Close notification"
          >
            <svg style={{ width: '16px', height: '16px' }} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div 
          style={{ 
            position: 'absolute', 
            bottom: 0, 
            left: 0, 
            height: '4px', 
            backgroundColor: 'rgba(255, 255, 255, 0.3)', 
            transition: 'width 0.1s linear',
            width: `${progress}%` 
          }} 
        />
      </div>
    </div>
  );
};

export default Snackbar;