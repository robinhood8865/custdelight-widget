import React from "react";

const Register = ({ setShowPage }) => {
  return (
    <div className="relative text-user-gray overflow-auto h-[517px] ">
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
            <img src="./assets/imageP.svg" alt="" />
          </div>
          <p className="ml-[8px] mr-[80px] text-center text-[14px] leading-[20px] text-[#1A1F36] font-[500]">
            Restaurant ABC
          </p>
          <select
            className="focus:z-10  text-[12px] bg-white"
            id="country"
            name="country"
            autoComplete="country-name"
          >
            <option>Details</option>
          </select>
        </div>
        <div className="font=[12px] leading-[20px] text-user-gray"></div>
      </div>
      <div className="relative mt-[28px] ml-[116px] w-[168px] h-[168px] ">
        <div className="w-full h-full flex items-center justify-center ">
          <img src="./assets/image4.png" alt="" />
        </div>

        <div className="flex items-center justify-center px-[5px] rounded-full shadow-[0_2px_5px_0_rgba(0,0,0,0.08)] bg-white text-[black] text-[12px] font-[500] mt-[-34px] ml-[45px] h-[20px] w-[70px]">
          <div>1 item</div>
          <div>
            <img
              className="ml-[10px] py-[5px] text-user-gray"
              src="./assets/Vector.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <p className="text-[16px] leading-[24px] mt-[8px] ml-[130px] font-[500]">
        Pay Restaurant ABC
      </p>
      <div className="w-[146px] h-[44px] mt-[8px] ml-[127px] text-[36px] leading-[44px] font-[600] text-[#1A1F36]">
        <p>$ 100.00</p>
      </div>
      <div className="mt-[32px] ml-[36px] w-[327px] ">
        <div>
          <h1 className="sr-only">Checkout</h1>

          <div className="relative">
            <div className="">
              <div className="max-w-lg ">
                <form className="grid grid-cols-6">
                  <div className="col-span-6">
                    <button className="w-full h-[48px] py-[12px] px-[134px] bg-black rounded-[4px] shadow-[0_1px_1px_0_rgba(0,0,0,0.08)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="59"
                        height="24"
                        viewBox="0 0 59 24"
                        fill="none"
                      >
                        <path
                          d="M11.0398 3.0942C10.3577 3.90485 9.26648 4.54424 8.17523 4.4529C8.03882 3.3568 8.57308 2.1922 9.19827 1.47288C9.88031 0.639391 11.0739 0.0456708 12.0401 0C12.1537 1.14177 11.7104 2.2607 11.0398 3.0942ZM12.0287 4.66984C10.4487 4.5785 9.09597 5.57184 8.34573 5.57184C7.58413 5.57184 6.43605 4.71551 5.18566 4.73834C3.56015 4.76118 2.04831 5.68601 1.21851 7.1589C-0.48657 10.1047 0.775188 14.4662 2.42343 16.8639C3.2305 18.0514 4.19671 19.353 5.46984 19.3073C6.67476 19.2617 7.15218 18.5195 8.60718 18.5195C10.0735 18.5195 10.4941 19.3073 11.7673 19.2845C13.0859 19.2617 13.9157 18.0971 14.7227 16.9096C15.6435 15.5623 16.0186 14.2493 16.0413 14.1808C16.0186 14.1579 13.4951 13.1874 13.4723 10.2645C13.4496 7.82112 15.4616 6.65652 15.5525 6.58801C14.4158 4.89819 12.6425 4.71551 12.0287 4.66984ZM21.1566 1.35871V19.1589H23.9074V13.0733H27.7154C31.1938 13.0733 33.6377 10.6755 33.6377 7.20457C33.6377 3.73359 31.2393 1.35871 27.8064 1.35871H21.1566ZM23.9074 3.68792H27.0789C29.466 3.68792 30.83 4.9667 30.83 7.21598C30.83 9.46527 29.466 10.7555 27.0675 10.7555H23.9074V3.68792ZM38.662 19.2959C40.3898 19.2959 41.9926 18.4167 42.7201 17.0238H42.7769V19.1589H45.3232V10.2988C45.3232 7.72978 43.2771 6.07421 40.1284 6.07421C37.207 6.07421 35.0473 7.75262 34.9677 10.059H37.4457C37.6503 8.96289 38.662 8.24358 40.0488 8.24358C41.7312 8.24358 42.6746 9.0314 42.6746 10.4814V11.4634L39.2417 11.6689C36.0476 11.863 34.3198 13.176 34.3198 15.4596C34.3198 17.7659 36.1044 19.2959 38.662 19.2959ZM39.4009 17.1836C37.9345 17.1836 37.0024 16.4757 37.0024 15.3911C37.0024 14.2721 37.9004 13.6213 39.6169 13.5186L42.6746 13.3245V14.3292C42.6746 15.9962 41.2651 17.1836 39.4009 17.1836ZM48.722 24C51.4046 24 52.6664 22.9724 53.769 19.8554L58.6001 6.24548H55.8037L52.5641 16.7612H52.5073L49.2676 6.24548H46.3917L51.0523 19.2046L50.8022 19.9924C50.3816 21.3283 49.6996 21.8421 48.4833 21.8421C48.2673 21.8421 47.8467 21.8192 47.6762 21.7964V23.9315C47.8353 23.9772 48.5174 24 48.722 24Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="mt-[32px] col-span-6">
                    <div className="flex items-center">
                      <div className="h-[0.5px] w-[108px] bg-user-gray"> </div>
                      <div className="">Or pay with card</div>
                      <div className="h-[0.5px] w-[108px] bg-user-gray"> </div>
                    </div>
                  </div>

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
                              <img src="./assets/Vector.svg" alt="" />
                            </div>
                            <div>
                              <img
                                className="ml-[8px]"
                                src="./assets/Mastercard.svg"
                                alt=""
                              />
                            </div>
                            <div>
                              <img
                                className="ml-[8px]"
                                src="./assets/American Express.svg"
                                alt=""
                              />
                            </div>
                            <div>
                              <img
                                className="ml-[8px]"
                                src="./assets/Discover.svg"
                                alt=""
                              />
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
                            <img src="./assets/CVC Card.svg" alt="" />
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
                              className="bg-white focus:outline-none focus:ring-0 relative w-full focus:z-10 text-black text-[16px]"
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
                    <button
                      className="w-full h-[48px] py-[12px] bg-[#3C4257] rounded-[4px] shadow-[0_1px_1px_0_rgba(0,0,0,0.08)] "
                      // type="submit"
                    >
                      Pay $100.00
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[64px]">
          <div className="text-[12px] mr-[4px]">powered by</div>
          <img src="./assets/stripe.svg" alt="" />
        </div>
        <div className="mt-[8px] mb-[46px] flex justify-center text-[12px]">
          <div className="mr-[20px]">Terms</div>
          <div className="">Privacy </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
