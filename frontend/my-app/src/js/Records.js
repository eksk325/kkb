import React, { useEffect, useState } from "react";
import styles from "../styles/Records.module.css";

function Records() {
  const [records, setRecords] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [test, setTest] = useState([]);

  const [showIncome, setShowIncome] = useState(false);

  useEffect(() => {
    const userEmail = localStorage.getItem("email");

    const fetchData = async () => {
      const response = await fetch(`/api/${userEmail}`, {
        method: "GET",
      });

      const json = await response.json();

      const recordArray = json[0].moneyRecords;

      recordArray.forEach((record) => {
        const newDate = new Date(record.date);
        record.date = newDate.toLocaleDateString("ko-KR");

        if (record.income) {
          setIncomes([...incomes, record]);
        } else {
          setExpenses([...expenses, record]);
        }
      });

      setRecords(recordArray);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.filter}></div>
      <div className={styles.table}>
        <div className={styles.column}>
          <div className={styles.title}>Date</div>
          {records.map((record) => (
            <div>
              {showIncome === record.income ? (
                <div key={record._id} className={styles.element}>
                  {record.date}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className={styles.column}>
          <div className={styles.title}>Category</div>
          {records.map((record) => (
            <div>
              {showIncome === record.income ? (
                <div key={record._id} className={styles.element}>
                  {record.category}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className={styles.column}>
          <div className={styles.title}>Details</div>
          {records.map((record) => (
            <div>
              {showIncome === record.income ? (
                <div key={record._id} className={styles.element}>
                  {record.extraText}
                </div>
              ) : null}
            </div>
          ))}
        </div>
        <div className={styles.column}>
          <div className={styles.title}>Amount</div>
          {records.map((record) => (
            <div>
              {showIncome === record.income ? (
                <div key={record._id} className={styles.element}>
                  {record.amount}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Records;
