import React, { useState, useEffect } from "react";
import ExpenseHeader from "./sub-components/expense-header/ExpenseHeader";
import ExpenseGraphContainer from "./sub-components/expense-graph/ExpenseGraphContainer";
import ExpenseFooter from "./sub-components/expense-footer/ExpenseFooter";
import styles from "./Home.module.css";
function Home() {
  return (
    <article
      className={`${styles.home__container} primary--background primary--text`}
    >
      <ExpenseHeader />
      <ExpenseGraphContainer />
      <ExpenseFooter />
    </article>
  );
}

export default Home;
