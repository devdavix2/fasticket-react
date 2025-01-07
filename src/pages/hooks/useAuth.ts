import { useState } from "react";
import { loginUser, signupUser } from "../services/api";
import { handleApiError, validateFormData } from "../utils/apiUtils";

// Hook for login functionality
export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const login = async (credentials: { usernameOrEmail: string; password: string }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const validationErrors = validateFormData(credentials, "login");
    if (validationErrors.length > 0) {
      setError(validationErrors.join(" "));
      setLoading(false);
      return;
    }

    try {
      const response = await loginUser(credentials);
      setSuccess(true);
      return response;
    } catch (error: any) {
      setError(handleApiError(error));
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, success };
};

// Hook for signup functionality
export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const signup = async (userData: {
    username: string;
    email: string;
    password: string;
    phone: string;
    firstName: string;
    lastName: string;
    company: string;
  }) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const validationErrors = validateFormData(userData, "signup");
    if (validationErrors.length > 0) {
      setError(validationErrors.join(" "));
      setLoading(false);
      return;
    }

    try {
      const response = await signupUser(userData);
      setSuccess(true);
      return response;
    } catch (error: any) {
      setError(handleApiError(error));
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading, error, success };
};
