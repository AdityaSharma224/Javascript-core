import React, { useState } from "react";

const Bar = ({progress})=>{
    const barStyle={
        width:`${progress}%`,
        backgroundColor:'green',
    };
    return (
            <div style={barStyle}></div>
    );
}

const ProgressBar=()=>{

const [prog,setProg] = useState(0);
    const containerStyle={
        display:'flex',
        height:'20px',
        border:'1px solid #e6e9ef',
        borderRadius:'12px',
        backgroundColor:'#e7e7e7e',
        overflow:'hidden',
        position:'relative',
        textAlign:'center',
    };

    const handleIncrease = ()=>{
        setProg((prev)=>Math.min(prev+10,100));
    }
    
    return (
        <>
        <div style={containerStyle}>
            <Bar progress={prog}/>
        </div>
        <button onClick={handleIncrease}>{'increase by 10'}</button>
        </>
    );
};

export default ProgressBar;