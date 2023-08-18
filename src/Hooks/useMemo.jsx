import React from 'react'
import axios from 'axios';
import { useState, useEffect, useMemo } from 'react';

const Memo = () => {
    const [data, setData] = useState (null);
    const [toggle, setToggle] = useState(false);


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) =>{
            setData(response.data)
        })
    },[])

    const findLongestName = (comments) => {
        if(!comments) return null;

        let longestName = "";
        for( let i = 0; i < comments.length; i++){
           let currentName = comments[i].name;
            if(currentName.length > longestName.length){
                longestName = currentName
            }
        }

        console.log("THIS WAS COMPUTED");

        return longestName;
    };

    const getLongestName = useMemo(() => findLongestName(data), []);

  return (
    <div>
        {getLongestName}

<button onClick={() => {
    setToggle(!toggle);
}} > Toggle</button>

{toggle && <h2>toggle</h2>}

    </div>

    
  )
}

export default Memo;