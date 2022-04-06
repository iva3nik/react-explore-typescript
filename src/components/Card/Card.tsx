import React from "react";
import { TCard } from "../../constants/type";

import s from "./Card.module.scss";

type CardProprs = {
  card: TCard;
};

const Card: React.FC<CardProprs> = ({ card }: CardProprs) => (
  <section className={s.card} id={`${card.product_id}`}>
    <div className={s.card__content}>
      {card.avatar.original.includes("mp4") ? (
        // добавить playsInline autoPlay loop muted controls в тег video
        <video>
          <source
            src={`https://cdn.artisant.io/api/files/${card.avatar.original}`}
            type="video/mp4"
          />
        </video>
      ) : (
        <img
          src={`https://cdn.artisant.io/api/files/${card.avatar.original}`}
        />
      )}

      <div className={s.card__caption}>
        <p className={s.card__creator}>
          <span>created by</span> {card.created_by.display_name}
        </p>

        <div>
          <h2 className={s.card__title}>{card.type}</h2>
          <h2 className={s.card__title}>{card.name}</h2>
        </div>
      </div>
    </div>
    <div className={s.card__info}>
      <div className={s.card__counter}>
        <span>available</span> {card.quantity_available} of {card.quantity}
      </div>
      <div className={s.card__price}>
        <span>price</span> {card.initial_price} ETH
      </div>
    </div>
  </section>
);

export default Card;
