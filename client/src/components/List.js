import React from "react";
import "boxicons";

const obj = [
  { name: "Savings", color: "#f9c74f" },
  { name: "Investment", color: "#f9c74f" },
  { name: "Expense", color: "rgb(54,162,235)" },
];

const List = () => {
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>
      {obj.map((value, index) => {
        return <Transaction key={index} category={value} />;
      })}
    </div>
  );
};

export default List;

const Transaction = ({ category }) => {
  if (!category) return null;
  return (
    <div
      className="item flex  justify-between items-center bg-gray-50 py-2 rounded-r"
      style={{ borderRight: `8px solid ${category.color}` }}
    >
      <button className="px-3 hover:scale-125 flex items-center">
        <box-icon name="trash" color={category.color ?? "black"}></box-icon>
      </button>
      <span className="block pr-8">{category.name}</span>
    </div>
  );
};
