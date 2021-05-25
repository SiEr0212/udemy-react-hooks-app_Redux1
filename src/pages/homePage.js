import React from "react";
import { useSelector } from "react-redux";

export default function HomePage() {
  const balance = useSelector((state) => state.balance);
  return (
    <div>
      <h1>Balance: {balance}</h1>
      <h1>Loan needed</h1>
      <button className="button-style">Apply for loan</button>
    </div>
  );
}
