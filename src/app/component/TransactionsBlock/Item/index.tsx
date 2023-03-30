import React from "react";
import {TransactionType} from "../../../../types";

const Item: React.FC<{transaction: TransactionType; pair: boolean}> = ({
  transaction,
  pair,
}) => {
  return (
    <div className="table-item">
      <div id={pair ? "table-item-pair" : undefined}>
        {transaction.blockNumber}
      </div>
      <div id={pair ? "table-item-pair" : undefined}>{transaction.hash}</div>
      <div id={pair ? "table-item-pair" : undefined}>{transaction.from}</div>
      <div id={pair ? "table-item-pair" : undefined}>{transaction.to}</div>
      <div id={pair ? "table-item-pair" : undefined}>
        {transaction.blockConfirmations}
      </div>
      <div id={pair ? "table-item-pair" : undefined}>
        {transaction.timeStamp}
      </div>
      <div id={pair ? "table-item-pair" : undefined}>{transaction.value}</div>
      <div id={pair ? "table-item-pair" : undefined}>{transaction.gas}</div>
    </div>
  );
};
export default Item;
