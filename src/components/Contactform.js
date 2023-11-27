import "./ContactFormStyles.css"

function ContactForm(){
    return(
    <div className="from-container">
        <h1> Send a message to us!</h1>
        <form>
            <input placeholder="Name"/>
            <input placeholder="E-mail"/>
            <input placeholder="Subject"/>
            <textarea placeholder="Message"  rows="4"> </textarea>
            <button> Send Message</button>
        </form>
        <div className="contact-info">
                <p>Contact : 9842051683/025-56743</p>
                <p>Email : shresthasabin89@gmail.com</p>
            </div>
    </div>
    
   
    )
}

export default ContactForm;