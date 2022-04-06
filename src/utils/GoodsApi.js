const checkStatusResponse = (res) => {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
};

export const getGoods = () => {
  return fetch("https://artisant.io/api/products", {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  }).then(checkStatusResponse);
};
