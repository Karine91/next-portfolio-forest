import React from "react";
import classnames from "classnames";

import checkIcon from "../../assets/icons/check.svg";

import styles from "./styles.module.scss";

const Checkbox = ({ name, id, label, className }) => {
  return (
    <div className={classnames(className, styles.root)}>
      <div className={styles.checkbox}>
        <input
          className={styles.checkboxInput}
          id={id}
          type="checkbox"
          name={name}
        />
        <label
          className={styles.checkboxLabel}
          htmlFor={id}>
          <svg
            className={classnames(
              styles.checkboxIconCheck,
              "icon"
            )}>
            <use
              viewBox={checkIcon.viewBox}
              xlinkHref={`#${checkIcon.id}`}></use>
          </svg>
        </label>
      </div>
      <label className={styles.checkboxText} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
