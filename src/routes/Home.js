import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home (){
    return(
        <>
       <Navbar/>
       <Hero 
       cName="hero"
       heroImg="https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600"
       title="Your Journey Your Story "
       text="Choose Your Favorite Destination"
       buttonText="Travel Plan"
       url="/"
       btnClass="show"
       />

        </>
    );

}

export default Home;