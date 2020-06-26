import React, { useState, useEffect } from "react";
import ExpenseGraph from "./ExpenseGraph";
import { MONTHS } from "../../../utils/constants";
import styles from "./ExpenseGraph.module.css";

function ExpenseGraphContainer({ datasets }) {
  const [tagMonth, setTagMonth] = useState("Jan");
  const [graphData, setGraphData] = useState([]);
  useEffect(() => {
    let prev = graphData;
    datasets[0].data.forEach((d, i) => {
      let obj = {};
      obj.profit = d;
      obj.loss = datasets[1].data[i];
      prev.push(obj);
    });
    setGraphData([...prev]);
  }, []);
  return (
    <>
      <div className={`${styles.options__row} primary--text`}>
        <div className={styles.options__col}>
          <select className={styles.select__options_input}>
            <option value="daily">Daily</option>
            <option selected value="monthly">
              Monthly
            </option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
        <div className={styles.options__col_type2}>
          {MONTHS.map((month, index) => (
            <span
              key={index.toString()}
              onClick={() => setTagMonth(month)}
              className={
                tagMonth === month
                  ? styles.month__tag_selected
                  : styles.month__tag
              }
            >
              {month}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.options__graph_row}>
        {graphData.length > 0 && <ExpenseGraph data={graphData} />}
      </div>
    </>
  );
}

export default ExpenseGraphContainer;
