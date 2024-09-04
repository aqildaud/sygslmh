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
    <main className="text-white mt-3">
      <h2>{posts[0].title}</h2>
      <p className="text-warning">{posts[0].createdAt}</p>
      <p ref={contentRef} className="mt-5"></p>
    </main>
  );
}

export default Article;
