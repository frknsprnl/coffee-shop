import React from "react";
import styles from "./TextAreaField.module.css";

function TextAreaField({ label = "", ...props }) {
  return (
    <div className={styles.inputContainer}>
      <textarea
        {...props}
        className={`${styles.inputField} hover:border-[#cda154] focus:border-[#cda154] ${props.className}`}
        name=""
        id=""
        cols="30"
        rows="4"
        required
      ></textarea>
      <label htmlFor="" className={styles.inputLabel}>
        {label}
      </label>
    </div>
  );
}

export default TextAreaField;
