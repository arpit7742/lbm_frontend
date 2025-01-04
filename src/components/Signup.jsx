import axios from "axios";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const fullNameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleRegisterUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const username = usernameRef.current?.value;
    const fullName = fullNameRef.current?.value;

    if (!email || !password) {
      setIsLoading(false);
      return;
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_URL}/users/register`,
        { email, password, username, fullName },
        { withCredentials: true }
      );
      console.log(response);
      toast.success("Registered Successfully, Please Login");
      navigate("/auth/login");
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-blue-100 via-blue-300 to-blue-500">
      <div className="p-10 bg-white shadow-2xl rounded-3xl max-w-lg w-full">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-800">
            Create Your Account
          </h2>
          <p className="mt-2 text-blue-600">
            Join us today and start your journey!
          </p>
        </div>

        <form
          onSubmit={handleRegisterUser}
          className="mt-8 space-y-6"
          action="#"
          method="POST"
        >
          <div className="space-y-4">
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
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="example@mail.com"
              />
            </div>

            <div>
              <label
                htmlFor="username"
                className="block text-lg font-medium text-gray-700"
              >
                Username
              </label>
              <input
                ref={usernameRef}
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your Username"
              />
            </div>

            <div>
              <label
                htmlFor="fullName"
                className="block text-lg font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                ref={fullNameRef}
                type="text"
                name="fullName"
                id="fullName"
                autoComplete="fullName"
                required
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="John Doe"
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
                className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="********"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex justify-center bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-5 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isLoading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-8 text-center text-md text-gray-600">
          Already have an account?{" "}
          <NavLink
            to="/auth/login"
            className="font-bold text-blue-700 hover:text-blue-500"
          >
            Log In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signup;
