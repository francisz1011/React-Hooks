import React, { useLayoutEffect, useEffect, useRef } from 'react'

const LayoutEffect = () => {

    const inputRef = useRef(null);

useEffect(() => {
     inputRef.current.value = "Pedro";
},[])

useLayoutEffect(()=> {
    console.log(inputRef.current.value);
},[]);

  return (
    <div>
        <input ref={inputRef} value="Francis" style={{ width: 400, height: 50}}/>
    </div>
  )
}

export default LayoutEffect