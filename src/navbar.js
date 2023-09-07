import {Link} from "react-router-dom";
const navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Random Blog</h1>
            <Link to="/">Home</Link>
            <Link to="/create" style={{
                color:"white",
                backgroundColor:"#f1356d",
                borderRadius:"8px"
            }}>New Blog</Link>
        </nav>
     );
}
 
export default navbar;