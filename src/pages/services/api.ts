import fetch from "node-fetch";


const BASE_URL = "https://fasticket.onrender.com"; // Replace with the actual API URL

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

// Utility function to handle fetch requests
const handleFetch = async (url: string, options: RequestInit) => {
  try {
    const response = await fetch(url, options as import("node-fetch").RequestInit);

    const data: { message?: string } = await response.json() as { message?: string };

    console.log("Response Details:", {
      status: response.status,
      headers: [...response.headers],
      data,
    });

    if (!response.ok) {
      throw new Error(data.message || `Error ${response.status}: Request failed.`);
    }

    return data;
  } catch (error: any) {
    console.error("Fetch Error:", error.message);
    throw new Error(error.message || "Network Error. Please try again later.");
  }
};

// User login function
export const loginUser = async (userData: { usernameOrEmail: string; password: string }) => {
  const validationErrors = validateUserData(userData, "login");
  if (validationErrors) {
    throw new Error(validationErrors.join(" "));
  }

  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };

  return await handleFetch(`${BASE_URL}/auth/login`, options);
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

  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  };

  return await handleFetch(`${BASE_URL}/auth/signup`, options);
};

export default { loginUser, signupUser };
