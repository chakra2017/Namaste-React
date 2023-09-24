import ItemList from "./ItemsList";
import { useState } from "react";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  console.log(data);

  const handleclick = () => {
    //setShowItems(!showItems);
    setShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-4 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleclick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="text-blue-700 "> expand</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
