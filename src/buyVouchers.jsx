import React from "react";
import { useSelector } from "react-redux";
import Voucher from "./voucher";

const BuyVouchers = ({ setShowPage }) => {
  const { buttonColor } = useSelector((state) => state.theme);
  const voucher = useSelector((state) => state.voucher);
  const { vouchers, voucherFirstName, voucherLastName } = voucher;
  console.log(
    "🚀 ~ file: buyVouchers.jsx ~ line 8 ~ BuyVouchers ~ vouchers",
    vouchers
  );

  return (
    <div className="relative ">
      <div className="w-[340px] h-[30px] mt-[18px] ml-[28px] mb-[19px]">
        <p className="mt-[18px] mb-[19px] text-center left-[94px] text-[22px] leading-[30px] text-black font-bold">
          Buy Vouchers
        </p>
      </div>
      <div className="pb-[20px] w-[400px] h-[340px] overflow-y-auto">
        {/* <div className="w-[325px] h-[160px] pt-[12px] px-[21px] ml-[37px] rounded-md bg-gradient-to-b from-user-light-blue to-user-blue mt-[12px] shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] ">
          <div className=" text-[48px] leading-[56.25px] text-white font-bold">
            $25
          </div>
          <div className="mt-[3px] text-[14px] leading-[18px] text-white italic font-[300]">
            CHRISTMAS DINNER 2022: 3 Course Meal with Wine Pairing
          </div>
          <div className="h-[0.5px] my-[12px] w-full  bg-white"></div>
          <div className="mt-[12px] text-[12px] leading-[16px] text-white font-bold">
            EXPIRY: 3 MONTHS
          </div>
        </div> */}

        {vouchers.map((voucher) => (
          <Voucher voucher={voucher} />
        ))}

        {/* <div className="w-[325px] h-[160px] mt-[20px] pt-[12px] px-[21px] ml-[37px] text-user-dark-blue rounded-md bg-user-light-gray shadow-[0_1px_4px_0_rgba(0,0,0,0.25)] ">
          <div className="w-full h-[56px] flex justify-between">
            <div className=" text-[48px] leading-[56.25px] font-bold">$100</div>
            <div className="mt-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="27"
                viewBox="0 0 26 27"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13 26.5C20.1797 26.5 26 20.6797 26 13.5C26 6.3203 20.1797 0.5 13 0.5C5.8203 0.5 0 6.3203 0 13.5C0 20.6797 5.8203 26.5 13 26.5ZM11.7601 14.3482L17.106 9.07663C17.572 8.61066 18.3073 8.61066 18.7733 9.07663L19.354 9.65737C19.8206 10.1239 19.8194 10.8593 19.3516 11.3271L13.0366 17.7009L12.7536 17.9381C12.5858 18.07 12.4581 18.1497 12.361 18.1809C12.1854 18.2373 11.7361 18.2633 11.5834 18.2378C11.422 18.2109 11.2874 18.1708 11.1365 18.0927L10.9708 17.972L6.64635 13.7306C6.18038 13.2646 6.18038 12.5293 6.64635 12.0633L7.22709 11.4825C7.69306 11.0166 8.42841 11.0166 8.89438 11.4825L11.7601 14.3482Z"
                  fill="#00B761"
                />
              </svg>
            </div>
          </div>
          <div className="mt-[3px] text-[14px] leading-[18px]  italic font-light">
            CHRISTMAS DINNER 2022: 3 Course Meal with Wine Pairing
          </div>
          <div className="h-[0.5px] mt-[12px] w-full  bg-user-dark-blue"></div>
          <div className="w-full h-[24px] mt-[6px] flex justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="13"
                viewBox="0 0 12 13"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.04781 0.0833435C2.86563 0.0833435 0.262024 2.85834 0.262024 6.25001C0.262024 9.64168 2.86563 12.4167 6.04781 12.4167C9.22999 12.4167 11.8336 9.64168 11.8336 6.25001C11.8336 2.85834 9.22999 0.0833435 6.04781 0.0833435ZM6.04781 10.875C3.66117 10.875 1.70847 8.79376 1.70847 6.25001C1.70847 3.70626 3.66117 1.62501 6.04781 1.62501C8.43444 1.62501 10.3871 3.70626 10.3871 6.25001C10.3871 8.79376 8.43444 10.875 6.04781 10.875Z"
                  fill="#6E6E6E"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.49424 6.25H6.04779V4.70833C6.04779 4.24583 5.75851 3.9375 5.32457 3.9375C4.89064 3.9375 4.60135 4.24583 4.60135 4.70833V6.25V7.02083C4.60135 7.48333 4.89064 7.79167 5.32457 7.79167H6.04779H7.49424C7.92817 7.79167 8.21746 7.48333 8.21746 7.02083C8.21746 6.55833 7.92817 6.25 7.49424 6.25Z"
                  fill="#6E6E6E"
                />
              </svg>
              <p className="text-[12px] leading-[16px]  font-bold ml-[4px]">
                EXPIRY: 3 MONTHS
              </p>
            </div>
            <div className="flex items-center">
              <div className="w-[24px] h-[24px]  text-[24px] flex items-center justify-center font-[100]   leading-[20px] text-white rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  viewBox="0 0 10 2"
                  fill="none"
                >
                  <line
                    x1="0.9"
                    y1="1.1"
                    x2="9.1"
                    y2="1.1"
                    stroke="#999999"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="text-[14px] font-bold text-user-gray mx-[12px]">
                1
              </div>
              <div className="w-[24px] h-[24px]  text-[24px] flex items-center justify-center font-[100] bg-user-green  leading-[20px] text-white rounded-full ">
                +
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="mx-[37px] mt-[30px] flex justify-between items-end">
        <button
          onClick={() => {
            setShowPage(3);
          }}
          className=" rounded-md w-[130px] h-[50px] bg-light-sky text-white text-[16px]"
          style={{ backgroundColor: buttonColor }}
        >
          Checkout
        </button>
        <p className="p-[5px] font-bold">Total: $100</p>
      </div>
    </div>
  );
};

export default BuyVouchers;
