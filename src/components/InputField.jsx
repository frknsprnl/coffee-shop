import React from "react";
import styles from "./InputField.module.css";

function InputField({ label = "", ...props }) {
  return (
    <div className={styles.inputContainer}>
      <input
        required
        type="text"
        {...props}
        className={`${styles.inputField} hover:border-[#cda154] focus:border-[#cda154] ${props.className}`}
      />
      <label htmlFor="" className={styles.inputLabel}>
        {label}
      </label>
    </div>
  );
}

export default InputField;
