import {useGetNewsQuery} from "../../store/newsApi";
import News from './News';
import Loader from './../UI/loader/Loader';

const NewsList = () => {
    const {data = []} = useGetNewsQuery();
    return (
        <ul className="news__items">
            {data.map((item) => 
                <News 
                    key={item.id} 
                    img={item.img} 
                    title={item.title} 
                    date={item.date} 
                    id={item.id}/>
            )}
        </ul>
    );
}

export default NewsList;