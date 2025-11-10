import React, {useState, useMemo, useCallback} from "react";


const Chip = ()=>{

    const [inputText, setInputText] = useState('');
    const [chips, setChips] = useState([]);

    const handleDownKey = (e)=>{
        if(e.key === 'Enter' && inputText.trim() !== ''){
            setChips(prev=>[...prev,inputText.trim()])
            setInputText('');
        }
    }


    const handleDeleteChip = (index)=>{
      setChips(prev => prev.filter((_,i)=>i!==index));
    }

    return (
        <div>
            <input
              type="text"
              placeholder='Type a chip and press tag'
              style={{padding:'8px',width:'200px'}}
              value={inputText}
              onChange={(e)=>setInputText(e.target.value)}
              onKeyPress={(e)=>handleDownKey(e)}
            />
            <div style={{display:'flex', flexWrap:'wrap', gap:'10px'}}>
                {chips.map((chip,index)=>
                <div key={index} style={{maxWidth:'150px',background:'grey', margin:'10px', padding:'5px', borderRadius:'12px',display:'flex', justifyContent:'space-between'}}>
                    <span title="chip" style={{overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis'}}>{chip}</span>
                    <button style={{color:'red'}} onClick={()=>handleDeleteChip(index)}>{'X'}</button>
                </div>
                )}
            </div>
        </div>
    );
}

export default Chip;