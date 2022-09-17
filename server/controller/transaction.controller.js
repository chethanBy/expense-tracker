const model = require("../models/model");

// post: /api/transaction
const create_Transaction = async (req, res) => {
  try {
    if (!req.body) return res.status(400).json("Need to enter data");
    const { name, type, amount } = req.body;

    const create = new model.Transaction({
      name,
      type,
      amount,
    });
    await create.save();
    return res.status(200).json({ msg: "ok" });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: "Error in create-transactions controller",
    });
  }
};

// delete: /api/transaction
const delete_Transaction = async (req, res) => {
  try {
    if (!req.body) return res.status(400).json("send Data to store");

    await model.Transaction.deleteOne(req.body);
    return res.status(200).json("deleted entry");
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: "Error while deleting",
    });
  }
};

// get: /api/transaction
const get_Transaction = async (req, res) => {
  try {
    let data = await model.Transaction.find({});
    return res.status(200).json({ msg: "ok" });
  } catch (error) {
    return res
      .status(400)
      .error({ error: true, message: "Error while getting transaction" });
  }
};

//  get: http://localhost:8080/api/labels
async function get_Labels(req, res) {
  model.Transaction.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "type",
        foreignField: "type",
        as: "categories_info",
      },
    },
    {
      $unwind: "$categories_info",
    },
  ])
    .then((result) => {
      let data = result.map((v) =>
        Object.assign(
          {},
          {
            _id: v._id,
            name: v.name,
            type: v.type,
            amount: v.amount,
            color: v.categories_info["color"],
          }
        )
      );
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(400).json("Looup Collection Error");
    });
}

module.exports = {
  create_Transaction,
  delete_Transaction,
  get_Transaction,
  get_Labels,
};
