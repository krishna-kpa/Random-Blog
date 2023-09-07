import { useEffect, useState } from "react"
const useFetch = (link)=>{
    
    const [blogs,setBlogs]=useState(null);
    const [isPending,setIsPending]=useState(true);
    const [error,setError]=useState(null)
    
    useEffect(()=>{
        const abortContr = new AbortController();
        setTimeout(()=>{
            
            fetch(link,{signal:abortContr.signal})
            .then(response=>{
                if (!response.ok){
                    throw Error("Could not get the data")
                }
                return response.json()
            })
            .then(data=>{
                setBlogs(data)
                setIsPending(false)
                setError(null)
            })
            .catch(e=>{
                if(e.name==='AbortError'){
                    console.log("Fetch Abort")
                }else{
                setIsPending(false)
                setError(e)
                }
            })},1000
            )
        return ()=>abortContr.abort()
    },[link])
    return {blogs,isPending,error}
}

export default useFetch