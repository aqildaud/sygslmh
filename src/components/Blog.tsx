function Blog() {
  return (
    <div>
      <main className="pt-3 js-blog text-white">
        {renderHTML()}
        {/* <p className="text-white">Soon to be updated</p> */}
      </main>
    </div>
  );
}

function renderHTML() {
  return (
    <>
      <h2>
        On Relationship At Workplace
        <br />
        (Not That Kind)
      </h2>
      <p>
        Since I started working in July 2023, I feel like I've been doing pretty
        well as a fresher. One thing that's helped is making sure I'm
        comfortable enough to chat with people. Honestly, I think that's been a
        big reason for my success so far.
      </p>
      <p>
        Now, I'd consider myself an introvert, but I still try my best to
        connect with my colleagues. Building relationships doesn't have to be
        complicated. It's not about becoming friends; it can be as simple as
        asking, "How was the game last night?" or "Do you know a good café
        around here?" Or even recommending something like, "You should
        definitely watch Summit of the Gods—it's amazing!" (Seriously, it is.)
      </p>
      <p>
        Those small, casual interactions, like when you bump into someone in the
        pantry for a quick coffee break, can make a big difference. When you've
        already built a little bond, it's easier to communicate when it really
        matters.
      </p>
      <p>
        On the flip side, I've noticed that with colleagues I don't interact
        with much, work can feel a bit more challenging and awkward. It could be
        me, it could be them—but either way, things probably would've been
        smoother if we'd had a few casual chats beforehand.
      </p>
      <p>
        Try to build those small connections with the people you work with.
        You'll find that it makes everything run a lot smoother in the long run.
      </p>
    </>
  );
}

export default Blog;
