import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const formSchema = z.object({
  loginId: z.string().min(1, "Login ID is required"),
  password: z.string().min(1, "Password is required"),
});

interface LoginFormProps {
  onSubmit?: (values: z.infer<typeof formSchema>) => void;
  onForgotPassword?: () => void;
  onSignUpClick?: () => void;
  isLoading?: boolean;
}

const LoginForm = ({
  onSubmit = (values) => console.log(values),
  onForgotPassword = () => console.log("Forgot password clicked"),
  onSignUpClick = () => console.log("Sign up clicked"),
  isLoading = false,
}: LoginFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      loginId: "",
      password: "",
    },
  });

  return (
    <Card className="w-[400px] bg-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="loginId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Login ID</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your login ID"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <Button
                type="button"
                variant="link"
                className="px-0"
                onClick={onForgotPassword}
              >
                Forgot password?
              </Button>
              <Button
                type="button"
                variant="link"
                className="px-0"
                onClick={onSignUpClick}
              >
                Don't have an account?
              </Button>
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
