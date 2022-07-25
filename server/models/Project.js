const mongoose = require("mongoose");
const Client = require("./Client");
const Schema = mongoose.Schema;
const ProjectSchema = new Schema({
  name: { type: String },
  description: { type: String },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Client,
  },
});

module.exports = mongoose.model("Project", ProjectSchema);
