import React, {useEffect, useState} from "react";
import {Suspense, lazy} from "react";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Greeting from "./greeting/Greeting";
import SplashScreen from "./splashScreen/SplashScreen"; // Keep critical above-the-fold eagerly loaded
import "./Main.scss";
// Lazy load below-the-fold sections (after static imports to satisfy lint rule)
const Skills = lazy(() => import("./skills/Skills"));
const StackProgress = lazy(() => import("./skillProgress/skillProgress"));
const WorkExperience = lazy(() => import("./workExperience/WorkExperience"));
const Projects = lazy(() => import("./projects/Projects"));
const StartupProject = lazy(() => import("./StartupProjects/StartupProject"));
const Achievement = lazy(() => import("./achievement/Achievement"));
const Blogs = lazy(() => import("./blogs/Blogs"));
const Talks = lazy(() => import("./talks/Talks"));
const Podcast = lazy(() => import("./podcast/Podcast"));
const Education = lazy(() => import("./education/Education"));
const ScrollToTopButton = lazy(() => import("./topbutton/Top"));
const Twitter = lazy(() => import("./twitter-embed/twitter"));
const Profile = lazy(() => import("./profile/Profile"));

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const theme = isDark ? "dark" : "light";
  return (
    <div data-theme={theme} className={isDark ? "dark-mode" : undefined}>
      <StyleProvider value={{isDark, changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Suspense fallback={<div className="section-loading">Loading...</div>}>
              <Skills />
              <StackProgress />
              <Education />
              <WorkExperience />
              <Projects />
              <StartupProject />
              <Achievement />
              <Blogs />
              <Talks />
              <Twitter />
              <Podcast />
              <Profile />
              <ScrollToTopButton />
            </Suspense>
            <Footer />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
