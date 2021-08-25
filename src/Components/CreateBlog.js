import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {

    const [ title , setTitle ] = useState('');
    const [ body , setBody ] = useState('');
    const [ author , setAuthor ] = useState('Elon');
    const [ isLoading , setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        const blog = { title , body , author }
        fetch("http://localhost:8080/blogs" , {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsLoading(false);
            history.push('/')
        })
    }

    return ( 
    <div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Title:</label>
            <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Body:</label>
            <textarea required value={body} onChange = {(e) => setBody(e.target.value)}></textarea>
            <label>Author:</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                <option value="Elon">Elon</option>
                <option value="Musk">Musk</option>
                <option value="Elon Musk">Elon Musk</option>
            </select>
            { !isLoading && <button>Add blog</button>}
            { isLoading && <button disabled>Please wait...</button> }
        </form>
    </div> 
    );
}
 
export default CreateBlog;