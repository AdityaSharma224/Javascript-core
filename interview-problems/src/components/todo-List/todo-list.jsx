import React, {useState} from "react";


const ToDoList=()=>{

    const [input,setInput] = useState('');
    const [list, setList] = useState([]);

    const handleInputChange = (e)=>{
        setInput(e.target.value);
    }

    const handleAddItem = ()=>{
        if(input.trim()==='')return;
        const item = {
            id:list.length+1,
            text:input,
            completed:false,
        }
        setList((prev)=>[...prev,item])
        setInput('');
    };

    const handleDeleteItem = (id)=>{
        setList(list.filter(t=>t.id!==id))
    }

    const toogleCompleted = (id)=>{
        setList(
            list.map(t=>{
                if(t.id === id){
                    return {
                        ...t,
                        completed: !t.completed,
                    }
                }else{
                    return t;
                }
            })
        )
    }

    return(
        <div style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100vw',height:'100vh'}}>
        <div>
            <input
            value={input}
            onChange={handleInputChange}
            />
            <button onClick={handleAddItem}>{'Add'}</button>
        </div>
        <div>
            <ul>
                {list.map(t=><li key={t.id}>
                    <input type="checkbox" checked={t.completed} onChange={()=>toogleCompleted(t.id)}/>
                    <span 
                    style={{
                        textDecoration: t.completed ? "line-through" : ""
                    }}>
                        {t.text}
                    </span>
                    <button onClick={()=>handleDeleteItem(t.id)}>{'Delete'}</button>
                </li>)}
            </ul>
        </div>
        </div>
    );
}

export default ToDoList;