// import { HashRouter, Routes, Route } from "react-router-dom";
// import Article from "./Article";
import { posts } from "../data/posts";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <main className="pt-3 js-blog text-white">
        <h3>Blog Posts</h3>
        <div className="mt-3">
          <Link to="/Article">
            <h6 className="text-warning text-decoration-none">
              On Relationship At Workplace
            </h6>
          </Link>
          <p className="text-white fst-italic mb-0">{posts[0].createdAt}</p>
          <p className="m-0 fst-italic" style={{color: "#C2C2C2", fontSize: 11}}>my first attempt to write something in a long time</p>
        </div>
        {/* {renderHTML()} */}
        {/* <p className="text-white">Soon to be updated</p> */}
      </main>
    </div>
  );
}

export default Blog;
