import React from "react";
import { apiSlice as api } from "../store/apiSlice";
import { getLabels } from "../helper/helper";

const Label = () => {
  // using redux jook provided by createApi.
  const { data, isFetching, isError, isSuccess } = api.useGetLabelsQuery();

  let Transactions;
  if (isFetching) {
    Transactions = <div>Fetching</div>;
  } else if (isSuccess) {
    Transactions = getLabels(data).map((value, index) => {
      return <LabelComponent key={index} data={value} />;
    });
  } else if (isError) {
    Transactions = <div>Error</div>;
  }
  return <>{Transactions} </>;
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
        <h3 className="font-bold">
          {data.percent ? Math.round(data.percent) : 0}%
        </h3>
      </div>
    </div>
  );
};
