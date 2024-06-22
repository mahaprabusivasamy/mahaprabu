import ImageSlider from "../ImageSlider/ImageSlider";
import Header from "../Router_header/Header"
import Heading from "../Router_header/Heading";
import "./Pages.css"

function Home(){
    return (
        <div className="Home_main">
            <div className="header">
            <Heading/>
            </div>
            <div className="mains_one">
            <Header/>
            <div className="main_content">
                <h4>Home</h4>
                <hr />
                <ImageSlider/>
            </div>
            </div>
        </div>
       
    )
}

export default Home;