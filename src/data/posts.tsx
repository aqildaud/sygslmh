interface Post {
  title: string,
  content: string,
  createdAt: string
}
export let posts: Post[] = [];

let obj = {
  title: "On Relationship At Workplace",
  content: `
      <p>Since I started working in July 2023, I feel like I've been doing pretty well as a fresher. One thing that's helped is making sure I'm comfortable enough to chat with people.</p>
  
    <p>You often see posts on social media saying you don't need to bond with your coworkers—just show up, do your job, and leave when the day is done. I disagree with that. Unless you're exceptionally good at your work, everyone needs a little help now and then, especially as a fresher. And that help tends to come more easily when you've established some sort of connection with your colleagues.</p>
  
    <p>Building relationships with colleagues doesn't have to be complicated. It's not about becoming friends; it can be as simple as asking, "How was the game last night?" or "Do you know a good café around here?" Or even recommending something like, "You should definitely watch Summit of the Gods—it's amazing!" (Seriously, it is.)</p>
  
     <p>Those small, casual interactions, like when you bump into someone in the pantry for a quick coffee break, can make a big difference. When you've already built a little bond, it's easier to communicate when it really matters. Plus, having discussions with someone you're comfortable with is a lot less stressful.</p>
  
    <p>On the flip side, I've noticed that with colleagues I don't interact with much, work can feel a bit more challenging and awkward. It could be me, it could be them—but either way, things probably would've been smoother if we'd had a few casual chats beforehand.</p>

    <p>
      Try to build those small connections with the people you work with. You'll find that it makes everything run a lot smoother in the long run.
    </p>
  `,
  createdAt: "Sep 02, 2024",
};

posts.push(obj);

