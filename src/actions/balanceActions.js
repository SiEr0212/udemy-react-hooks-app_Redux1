
export function loading() {
return{
    type: "LOADING"
}
};

export function deposit() {
  return { type: "DEPOSIT", payload: 10 };
};

export function depositAsync (){
  return (dispatch) => {
    setTimeout(() => {
      dispatch(deposit());
    }, 5000);
  };
};
