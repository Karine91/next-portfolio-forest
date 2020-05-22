import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import AvaImg from "../../assets/images/ava.jpg";

import LoginSymbol from "../../assets/icons/login.svg";
import PasswordSymbol from "../../assets/icons/password.svg";

import classnames from "classnames";
import FormField from "../FormField";
import Checkbox from "../Checkbox";
import Radio from "../Radio";

import Socials from "../Socials";

import styles from "./styles.module.scss";

const WelcomeForm = React.forwardRef(
  ({ isFlipped, toggleFlip }, ref) => {
    return (
      <div
        ref={ref}
        className={classnames(styles.WelcomeForm, {
          [styles.WelcomeFormFlipped]: isFlipped,
        })}>
        <div className={styles.WelcomeFormFront}>
          <div className={styles.userInfo}>
            <div className={styles.user}>
              <div className={styles.userPicture}>
                <img
                  className={styles.userImg}
                  src={AvaImg}
                  alt="Karine Hiulumian"
                />
              </div>
              <div className={styles.userName}>
                Karine Hiulumian
              </div>
              <div className={styles.userDescribe}>
                Personal developer website
              </div>

              <Socials></Socials>
            </div>
          </div>
          <div className={styles.navigation}>
            <Link href="/works">
              <div className={styles.navigationItem}>
                <a className={styles.navigationLink}>
                  My works
                </a>
              </div>
            </Link>

            <Link href="/about">
              <div className={styles.navigationItem}>
                <a className={styles.navigationLink}>
                  About me
                </a>
              </div>
            </Link>
            <Link href="/blog">
              <div className={styles.navigationItem}>
                <a className={styles.navigationLink}>
                  Blog
                </a>
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.WelcomeFormBack}>
          <div className={styles.userInfo}>
            <div className={styles.formContent}>
              <h2
                className={classnames(
                  styles.title,
                  "heading-2 heading-2_offset-no"
                )}>
                Authorization
              </h2>
              <div className={styles.form}>
                <form id="formAuthorize" name="form_auth">
                  <div className={styles.innerForm}>
                    <FormField
                      name="username"
                      className={styles.field}
                      placeholder="Login"
                      addon={
                        <div className={styles.fieldIcon}>
                          <svg
                            className={classnames(
                              styles.icon,
                              "icon"
                            )}>
                            <use
                              xlinkHref={`#${LoginSymbol.id}`}></use>
                          </svg>
                        </div>
                      }></FormField>
                    <FormField
                      name="password"
                      type="password"
                      className={styles.field}
                      placeholder="Password"
                      addon={
                        <div className={styles.fieldIcon}>
                          <svg
                            className={classnames(
                              styles.icon,
                              "icon"
                            )}>
                            <use
                              xlinkHref={`#${PasswordSymbol.id}`}></use>
                          </svg>
                        </div>
                      }></FormField>
                    <Checkbox
                      className={styles.checkbox}
                      name="no_robot"
                      id="no_robot"
                      label="I'm human"></Checkbox>
                    <div className={styles.confirm}>
                      <div
                        className={styles.confirmQuestion}>
                        Are you definitely not a robot?
                      </div>
                    </div>
                    <div className={styles.radioGroup}>
                      <Radio
                        className={styles.radioItem}
                        label="Yes"
                        name="confirm_robot"
                        value="1"
                        id="no-robot"></Radio>
                      <Radio
                        className={styles.radioItem}
                        label="Not sure"
                        name="confirm_robot"
                        value="0"
                        id="robot"></Radio>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.navigation}>
            <div
              className={styles.navigationItem}
              onClick={toggleFlip}>
              <a href="#" className={styles.navigationLink}>
                Back to home
              </a>
            </div>
            <div className={styles.navigationItem}>
              <button
                className={classnames(
                  styles.navigationLink,
                  styles.formBtn
                )}
                type="submit"
                form="formAuthorize">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

WelcomeForm.propTypes = {};

export default WelcomeForm;
