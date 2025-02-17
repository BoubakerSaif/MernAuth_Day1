import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCredentials } from "../Redux/authSlice";
import { logoutUser } from "../Redux/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logoutUser(navigate));
    dispatch(clearCredentials());
  };
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 dark:bg-gray-900">
      <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <button>
            <div className="flex items-center space-x-2">
              <h2 className="text-black dark:text-white font-bold text-2xl">
                Blog
              </h2>
            </div>
          </button>
          <div className=" lg:block">
            <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
              <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <Link to={"/"}>Home</Link>
              </li>
              {userInfo && (
                <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link to={"/createpost"}>Create Post</Link>
                </li>
              )}
            </ul>
          </div>
          {userInfo ? (
            <div className="flex items-center gap-x-2">
              <Link
                to={"/profile"}
                className="flex items-center text-black dark:text-white justify-center px-6 py-2.5 font-semibold"
              >
                {`${userInfo.firstName.toUpperCase()} ${userInfo.lastName.toUpperCase()}`}
              </Link>

              <button
                onClick={logoutHandler}
                className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-x-2">
              <Link to={"/signup"}>
                <button className="flex items-center text-black dark:text-white justify-center px-6 py-2.5 font-semibold">
                  Sign up
                </button>
              </Link>

              <Link to={"/signin"}>
                <button className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
