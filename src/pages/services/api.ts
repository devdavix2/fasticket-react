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
  if (type === "login") {
    if (!userData.usernameOrEmail) errors.push("Username or email is required.");
    if (!userData.password) errors.push("Password is required.");
  } else if (type === "signup") {
    if (!userData.username) errors.push("Username is required.");
    if (!userData.email) errors.push("Email is required.");
    if (!userData.password) errors.push("Password is required.");
    if (!userData.phone) errors.push("Phone number is required.");
    if (!userData.firstName) errors.push("First name is required.");
    if (!userData.lastName) errors.push("Last name is required.");
    if (!userData.company) errors.push("Company is required.");
  }
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
    console.log("Login Response:");
    console.log("Status:", response.status);
    console.log("Headers:", response.headers);
    console.log("Data:", response.data);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Login Error Response:", {
        status: error.response.status,
        headers: error.response.headers,
        data: error.response.data,
      });
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
    console.log("Signup Response:");
    console.log("Status:", response.status);
    console.log("Headers:", response.headers);
    console.log("Data:", response.data);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      console.error("Signup Error Response:", {
        status: error.response.status,
        headers: error.response.headers,
        data: error.response.data,
      });
      throw new Error(error.response.data.message || `Error ${error.response.status}: Sign-up failed.`);
    }
    throw new Error("Network Error. Please try again later.");
  }
};

export default api;
