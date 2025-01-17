/* eslint-disable react/prop-types */
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
const Post = ({ postDetails }) => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="relative">
      <a href="#_" className="block overflow-hidden group rounded-xl shadow-lg">
        <img
          src={postDetails?.photo}
          className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
          alt="Adventure"
        />
      </a>
      <div className="relative mt-5">
        <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">
          {`${postDetails.createdBy.firstName} ${postDetails.createdBy.lastName} `}
        </p>
        <a href="#" className="block mb-3 hover:underline">
          <h2 className="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
            {postDetails.title}
          </h2>
        </a>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          {postDetails.description}
        </p>
        {userInfo?.id == postDetails?.createdBy._id && (
          <div className="flex items-center gap-5">
            <MdDelete className=" text-red-500 text-xl" />
            <FaEdit className=" text-yellow-500 text-xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
