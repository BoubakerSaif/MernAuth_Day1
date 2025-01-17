import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  photo: {
    type: String,
    default:
      "https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg",
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
