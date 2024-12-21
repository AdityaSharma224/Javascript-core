import React, { useState, useEffect, useCallback } from 'react';
import DebounceExample from './components/debounce';

function App() {
  
  return (
    <div style={{ display:'flex',height:'100vh',alignItems:'center',justifyContent:'center' }}>
     <DebounceExample/>
    </div>
  );
}

export default App;
