import React from "react";
import styles from "../style/Driver.module.css";

const Driver = () => {
  return (
    <div className={styles.driver} style={{ border: "2px solid cyan" }}>
      <div className={styles.left}>
        <img
          src="https://images.unsplash.com/photo-1541968047768-c92c393e0e79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt="/"
        />
      </div>
      <div className="">
        <h2>
          Find your perfect car <span>to try before you buy</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam
          officiis temporibus culpa similique, consequatur quis obcaecati. Fuga
          ratione sequi commodi recusandae necessitatibus. Debitis quibusdam
          perspiciatis adipisci ratione, expedita unde maiores?
        </p>
        <button>Browser cars</button>
      </div>
    </div>
  );
};

export default Driver;
