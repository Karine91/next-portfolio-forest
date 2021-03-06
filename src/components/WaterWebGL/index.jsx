import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import waterInit from "./water";

import styles from "./styles.module.scss";

const WaterBackground = ({ onLoad }) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    waterInit(
      containerRef.current,
      canvasRef.current,
      onLoad
    );
  }, []);
  return (
    <div ref={containerRef} className={styles.Background}>
      <canvas
        ref={canvasRef}
        className={styles["Background-canvas"]}></canvas>
    </div>
  );
};

WaterBackground.propTypes = {};

export default WaterBackground;
