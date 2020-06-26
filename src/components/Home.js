import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import ExpenseHeader from "./sub-components/expense-header/ExpenseHeader";
import ExpenseGraphContainer from "./sub-components/expense-graph/ExpenseGraphContainer";
import ExpenseFooter from "./sub-components/expense-footer/ExpenseFooter";
import Loader from "./common/loader";
import styles from "./Home.module.css";

function Home({
  fetching,
  spendingDates,
  cardBalance,
  datasets,
  onRequestExpense,
}) {
  const triggerRequest = useCallback(onRequestExpense, []);
  useEffect(() => {
    triggerRequest();
  }, [triggerRequest]);
  if (!fetching) {
    return (
      <article
        className={`${styles.home__container} primary--background primary--text`}
      >
        <ExpenseHeader balance={cardBalance} spending={spendingDates} />
        <ExpenseGraphContainer datasets={datasets} />
        <ExpenseFooter spending={spendingDates} />
      </article>
    );
  } else {
    return <Loader />;
  }
}
const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    spendingDates: state.spendingDates,
    cardBalance: state.cardBalance,
    datasets: state.datasets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRequestExpense: () => dispatch({ type: "GET_EXPENSE_REQUEST" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
