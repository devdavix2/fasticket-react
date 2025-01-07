import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "https://fasticket.onrender.com", // Replace with the actual API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Utility function for form validation
const validateUserData = (userData: any, type: "login" | "signup") => {
  const errors: string[] = [];

  if (type === "login") {
    // Validate usernameOrEmail
    if (!userData.usernameOrEmail || userData.usernameOrEmail.trim() === "") {
      errors.push("Username or email is required.");
    }
    // Password validation
    if (!userData.password || userData.password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }
  }

  if (type === "signup") {
    // Email validation
    if (!userData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      errors.push("Invalid email address.");
    }
    // Username validation
    if (!userData.username || userData.username.trim() === "") {
      errors.push("Username is required.");
    }
    // Phone validation
    if (!userData.phone || !/^\d{10,15}$/.test(userData.phone)) {
      errors.push("Invalid phone number. It should contain 10 to 15 digits.");
    }
    // First name validation
    if (!userData.firstName || userData.firstName.trim() === "") {
      errors.push("First name is required.");
    }
    // Last name validation
    if (!userData.lastName || userData.lastName.trim() === "") {
      errors.push("Last name is required.");
    }
    // Company name validation
    if (!userData.company || userData.company.trim() === "") {
      errors.push("Company name is required.");
    }
    // Password validation
    if (!userData.password || userData.password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }
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
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || "Login failed.");
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
      throw new Error(error.response.data.message || "Sign-up failed.");
    }
    throw new Error("Network Error. Please try again later.");
  }
};

export default api;
