import React from "react";
import Card from "../Card/Card";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import s from "./Gallery.module.scss";

type GalleryProps = {
  list: Array<object>;
  showAvailableCards: boolean;
  handleCheckboxChange: () => void;
};

const Gallery: React.FC<GalleryProps> = ({
  list,
  showAvailableCards,
  handleCheckboxChange,
}: GalleryProps) => (
  <section className={s.gallery}>
    <FilterCheckbox
      showAvailableCards={showAvailableCards}
      handleCheckboxChange={handleCheckboxChange}
    />
    <div className={s.gallery__cards}>
      {list.length &&
        list.map((card: any) => <Card key={card.product_id} card={card} />)}
    </div>
  </section>
);

export default Gallery;
