import React from "react"
import NavBar from "./nav-bar";
import HeroPage from "./heroPage";
import Testimonials from "./testimonials";
import About from "./about";

const LandingPage: React.FC = () => {
    return(<div>
        <NavBar/>
        <HeroPage/>
        {/* <BookAppointment/> */}
        <Testimonials/>
        
    </div>)
}

export default LandingPage;
