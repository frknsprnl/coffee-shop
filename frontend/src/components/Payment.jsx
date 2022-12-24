import { useState } from "react";
import InputField from "./InputField";

function Payment() {
  const [cardNumInput, setCardNumInput] = useState("");
  const [cardNumOutput, setCardNumOutput] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNameOutput, setCardNameOutput] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [isCvvFocused, setIsCvvFocused] = useState(false);

  const handleCardNameChange = (e) => {
    let val = e.target.value;
    if (/^\D{0,20}$/.test(val)) {
      setCardName(val);
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
      setCardNumInput(val);
      setCardNumOutput(addSpaces(val));
    }
  };

  const handleExpiryMonth = (e) => {
    let val = e.target.value;

    if (/^\d{0,2}$/.test(val)) {
      setExpiryMonth(e.target.value);
    }
  };

  const handleExpiryYear = (e) => {
    let val = e.target.value;

    if (/^\d{0,4}$/.test(val)) {
      setExpiryYear(e.target.value);
    }
  };

  const handleCVV = (e) => {
    let val = e.target.value;

    if (/^\d{0,3}$/.test(val)) {
      setCvv(e.target.value);
    }
  };

  return (
    <>
      <div className="h-[420px] w-full px-5">
        <h1 className="text-lg md:text-xl font-semibold text-center pb-4">Ödeme</h1>
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
                  {`${expiryMonth} ${
                    expiryMonth.length == 2 || expiryYear.length == 4 ? "/" : ""
                  } ${expiryYear.length === 4 ? expiryYear.substring(2) : ""}`}
                </span>
                <span className="absolute bottom-2 left-3">{cardNameOutput}</span>
              </>
            )}
            {isCvvFocused === true && (
              <span className="absolute top-10 left-12 -scale-x-100">
                {cvv}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-3 md:gap-5 mt-5">
            <InputField
              label="Kart Sahibi"
              value={cardName}
              onChange={handleCardNameChange}
            />
            <InputField
              label="Kart No."
              value={cardNumInput}
              onChange={handleCardNumChange}
            />
            <div className="w-11/12 md:w-3/4 flex gap-3">
              <InputField
                label="Ay"
                value={expiryMonth}
                onChange={handleExpiryMonth}
              />
              <InputField
                label="Yıl"
                value={expiryYear}
                onChange={handleExpiryYear}
              />
              <InputField
                label="CVV"
                value={cvv}
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
