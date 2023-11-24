import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/contact3.avif"

function Contact (){
    return(
        <>
               
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg={ContactImg}
        title="Contact Us "
       
        />
 
         </>
    )

}

export default Contact;