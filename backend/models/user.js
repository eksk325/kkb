const mongoose = require("mongoose");
const crypto = require("crypto");
const uuid = require("uuid");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 32,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    encrypt_password: {
      type: String,
      required: true,
    },
    salt: String,
    currentBalance: {
      type: mongoose.Decimal128,
      default: 0.0,
    },
    categoryList: [
      {
        type: String,
      },
    ],
    fixedIncome: [
      {
        title: String,
        amount: Number,
      },
    ],
    fixedExpenses: [
      {
        title: String,
        amount: Number,
      },
    ],
    moneyRecords: [
      {
        date: Date,
        amount: Number,
        category: String,
        extraText: String,
        income: {
          type: Boolean,
          default: true,
        },
      },
    ],
  },
  { timestamps: true }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = uuid.v1();
    this.encrypt_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  authenticate: function (plainPassword) {
    return this.securePassword(plainPassword) === this.encrypt_password;
  },

  securePassword: function (plainPassword) {
    // If the password contains nothing...?
    if (!plainPassword) return "";

    // Returning the encrypted version of the password that was entered by the user to compare with the one in the database
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(plainPassword)
        .digest("hex");
    } catch (err) {
      return err;
    }
  },
};

module.exports = mongoose.model("User", userSchema);
