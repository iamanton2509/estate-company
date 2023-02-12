import Project from '../../components/project/Project';
import {projects} from '../../helpers/projectsList';

import Services from '../../components/services/Services';
import {services} from '../../helpers/servicesList';

import title from './../../images/projects/01.jpg';
 
import './main.css';

function Home () {
    return (
        <>
            <div className="content">
                <div className="container">
                    <div className="content-row">
                        <div className="content-text">
                            <h1 className="content-title">We will find a home<br />that's perfect for you.</h1>
                            <p className="content-description">Search confidently with you trusted source of homes for sale or rent worldwide</p>
                        </div>   
                        <div className="content-image">
                            <img src={title} alt="House" />  
                        </div> 
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <h2 className="projects-title-main">Our projects</h2>
                    <ul className="projects">
                        {projects.map(project => 
                            <Project key={project.id} title={project.title} img={project.img} year={project.year} id={project.id} />
                        )}
                    </ul>
                </div>
            </div>

            <div className="site-description">
                <div className="container">
                    <div className="desc">
                        <h2>Discover a place you'll love to live</h2>
                        <p>Our mission is to realize the potential of our clients, professionals and partners by building the real estate solutions of the future.
                        From instilling confidence in today's decisions to re-imagining tomorrow's spaces, we thrive in complex and ever-changing environments</p>
                        <br />
                        <p>We're a team dedicated to the successful marketing of residential developments, mixed-use and historic condominiums — as well as conversions and small-lot subdivisions. Our core competency spans all aspects of the development and sales process. To date, deasy penner podley has exclusively represented 40 multi-unit projects</p>
                        <h2>The best deals, for both realtors and customers</h2>
                        <p>Only one network of agents represents the longest standing tastemaker in the world. In the spirit of innovation, an exceptional luxury real estate company  was launched in 1999. Beyond the beautiful properties and the personal touch of our agents, only one brand can deliver a lifestyle that caters to you. With a network of homes for sale worldwide, our website lets you search property listings globally, and includes a large inventory of luxury homes for sale, including houses, condos, townhomes, villas, and more</p>
                        <br />
                        <p>We lead by example, guided by the needs of the cities we inhabit, the communities we build and the world we live in. We consist of a culture of respect, integrity, service and excellence shapes our approach to every opportunity. The more perspectives we have, the more dimensions we're able to see. Meet some of the people shaping our view of the world</p>
                    </div>
                </div>
            </div>

            <section className="services">
                <div className="container">
                    <h2 className="services-title">Why choose us?</h2>
                    <div className="services-row">
                        {services.map(service =>
                            <Services key={service.id} img={service.img} title={service.title} description={service.description} />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;