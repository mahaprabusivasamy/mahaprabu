
import imh from "../../assets/maha.jpg"
import AnimatedText from "./AnimatedText"
import Skills from "./Skills"
import "./About_me.css"
export default function About_me() {
  return (
    <div className="main_abt">
      <div className="img_abt">
     <img src={imh}/>
      </div>
       <div className="about_mep">
        <AnimatedText/>
        <div className="para">
          <p><span className="span"></span>I am specializing in building dynamic websites and web applications using WordPress, HTML, CSS, JavaScript, and the MERN stack. My expertise spans front-end and back-end development, ensuring seamless integration and functionality. I craft user-centric designs with a strong focus on responsiveness and interactivity. With a knack for solving complex problems, I deliver high-quality, scalable solutions. 
            Lets build something amazing together!</p>
         
            </div>
       </div>
    </div>
  )
}
