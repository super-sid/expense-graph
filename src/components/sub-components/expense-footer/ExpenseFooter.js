import React from "react";
import SpendingCard from "./SpendingCard";
import styles from "./ExpenseFooter.module.css";
function ExpenseFooter({ spending }) {
  return (
    <div className={styles.footer_head__row}>
      <div className={styles.footer_head__col}>
        <h3>Spending Breakdown</h3>
      </div>
      <div className={styles.footer_head__col_type2}>
        <SpendingCard type="shopping" data={spending[0]} />
        <SpendingCard type="bills" data={spending[1]} />
        <SpendingCard type="rent" data={spending[2]} />
      </div>
    </div>
  );
}

export default ExpenseFooter;
