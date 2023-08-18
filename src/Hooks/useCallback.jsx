import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import Child from '../Child';
import { useCallback } from 'react';

const Callback = () => {
const [ toggle, setToggle] = useState(false);
const [ data, setData] = useState(" HELLO WORLD ");

const returnComment =  useCallback((name) => {
    return data + name;
}, [data])

  return (
    <div>
        <Child returnComment={returnComment}/>

        <button onClick={() => {
            setToggle(!toggle)
        }}> 
            Toggle
        </button>

        {toggle && <h2> toggle</h2>}
    </div>
  )
}

export default Callback;