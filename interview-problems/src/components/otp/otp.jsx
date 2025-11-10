import React, {useState, useRef, useEffect} from "react";

const OtpFiller = ()=>{

    const [inputArr, setInputArr] = useState(new Array(4).fill(""));

    const refArr = useRef([]);

   

    useEffect(()=>{
        refArr.current[0]?.focus();
    },[]);

     const handleOnChange = (value, index)=>{
        if(isNaN(value)) return;
        const newValue = value.trim();
        const newArr = [...inputArr];
        newArr[index] = newValue.slice(-1);
        setInputArr(newArr);
        newValue && refArr.current[index+1]?.focus();
    }

    const handleOnKeyDown = (e, index)=>{
        if(!e.target.value && e.key === 'Backspace'){
            refArr.current[index-1]?.focus();
        };
    };


    return(
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', height:'100vh'}}>
           {
            inputArr.map((input, index)=>{
                return (
                    <input
                        type="text"
                        value={inputArr[index]}
                        ref={(input) => (refArr.current[index] = input)}
                        style={{
                            height:'60px',
                            width:'60px',
                            marginRight:'8px',
                            fontSize:'28px',
                            textAlign:'center'
                        }}
                        onChange={(e)=>handleOnChange(e.target.value, index)}
                        onKeyDown={(e)=>handleOnKeyDown(e, index)}
                    />
                )
            })
           }
        </div>
    );
};

export default OtpFiller;