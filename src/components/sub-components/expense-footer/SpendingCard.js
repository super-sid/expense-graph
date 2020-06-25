import React, { useState, useEffect } from "react";
import { MdLocalGasStation, MdShoppingCart } from "react-icons/md";
import styles from "./ExpenseFooter.module.css";
function SpendingCard({ type }) {
  return (
    <div className={styles.footer_head__card}>
      <div
        className={`${styles.footer__icon} ${
          type === "shopping" ? "red--background" : "green--background"
        }`}
      >
        {type === "shopping" ? <MdShoppingCart /> : <MdLocalGasStation />}
      </div>
      <div className={styles.card__title}>
        <h6>{type === "shopping" ? "Shopping" : "Shell"}</h6>
        <small>
          {type === "shopping" ? "17 Monday January" : "17 Monday June"}
        </small>
      </div>
      <div className={`${styles.card__price} red--text`}>
        {type === "shopping" ? "-$279,80" : "-$35,88"}
      </div>
    </div>
  );
}

export default SpendingCard;
