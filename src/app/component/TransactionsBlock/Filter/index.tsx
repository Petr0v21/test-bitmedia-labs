import React from "react";
import search from "../../../../static/images/search.svg";
import arrow from "../../../../static/images/arrow-down.svg";

const Filter: React.FC<{
  getTransactions: (filter: {
    hash?: string;
    blockNumber?: string;
    address?: string;
  }) => Promise<void>;
  setField: React.Dispatch<React.SetStateAction<string>>;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  value: string;
  field: string;
}> = ({getTransactions, setCurrentPage, field, setField, value, setValue}) => {
  return (
    <div className="filter">
      <div className="filter-input">
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <div className="select-styled">
          <div className="select-input">
            <input value={field} readOnly />
            <img alt="arrow" src={arrow} />
          </div>
          <div className="content">
            <p onClick={() => setField("address")}>address</p>
            <p onClick={() => setField("blockNumber")}>blockNumber</p>
            <p onClick={() => setField("hash")}>id transaction</p>
          </div>
        </div>
      </div>
      <div
        className="find-button"
        onClick={() => {
          setCurrentPage(1);
          getTransactions({[field]: value});
        }}
      >
        <img alt="find" src={search} />
      </div>
    </div>
  );
};
export default Filter;
