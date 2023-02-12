import './style.css';

const Comments = ({name, body, id}) => {
    return (
        <div className="comments">
            <div className="comment">
                <h2 className="comment-name">{id} {name}</h2>
                <p className="comment-body">{body}</p>
            </div>
        </div>
    );
}

export default Comments;