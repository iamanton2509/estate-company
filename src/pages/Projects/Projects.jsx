import {useState, useMemo} from "react";
import Project from "../../components/project/Project";

import MySelect from "../../components/UI/select/MySelect";
import MyInput from "../../components/UI/input/MyInput";
import './projects.css';

import photo1 from "./../../images/projects/16.jpg";
import photo2 from "./../../images/projects/08.jpg";
import photo3 from "./../../images/projects/28.jpg";
import photo4 from "./../../images/projects/05.jpg";
import photo5 from "./../../images/projects/11.jpg";
import photo6 from "./../../images/projects/17.png";
import photo8 from "./../../images/projects/18.jpg";
import photo9 from "./../../images/projects/10.jpg";
import photo10 from "./../../images/projects/22.jpg";
import photo11 from "./../../images/projects/25.jpeg";
import photo13 from "./../../images/projects/20.jpg";
import photo14 from "./../../images/projects/21.jpg";
import photo15 from "./../../images/projects/31.jpg";
import photo16 from "./../../images/projects/32.jpg";
import photo17 from "./../../images/projects/26.jpg";
import photo18 from "./../../images/projects/33.jpg";
import photo19 from "./../../images/projects/34.jpg";
import photo20 from "./../../images/projects/35.jpg";
import photo22 from "./../../images/projects/37.jpg";
import photo23 from "./../../images/projects/32.jpg";
import photo24 from "./../../images/projects/35.jpg";
import photo25 from "./../../images/projects/39.jpg";
import photo26 from "./../../images/projects/40.jpg";
import photo27 from "./../../images/projects/41.jpg";

import photo28 from "./../../images/projects/42.1.jpg";
import photo29 from "./../../images/projects/43.1.jpg";
import photo30 from "./../../images/projects/44.1.jpg";
import photo31 from "./../../images/projects/45.1.jpg";
import photo32 from "./../../images/projects/46.png";

import photo33 from "./../../images/projects/51.jpg";
import photo34 from "./../../images/projects/52.jpg";
import photo35 from "./../../images/projects/53.jpg";
import photo36 from "./../../images/projects/54.jpg";

function Projects () {

    const [projects, setProjects] = useState([
        {
            id: 1,
            title: "Miami, Florida, USA",
            img: photo1,
            year: 2020,
            area: 8000,
            details: 'An apartment is located in a gated residential complex with security and a video surveillance system'
        },
        {
            id: 2,
            title: "Los Angeles, California, USA",
            img: photo11,
            year: 2019,
            area: 9000,
            details: 'On the territory of the residential complex there is a 24-hour security, a swimming pool and luxurious tropical gardens.'
        },
        {
            id: 3,
            title: "Chicago, Illinois, USA",
            img: photo17,
            year: 2021,
            area: 11000,
            details: 'Alter Ego premium-class residential complex comprises two 24-storey residential blocks.'
        },
      
        {
            id: 4,
            title: "Madrid, Spain",
            img: photo4,
            year: 2022,
            area: 14500,
            details: 'This residential complex will have more than 1,800 apartments'
        },
        {
            id: 5,
            title: "Marseille, France",
            img: photo27,
            year: 2018,
            area: 12000,
            details: 'Imagine a luxurious residential complex in a quiet rural location with stunning mountain views and peaceful pine forests.'
        },
        {
            id: 6,
            title: "Toronto, Canada",
            img: photo22,
            year: 2017,
            area: 6000,
            details: 'We just need to choose the right house - these words describe this residential complex on the websites of real estate agencies.'
        },
        {
            id: 7,
            title: "Munich, Germany",
            img: photo15,
            year: 2016,
            area: 7600,
            details: 'The residential complex will provide you with a new level and modern standards of living.'
        },
        {
            id: 8,
            title: "Brusell, Belgium",
            img: photo10,
            year: 2021,
            area: 9500,
            details: 'We offer high-quality apartments with convenient layouts in a residential complex on a rise, consisting of 14 buildings of four types.'
        },
        {
            id: 9,
            title: "Lissabon, Portugal",
            img: photo25,
            year: 2022,
            area: 10000,
            details: 'Amazing new residential complex with cutting-edge design, aimed to enjoy the breathtaking views of the Mediterranean sea to the fullest'
        },
        {
            id: 10,
            title: "Helsinki, Finland",
            img: photo26,
            year: 2019,
            area: 13000,
            details: 'This development is a residential complex where the Mediterranean tradition coexists with the most cosmopolitan modernity.'
        },
        {
            id: 11,
            title: "Brusell, Belgium",
            img: photo8,
            year: 2020,
            area: 8000,
            details: 'The apartment on the third floor in a small residential complex near Piazza Marconi.'
        },
        {
            id: 12,
            title: "Oslo, Norway",
            img: photo9,
            year: 2017,
            area: 11350,
            details: 'The residential complex consists of several villas, each of which has its own swimming pool and parking space.'
        },
        {
            id: 13,
            title: "Stockholm, Sweden",
            img: photo28,
            year: 2020,
            area: 4000,
            details: 'The architectural design of residential complex has been developed, which also includes the objects of social and domestic infrastructure.'
        },
        {
            id: 14,
            title: "Copenhagen, Dennmark",
            img: photo29,
            year: 2021,
            area: 12000,
            details: 'The landscape is traced in detail, to which great importance is attached to the residential complex for the convenience of current and future residents'
        },
        {
            id: 15,
            title: "Dortmund, Germany",
            img: photo30,
            year: 2022,
            area: 10000,
            details: 'This modern residential complex with large grounds and swimming pool located close to the centre of Mahmutlar, 300 m from the equipped beach'
        },
        {
            id: 16,
            title: "Melbourne, Australia",
            img: photo31,
            year: 2017,
            area: 9000,
            details: 'Reception and custodian services, enclosed sports ground with artificial surface and security services form a part of the residential complex'
        },
        {
            id: 17,
            title: "Zurich, Switzerland",
            img: photo32,
            year: 2020,
            area: 7000,
            details: 'Since in this zone there are modern buildings the residential complex is constructed observing the company style.'
        },
        {
            id: 18,
            title: "Warshava, Poland",
            img: photo13,
            year: 2022,
            area: 11000,
            details: 'This residential complex offers everything that an investor demands in terms of construction quality, taking into account the external environment.'
        },
        {
            id: 19,
            title: "Praha, Czech",
            img: photo14,
            year: 2020,
            area: 13500,
            details: 'Private residential complex, enter the territory therefore can only residents and their guests, that creates an atmosphere of privacy and exclusivity.'
        },
        {
            id: 20,
            title: "Budapest, Hungary",
            img: photo3,
            year: 2018,
            area: 14000,
            details: 'An apartment is located in a gated residential complex with security and a video surveillance system'
        },
        {
            id: 21,
            title: "Tokyo, Japan",
            img: photo36,
            year: 2021,
            area: 12000,
            details: 'The landscape is traced in detail, to which great importance is attached to the residential complex for the convenience of current and future residents'
        },
        {
            id: 22,
            title: "Beijing, China",
            img: photo2,
            year: 2020,
            area: 9000,
            details: 'Reception and custodian services, enclosed sports ground with artificial surface and security services form a part of the residential complex'
        },
        {
            id: 23,
            title: "Kyiv, Ukraine",
            img: photo5,
            year: 2023,
            area: 6000,
            details: 'Amazing new residential complex with cutting-edge design, aimed to enjoy the breathtaking views of the Mediterranean sea to the fullest'
        },
        {
            id: 24,
            title: "Paris, France",
            img: photo6,
            year: 2020,
            area: 5500,
            details: 'We just need to choose the right house - these words describe this residential complex on the websites of real estate agencies.'
        },
        {
            id: 25,
            title: "Lyon, France",
            img: photo35,
            year: 2016,
            area: 7500,
            details: 'This residential complex is a symbiosis of careful restoration of historical buildings and new construction, preserving the aristocratic character of the region and the area.'
        },
        {
            id: 26,
            title: "Berlin, Germany",
            img: photo34,
            year: 2018,
            area: 8000,
            details: 'The territory of the residential complex is surrounded by a river and parks, which makes it one of the unique in the city.'
        },
        {
            id: 27,
            title: "Istanbul, Turkey",
            img: photo33,
            year: 2023,
            area: 11000,
            details: 'The residential complex is located in a prestigious district with quite mixed development comprising both old residential neighbourhoods and former industrial plants.'
        }
    ]);

    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState(''); 

    const sortProjects = (sort) => {
        setSelectedSort(sort);
        
        if (typeof projects[0][sort] === 'string') {
            setProjects([...projects].sort((a, b) => a[sort].localeCompare(b[sort])));
        } else {
            setProjects([...projects].sort(function(a, b) { return a[sort] - b[sort] }));
        }
    }

    const searchedAndSortedProjects = useMemo(() => {
        return projects.filter(project => project.title.toLowerCase().includes(searchQuery.toLowerCase()));
    });

    return (
        <div className="section">
            <div className="container">
                <h2 className="projects-title">Our projects</h2>                
                <p className="projects-description">Since the company created, we've been working with hundreds of projects. There are the most significant</p>

                <MySelect value={selectedSort} onChange={sortProjects} options = {[
                    {value: 'title', name: 'Sort by city'},
                    {value: 'year', name: 'Sort by year'},
                    {value: 'id', name: 'Sort by default'}
                ]} defaultValue='Sort by' />
                
                <MyInput value={searchQuery} onChange={e => setSearchQuery(e.target.value)} type="text" placeholder="Search by city or country"/>

                <ul className="projects"> 
                    {searchedAndSortedProjects.map(project => {
                        return <Project key={project.id} title={project.title} img={project.img} year={project.year} id={project.id} />
                    })}
                </ul>       
                   
            </div>
        </div>
    );
}

export default Projects;