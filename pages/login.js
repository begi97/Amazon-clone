import { Layout } from "@/components/Layout";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <Layout title={"Login"}>
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Login</h1>

        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            {...register("email", {
              required: "Please enter email!",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: "Please enter valid email",
              },
            })}
            className="w-full"
            autoFocus
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="email">Password</label>
          <input
            {...register("password", {
              required: "Please enter password!",
              minLength: { value: 3, message: "password is more than 5 chars" },
            })}
            type="password"
            name="password"
            id="password"
            className="w-full"
          />
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <button className="primary-button">Login</button>
        </div>
        <div className="mb-4">
          Don&apos;t have an account? &nbsp;{" "}
          <Link href="/register">Register</Link>
        </div>
      </form>
    </Layout>
  );
}
