import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Welcome = ({ setShowPage }) => {
  const { headerColor, buttonColor } = useSelector((state) => state.theme);
  const { visibleMemberShip, visibleVouchers, visiblePayment } = useSelector(
    (state) => state.module
  );
  // const [currentUrl, setCurrentUrl] = useState(

  //   window.location.href
  // );

  // useEffect(() => {
  //   window.location.replace(window.location.origin + window.location.pathname);
  // }, [currentUrl]);

  return (
    <div className="relative ">
      <div
        className="static w-full h-[250px] bg-light-sky rounded-t-md"
        style={{ backgroundColor: headerColor }}
      >
        <div className="absolute top-[25px] left-[25px] text-white font-bold">
          Welcome to
        </div>
        <div className="absolute top-[45px] left-[25px] text-white text-[24px] font-bold">
          Restaurant ABC
        </div>
        {visibleMemberShip && (
          <div className="absolute  w-[363px] h-[256px] rounded-md  bg-white left-[19px] top-[111px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] ">
            <p className="mt-[35px] text-center left-[94px] text-[20px] leading-[23px] text-black font-bold">
              Become a member
            </p>
            <p className="mt-[14px]  text-center left-[94px] text-[16px] ml-[13px] mr-[10px] leading-[24px] text-user-gray">
              With more ways to unlock exciting perks, this is your all access
              pass to exculsive rewards.
            </p>
            <button
              onClick={() => {
                setShowPage(1);
              }}
              className="mt-[14px] w-[130px] h-[50px] ml-[110px] rounded-[5px] bg-light-sky text-white"
              style={{ backgroundColor: buttonColor }}
            >
              <p className="text-[16px] font-bold">Join now</p>
            </button>
            <p className="mt-[7px]  text-center left-[94px] text-[16px]  text-user-gray">
              Already have an account?
            </p>
            <button
              onClick={() => {
                setShowPage(3);
              }}
              className="mb-[17px] ml-[147px] text-light-sky underline"
              style={{ color: buttonColor }}
            >
              Sign in
            </button>
          </div>
        )}
      </div>
      {visibleVouchers && (
        <div className="absolute mt-[129px] w-[363px] h-[192px] rounded-md  bg-white ml-[19px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)]">
          <p className="mt-[35px]  text-center text-[20px] font-bold text-black leading-[23px]">
            Vouchers
          </p>
          <p className="mt-[14px]  text-center left-[94px] text-[16px]  text-user-gray">
            Buy exculsive vouchers and enjoy savings
          </p>
          <button
            onClick={() => {
              setShowPage(5);
            }}
            className="mt-[14px] w-[130px] h-[50px] ml-[110px] rounded-[5px] bg-light-sky"
            style={{ backgroundColor: buttonColor }}
          >
            <p className="text-[16px] text-white font-bold">Browse</p>
          </button>
        </div>
      )}
    </div>
  );
};

export default Welcome;
