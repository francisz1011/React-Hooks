import React from 'react'
import Button from '../Button';
import { useRef } from 'react';

const ImperativeHandle = () => {
  const ButtonRef = useRef(null);

  return (
    <div>
       <button onClick={() => {
        ButtonRef.current.alterToggle();
       }}> Button from Parent </button>
       
       <Button ref={ButtonRef}/>
    </div>
  )
}

export default ImperativeHandle;