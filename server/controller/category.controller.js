const model = require("../models/model");

// post /api/categories
exports.create_Categories = async (req, res) => {
  try {
    const Create = new model.Category({
      type: "Expense",
      color: "rgb(54,162,235)", //dark
    });
    await Create.save();
    return res.status(200).json("get request from categories");
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: true,
      message: "Error in creating categories",
    });
  }
};

// get /api/categories
exports.get_Categories = async (req, res) => {
  try {
    const data = await model.Category.find({});
    let filter = await data.map((v) =>
      Object.assign({}, { type: v.type, color: v.color })
    );
    return res.status(200).json({ msg: "ok" });
  } catch (error) {
    return res.status(400).json({
      error: true,
      message: "Error in getting categories",
    });
  }
};
