import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../Pages/Home/Navbar";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Home/Blogs";
import Contact from "../Pages/Home/Contact";
import NoPage from "../Pages/Home/NoPage";
import Popup from '../Pages/task/Popup';
import Counter1 from "../Pages/task/Counter1";
import Card from "../Pages/Home/Card";
import Todolist from '../Pages/vikshsir/Todolist';
import Login from "../Pages/Authentication/Login";
import Signup from "../Pages/Authentication/Signup";
import SetComponent from "../Pages/Nehamam/SetComponent";
import Comp1 from "../Pages/Rahulsir/Comp1";
function MainRoute() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="popup" element={<Popup />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/count" element ={<Counter1/>}/>
            <Route path="/card" element ={<Card/>}/>
            <Route path="/todo" element ={<Todolist/>}/>
            <Route path="/login" element ={<Login/>}/>
            <Route path="/signup" element ={<Signup/>}/>
            <Route path="/usecontext" element ={<SetComponent/>}/>
            <Route path="/feach" element ={<Comp1/>}/>

          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainRoute;
