import { Alert } from "@material-tailwind/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
const Voucher = (props) => {
  const { voucher, voucherIndex, setCurrentVoucher, setShowPage } = props;
  const dispatch = useDispatch();
  const widget = useSelector((state) => state.widget);
  const { voucherCount, totalPrice } = widget;
  const {
    voucherTitle,
    voucherType,
    voucherExpiryTerm,
    voucherUsualPrice,
    voucherDiscountedPrice,
    voucherTerm,
  } = voucher;
  const [isSelect, setSelect] = useState(false);
  const [count, setCount] = useState(voucherCount[voucherIndex]);

  useEffect(() => {
    dispatch(setVoucherByIndex({ voucherIndex, count }));
    if (voucherType !== 1) {
      // if (voucherDiscountedPrice === 0)
      //   dispatch(addTotalPrice(voucherUsualPrice));
      // else dispatch(addTotalPrice(voucherDiscountedPrice));
    }
  }, [count]);
  return (
    <div
      className={
        "relative w-[325px] h-[170px] mt-[20px] pt-[29px] px-[21px] ml-[37px] rounded-[16px] text-black bg-white  shadow-[0_20px_30px_0_rgba(16,14,35,0.06)] "
      }
    >
      <div
        onClick={() => {
          setCurrentVoucher(voucherIndex);
          setShowPage(6);
        }}
      >
        <div className="w-full h-[56px] flex justify-between text-[#054169]">
          <div className=" text-[48px] leading-[56.25px] font-bold">
            {voucherType === 1 ? (
              "Free"
            ) : voucherDiscountedPrice !== 0 ? (
              <div className="flex">
                <div className="italic line-through mr-[20px]">
                  ${voucherUsualPrice}
                </div>
                <div>${voucherDiscountedPrice}</div>
              </div>
            ) : (
              "$" + voucherUsualPrice
            )}
          </div>
        </div>
        <div className="mt-[5px] text-[14px] leading-[18px]  font-bold">
          Chrismas Voucher
        </div>
        <div className="text-[14px] italic ">
          3 Course Meal With Wine Pairing
        </div>
        <div className="mt-[5px] text-[12px] leading-[15px]  font-bold">
          EXPIRY:{" "}
          {voucherType === 1 ? "" : expiryOptions[voucherExpiryTerm - 1]}
        </div>
      </div>

      {count === 0 && (
        <div className="absolute bottom-[19px] right-0  h-[24px] mt-[6px]">
          <div
            onClick={() => {
              setCount(count + 1);
            }}
            className="cursor-pointer w-[38px] h-[43px] bg-[#00B761] rounded-tl-[16px] rounded-br-[16px] text-[25px] text-white flex items-center justify-center"
          >
            +
          </div>
        </div>
      )}
      {count !== 0 && (
        <div className="absolute bottom-[10px] right-[10px]  h-[24px] mt-[6px]">
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
              }}
              className="cursor-pointer w-[24px] h-[24px]  text-[24px] flex items-center justify-center font-[100] bg-user-green  leading-[20px] text-white rounded-full "
            >
              +
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Voucher;
