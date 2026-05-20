import { useState } from "react";
import Modal from "./Modal";
import { useCreatePostMutation } from "../redux/features/api/baseApi";

const CreatePostModal = ({ isOpen, onClose }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [setPost, { isLoading }] = useCreatePostMutation();

    const handleClose = () => {
        setTitle("");
        setBody("");
        onClose();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setPost({ userId: 1, title, body }).then(() => {
            handleClose();
        });
    };

    return (
        <Modal isOpen={isOpen} onClose={handleClose} title="Create New Post">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Body</label>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        className="w-full p-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:border-blue-500"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-end space-x-2">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-md"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                        disabled={isLoading}
                    >
                        {isLoading ? "Creating..." : "Create post"}
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default CreatePostModal;