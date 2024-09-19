// import { HashRouter, Routes, Route } from "react-router-dom";
// import Article from "./Article";
import { posts } from "../data/posts";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      <main className="pt-3 js-blog">
        <h3>Blog Posts</h3>
        <div className="mt-3">
        <p className="fst-italic m-0">{posts[0].createdAt}</p>
          <Link to="/Article">
            <h6 style={{color: "#ffb5b5"}} className="m-0">
              On Relationship At Workplace
            </h6>
          </Link>
        </div>
        {/* {renderHTML()} */}
        {/* <p className="text-white">Soon to be updated</p> */}
      </main>
    </div>
  );
}

export default Blog;
