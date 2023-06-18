const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema({
  totalCount: {
    type: Number,
    default: 0,
  },
});

visitorSchema.methods.incrementCount = function () {
  this.totalCount++;
  return this.save();
};

const VisitorModel = mongoose.model("visitors", visitorSchema);

module.exports = VisitorModel;
