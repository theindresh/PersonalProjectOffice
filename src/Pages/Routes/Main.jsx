import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "../Pages/Navbar";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import NoPage from "../Pages/NoPage";
import Popup from '../task/Popup';
import Counter1 from "../task/Counter1";
import Card from "../Pages/Card";
import Todolist from '../vikshsir/Todolist';
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";
import SetComponent from "../Nehamam/SetComponent";
function Main() {
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
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Main;
