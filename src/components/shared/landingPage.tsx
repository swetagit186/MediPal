import React from "react"
import NavBar from "./nav-bar";
import HeroPage from "./heroPage";
import Testimonials from "./testimonials";
import About from "./about";

const LandingPage = ({user , isAuthed} :  {user : any , isAuthed : boolean}) => {
    return (
      <div>
        <NavBar user={user} isAuthed={isAuthed} />
        <HeroPage />
        {/* <BookAppointment/> */}
        <Testimonials />
      </div>
    );
}

export default LandingPage;
