import {NavLink} from "react-router-dom";

import location from "./../../images/services/marker-location.svg";

function Project ({title, img, year, id}) {
    return (
        <li className="project">
            <NavLink to={`/project/${id-1}`}>
                <img src={img} alt={title} className="project-image" />
                <h3 className="project-title">
                    <img src={location} />  
                    {title}, {year}
                </h3>
            </NavLink>
        </li>
    );
}

export default Project;