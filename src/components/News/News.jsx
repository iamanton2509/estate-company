import {NavLink} from 'react-router-dom';
import calendar from "./../../images/calendar.svg";

const News = ({img, title, date, id}) => {
    return (
        <li className="news-item">
            <NavLink to={`/news/${id}`}>
                <img src={img} alt={title} className="news-photo" />
            </NavLink> 
            <h3 className="news-item__title">{title}</h3>
            <p className="news-item__date">
                <img src={calendar} alt="date" />
                {date}
            </p>
        </li>
    );
}

export default News;