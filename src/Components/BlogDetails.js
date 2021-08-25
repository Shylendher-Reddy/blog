import { useHistory, useParams } from "react-router-dom";
import useFetch from "../CustomHook/usefetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:8080/blogs/" + id);

  const history = useHistory();

  const handleDelete = () => {
    fetch("http://localhost:8080/blogs/" + id , {
      method: "DELETE"
    }).then(() => {
      history.push('/')
    })
  }

  return (
    <div className="blog-details">
      {error && <div className="loading">{error}</div>}
      {isLoading && <div className="loading">Loading . . . </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete blog</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
