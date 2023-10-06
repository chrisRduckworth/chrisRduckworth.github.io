import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderContext } from "../contexts/HeaderContext";
import "../styles/AboutMe.css";

function AboutMe() {
  const { setHeader } = useContext(HeaderContext);

  useEffect(() => {
    window.scrollTo(0, 0)
    setHeader((currHeader) => {
      return { tab: "About Me", url: "chrisDuckworth > aboutMe.html" };
    });
  }, []);
  return (
    <main>
      <h1>About Me</h1>
      <section>
        <h2>Introduction</h2>
        <p>
          More than anything, I love solving difficult problems. It's what drew
          me towards my degree in maths, and is what has drawn me towards
          programming now. The way of thinking about problems is very similar,
          and now I'm looking for the opportunity to show what I've learnt in
          the tech industry. While I prefer backend and technical work,
          hopefully this website proves that I can hold my own when it comes to
          frontend and CSS styling.
        </p>
      </section>
      <section>
        <h2>Programming and Northcoders</h2>
        <p>
          In some free time after finishing my degree, I learnt a bit of Python.
          I was self-taught, and sometimes struggled to get in my daily
          programming, but I loved the challenge it presented, and it cumulated
          in a project I'm quite proud of - a program that converts images and
          videos into ASCII characters. More detail can be found{" "}
          <Link to="/projects/Image to ASCII">here.</Link>
        </p>
        <p>
          In July 2023, I began studying software development at one of the
          Northcoders bootcamp courses. I spent 13 weeks learning programming
          fundamentals, backend and frontend web development, testing, agile
          methodologies... I learnt so much in such a short amount of time it's
          difficult to describe, and it's provided me with a great opportunity
          to get my foot on the professional ladder.
        </p>
        <p>
          During the bootcamp I worked on two projects. The first was solo -{" "}
          <Link to="/projects/Northcoders News">Northcoders News.</Link> After
          finishing the backend section of the course, I spent a week on the
          backend of the project, and after the frontend section, I spent a week
          on the frontend. It's a great testament to how far I've come.
        </p>
        <p>
          The second project was a group project, a mobile app called{" "}
          <Link to="/projects/BotaniBuddy">BotaniBuddy.</Link> Working in a
          group of 6 was intimidating at first, but I very quickly realised I
          was working with a great group of people, and it was very rewarding by
          the end.
        </p>
      </section>
      <section>
        <h2>Maths</h2>
        <p>
          While I absolutely love to code (and I really mean it, otherwise I
          wouldn't do it so much!), I do still love maths. Not that
          namby-pamby-actually-useful maths like statistics or mechanics, the
          truly useless "pure" maths. The stuff which makes people pull a face
          when you try to describe it. The sort of thing that has no real-life
          application.
        </p>
        <p>
          I know that sort of maths isn't very useful - who cares about ring
          theory or vector calculus or complex analysis (actually that last one
          is pretty useful but it sounds intimidating). But it's helped my way
          of thinking and approaching problems. Maths and programming aren't
          necesarrily directly connected, but the logic is absolutely
          transferable.
        </p>
      </section>
      <section>
        <h2>Origami</h2>
        <p>
          I've been doing origami on and off since I was a kid, but recently
          I've gotten more into it. The process is extremely calming - just put
          on some relaxing music, open a book of you favourite diagrams, and
          start folding. And then the result you end up with is this (hopefully)
          beautiful piece of art, folded from something so simple. It's
          incredibly satisfying.
        </p>
      </section>
    </main>
  );
}

export default AboutMe;
