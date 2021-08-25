import useFetch from "../CustomHook/usefetch";
import BlogBlock from "./BlogBlock";

const HomePage = () => {

  const { data: blogs , isLoading , error } = useFetch("http://localhost:8080/blogs");

  return (
    <div className="home">
      {error && <div className="loading">{error}</div>}
      {isLoading && <div className="loading">Loading . . . </div>}
      {blogs && <BlogBlock blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default HomePage;