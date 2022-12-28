import { useState, useEffect } from "react";
import InputField from "./InputField";

function Payment({formData, setFormData}) {
  const [cardNumOutput, setCardNumOutput] = useState("");
  const [cardNameOutput, setCardNameOutput] = useState("");
  const [isCvvFocused, setIsCvvFocused] = useState(false);
  

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const updateFormData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleCardNameChange = (e) => {
    let val = e.target.value;

    if (/^\D{0,20}$/.test(val)) {
      updateFormData("cardName", val);
      setCardNameOutput(val.toLocaleUpperCase());
    }
  };

  const addSpaces = (string) => {
    return string.replace(/(.{4})/g, "$1 ").trim();
  };

  const handleCardNumChange = (e) => {
    let val = e.target.value;
    // only allow numeric inputs & max length is 16 chars.
    if (/^\d{0,16}$/.test(val)) {
      updateFormData("cardNum", val);
      setCardNumOutput(addSpaces(val));
    }
  };

  const handleExpiryMonth = (e) => {
    let val = e.target.value;

    if (/^(0?[0-9]|1[0-2])?$/.test(val)) {
      if (val === "00") {
        updateFormData("expiryMonth", "01");
      } else if (val > 1 && val.length === 1) {
        updateFormData("expiryMonth", "0" + val);
      } else {
        updateFormData("expiryMonth", val);
      }
    }
  };

  const handleExpiryYear = (e) => {
    let val = e.target.value;

    if (/^\d{0,2}$/.test(val)) {
      if (val < 22 && val.length === 2) {
        updateFormData("expiryYear", "");
      } else {
        updateFormData("expiryYear", val);
      }
    }
  };

  const handleCVV = (e) => {
    let val = e.target.value;

    if (/^\d{0,3}$/.test(val)) {
      updateFormData("cvv", val);
    }
  };

  return (
    <>
      <div className="h-[420px] w-full px-5">
        <h1 className="text-lg md:text-xl font-semibold text-center pb-4">
          Ödeme
        </h1>
        <div className="flex flex-col">
          <div
            className={`border-[1.6px] rounded-xl w-64 h-36 m-auto relative overflow-hidden ${
              isCvvFocused === true ? "-scale-x-100" : ""
            } duration-500`}
          >
            {isCvvFocused === false && (
              <>
                <span className="absolute top-9 left-3 text-xl font-semibold text-[#cda154]">
                  {cardNumOutput}
                </span>
                <span className="absolute bottom-10 left-12">
                  {`${formData.expiryMonth} ${
                    formData.expiryMonth.length == 2 ||
                    formData.expiryYear.length == 2
                      ? "/"
                      : ""
                  } ${formData.expiryYear}`}
                </span>
                <span className="absolute bottom-2 left-3 text-sm">
                  {cardNameOutput}
                </span>
              </>
            )}
            {isCvvFocused === true && (
              <span className="absolute top-10 left-12 -scale-x-100">
                {formData.cvv}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3 md:gap-5 mt-5">
            <InputField
              label="Kart Sahibi"
              value={formData.cardName}
              onChange={handleCardNameChange}
            />
            <InputField
              label="Kart No."
              value={formData.cardNum}
              onChange={handleCardNumChange}
            />
            <div className="w-11/12 md:w-3/4 flex gap-3">
              <InputField
                label="Ay"
                value={formData.expiryMonth}
                onChange={handleExpiryMonth}
              />
              <InputField
                label="Yıl"
                value={formData.expiryYear}
                onChange={handleExpiryYear}
              />
              <InputField
                label="CVV"
                value={formData.cvv}
                onChange={handleCVV}
                onFocus={() => setIsCvvFocused(true)}
                onBlur={() => setIsCvvFocused(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
