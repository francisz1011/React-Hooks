import axios from 'axios'
import { useEffect, useState } from 'react'



const Effect = () => {

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=> {
             setData((response.data[0].email))
             console.log("API WAS CALLED ");
        });
    },[count]);

    return(
        <div>
            Effect Bitch. {data}
            {count}
            <button onClick={()=> {
                setCount(count+1)
            }}> Click Me </button>
        </div>
    )
}

export default Effect;