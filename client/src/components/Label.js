import React from "react";
import { apiSlice as api, useGetCategoriesQuery } from "../store/apiSlice";

const obj = [
  { type: "Savings", color: "#f9c74f", percent: 45 },
  { type: "Investment", color: "#f9c74f", percent: 20 },
  { type: "Expense", color: "rgb(54,162,235)", percent: 10 },
];

const Label = () => {
  // using redux jook provided by createApi.
  const { data, isFetching, isError, isSuccess } = useGetCategoriesQuery();

  return (
    <>
      {obj.map((value, index) => {
        return <LabelComponent key={index} data={value} />;
      })}
    </>
  );
};

export default Label;

const LabelComponent = ({ data }) => {
  return (
    <div className="labels flex justify-between">
      <div className="flex gap-2">
        <div
          className="w-2 h-2 rounded py-3"
          // using in a react component so camelcase
          style={{ background: data.color ?? "#f9c74f" }}
        ></div>
        <h3>{data.type ?? ""}</h3>
      </div>
      <div className="flex gap-2">
        <h3 className="font-bold">{data.percent}%</h3>
      </div>
    </div>
  );
};
