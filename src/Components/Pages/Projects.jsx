import ProjectGrid from "../Others/ProjectGrid";
import Header from "../Router_header/Header"
import Heading from "../Router_header/Heading";
import "./Pages.css"

function Projects(){
    return (
        <div className="Projects_main">
             <div className="header">
            <Heading/>
            </div>
            <div className="mains_one">
            <Header/>
            <div className="main_content">
                {/* <h4>Projects</h4> */}
                <div className="App">
            <h1 className="header_p">My Projects</h1>
            <ProjectGrid/>
        </div>
            </div>
            </div>
        </div>
    )
}

export default Projects;