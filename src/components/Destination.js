
import "./DestinationStyles.css"
import DestinationData from "./DestinationData";
import image1 from "../assets/desti.jpg";
import image2 from "../assets/desti1.jpg"
import image3 from "../assets/desti2.jpg";
import image4 from "../assets/desti3.jpg"
import image5 from "../assets/desti4.avif";
import image6 from "../assets/desti5.avif"
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Explore Kathmandu's cultural wonders at iconic sites like Swayambhunath Stupa, the Monkey Temple, and Boudhanath Stupa, a UNESCO-listed massive mandala.</p>

      <DestinationData
      className="first-des"
      heading="Swayambhunath Stupa (Monkey Temple)"
      text="Swayambhunath Stupa, commonly known as the Monkey Temple, is an ancient and sacred Buddhist site perched atop a hill in Kathmandu, Nepal. Its iconic white dome is adorned with the watchful eyes of Buddha, representing wisdom and compassion. The stupa is surrounded by a variety of shrines, statues, and prayer wheels, creating a serene and spiritual atmosphere. Visitors can climb a staircase to reach the stupa and enjoy panoramic views of the Kathmandu Valley. The presence of playful monkeys adds a lively charm to this UNESCO World Heritage Site."
      img1={image1}
      img2={image2}
      />
       <DestinationData
       className="first-des-reverse"
      
      heading="Pashupatinath Temple"
      text="Pashupatinath Temple, located in Kathmandu, Nepal, is a sacred Hindu temple dedicated to Lord Shiva. Situated on the banks of the Bagmati River, it is a UNESCO World Heritage Site and a significant pilgrimage destination. The temple's architecture reflects traditional pagoda style, adorned with intricate woodcarvings and golden embellishments. Pashupatinath is not only a religious site but also a place for spiritual reflection and cultural observances. The temple complex includes various shrines, ghats, and a vibrant atmosphere, drawing devotees and visitors from around the world."
      img1={image3}
      img2={image4}
      />

<DestinationData
       className="first-des"
      
      heading="Basantapur Durbar Square"
      text="
      Basantapur Durbar Square, located in the heart of Kathmandu, Nepal, is a historic square surrounded by ancient royal palaces and courtyards. It is a UNESCO World Heritage Site and a center of cultural and architectural significance. The square features intricately designed temples, statues, and the old royal palace, showcasing a blend of Hindu and Malla architecture. Basantapur Durbar Square serves as a hub for festivals, cultural events, and daily activities, providing a glimpse into Nepal's rich history and heritage."
      img1={image5}
      img2={image6}
      />
    </div>
  );
};

export default Destination;
