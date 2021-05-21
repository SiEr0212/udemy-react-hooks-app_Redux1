import React from "react";
import { useSelector } from "react-redux";

export default function HomePage() {
  const balance = useSelector(state => state.balance); 
  return <h1>Balance: {balance}</h1>;
}
