import React from "react";

import axios from "axios";
import pPicture from "./assets/imageP.svg";

import { useSelector } from "react-redux";

import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { array } from "yup/lib/locale";

const API_URL = process.env.REACT_APP_BACKEND_API;

const Checkout = ({ setShowPage, setShowWidget }) => {
  const { buttonColor } = useSelector((state) => state.theme);
  const voucher = useSelector((state) => state.voucher);
  const { vouchers, voucherFirstName, voucherLastName } = voucher;
  const widget = useSelector((state) => state.widget);
  const { voucherCount, totalPrice } = widget;
  const integration = useSelector((state) => state.integration);
  const { secretKey, publishableKey } = integration;
  const stripePromise = loadStripe(publishableKey);

  var m_total = 0;
  const vouchersNum = vouchers.length;
  console.log(
    "🚀 ~ file: checkout.jsx:28 ~ Checkout ~ vouchersNum",
    voucherCount
  );

  for (let i = 0; i < vouchersNum; i++) {
    if (vouchers[i].voucherType !== 1) {
      if (vouchers[i].voucherDiscountedPrice === 0)
        m_total += vouchers[i].voucherUsualPrice * voucherCount[i];
      else m_total += vouchers[i].voucherDiscountedPrice * voucherCount[i];
    }
  }
  console.log("m_total", m_total);
  let metaData = {};
  for (let i = 0; i < vouchersNum; i++) {
    if (voucherCount[i] === 0) continue;
    const title = vouchers[i].voucherTitle;
    const price =
      vouchers[i].voucherType !== 1
        ? vouchers[i].voucherDiscountedPrice !== 0
          ? "$" + vouchers[i].voucherDiscountedPrice
          : "$" + vouchers[i].voucherUsualPrice
        : "free";
    const amount = voucherCount[i];
    const temp = "Title:" + title + ", price:" + price;

    metaData[temp] = amount;
  }
  const [clientSecret, setClientSecret] = useState("");
  const getClientSecret = async () => {
    console.log("getClientSecret");
    const response = await fetch(API_URL + "/stripeApi/getClientSecret", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: m_total * 100,
        currency: "USD",
        metaData: metaData,
      }),
    });
    const content = await response.json();
    setClientSecret(content.clientSecret);
    console.log(
      "🚀 ~ file: checkout.jsx:38 ~ getClientSecret ~ content",
      content
    );
  };
  // getClientSecret();

  useEffect(() => {
    getClientSecret();
  }, []);

  if (!clientSecret) {
    //show error message and return forward page
    return;
  }
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };
  console.log("🚀 ~ file: checkout.jsx:64 ~ Checkout ~ options", options);

  return (
    <div className="relative text-user-gray overflow-auto h-[848px] ">
      <div className="w-full h-[480px] overflow-y-auto">
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
                  {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                      <CheckoutForm
                        setShowPage={setShowPage}
                        total={m_total}
                        setShowWidget={setShowWidget}
                      />
                    </Elements>
                  )}
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
      {/* <div className="w-[327px] h-[32px] mt-[32px] ml-[36px] flex justify-between">
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
      </div> */}
    </div>
  );
};

export default Checkout;
