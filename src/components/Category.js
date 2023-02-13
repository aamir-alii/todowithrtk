import React from "react";

function Category({ category, checkbox, setCheckbox }) {
  return (
    <>
      <div
        className={`flex justify-center items-center flex-col bg-white p-4  w-1/2 shadow-${category.toLowerCase()}`}
      >
        <input
          type="radio"
          class={`${category.toLowerCase()}`}
          name={"category"}
          value={category}
          onChange={(event) => setCheckbox(event.target.value)}
          checked={checkbox === category}
        />
        <h4>{category}</h4>
      </div>
    </>
  );
}

export default Category;
