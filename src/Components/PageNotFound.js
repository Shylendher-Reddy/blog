import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
    <div>
        <h2>Error..!! Page not found</h2>
        <Link to='/'>Go to Home</Link>
    </div> 
    );
}
 
export default PageNotFound;