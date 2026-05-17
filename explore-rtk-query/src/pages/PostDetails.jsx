import { useParams, Link } from "react-router-dom";
import { useGetPostByIdQuery } from "../redux/features/api/baseApi";
import PostCard from "../components/PostCard";

const PostDetails = () => {
    const { id } = useParams();
    const { data: post, isLoading, isError } = useGetPostByIdQuery(id);

    if (isLoading) {
        return <div className="container mx-auto px-4 mt-5">Loading...</div>;
    }

    if (!isLoading && isError) {
        return <div className="container mx-auto px-4 mt-5">Something went wrong!</div>;
    }

    return (
        <div className="container mx-auto px-4 mt-5">
            <Link to="/" className="text-blue-400 hover:underline mb-4 inline-block">&larr; Back to Feed</Link>
            <PostCard post={post} showButton={false} />
        </div>
    );
};

export default PostDetails;
