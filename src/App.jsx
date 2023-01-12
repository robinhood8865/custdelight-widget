import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "./assets/custdelight-white-low-icon-low.png";
import { loadStripe } from "@stripe/stripe-js";

import Layout from "./Layout";
import { setMemebershipConfigration } from "./Slices/membershipSlice";
import { setModuleConfigration } from "./Slices/moduleSlice";
import { setSettingConfigration } from "./Slices/settingSlice";
import { setThemeConfigration } from "./Slices/themeSlice";
import { setVoucherConfigration } from "./Slices/voucherSlice";
import { setVoucherCount } from "./Slices/widgetSlice";
import { Elements } from "@stripe/react-stripe-js";
import { setIntegrationConfigration } from "./Slices/integrationSlice";
import { useParams, useSearchParams } from "react-router-dom";

const API_URL = process.env.REACT_APP_BACKEND_API;

const succeed = new URLSearchParams(window.location.search).get(
  "redirect_status"
);

const App = () => {
  const dispatch = useDispatch();
  const subDomain = window.location.href;

  const { widgetColor } = useSelector((state) => state.theme);
  const [showWidget, setShowWidget] = useState(false);
  const [showPage, setShowPage] = useState(0);
  const [visibleWidget, setVisibleWidget] = useState(false);
  // const [succeed, setSucceed] = useState("");
  const getTemplatedData = (data) => {
    const { id, _id, __v, membershipId, voucherId, ...temp } = data;
    return temp;
  };

  console.log("🚀 ~ file: App.jsx:41 ~ App ~ succeed", succeed);

  console.log(
    "window.location.href",
    window.location.origin + window.location.pathname
  );
  if (localStorage.getItem("showWidget") && localStorage.getItem("showPage")) {
    setShowWidget(localStorage.getItem("showWidget"));
    setShowPage(parseInt(localStorage.getItem("showPage")));
    localStorage.removeItem("showPage");
    localStorage.removeItem("showWidget");
  }

  useEffect(() => {
    if (succeed) {
      localStorage.setItem("showWidget", true);
      localStorage.setItem("showPage", 4);
      window.location.replace(
        window.location.origin + window.location.pathname
      );
      // setShowWidget(true);
      // setShowPage(4);
    }
  }, [succeed]);

  console.log("🚀 ~ file: App.jsx:39 ~ App ~ succeed", succeed);

  const setAllData = (data) => {
    const integrationData = getTemplatedData(data.integration);
    dispatch(setIntegrationConfigration(integrationData));

    const settingData = getTemplatedData(data.setting);
    dispatch(setSettingConfigration(settingData));

    const themeData = getTemplatedData(data.theme);
    dispatch(setThemeConfigration(themeData));

    const { membership, voucher, ...moudleTemp } = data.module;

    const membershipData = getTemplatedData(membership[0]);
    dispatch(setMemebershipConfigration(membershipData));

    const voucherData = getTemplatedData(voucher[0]);
    dispatch(setVoucherConfigration(voucherData));

    const moduleData = getTemplatedData(moudleTemp);
    dispatch(setModuleConfigration(moduleData));

    const voucherNums = voucherData.vouchers.length;
    console.log(
      "🚀 ~ file: App.jsx ~ line 45 ~ setAllData ~ voucherNums",
      voucherNums
    );
    var voucherCount = [];
    for (let i = 0; i < voucherNums; i++) {
      voucherCount[i] = 0;
    }
    console.log(
      "🚀 ~ file: App.jsx ~ line 50 ~ setAllData ~ voucherCount",
      voucherCount
    );
    dispatch(setVoucherCount(voucherCount));
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
    <div className="z-40 fixed bottom-8 right-4 rounded-full p-2 w-[64px] h-[64px]">
      <div className="">
        {visibleWidget && (
          <div className="z-20">
            <button
              onClick={() => {
                setShowWidget(!showWidget);
              }}
              className="z-50 absolute transition right-4 p-2 rounded-full h-[64px] w-[64px] bg-light-sky shadow-md hover:shadow-lg text-white"
              style={{ backgroundColor: widgetColor }}
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
              {!showWidget && <img src={logo} alt="" />}
            </button>
            {showWidget && (
              <div className="absolute right-4 bottom-10 ">
                <Layout
                  setShowWidget={setShowWidget}
                  showPage={showPage}
                  setShowPage={setShowPage}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
