import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
<div className="container-fluid ">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Indresh Bharati</Link>
       
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/popup">Popup</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/count">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/card">Card</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todo">Todolist</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usecontext">Context Api</Link>
              </li>
              <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Rahul Sir
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/feachuseEffect">UseEffect</Link></li>
                    <li><Link className="dropdown-item" to="/feachuseState">UseState</Link></li>
                    <li><Link className="dropdown-item" to="/feachuseCallback">UseCallback</Link></li>
                    <li><Link className="dropdown-item" to="/feachuseReducer">Task1 UseReducer</Link></li>
                    <li><Link className="dropdown-item" to="/feachuseMemo">Task1 UseMemo</Link></li>
                  </ul>
                </li>
            </ul>
          </div>
        </div>

        <div className="d-flex mx-5 gap-3">
            <Link to="/Login">
            <button className="btn btn-primary mr-2" >Login</button>
            </Link>
            <Link to="/signup">

            <button className="btn btn-success">Signup</button>
            </Link>
        </div>
      </nav>
      </div>

      <Outlet />
    </>
  )
};

export default Navbar;
