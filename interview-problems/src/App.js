import React, { useState, useEffect, useCallback } from 'react';
import DebounceCounter from './components/debounce-counter';
import ThrottleCounter from './components/throttle-counter';
import DebounceInput from './components/debounce-input';
import ThrottleResizeExample from './components/throttle-resize';
import ToDoList from './components/todo-list';
import Accordion from './components/accordion';
import Carousel from './components/carousel';

function App() {
  
  return (
    <div style={{ display:'flex',height:'100vh',alignItems:'center',justifyContent:'center' }}>
      <Carousel/>
    </div>
  );
}

export default App;
