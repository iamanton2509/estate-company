import axios from 'axios';

export default class CommentService {
    static async getAll(limit=10, page=1){     
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;  
    }

    static async getCommentsByProjectId(id) {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response;
    }
}
