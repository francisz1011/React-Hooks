import React from 'react'
import { useReducer } from 'react'



const reducer = (state, action) => {
  switch(action.type){
   case "INCREMENT": 
   return{  count : state.count + 1, showText: state.showText};
   case "toggleShowButton":
    return { count: state.count, showText: !state.showText};

  }
  }


const Reducer = () => { //Reducer here not a key word

  const [state, dispatch] = useReducer(reducer, {count:0, showText: true})
  return (

    <div>
       <h1>{state.count}</h1>
      <button onClick={ () => {
        dispatch({ type: "INCREMENT"});
        dispatch ({type : "toggleShowButton" })
 }}> 
       Click Here
      </button>

      {state.showText && <p> This is Text </p>}
    </div>
  )
    
  
}

export default Reducer;  