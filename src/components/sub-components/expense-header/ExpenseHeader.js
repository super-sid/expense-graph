import React from "react";
import { IoIosExit } from "react-icons/io";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import styles from "./ExpenseHeader.module.css";
function ExpenseHeader({ balance, spending }) {
  return (
    <header className={`${styles.main__head}`}>
      <div className={styles.main__head_row}>
        <div className={styles.main__head_col}>Expenses</div>
        <div className={styles.main__head_col}>
          <IoIosExit style={{ fontSize: "xx-large" }} />
        </div>
      </div>
      <div className={styles.main__head_row}>
        <div className={styles.main__head_col}>
          <small className="grey--text">Card Balance</small>{" "}
          <h3>{`$${balance}`}</h3>
        </div>
        <div className={`${styles.main__head_col} ${styles.profit_and_loss}`}>
          <small className={`green--text`}>
            <span className={styles.profit_pad}>
              <BsArrowUp />
            </span>
            <span>${spending[2].Rent}</span>
          </small>
          <small className={`red--text`}>
            <span className={styles.loss_pad}>
              <BsArrowDown />
            </span>
            <span>
              ${Number(spending[0].Shopping) + Number(spending[1].Bills)}
            </span>
          </small>
        </div>
      </div>
    </header>
  );
}

export default ExpenseHeader;
