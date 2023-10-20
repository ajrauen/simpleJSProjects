const calculatTip = () => {
  //techically the multiplying/dividing below will cast to number. But this makes it more clear.
  const parsedTip = parseInt(document.getElementById("tip").value);
  const parsedAmount = parseInt(document.getElementById("amount").value);

  if (!parsedAmount) return;

  if (!parsedTip) {
    document.getElementById(
      "total"
    ).innerHTML = `$${parsedAmount}: Not cool bro`;
    return;
  }

  let value = parsedAmount + (parsedAmount * parsedTip) / 100;
  value = parseFloat(value).toFixed(2);

  document.getElementById("total").innerHTML = `$${value}`;
};
