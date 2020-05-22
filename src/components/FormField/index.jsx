import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./styles.module.scss";

const FormField = ({
  type,
  addon,
  onFocus,
  onBlur,
  className,
  ...restProps
}) => {
  const [isFocused, setFocused] = useState(false);

  const onFocusHandler = (e) => {
    setFocused(true);
    onFocus(e);
  };

  const onBlurHandler = (e) => {
    setFocused(false);
    onBlur(e);
  };
  return (
    <div
      className={classnames(
        className,
        styles.inputWrapper,
        {
          [styles.inputFocused]: isFocused,
          [styles.inputWithAddon]: addon,
        }
      )}>
      {addon}
      <input
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        className={styles.input}
        type={type}
        {...restProps}
      />
    </div>
  );
};

FormField.propTypes = {
  type: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  addon: PropTypes.node,
};

FormField.defaultProps = {
  type: "text",
  onFocus: () => {},
  onBlur: () => {},
};

export default FormField;
