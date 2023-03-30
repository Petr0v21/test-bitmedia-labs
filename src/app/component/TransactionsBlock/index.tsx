import React, {useEffect, useState} from "react";
import {TransactionType} from "../../../types";
import Filter from "./Filter";
import ItemsList from "./ItemsList";
import Pagination from "./Pagination";

const TransactionsBlock: React.FC = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [pages, setPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [value, setValue] = useState("");
  const [field, setField] = useState("address");

  const getTransactions = async (filter: {
    hash?: string;
    blockNumber?: string;
    address?: string;
  }) => {
    fetch(
      `https://test-bitmedia-labs-back.onrender.com/api/transactions/${currentPage}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(filter),
      }
    )
      .then((response) => {
        if (response.status === 400) {
          alert("Error!");
          return;
        }
        return response.json();
      })
      .then((json) => {
        setPages(json.count);
        setTransactions(json.transactions);
      });
  };

  useEffect(() => {
    if (value.length) {
      getTransactions({[field]: value});
    } else {
      getTransactions({});
    }
  }, [currentPage]);
  return (
    <div className="transactions-wrapped">
      <Filter
        getTransactions={getTransactions}
        value={value}
        setValue={setValue}
        field={field}
        setField={setField}
        setCurrentPage={setCurrentPage}
      />
      <ItemsList transactions={transactions} />
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
export default TransactionsBlock;
