import React,{useReducer} from 'react';

const initialState=0;
const reducer=(state,action)=>{
       switch(action){
        case "add":
            return state+1;
            case "sub":
                return state-1;
                case "reset":
                    return state=0;
                    default:
                        throw new error("Unexpected action");
       }
}

const Usereducerhook =()=>{
    const[count,dispatch]=useReducer(reducer,initialState);

    return(
        <div>
           <p>{count}</p>
           <button onClick={()=>dispatch("add")}>
            Add
            </button >
           <button onClick={()=>dispatch("sub")}>
            Subtract
            </button  >
           <button onClick={()=>dispatch("reset")}>
            Reset
            </button>
        </div>
    )
}

export default Usereducerhook;