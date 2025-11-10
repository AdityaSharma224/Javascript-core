import {useState, useEffect, useCallback} from 'react';

const AutoCompleteBar = ()=>{

    const [data, setData] = useState([]);
    const [input, setInput] = useState([]);
    const [showResults, setShowResults]=useState(false);

    const fetchData =async()=>{ 
        const data = await fetch("https://dummyjson.com/recipes/search?q="+input);
        const json = await data.json();
        setData(json?.recipes);
    };

    const handleOnChange = (e)=>{
        setInput(e.target.value);
    };

    useEffect(()=>{
        fetchData();
    },[input]);

    return (
        <div>
            <input
              type={"text"}
              value={input}
              onChange={handleOnChange}
              onFocus={()=>setShowResults(true)}
              onBlur={()=>setShowResults(false)}
            />
            {showResults && (
                <div style={{width:'400px',padding:'10px', textAlign:'center', height:'500px', overflowY:'scroll'}}>
                    {data.map((item)=>(
                        <span key={item.id} style={{display:'block', padding:'5px'}}>
                            {item.name}
                        </span>
                    ))}
            </div>
            )}
        </div>
    );
};

export default AutoCompleteBar;