import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    default: null,
  },
  author: {
    type: String,
    default: null,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  technologies: {
    type: String,
    default: null,
  },
  repository: {
    type: String,
    default: null,
  },
});

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
