import axios from "axios";
import { useEffect, useState } from "react";

import Layout from "./layout";
const API_URL = "http://localhost:5000/api";
const subDomain = "https://custdelight.com/xxxx";
const App = () => {
  const [showWidget, setShowWidget] = useState(false);
  const [visibleWidget, setVisibleWidget] = useState(false);
  const getTemplatedData = (data) => {
    const { id, _id, __v, membershipId, voucherId, ...temp } = data;
    return temp;
  };
  const setAllData = (data) => {
    const settingData = getTemplatedData(data.setting);
    console.log(
      "🚀 ~ file: App.jsx ~ line 16 ~ setAllData ~ settingData",
      settingData
    );
    const themeData = getTemplatedData(data.theme);
    console.log(
      "🚀 ~ file: App.jsx ~ line 17 ~ setAllData ~ themeData",
      themeData
    );
    const { membership, voucher, ...moudleTemp } = data.module;

    const membershipData = getTemplatedData(membership[0]);
    console.log(
      "🚀 ~ file: App.jsx ~ line 23 ~ setAllData ~ membershipData",
      membershipData
    );
    const voucherData = getTemplatedData(voucher[0]);
    console.log(
      "🚀 ~ file: App.jsx ~ line 25 ~ setAllData ~ voucherData",
      voucherData
    );
    console.log(
      "🚀 ~ file: App.jsx ~ line 26 ~ setAllData ~ moudleTemp",
      moudleTemp
    );
    const moduleData = getTemplatedData(moudleTemp);
    console.log(
      "🚀 ~ file: App.jsx ~ line 21 ~ setAllData ~ moduleData",
      moduleData
    );
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.post(API_URL + "/subdomain", {
        subDomain,
      });
      console.log(data);
      if (data.data.widget) {
        localStorage.setItem("widget", JSON.stringify(data.data.widget));
        setAllData(data.data.widget);
        setVisibleWidget(true);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {visibleWidget && (
        <div>
          <button
            onClick={() => {
              setShowWidget(!showWidget);
            }}
            className="z-10 absolute transition bottom-4 right-4 p-2 rounded-full h-[64px] w-[64px] bg-light-sky shadow-md hover:shadow-lg text-white"
            type="button"
          >
            {showWidget && (
              <svg
                className="text-white h-13 w-13"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
            {!showWidget && (
              <img src="./assets/custdelight-white-low-icon-low.png" alt="" />
            )}
          </button>
          {showWidget && (
            <div className="absolute right-4 bottom-10 ">
              <Layout setShowWidget={setShowWidget} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
