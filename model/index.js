import mongoose from "mongoose";

const course = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  videos: {
    type: Number,
    require: true,
  },
});

export default mongoose.model("courses", course);
