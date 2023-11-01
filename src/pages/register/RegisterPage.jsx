import React from "react";
import "./registerpage.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextInput from "../../components/InputTextArea/TextInput";
import Button from "../../components/Button/Button";

export default function RegisterPage() {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };
  return (
    <div className="registerPage">
      <span className="registerTitle">Register</span>
      <form onSubmit={handleSubmit(onSubmit)} className="registerForm">
        <TextInput
          register={{
            ...register("userName", {
              required: "Field is required",
              minLength: {
                value: 5,
                message: "Minimum number of characters 5",
              },
              maxLength: {
                value: 32,
                message: "Maximum number of characters 32",
              },
            }),
          }}
          errors={errors}
          type={"text"}
          placeholder={"Enter your username..."}
          label={"Username"}
        ></TextInput>
        <TextInput
          register={{
            ...register("email", {
              required: "Field is required",
              minLength: {
                value: 5,
                message: "Minimum number of characters 5",
              },
              maxLength: {
                value: 256,
                message: "Maximum number of characters 256",
              },
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid e-mail address",
              },
            }),
          }}
          label={"Email"}
          type={"email"}
          placeholder={"Enter your email..."}
          errors={errors}
        ></TextInput>
        <TextInput
          register={{
            ...register("password", {
              required: "Field is required",
              minLength: {
                value: 8,
                message: "Minimum number of characters 8",
              },
              maxLength: {
                value: 32,
                message: "Minimum number of characters 32",
              },

              validate: {
                notHaveUpperLetters: (v) => {
                  const regex = new RegExp(/[A-Z]/);
                  console.log("notHaveUpperLetters", v, regex.test(v));

                  return regex.test(v)
                    ? true
                    : "Password must contain a capital letter";
                },
                notHaveSpecialSymbols: (v) => {
                  const regex = new RegExp(/[!@#$%^&*()_+{}\[\]:;<>,.?~]/);
                  return regex.test(v)
                    ? true
                    : "The password must contain at least one special character";
                },
                notHaveSpace: (v) => {
                  const regex = new RegExp(/\s/);
                  return regex.test(v)
                    ? "The password must not contain spaces"
                    : true;
                },
              },
            }),
          }}
          errors={errors}
          label={"Password"}
          type={"password"}
          placeholder={"Enter your password..."}
        ></TextInput>

        <Button type="submit" buttonStyle="accentButton">
          Register
        </Button>

        <Button onClick={() => navigate("/login")}>Login</Button>
      </form>
    </div>
  );
}
