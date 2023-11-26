import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HomeImg from "../assets/nepal3.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip"
import Footer from "../components/Footer";



function Home (){
    return(
        <>
       <Navbar/>
       <Hero 
       cName="hero"
       heroImg={HomeImg}
       title="तिम्रो यात्रा तिम्रो कथा "
       text="Choose Your Favorite Destination"
       buttonText="Travel Plan"
       url="/"
       btnClass="show"
       />
       <Destination/>
    <Trip/>
    <Footer/>
        </>
    );

}

export default Home;