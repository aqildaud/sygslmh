import { Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="container-fluid d-flex justify-content-start ps-0">
            <div>
              <Link className="p-2 ps-0" to="/">
                Home
              </Link>
              <Link className="p-2" to="/Blog">
                Blog
              </Link>
              <Link className="p-2" to="/Music">
                Music Talk
              </Link>
              {/* <Link className="p-2" to="/Update">
                Updates
              </Link>
              <Link className="p-2" to="/About">
                About
              </Link>
              <Link className="p-2" to="/Music">
                Music Recommendation
              </Link> */}
              {/* <Link className="p-2" to="/ArticleEditor">
                Add Blog
              </Link> */}
            </div>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default Navbar;
