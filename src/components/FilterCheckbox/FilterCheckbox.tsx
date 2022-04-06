import React from "react";
import s from "./FilterCheckbox.module.scss";

type FilterProprs = {
  handleCheckboxChange: () => void;
  showAvailableCards: boolean;
};

function FilterCheckbox({
  handleCheckboxChange,
  showAvailableCards,
}: FilterProprs) {
  return (
    <div className={s.filterCheckbox}>
      <input
        type="checkbox"
        id="switch"
        className={s.filterCheckbox__tongle}
        checked={showAvailableCards}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="switch" className={s.filterCheckbox__label} />
      <p className={s.filterCheckbox__text}>
        Показать карточки, которые есть в наличии
      </p>
    </div>
  );
}

export default FilterCheckbox;
