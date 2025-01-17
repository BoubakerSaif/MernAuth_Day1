import { useState } from "react";
import { createMyPost } from "../Redux/postSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    description: "",
    photo: "",
  });

  const onChangeHandler = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const createPostHandler = (e) => {
    e.preventDefault();
    dispatch(createMyPost({ post, navigate }));
  };

  return (
    <div>
      <form
        className="max-w-md mx-auto mt-20 p-6 bg-white border rounded-lg shadow-lg"
        onSubmit={createPostHandler}
      >
        <h2 className="text-2xl font-bold mb-6">Post Details</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Title</label>
          <input
            onChange={onChangeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="title"
            placeholder="Enter your Title"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Image Url
          </label>
          <input
            onChange={onChangeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="photo"
            placeholder="Enter your Image URL"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            onChange={onChangeHandler}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="5"
            name="description"
            placeholder="Enter your description"
          ></textarea>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
