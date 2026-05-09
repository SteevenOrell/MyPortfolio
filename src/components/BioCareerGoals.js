import { FadeInAnimation } from './FadeInAnimation';
import bioBg from './assets-copy/ElevenLabs_video_seedance-2-0_the wind sho..._2026-05-08T21_21_14.mp4';

const stats = [
  { value: '4+',  label: 'Years Experience' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '8+',  label: 'Technologies' },
];

function BioCareerGoals() {
  return (
    <div id="BioCareer">

      <div className="BioVideoBg">
        <video autoPlay loop muted playsInline src={bioBg} />
      </div>

      <div className="BioContent">

        <FadeInAnimation>
          <div className="BioLeft">
            <span className="BioLabel">About me</span>
            <h2>Full Stack<br />Developer</h2>
          </div>
        </FadeInAnimation>

        <FadeInAnimation>
          <div className="BioRight">
            <p id="bioTextParagraph">
              A problem solver, quick learner, and self-motivated software developer with <b>four years of experience</b> delivering software solutions for Business Process Automation. I design and build web and mobile applications — collecting requirements, architecting solutions, writing clean code, and shipping products that exceed expectations.
            </p>

            <div className="BioStats">
              {stats.map((s, i) => (
                <div className="BioStat" key={i}>
                  <h3>{s.value}</h3>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeInAnimation>

      </div>
    </div>
  );
}

export default BioCareerGoals;
