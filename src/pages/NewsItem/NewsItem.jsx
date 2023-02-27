import {useParams} from "react-router-dom";
import "./main.css";
import image from "./../../images/projects/06.jpg";

const NewsItem = ({news}) => {

    const {id} = useParams();
    const item = news[id];

    return (
        <section>
            <div className="container">
                <section className="news-page">
                    <h1 className="news-page__title">{item.title}</h1>
                    <img src={item.img} alt="" />
                    <h4 className="news-page__greeting">{item.greeting}</h4>
                    <p className="news-page__description">{item.description}</p>
                    <p className="news-page__date">{item.date}</p>
                </section>
            </div>
        </section>
    );
}

export default NewsItem;