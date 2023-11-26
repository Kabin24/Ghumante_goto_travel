import "./FooterStyles.css"

const Footer =() =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Ghumante</h1>
                    <p>आफ्नो मनपर्ने गन्तव्य छनौट गर्नुहोस्</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                </div>

            </div>
            <div className="bottom"></div>
        </div>
    )
}

export default Footer;