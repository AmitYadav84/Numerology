import axios from "axios";

// Base URL configuration (can be changed based on your environment)
const BASE_URL = "https://your-api-endpoint.com/api";

// Creating an Axios instance with default configuration (for reusability)
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json", // or use 'multipart/form-data' for file uploads
  },
});

// Function to post data to the backend
export const postData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data; // The data returned from the backend
  } catch (error) {
    // Handling errors properly
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Server error: ", error.response.data);
      throw new Error(error.response.data.message || "Something went wrong");
    } else if (error.request) {
      // No response was received from the server
      console.error("Network error: ", error.request);
      throw new Error("Network error. Please check your connection.");
    } else {
      // Error setting up the request
      console.error("Error: ", error.message);
      throw new Error(error.message || "An unknown error occurred");
    }
  }
};
