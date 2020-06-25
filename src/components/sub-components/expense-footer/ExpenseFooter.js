import React, { useState, useEffect } from "react";
import { MdLocalGasStation, MdShoppingCart } from "react-icons/md";
import SpendingCard from "./SpendingCard";
import styles from "./ExpenseFooter.module.css";
function ExpenseFooter() {
  return (
    <div className={styles.footer_head__row}>
      <div className={styles.footer_head__col}>
        <h3>Spending Breakdown</h3>
      </div>
      <div className={styles.footer_head__col_type2}>
        <SpendingCard type="shopping" />
        <SpendingCard type="shell" />
      </div>
    </div>
  );
}

export default ExpenseFooter;
