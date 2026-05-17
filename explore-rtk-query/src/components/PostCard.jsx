import { Link } from "react-router-dom";

const PostCard = ({ post, showButton = true }) => {
    return (
        <div className="bg-gray-700 p-4 rounded-md flex flex-col justify-between h-full">
            <div>
                <h2 className="text-lg font-medium mb-1 text-white">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.body}</p>
            </div>
            {showButton && <Link 
                to={`/post/${post.id}`} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md self-start transition-colors"
            >
                Post Details
            </Link>}
        </div>
    );
};

export default PostCard;