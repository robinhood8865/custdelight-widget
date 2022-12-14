import React from "react";
import { useState } from "react";
import { Input, Checkbox, Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import axios from "axios";
import toast from "react-hot-toast";

// const SERVER_URL = "https://custdelight-3du3.onrender.com";
// const API_URL = SERVER_URL + "/api/";

const SERVER_URL = process.env.REACT_APP_BACKEND_API;
const API_URL = SERVER_URL + "/airtableApi";

const Login = ({ setShowPage }) => {
  const [show, setShow] = useState(false);
  const { buttonColor } = useSelector((state) => state.theme);

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    if (email === "") {
      toast.error("required email");
      return;
    }

    if (password === "") {
      toast.error("required password");
      return;
    }

    axios
      .post(API_URL + "/login", {
        email,
        password,
      })
      .then(
        (response) => {
          toast.success(response.data.msg);
          return response.data.user;
        },
        (error) => {
          console.log(error.response.data.msg);
          const resMessage = error.response.data.msg;
          toast.error(resMessage);
        }
      );
  };
  return (
    <div className="relative ">
      <div className="w-[340px] h-[30px] mt-[18px] ml-[28px]">
        <p className="mt-[18px] text-center left-[94px] text-[22px] leading-[30px] text-black font-bold">
          Login
        </p>
      </div>

      <div className="w-[363px] h-[241px] pt-[27px] px-[19px]  rounded-md  bg-white ml-[19px] mt-[12px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] ">
        <form onSubmit={handleSubmit}>
          <div className="mb-[27px]">
            <Input
              name="email"
              size="lg"
              className="font-inter text-user-text h-[48px] text-[14px]  font-[500] "
              label="Email address"
            />
          </div>
          <div className="relative">
            <Input
              name="password"
              type={!show ? "password" : ""}
              size="lg"
              className="font-inter text-user-text h-[48px] text-[14px] font-[500]"
              label="Password"
              // icon={<i className="fas fa-heart" />}
            />
            <div
              onClick={() => {
                setShow(!show);
              }}
              className="text-[20px] hover:cursor-pointer text-user-text-disable absolute inset-y-3 right-5 w-[24px] h-[24px]  flex items-center text-sm leading-5"
            >
              {!show && (
                <svg
                  xmlns="http://www.w3.orgs/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
              {show && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              )}

              {/* {!show && <i className="fa fa-light fa-eye"></i>}
          {show && <i className="fa fa-light fa-eye-slash"></i>} */}
            </div>
          </div>
          <div className="flex justify-between items-center mt-[27px]">
            <div className="hover:cursor-pointer w-1/3 text-[14px] font-[400] text-user-text">
              Forgot password?
            </div>
            <button
              type="submit"
              className="rounded-[6px] w-[164px] h-[48px] bg-user-main text-center font-[700] normal-case text-[14px] text-white leading-[17px] p-[13px]"
              style={{ background: buttonColor }}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
