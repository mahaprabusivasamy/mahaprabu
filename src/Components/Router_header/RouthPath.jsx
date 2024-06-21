
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import About from "../Pages/About"
import Projects from "../Pages/Projects"
import Contact from "../Pages/Contact"
function RouterPath(){
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Projects" element={<Projects/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>

        </Routes>
      </BrowserRouter>
    )
}
export default RouterPath;
