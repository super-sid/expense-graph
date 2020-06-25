import React, { useState, useEffect } from "react";
import ExpenseGraph from "./ExpenseGraph";
import styles from "./ExpenseGraph.module.css";

function ExpenseGraphContainer() {
  return (
    <>
      <div className={`${styles.options__row} primary--text`}>
        <div className={styles.options__col}>
          <select className={styles.select__options_input}>
            <option value="">Choose</option>
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <div className={styles.options__row}>
        <ExpenseGraph />
      </div>
    </>
  );
}

export default ExpenseGraphContainer;
