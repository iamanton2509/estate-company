import {useState, useMemo} from "react";
import Project from "../../components/project/Project";

import MySelect from "../../components/UI/select/MySelect";
import MyInput from "../../components/UI/input/MyInput";
import './projects.css';

function Projects ({projects, setProjects, addToWishList}) {

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
                    {searchedAndSortedProjects.map((project) => 
                        <Project 
                            key={project.id} 
                            title={project.title} 
                            img={project.img} 
                            year={project.year} 
                            id={project.id} 

                            addToWishList={addToWishList}
                        />
                    )}
                </ul>       
                   
            </div>
        </div>
    );
}

export default Projects;