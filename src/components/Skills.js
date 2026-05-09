import { useState } from "react";
import { FadeInAnimation } from "./FadeInAnimation";
import { PreviousArrow2 } from "./Icons/PreviousArrow2";
import { NextArrow2 } from "./Icons/NextArrow2";

const skills = [
  {
    title: "Full Stack JavaScript",
    label: "Web Development",
    content: (
      <ul>
        <li><b>Frontend:</b> React.js, Angular, HTML5, CSS3, Tailwind CSS</li>
        <li><b>Backend:</b> Node.js, Express.js</li>
        <li><b>Database:</b> MongoDB, PostgreSQL, MySQL, Firebase</li>
        <li><b>Stacks:</b> MERN, MEAN</li>
        <li><b>Auth:</b> JWT, OAuth 2.0, Session-based Auth</li>
        <li><b>Tools:</b> REST APIs, Socket.io</li>
      </ul>
    ),
  },
  {
    title: "Mobile & Web — React Native",
    label: "Cross-Platform",
    content: (
      <ul>
        <li><b>Mobile:</b> React Native Expo (iOS & Android)</li>
        <li><b>Web:</b> React.js single-page &amp; multi-page applications</li>
        <li><b>Backend:</b> Firebase (Auth, Firestore, Storage), OAuth 2.0</li>
        <li><b>State:</b> Context API</li>
        <li><b>UI Kits:</b> PrimeReact, Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Python",
    label: "Programming & AI",
    content: (
      <ul>
        <li><b>Web:</b> Django, Flask, REST APIs</li>
        <li><b>AI / ML:</b> scikit-learn, TensorFlow basics, pandas, NumPy</li>
        <li><b>Scripting:</b> Automation, data processing pipelines</li>
        <li><b>Database:</b> SQLite, PostgreSQL</li>
      </ul>
    ),
  },
  {
    title: "C# — Web Application",
    label: "Enterprise Dev",
    content: (
      <ul>
        <li><b>Framework:</b> ASP.NET Core, MVC, Web API</li>
        <li><b>Cloud:</b> Azure AI services, Azure DevOps</li>
        <li><b>Database:</b> PostgreSQL, SQL Server</li>
        <li><b>Concepts:</b> OOP, SOLID</li>
        <li><b>Tools:</b> Visual Studio, NuGet, IIS</li>
      </ul>
    ),
  },
  {
    title: "DevOps & Agile",
    label: "Methodology",
    content: (
      <ul>
        <li><b>Version Control:</b> Git, GitHub, GitLab</li>
        <li><b>CI/CD:</b> Azure Pipelines, GitHub Actions</li>
        <li><b>Cloud:</b> Azure (App Service, Functions, Storage)</li>
        <li><b>Containers:</b> Docker basics</li>
        <li><b>Agile:</b> Scrum, Azure DevOps Boards, Sprint Planning, Code Review</li>
      </ul>
    ),
  },
];

function Skills() {
  const [current, setCurrent] = useState(0);
  const [animClass, setAnimClass] = useState('');

  function navigate(dir) {
    const next = current + (dir === 'next' ? 1 : -1);
    if (next < 0 || next >= skills.length || animClass) return;
    setAnimClass(`skillcard-exit-${dir}`);
    setTimeout(() => {
      setCurrent(next);
      setAnimClass(`skillcard-enter-${dir}`);
      setTimeout(() => setAnimClass(''), 400);
    }, 280);
  }

  const skill = skills[current];

  return (
    <div id="SkillsSection1">
      <FadeInAnimation>
        <div className="SkillsSectionTitle">
          <h3><i>Skills</i></h3>
        </div>

        <div className="SkillCarousel">
          <button
            className="SkillCarousel__arrow"
            onClick={() => navigate('prev')}
            disabled={current === 0}
          >
            <PreviousArrow2 />
          </button>

          <div className="SkillCarousel__track">
            <div className={`SkillCarousel__card ${animClass}`}>
              <span className="SkillCarousel__label">{skill.label}</span>
              <h4>{skill.title}</h4>
              <div className="SkillCarousel__rule" />
              <div className="SkillCarousel__body">{skill.content}</div>
              <span className="SkillCarousel__counter">{current + 1} / {skills.length}</span>
            </div>
          </div>

          <button
            className="SkillCarousel__arrow"
            onClick={() => navigate('next')}
            disabled={current === skills.length - 1}
          >
            <NextArrow2 />
          </button>
        </div>

        <div className="SkillCarousel__dots">
          {skills.map((_, i) => (
            <span
              key={i}
              className={`SkillCarousel__dot${i === current ? ' SkillCarousel__dot--on' : ''}`}
              onClick={() => {
                if (i !== current && !animClass) {
                  const dir = i > current ? 'next' : 'prev';
                  setAnimClass(`skillcard-exit-${dir}`);
                  setTimeout(() => {
                    setCurrent(i);
                    setAnimClass(`skillcard-enter-${dir}`);
                    setTimeout(() => setAnimClass(''), 400);
                  }, 280);
                }
              }}
            />
          ))}
        </div>
      </FadeInAnimation>
    </div>
  );
}

export default Skills;
