import React from "react";
import { useSelector } from "react-redux";
import { setTotalPrice } from "./Slices/widgetSlice";
import Voucher from "./Voucher";

const BuyVouchers = (props) => {
  const { setShowPage, setCurrentVoucher } = props;
  const voucher = useSelector((state) => state.voucher);
  const { vouchers, voucherFirstName, voucherLastName } = voucher;
  const widget = useSelector((state) => state.widget);
  const { voucherCount, totalPrice } = widget;
  const { headerColor, buttonColor, widgetColor } = useSelector(
    (state) => state.theme
  );

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
    <div className="relative ">
      <div className="w-[340px] h-[30px] mt-[18px] ml-[28px] mb-[19px]">
        <p className="mt-[18px] mb-[19px] text-center left-[94px] text-[22px] leading-[30px] text-black font-bold">
          Buy Vouchers
        </p>
      </div>
      <div className="pb-[20px] w-[400px] h-[333px] overflow-y-auto">
        {vouchers.map((voucher, index) => (
          <div className="cursor-pointer">
            <Voucher
              voucher={voucher}
              voucherIndex={index}
              setShowPage={setShowPage}
              setCurrentVoucher={setCurrentVoucher}
            />
          </div>
        ))}
      </div>
      <div className="mx-[37px] mt-[30px] flex justify-between items-end">
        <button
          onClick={() => {
            setShowPage(7);
          }}
          className=" rounded-md w-[130px] h-[50px] bg-light-sky text-white text-[16px]"
          style={{ backgroundColor: buttonColor }}
        >
          Checkout
        </button>
        <p className="p-[5px] font-bold">Total: ${m_total}</p>
      </div>
    </div>
  );
};

export default BuyVouchers;
