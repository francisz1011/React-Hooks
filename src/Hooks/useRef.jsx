import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';




const Ref = () => {

    const [value, setValue] = useState("");

    const inputRef = useRef(null);

    const onClick = () => {
        setValue(inputRef.current.value)
        inputRef.current.value = ""
    }

  return (
    <div>
        
        < h1>{value}</h1>
<input type="text" placeholder ="Ex.." ref={inputRef}/>
  <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default Ref;