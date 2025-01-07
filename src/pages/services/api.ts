import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://fasticket.onrender.com", // Replace with the actual API URL
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*", // Modify for production
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
});

// Utility function for form validation
const validateUserData = (userData: any, type: "login" | "signup") => {
  const errors: string[] = [];
  // Add validation logic here (same as your existing logic)
  return errors.length > 0 ? errors : null;
};

// User login function
export const loginUser = async (userData: { usernameOrEmail: string; password: string }) => {
  const validationErrors = validateUserData(userData, "login");
  if (validationErrors) {
    throw new Error(validationErrors.join(" "));
  }

  try {
    const response = await api.post("/auth/login", userData);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Login Error:", error.response);
      throw new Error(error.response.data.message || `Error ${error.response.status}: Login failed.`);
    }
    throw new Error("Network Error. Please try again later.");
  }
};

// User sign-up function
export const signupUser = async (userData: {
  username: string;
  email: string;
  password: string;
  phone: string;
  firstName: string;
  lastName: string;
  company: string;
}) => {
  const validationErrors = validateUserData(userData, "signup");
  if (validationErrors) {
    throw new Error(validationErrors.join(" "));
  }

  try {
    const response = await api.post("/auth/signup", userData);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Signup Error:", error.response);
      throw new Error(error.response.data.message || `Error ${error.response.status}: Sign-up failed.`);
    }
    throw new Error("Network Error. Please try again later.");
  }
};

export default api;
