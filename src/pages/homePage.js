import React from "react";
import { useSelector } from "react-redux";

export default function HomePage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  return (
    <div>
      <h1>Balance: {balance}</h1>
      <h1>Loan needed: {loan}</h1>
      <button className="button-style">Apply for loan</button>
    </div>
  );
}
