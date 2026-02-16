import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {


    const navigate = useNavigate();

    const formHandeler =(e)=>{
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        axios.post("http://localhost:3000/api/auth/login",{
            email,
            password
        },{ withCredentials: true })
        .then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data.token);
            navigate("/");

            e.target[0].value = "";
            e.target[1].value = "";
        })
        .catch(err => {
            console.log(err.response?.data?.message || "Login failed");
             e.target[0].value = "";
            e.target[1].value = "";
        })
    }

  const handleGoogleLogin = async (credentialResponse) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/google-login",
        {
          tokenId: credentialResponse.credential,
        },
        { withCredentials: true }
      );

      console.log(res.data);

      // optional: localStorage (if needed)
      localStorage.setItem("token", res.data.token);

      // role based redirect
      if (res.data.userData.role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");

      }

    } catch (error) {
      console.log(error.response?.data?.message || "Google login failed");
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center  bg-gray-800 text-white px-4">
      <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-lg p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

        {/* Form */}
        <form onSubmit={formHandeler}  className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-2 cursor-pointer rounded bg-white text-gray-950 font-semibold hover:bg-gray-200 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="px-3 text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Google Login */}
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => {
            console.log("Login Failed");
          }}
        />

        {/* Links */}
        <div className="text-center text-sm mt-6 space-y-2">
          <p className="text-gray-400">
            Don’t have an account?{" "}
            <Link to="/register" className="text-white hover:underline">
              Register
            </Link>
          </p>

          <Link
            to="/"
            className="block text-gray-400 hover:text-white hover:underline"
          >
            ← Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
