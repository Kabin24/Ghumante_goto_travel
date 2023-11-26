import "./Tripstyles.css"
import TripData from "./TripData";
import Trip1 from "../assets/trip1.jpg"
import Trip2 from "../assets/trip2.jpg"
import Trip3 from "../assets/trip3.jpg"


function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trip</h1>
            <p>You can discover unique destination using Google Maps.</p>
            <div className="tripcard">
                <TripData
                image={Trip1}
                heading="Janakpur Dham"
                text="Janakpur Dham, located in southern Nepal, is a revered pilgrimage site known for its cultural and religious significance. Home to the historic Janaki Mandir, the temple is dedicated to Goddess Sita and is believed to be the birthplace of Lord Rama's consort. The city boasts vibrant festivals, attracting devotees and tourists alike. "

                />
                   <TripData
                image={Trip2}
                heading="Pokhara Lakeside"
                text="Pokhara Lakeside, nestled beside Phewa Lake in Nepal, is a picturesque destination offering stunning views of the Annapurna Range. The lakeside is adorned with vibrant cafes, shops, and hotels, creating a lively atmosphere. Boating on Phewa Lake is a popular activity, allowing visitors to enjoy the tranquil waters and surrounding landscapes."
                
                />
                   <TripData
                image={Trip3}
                heading=" Chitwan National Park"
                text="Chitwan National Park, situated in southern Nepal, is a renowned wildlife sanctuary and UNESCO World Heritage Site. The park is home to a diverse range of flora and fauna, including endangered species like the one-horned rhinoceros and Bengal tiger. Visitors can embark on jungle safaris, elephant rides, and boat trips to explore the park's rich biodiversity."
                
                />
            </div>
        </div>
    )
}

export default Trip;