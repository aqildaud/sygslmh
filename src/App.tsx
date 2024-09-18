import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Blog from "./components/Blog";
// import Update from "./components/Update";
// import About from "./components/About";
// import Music from "./components/Music";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
// import ArticleEditor from "./components/ArticleEditor";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="Blog" element={<Blog />} />
          {/* <Route path="Update" element={<Update />} />
          <Route path="About" element={<About />} /> */}
          {/* <Route path="Music" element={<Music />} /> */}
          <Route path="Article" element={<Article />} />
          {/* <Route path="ArticleEditor" element={<ArticleEditor />} /> */}
        </Route>
      </Routes>
    </HashRouter>
  );
}
