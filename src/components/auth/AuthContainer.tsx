import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

interface AuthContainerProps {
  onAuthSuccess?: () => void;
  defaultView?: "login" | "signup";
  isLoading?: boolean;
}

const AuthContainer = ({
  onAuthSuccess = () => console.log("Auth success"),
  defaultView = "login",
  isLoading = false,
}: AuthContainerProps) => {
  const [view, setView] = useState<"login" | "signup">(defaultView);

  const handleLoginSubmit = (values: any) => {
    if (values.loginId === "123456" && values.password === "qwerty") {
      onAuthSuccess();
    } else {
      console.error("Invalid credentials");
    }
  };

  const handleSignupSubmit = (values: any) => {
    console.log("Signup submit:", values);
    onAuthSuccess();
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
  };

  return (
    <div className="min-h-[500px] w-full max-w-[400px] bg-white flex items-center justify-center p-4">
      {view === "login" ? (
        <LoginForm
          onSubmit={handleLoginSubmit}
          onForgotPassword={handleForgotPassword}
          onSignUpClick={() => setView("signup")}
          isLoading={isLoading}
        />
      ) : (
        <SignupForm
          onSubmit={handleSignupSubmit}
          onLoginClick={() => setView("login")}
        />
      )}
    </div>
  );
};

export default AuthContainer;
