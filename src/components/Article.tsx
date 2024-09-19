import { useEffect, useRef } from "react";
import { posts } from "../data/posts";

function Article() {
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.innerHTML = posts[0].content.toString();
    }
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main className="mt-3">
      <h2>{posts[0].title}</h2>
      <p>{posts[0].createdAt}</p>
      <p className="m-0 fst-italic" style={{fontSize: 11, color: "#4a4a48"}}>this is my first attempt to write something in a long time</p>
      <p ref={contentRef} className="mt-4"></p>
    </main>
  );
}

export default Article;
