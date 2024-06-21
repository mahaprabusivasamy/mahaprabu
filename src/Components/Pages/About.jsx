
import About_me from "../Others/About_me";
import AnimatedText from "../Others/AnimatedText";
import Skills from "../Others/Skills";
import Timeline from "../Others/Timeline";
import Header from "../Router_header/Header"
import Heading from "../Router_header/Heading";
import "./Pages.css"

function About(){
    return (
        <div className="about_main">
             <div className="header">
            <Heading/>
            </div>
            <div className="mains_one">
            <Header/>
            <div className="main_content">
           
              <About_me/>
              <Skills hue="300" saturation="40" />
              <hr />
            
            </div>
            </div>
        </div>
    )
}

export default About;