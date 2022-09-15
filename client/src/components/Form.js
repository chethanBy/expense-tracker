import React from "react";
import { useForm } from "react-hook-form";
import { apiSlice as api } from "../store/apiSlice";
import List from "./List";

const Form = () => {
  // call register function where you want to extract data
  // call handleSubmit on form onSubmit witha function as parameter
  const { register, handleSubmit, resetField } = useForm();
  // since we r using mutatuion hook we will get action addTransaction we specified in createSlice mutation
  const [addTransaction] = api.useAddTransactionMutation();

  const onSubmit = async (data) => {
    if (!data) return {};
    // use unwrap() for raw response
    addTransaction(data).unwrap();
    resetField("name");
    resetField("amount");
  };

  return (
    <div className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transaction</h1>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <div className="input-group">
            <input
              type="text"
              placeholder="Salary, HouseRent, SIP"
              className="form-input"
              {...register("name")}
            />
          </div>
          <select className="form-input" {...register("type")}>
            <option value="Investment" defaultValue>
              Investment
            </option>
            <option value="Expense" defaultValue>
              Expense
            </option>
            <option value="Savings" defaultValue>
              Savings
            </option>
          </select>
          <div className="input-group">
            <input
              type="text"
              placeholder="Amount"
              className="form-input"
              {...register("amount")}
            />
          </div>
          <div className="submit-btn">
            <button className="border py-2 text-white bg-indigo-500 w-full hover:bg-indigo-600">
              Make Transaction
            </button>
          </div>
        </div>
      </form>
      <List></List>
    </div>
  );
};

export default Form;
