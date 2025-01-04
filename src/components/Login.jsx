import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, NavLink } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLoginUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) {
      setIsLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL}/users/login`,
        { email, password },
        { withCredentials: true }
      );
      console.log(response);
      toast.success("Logged In successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-bl from-purple-100 to-purple-300">
      <div className="p-10 bg-white shadow-2xl rounded-3xl max-w-lg w-full">
        <div className="text-center">
          <img
            className="mx-auto h-14 w-auto"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=purple&shade=500"
            alt="Your Company"
          />
          <h2 className="mt-6 text-4xl font-extrabold text-purple-800">
            Log In
          </h2>
          <p className="mt-3 text-md text-purple-600">
            Access your account to manage the library.
          </p>
        </div>

        <form
          onSubmit={handleLoginUser}
          className="mt-8 space-y-8"
          action="#"
          method="POST"
        >
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="example@mail.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                name="password"
                id="password"
                autoComplete="current-password"
                required
                className="mt-2 block w-full px-5 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                placeholder="********"
              />
            </div>
          </div>

          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="w-full flex justify-center bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium py-3 px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              {isLoading ? "Signing In..." : "Log In"}
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-md text-gray-600">
          Don’t have an account?{" "}
          <NavLink
            to="/auth/signup"
            className="font-bold text-purple-700 hover:text-purple-500"
            end
          >
            Sign Up Now
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
