import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function WithdrawPage() {
  const balance = useSelector((state) => state.balanceReducer.balance);
  const dispatch = useDispatch();
  const onWithrawHandle = () => {
    dispatch({ type: "WITHDRAW", payload: 10 });
  };
  return (
    <div>
      <h1> Balance: {balance} </h1>
      <button onClick={onWithrawHandle}>Withraw</button>
    </div>
  );
}
