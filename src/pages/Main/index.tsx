import React from "react";
import Header from "../../app/component/Header";
import Footer from "../../app/component/Footer";
import TransactionsBlock from "../../app/component/TransactionsBlock";

const Main: React.FC = () => {
  return (
    <div className="main">
      <Header />
      <TransactionsBlock />
      <Footer />
    </div>
  );
};
export default Main;
