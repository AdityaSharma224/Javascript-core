import React, { useState, useEffect, useCallback } from 'react';
import DebounceCounter from './components/debounce-counter';
import ThrottleCounter from './components/throttle-counter';

function App() {
  
  return (
    <div style={{ display:'flex',height:'100vh',alignItems:'center',justifyContent:'center' }}>
     <ThrottleCounter/>
    </div>
  );
}

export default App;
