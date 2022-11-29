import React from "react";
import pPicture from "./assets/imageP.svg";
import image4 from "./assets/image4.png";
import vector from "./assets/Vector.svg";
import mastercard from "./assets/Mastercard.svg";
import aExpress from "./assets/American Express.svg";
import discover from "./assets/Discover.svg";
import cvcCard from "./assets/CVC Card.svg";
import stripe from "./assets/stripe.svg";
import visa from "./assets/Visa.svg";
import { useSelector } from "react-redux";

const Checkout = ({ setShowPage }) => {
  const { headerColor, buttonColor } = useSelector((state) => state.theme);
  const voucher = useSelector((state) => state.voucher);
  const { vouchers, voucherFirstName, voucherLastName } = voucher;
  const widget = useSelector((state) => state.widget);
  const { voucherCount, totalPrice } = widget;

  var m_total = 0;
  const vouchersNum = vouchers.length;

  for (let i = 0; i < vouchersNum; i++) {
    if (vouchers[i].voucherType !== 1) {
      if (vouchers[i].voucherDiscountedPrice === 0)
        m_total += vouchers[i].voucherUsualPrice * voucherCount[i];
      else m_total += vouchers[i].voucherDiscountedPrice * voucherCount[i];
    }
  }

  return (
    <div className="relative text-user-gray overflow-auto h-[848px] ">
      <div className="w-[327px] h-[32px] mt-[31px] ml-[36px] flex justify-between">
        <div className="flex items-center">
          <div className="w-[32px] h-[32px] rounded-full  p-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14.6"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.41703 7H15C15.2652 7 15.5196 7.10536 15.7071 7.2929C15.8947 7.48043 16 7.73479 16 8C16 8.26522 15.8947 8.51958 15.7071 8.70711C15.5196 8.89465 15.2652 9 15 9H3.41703L8.00803 13.591C8.1958 13.7786 8.30135 14.0332 8.30144 14.2987C8.30153 14.5641 8.19617 14.8187 8.00853 15.0065C7.82089 15.1943 7.56634 15.2998 7.30088 15.2999C7.03543 15.3 6.7808 15.1946 6.59303 15.007L0.293031 8.707C0.10556 8.51948 0.000244141 8.26517 0.000244141 8C0.000244141 7.73484 0.10556 7.48053 0.293031 7.293L6.59303 0.993005C6.78094 0.805364 7.03569 0.700054 7.30124 0.700241C7.56679 0.700429 7.82139 0.806099 8.00903 0.994005C8.19667 1.18191 8.30198 1.43666 8.30179 1.70221C8.30161 1.96776 8.19594 2.22236 8.00803 2.41L3.41703 7Z"
                fill="#8792A2"
              />
            </svg>
          </div>

          <div className="w-[32px] h-[32px] rounded-full">
            <img src={pPicture} alt="" />
          </div>
          <p className="ml-[8px] mr-[80px] text-center text-[14px] leading-[20px] text-[#1A1F36] font-[500]">
            Restaurant ABC
          </p>
          <select
            className="focus:z-30  text-[12px] bg-white"
            id="country"
            name="country"
            autoComplete="country-name"
          >
            <option>Details</option>
          </select>
        </div>
        <div className="font=[12px] leading-[20px] text-user-gray"></div>
      </div>

      <div className="mt-[32px] ml-[36px] w-[327px] ">
        <div>
          <h1 className="sr-only">Checkout</h1>

          <div className="relative">
            <div className="">
              <div className="max-w-lg ">
                <form className="grid grid-cols-6">
                  <div className="col-span-6 mt-[32px]">
                    <label
                      className="block mb-[8px] text-[14px] font-[600] text-gray-600 "
                      htmlFor="email"
                    >
                      Email
                    </label>

                    <input
                      className="focus:outline-none focus:ring-0  bg-white rounded-[8px] shadow-[0_2px_5px_0_rgba(0,0,0,0.08)] border-[#3C42571F] border-[1px] w-full h-[40px] text-sm p-2.5"
                      type="email"
                      id="email"
                    />
                  </div>
                  <div className="col-span-6 mt-[32px]">
                    <label
                      className="block mb-[8px] text-[14px] font-[600] text-gray-600 "
                      htmlFor="email"
                    >
                      Card information
                    </label>

                    <div className="rounded-[8px] shadow-[0_2px_5px_0_rgba(0,0,0,0.08)] border-[#3C42571F] border-[1px] w-full h-[80px] text-[16px] font-[500] ">
                      <div>
                        <div className="flex justify-between px-[12px] py-[9px] rounded-t-[8px]  w-full h-[40px]  ">
                          <input
                            className="focus:outline-none focus:ring-0 bg-white"
                            type="text"
                            id="cardinformation"
                            placeholder="1234 1234 1234 1234"
                          />
                          <div className="flex items-center">
                            <div>
                              <img src={visa} alt="" />
                            </div>
                            <div>
                              <img
                                className="ml-[8px]"
                                src={mastercard}
                                alt=""
                              />
                            </div>
                            <div>
                              <img className="ml-[8px]" src={aExpress} alt="" />
                            </div>
                            <div>
                              <img className="ml-[8px]" src={discover} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between rounded-b-[8px]  border-t w-full h-[40px] ">
                          <div className="px-[12px] py-[9px] rounded-b-l-[8px]  border-r  w-[163px] h-[40px] ">
                            <input
                              // type="date"
                              id="date"
                              className="focus:outline-none focus:ring-0 w-full bg-white"
                              placeholder="MM / YY"
                            />
                          </div>

                          <div className="flex justify-between px-[12px] py-[9px] rounded-b-l-[8px]  border-r  w-[163px] h-[40px] ">
                            <input
                              type="text"
                              id="cvc"
                              className="focus:outline-none focus:ring-0 w-full bg-white"
                              placeholder="CVC"
                            />
                            <img src={cvcCard} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 mt-[32px]">
                    <label
                      className="block mb-[8px] text-[14px] font-[600] text-gray-600 "
                      htmlFor="email"
                    >
                      Name on card
                    </label>

                    <input
                      className="bg-white focus:outline-none focus:ring-0 rounded-[8px] shadow-[0_2px_5px_0_rgba(0,0,0,0.08)] border-[#3C42571F] border-[1px] w-full h-[40px] text-sm p-2.5"
                      type="text"
                      id="cardname"
                    />
                  </div>

                  <div className="col-span-6 mt-[32px]">
                    <label
                      className="block mb-[8px] text-[14px] font-[600] text-gray-600 "
                      htmlFor="email"
                    >
                      Country or region
                    </label>

                    <div className="rounded-[8px] shadow-[0_2px_5px_0_rgba(0,0,0,0.08)] border-[#3C42571F] border-[1px] w-full h-[80px] text-[16px] font-[500] ">
                      <div>
                        <div className="px-[12px] py-[9px] rounded-t-[8px]  w-full h-[40px]  ">
                          <div>
                            <label className="sr-only" htmlFor="country">
                              Country
                            </label>

                            <select
                              className="bg-white focus:outline-none focus:ring-0 relative w-full focus:z-30 text-black text-[16px]"
                              id="country"
                              name="country"
                              autoComplete="country-name"
                            >
                              <option>United States</option>
                              <option>England</option>
                              <option>Wales</option>
                              <option>Scotland</option>
                              <option>France</option>
                              <option>Belgium</option>
                              <option>Japan</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="rounded-b-[8px]  border-t w-full h-[40px] ">
                          <div className="px-[12px] py-[9px] w-full h-[40px] ">
                            <input
                              type="text"
                              id="zip"
                              className="bg-white focus:outline-none focus:ring-0  w-full"
                              placeholder="ZIP"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-6 mt-[32px]">
                    <div
                      onClick={() => {
                        setShowPage(4);
                      }}
                      className="cursor-pointer text-[18px] font-[500] flex justify-center w-full h-[48px] py-[12px] text-white rounded-[4px] shadow-[0_1px_1px_0_rgba(0,0,0,0.08)] "
                      // type="submit"
                      style={{ background: buttonColor }}
                    >
                      Pay ${m_total}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center mt-[64px]">
          <div className="text-[12px] mr-[4px]">powered by</div>
          <img src={stripe} alt="" />
        </div>
        <div className="mt-[8px] mb-[46px] flex justify-center text-[12px]">
          <div className="mr-[20px]">Terms</div>
          <div className="">Privacy </div>
        </div> */}
      </div>
    </div>
  );
};

export default Checkout;
