
import './ProjectGrid.css';
import imgp1 from "../../assets/p1.png"
import imgp2 from "../../assets/p2.png"
import imgp3 from "../../assets/indagric.png"
const projects = [
    {
        id: 1,
        title: "VSTRADERS Using MERN",
        imageUrl: imgp1,
        websiteLink: "https://vs-traders.netlify.app",
        githubLink: "https://github.com/mahaprabusivasamy/vs-traders",
        description: "I’ve just completed a dynamic and robust MERN stack development project for VsMeat Traders! This platform is designed to revolutionize the way VsMeat Traders handle their product listings and pricing updates.Tech stacks of React,MongoDb,Node,express"
    },
    {
        id: 2,
        title: "GST Bill calculator",
        imageUrl: imgp2,
        websiteLink: "",
        githubLink: "https://github.com/mahaprabusivasamy/GST_BILL-calculator",
        description: "developing a GST bill calculator using Springboot java ,reactjs,mongoDB"
    },{
        id: 3,
        title: "INDAGRIC single page website",
        imageUrl: imgp3,
        websiteLink: "https://mahaprabusivasamy.github.io/INDAGRIC/",
        githubLink: "https://github.com/mahaprabusivasamy/INDAGRIC",
        description: "Indian agriculture releated website using html,css"
    },
    // Add more project objects here
];

const ProjectGrid = () => {
    return (
        <div className="grid-container">
            {projects.map(project => (
                <div key={project.id} className="grid-item">
                    <div className="project-content">
                        <div className="image-container">
                            <img src={project.imageUrl} alt={project.title} className="project-image" />
                            <div className="project-description">
                                {project.description}
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <div className="btns">
                            <div className="btns">
  {project.websiteLink.length > 0 && (
    <a href={project.websiteLink} target="_blank" rel="noopener noreferrer" className="btn">Website</a>
  )}
  {project.githubLink.length > 0 && (
    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
  )}
</div>

  
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectGrid;
