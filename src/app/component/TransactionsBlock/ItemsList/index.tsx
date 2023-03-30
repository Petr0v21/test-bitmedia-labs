import React from "react";
import {TransactionType} from "../../../../types";
import Item from "../Item";

const ItemsList: React.FC<{transactions: TransactionType[]}> = ({
  transactions,
}) => {
  return (
    <div className="table">
      <div className="table-headers">
        <div>Block number</div>
        <div>Transaction ID</div>
        <div>Sender address</div>
        <div>Recipient's address</div>
        <div>Block confirmations</div>
        <div>Date</div>
        <div>Value</div>
        <div>Transaction Fee</div>
      </div>
      {transactions.map((transaction, index) => (
        <Item
          pair={index % 2 === 1}
          transaction={transaction}
          key={"item" + index}
        />
      ))}
    </div>
  );
};
export default ItemsList;
