import Blogs from "./blogs";
import useFetch from "./useFetch";
const Home = ()=>{
    const {blogs,isPending,error}=useFetch("http://localhost:8000/blogs");
    return (
        <div className="home">
            {isPending && <div>Loading...</div>}   
            {error && <div>{error.message}</div>}
            {blogs && <Blogs blogs={blogs} title="All Blogs !"/>}
        </div> 
    );
}
export default Home;