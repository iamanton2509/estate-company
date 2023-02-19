import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import CommentService from '../../components/API/CommentService';

import {useFetching} from '../../hooks/useFetching';

import Comments from '../../components/comments/Comments';
import Loader from '../../components/UI/loader/Loader';
import {projects} from '../../helpers/projectsFullList';

import Pagination from '../../components/UI/pagination/Pagination';

import './project.css';

const Project = () => {
    const {id} = useParams();
    const project = projects[id];

    const [comments, setComments] = useState([
        {
            id: 1,
            name: 'Diana',
            body: 'My comment'
        },
        {
            id: 2,
            name: 'Polina',
            body: 'Our comment'
        }
    ]);

    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const changePage = (page) => {
        setPage(page);
    }

    const [fetchComments, isCommentsLoading, commentError] = useFetching( async () => {
        const response = await CommentService.getCommentsByProjectId(project.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div className="project-content">
            <div className="container">
                <div className="project-row">
                    <div className="project-row__image">
                        <img src={project.img} alt="Project" />
                    </div>
                    <div className="project-description">
                        <h2 className="project-description__title">{project.title}</h2>
                        <h2 className="project-description__name">{project.description}</h2>
                        <p className="project-description__area"><strong>Area:</strong> {project.area} sq. m</p>
                        <p className="project-description__year"><strong>Year:</strong> {project.year}</p>
                        <p className="project-description__text">{project.details}</p>
                    </div>
                </div>
                <h1 style={{fontSize: 35, color: 'var(--service-paragraph)', textAlign: 'center'}}>Comments</h1>
                {commentError &&
                    <h1>A loading error has happened.</h1>
                }
                {isCommentsLoading 
                    ? <div style={{display: 'flex', justifyContent: 'center', marginBottom: 15}}><Loader /></div>
                    : comments.map((comment) => {
                        return <Comments key={comment.id} name={comment.name} body={comment.body} id={comment.id}/>
                    })
                }
                <Pagination page={page} changePage={changePage} totalPages={totalPages} />
            </div>
      </div>
    );
}

export default Project;