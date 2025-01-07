// Utility for handling API errors
export const handleApiError = (error: any): string => {
    if (axios.isAxiosError(error) && error.response) {
      console.error("API Error:", error.response); // Log the error for debugging
      return error.response.data.message || `Error ${error.response.status}: An error occurred.`;
    }
    return "Network Error. Please try again later.";
  };
  
  // Utility for validating form data
  export const validateFormData = (
    userData: Record<string, any>,
    type: "login" | "signup"
  ): string[] => {
    const errors: string[] = [];
  
    if (type === "login") {
      if (!userData.usernameOrEmail || userData.usernameOrEmail.trim() === "") {
        errors.push("Username or email is required.");
      }
      if (!userData.password || userData.password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
      }
    }
  
    if (type === "signup") {
      if (!userData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
        errors.push("Invalid email address.");
      }
      if (!userData.username || userData.username.trim() === "") {
        errors.push("Username is required.");
      }
      if (!userData.phone || !/^\d{10,15}$/.test(userData.phone)) {
        errors.push("Invalid phone number. It should contain 10 to 15 digits.");
      }
      if (!userData.firstName || userData.firstName.trim() === "") {
        errors.push("First name is required.");
      }
      if (!userData.lastName || userData.lastName.trim() === "") {
        errors.push("Last name is required.");
      }
      if (!userData.company || userData.company.trim() === "") {
        errors.push("Company name is required.");
      }
      if (!userData.password || userData.password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
      }
    }
  
    return errors;
  };
  