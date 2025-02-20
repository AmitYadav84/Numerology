import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { postData } from "../Api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { setLocalStorageUserData } from "../storage/UserLocalstorage";

const Login = () => {
  const navigate = useNavigate();
  const { user,setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    try {
      const data = await postData("http://localhost:8080/auth/user/login", formData);
      
      setLocalStorageUserData({
        firstName: data.firstName,
        lastName: data.lastName,
        doB: data.doB,
        gender: data.gender,
      });
      setUser({
        firstName: data.firstName,
        lastName: data.lastName,
        doB: data.doB,
        gender: data.gender,
      });
      localStorage.setItem("token", data.jwtToken);
      setFormData({
        email: "",
        password:""
      })
      navigate("/");
      toast.success(data.message);
    
    } catch (error) {
      toast.error(error.message)
    }
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>

        {/* Registration Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
