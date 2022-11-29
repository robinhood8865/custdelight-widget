import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVoucherByIndex } from "./Slices/widgetSlice";

const Summary = ({ setShowPage }) => {
  const dispatch = useDispatch();
  const { buttonColor } = useSelector((state) => state.theme);
  const voucher = useSelector((state) => state.voucher);
  const { vouchers } = voucher;
  const widget = useSelector((state) => state.widget);
  const { voucherCount } = widget;

  var m_total = 0;
  const vouchersNum = vouchers.length;

  for (let i = 0; i < vouchersNum; i++) {
    if (vouchers[i].voucherType !== 1) {
      if (vouchers[i].voucherDiscountedPrice === 0)
        m_total += vouchers[i].voucherUsualPrice * voucherCount[i];
      else m_total += vouchers[i].voucherDiscountedPrice * voucherCount[i];
    }
  }
  const setVoucher = (voucherIndex, count) => {
    dispatch(setVoucherByIndex({ voucherIndex, count }));
  };

  return (
    <div className="relative ">
      <div className="w-[340px] h-[30px] mt-[18px] ml-[28px] mb-[19px]">
        <p className="mt-[18px] mb-[19px] text-center left-[94px] text-[22px] leading-[30px] text-black font-bold">
          Summary
        </p>
      </div>
      <div
        className={
          "relative w-[325px] h-[613px] mt-[20px] pt-[29px] px-[21px] ml-[37px] rounded-[16px] text-black bg-white  shadow-[0_20px_30px_0_rgba(16,14,35,0.06)] "
        }
      >
        {vouchers.map((item, index) => (
          <div className="flex justify-between mb-[16px]">
            <div>
              <div className="text-[48px] leading-[56.25px] font-bold text-[#054169] ">
                {item.voucherType === 1 ? (
                  "Free"
                ) : item.voucherDiscountedPrice !== 0 ? (
                  <div className="flex">
                    {/* <div className="italic line-through mr-[20px]">
                      ${item.voucherUsualPrice}
                    </div> */}
                    <div>${item.voucherDiscountedPrice}</div>
                  </div>
                ) : (
                  "$" + item.voucherUsualPrice
                )}
              </div>
              <div className="text-[16px] font-bold">Christmas Voucher</div>
            </div>
            <div className="  h-[24px] mt-[20px] ">
              <div className="flex items-center">
                <div
                  onClick={() => {}}
                  className={`${"bg-[#F7F8FA]"} cursor-pointer w-[24px] h-[24px] text-[30px] flex items-center justify-center font-[100]   leading-[20px] text-[#999999] rounded-full `}
                >
                  -
                </div>
                <div className="text-[14px] font-bold text-user-gray mx-[12px]">
                  {voucherCount[index]}
                </div>
                <div
                  onClick={() => {
                    setVoucher(index, voucherCount[index] + 1);
                  }}
                  className="cursor-pointer w-[24px] h-[24px]  text-[24px] flex items-center justify-center font-[100] bg-user-green  leading-[20px] text-white rounded-full "
                >
                  +
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="absolute left-[21px] bottom-[69px] text-[16px] font-bold">
          Total: ${m_total}
        </div>

        <div
          onClick={() => {
            setShowPage(8);
          }}
          className="absolute cursor-pointer left-0 bottom-0 rounded-b-[16px] h-[43px] w-full bg-[#198DDB] text-white flex items-center justify-center text-[16px] font-bold"
          style={{ background: buttonColor }}
        >
          Proceed to Payment
        </div>
      </div>
    </div>
  );
};

export default Summary;
