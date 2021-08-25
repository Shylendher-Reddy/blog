import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./Components/CreateBlog";
import BlogDetails from "./Components/BlogDetails";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
         <Switch>
           <Route exact path= '/'><HomePage /></Route>
           <Route path = '/create'><CreateBlog /></Route>
           <Route path='/blogs/:id'><BlogDetails /></Route>
           <Route path="*"><PageNotFound /></Route>
         </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;