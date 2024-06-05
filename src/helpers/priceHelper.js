export const formattedPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
};

export const converter = (price) => {
  var formatted = parseFloat(price).toLocaleString("en-US", {
    style: "currency",
    currency: "US",
  });
  document.getElementById("priceInput").value = formatted;
};
