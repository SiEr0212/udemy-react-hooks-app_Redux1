import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function DepositPage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const dispatch = useDispatch();
  const onDepositHandle = () => {
    dispatch({ type: "DEPOSIT", payload: 10 });
  };
  return (
    <div>
      <h1> Balance: {balance} </h1>
      <button onClick={onDepositHandle}>Deposit</button>
    </div>
  );
}
