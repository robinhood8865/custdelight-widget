import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { setTotalPrice } from "./Slices/widgetSlice";
import Voucher from "./Voucher";
import { setVoucherByIndex, addTotalPrice } from "./Slices/widgetSlice";
const expiryOptions = [
  "7 Days",
  "14 Days",
  "21 Days",
  "30 Days",
  "2 Months",
  "3 Months",
  "6 Months",
  "12 Months",
];

const VoucherDetail = (props) => {
  const dispatch = useDispatch();
  const { setShowPage, currentVoucher } = props;
  console.log(
    "🚀 ~ file: voucherDetail.jsx ~ line 22 ~ VoucherDetail ~ currentVoucher",
    currentVoucher
  );
  const { buttonColor } = useSelector((state) => state.theme);
  const voucher = useSelector((state) => state.voucher);
  const { vouchers, voucherFirstName, voucherLastName } = voucher;
  const widget = useSelector((state) => state.widget);
  const { voucherCount, totalPrice } = widget;
  const [count, setCount] = useState(voucherCount[currentVoucher]);
  const voucherIndex = currentVoucher;

  useEffect(() => {
    dispatch(setVoucherByIndex({ voucherIndex, count }));
  }, [count]);

  return (
    <div className="relative ">
      <div className="w-[340px] h-[30px] mt-[18px] ml-[28px] mb-[19px]">
        <p className="mt-[18px] mb-[19px] text-center left-[94px] text-[22px] leading-[30px] text-black font-bold">
          Voucher Details
        </p>
      </div>
      <div
        className={
          "relative w-[325px] h-[416px] mt-[20px] pt-[29px] px-[21px] ml-[37px] rounded-[16px] text-black bg-white  shadow-[0_20px_30px_0_rgba(16,14,35,0.06)] "
        }
      >
        <div className=" text-[48px] leading-[56.25px] font-bold text-[#054169] ">
          {vouchers[currentVoucher].voucherType === 1 ? (
            "Free"
          ) : vouchers[currentVoucher].voucherDiscountedPrice !== 0 ? (
            <div className="flex">
              {/* <div className="italic line-through mr-[20px]">
                ${vouchers[currentVoucher].voucherUsualPrice}
              </div> */}
              <div>${vouchers[currentVoucher].voucherDiscountedPrice}</div>
            </div>
          ) : (
            "$" + vouchers[currentVoucher].voucherUsualPrice
          )}
        </div>
        <div className="absolute top-[40px] right-[20px]  h-[24px] mt-[6px]">
          <div className="flex items-center">
            <div
              onClick={() => {
                if (count !== 0) setCount(count - 1);
              }}
              className={`${"bg-[#F7F8FA]"} cursor-pointer w-[24px] h-[24px] text-[30px] flex items-center justify-center font-[100]   leading-[20px] text-[#999999] rounded-full `}
            >
              -
            </div>
            <div className="text-[14px] font-bold text-user-gray mx-[12px]">
              {count}
            </div>
            <div
              onClick={() => {
                setCount(count + 1);
              }} // onClick={() => {
              //   setCount(count + 1);
              // }}
              className="cursor-pointer w-[24px] h-[24px]  text-[24px] flex items-center justify-center font-[100] bg-user-green  leading-[20px] text-white rounded-full "
            >
              +
            </div>
          </div>
        </div>
        <div className="mt-[19px] text-[24px] leading-[18px]  font-bold">
          Chrismas Voucher
        </div>
        <div className="mt-[7px] text-[14px] italic font-[300]">
          3 Course Meal With Wine Pairing
        </div>
        <div className="mt-[7px] text-[12px] leading-[15px]  font-bold">
          EXPIRY:{" "}
          {/* {voucherType === 1 ? "" : expiryOptions[voucherExpiryTerm - 1]} */}
        </div>
        <div className="mt-[37px] font-[600] text-[12px]">Terms</div>
        <div className="font-[300] text-[12] h-[143px] italic overflow-auto">
          Christmas Voucher 3 Course Meal with Wine Pairing Expiry: 3 Months
          Terms Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        </div>
        <div
          onClick={() => {
            setShowPage(5);
          }}
          className="absolute cursor-pointer left-0 bottom-0 rounded-b-[16px] h-[43px] w-full bg-[#198DDB] text-white flex items-center justify-center text-[16px] font-bold"
          style={{ background: buttonColor }}
        >
          Checkout
        </div>
      </div>
    </div>
  );
};

export default VoucherDetail;
