import { useState } from "react";
import PostCard from "../components/PostCard";
import CreatePostModal from "../components/CreatePostModal";
import { useGetPostsQuery } from "../redux/features/api/baseApi";

const Feed = () => {
    const { data: posts, isLoading, isError } = useGetPostsQuery();
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isLoading && isError) {
        return <div>Something went wrong!</div>;
    }

    return (
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-200 my-5">You Feed</h2>
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer"
                >
                    Create Post
                </button>
            </div>

            <CreatePostModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />

            <div className="grid grid-cols-1 gap-4">
                {posts?.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Feed;