import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.scss";
import classnames from "classnames";

const Radio = ({ name, value, id, label, className }) => {
  return (
    <div
      className={classnames(className, styles.radioItem)}>
      <input
        className={styles.radioInput}
        type="radio"
        name={name}
        value={value}
        id={id}
      />
      <label htmlFor={id} className={styles.label}></label>
      <label htmlFor={id} className={styles.labelText}>
        {label}
      </label>
    </div>
  );
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Radio;
