const { Router } = require("express");
const VisitorModel = require("../models/visitor.model");

const visitorRoutes = Router();

visitorRoutes.get("/", (req, res) => {
  VisitorModel.findOne()
    .then(visitor => {
      if (visitor) {
        return visitor.incrementCount();
      } else {
        return VisitorModel.create({ totalCount: 1 });
      }
    })
    .then(updatedVisitor => {
    //   console.log("Updated count:", updatedVisitor.totalCount);
      res.status(200).json({ totalCount: updatedVisitor.totalCount });
    })
    .catch(error => {
    //   console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
});

module.exports = visitorRoutes;
