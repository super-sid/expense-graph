import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { FaFileInvoice, FaWarehouse } from "react-icons/fa";
import styles from "./ExpenseFooter.module.css";
function SpendingCard({ type, data }) {
  console.log(data);
  return (
    <div className={styles.footer_head__card}>
      <div
        className={`${styles.footer__icon} ${
          type === "shopping" && "red--background"
        } ${type === "rent" && "yellow--background"}  ${
          type === "bills" && "green--background"
        } `}
      >
        {type === "shopping" && <MdShoppingCart />}
        {type === "rent" && <FaWarehouse />}
        {type === "bills" && <FaFileInvoice />}
      </div>
      <div className={styles.card__title}>
        <h6>{type === "shopping" ? "Shopping" : "Shell"}</h6>
        <small>{new Date(Number(data.date)).toDateString()}</small>
      </div>
      <div className={`${styles.card__price} red--text`}>
        {type === "shopping" && `$${data["Shopping"]}`}
        {type === "rent" && `$${data["Rent"]}`}
        {type === "bills" && `$${data["Bills"]}`}
      </div>
    </div>
  );
}

export default SpendingCard;
