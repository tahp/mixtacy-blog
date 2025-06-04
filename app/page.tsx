import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Neung Khunprachansri
      </h1>
      <p className="mb-4">
        {`I'm a self-taught full-stack developer based in Vancouver, WA with a passion for
        building practical web apps and tinkering with electronics. I enjoy finding creative
        solutions using JavaScript, React, Node.js, and Tailwind CSS. My projects often focus
        on solving everyday problems — whether it’s tracking a budget, diagnosing my vehicle
        with an OBD2 scanner, or salvaging components from old electronics.`}
      </p>
      <p className="mb-4">
        {`I prefer tools that give me control — from Vim keybindings and terminal workflows
        (like using Termux on Android) to building Hackintosh systems just for the challenge.
        I learn by doing and enjoy reverse-engineering systems to understand how they work.`}
      </p>
      <p className="mb-4">
        {`Currently, I'm working on improving my frontend and backend skills, deploying
        to platforms like Vercel, and creating content-ready projects designed for speed
        and accessibility. I believe in honest feedback, emotional transparency, and using
        technology to make life just a little easier.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
