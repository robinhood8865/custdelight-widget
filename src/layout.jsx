import React, { useState } from "react";
import Welcome from "./Welcome";
import Register from "./Register";
import Top from "./Top";
import BuyVouchers from "./BuyVouchers";
import Confirm from "./Confirm";
import Checkout from "./Checkout";
import VoucherDetail from "./VoucherDetail";
import Summary from "./Summary";
import Account from "./account";
import Login from "./Login";
import { Toaster } from "react-hot-toast";
import { Elements } from "@stripe/react-stripe-js";

const Layout = ({ setShowWidget, showPage, setShowPage }) => {
  const [currentVoucher, setCurrentVoucher] = useState(-1);

  return (
    <div>
      <Toaster position="bottom-right" containerStyle={{ fontSize: 12 }} />
      <div
        // className={`${showPage < 5 ? "h-[601px]" : "h-[798px]"}
        //    w-[400px]  bg-white rounded-md shadow-[0_20px_30px_0_rgba(28,040,50,0.2)] tracking-[-0.5px]`}
        className="h-[601px] w-[400px]  bg-white rounded-md shadow-[0_20px_30px_0_rgba(28,040,50,0.2)] tracking-[-0.5px]"
      >
        <div
          onClick={() => {
            setShowWidget(false);
          }}
          className="cursor-pointer z-30 absolute top-[15px] h-[20px] w-[20px] right-[15px] rounded-full bg-black p-[2.2px] opacity-50"
        >
          <svg
            className="text-white h-4 w-4 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              // strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        {showPage === 0 && ( // welcome page
          <Welcome
            className="transition
            duration-150
            ease-in-out"
            setShowPage={setShowPage}
          />
        )}
        {showPage === 1 && ( //Account page
          <>
            <Top setShowPage={setShowPage} showPage={showPage} />
            <Account setShowPage={setShowPage} />
          </>
        )}

        {showPage === 2 && ( // register
          <>
            <Top setShowPage={setShowPage} showPage={showPage} />
            <Register setShowPage={setShowPage} />
          </>
        )}
        {showPage === 3 && ( // login
          <>
            <Top setShowPage={setShowPage} showPage={showPage} />
            <Login setShowPage={setShowPage} />
          </>
        )}
        {showPage === 4 && ( // confirm
          <>
            <Top setShowPage={setShowPage} showPage={showPage} />
            <Confirm setShowPage={setShowPage} />
          </>
        )}
        {showPage === 5 && ( // Buy Vouchers page
          <>
            <Top setShowPage={setShowPage} showPage={showPage} />
            <BuyVouchers
              setShowPage={setShowPage}
              setCurrentVoucher={setCurrentVoucher}
            />
          </>
        )}
        {showPage === 6 && ( // Voucher Details page
          <>
            <Top setShowPage={setShowPage} showPage={showPage} />
            <VoucherDetail
              setShowPage={setShowPage}
              currentVoucher={currentVoucher}
            />
          </>
        )}
        {showPage === 7 && ( // Summary
          <>
            <Top setShowPage={setShowPage} showPage={showPage} />
            <Summary setShowPage={setShowPage} />
          </>
        )}
        {showPage === 8 && ( // Checkout
          <>
            <Top setShowPage={setShowPage} showPage={showPage} />

            <Checkout setShowPage={setShowPage} setShowWidget={setShowWidget} />
          </>
        )}
      </div>
      <div className="mt-[30px] w-full">
        <div className="text-user-gray flex justify-center text-[16px]">
          <p className="">Powered by</p>
          <p className="ml-[5px] font-bold">Custdelight</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
