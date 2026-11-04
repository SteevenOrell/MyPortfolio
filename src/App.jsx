import { useEffect } from 'react';
import './App.css';
import './styles/site.css';
import NavB from './components/NavB';
import MainSection from './components/MainSection';
import Marquee from './components/Marquee';
import BioCareerGoals from './components/BioCareerGoals';
import Experiences from './components/Experiences';
import Project from './components/Projects';
import ProjectsPage from './components/ProjectsPage';
import Skills from './components/Skills';
import CareerGoalsServices from './components/CareerGoalsServices';
import Footer from './components/footer';
import BottomBlur from './components/BottomBlur';
import { LanguageProvider, useLanguage } from './i18n/LanguageContext';
import { RouterProvider, useRouter } from './router';

function Home() {
  const { t } = useLanguage();
  return (
    <>
      <MainSection />
      <Marquee items={t.marquee} />
      <BioCareerGoals />
      <Experiences />
      <Project />
      <Skills />
      <CareerGoalsServices />
    </>
  );
}

function Page() {
  const { t } = useLanguage();
  const { path } = useRouter();
  const onProjects = path === '/projects';

  // Tab title follows the page and the language.
  useEffect(() => {
    document.title = onProjects ? t.work.docTitle : t.meta.title;
  }, [onProjects, t]);

  return (
    <>
      <NavB />
      <main id="main" key={path}>
        {onProjects ? <ProjectsPage /> : <Home />}
      </main>
      <Footer />
      <BottomBlur />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <Page />
      </RouterProvider>
    </LanguageProvider>
  );
}

export default App;
