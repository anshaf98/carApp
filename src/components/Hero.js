import React from "react";
import styles from "../style/Hero.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className={styles.hero} style={{ border: "2px solid red" }}>
      <form>
        <div className={styles.text}>
          <label>Where</label>
          <input
            className={styles.textInput}
            type="text"
            placeholder="Search Location"
          />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label>From</label>
          <input type="date" />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label>Until</label>
          <input type="date" />
        </div>
        <div className={styles.search}>
          <AiOutlineSearch className={styles.icon} />
          <button>Search for cars</button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
