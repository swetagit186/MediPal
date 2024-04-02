import React from "react"
import NavBar from "./nav-bar";
import HeroPage from "./heroPage";
import Testimonials from "./testimonials";
import About from "./about";
import Space from "./space";
import ContactUs from "./contactUs";
import Footer from "./footer";



const LandingPage = ({user , isAuthed} :  {user : any , isAuthed : boolean}) => {

    const textColor = '#3E8CFF';
    const backgroundColor="#07306E";
    const text="white";
    const hoverColor="white";
    return (
      <div>
        <NavBar user={user} isAuthed={isAuthed} />
        <HeroPage />
        <About/>
        <ContactUs textColor={textColor} backgroundColor={backgroundColor}  text={text} hoverColor={hoverColor}/>
        <Testimonials />
        <Footer/>
      </div>
    );
}

export default LandingPage;
