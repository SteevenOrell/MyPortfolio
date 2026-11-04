import { useState } from 'react';
import { FadeInAnimation } from "./FadeInAnimation";
import expCardBg from "./assets-copy/ChatGPT Image May 8, 2026, 03_14_33 PM.png";

function handleTilt(e) {
  const card = e.currentTarget;
  card.style.transition = 'box-shadow 0.25s ease';
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const cx = rect.width / 2;
  const cy = rect.height / 2;
  const rotateX = ((y - cy) / cy) * -12;
  const rotateY = ((x - cx) / cx) * 12;
  card.style.transform = `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

function resetTilt(e) {
  const card = e.currentTarget;
  card.style.transition = 'transform 0.5s ease, box-shadow 0.25s ease';
  card.style.transform = `perspective(700px) rotateX(0deg) rotateY(0deg)`;
}

const experiences = [
  {
    title: "Software Developer",
    period: "Current - May 2022",
    tech: "ASP.NET, C#, JavaScript, Azure AI, postgreSQL",
    points: [
      "Creating new solutions or applications based on BRD and clients need to automate their business process.",
      "Solving and fixing issues with the existing solutions.",
      "Performing testing and deploying codes.",
      "Peer code review",
      "Assigning tasks to Developers."
    ]
  },
  {
    title: "Jr Dev Internship",
    period: "Oct 2021 - Jul 2021",
    tech: "PHP, Laravel, MySql",
    points: [
      "Implementing new features to existing application.",
      "Performing testing and deploying codes.",
      "Creating documentations and guides for applications helping customers to understand and use products.",
      "Follow Scrum methodology using Azure DevOps.",
      "Reporting production issues"
    ]
  }
];

function Experiences(){
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
  <>
    <div id="TitleExperience">
      <div>
        <h2>WORK</h2>
        <h4>EXPERIENCE</h4>
      </div>
    </div>

    <FadeInAnimation>
      <div id="HeroDiv2">

        {/* Left — zigzag roadmap (desktop vertical) */}
        <div className="ExpRoadmap">
          <svg className="ExpRoadSvg ExpRoadSvg--desktop" viewBox="0 0 220 400" preserveAspectRatio="xMidYMid meet">

            {/* Road line */}
            <polyline
              points="70,90 70,185 150,255 150,330"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="3"
              strokeDasharray="8 5"
              strokeLinecap="round"
            />

            {/* Node 1 */}
            <g
              className={`RoadNode${active === 0 ? ' active' : ''}`}
              onClick={() => setActive(0)}
              onMouseEnter={() => setActive(0)}
              style={{ cursor: 'pointer' }}
            >
              <circle cx="70" cy="90" r="22" />
              <text x="100" y="85" className="RoadNodeLabel">Current</text>
              <text x="100" y="101" className="RoadNodeLabel">May 2022</text>
            </g>

            {/* Node 2 */}
            <g
              className={`RoadNode${active === 1 ? ' active' : ''}`}
              onClick={() => setActive(1)}
              onMouseEnter={() => setActive(1)}
              style={{ cursor: 'pointer' }}
            >
              <circle cx="150" cy="330" r="22" />
              <text x="120" y="325" className="RoadNodeLabel" textAnchor="end">Oct 2021</text>
              <text x="120" y="341" className="RoadNodeLabel" textAnchor="end">Jul 2021</text>
            </g>

          </svg>

          {/* Mobile horizontal road */}
          <svg className="ExpRoadSvg ExpRoadSvg--mobile" viewBox="0 0 320 140" preserveAspectRatio="xMidYMid meet">

            {/* Road line */}
            <polyline
              points="55,60 130,30 200,95 265,60"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="3"
              strokeDasharray="8 5"
              strokeLinecap="round"
            />

            {/* Node 1 */}
            <g
              className={`RoadNode${active === 0 ? ' active' : ''}`}
              onClick={() => setActive(0)}
              onMouseEnter={() => setActive(0)}
              style={{ cursor: 'pointer' }}
            >
              <circle cx="55" cy="60" r="22" />
              <text x="55" y="97" className="RoadNodeLabel" textAnchor="middle">Current</text>
              <text x="55" y="112" className="RoadNodeLabel" textAnchor="middle">May 2022</text>
            </g>

            {/* Node 2 */}
            <g
              className={`RoadNode${active === 1 ? ' active' : ''}`}
              onClick={() => setActive(1)}
              onMouseEnter={() => setActive(1)}
              style={{ cursor: 'pointer' }}
            >
              <circle cx="265" cy="60" r="22" />
              <text x="265" y="97" className="RoadNodeLabel" textAnchor="middle">Oct 2021</text>
              <text x="265" y="112" className="RoadNodeLabel" textAnchor="middle">Jul 2021</text>
            </g>

          </svg>
        </div>

        {/* Right — active experience card */}
        <div className="CardExperienceWrap">
          <img className="CardExpBgImg" src={expCardBg} alt="" aria-hidden="true" />
          <div
            className="CardExperience"
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
          <h4>{exp.title}</h4>
          <h5>{exp.period}</h5>
          <p><b>Main Technologies: {exp.tech}</b></p>
          <br />
          <p>
            {exp.points.map((pt, i) => (
              <span key={i}>{pt}<br /></span>
            ))}
          </p>
        </div>
        </div>

      </div>
    </FadeInAnimation>
  </>
  );
}

export default Experiences;
