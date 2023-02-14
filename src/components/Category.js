import React from "react";

function Category({ category, checkbox, setCheckbox }) {
  return (
    <>
      <div
        className={`flex justify-center items-center flex-col bg-white p-4  w-1/2 shadow`}
        onClick={() => setCheckbox(category)}
      >
        <input
          type="radio"
          className={` ${category.toLowerCase()}`}
          name={"category"}
          value={category}
          onChange={(event) => setCheckbox(event.target.value)}
          checked={checkbox === category}
          id={category}
        />
        <span className={`buble ${category.toLowerCase()}`}></span>
        <label htmlFor={category}>{category}</label>
      </div>
    </>
  );
}

export default Category;
