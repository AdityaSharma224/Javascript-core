import {useRef} from "react"; // useRef to persist previous dependencies and computed value across renders.

function useMyMemo(fn,dependency){

    // store the memoized result and previous dependencies in a ref
    const ref = useRef({result:null,dependency:[]});

    // Check if any dependency has changed
    if(!ref.current.dependency || 
        ref.current.dependency.length !== dependency.length ||
       !ref.current.dependency.every((val,i)=>val===dependency[i]) // Check if any dependency has changed by comparing each value
    ){
        
        ref.current.result = fn();
        ref.current.dependency = dependency;
    }
    return ref.current.result;
}