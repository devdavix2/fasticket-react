import axios from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";


// Helper function to extract and handle error messages
const handleError = (error: any): never => {
  if (error.response && error.response.data) {
    const errorMessage =
      error.response.data.error || // Custom error message
      error.response.data.non_field_errors?.[0] || // Django Rest Framework non-field errors
      error.response.data.detail || // General detailed error
      "An unexpected error occurred."; // Fallback error message
    throw new Error(errorMessage);
  }
  // Handle network or unknown errors
  throw new Error("Network error. Please check your connection and try again.");
};

// Function to login user
export const loginUser = async (credentials: {
  username: string;
  password: string;
}): Promise<{ token: string; user_id: number; username: string; email: string } | undefined> => {
  if (!credentials.username || !credentials.password) {
    throw new Error("Username and password are required.");
  }

  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, credentials);
    return response.data; // Expected to return token, user_id, username, email
  } catch (error: any) {
    handleError(error);
  }
};

// Function to register user
export const signupUser = async (userData: {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  company?: string;
}): Promise<{ token: string; user_id: number; username: string; email: string } | undefined> => {
  // Validate required fields
  const requiredFields = ["username", "password", "email", "first_name", "last_name", "phone"];
  for (const field of requiredFields) {
    if (!userData[field as keyof typeof userData]) {
      throw new Error(`${field.replace("_", " ")} is required.`);
    }
  }

  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, userData);
    return response.data; // Expected to return token, user_id, username, email
  } catch (error: any) {
    handleError(error);
  }
};
