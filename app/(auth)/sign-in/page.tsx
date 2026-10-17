
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-linear-to-br from-blue-900 to-purple-800 p-4">
      <Card className="w-full max-w-md p-5">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>

          <CardDescription>
            Enter your email below to login to your account.
          </CardDescription>

          <CardAction>
            <Button variant="link">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <form id="signin-form">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>

                  <Link
                    href="/forgot-password"
                    className="text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>

                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex-col gap-3">
          <Button
            type="submit"
            form="signin-form"
            className="w-full"
          >
            Login
          </Button>

          <Button
            type="button"
            variant="outline"
            className="w-full"
          >
            Login with Google
          </Button>
        </CardFooter>

        <p className="text-center text-[17px]">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="text-blue-500 hover:underline"
          >
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default SignIn;
