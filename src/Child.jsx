import React from 'react'
import { useEffect } from 'react'


const Child = ({returnComment}) => {

    useEffect(() => {
        console.log("FUNCTION WAS CALLED");
    },[returnComment])

  return (
    <div>
    {returnComment("Francis")}
    </div>
  )
}

export default Child