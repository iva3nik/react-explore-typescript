import React from "react";
import { useState, useEffect } from "react";

import Gallery from "./components/Gallery/Gallery";

import * as goodsApi from "./utils/GoodsApi";
import { TCard } from "./constants/type";

import s from "./App.module.scss";

function App() {
  const [listCards, setListCards] = useState([]);
  const [showAvailableCards, setShowAvailableCards] = useState(false);

  const handleCheckboxChange = () => {
    setShowAvailableCards(!showAvailableCards);
    // @ts-ignore
    const allCards = JSON.parse(localStorage.getItem("allCards"));
    if (!showAvailableCards) {
      const availableCards = allCards.filter(
        (card: TCard) => card.quantity_available > 0
      );
      setListCards(availableCards);
    } else {
      setListCards(allCards);
    }
  };

  useEffect(() => {
    goodsApi
      .getGoods()
      .then((res) => res.data.products)
      .then((data) => {
        setListCards(data);
        localStorage.setItem("allCards", JSON.stringify(data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={s.page}>
      <h1 className={s.page__title}>Explore</h1>
      <p className={s.page__subtitle}>Buy and sell digital fashion NFT art</p>
      <Gallery
        list={listCards}
        handleCheckboxChange={handleCheckboxChange}
        showAvailableCards={showAvailableCards}
      />
    </div>
  );
}

export default App;
