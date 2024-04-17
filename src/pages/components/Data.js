import { useEffect, useState } from "react"

function Data (){
    
    const [data,setData] = useState(null)
    useEffect(()=>{
        const fetchData = async()=>{
        const res = await fetch(props.data);
        const resData = await res.json()
        setData(resData)
    }
    fetchData();
    // console.log([data].map(e=>e.results))
    },[])
    return(
        <>
       
        </>
    )
}
export default Data