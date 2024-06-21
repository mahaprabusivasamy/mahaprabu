import ContactForm from "../Others/ContactForm";
import Header from "../Router_header/Header"
import Heading from "../Router_header/Heading";
import "./Pages.css"

function Contact(){
    return (
        <>
        <div className="Contact_main">
             <div className="header">
            <Heading/>
            </div>

            <div className="mains_one">
            <Header/>
            <div className="main_content">
                <h4>Contact</h4>
                <br />
                <ContactForm/>
            </div>
            </div>
        </div></>
    )
}

export default Contact;