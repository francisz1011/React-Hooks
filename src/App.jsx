import './App.css'
import Counter from './Hooks/useState'
import Effect from './Hooks/useEffect'
import Reducer from './Hooks/useReducer' 
import Ref from './Hooks/useRef'
import LayoutEffect from './Hooks/useLayoutEffect'
import ImperativeHandle from './Hooks/useImperativeHandle'
import Context from './Hooks/useContext'
import Memo from './Hooks/useMemo'
import Callback from './Hooks/useCallBack'


function App() {
 
  return (
    <div className="App"> 

    <h1>REACT HOOKS EXERCISE WITH EXAMPLES...</h1>
    <h2>UNCOMMENT A COMPONENT AT A TIME IN APP.JSX TO TO LEARN ABOUT A SINGLE HOOK... </h2>
 
  {/* Increment , Decrement Button // UseState Hook
<Counter/> */}


     {/* Click me Button // UseReducer Hook */}
             {/* <Reducer/> */}

 {/* Click me Button // UseEffect Hook */}
           {/* <Effect/>     */}

  {/* Change name Button // UseRef Hook  */}
                  {/* <Ref/>   */}

{/* input field with fixed value "Pedro", console.logs  Francis // UseLayoutEffect Hook */}
                   {/* <LayoutEffect/> */}

 {/* Button from Child , Button from Parent, // UseImperativeHandle Hook , (uses Button Component) */}
                    {/* <ImperativeHandle/> */}


{/* Input Field and Username display // UseContext Hook , (uses Login, User , Components) */}
                         {/* <Context/> */}

{/* Text and Toggle Button, console.logs "THIS WAS COMPUTED" // UseMemo Hook */}
                       {/* <Memo/> */}

 {/* Text and a  Toggle Button when clicked console.logs  "FUNCTION WAS CALLED" ,
  if any state is changed, when it should console.log only when returnComment's value is changed
  (useCallback Hook prevents this from happening) // UseCallback Hook */}
                       {/* <Callback/> */}

    </div>
  )
}

export default App
