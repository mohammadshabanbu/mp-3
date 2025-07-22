import {Link} from "react-router-dom";
export default function Nav(){
    return(
        <nav>
            <ul>
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/education.html`}>Education</Link></li>
                <li><Link to={`/experiences.html`}>Experiences</Link></li>
                <li><Link to={`/skills.html`}>Skills</Link></li>
                <li><Link to={`/athletics.html`}>Athletics</Link></li>
                <li><Link to={`/extracurriculars.html`}>Extracurriculars</Link></li>
                <li><Link to={`/projects.html`}>projects</Link></li>
            </ul>
        </nav>
    )
}
