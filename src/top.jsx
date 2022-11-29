import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Top = ({ setShowPage, showPage }) => {
  const { headerColor, buttonColor, widgetColor } = useSelector(
    (state) => state.theme
  );

  return (
    <div className="relative ">
      <div
        className="w-full h-[84px] bg-light-sky rounded-t-md"
        style={{ backgroundColor: headerColor }}
      >
        <div className="flex items-center w-full h-full">
          <div
            onClick={() => {
              switch (showPage) {
                case 1:
                  setShowPage(0);
                  break;
                case 2:
                  setShowPage(1);
                  break;
                case 3:
                  setShowPage(1);
                  break;
                case 4:
                  setShowPage(0);
                  break;
                case 5:
                  setShowPage(0);
                  break;
                case 6:
                  setShowPage(5);
                  break;
                case 7:
                  setShowPage(5);
                  break;
                case 8:
                  setShowPage(7);
                  break;

                default:
                  break;
              }
            }}
            className="ml-[32px] mr-[24px] p-[5px] w-6 h-6 rounded-full cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M5.58252 3.45917L2.04169 7L5.58252 10.5408"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9584 7H2.14087"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-white text-[24px] font-bold">Restaurant ABC</div>
        </div>
      </div>
    </div>
  );
};

export default Top;
