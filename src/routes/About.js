import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from"../assets/nepal2.avif"


function About (){
    return(
        <>
               
       <Navbar/>
       <Hero 
       cName="hero-mid"
       heroImg={AboutImg}
       title="About "
      
       />

        </>
       
    )

}

export default About;