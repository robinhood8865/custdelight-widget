import React from "react";
import { useState } from "react";
import { Input, Checkbox, Button } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

import axios from "axios";
const SERVER_URL = process.env.REACT_APP_BACKEND_API;
const API_URL = SERVER_URL + "/airtableApi";

const Register = ({ setShowPage }) => {
  const [show, setShow] = useState(false);
  const [agree, setAgree] = useState(false);
  const { buttonColor } = useSelector((state) => state.theme);

  const handleRegister = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const firstname = event.target.firstname.value;
    const lastname = event.target.lastname.value;
    const password = event.target.password.value;

    console.log(email, firstname, lastname, password);
    if (email === "") {
      toast.error("Email required");
      return;
    }
    if (firstname === "") {
      toast.error("Firstname required");
      return;
    }
    if (lastname === "") {
      toast.error("Lastname required");
      return;
    }

    if (password === "") {
      toast.error("Password required");
      return;
    }
    console.log("pass", email, firstname, lastname, password);

    axios
      .post(API_URL + "/signup", {
        firstname,
        lastname,
        email,
        password,
      })
      .then(
        (response) => {
          toast.success(response.data.msg);
          setShowPage(3);
        },
        (error) => {
          console.log(error.response.data.msg);
          const resMessage = error.response.data.msg;
          console.log(
            "🚀 ~ file: SignIn.tsx ~ line 78 ~ handleSubmit ~ resMessage",
            resMessage
          );
          toast.error(resMessage);
        }
      );
  };

  return (
    <div className="relative ">
      <div className="w-[340px] h-[30px] mt-[18px] ml-[28px]">
        <p className="mt-[18px] text-center left-[94px] text-[22px] leading-[30px] text-black font-bold">
          Register
        </p>
      </div>

      <div className="w-[363px] h-[351] p-[17px] pt-[20px] rounded-md  bg-white ml-[19px] mt-[12px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] ">
        <form onSubmit={handleRegister}>
          <div className="mb-[24px]">
            <Input
              name="email"
              size="lg"
              className="font-inter text-user-text h-[48px] w-full text- text-[14px]  font-[500]"
              label="Email"
            />
          </div>
          <div className="mb-[24px] flex w-full flex-auto">
            <div className="mr-[15px] [&>div]:min-w-[100px]">
              <Input
                name="firstname"
                size="lg"
                className="font-inter text-user-text h-[48px] w-full text- text-[14px]  font-[500]"
                label="First name"
              />
            </div>

            <div className="min-w-[100px] [&>div]:min-w-[100px]">
              <Input
                name="lastname"
                size="lg"
                className="font-inter text-user-text h-[48px] text-[14px]  font-[500] "
                label="Last name"
              />
            </div>
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

              {!show && <i className="fa fa-light fa-eye"></i>}
              {show && <i className="fa fa-light fa-eye-slash"></i>}
            </div>
          </div>
          <Button
            onClick={() => {}}
            disabled={!agree}
            className="mt-[24px] rounded-[6px] w-full h-[48px] bg-user-main"
            style={{ background: buttonColor }}
            type="submit"
          >
            <p className="font-[700] normal-case text-[14px] leading-[17px]">
              Sign up
            </p>
          </Button>

          <div className="flex justify-between mt-[18px]">
            <Checkbox
              onClick={() => {
                setAgree(!agree);
              }}
              name="checkAgree"
              className="checked:bg-[#009580]  checked:border-[#009580] checked:before:[bg-#009580]"
            />
            <div className="text-[12px] font-[400] text-user-text-disable mt-[6px]">
              By clicking Create account, I agree that I have read and accepted
              the Terms of Use and Privacy Policy.
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
