const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Object, Array, Number, Boolean, String;

const ProductSchema = new Schema({
  name: {
    type: String,
    minlength: [3, "Name Should be greater than or equal to 3 char"],
    maxlength: 50,
    required: true,
  },
  price: { // 100
    type: Number,
    validate: {
      validator: function (v) { // 101
        return v % 2 === 0
      },
      message: (props) => `${props.value} is not a even number!`,
    },
  },

  category: String,
  currency: { type: String, default: "pkr" },
  discount: {
    type: Number,
    default: 0,
    max: [100, "Maximum discount allowed is 100"],
  },
  discountedPrice: Number,
});

ProductSchema.methods.getPrice = function () {
  let newPrice = this.price;
  if (this.discount) {
    newPrice -= this.discount;
  }

  return newPrice;
};

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = ProductModel;
