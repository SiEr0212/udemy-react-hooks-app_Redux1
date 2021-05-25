import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function HomePage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const loan = useSelector((state) => state.loanReducer.loan);
  const dispatch = useDispatch();

  const applyLoanHandle = () => {
    dispatch({ type: "APPLY" });
  };

  return (
    <div>
      <h1>Balance: {balance}</h1>
      <h1>{loan ? "Loan Applied" : "Loan Needed"}</h1>
      <button
        className="button-style"
        disabled={loan ? true : false}
        onClick={applyLoanHandle}
      >
        {loan ? "Loan Applied" : "Apply for loan"}
      </button>
    </div>
  );
}
