import React, { useState } from "react";

function ChangeCaseType() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="ChangeCaseType">
      {'Type here'} <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
        <div><span style={{ fontWeight: 600 }}>{'Upper case --'}</span> {inputValue.toUpperCase()}</div>
        <div><span style={{ fontWeight: 600 }}>{'Lower case --'}</span> {inputValue.toLowerCase()}</div>
        <div><span style={{ fontWeight: 600 }}>{'Camel case --'}</span> {inputValue.toLowerCase().replace(/([-_]\w)/g, match => match[1].toUpperCase())}</div>
        <div><span style={{ fontWeight: 600 }}>{'Pascal case --'}</span> {inputValue.toLowerCase().replace(/(^\w|[-_ ]\w)/g, match => match.toUpperCase()).replace(/[-_ ]/g, '')}</div>
        <div><span style={{ fontWeight: 600 }}>{'Snake case --'}</span> {inputValue.toLowerCase().replace(/ /g, '_')}</div>
      </div>
    </div>
  );
}

export default ChangeCaseType;
