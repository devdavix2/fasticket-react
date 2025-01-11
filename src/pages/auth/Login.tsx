import { Card, CardContent, CardHeader, CardTitle } from "../components/components/ui/card";
import { Input } from "../components/components/ui/input";
import { Label } from "../components/components/ui/label";
import { Button } from "../components/components/ui/button";
import { useState, useEffect } from "react";
import { loginUser } from "../services/api";

export const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (success || error) {
      timeout = setTimeout(() => {
        setSuccess(null);
        setError(null);
      }, 3000); // Popup disappears after 3 seconds
    }

    return () => clearTimeout(timeout); // Cleanup timeout on component unmount
  }, [success, error]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await loginUser({ username, password });
      console.log("Login successful:", response);
      setSuccess("Login Successful");
    } catch (err: any) {
      if (err.response?.data?.non_field_errors) {
        setError("Invalid username or password. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Success Message */}
      {success && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition duration-300 ease-in-out">
          {success}
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded shadow-lg transition duration-300 ease-in-out">
          {error}
        </div>
      )}
    </div>
  );
};
