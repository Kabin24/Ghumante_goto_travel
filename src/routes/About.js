import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function About (){
    return(
        <>
               
       <Navbar/>
       <Hero 
       cName="hero"
       heroImg="https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZXxlbnwwfHwwfHx8MA%3D%3D"
       title="Your Journey Your Story "
      
       />

        </>
       
    )

}

export default About;