import { ThemeProvider } from "styled-components";
import { Navbar } from "./Components/layout/Navbar";
import { AboutSection } from "./Components/sections/AboutSection";
import { ContactSection } from "./Components/sections/ContactSection";
import { Footer } from "./Components/sections/Footer";
import { HeroSection } from "./Components/sections/HeroSection";
import { ProjectsSection } from "./Components/sections/ProjectsSection";
import { SkillsSection } from "./Components/sections/SkillsSection";
import { Container } from "./Components/Styles/common/Container.styled";
import { GlobalStyles } from "./Components/Styles/Globals.styled";

const App=()=> {
  const theme ={
    colors:{
      white:"rgba(240,247,255,1)",
      navyBlue:"rgba(2,12,27,1)",
      lightNavyBlue:"rgba(4,22,48,1)",
      green:"rgba(0,206,158,1)",
      orange:"rgba(249,105,14,1)",
      purple:"rgba(102,51,153,1)"
    },
    mobile:"768px",
    transition:"all 650ms ease-in-out",
  }
  return (
  <>
  <ThemeProvider theme={theme}>
  <GlobalStyles/>
  <Navbar/>
  <HeroSection/>
  <Container>
    <AboutSection/>
    <ProjectsSection/>
    <SkillsSection/>
    <ContactSection/>
  </Container>
  <Footer/>
  </ThemeProvider>
  </>
  );
};

export default App;
