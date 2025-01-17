import { useEffect } from "react";
import { getAllPosts } from "../Redux/postSlice";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";

const PostList = () => {
  const dispatch = useDispatch();

  const { allPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, []);
  return (
    <section className="bg-white dark:bg-gray-900 h-auto">
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
          Discover New Adventures
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Explore, discover, and find inspiration through these exciting
          journeys.
        </p>
      </div>

      <div className="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
        <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {allPosts?.map((el) => (
            <Post key={el._id} postDetails={el} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostList;
