import PostCard from "../components/PostCard";
import { useGetPostsQuery } from "../redux/features/api/baseApi";

const Feed = () => {
    const { data: posts, isLoading, isError } = useGetPostsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isLoading && isError) {
        return <div>Something went wrong!</div>;
    }

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-200 my-5">You Feed</h2>
            <div className="grid grid-cols-1 gap-4">
                {posts?.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Feed;