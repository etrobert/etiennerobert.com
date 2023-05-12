import styles from './page.module.scss';

const Cv = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Étienne Robert</h1>
      {/* TODO: Remove this div and handle that in CSS */}
      <div>
        <section id="contact">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="mailto:etiennerobert33@gmail.com">
                etiennerobert33@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.etiennerobert.com" target="_blank">
                etiennerobert.com
              </a>
            </li>
            <li>
              <a href="https://github.com/etrobert" target="_blank">
                github.com/etrobert
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/etienne-robert-dev"
                target="_blank"
              >
                linkedin.com/in/etienne-robert-dev
              </a>
            </li>
          </ul>
        </section>
        <section>
          <h2>Skills</h2>
          <section id="engineering">
            <h3>Engineering</h3>
            <section>
              <h4>Frontend</h4>
              <ul>
                <li>Typescript</li>
                <li>React</li>
                <li>Next.js</li>
              </ul>
            </section>
            <section>
              <h4>Backend</h4>
              <ul>
                <li>Node.js / Deno</li>
                <li>C / C++ / Rust</li>
                <li>Serverless</li>
              </ul>
            </section>
            <section>
              <h4>DevOps</h4>
              <ul>
                <li>Git</li>
                <li>CI / CD / GH Actions / ...</li>
                <li>Unix / Linux / Bash</li>
                <li>Docker</li>
              </ul>
            </section>
          </section>
          <section id="leadership">
            <h3>Leadership</h3>
            <ul>
              <li>Mentoring</li>
              <li>Entrepreneurship</li>
              <li>Defining & Driving Mission</li>
              <li>Project Management / SCRUM / ...</li>
              <li>Recrutement</li>
            </ul>
          </section>
        </section>
      </div>
      <section className={styles.experiences}>
        <h2>Experiences</h2>
        <ul>
          <li>
            <h3>Senior Full Stack Software Engineer - Doctolib</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </li>
          <li>
            <h3>Founder - Founder Institute</h3>
            <p>
              The Founder Institute is an early stage startup accelerator. I
              enrolled in the Founder Institute to transform TaskGraph, a smart
              task management side project into a full fledged startup. I
              learned a lot, but finally decided to keep TaskGraph as a side
              project.
            </p>
            <p>
              Skills developed: Early Business Development, Public Speaking,
              Sales & Marketing...
            </p>
          </li>
          <li>
            <h3>Frontend Software Developer - Erasys</h3>
            <p>
              Erasys develops PlanetRomeo, a gay dating website used by
              millions. My role as part of the frontend team was to develop and
              maintain the web app.
            </p>
            <p>
              Tech stack: Typescript, React / Redux / Saga, Jest, React Testing
              Library, Storybook, GitLab
            </p>
          </li>
          <li>
            <h3>Freelance</h3>
            <p>
              I worked as a freelancer on very different projects, from Java
              software with the French Customs to a full stack dating website
              project.
            </p>
            <ul>
              <li>Web Frontend stack: VanillaJS, Web Components, Angular</li>
              <li>Web Backend stack: NodeJS, PostgreSQL, Typescript, PHP</li>
              <li>Other: Python, Java</li>
            </ul>
          </li>
          <li>
            <h3>Scortex</h3>
            <p>
              Scortex is a startup that automates visual quality control with
              deep learning. I developed an industrial camera driver in C++,
              then became responsible for the image acquisition pipeline. They
              both are still in production today.
            </p>
            <ul>
              <li>
                Tech stack: C++, CircleCI, Unix, Low Level Networking, Python
              </li>
              <li>Skills developed: Recruiting, Mentoring</li>
            </ul>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Cv;
