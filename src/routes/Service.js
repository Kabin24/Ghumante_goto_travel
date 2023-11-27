import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ServiceImg from "../assets/nepal8.avif"
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Service (){
    return(
        <>
               
        <Navbar/>
        <Hero 
        cName="hero-mid"
        heroImg={ServiceImg}
        title="Service "
       
        />
        <Trip/>
        <Footer/>
 
         </>
    )

}

export default Service;