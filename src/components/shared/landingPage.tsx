import React from "react"
import NavBar from "./nav-bar";
import HeroPage from "./heroPage";
import Testimonials from "./testimonials";
import About from "./about";
import Space from "./space";
import ContactUs from "./contactUs";
import Footer from "./footer";



const LandingPage = ({user , isAuthed} :  {user : any , isAuthed : boolean}) => {
    return (
      <div>
        <NavBar user={user} isAuthed={isAuthed} />
        <HeroPage />
        <About/>
        <ContactUs/>
        <Testimonials />
        <Footer/>
      </div>
    );
}

export default LandingPage;
