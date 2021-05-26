export const deposit = () => {
  return { type: "DEPOSIT", payload: 10 };
};

export const depositAsync = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(deposit());
    }, 5000);
  };
};
